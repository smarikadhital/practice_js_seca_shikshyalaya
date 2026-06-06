// Task 1 – Variables and Template Literals

let firstName = "Smarika";
let lastName = "Dhital";

let message = `Hello ${firstName} ${lastName}!`;
console.log(message);


// Task 2 – let and const Scope

{
    let a = 10;
    const b = 20;

    console.log(a);
    console.log(b);
}

// console.log(a); // Error
// console.log(b); // Error


// Task 3 – Arrow Function Simple

const greet = (name) => `Hello, ${name}!`;

console.log(greet("Smarika"));


// Task 4 – Arrow Function with Multiple Parameters

const multiply = (x, y) => x * y;

console.log(multiply(5, 6));


// Task 5 – Object Destructuring

const person = {
    name: "Smarika",
    age: 20,
    country: "Nepal"
};

const { name, country } = person;

console.log(name);
console.log(country);


// Task 6 – Array Destructuring

const numbers = [10, 20, 30, 40];

const [first, second] = numbers;

console.log(first);
console.log(second);


// Task 7 – Default Parameters

function sayHello(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(sayHello());
console.log(sayHello("Smarika"));


// Task 8 – Rest Operator

function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll(1, 2, 3, 4));


// Task 9 – Spread Operator with Arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray);


// Task 10 – Merge and Destructure Objects

const obj1 = {
    a: 1,
    b: 2
};

const obj2 = {
    c: 3,
    d: 4
};

const mergedObject = {
    ...obj1,
    ...obj2
};

const { a, d } = mergedObject;

console.log(a);
console.log(d);