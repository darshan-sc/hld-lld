import PrintButton from '@/components/PrintButton';
import { TOPICS } from '@/lib/topics';

const oopPillars = [
  ['Encapsulation', 'Hide state and expose intentional methods.'],
  ['Abstraction', 'Focus on contracts and capabilities, not internals.'],
  ['Inheritance', 'Share behavior through hierarchical extension.'],
  ['Polymorphism', 'Use one interface with many implementations.'],
  ['Composition', 'Assemble objects to avoid brittle class trees.']
];

const solidRows = [
  ['SRP', 'Single Responsibility Principle', 'One class should have one reason to change.'],
  ['OCP', 'Open/Closed Principle', 'Add behavior by extension, not modification.'],
  ['LSP', 'Liskov Substitution Principle', 'Subtypes must honor base type contracts.'],
  ['ISP', 'Interface Segregation Principle', 'Prefer focused interfaces over fat interfaces.'],
  ['DIP', 'Dependency Inversion Principle', 'Depend on abstractions rather than concretions.']
];

const patternRows = TOPICS.filter((topic) => topic.phase === 2).map((topic) => [
  topic.title,
  topic.summary
]);

const designProblemRows = TOPICS.filter((topic) => topic.phase === 3).map((topic) => [
  topic.title,
  topic.patterns?.join(', ') ?? 'N/A'
]);

export const metadata = {
  title: 'Cheatsheet | LLD + OOP in 33 stops'
};

export default function CheatsheetPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
        <h1 className="text-3xl font-bold tracking-tight text-ink">LLD + OOP Cheatsheet</h1>
        <p className="mt-2 text-slate-600">A print-friendly quick reference for interviews and revision.</p>
        <PrintButton />
      </header>

      <section className="topic-prose rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
        <h2>OOP pillars</h2>
        <table>
          <thead>
            <tr>
              <th>Pillar</th>
              <th>Quick reference</th>
            </tr>
          </thead>
          <tbody>
            {oopPillars.map(([pillar, summary]) => (
              <tr key={pillar}>
                <td>{pillar}</td>
                <td>{summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="topic-prose rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
        <h2>SOLID quick ref</h2>
        <table>
          <thead>
            <tr>
              <th>Acronym</th>
              <th>Principle</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            {solidRows.map(([short, name, meaning]) => (
              <tr key={short}>
                <td>{short}</td>
                <td>{name}</td>
                <td>{meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="topic-prose rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
        <h2>Design pattern one-liners</h2>
        <table>
          <thead>
            <tr>
              <th>Pattern</th>
              <th>One-liner</th>
            </tr>
          </thead>
          <tbody>
            {patternRows.map(([pattern, summary]) => (
              <tr key={pattern}>
                <td>{pattern}</td>
                <td>{summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="topic-prose rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
        <h2>{'Design problem -> patterns map'}</h2>
        <table>
          <thead>
            <tr>
              <th>Problem</th>
              <th>Patterns</th>
            </tr>
          </thead>
          <tbody>
            {designProblemRows.map(([problem, patterns]) => (
              <tr key={problem}>
                <td>{problem}</td>
                <td>{patterns}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
