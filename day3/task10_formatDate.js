export function formatDate(year, month, day) {
  const dd = String(day).padStart(2,'0');
  const mm = String(month).padStart(2,'0');
  return `${dd}/${mm}/${year}`;
}
console.log('task10 date:', formatDate(2026,6,20));