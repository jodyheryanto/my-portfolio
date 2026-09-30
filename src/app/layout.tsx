import { ActivityBar, BottomBar, TabsContainer, TopBar } from '@/components';
import NavigationChange from '@/components/NavigationChange';
import TogglePortfolio from '@/components/TogglePortfolio';
import { loadApps, loadLeetcode } from '@/lib/mdx';
import { Providers } from '@/lib/providers';
import { type Section } from '@/lib/redux/slices/sectionSlice/sectionSlice';
import { Analytics } from '@vercel/analytics/react';
import glob from 'fast-glob';
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import { sections as homeSections } from './sections';
import './globals.css';

const siteTitle = 'Jody | IT & AI Consultant · Applied AI & MLOps Researcher';
const siteDescription =
  'IT & AI consultant, applied AI and MLOps researcher, and BNSP trainer. 5+ years designing and running infrastructure on AWS, Alibaba Cloud, Proxmox VE and Kubernetes. Founder of LSPKu.';

export const metadata: Metadata = {
  metadataBase: new URL('https://jody.my.id'),
  title: siteTitle,
  description: siteDescription,
  keywords: ['Jody', 'IT Consultant', 'AI Consultant', 'MLOps', 'LLM Deployment', 'Proxmox', 'Kubernetes', 'BNSP Trainer', 'LSPKu', 'Indonesia'],
  authors: [{ name: 'Jody', url: 'https://jody.my.id' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://jody.my.id',
    siteName: 'Jody',
    title: siteTitle,
    description: siteDescription,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const mdxPages = await glob('**/*.mdx', { cwd: 'src/app' });
  const mdxSectionEntries = (await Promise.all(mdxPages.map(async (filename) => ['/' + filename.replace(/(^|\/)page\.mdx$/, ''), (await import(`./${filename}`)).sections]))) as Array<
    [string, Section[]]
  >;
  const tsxPages = await glob('**/page.tsx', { cwd: 'src/app' });
  const tsxSectionEntries = (await Promise.all(tsxPages.map(async (filename) => ['/' + filename.replace(/(^|\/)page\.tsx$/, ''), (await import(`./${filename}`)).sections]))) as Array<
    [string, Section[]]
  >;

  const allSections = Object.fromEntries(
    [...mdxSectionEntries, ...tsxSectionEntries, ['/', homeSections]].filter(([_, sections]) => sections !== undefined)
  );

  const allApps = await loadApps();
  const allLeetcode = await loadLeetcode();

  return (
    <Providers>
      <html lang="en">
        <body className="bg-dark_bg min-h-screen max-h-screen flex flex-col scroll-smooth">
          <Toaster />
          <TopBar />
          <main className="flex-1 flex overflow-hidden relative">
            <ActivityBar sections={allSections} allApps={allApps} allLeetcode={allLeetcode} />
            <div className="flex w-full flex-col overflow-hidden">
              <TabsContainer /> {children}
            </div>
          </main>
          <BottomBar />
          <TogglePortfolio />
          <NavigationChange allPaths={[...allApps, ...allLeetcode]} />
          <Analytics />
        </body>
      </html>
    </Providers>
  );
}
