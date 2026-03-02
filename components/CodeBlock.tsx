'use client';

import { useEffect, useMemo, useState } from 'react';

type CodeLang = 'java' | 'typescript' | 'python';

type CodeBlockProps = {
  java?: string;
  typescript?: string;
  python?: string;
  defaultLang?: CodeLang;
  language?: string;
  code?: string;
};

function PlainBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950">
      <div className="border-b border-slate-800 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
        {language}
      </div>
      <pre className="overflow-x-auto p-4 text-sm text-slate-100">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}

const LABEL_BY_LANG: Record<CodeLang, string> = {
  typescript: 'TypeScript',
  java: 'Java',
  python: 'Python'
};

export default function CodeBlock({
  java,
  typescript,
  python,
  defaultLang = 'typescript',
  language,
  code
}: CodeBlockProps) {
  const [active, setActive] = useState<CodeLang>(defaultLang);

  const options = useMemo(() => {
    const items: Array<{ id: CodeLang; code: string }> = [];

    if (typescript) {
      items.push({ id: 'typescript', code: typescript });
    }

    if (java) {
      items.push({ id: 'java', code: java });
    }

    if (python) {
      items.push({ id: 'python', code: python });
    }

    return items;
  }, [typescript, java, python]);

  useEffect(() => {
    if (options.length === 0) {
      return;
    }

    const hasActive = options.some((option) => option.id === active);

    if (!hasActive) {
      const defaultOption = options.find((option) => option.id === defaultLang) ?? options[0];
      setActive(defaultOption.id);
    }
  }, [options, active, defaultLang]);

  const selected = useMemo(() => {
    if (options.length > 0) {
      const activeOption = options.find((option) => option.id === active) ?? options[0];
      return { language: activeOption.id, code: activeOption.code };
    }

    return { language: language ?? 'text', code: code ?? '' };
  }, [options, active, language, code]);

  return (
    <div className="space-y-2">
      {options.length > 1 ? (
        <div className="inline-flex overflow-hidden rounded-lg border border-slate-300 text-xs font-semibold">
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              className={`px-3 py-1.5 ${active === option.id ? 'bg-slate-900 text-white' : 'bg-white text-slate-600'}`}
              onClick={() => setActive(option.id)}
            >
              {LABEL_BY_LANG[option.id]}
            </button>
          ))}
        </div>
      ) : null}
      <PlainBlock code={selected.code} language={selected.language} />
    </div>
  );
}
