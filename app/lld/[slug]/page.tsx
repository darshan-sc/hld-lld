import { notFound } from 'next/navigation';

import TopicPage from '@/components/TopicPage';
import { getTopic, getTopicsByType } from '@/lib/topics';

export const dynamicParams = false;

export function generateStaticParams() {
  return getTopicsByType('lld').map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getTopic('lld', slug);

  if (!topic) {
    notFound();
  }

  return {
    title: `${topic.title} | LLD + OOP in 33 stops`
  };
}

export default async function LldTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <TopicPage type="lld" slug={slug} />;
}
