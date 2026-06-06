// HIGHER ORDER FUNCTIONS
// 1. repeat(action, times)
function repeat(action, times) {
  for (let i = 0; i < times; i++) {
    action();
  }
}

// 2. operate(arr, fn)
function operate(arr, fn) {
  return arr.map(fn);
}

// 3. filterBy(arr, conditionFn)
function filterBy(arr, conditionFn) {
  return arr.filter(conditionFn);
}

// 4. logger(fn)
function logger(fn) {
  return function (...args) {
    console.log("before");
    const result = fn(...args);
    console.log("after");
    return result;
  };
}

// 5. createAdder(x)
function createAdder(x) {
  return function (y) {
    return x + y;
  };
}

// 6. sortBy(arr, key)
function sortBy(arr, key) {
  return [...arr].sort((a, b) => {
    if (typeof a[key] === "number" && typeof b[key] === "number") {
      return a[key] - b[key];
    }
    return String(a[key]).localeCompare(String(b[key]));
  });
}

// 7. pipeline(...functions)
function pipeline(...functions) {
  return function (value) {
    return functions.reduce((acc, fn) => fn(acc), value);
  };
}

// 8. withTax(taxRate)
function withTax(taxRate) {
  return function (price) {
    return price + price * taxRate;
  };
}

// 9. debounce(fn, delay)
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// 10. memoize(fn)
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);

    return result;
  };
}

// =========================
// TESTING ALL FUNCTIONS
// =========================

// Task 1
console.log("\nTask 1:");
repeat(() => console.log("Hello"), 3);

// Task 2
console.log("\nTask 2:");
const doubled = operate([1, 2, 3, 4], num => num * 2);
console.log(doubled);

// Task 3
console.log("\nTask 3:");
const evens = filterBy([1, 2, 3, 4, 5, 6], num => num % 2 === 0);
console.log(evens);

// Task 4
console.log("\nTask 4:");
function add(a, b) {
  return a + b;
}

const loggedAdd = logger(add);
console.log("Result:", loggedAdd(5, 3));

// Task 5
console.log("\nTask 5:");
const add10 = createAdder(10);
console.log(add10(5));
console.log(add10(20));

// Task 6
console.log("\nTask 6:");
const students = [
  { name: "Smarika", age: 20 },
  { name: "Anshu", age: 18 },
  { name: "Rita", age: 22 }
];

console.log(sortBy(students, "age"));

// Task 7
console.log("\nTask 7:");
const processNumber = pipeline(
  x => x + 2,
  x => x * 3,
  x => x - 1
);

console.log(processNumber(5));

// Task 8
console.log("\nTask 8:");
const addVAT = withTax(0.13);
console.log(addVAT(1000));

// Task 9
console.log("\nTask 9:");
const debouncedHello = debounce(() => {
  console.log("Debounced Function Executed");
}, 1000);

debouncedHello();
debouncedHello();
debouncedHello();

// Task 10
console.log("\nTask 10:");

function square(n) {
  console.log("Calculating...");
  return n * n;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5));
console.log(memoizedSquare(10));
console.log(memoizedSquare(10));