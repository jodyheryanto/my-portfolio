'use client';
import { Border, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { default as Image } from 'next/image';

const teachingExperience = [
  {
    title: 'Data Analyst Certification Training (BNSP)',
    organization: 'PT PLN (Persero)',
    date: 'Mar 2026',
    description: [
      'Instructed corporate professionals on end-to-end data analytics workflows, encompassing data cleaning (Power Query), visualization (Looker Studio), Python, and n8n automation.',
    ],
    image: { url: '/work/pln.png', height: 80, width: 80, className: 'bg-white p-1' },
  },
  {
    title: 'Data Science Certification Training (BNSP)',
    organization: 'PT Asuransi Tugu Pratama Indonesia Tbk',
    date: 'Dec 2025',
    description: [
      'Facilitated practical training on data processing and analytical modeling to support data-driven decision-making in the insurance sector.',
    ],
    image: { url: '/work/tugu.png', height: 80, width: 80, className: 'bg-white p-1' },
  },
  {
    title: 'Data Analysis Training',
    organization: 'Bank Indonesia Kediri & Generasi Baru Indonesia (GenBI)',
    date: 'Nov 2025',
    description: [
      'Delivered foundational and applied analytics training, including exploratory data analysis (EDA) using modern tools to accelerate digital talent capacity building.',
    ],
    image: { url: '/work/bi.png', height: 80, width: 80, className: 'bg-white p-1' },
  },
  {
    title: 'EITCA Artificial Intelligence (AI) Certification Training',
    organization: 'Universitas Lambung Mangkurat',
    date: 'Nov 2025',
    description: [
      'Taught AI and Machine Learning fundamentals, supervised/unsupervised learning, and Python-based AI modeling to university lecturers and academic staff.',
    ],
    image: { url: '/work/ulm.png', height: 80, width: 80, className: 'bg-white p-1' },
  },
  {
    title: 'Artificial Intelligence (AI) Management Training',
    organization: 'Ministry of Transportation (Kemenhub)',
    date: 'Nov 2025',
    description: [
      'Guided government officials from the Directorate of Transport Integration on leveraging AI capabilities to support smart and integrated national transportation systems.',
    ],
    image: { url: '/work/kemenhub.png', height: 80, width: 80, className: 'bg-white p-1' },
  },
  {
    title: 'IT Infrastructure Library Training',
    organization: 'PT Asuransi Jiwa Starinvestama',
    date: 'Oct 2025',
    description: [
      'Conducted hands-on training on enterprise IT infrastructure architecture and fundamental network/server configuration utilizing Cisco Packet Tracer.',
    ],
    image: { url: '/work/starinvestama.png', height: 80, width: 80, className: 'bg-white p-1' },
  },
  {
    title: 'Programmer Certification Training (BNSP)',
    organization: 'PT Solusi Teknologi Finansial',
    date: 'Oct 2025',
    description: [
      'Instructed intensive web development sessions covering Object-Oriented Programming (OOP), MVC architecture, and practical e-commerce application building.',
    ],
    image: { url: '/work/solusi-teknologi.png', height: 80, width: 80, className: 'bg-white p-1' },
  },
  {
    title: 'Enterprise Architecture Training (BNSP)',
    organization: 'Universitas Sebelas Maret (UNS)',
    date: 'Sep 2025',
    description: [
      'Aligned visions and laid the foundational knowledge for digital architecture integration and higher education transformation for the university\'s ICT directorate.',
    ],
    image: { url: '/work/uns.png', height: 80, width: 80, className: 'bg-white p-1' },
  },
  {
    title: 'Certified ISO/IEC 27001:2022 Lead Implementer Training',
    organization: 'PT Malifax Indonesia',
    date: 'Aug 2025',
    description: [
      'Led professional preparation sessions for ISO 27001 implementation, focusing on enterprise cybersecurity standards, readiness, and compliance.',
    ],
    image: { url: '/work/malifax.png', height: 80, width: 80, className: 'bg-white p-1' },
  },
  {
    title: 'Artificial Intelligence Training',
    organization: 'PT Integrasi Logistik Cipta Solusi (Pelindo Group)',
    date: 'Aug 2025',
    description: [
      'Co-facilitated a specialized training module in partnership with PT Expertindo Training, demonstrating how AI can revolutionize port operations and logistics workflows.',
    ],
    image: { url: '/work/ilcs.png', height: 80, width: 80, className: 'bg-white p-1' },
  },
  {
    title: 'IT Auditor Training',
    organization: 'Tenaga Ahli Teknologi Informatika Bisnis Digital',
    date: 'Feb 2025',
    description: [
      'Delivered comprehensive materials on IT auditing frameworks, compliance standards, and digital business information system evaluation.',
    ],
    image: { url: '/work/asosiari.png', height: 80, width: 80, className: 'bg-white p-1' },
  },
  {
    title: 'Advanced Microsoft Excel Instructor',
    organization: 'Jogja Smart Indotama',
    date: 'Feb 2025',
    description: [
      'Facilitated an intensive training course progressing from fundamental Excel functionalities to advanced data analysis. Equipped participants with practical skills to design interactive data dashboards.',
    ],
    image: { url: '/work/jsi.png', height: 80, width: 80, className: 'bg-white p-1' },
  },
];

export default function Teaching() {
  return (
    <div className="mt-24 text-gray-400 relative z-10 @container">
      <FadeInStagger>
        <div className="grid grid-cols-1 gap-12">
          {teachingExperience.map((item, index) => (
            <FadeIn key={index} className="flex group px-3">
              <div className="hidden @lg:flex @lg:flex-col mr-8 w-24 flex-shrink-0">
                <div className={clsx('rounded-xl overflow-hidden shadow-lg border border-gray-500/10 transition-transform group-hover:scale-105 duration-300 flex items-center justify-center h-24 w-24', item.image.className)}>
                  <Image src={item.image.url} alt="" height={item.image.height} width={item.image.width} className="object-contain" />
                </div>
                <p className="text-white text-[10px] font-bold mt-3 text-center opacity-40 group-hover:opacity-100 transition-opacity uppercase tracking-widest">{item.date}</p>
              </div>
              <Border className="flex-1 pb-10 group-last:border-none relative">
                <div className="flex flex-col @lg:flex-row @lg:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{item.title}</h3>
                    <p className="text-blue-400/80 font-medium text-sm mt-1">{item.organization}</p>
                  </div>
                  <div className="@lg:hidden inline-flex items-center text-[10px] font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full uppercase tracking-widest">
                    {item.date}
                  </div>
                </div>
                <div className="text-gray-400 text-justify leading-relaxed text-sm md:text-base">
                  {item.description.map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                </div>
              </Border>
            </FadeIn>
          ))}
        </div>
      </FadeInStagger>
    </div>
  );
}
