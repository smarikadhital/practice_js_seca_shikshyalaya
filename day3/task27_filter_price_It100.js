const products = [{name:'Cheap',price:50},{name:'Expensive',price:150}];
const cheap = products.filter(p=>p.price<100);
console.log('task27 cheap products:', cheap);
export { cheap };