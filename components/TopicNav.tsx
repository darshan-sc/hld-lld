'use client';

import Link from 'next/link';

import { useProgress } from '@/context/ProgressContext';

type TopicNavProps = {
  slug: string;
  prev?: {
    href: string;
    title: string;
  };
  next?: {
    href: string;
    title: string;
  };
};

export default function TopicNav({ slug, prev, next }: TopicNavProps) {
  const { markDone, isDone } = useProgress();
  const done = isDone(slug);

  return (
    <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-6">
      {prev ? (
        <Link
          href={prev.href}
          className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-slate-400"
        >
          {'<- Prev'}
        </Link>
      ) : (
        <span className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-400">{'<- Prev'}</span>
      )}

      <button
        type="button"
        onClick={() => markDone(slug)}
        className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700"
      >
        {done ? 'Marked as Done' : 'Mark as Done'}
      </button>

      {next ? (
        <Link
          href={next.href}
          className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-slate-400"
        >
          {'Next ->'}
        </Link>
      ) : (
        <span className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-400">{'Next ->'}</span>
      )}
    </div>
  );
}
