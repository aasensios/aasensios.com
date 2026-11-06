import type { YearMonth } from "./dates";

export type Span = { left: number; width: number };

const index = (ym: YearMonth) => ym.year * 12 + ym.month - 1;

/**
 * Percent of the chart a stretch of months covers. The chart runs from the first job's first
 * month to the end of the current one. Months are inclusive, so `nextStart` stops a bar where
 * a job starting in its end month begins.
 */
export function barPosition(
  start: YearMonth,
  end: YearMonth | null,
  first: YearMonth,
  now: YearMonth,
  nextStart?: YearMonth,
): Span {
  const from = index(first);
  const total = index(now) + 1 - from;
  const a = Math.max(0, index(start) - from);
  const until = nextStart ? index(nextStart) - from : Infinity;
  const b = Math.min(total, index(end ?? now) + 1 - from, Math.max(a, until));
  return { left: (a / total) * 100, width: (Math.max(0, b - a) / total) * 100 };
}

/** Each calendar year's share of the chart; the first and current years are partial. */
export function yearSpans(first: YearMonth, now: YearMonth): ({ year: number } & Span)[] {
  return Array.from({ length: now.year - first.year + 1 }, (_, i) => {
    const year = first.year + i;
    return { year, ...barPosition({ year, month: 1 }, { year, month: 12 }, first, now) };
  });
}
