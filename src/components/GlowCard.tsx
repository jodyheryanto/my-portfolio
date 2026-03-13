'use client';
import clsx from 'clsx';
import { motion, useMotionTemplate, useMotionValue, useTransform, type MotionValue } from 'framer-motion';
import { useEffect, useLayoutEffect, useRef } from 'react';

function Glow({ mouseX, mouseY, width, className }: { mouseX: MotionValue<number>; mouseY: MotionValue<number>; width: MotionValue<number>; className: string }) {
  let maskImage = useMotionTemplate`radial-gradient(${width.get() * 0.7}px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <motion.div className={clsx('absolute inset-0 bg-gradient-to-r blur-lg opacity-0 transition duration-700 group-hover:opacity-20', className)} style={style} />
    </div>
  );
}

export default function GlowCard({ children, className = '', glowClassName = '' }: { children: React.ReactNode; className?: string; glowClassName: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const width = useMotionValue(600);
  const height = useMotionValue(200);
  const rotateX = useTransform(mouseY, [0, height.get()], [-1, 1]);
  const rotateY = useTransform(mouseX, [0, width.get()], [1.5, -1.5]);

  const containerRef = useRef<null | HTMLDivElement>(null);
  const rectRef = useRef<{ left: number; top: number } | null>(null);

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!rectRef.current) return;
    mouseX.set(e.clientX - rectRef.current.left);
    mouseY.set(e.clientY - rectRef.current.top);
  };

  const onMouseEnter: React.MouseEventHandler<HTMLDivElement> = (e) => {
    rectRef.current = e.currentTarget.getBoundingClientRect();
  };

  const onMouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    rectRef.current = null;
    rotateX.set(0);
    rotateY.set(0);
  };

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    width.set(containerRef.current.clientWidth);
    height.set(containerRef.current.clientHeight);
  });

  useEffect(() => {
    rotateX.set(0);
    rotateY.set(0);
  });

  const transform = useMotionTemplate`perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const style = {
    transform,
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      style={style}
      className={clsx(
        'group overflow-hidden p-6 sm:p-8 lg:p-12 relative z-10 rounded-2xl border border-gray-500/20 bg-gray-900/20 transition-all glow-card-transition-duration hover:shadow-md select-none will-change-transform',
        className
      )}
    >
      <Glow mouseX={mouseX} mouseY={mouseY} width={width} className={glowClassName} />
      {children}
    </motion.div>
  );
}
