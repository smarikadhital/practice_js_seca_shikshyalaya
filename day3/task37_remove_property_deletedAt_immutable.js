const obj = { id:1, deletedAt: '2020-01-01' };
const { deletedAt, ...rest } = obj;
console.log('task37 rest without deletedAt:', rest);
export { rest };