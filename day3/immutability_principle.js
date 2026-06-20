//original fruits array
let fruits=["apple","mango"]
fruits.push("orange")
console.log("fruits are:",fruits)
//all array and object are mutable initially
let tempFruits=fruits
tempFruits.push("temp fruits:",tempFruits)
console.log("original fruits",fruits)
//immutability principle:original array or object should never be changed i.e.must be immutable forever
//for this use spread operator
let newfruits=[...fruits]
newfruits.push("strawberry")
console.log("new fruits:",newfruits)
console.log("origial fruits:",fruits)