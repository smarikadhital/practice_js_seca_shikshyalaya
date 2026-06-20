export function withTax(taxRate) { return price => +(price * (1 + taxRate)).toFixed(2); }
const add10pct = withTax(0.1);
console.log('task48 withTax 100 ->', add10pct(100));