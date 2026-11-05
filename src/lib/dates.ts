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
  return `${start.year}${EN_DASH}${end ? end.year : "now"}`;
}

export function formatPeriod(start: YearMonth, end: YearMonth | null, now: YearMonth): string {
  return `${formatYearRange(start, end)} ${MIDDLE_DOT} ${formatDuration(monthsBetween(start, end ?? now))}`;
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

export function formatPeriodMonths(
  start: YearMonth,
  end: YearMonth | null,
  now: YearMonth,
): string {
  if (!end || end.year !== start.year) return formatPeriod(start, end, now);
  const range = `${MONTH_ABBR[start.month - 1]}${EN_DASH}${MONTH_ABBR[end.month - 1]} ${start.year}`;
  return `${range} ${MIDDLE_DOT} ${formatDuration(monthsBetween(start, end))}`;
}

export function yearsSince(start: YearMonth, now: YearMonth): number {
  return Math.floor((monthsBetween(start, now) - 1) / 12);
}

export function toYearMonth(date: Date): YearMonth {
  return { year: date.getFullYear(), month: date.getMonth() + 1 };
}
