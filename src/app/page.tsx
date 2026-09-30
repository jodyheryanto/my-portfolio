'use client';
import { AboutMe, AnimatedTitle, Border, Certification, ContactButtons, ContactCTA, Container, FadeIn, GridPattern, JournalArticles, MyWork, Section, SectionHeader, Services, Skills, Stars, Teaching, WorkExperience } from '@/components';
import { Archive, BookOpen, BriefCase, Envelope, Projects, RadioTower, Technologies } from '@/icons';
import { sectionSlice, useDispatch } from '@/lib/redux';
import { useEffect } from 'react';

import { sections } from './sections';

interface contentSection {
  id: string;
  sectionHeader: {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
  };
  mainContent: React.ReactNode;
}

const highlights = [
  { value: '5+ yrs', label: 'IT infrastructure' },
  { value: '50+', label: 'Servers migrated' },
  { value: '15+', label: 'Training programs' },
  { value: '4', label: 'Research papers' },
];

const content: contentSection[] = [
  {
    id: sections[1].id,
    sectionHeader: {
      icon: (
        <>
          <BriefCase height="28" width="28" />
          <span className="bg-about_me_green icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Services',
      description: (
        <div>
          How I help: <span className="text-about_me_green">IT & cloud consulting</span>, <span className="text-skills_purple">AI & MLOps</span> and <span className="text-work_experience_orange">corporate training</span>
        </div>
      ),
    },
    mainContent: <Services />,
  },
  {
    id: sections[2].id,
    sectionHeader: {
      icon: (
        <>
          <BriefCase height="28" width="28" />
          <span className="bg-work_experience_orange icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Work Experience',
      description: (
        <div>
          From <span className="text-work_experience_orange">system administrator</span> to <span className="text-work_experience_orange">Head of IT Infrastructure</span>, now <span className="text-work_experience_orange">consultant, trainer and founder</span>
        </div>
      ),
    },
    mainContent: <WorkExperience />,
  },
  {
    id: sections[3].id,
    sectionHeader: {
      icon: (
        <>
          <Technologies height="28" width="28" />
          <span className="bg-skills_purple icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Skills',
      description: (
        <div>
          Specialized in <span className="text-skills_purple">Infrastructure & Cloud</span>, <span className="text-skills_purple">Strategy & Management</span>, and <span className="text-skills_purple">Applied AI & MLOps</span>
        </div>
      ),
    },
    mainContent: <Skills />,
  },
  {
    id: sections[4].id,
    sectionHeader: {
      icon: (
        <>
          <RadioTower height="28" width="28" />
          <span className="bg-blue-500 icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Professional Instructor',
      description: (
        <div>
          <span className="text-blue-400">15+ programs</span> in data, AI and IT for <span className="text-blue-400">enterprises, universities and government</span>
        </div>
      ),
    },
    mainContent: <Teaching />,
  },
  {
    id: sections[5].id,
    sectionHeader: {
      icon: (
        <>
          <Archive height="28" width="28" />
          <span className="bg-skills_purple icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Certifications',
      description: (
        <div>
          Current credentials in <span className="text-skills_purple">AI & MLOps</span>, <span className="text-skills_purple">IT governance</span> and <span className="text-skills_purple">project management</span>
        </div>
      ),
    },
    mainContent: <Certification />,
  },
  {
    id: sections[6].id,
    sectionHeader: {
      icon: (
        <>
          <BookOpen height="28" width="28" />
          <span className="bg-blue-400 icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Journal Articles',
      description: (
        <div>
          <span className="text-blue-400">First-author</span> research on <span className="text-blue-400">LLM deployment, document AI and NLP systems</span>
        </div>
      ),
    },
    mainContent: <JournalArticles />,
  },
  {
    id: sections[7].id,
    sectionHeader: {
      icon: (
        <>
          <Projects />
          <span className="bg-my_work_yellow icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Projects',
      description: (
        <div>
          A selection of <span className="text-my_work_yellow">featured projects</span> ranging from <span className="text-my_work_yellow">enterprise solutions</span> to <span className="text-my_work_yellow">cloud infrastructure</span>
        </div>
      ),
    },
    mainContent: <MyWork />,
  },
];

export default function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sectionSlice.actions.setSections({ sections }));
  }, [dispatch]);

  return (
    <div className="w-full overflow-y-auto overflow-x-hidden">
      <GridPattern />
      <Section id={sections[0].id}>
        <Container>
          <div className="min-h-screen relative">
            <FadeIn className="max-w-5xl pt-40 md:pt-[20vh] 2xl:pt-[30vh]">
              <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] sm:text-6xl">
                Jody<span className="wave">👋</span>
              </h1>
              <div className="flex mt-3 mb-1">
                Open for Collaboration{' '}
                <span className="relative flex h-2 w-2 self-center mx-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>{' '}
                / &#8205; <AnimatedTitle />
              </div>
              <p className="max-w-3xl text-lg text-gray-400">
                I work where <span className="text-white font-semibold">AI meets real infrastructure</span>, and I teach others to do the same. Infrastructure engineer by background,{' '}
                <span className="text-white font-semibold">applied AI & MLOps researcher</span> by focus, <span className="text-white font-semibold">BNSP trainer</span> by practice, and founder of{' '}
                <a href="https://lspku.com" target="_blank" rel="noopener noreferrer" className="text-my_work_yellow font-semibold hover:underline">
                  LSPKu
                </a>
                .
              </p>
              <dl className="mt-8 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
                {highlights.map((h) => (
                  <div key={h.label} className="rounded-2xl border border-gray-500/20 bg-gray-900/40 px-4 py-3">
                    <dt className="text-xs uppercase tracking-widest text-gray-500">{h.label}</dt>
                    <dd className="mt-1 text-2xl font-semibold text-white">{h.value}</dd>
                  </div>
                ))}
              </dl>
              <ContactButtons className="mt-8" />
            </FadeIn>

            <div className="scroll-down">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>{' '}
          <Border />
          <AboutMe />
        </Container>
      </Section>

      <div id="stars-container" className="relative">
        <Container>
          <Stars id="stars-container" />
          {content.map((section: contentSection) => (
            <Section key={section.id} id={section.id} className="pt-24 mt-28">
              <Border />
              <SectionHeader {...section.sectionHeader} />
              {section.mainContent}
            </Section>
          ))}
          <ContactCTA />
        </Container>
      </div>
    </div>
  );
}
