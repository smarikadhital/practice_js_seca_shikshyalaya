// Task4: utility module with reusable functions
export function formatCurrency(amount) {
  return '$' + Number(amount).toFixed(2);
}

export function generateRandomId() {
  return Math.random().toString(36).slice(2, 9);
}

export function getTodayDate() {
  return new Date().toISOString().slice(0, 10);
}