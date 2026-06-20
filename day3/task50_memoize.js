export function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const res = fn(...args);
    cache.set(key, res);
    return res;
  };
}
const slow = (n)=>{ let s=0; for(let i=0;i<1e5;i++) s+=i; return n*2; };
const memoSlow = memoize(slow);
console.log('task50 memoize first:', memoSlow(5));
console.log('task50 memoize cached:', memoSlow(5));