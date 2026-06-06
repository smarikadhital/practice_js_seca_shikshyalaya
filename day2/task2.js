
// TASK 1 — this in object
const user = {
  name: "Smarika",
  login() {
    console.log(`User logged in: ${this.name}`);
  }
};

user.login();

// TASK 2 — this losing context + bind
const button = {
  label: "Submit",
  click() {
    console.log( this.label);
  }
};

const fixedContext = button.click.bind(button);
fixedContext();

// TASK 3 — config module concept (ESM style)
const API_BASE_URL = "https://api.example.com";
console.log(API_BASE_URL);

// TASK 4 — utility functions
function formatCurrency(amount) {
  return `Rs ${amount.toFixed(2)}`;
}

function generateRandomId() {
  return Math.floor(Math.random() * 10000);
}

function getTodayDate() {
  return new Date().toDateString();
}

console.log(formatCurrency(250));
console.log( generateRandomId());
console.log(getTodayDate());

// TASK 5 — Product Class
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `${this.name} costs Rs ${this.price}`;
  }
}

const p1 = new Product("Laptop", 90000);
console.log(p1.getInfo());
// TASK 6 — Inheritance
class FoodProduct extends Product {
  constructor(name, price, expiryDate) {
    super(name, price);
    this.expiryDate = expiryDate;
  }

  getInfo() {
    return `${this.name} - Rs ${this.price} (Expires: ${this.expiryDate})`;
  }
}

const f1 = new FoodProduct("Milk", 120, "2026-06-10");
console.log(f1.getInfo());

// TASK 7 — Promise
function getSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ theme: "dark", language: "en" });
    }, 1000);
  });
}

getSettings().then((data) => {
  console.log("Task 7:", data);
});

// TASK 8 — async/await
function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Alice", "Bob", "Charlie"]);
    }, 1000);
  });
}

async function loadUsers() {
  const users = await fetchUsers();
  console.log(users);
}

loadUsers();


// TASK 9 — async + error handling
function fetchUsersWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;

      if (success) {
        resolve(["Alice", "Bob"]);
      } else {
        reject("Network Error");
      }
    }, 1000);
  });
}

async function loadUsersSafe() {
  try {
    const users = await fetchUsersWithError();
    console.log(users);
  } catch (err) {
    console.log("Friendly error - Unable to load users");
  }
}

loadUsersSafe();

// TASK 10 — Mini App Flow
function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        new Product("Phone", 50000),
        new Product("Tablet", 30000)
      ]);
    }, 1000);
  });
}

async function runApp() {
  try {
    console.log("API =", API_BASE_URL);

    const products = await fetchProducts();

    products.forEach((p) => {
      console.log(p.getInfo());
    });

  } catch (err) {
    console.log(" Error:", err);
  }
}

runApp();