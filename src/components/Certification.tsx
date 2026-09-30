'use client';
import { FadeIn, FadeInStagger } from '@/components';
import { Archive, BriefCase, RadioTower } from '@/icons';

const certificationCategories = [
  {
    title: 'AI, Data & MLOps',
    icon: <RadioTower height="24" width="24" />,
    items: [
      { name: 'Certification: DAG Authoring for Apache Airflow 3', issuer: 'Astronomer', date: 'Jan 2026' },
      { name: 'Certification for Apache Airflow 3 Fundamentals', issuer: 'Astronomer', date: 'Jan 2026' },
      { name: 'EITCA/AI Artificial Intelligence Certificate', issuer: 'EITCA Academy', date: 'Nov 2025' },
      { name: 'Neo4j Graph Data Science Certification', issuer: 'Neo4j', date: 'Nov 2025' },
      { name: 'AI Security & Governance', issuer: 'Securiti AI', date: 'Aug 2025' },
    ],
  },
  {
    title: 'IT Governance, Audit & Security',
    icon: <Archive height="24" width="24" />,
    items: [
      { name: 'ISO/IEC 42001:2023 Lead Auditor', issuer: 'Mastermind', date: 'Jan 2026' },
      { name: 'ISO/IEC 27001:2022 Lead Auditor', issuer: 'Mastermind', date: 'Dec 2025' },
      { name: 'Fortinet Certified Associate Cybersecurity', issuer: 'Fortinet', date: 'Dec 2025' },
      { name: 'Certified Red Team Operations Management (CRTOM)', issuer: 'Red Team Leaders', date: 'Dec 2025' },
      { name: 'TOGAF® Business Architecture Foundation', issuer: 'The Open Group', date: 'Sep 2025' },
    ],
  },
  {
    title: 'Project Management & Cloud',
    icon: <BriefCase height="24" width="24" />,
    items: [
      { name: 'Scrum with AI Certified (SAC)', issuer: 'SCRUMstudy', date: 'Dec 2025' },
      { name: 'ICT Project Manager Certification', issuer: 'BNSP', date: 'Feb 2025' },
      { name: 'Scrum Fundamentals Certified (SFC)', issuer: 'SCRUMstudy', date: 'Sep 2024' },
      { name: 'Oracle Cloud Infrastructure 2023 Certified Foundations Associate', issuer: 'Oracle', date: 'Jul 2023' },
    ],
  },
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
