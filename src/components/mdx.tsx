import clsx from 'clsx';

import { Heading } from '@/components/Heading';
export { CodeGroup, Code as code } from '@/components/Code'

export function wrapper({ children }: { children: React.ReactNode }) {
  return <div className="overflow-y-auto text-gray-500 w-full relative overflow-hidden">{children}</div>;
}

export function h1(props: { children: React.ReactNode }) {
  return <Heading level={1} {...props} className="max-w-5xl text-5xl sm:text-6xl mt-16" />;
}

export function h2(props: { children: React.ReactNode }) {
  return <Heading level={2} {...props} className="max-w-3xl text-3xl sm:text-4xl mt-12" />;
}

export function h3(props: { children: React.ReactNode }) {
  return <Heading level={3} {...props} className="max-w-3xl text-xl sm:text-2xl mt-8" />;
}

export function h4(props: { children: React.ReactNode }) {
  return <Heading level={4} {...props} className="max-w-3xl text-base sm:text-lg mt-5" />;
}

export function p({ children, className }: { children: React.ReactNode; className: string }) {
  return <p className={clsx('mt-5 max-w-3xl lg:text-lg leading-relaxed text-gray-500', className)}>{children}</p>;
}

export function ol({ children }: { children: React.ReactNode }) {
  return <ol className="pl-10 mb-4 mt-2 text-gray-500 list-decimal">{children}</ol>;
}

export function ul({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 mb-4 grid max-w-5xl grid-cols-1 gap-4 text-gray-500 @3xl:grid-cols-2">{children}</ul>;
}
export function li({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-2xl border border-gray-500/15 bg-gray-900/30 p-5 leading-relaxed transition-colors hover:border-gray-500/35 [&_strong]:text-white">
      {children}
    </li>
  );
}
