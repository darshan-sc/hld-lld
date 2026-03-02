import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1a1f2b',
        paper: '#fcfaf5',
        accent: '#0f766e',
        accentWarm: '#f97316',
        muted: '#6b7280'
      },
      fontFamily: {
        sans: ['Avenir Next', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['Menlo', 'Consolas', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        card: '0 16px 40px rgba(23, 30, 54, 0.12)'
      }
    }
  },
  plugins: []
};

export default config;
