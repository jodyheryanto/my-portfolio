import { Border, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { default as Image } from 'next/image';

type Role = {
  title: string;
  date: string;
  description: string[];
  image?: { url: string; height: number; width: number; className: string };
};

const experience: Role[] = [
  {
    title: 'LSPKu | Founder',
    date: 'Aug 2025 - Present',
    description: [
      'Building a certification operations platform for Indonesian LSPs, covering candidate onboarding, scheme selection, assessment scheduling and certificate issuance.',
      'Developed OCR-based document onboarding and AI scheme recommendation to reduce manual data entry for LSP admins.',
      'Designed a multi-tenant, multi-role architecture (admin, assessor, candidate) on self-hosted infrastructure.',
    ],
    image: { url: '/work/lspku.png', height: 96, width: 96, className: 'bg-white' },
  },
  {
    title: 'LSP Teknologi Informatika Bisnis Digital | Competency Assessor (BNSP)',
    date: 'Jun 2026 - Present',
    description: [
      'BNSP-licensed competency assessor for IT certification schemes, including IT Quality Assurance.',
      'Assess candidates through portfolio review, observation and interviews in line with SKKNI and BNSP standards.',
    ],
    image: { url: '/work/lsp-tibd.png', height: 96, width: 96, className: 'bg-white' },
  },
  {
    title: 'PT Atlasfizl Meraki Inovasi | IT Consultant & Professional Instructor',
    date: 'Dec 2024 - Present',
    description: [
      'Deliver 15+ certification and corporate training programs in data analytics, data science, AI and IT for enterprises, universities and government, including PLN, Bank Indonesia, the Ministry of Transportation and Pelindo Group.',
      'Prepare professionals for BNSP certification schemes such as Data Analyst, Data Science, Programmer and Penetration Tester.',
      'Assess client IT environments and design infrastructure, cloud and security improvements aligned with business goals.',
      'Lead consulting engagements end to end, from requirements and architecture to deployment and handover.',
    ],
    image: { url: '/work/atlasfizl.jpeg', height: 96, width: 96, className: 'bg-white' },
  },
  {
    title: 'Alturian Group | Infrastructure Manager',
    date: 'Feb 2023 - Nov 2024',
    description: [
      "Led the group's infrastructure team, owning mentoring, performance reviews and hiring decisions.",
      'Managed 50+ production servers and led their migration to the cloud, cutting operating costs by 30%.',
      'Sustained 99.9% uptime by introducing Prometheus/Grafana monitoring, alerting and on-call automation.',
      'Owned infrastructure budgeting, vendor selection and capacity planning for the group.',
      'Established documentation, change management and on-call procedures adopted across the team.',
    ],
    image: { url: '/work/alturian.png', height: 96, width: 96, className: '' },
  },
  {
    title: 'Alturian Group | Head of IT Infrastructure',
    date: 'Jul 2022 - Feb 2023',
    description: [
      'Defined the IT infrastructure strategy and managed the infrastructure budget in line with company goals.',
      'Consolidated servers through virtualization and cloud services, reducing operating costs by 20%.',
      'Improved system availability from 95% to 99.9% by redesigning core infrastructure and backup processes.',
    ],
    image: { url: '/work/alturian.png', height: 96, width: 96, className: '' },
  },
  {
    title: 'Alturian Group | System Administrator',
    date: 'May 2021 - Jul 2022',
    description: [
      'Promoted from Junior System Administrator to System Administrator within 11 months.',
      'Built automated alerts and diagnostic scripts that shortened incident detection and troubleshooting.',
      'Managed VPNs, firewalls and intrusion detection systems, and documented access-control processes for audits.',
      'Planned and executed system upgrades and migrations with minimal service disruption.',
    ],
    image: { url: '/work/alturian.png', height: 96, width: 96, className: '' },
  },
  {
    title: 'Universitas Mercu Buana | Laboratory Assistant',
    date: 'Jan 2019 - Jan 2021',
    description: [
      'Provided on-site and remote support for hardware, software and network issues across computer laboratories.',
      'Performed routine maintenance to keep lab systems available during classes and exams.',
    ],
    image: { url: '/work/umb.jpeg', height: 96, width: 96, className: 'bg-white' },
  },
  {
    title: 'Lenna.ai | Full Stack Developer',
    date: 'Feb 2020 - Apr 2020',
    description: [
      'Developed a web application that monitors product reviews using sentiment analysis (positive, neutral, negative).',
      'Built the frontend and REST API backend for review aggregation and real-time sentiment dashboards.',
    ],
    image: { url: '/work/lenna.png', height: 96, width: 96, className: 'bg-white' },
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

function RoleLogo({ title, image, className }: { title: string; image?: Role['image']; className?: string }) {
  if (!image) {
    const initials = title
      .split('|')[0]
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0])
      .join('');
    return (
      <div className={clsx('flex h-24 w-24 flex-none items-center justify-center rounded-md border border-gray-500/30 bg-gray-900/60 text-2xl font-semibold text-work_experience_orange', className)}>
        {initials}
      </div>
    );
  }
  return (
    <div className={clsx('flex-none rounded-md overflow-hidden', image.className, className)}>
      <Image src={image.url} alt={`${title.split('|')[0].trim()} logo`} height={image.height} width={image.width} style={{ width: image.width || 'auto', height: image.height || 'auto' }} />
    </div>
  );
}

function WorkRole({ children, title, date, image }: { children: React.ReactNode; title: string; date?: string; image?: Role['image'] }) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">{date}</p>
        <RoleLogo title={title} image={image} className="self-center mx-4 mt-auto mb-auto" />
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <RoleLogo title={title} image={image} className="self-center ml-2 mr-4 @lg:hidden" />
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
