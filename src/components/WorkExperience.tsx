import { Border, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { default as Image } from 'next/image';

const experience = [
  {
    title: 'The Big Rich Group | Infrastructure Manager.',
    date: 'Feb 2023 - Present',
    description: [
      'Supervise and mentor a team of infrastructure engineers and administrators. Foster professional development and manage team performance.',
      'Oversee the deployment, configuration, and maintenance of servers, storage systems, and networking components to ensure high availability and performance.',
      'Maintain comprehensive documentation of infrastructure configurations, procedures, and changes for operational consistency and knowledge sharing.',
      'Spearheaded the migration of over 50 servers to a cloud-based infrastructure, enhancing system scalability and reliability while reducing operational costs by 30%.',
      'Spearheaded the migration of 20+ servers to a cloud-based infrastructure improving system uptime to 99.9% through the implementation of robust monitoring and automation tools.',
    ],
    image: { url: '/work/tbrg.jpeg', height: 96, width: 96, className: '' },
  },
  {
    title: 'The Big Rich Group | Head of IT Infrastructure.',
    date: 'July 2022 - Feb 2023',
    description: [
      'Develop and implement the IT infrastructure strategy aligned with organizational goals. Plan and manage the budget for infrastructure projects and operational expenses.',
      'Designed and implemented a robust IT infrastructure strategy, resulting in a 35% increase in system uptime and a 20% reduction in operational costs over a two-year span using virtualization technologies and cloud solutions.',
      'Directed the overhaul of the company`s IT infrastructure, including the deployment of a new cloud-based system that improved data accessibility and security, leading to a 35% reduction in operational costs and a 50% increase in overall system uptime.',
    ],
    image: { url: '/work/tbrg.jpeg', height: 96, width: 96, className: '' },
  },
  {
    title: 'The Big Rich Group | System Administrator.',
    date: 'Apr 2022 - July 2022',
    description: [
      'Implemented and maintained server with zero downtimes through consistent performance monitoring and troubleshooting.',
      'Diagnosed and alleviated performance issues by deploying automated alerts and diagnostic scripts, thereby enhancing system reliability by 15%.',
      'Led successful system upgrades and migrations using best practices, achieving a 20% increase in system performance through streamlined software updates.',
      'Implemented IT compliance methodologies across system operations ensuring adherence to industry standards and organizational policies.',
    ],
    image: { url: '/work/tbrg.jpeg', height: 96, width: 96, className: '' },
  },
  {
    title: 'The Big Rich Group | Junior System Administrator.',
    date: 'May 2021 - Apr 2022',
    description: [
      'Managed hardware and software maintenance schedules, implementing automated updates to ensure optimal system performance consistently.',
      'Developed and maintained documentation for access control processes, ensuring compliance with policies and simplifying audits.',
      'Configured and upgraded system software, ensuring seamless operations and compliance with protocols.',
      'Conducted routine system monitoring and performed necessary upgrades to vulnerabilities, boosting system efficiency by 15%.',
      'Utilizing tools such as VPNs, firewalls, and intrusion detection systems (IDS).',
    ],
    image: { url: '/work/tbrg.jpeg', height: 96, width: 96, className: '' },
  },
  {
    title: 'Mercu Buana University | Laboratory Assistant.',
    date: 'Jan 2019 - Jan 2021',
    description: [
      'Provide on-site and remote technical support for hardware, software, and network issues within the laboratory environment.',
      'Ensured seamless functionality of IT equipment by performing routine maintenance and troubleshooting system issues promptly.',
      'Diagnose and resolve technical issues related to laboratory systems and equipment, ensuring minimal disruption to laboratory operations.',
      'Diagnosed and promptly resolved technical malfunctions related to laboratory systems and devices, minimizing disruptions and maintaining operational continuity.',
    ],
    image: { url: '/work/umb.jpeg', height: 96, width: 96, className: 'bg-white' },
  },
];

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole key={index} title={item.title} date={item.date} image={item.image}>
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({ children, title, date, image }: { children: React.ReactNode; title: string; date?: string; image: { url: string; className: string; height: number; width: number } }) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">{date}</p>
        <div className={clsx('flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto', image.className)}>
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{
              width: image.width || 'auto',
              height: image.height || 'auto',
            }}
          />
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div className={clsx('flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden', image.className)}>
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || 'auto',
                height: image.height || 'auto',
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">{title}</p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
