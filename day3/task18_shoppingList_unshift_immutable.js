export function addItemBeginning(list, item) { return [item, ...list]; }
const shoppingList = ['milk','eggs'];
console.log('task18 new list:', addItemBeginning(shoppingList,'bread'));