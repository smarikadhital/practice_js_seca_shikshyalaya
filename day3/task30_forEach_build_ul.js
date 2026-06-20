const items = ['one','two','three'];
let ul = '<ul>';
items.forEach(i=>{ ul += `<li>${i}</li>`; });
ul += '</ul>';
console.log('task30 built ul string:', ul);
export { ul };