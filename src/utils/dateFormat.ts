import moment from "moment"

export function dateFormat(date: any) {
  return moment(date).format("ddd, MMMM Do YYYY")
}

export function dateFormatDashboad(date: any) {
  return moment(date).format("ddd, MM/DD/YY")
}

export function dateFormatMonthDay(date: any) {
  return moment(date).format("MMMM Do")
}

export function dateFormatMonth(date: any) {
  return moment(date).format("MMM")
}

export function dateFormatDay(date: any) {
  return moment(date).format("Do")
}

export const timeFormat = (isoString: any) =>
  moment(isoString).format("h.mm A")



export const timeAgo = (isoString: any) => {
  const today = moment().startOf("day");
  const target = moment(isoString).startOf("day");
  const diff = target.diff(today, "days");
  if (diff > 0) return `${diff} day${diff > 1 ? "s" : ""} to go`;
  if (diff === 0) return "Today 🎉";
  return `${Math.abs(diff)} day${Math.abs(diff) > 1 ? "s" : ""} ago`;
}
