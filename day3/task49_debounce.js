export function debounce(fn, delay) {
  let t;
  return function(...args) {
    clearTimeout(t);
    t = setTimeout(()=>fn(...args), delay);
  };
}
const deb = debounce((msg)=>console.log('task49 debounced:',msg),200);
deb('hello'); deb('world');