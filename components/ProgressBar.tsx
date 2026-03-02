import { completionPercent } from '@/lib/topics';

type ProgressBarProps = {
  done: number;
  total: number;
};

export default function ProgressBar({ done, total }: ProgressBarProps) {
  const percent = completionPercent(done, total);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
      <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-700">
        <span>Overall progress</span>
        <span>
          {done} / {total}
        </span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accentWarm transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-slate-500">{percent}% complete</p>
    </div>
  );
}
