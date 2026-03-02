'use client';

import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

import { TOPICS } from '@/lib/topics';

const STORAGE_KEY = 'lld_progress';
const KNOWN_SLUGS = new Set(TOPICS.map((topic) => topic.slug));

type ProgressMap = Record<string, boolean>;

type ProgressContextValue = {
  progress: ProgressMap;
  hydrated: boolean;
  markDone: (slug: string) => void;
  isDone: (slug: string) => boolean;
  totalDone: number;
  reset: () => void;
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

function normalizeProgress(candidate: unknown): ProgressMap {
  if (!candidate || typeof candidate !== 'object') {
    return {};
  }

  const normalized: ProgressMap = {};
  for (const [slug, done] of Object.entries(candidate as Record<string, unknown>)) {
    if (KNOWN_SLUGS.has(slug) && done === true) {
      normalized[slug] = true;
    }
  }

  return normalized;
}

export function ProgressProvider({ children }: PropsWithChildren) {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      setProgress(normalizeProgress(parsed));
    } catch {
      setProgress({});
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress, hydrated]);

  const markDone = useCallback((slug: string) => {
    if (!KNOWN_SLUGS.has(slug)) {
      return;
    }

    setProgress((current) => {
      if (current[slug]) {
        return current;
      }

      return {
        ...current,
        [slug]: true
      };
    });
  }, []);

  const isDone = useCallback((slug: string) => Boolean(progress[slug]), [progress]);

  const reset = useCallback(() => {
    setProgress({});
  }, []);

  const totalDone = useMemo(() => {
    let doneCount = 0;

    for (const topic of TOPICS) {
      if (progress[topic.slug]) {
        doneCount += 1;
      }
    }

    return doneCount;
  }, [progress]);

  const value = useMemo<ProgressContextValue>(
    () => ({
      progress,
      hydrated,
      markDone,
      isDone,
      totalDone,
      reset
    }),
    [progress, hydrated, markDone, isDone, totalDone, reset]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextValue {
  const context = useContext(ProgressContext);

  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }

  return context;
}
