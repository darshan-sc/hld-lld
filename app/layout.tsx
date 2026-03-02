import type { Metadata } from 'next';
import Link from 'next/link';

import { ProgressProvider } from '@/context/ProgressContext';

import './globals.css';

export const metadata: Metadata = {
  title: 'LLD + OOP in 33 stops',
  description: 'A fast roadmap for OOP fundamentals, design patterns, and classic LLD interview problems.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ProgressProvider>
          <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-paper/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
              <Link href="/" className="text-sm font-bold uppercase tracking-wider text-ink">
                HLD/LLD Roadmap
              </Link>
              <nav className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <Link href="/roadmap" className="hover:text-accent">
                  Roadmap
                </Link>
                <Link href="/cheatsheet" className="hover:text-accent">
                  Cheatsheet
                </Link>
              </nav>
            </div>
          </header>
          <main className="page-shell">{children}</main>
        </ProgressProvider>
      </body>
    </html>
  );
}
