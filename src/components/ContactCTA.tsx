'use client';
import { FadeIn } from '@/components';
import toast from 'react-hot-toast';

export const CONTACT_EMAIL = 'jodyheryanto18@gmail.com';

export function ContactButtons({ className = '' }: { className?: string }) {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      toast.success('Email address copied');
    } catch {
      toast(CONTACT_EMAIL);
    }
  };

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="inline-flex items-center rounded-full bg-about_me_green px-5 py-2 font-semibold text-dark_bg transition hover:bg-about_me_green/85"
      >
        Email me
      </a>
      <a
        href="https://www.linkedin.com/in/jodyheryanto/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-full border border-gray-500/40 px-5 py-2 font-semibold text-white transition hover:border-white/70"
      >
        LinkedIn
      </a>
      <a
        href="https://lspku.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-full border border-my_work_yellow/50 px-5 py-2 font-semibold text-my_work_yellow transition hover:bg-my_work_yellow/10"
      >
        LSPKu
      </a>
      <button type="button" onClick={copyEmail} className="text-sm text-gray-400 underline decoration-gray-600 underline-offset-4 transition hover:text-white">
        {CONTACT_EMAIL}
      </button>
    </div>
  );
}

export default function ContactCTA() {
  return (
    <FadeIn className="relative z-10 mt-32 mb-24 rounded-3xl border border-gray-500/20 bg-gray-900/40 p-8 sm:p-12">
      <p className="text-xs uppercase tracking-widest text-gray-500">Let&apos;s work together</p>
      <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
        Need infrastructure or AI that holds up in production, or a team trained to run it?
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-gray-400">
        I take on consulting projects, corporate and BNSP training, and research collaboration. Tell me what you are building.
      </p>
      <ContactButtons className="mt-8" />
    </FadeIn>
  );
}
