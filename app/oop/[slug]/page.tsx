import { notFound } from 'next/navigation';

import TopicPage from '@/components/TopicPage';
import { getTopic, getTopicsByType } from '@/lib/topics';

export const dynamicParams = false;

export function generateStaticParams() {
  return getTopicsByType('oop').map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getTopic('oop', slug);

  if (!topic) {
    notFound();
  }

  return {
    title: `${topic.title} | LLD + OOP in 33 stops`
  };
}

export default async function OopTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <TopicPage type="oop" slug={slug} />;
}
