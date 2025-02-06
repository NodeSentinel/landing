/**
 * Formats a number according to the user's locale
 * @param num - The number to format
 * @param options - Intl.NumberFormatOptions
 * @returns Formatted string (e.g., "67,896" or "67.896")
 */
export function formatNumber(
  num: number,
  options: Intl.NumberFormatOptions = {}
): string {
  return new Intl.NumberFormat(undefined, options).format(num);
}

/**
 * Formats a date according to the user's locale
 * @param date - Date to format
 * @param options - Intl.DateTimeFormatOptions
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | number,
  options: Intl.DateTimeFormatOptions = {
    dateStyle: "medium",
    timeStyle: "medium",
  }
): string {
  const dateToFormat = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat(undefined, options).format(dateToFormat);
}

/**
 * Formats a time in UTC, showing hours, minutes, seconds in 24h format
 * @param date - Date to format
 * @returns Formatted time string (e.g., "14:30:45 UTC")
 */
export function formatTime(date: Date | number): string {
  return (
    new Intl.DateTimeFormat("en-US", {
      timeStyle: "medium",
      timeZone: "UTC",
      hour12: false,
    }).format(date instanceof Date ? date : new Date(date)) + " UTC"
  );
}
