'use client';
import { FadeIn, FadeInStagger } from '@/components';
import { Archive, BriefCase, RadioTower } from '@/icons';

const certificationCategories = [
  {
    title: 'IT Governance, Audit & Cybersecurity',
    icon: <RadioTower height="24" width="24" />,
    items: [
      { name: 'ISO/IEC 42001:2023 Lead Auditor', issuer: 'Mastermind', date: 'Jan 2026' },
      { name: 'ISO/IEC 27001:2022 Lead Auditor', issuer: 'Mastermind', date: 'Dec 2025' },
      { name: 'Certified Red Team Operations Management (CRTOM)', issuer: 'RedTeam', date: 'Dec 2025' },
      { name: 'TOGAF® Business Architecture Foundation', issuer: 'The Open Group', date: 'Sep 2025' },
      { name: 'Certified Information Technology Auditor Professional', issuer: 'Dilatih.co', date: '2023' },
    ]
  },
  {
    title: 'Project Management',
    icon: <BriefCase height="24" width="24" />,
    items: [
      { name: 'ICT Project Manager Certification', issuer: 'BNSP', date: '2025' },
      { name: 'Scrum with AI Certified', issuer: 'Scrumstudy', date: 'Dec 2025' },
      { name: 'Scrum Fundamentals Certified (SFC)', issuer: 'SCRUMstudy', date: '2024' },
      { name: 'Certified IT Project Management in Practices', issuer: 'Dilatih.co', date: '2022' },
    ]
  },
  {
    title: 'Infrastructure & Cloud',
    icon: <Archive height="24" width="24" />,
    items: [
      { name: 'Alibaba Cloud DevOps Speciality Certification', issuer: 'Alibaba Cloud', date: 'Sep 2025' },
      { name: 'AWS Cloud Quest: Cloud Practitioner', issuer: 'AWS', date: 'Sep 2024' },
      { name: 'Oracle Cloud Infrastructure Certified Foundations Associate', issuer: 'Oracle', date: '2023' },
    ]
  }
];

export default function Certification() {
  return (
    <div className="mt-12 relative z-10 space-y-16">
      {certificationCategories.map((category, catIndex) => (
        <div key={catIndex}>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-2 bg-blue-400/10 rounded-lg text-blue-400">
              {category.icon}
            </div>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">{category.title}</h2>
          </div>
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items.map((cert, index) => (
              <FadeIn key={index} className="bg-gray-900/40 border border-gray-500/10 p-6 rounded-2xl hover:bg-gray-900/60 hover:border-blue-400/30 transition-all group h-full">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-white font-bold group-hover:text-blue-400 transition-colors leading-tight">{cert.name}</h3>
                    <p className="text-gray-500 text-xs mt-3 uppercase tracking-widest font-medium">{cert.issuer}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-gray-500/10 pt-4">
                    <span className="text-blue-400/60 text-[10px] font-bold uppercase tracking-widest">{cert.date}</span>
                    <Archive height="14" width="14" className="text-gray-600 group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      ))}
    </div>
  );
}
