let animals = ["cow", "dog", "cat"];

// destructuring array
let [a1, a2] = animals;

console.log("a1:", a1);
console.log("a2:", a2);

let animal = {
    name: "cow",
    color: "brown",
    no_of_legs: 4,
};

// // destructuring object
// let { color, no_of_legs, name } = animal;

// console.log("Name:", name);
// console.log("no of legs:", no_of_legs);

//using destructuring in functiom parameters
console.log("inside function :")
let myFunc = ({name ,color})=>{
    console.log("name :", name)
    console.log("color: ",color)
}
myFunc(animal)
