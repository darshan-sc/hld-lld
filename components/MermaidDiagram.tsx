'use client';

import mermaid from 'mermaid';
import { useEffect, useId, useMemo, useState } from 'react';

type MermaidDiagramProps = {
  chart: string;
};

let initialized = false;

function initMermaid() {
  if (!initialized) {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'loose',
      theme: 'neutral',
      fontFamily: 'ui-sans-serif, system-ui'
    });
    initialized = true;
  }
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const [svg, setSvg] = useState('');
  const [error, setError] = useState<string | null>(null);
  const id = useId();
  const renderId = useMemo(() => `mermaid-${id.replace(/[:]/g, '')}`, [id]);

  useEffect(() => {
    let mounted = true;

    initMermaid();

    mermaid
      .render(renderId, chart)
      .then((result) => {
        if (!mounted) {
          return;
        }

        setSvg(result.svg);
        setError(null);
      })
      .catch((renderError: unknown) => {
        if (!mounted) {
          return;
        }

        setError(renderError instanceof Error ? renderError.message : 'Diagram rendering failed');
        setSvg('');
      });

    return () => {
      mounted = false;
    };
  }, [chart, renderId]);

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      {error ? (
        <div className="p-4 text-sm text-red-700">Mermaid error: {error}</div>
      ) : (
        <div className="overflow-x-auto p-4" dangerouslySetInnerHTML={{ __html: svg }} />
      )}
    </div>
  );
}
