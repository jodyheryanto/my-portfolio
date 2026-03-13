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
            I&apos;m an <span className="text-about_me_green">IT Project Manager</span> specialized in <span className="text-about_me_green">Infrastructure Design and Operational Leadership</span>
          </div>
        }
      />
      <Stars id="about-me" />
      <div className="@container">
        <div className="flex flex-col gap-8 mt-24 @lg:flex-row justify-between">
          <div className="max-w-xl flex-auto">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">Jody</h3>
            <p className="text-base leading-7 text-about_me_green">IT Project Manager & Infrastructure Expert</p>
            <p className="mt-4 text-lg text-gray-500">I specialize in aligning technology solutions with business objectives, ensuring that every project is delivered with clarity, efficiency, and long-term value.</p>
            <p className="mt-4 text-lg text-gray-500">As an experienced educator and professional instructor, my ability to bridge high-level strategy with technical understanding allows me to lead with both vision and precision.</p>
          </div>
          <div className="flex-none mx-auto">
            <Image className="rounded-full object-cover" src="/me.jpg" alt="" height={208} width={208} />
          </div>
        </div>
        <div className="@container">
          <div className="flex gap-5 mt-16 flex-col @3xl:flex-row justify-between">
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
                      <p className="text-white">Indonesia</p> - <p className="text-gray-500">Native</p>
                    </div>
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">English</p> - <p className="text-gray-500">Professional</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <Socials />
            </div>
            <div className="flex flex-col gap-4">
              <FadeIn
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <GlowCard className="hover:shadow-about_me_green/90" glowClassName="from-[#6bc072] to-[#6bc072]">
                  <div className="flex flex-col gap-8 @lg:flex-row justify-between">
                    <div className="flex-none mx-auto self-center">
                      <Image className="rounded-2xl object-fill bg-white" src="/budiluhur.png" alt="" width={144} height={144} />
                    </div>
                    <div className="max-w-xl flex-auto drop-shadow-md">
                      <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">Master of Computer Science</h3>
                      <p className="text-base leading-7 text-about_me_green">Budi Luhur University</p>
                      <p className="text-base leading-7 text-gray-500">Expected Graduation: 2027</p>
                      <p className="text-base leading-7 text-gray-500">Current GPA: 3.94</p>
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
                  <div className="flex flex-col gap-8 @lg:flex-row justify-between">
                    <div className="flex-none mx-auto self-center">
                      <Image className="rounded-2xl object-fill bg-white" src="/umb.jpeg" alt="" width={144} height={144} />
                    </div>
                    <div className="max-w-xl flex-auto drop-shadow-md">
                      <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">Bachelor of Computer Science</h3>
                      <p className="text-base leading-7 text-about_me_green">Mercu Buana University</p>
                      <p className="text-base leading-7 text-gray-500">Graduated in 2021</p>
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
