'use client';

import Link from 'next/link';

import { useProgress } from '@/context/ProgressContext';
import { getPhaseTopics, hrefForTopic, PHASE_META, TOPICS } from '@/lib/topics';

type NodeStatus = 'done' | 'in-progress' | 'untouched';

function getStatus(order: number, doneMap: Record<string, boolean>): NodeStatus {
  const firstPending = TOPICS.find((topic) => !doneMap[topic.slug])?.order;

  if (TOPICS.find((topic) => topic.order === order && doneMap[topic.slug])) {
    return 'done';
  }

  if (firstPending === order) {
    return 'in-progress';
  }

  return 'untouched';
}

function statusClasses(status: NodeStatus): string {
  if (status === 'done') {
    return 'border-emerald-300 bg-emerald-50 text-emerald-800';
  }

  if (status === 'in-progress') {
    return 'border-sky-300 bg-sky-50 text-sky-800';
  }

  return 'border-slate-300 bg-slate-50 text-slate-700';
}

export default function RoadmapGraph() {
  const { progress, totalDone } = useProgress();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
        <span>Node legend:</span>
        <span className="rounded-lg border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-800">done</span>
        <span className="rounded-lg border border-sky-300 bg-sky-50 px-2 py-0.5 text-xs font-semibold text-sky-800">in-progress</span>
        <span className="rounded-lg border border-slate-300 bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-700">untouched</span>
        <span className="text-slate-400">·</span>
        <span>Completed: {totalDone}/{TOPICS.length}</span>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {([1, 2, 3] as const).map((phase) => {
          const topics = getPhaseTopics(phase);
          const phaseComplete = topics.every((topic) => progress[topic.slug]);
          const previousComplete = phase === 1 ? true : getPhaseTopics((phase - 1) as 1 | 2 | 3).every((topic) => progress[topic.slug]);

          return (
            <section key={phase} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-ink">{PHASE_META[phase].title}</h2>
                <p className="text-sm text-slate-600">{PHASE_META[phase].blurb}</p>
                {!previousComplete ? (
                  <p className="mt-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
                    Soft gate: finish the previous phase for maximum value.
                  </p>
                ) : null}
                {phaseComplete ? (
                  <p className="mt-2 text-xs font-semibold text-emerald-700">Phase complete (done)</p>
                ) : null}
              </div>

              <div className="space-y-2">
                {topics.map((topic) => {
                  const status = getStatus(topic.order, progress);
                  return (
                    <Link
                      key={topic.slug}
                      href={hrefForTopic(topic)}
                      className={`block rounded-xl border px-3 py-2 transition hover:-translate-y-0.5 hover:shadow ${statusClasses(status)}`}
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide">#{topic.order}</p>
                      <p className="text-sm font-semibold">{topic.title}</p>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5">
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
            Coming Soon
          </span>
          <h2 className="text-base font-semibold text-slate-600">Phase 4: High-Level Design (HLD)</h2>
        </div>
        <p className="mt-2 text-sm text-slate-500">
          System design deep-dives — scalability, databases, caching, distributed systems, and classic HLD interview problems.
        </p>
      </section>
    </div>
  );
}
