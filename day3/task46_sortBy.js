export function sortBy(arr, key) {
  return [...arr].sort((a,b)=> (a[key] > b[key])?1: (a[key]<b[key])?-1:0);
}
console.log('task46 sortBy name:', sortBy([{name:'B'},{name:'A'}],'name'));