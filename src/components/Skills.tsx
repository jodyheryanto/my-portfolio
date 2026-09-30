'use client';
import { FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const skills = [
  { skill: 'Strategy', buttonClassNames: 'rounded-tl-full' },
  { skill: 'Infra', buttonClassNames: 'rounded-tr-full' },
  { skill: 'AI', buttonClassNames: 'rounded-bl-full' },
  { skill: 'Education', buttonClassNames: 'rounded-br-full' },
];

const skillsLogos = {
  ['Strategy' as string]: [
    { name: 'IT Project Management', image: '/logos/project-management.jpg' },
    { name: 'IT Governance (TOGAF)', image: '/logos/it-governance.png' },
    { name: 'Enterprise Architecture', image: '/logos/togaf.png' },
    { name: 'Risk Management', image: '/logos/risk.png' },
  ],
  ['Infra' as string]: [
    { name: 'LXC Proxmox', image: '/logos/proxmox.png' },
    { name: 'Kubernetes', image: '/logos/kubernetes.png' },
    { name: 'Alibaba Cloud', image: '/logos/alibaba.png' },
    { name: 'AWS', image: '/logos/aws.png' },
    { name: 'GCP', image: '/logos/gcp.png' },
    { name: 'Docker', image: '/logos/docker-logo.png' },
    { name: 'Gitlab CI/CD', image: '/logos/gitlab-cicd.png' },
  ],
  ['AI' as string]: [
    { name: 'Machine Learning', image: '' },
    { name: 'MLOps', image: '' },
    { name: 'LLM Deployment', image: '' },
    { name: 'Apache Airflow', image: '' },
    { name: 'NLP & Sentiment', image: '' },
    { name: 'Explainable AI', image: '' },
  ],
  ['Education' as string]: [
    { name: 'Instructional Design', image: '/logos/instructional-design.jpg' },
    { name: 'Public Speaking', image: '/logos/public-speaking.jpg' },
    { name: 'Training & Development', image: '/logos/training.png' },
    { name: 'Coaching', image: '/logos/coaching.jpg' },
  ],
};

const skillsTitles = {
  ['Strategy' as string]: 'Strategy & Management',
  ['Infra' as string]: 'Infrastructure & Cloud',
  ['AI' as string]: 'Applied AI & MLOps',
  ['Education' as string]: 'Education & Instruction',
};

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState('Strategy');
  const controls = useAnimationControls();

  const handleChangeSkill: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    const skill = e.currentTarget.textContent;
    if (skill === activeSkill) return;
    if (skill) setActiveSkill(skill);
    await controls.start('hidden');
    await controls.start('visible');
  };

  return (
    <div className="@container">
      <FadeInStagger animate={controls} className="relative z-10 grid grid-cols-3 @lg:grid-cols-4 mt-20 @2xl:grid-cols-5 @3xl:grid-cols-6 @4xl:grid-cols-8" faster>
        <div className="row-start-4 col-span-3 h-[115px] flex items-center justify-center @2xl:col-start-4 @2xl:row-start-1 @3xl:col-start-4 @4xl:col-start-4 @4xl:col-span-5 @3xl:justify-start @2xl:h-[40px] @3xl:mt-auto">
          <h2 className="text-center text-3xl font-semibold @2xl:ml-[32px]">{skillsTitles[activeSkill]}</h2>
        </div>
        <div className="skills-picker w-[325px] m-[10px] h-[325px] col-span-3 row-span-3 place-self-center isolate">
          <div className="rounded-full inset-6 absolute grid grid-cols-2 p-2 gap-2 rotate-45">
            {skills.map((skill) => (
              <button
                onClick={handleChangeSkill}
                key={skill.skill}
                className={clsx('flex items-center justify-center rounded-[500px] skills-buttons', skill.buttonClassNames, activeSkill === skill.skill && 'skills-buttons-active')}
              >
                <p className={clsx('text-2xl text-white font-semibold tracking-wide whitespace-nowrap -rotate-45')}>
                  {skill.skill}
                  <span className={clsx('transition-all duration-300 -z-10 bg-[#525df3] absolute bottom-0 left-0 right-0 w-full', activeSkill === skill.skill ? 'h-[18px]' : 'h-[2px]')}></span>
                </p>
              </button>
            ))}
          </div>
        </div>
        {skillsLogos[activeSkill].map((skill, index) => {
          if (!skill.name) return <div key={index} className="h-[115px] w-24" />;

          return (
            <FadeIn key={skill.name} className="h-[115px] w-24 place-self-center flex flex-col">
              <div className="mt-auto">
                {skill.image ? (
                  <Image
                    src={skill.image}
                    className="object-contain rounded-md m-auto"
                    alt=""
                    height={64}
                    width={64}
                    style={{
                      width: 64,
                      height: 64,
                    }}
                  />
                ) : (
                  <div aria-hidden="true" className="m-auto flex h-16 w-16 items-center justify-center rounded-md border border-[#525df3]/40 bg-[#525df3]/15 text-lg font-bold text-white">
                    {skill.name
                      .split(/[\s&]+/)
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join('')}
                  </div>
                )}
                <h3 className="text-sm font-semibold tracking-tight text-[#525df3] text-center bg-white rounded-full w-min px-2 m-2 mx-auto">{skill.name}</h3>
              </div>
            </FadeIn>
          );
        })}
      </FadeInStagger>
    </div>
  );
}
