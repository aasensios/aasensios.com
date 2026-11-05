import type { YearMonth } from "./dates";

export function axisYears(firstYear: number, now: YearMonth): number[] {
  return Array.from({ length: now.year - firstYear + 1 }, (_, i) => firstYear + i);
}

/** Months are inclusive, so `nextStart` stops a bar where a job starting in its end month begins. */
export function barPosition(
  start: YearMonth,
  end: YearMonth | null,
  firstYear: number,
  now: YearMonth,
  nextStart?: YearMonth,
): { left: number; width: number } {
  const total = axisYears(firstYear, now).length * 12;
  const index = (ym: YearMonth) => (ym.year - firstYear) * 12 + (ym.month - 1);
  const from = Math.max(0, index(start));
  const until = nextStart ? index(nextStart) : Infinity;
  const to = Math.min(total, index(end ?? now) + 1, Math.max(from, until));
  return { left: (from / total) * 100, width: (Math.max(0, to - from) / total) * 100 };
}
