'use client';
import { FadeIn, FadeInStagger } from '@/components';
import { BookOpen } from '@/icons';

const articles = [
  {
    title: 'Performance Evaluation of Cloud-Init as Deployment Automation, Virtual Machine, and LXC Container on Proxmox VE for AI LLM Deployment',
    authors: 'Jody, FA Riandhito, R Yusuf, A Saputra, JE Riwurohi',
    journal: 'Jurnal Sisfokom (Sistem Informasi dan Komputer)',
    metadata: 'p-ISSN: 2301-7988, e-ISSN: 2581-0588, Vol 15, No 01, Dec 2025, page. 125-132',
    year: '2025',
    link: '#',
  },
  {
    title: 'Analisis Komparatif Akurasi Deteksi Teks Dokumen Keuangan Menggunakan CTPN dan EAST',
    authors: 'Jody, Achmad Solichin',
    journal: 'CSRID (Computer Science Research and Its Development Journal)',
    metadata: 'p-ISSN: 2085-1367, Vol 18, No 2, Juni 2026',
    year: '2026',
    link: '#',
  },
];

export default function JournalArticles() {
  return (
    <div className="mt-12 relative z-10">
      <FadeInStagger className="space-y-8">
        {articles.map((article, index) => (
          <FadeIn key={index} className="group p-8 bg-gray-900/40 border border-gray-500/10 rounded-3xl hover:border-blue-400/30 transition-all shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="p-5 bg-blue-500/5 rounded-2xl group-hover:bg-blue-500/10 transition-colors flex-shrink-0 border border-blue-400/10">
                <BookOpen height="32" width="32" className="text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors leading-tight tracking-tight">
                    {article.title}
                  </h3>
                  <span className="inline-flex items-center text-xs font-black text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded-full uppercase tracking-widest border border-blue-400/20 self-start">
                    {article.year}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-3 italic">
                   {article.authors}
                </p>
                <div className="flex flex-col gap-2">
                   <p className="text-blue-400/80 font-bold text-sm tracking-wide">
                     {article.journal}
                   </p>
                   <p className="text-gray-500 text-xs font-medium leading-relaxed">
                     {article.metadata}
                   </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-500/10 flex justify-end">
                   <a 
                     href={article.link} 
                     className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-widest flex items-center gap-2"
                   >
                     View Publication 
                     <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                     </svg>
                   </a>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </FadeInStagger>
    </div>
  );
}
