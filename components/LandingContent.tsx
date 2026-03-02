'use client';

import Link from 'next/link';

import ProgressBar from '@/components/ProgressBar';
import { useProgress } from '@/context/ProgressContext';
import { getPhaseTopics, hrefForTopic, PHASE_META, TOPICS } from '@/lib/topics';

export default function LandingContent() {
  const { totalDone, progress, reset } = useProgress();

  return (
    <div className="space-y-10">
      <section className="grid gap-6 lg:grid-cols-[1.3fr,0.7fr] lg:items-end">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Roadmap</p>
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">LLD + OOP in 33 stops.</h1>
          <p className="mt-3 max-w-xl text-lg text-slate-600">
            No filler. Just the concepts, patterns, and problems that matter.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/oop/classes-objects"
              className="rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Start from the beginning
            </Link>
            <Link
              href="/roadmap"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400"
            >
              Open roadmap
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <ProgressBar done={totalDone} total={TOPICS.length} />
          <button
            type="button"
            onClick={reset}
            className="text-xs font-semibold uppercase tracking-wide text-slate-500 hover:text-slate-800"
          >
            Reset local progress
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 md:col-span-3">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
              Coming Soon
            </span>
            <p className="text-sm font-semibold text-slate-600">Phase 4: High-Level Design (HLD)</p>
          </div>
          <p className="mt-2 text-sm text-slate-500">
            System design deep-dives — scalability, databases, caching, distributed systems, and classic HLD interview problems.
          </p>
        </article>
        {([1, 2, 3] as const).map((phase) => {
          const phaseTopics = getPhaseTopics(phase);
          const done = phaseTopics.filter((topic) => progress[topic.slug]).length;
          const phaseLocked =
            phase === 1
              ? false
              : getPhaseTopics((phase - 1) as 1 | 2 | 3).some((topic) => !progress[topic.slug]);

          return (
            <article key={phase} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">{PHASE_META[phase].title}</p>
              <p className="mt-2 text-sm text-slate-600">{PHASE_META[phase].blurb}</p>
              <p className="mt-4 text-sm font-semibold text-slate-700">
                {done}/{phaseTopics.length} done
              </p>
              {phaseLocked ? (
                <p className="mt-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
                  Soft gate: complete the previous phase first.
                </p>
              ) : null}
              <Link
                href={hrefForTopic(phaseTopics[0])}
                className="mt-4 inline-block rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 hover:border-slate-400"
              >
                Open phase
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
}
