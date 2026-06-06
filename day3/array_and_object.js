
 //ARRAYS & OBJECTS - ALL IN ONE FILE

// 1. Array colors (log 3rd element)
const colors = ["red", "blue", "green", "yellow", "pink"];
console.log("Third color:", colors[2]);

// 2. Object book
const book = {
  title: "Clean Code",
  author: "Robert C. Martin",
  pages: 400,
  publishedYear: 2008
};
console.log(book);

// 3. Add property immutably (isRead: true)
const updatedBook = {
  ...book,
  isRead: true
};
console.log(updatedBook);

// 4. Array of 3 student objects
const students = [
  { name: "Aarav", grade: 85 },
  { name: "Sita", grade: 92 },
  { name: "Ram", grade: 78 }
];
console.log(students);

// 5. Nested object company
const company = {
  name: "Tech Nepal",
  location: "Kathmandu",
  employees: ["Ram", "Shyam", "Hari"]
};
console.log(company);

// 6. Increase numbers by 5 immutably
const numbers = [10, 20, 30];
const increasedNumbers = numbers.map(num => num + 5);
console.log(increasedNumbers);

// 7. Add property to car immutably
const car = {
  brand: "Toyota",
  model: "Corolla"
};

const updatedCar = {
  ...car,
  color: "red"
};
console.log(updatedCar);

// 8. Add item at beginning immutably
const shoppingList = ["milk", "bread", "eggs"];
const newShoppingList = ["rice", ...shoppingList];
console.log(newShoppingList);

// 9. Nested object profile with address
const profile = {
  name: "Basant",
  address: {
    city: "Kathmandu",
    country: "Nepal"
  }
};
console.log(profile);

// 10. Extract only name and price from products
const products = [
  { name: "Pen", price: 10, stock: 50 },
  { name: "Book", price: 200, stock: 20 },
  { name: "Bag", price: 500, stock: 10 }
];

const simplifiedProducts = products.map(({ name, price }) => ({
  name,
  price
}));
console.log(simplifiedProducts);