export function convertToMonthDayText(textDate) {
  const date = new Date(textDate);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  return `${month} ${day}`;
}
export function convertToYearText(textDate) {
  const date = new Date(textDate);
    return date.getFullYear();
}
