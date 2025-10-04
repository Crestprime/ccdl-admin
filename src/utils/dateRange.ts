import {
    startOfDay, 
    startOfWeek,
    endOfWeek,
    startOfMonth,
    endOfMonth,
    startOfYear,
    endOfYear,
    subDays,
    subMonths, 
    format,
  } from "date-fns";
  
  export const getDateRange = (range: string) => {
    const now = new Date();

    const fmt = (date: Date) => format(date, "yyyy-MM-dd");

    switch (range) {
      case "Today":
        return { start: fmt(startOfDay(now)), end: fmt(now) };
  
      case "Last 24 hours":
        return { start: fmt(new Date(now.getTime() - 24 * 60 * 60 * 1000)), end: fmt(now) };
  
      case "This Week":
        return { start: fmt(startOfWeek(now)), end: fmt(endOfWeek(now)) };
  
      case "Last 7 days":
        return { start: fmt(subDays(now, 7)), end: fmt(now) };
  
      case "This Month":
        return { start: fmt(startOfMonth(now)), end: fmt(endOfMonth(now)) };
  
      case "Last 30 days":
        return { start: fmt(subDays(now, 30)), end: fmt(now) };
  
      case "Last 90 days":
        return { start: fmt(subDays(now, 90)), end: fmt(now) };
  
      case "This Year":
        return { start: fmt(startOfYear(now)), end: fmt(endOfYear(now)) };
  
      case "Last 12 months":
        return { start: fmt(subMonths(now, 12)), end: fmt(now) };
  
      default:
        return { start: null, end: null };
    }
  };


export const dateRangeOptions = [
  { label: "Today", value: "Today" },
  // { label: "Last 24 hours", value: "Last 24 hours" },
  { label: "This Week", value: "This Week" },
  // { label: "Last 7 days", value: "Last 7 days" },
  { label: "This Month", value: "This Month" },
  // { label: "Last 30 days", value: "Last 30 days" },
  { label: "Last 90 days", value: "Last 90 days" },
  { label: "This Year", value: "This Year" },
  // { label: "Last 12 months", value: "Last 12 months" },
]

  