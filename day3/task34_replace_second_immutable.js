const arr = ['a','b','c'];
const replaced = arr.map((v,i)=> i===1 ? 'new' : v);
console.log('task34 replaced:', replaced);
export { replaced };