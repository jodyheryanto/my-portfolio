import { FadeIn, GlowCard, SectionHeader, Socials, Stars } from '@/components';
import { Accounts } from '@/icons';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className="relative z-10">
      <SectionHeader
        icon={
          <>
            <Accounts height="28" width="28" />
            <span className="bg-about_me_green icon-blur absolute inset-0 -z-10"></span>
          </>
        }
        title="About Me"
        description={
          <div>
            <span className="text-about_me_green">Infrastructure</span> by background, <span className="text-about_me_green">applied AI research</span> by focus, <span className="text-about_me_green">teaching</span> by practice
          </div>
        }
      />
      {/* <Stars id="about-me" /> */}
      <div className="@container">
        <div className="flex flex-col gap-8 mt-24 @lg:flex-row justify-between">
          <div className="max-w-xl flex-auto">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">Jody</h3>
            <p className="text-base leading-7 text-about_me_green">IT & AI Consultant · Applied AI & MLOps Researcher · BNSP Trainer & Assessor</p>
            <p className="mt-4 text-lg text-gray-400">
              I started as a laboratory assistant, grew from junior system administrator to Head of IT Infrastructure, and led the migration of 50+ production servers to the cloud. Today I consult on
              infrastructure and AI deployment, and I research how to run machine learning systems efficiently, from LLMs on Proxmox VE to explainable models for operational data.
            </p>
            <p className="mt-4 text-lg text-gray-400">
              As a BNSP-certified trainer and competency assessor, I have trained teams at PLN, Bank Indonesia, the Ministry of Transportation and 10+ other organizations. I also founded LSPKu, a
              certification operations platform for Indonesian LSPs.
            </p>
          </div>
          <div className="flex-none mx-auto">
            <Image className="rounded-full object-cover ring-4 ring-about_me_green/30" src="/me.jpg" alt="Portrait of Jody" height={224} width={224} priority />
          </div>
        </div>
        <div className="@container">
          <div className="grid gap-8 mt-16 grid-cols-1 @3xl:grid-cols-2 items-start">
            <div>
              <FadeIn
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h4 className="text-about_me_green mb-1">| Languages</h4>
                <div className="border-y py-2 border-gray-500/30 mb-6">
                  <div className="flex flex-wrap gap-x-6">
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">Indonesian</p> - <p className="text-gray-500">Native · UKBI 662 (Sangat Unggul)</p>
                    </div>
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">English</p> - <p className="text-gray-500">Professional · EF SET 60/100 (B2)</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <Socials />
            </div>
            <div className="flex flex-col gap-4 min-w-0">
              <FadeIn
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <GlowCard className="hover:shadow-about_me_green/90" glowClassName="from-[#6bc072] to-[#6bc072]">
                  <div className="flex items-center gap-6">
                    <div className="flex-none">
                      <Image className="rounded-2xl object-fill bg-white" src="/budiluhur.png" alt="Universitas Budi Luhur logo" width={88} height={88} />
                    </div>
                    <div className="min-w-0 flex-1 drop-shadow-md">
                      <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">Master of Computer Science</h3>
                      <p className="text-base leading-7 text-about_me_green">Budi Luhur University</p>
                      <p className="text-base leading-7 text-gray-500">Expected graduation: Aug 2027</p>
                      <p className="text-base leading-7 text-gray-500">Current GPA: 3.97</p>
                    </div>
                  </div>
                </GlowCard>
              </FadeIn>
              <FadeIn
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <GlowCard className="hover:shadow-about_me_green/90" glowClassName="from-[#6bc072] to-[#6bc072]">
                  <div className="flex items-center gap-6">
                    <div className="flex-none">
                      <Image className="rounded-2xl object-fill bg-white" src="/umb.jpeg" alt="Universitas Mercu Buana logo" width={88} height={88} />
                    </div>
                    <div className="min-w-0 flex-1 drop-shadow-md">
                      <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">Bachelor of Computer Science</h3>
                      <p className="text-base leading-7 text-about_me_green">Mercu Buana University</p>
                      <p className="text-base leading-7 text-gray-500">Graduated Feb 2021</p>
                      <p className="text-base leading-7 text-gray-500">GPA: 3.93</p>
                    </div>
                  </div>
                </GlowCard>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
