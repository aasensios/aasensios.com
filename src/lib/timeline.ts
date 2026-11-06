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

const round = (n: number) => Math.round(n * 1000) / 1000;

/**
 * A lane's stretch of the career line, in a viewBox that is 100 wide (percent of the axis).
 * It climbs in from the earlier job's lane `rise` units below with an S-curve that ends
 * exactly at `left`, so the stop marker sits where the job starts. When a later job
 * `continues` the line, the run stops `2 * curve` early to leave room for that job's climb.
 */
export function trackPath(
  left: number,
  width: number,
  {
    mid,
    rise,
    curve,
    continues,
  }: { mid: number; rise?: number; curve: number; continues: boolean },
): string {
  const end = left + width - (continues ? curve * 2 : 0);
  const run = `H ${round(Math.max(left, end))}`;
  if (!rise) return `M ${round(left)} ${mid} ${run}`;
  const below = mid + rise;
  return [
    `M ${round(left - curve * 2)} ${below}`,
    `C ${round(left - curve)} ${below} ${round(left - curve)} ${mid} ${round(left)} ${mid}`,
    run,
  ].join(" ");
}
