/** A calendar month. `month` is 1–12. */
export type YearMonth = { year: number; month: number };

const EN_DASH = "–";
const MIDDLE_DOT = "·";

/** Number of months from `start` to `end`, counting both months. */
export function monthsBetween(start: YearMonth, end: YearMonth): number {
  return (end.year - start.year) * 12 + (end.month - start.month) + 1;
}

export function formatDuration(months: number): string {
  if (months < 12) return `${months} ${months === 1 ? "month" : "months"}`;
  const years = Math.floor(months / 12);
  return `${years} ${years === 1 ? "year" : "years"}`;
}

export function formatYearRange(start: YearMonth, end: YearMonth | null): string {
  return `${start.year} ${EN_DASH} ${end ? end.year : "now"}`;
}

export function formatPeriod(start: YearMonth, end: YearMonth | null, now: YearMonth): string {
  return `${formatYearRange(start, end)} ${MIDDLE_DOT} ${formatDuration(monthsBetween(start, end ?? now))}`;
}

export function yearsSince(start: YearMonth, now: YearMonth): number {
  return Math.floor((monthsBetween(start, now) - 1) / 12);
}

export function toYearMonth(date: Date): YearMonth {
  return { year: date.getFullYear(), month: date.getMonth() + 1 };
}

const MONTH_ABBR = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/** "Aug 2022 – now · 4 years": the exact months a job ran, plus how long that was. */
export function formatMonthRange(start: YearMonth, end: YearMonth | null, now: YearMonth): string {
  const month = (ym: YearMonth) => `${MONTH_ABBR[ym.month - 1]} ${ym.year}`;
  const range = `${month(start)} ${EN_DASH} ${end ? month(end) : "now"}`;
  return `${range} ${MIDDLE_DOT} ${formatDuration(monthsBetween(start, end ?? now))}`;
}
