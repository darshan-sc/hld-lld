import type { MDXComponents } from 'mdx/types';

import CodeBlock from '@/components/CodeBlock';
import MermaidDiagram from '@/components/MermaidDiagram';

export const mdxComponents: MDXComponents = {
  CodeBlock,
  MermaidDiagram,
  h2: (props) => <h2 className="mt-8 text-2xl font-semibold text-ink" {...props} />,
  h3: (props) => <h3 className="mt-6 text-xl font-semibold text-ink" {...props} />,
  p: (props) => <p className="mt-3 leading-7 text-slate-700" {...props} />,
  ul: (props) => <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700" {...props} />,
  ol: (props) => <ol className="mt-3 list-decimal space-y-1 pl-5 text-slate-700" {...props} />,
  li: (props) => <li className="leading-7" {...props} />,
  code: (props) => <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-sm text-slate-800" {...props} />,
  a: (props) => <a className="font-medium text-accent underline underline-offset-2" {...props} />
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components
  };
}
