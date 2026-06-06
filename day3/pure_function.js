
 //PURE FUNCTIONS - ALL IN ONE FILE

// 1. Multiply
function multiply(a, b) {
  return a * b;
}

// 2. Get Full Name
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

// 3. Check Even Number
function isEven(num) {
  return num % 2 === 0;
}

// 4. Capitalize String
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 5. Calculate Area of Circle
function calculateArea(radius) {
  return 3.14 * radius * radius;
}

// 6. Get Initials
function getInitials(firstName, lastName) {
  return firstName[0] + "." + lastName[0] + ".";
}

// 7. Fahrenheit to Celsius
function fahrenheitToCelsius(f) {
  return (f - 32) * (5 / 9);
}

// 8. Reverse String
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 9. Find Maximum Number
function findMax(arr) {
  return Math.max(...arr);
}

// 10. Format Date (DD/MM/YYYY)
function formatDate(year, month, day) {
  return (
    String(day).padStart(2, "0") + "/" +
    String(month).padStart(2, "0") + "/" +
    year
  );
}



 //TESTING (SAMPLE OUTPUT)


console.log("Multiply:", multiply(2, 3));
console.log("Full Name:", getFullName("Dipak", "Shrestha"));
console.log("Is Even:", isEven(10));
console.log("Capitalize:", capitalize("hello"));
console.log("Area:", calculateArea(5));
console.log("Initials:", getInitials("Dipak", "Shrestha"));
console.log("Celsius:", fahrenheitToCelsius(100));
console.log("Reverse:", reverseString("hello"));
console.log("Max:", findMax([1, 5, 9, 3]));
console.log("Date:", formatDate(2026, 6, 2));