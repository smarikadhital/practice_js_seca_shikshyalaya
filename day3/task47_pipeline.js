export function pipeline(...fns) {
  return function(input) {
    return fns.reduce((v,fn)=>fn(v), input);
  };
}
const pip = pipeline(x=>x+1, x=>x*2);
console.log('task47 pipeline result:', pip(3));