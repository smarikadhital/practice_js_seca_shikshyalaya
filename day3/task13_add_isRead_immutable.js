export function addIsRead(book) {
  return { ...book, isRead: true };
}
const original = { title:'1984', author:'Orwell' };
console.log('task13 original unchanged:', original);
console.log('task13 new:', addIsRead(original));