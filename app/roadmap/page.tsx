import RoadmapGraph from '@/components/RoadmapGraph';

export const metadata = {
  title: 'Roadmap | LLD + OOP in 33 stops'
};

export default function RoadmapPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-ink">Interactive Roadmap</h1>
        <p className="mt-2 text-slate-600">Follow the sequence from OOP basics to interview-style LLD systems.</p>
      </header>
      <RoadmapGraph />
    </div>
  );
}
