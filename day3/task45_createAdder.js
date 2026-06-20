export function createAdder(x) { return function(y){ return x + y; }; }
const add5 = createAdder(5);
console.log('task45 add5(3):', add5(3));