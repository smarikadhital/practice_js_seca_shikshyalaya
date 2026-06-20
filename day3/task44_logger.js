export function logger(fn) {
  return function(...args) {
    console.log('task44 before');
    const res = fn(...args);
    console.log('task44 after');
    return res;
  };
}
const wrapped = logger((x)=>{ console.log('inner',x); return x*2; });
console.log('task44 result:', wrapped(5));