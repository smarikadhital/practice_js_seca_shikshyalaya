
 //ARRAY METHODS - ALL IN ONE FILE


// 1. map → double all numbers
const nums1 = [1, 2, 3, 4, 5];
const doubled = nums1.map(n => n * 2);
console.log("Doubled:", doubled);


// 2. filter → even numbers
const nums2 = [1, 2, 3, 4, 5, 6];
const evens = nums2.filter(n => n % 2 === 0);
console.log("Even numbers:", evens);


// 3. reduce → sum
const nums3 = [10, 20, 30, 40];
const sum = nums3.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);


// 4. find → first user age > 18
const users1 = [
  { name: "A", age: 16 },
  { name: "B", age: 20 },
  { name: "C", age: 25 }
];

const firstAdult = users1.find(user => user.age > 18);
console.log("First adult:", firstAdult);


// 5. forEach → log elements with index
const fruits = ["apple", "banana", "orange"];

fruits.forEach((item, index) => {
  console.log(index, item);
});


// 6. map → extract names
const users2 = [
  { name: "Ram", age: 20 },
  { name: "Sita", age: 22 },
  { name: "Hari", age: 17 }
];

const names = users2.map(user => user.name);
console.log("Names:", names);


// 7. filter → products price < 100
const products = [
  { name: "Pen", price: 50 },
  { name: "Book", price: 150 },
  { name: "Pencil", price: 20 }
];

const cheapProducts = products.filter(p => p.price < 100);
console.log("Cheap products:", cheapProducts);


// 8. reduce → maximum value
const nums4 = [3, 9, 2, 15, 6];

const max = nums4.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, nums4[0]);

console.log("Max value:", max);


// 9. map + filter → adult names in uppercase
const users3 = [
  { name: "ram", age: 17 },
  { name: "sita", age: 20 },
  { name: "hari", age: 25 }
];

const adultNamesUpper = users3
  .filter(user => user.age >= 18)
  .map(user => user.name.toUpperCase());

console.log("Adult names:", adultNamesUpper);


// 10. forEach → build HTML list
const items = ["Home", "About", "Contact"];

let html = "<ul>";

items.forEach(item => {
  html += `<li>${item}</li>`;
});

html += "</ul>";

console.log("HTML List:", html);