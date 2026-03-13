'use client';
import { AboutMe, AnimatedTitle, Border, Certification, ContactForm, Container, FadeIn, GridPattern, JournalArticles, MyWork, Section, SectionHeader, Skills, Socials, Stars, Teaching, WorkExperience } from '@/components';
import { Archive, BookOpen, BriefCase, Envelope, Projects, RadioTower, Technologies } from '@/icons';
import { sectionSlice, useDispatch } from '@/lib/redux';
import { useEffect } from 'react';



export const sections = [
  { index: 0, title: 'About Me', id: 'about-me' },
  { index: 1, title: 'Work Experience', id: 'work-experience' },
  { index: 2, title: 'Skills', id: 'skills' },
  { index: 3, title: 'Teaching', id: 'teaching' },
  { index: 4, title: 'Certification', id: 'certification' },
  { index: 5, title: 'Journal Articles', id: 'journal-articles' },
  { index: 6, title: 'Projects', id: 'projects' },
  { index: 7, title: 'Contact Me', id: 'contact' },
];

interface contentSection {
  id: string;
  sectionHeader: {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
  };
  mainContent: React.ReactNode;
}

const content: contentSection[] = [
  {
    id: sections[1].id,
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
          <span className="text-work_experience_orange">IT Professional</span> with experience in <span className="text-work_experience_orange">Infrastructure Management</span> and <span className="text-work_experience_orange">Project Leadership</span>
        </div>
      ),
    },
    mainContent: <WorkExperience />,
  },
  {
    id: sections[2].id,
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
          Specialized in <span className="text-skills_purple">Infrastructure & Cloud</span>, <span className="text-skills_purple">Strategy & Management</span>, and <span className="text-skills_purple">Cybersecurity</span>
        </div>
      ),
    },
    mainContent: <Skills />,
  },
  {
    id: sections[3].id,
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
          Expertise in <span className="text-blue-400">knowledge sharing</span> and <span className="text-blue-400">professional development</span> across IT domains
        </div>
      ),
    },
    mainContent: <Teaching />,
  },
  {
    id: sections[4].id,
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
          Validating technical <span className="text-skills_purple">proficiency</span> and <span className="text-skills_purple">competency</span> through global benchmarks
        </div>
      ),
    },
    mainContent: <Certification />,
  },
  {
    id: sections[5].id,
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
          Contributing to <span className="text-blue-400">academic research</span> and <span className="text-blue-400">thought leadership</span> in computer science
        </div>
      ),
    },
    mainContent: <JournalArticles />,
  },
  {
    id: sections[6].id,
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
  {
    id: sections[7].id,
    sectionHeader: {
      icon: (
        <>
          <Envelope height="28" width="28" />
          <span className="bg-blue-400 icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Contact Me',
      description: (
        <div>
          Let&apos;s <span className="text-blue-400">collaborate</span> on your next <span className="text-blue-400">digital transformation</span> journey
        </div>
      ),
    },
    mainContent: <ContactForm />,
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
              <p className="max-w-3xl text-lg text-gray-400 text-justify">
                I am an <span className="text-white font-semibold">IT Project Manager</span> with a strong core in <span className="text-white font-semibold">infrastructure design</span> and <span className="text-white font-semibold">operational leadership</span>.
                I specialize in aligning technology solutions with business objectives, ensuring that every project is delivered with clarity, efficiency, and long-term value.
                My ability to bridge high-level strategy with technical understanding allows me to lead with both vision and precision in fast-paced, complex IT environments.
              </p>
            </FadeIn>

            <Socials />
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
        </Container>
      </div>
    </div>
  );
}
