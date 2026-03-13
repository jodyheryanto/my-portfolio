import { FadeIn, FadeInStagger } from '@/components';
import {
  AboutMe,
  App,
  Archive,
  BookOpen,
  BottomLeftArrow,
  BottomRightArrow,
  BriefCase,
  ChallengeIcon,
  ChevronDown,
  ChevronRight,
  CloudUpload,
  CollapseAll,
  ContactMe,
  Eslint,
  FavIcon,
  Git,
  Leetcode,
  Lib,
  LibOpen,
  LogIcon,
  NewFile,
  NewFolder,
  Next,
  NextConfig,
  NodeJs,
  NodeModules,
  Projects,
  Public,
  PublicOpen,
  RadioTower,
  ReactIcon,
  Refresh,
  Remote,
  SolutionIcon,
  Src,
  SrcOpen,
  Svelte,
  TailwindCSS,
  Technologies,
  TechnologiesIcon,
  TopLeftArrow,
  TopRigthArrow,
  TsConfig,
  Tsx,
  WorkExperience,
} from '@/icons';
import { App as AppType, Leetcode as LeetcodeType, MDXEntry } from '@/lib/mdx';
import { Section, SubMenu, selectExpanded, selectPortfolio, selectSectionIsVisible, selectSectionOrder, selectSections, useSelector } from '@/lib/redux';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
import { useCallback, useState } from 'react';
import SubCollapsableMenu from '../SubCollapsableMenu';

const fileType = {
  ['react' as string]: <ReactIcon />,
  ['typescript' as string]: <Tsx />,
  ['next' as string]: <NextConfig />,
  ['svelte' as string]: <Svelte />,
  ['leetcode' as string]: <Leetcode />,
  ['laravel' as string]: <NodeJs />,
  ['aws' as string]: <CloudUpload />,
  ['none' as string]: <FavIcon />,
  ['teaching' as string]: <RadioTower />,
  ['publication' as string]: <BookOpen />,
  ['certification' as string]: <Archive />,
};

const subSectionsIcons: { [key: string]: JSX.Element } = {
  'about-me': <AboutMe />,
  'work-experience': <WorkExperience />,
  skills: <Technologies />,
  projects: <Projects />,
  contact: <ContactMe />,
  about: <LogIcon />,
  challenge: <ChallengeIcon />,
  solution: <SolutionIcon />,
  technologies: <TechnologiesIcon />,
  teaching: <RadioTower />,
  certification: <Archive />,
  'journal-articles': <BookOpen />,
  scope: <ChallengeIcon />,
  infrastructure: <CloudUpload />,
  monitoring: <TechnologiesIcon />,
  gallery: <Archive />,
  management: <BriefCase />,
  devops: <CloudUpload />,
  goals: <SolutionIcon />,
  digital: <App />,
  features: <SolutionIcon />,
  automation: <CloudUpload />,
  mission: <SolutionIcon />,
  framework: <TechnologiesIcon />,
  vision: <SolutionIcon />,
  governance: <Archive />,
  integration: <Git />,
  training: <BookOpen />,
  architecture: <Src />,
  kubernetes: <App />,
  observability: <LogIcon />,
  standards: <Archive />,
  deployment: <Remote />,
  easy: <div className="bg-green-500 rounded-full h-[16px] w-[16px] blur-[1px]" />,
  medium: <div className="bg-yellow-500 rounded-full h-[16px] w-[16px] blur-[1px]" />,
  hard: <div className="bg-red-500 rounded-full h-[16px] w-[16px] blur-[1px]" />,
};

export default function Portfolio({ allApps, allLeetcode }: { allApps: MDXEntry<AppType>[]; allLeetcode: MDXEntry<LeetcodeType>[] }) {
  const portafolio = useSelector(selectPortfolio);
  const sections = useSelector(selectSections);
  const pathname = usePathname();
  const segments = useSelectedLayoutSegments();
  const expanded = useSelector(selectExpanded);

  return (
    <SubCollapsableMenu
      subMenuTitle="PORTFOLIO"
      subMenuButtons={[
        { id: 0, button: <NewFile /> },
        { id: 1, button: <NewFolder /> },
        { id: 2, button: <Refresh /> },
        { id: 3, button: <CollapseAll /> },
      ]}
      subMenu={SubMenu.PORTFOLIO}
      open={portafolio.open}
      maxHeight={portafolio.maxHeight}
      height={portafolio.height}
    >
      {expanded && (
        <>
          <Folder name="node_modules" openIcon={<NodeModules />} closedIcon={<NodeModules />} indent={0} segmentActive={false} disabled>
          </Folder>
          <Folder name="public" openIcon={<PublicOpen />} closedIcon={<Public />} indent={0} segmentActive={false}>
            <File name="favicon.ico" icon={<FavIcon />} indent={1} sections={[]} />
          </Folder>
          <Folder name="src" openIcon={<SrcOpen />} closedIcon={<Src />} indent={0} segmentActive={pathname !== '/'}>
            <Folder name="app" openIcon={<SrcOpen />} closedIcon={<Src />} indent={1} segmentActive={pathname !== '/'}>
              <File name="layout.tsx" icon={<ReactIcon />} indent={2} sections={[]} />
              <File name="page.tsx" icon={<ReactIcon />} url="/" indent={2} sections={pathname === '/' ? sections : []} />
              <Folder name="projects" openIcon={<PublicOpen />} closedIcon={<Public />} indent={2} segmentActive={segments[0] === 'apps'}>
                {allApps.map((app) => (
                  <File key={app.pathname} name={app.title} icon={fileType[app.framework] || <FavIcon />} url={app.pathname} indent={3} sections={pathname === app.pathname ? sections : []} />
                ))}
              </Folder>
            </Folder>
          </Folder>
          <File name=".gitignore" icon={<Git />} indent={0} sections={[]} />
          <File name="next.config.js" icon={<NextConfig />} indent={0} sections={[]} />
          <File name="package.json" icon={<NodeJs />} indent={0} sections={[]} />
          <File name="tsconfig.json" icon={<TsConfig />} indent={0} sections={[]} />
        </>
      )}
    </SubCollapsableMenu>
  );
}

const itemsCSS = 'flex w-full hover:bg-dark_border items-center py-[2px] cursor-pointer transition-all duration-200';

interface FolderProps {
  name: string;
  openIcon: JSX.Element;
  closedIcon: JSX.Element;
  disabled?: boolean;
  indent: number;
  segmentActive: boolean;
  children?: JSX.Element | JSX.Element[];
}

function Folder({ name, openIcon, closedIcon, disabled, indent, children, segmentActive }: FolderProps) {
  const [open, setOpen] = useState(true);

  const onToggleFolder: React.MouseEventHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div className="overflow-hidden">
      <motion.div layout="position" transition={{ duration: 0.1 }} className={clsx('folder-container', segmentActive ? 'folder-active' : '')}>
        <button style={{ paddingLeft: indent * 16 }} onClick={onToggleFolder} disabled={disabled} className={itemsCSS}>
          <div className="mr-1 ml-4">{open && !disabled ? <ChevronDown /> : <ChevronRight />}</div>
          <div className="mr-2">{open && !disabled ? openIcon : closedIcon}</div> <p className={clsx(disabled ? 'opacity-40' : 'opacity-100')}>{name}</p>
        </button>
        {open && children}
        {open && !disabled && <span className="line-before-folder" style={{ left: indent === 0 ? indent * 16 + 24 : indent * 16 + 24 }} />}
      </motion.div>
    </div>
  );
}

interface FileProps {
  name: string;
  icon: JSX.Element;
  url?: string;
  indent: number;
}

interface FileWrapperProps extends FileProps {
  sections: Section[];
}

function File({ name, icon, url, indent, sections }: FileWrapperProps) {
  return (
    <>
      <FileContent name={name} icon={icon} url={url} indent={indent} active={sections?.length > 0} />
      {sections?.length > 0 && (
        <div style={{ paddingLeft: indent * 16 + 22 }} className="flex flex-col ml-7 relative py-1">
          <FadeInStagger className="w-max" role="list">
            {sections.map((section) => (
              <FadeIn key={section.id}>
                <FileSection id={section.id} title={section.title} url={url ? url : ''} />
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      )}
    </>
  );
}

function FileSection({ id, title, url }: { id: string; title: string; url: string }) {
  const isVisible = useSelector((state) => selectSectionIsVisible(state, id));
  const firstVisible = useSelector(selectSectionOrder)[0];
  const lastVisible = useSelector(selectSectionOrder).at(-1);

  let splitId = id.split('.')[1] ? id.split('.')[1] : id;

  return (
    <AnimatePresence mode="popLayout" initial={true}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.1 },
        }}
        exit={{
          transition: { duration: 0.2 },
        }}
        className={'relative bg-dark_bg my-1'}
      >
        {firstVisible && firstVisible.id === id && (
          <motion.span layoutId="arrow-top-left" className="top-arrows left-arrow">
            <TopLeftArrow />
          </motion.span>
        )}
        {firstVisible && firstVisible.id === id && (
          <motion.span layoutId="arrow-top-right" className="top-arrows right-arrow">
            <TopRigthArrow />
          </motion.span>
        )}
        {lastVisible && lastVisible.id === id && (
          <motion.span layoutId="arrow-bottom-left" className="bottom-arrows left-arrow">
            <BottomLeftArrow />
          </motion.span>
        )}
        {lastVisible && lastVisible.id === id && (
          <motion.span layoutId="arrow-bottom-right" className="bottom-arrows right-arrow">
            <BottomRightArrow />
          </motion.span>
        )}
        <Link href={`${url}#${id}`} className={clsx('flex items-center hover:text-gray-500 px-[4px] transition-colors duration-300', isVisible ? 'text-blue-100' : 'text-gray-500')}>
          {subSectionsIcons[splitId] ? <div className="mr-2">{subSectionsIcons[splitId]}</div> : <div className="mr-3 w-4" />}
          <p className="leading-5">{title}</p>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
function FileContent({ name, icon, url, indent, active }: FileProps & { active: boolean }) {
  if (!url) {
    return (
      <button style={{ paddingLeft: indent * 16 + 22 }} className={clsx(itemsCSS)}>
        <div className="ml-4 mr-2">{icon}</div> {name}
      </button>
    );
  }

  return (
    <Link href={url} scroll style={{ paddingLeft: indent * 16 + 22 }} className={clsx(itemsCSS, active && 'bg-gray-200')}>
      <div className="ml-4 mr-2 relative">{icon}</div> <p>{name}</p>
    </Link>
  );
}
