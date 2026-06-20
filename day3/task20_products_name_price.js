const products = [
  { id:1, name:'Pen', price:1.2, stock:100 },
  { id:2, name:'Notebook', price:2.5, stock:50 }
];
const simplified = products.map(({name,price})=>({name,price}));
console.log('task20 simplified:', simplified);
export { products, simplified };