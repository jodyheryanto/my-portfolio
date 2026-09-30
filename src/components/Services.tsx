'use client';
import { FadeIn, FadeInStagger, GlowCard } from '@/components';
import Image from 'next/image';

const services = [
  {
    title: 'IT & Cloud Consulting',
    summary: 'Assessment, architecture and migration for teams that need infrastructure they can trust.',
    points: ['Infrastructure assessment and roadmap', 'Cloud and on-premise migration', 'CI/CD, monitoring and on-call practices'],
    stack: 'AWS · Alibaba Cloud · Proxmox VE · Nutanix · Kubernetes',
    accent: 'text-about_me_green',
    glow: 'from-[#7ee787] to-[#7ee787]',
    shadow: 'hover:shadow-about_me_green/60',
  },
  {
    title: 'AI & MLOps',
    summary: 'Take models from a notebook to a service that stays up, with evidence from published research.',
    points: ['LLM deployment on-premise and in the cloud', 'Model serving, monitoring and evaluation', 'Data pipelines with Apache Airflow'],
    stack: 'Python · Airflow · Docker · LXC · Prometheus',
    accent: 'text-skills_purple',
    glow: 'from-[#939aff] to-[#939aff]',
    shadow: 'hover:shadow-skills_purple/60',
  },
  {
    title: 'Corporate & BNSP Training',
    summary: '15+ programs delivered for enterprises, universities and government agencies.',
    points: ['Data Analyst and Data Science (BNSP)', 'AI and machine learning fundamentals', 'IT governance and project management'],
    stack: 'PLN · Bank Indonesia · Kemenhub · Pelindo Group · UNS',
    accent: 'text-work_experience_orange',
    glow: 'from-[#ffa28b] to-[#ffa28b]',
    shadow: 'hover:shadow-work_experience_orange/60',
  },
];

export default function Services() {
  return (
    <div className="relative z-10 mt-16 @container">
      <FadeInStagger className="grid grid-cols-1 gap-6 @3xl:grid-cols-3">
        {services.map((s) => (
          <FadeIn key={s.title} className="h-full">
            <GlowCard className={`h-full ${s.shadow}`} glowClassName={s.glow}>
              <div className="flex h-full flex-col gap-4">
                <h3 className={`text-xl font-semibold ${s.accent}`}>{s.title}</h3>
                <p className="text-gray-400">{s.summary}</p>
                <ul className="list-disc space-y-1 pl-5 text-gray-500 marker:text-gray-500/60">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p className="mt-auto border-t border-gray-500/20 pt-4 text-xs uppercase tracking-widest text-gray-500">{s.stack}</p>
              </div>
            </GlowCard>
          </FadeIn>
        ))}
      </FadeInStagger>

      <FadeIn className="mt-6">
        <GlowCard className="hover:shadow-my_work_yellow/60" glowClassName="from-[#ffdc8b] to-[#ffdc8b]">
          <div className="flex flex-col gap-4 @2xl:flex-row @2xl:items-center @2xl:justify-between">
            <div className="flex max-w-2xl items-start gap-5">
              <Image src="/work/lspku.png" alt="LSPKu logo" width={72} height={72} className="flex-none rounded-2xl" />
              <div>
              <p className="text-xs uppercase tracking-widest text-gray-500">Product I founded</p>
              <h3 className="mt-1 text-2xl font-semibold text-my_work_yellow">LSPKu</h3>
              <p className="mt-2 text-gray-400">
                A certification operations platform for Indonesian LSPs: OCR document onboarding, AI scheme recommendation and assessment scheduling in one portal.
              </p>
              </div>
            </div>
            <a
              href="https://lspku.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-my_work_yellow/60 px-5 py-2 font-semibold text-my_work_yellow transition hover:bg-my_work_yellow/10"
            >
              Visit lspku.com
            </a>
          </div>
        </GlowCard>
      </FadeIn>
    </div>
  );
}
