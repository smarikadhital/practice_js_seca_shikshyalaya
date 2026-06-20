const people = [{name:'alice',age:17},{name:'bob',age:22},{name:'carol',age:19}];
const adultsUpper = people.filter(p=>p.age>=18).map(p=>p.name.toUpperCase());
console.log('task29 adults uppercase:', adultsUpper);
export { adultsUpper };