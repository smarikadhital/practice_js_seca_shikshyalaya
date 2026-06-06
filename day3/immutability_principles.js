
 //IMMUTABILITY TASKS - ALL IN ONE FILE


// 1. Update age immutably (25 → 26)
const person1 = { name: "Ram", age: 25 };
const updatedPerson1 = { ...person1, age: 26 };
console.log(updatedPerson1);


// 2. Add new hobby immutably
const person2 = {
  name: "Sita",
  hobbies: ["reading", "music"]
};

const updatedPerson2 = {
  ...person2,
  hobbies: [...person2.hobbies, "coding"]
};

console.log(updatedPerson2);


// 3. Remove last element immutably
const arr1 = [1, 2, 3, 4];
const removedLast = arr1.slice(0, -1);

console.log(removedLast);


// 4. Replace second element immutably
const arr2 = [10, 20, 30];
const replacedSecond = [
  arr2[0],
  99,
  ...arr2.slice(2)
];

console.log(replacedSecond);


// 5. Change nested property (address.city) immutably
const user1 = {
  name: "Hari",
  address: {
    city: "Kathmandu",
    country: "Nepal"
  }
};

const updatedUser1 = {
  ...user1,
  address: {
    ...user1.address,
    city: "Lalitpur"
  }
};

console.log(updatedUser1);


// 6. Add new key-value pair immutably
const obj1 = { a: 1 };
const updatedObj1 = { ...obj1, b: 2 };

console.log(updatedObj1);


// 7. Remove property (deletedAt) immutably
const obj2 = {
  id: 1,
  name: "Test",
  deletedAt: "2026-01-01"
};

const { deletedAt, ...cleanObj } = obj2;

console.log(cleanObj);


// 8. Merge two arrays immutably
const arrA = [1, 2];
const arrB = [3, 4];

const mergedArray = [...arrA, ...arrB];

console.log(mergedArray);


// 9. Merge two objects immutably
const objA = { a: 1 };
const objB = { b: 2 };

const mergedObject = { ...objA, ...objB };

console.log(mergedObject);


// 10. Update object in array by id immutably
const users = [
  { id: 1, name: "Ram" },
  { id: 2, name: "Sita" },
  { id: 3, name: "Hari" }
];

const updatedUsers = users.map(user =>
  user.id === 2
    ? { ...user, name: "Updated Sita" }
    : user
);

console.log(updatedUsers);