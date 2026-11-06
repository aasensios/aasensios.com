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

type TrackOptions = {
  mid: number;
  rise?: number;
  curve: number;
  continues: boolean;
  /** Scales the climb within a job, which grows with the log of how long the job lasted. */
  growth?: number;
  /** How far the earlier job's run had already climbed when this job's climb starts. */
  lift?: number;
};

const SAMPLES = 16;

/** Logarithmic easing: fast early growth that levels off, 0 at t = 0 and 1 at t = 1. */
export const logEase = (t: number) => Math.log1p(9 * t) / Math.log(10);

export function runEnd(left: number, width: number, curve: number, continues: boolean): number {
  return Math.max(left, left + width - (continues ? curve * 2 : 0));
}

export function runClimb(left: number, width: number, opts: TrackOptions): number {
  return (opts.growth ?? 0) * Math.log1p(runEnd(left, width, opts.curve, opts.continues) - left);
}

/**
 * A lane's stretch of the career line, in a viewBox that is 100 wide (percent of the axis).
 * It climbs in from the earlier job's lane with an S-curve that ends exactly at `left`, so
 * the stop marker sits where the job starts, then keeps rising along a logarithmic curve.
 */
export function trackPath(left: number, width: number, opts: TrackOptions): string {
  const { mid, rise, curve } = opts;
  const end = runEnd(left, width, curve, opts.continues);
  const climb = runClimb(left, width, opts);
  const run = Array.from({ length: SAMPLES }, (_, i) => {
    const t = (i + 1) / SAMPLES;
    return `L ${round(left + (end - left) * t)} ${round(mid - climb * logEase(t))}`;
  }).join(" ");
  if (!rise) return `M ${round(left)} ${mid} ${run}`;
  const below = round(mid + rise - (opts.lift ?? 0));
  return [
    `M ${round(left - curve * 2)} ${below}`,
    `C ${round(left - curve)} ${below} ${round(left - curve)} ${mid} ${round(left)} ${mid}`,
    run,
  ].join(" ");
}
