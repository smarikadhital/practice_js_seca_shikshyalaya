export function addColor(car, color) { return { ...car, color }; }
const car = { make: 'Toyota', model: 'Corolla' };
console.log('task17 original car:', car);
console.log('task17 new car:', addColor(car, 'red'));