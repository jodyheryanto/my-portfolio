'use client';
import { AnimationControls, motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import { sleep } from '../lib/sleep';

const list = {
  visible: {
    display: 'flex',
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
  hidden: {
    display: 'none',
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};

export default function AnimatedTitle() {
  const cloud = useAnimationControls();
  const system = useAnimationControls();
  const devops = useAnimationControls();
  const web = useAnimationControls();

  useEffect(() => {
    let hasCanceled_ = false;
    const animationActions = [
      { controller: web as AnimationControls, value: 'visible' },
      { controller: cloud, value: 'visible' },
      { controller: cloud, value: 1000 },
      { controller: cloud, value: 'hidden' },
      { controller: system, value: 'visible' },
      { controller: system, value: 1000 },
      { controller: system, value: 'hidden' },
      { controller: devops, value: 'visible' },
      { controller: devops, value: 1000 },
      { controller: devops, value: 'hidden' },
    ];

    const animateWords = async () => {
      for (const action of animationActions) {
        if (hasCanceled_) {
          return;
        }
        if (typeof action.value === 'number') {
          await sleep(action.value);
        } else if (!hasCanceled_) {
          await action.controller.start(action.value);
        }
      }
      animateWords();
    };
    animateWords();
    return () => {
      hasCanceled_ = true;
    };
  }, [cloud, system, devops, web]);

  return (
    <div className="flex text-blue-100">
      <motion.div variants={list} initial="hidden" animate={cloud}>
        <WriteWord word="Cloud" />
      </motion.div>
      <motion.div variants={list} initial="hidden" animate={system}>
        <WriteWord word="System" />
      </motion.div>
      <motion.div variants={list} initial="hidden" animate={devops}>
        <WriteWord word="DevOps" />
      </motion.div>
      <div className="text-transparent">a</div>
      <motion.div variants={list} initial="hidden" animate={web}>
        <WriteWord word="Engineer" />
      </motion.div>
    </div>
  );
}

const item = {
  hidden: { display: 'none', x: 0 },
  visible: { display: 'flex', x: 0 },
};

function WriteWord({ word, ...props }: React.ComponentPropsWithoutRef<typeof motion.div> & { word: string }) {
  return word.split('').map((letter, index) => (
    <motion.div key={index} variants={item} {...props}>
      {letter}
    </motion.div>
  ));
}
