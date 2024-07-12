import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToDateString(dateStr: string): string {
  const parts = dateStr.match(/(\w{3})\s(\d{4})/);

  if (!parts) {
    return dateStr;
  }

  const [_, monthStr, year] = parts;
  const month = new Date(`${monthStr} 1, 2000`).getMonth() + 1; // Get month number (1-based)
  const date = new Date(Number(year), month - 1, 1); // Create date object

  // Format date to YYYY-MM-DD
  const formattedDate = date.toISOString().split("T")[0];
  return formattedDate;
}

export function convertToMonthYear(dateStr: string): string {
  const date = new Date(dateStr);

  if (isNaN(date.getTime())) {
    return dateStr;
  }

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function isToday(dateString: string): boolean {
  const today = new Date();
  const dateToCheck = new Date(dateString);

  return (
    dateToCheck.getDate() === today.getDate() &&
    dateToCheck.getMonth() === today.getMonth() &&
    dateToCheck.getFullYear() === today.getFullYear()
  );
}

export function capitalizeFirstLetter(string: string | null) {
  return string && string.length > 0
    ? `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`
    : string;
}

export function capitalizeFirstLetterWord(string: string | null) {
  if (string === null) {
    return null;
  }

  return string
    .split(/(\s|-|_)/) // Split by space, hyphen, or underscore, keeping the delimiters
    .map((word) =>
      word.length > 0
        ? `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
        : word
    )
    .join("");
}
