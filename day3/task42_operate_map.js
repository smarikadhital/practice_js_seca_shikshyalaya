export function operate(arr, fn) { return arr.map(fn); }
console.log('task42 operate:', operate([1,2,3], n=>n*2));