import Link from 'next/link';
import { notFound } from 'next/navigation';

import TopicNav from '@/components/TopicNav';
import { loadTopicMdx } from '@/lib/content-map';
import { getAdjacentTopics, getTopic, hrefForTopic, PHASE_META, type TopicType } from '@/lib/topics';
import { mdxComponents } from '@/mdx-components';

type TopicPageProps = {
  type: TopicType;
  slug: string;
};

export default async function TopicPage({ type, slug }: TopicPageProps) {
  const topic = getTopic(type, slug);

  if (!topic) {
    notFound();
  }

  const mdxModule = await loadTopicMdx(type, slug);

  if (!mdxModule) {
    notFound();
  }

  const Content = mdxModule.default;
  const adjacent = getAdjacentTopics(topic.order);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 text-sm text-slate-600">
        <Link href="/roadmap" className="font-medium text-accent hover:underline">
          Roadmap
        </Link>{' '}
        / {PHASE_META[topic.phase].title} / <span className="font-semibold text-slate-800">{topic.title}</span>
      </div>

      <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">Topic #{topic.order}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink">{topic.title}</h1>
        <p className="mt-3 text-slate-600">{topic.summary}</p>
      </header>

      <article className="topic-prose mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
        <Content components={mdxComponents} />
      </article>

      <TopicNav
        slug={topic.slug}
        prev={adjacent.prev ? { href: hrefForTopic(adjacent.prev), title: adjacent.prev.title } : undefined}
        next={adjacent.next ? { href: hrefForTopic(adjacent.next), title: adjacent.next.title } : undefined}
      />
    </div>
  );
}
