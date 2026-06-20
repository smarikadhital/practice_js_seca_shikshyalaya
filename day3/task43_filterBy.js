export function filterBy(arr, conditionFn) { return arr.filter(conditionFn); }
console.log('task43 filterBy evens:', filterBy([1,2,3,4], n=>n%2===0));