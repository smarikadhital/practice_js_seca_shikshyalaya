const users = [{name:'A',age:17},{name:'B',age:20},{name:'C',age:16}];
const adult = users.find(u => u.age > 18);
console.log('task24 first age>18:', adult);
export { users, adult };