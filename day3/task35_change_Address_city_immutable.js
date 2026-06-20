const user = { name:'Lee', address:{ city:'Old', country:'X' } };
const updated = { ...user, address: { ...user.address, city: 'New' } };
console.log('task35 updated address:', updated.address);
export { updated };