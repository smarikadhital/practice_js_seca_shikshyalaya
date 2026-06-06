let numbers=[34,23,43,12,]

console.log("without spread: ", numbers)
console.log("with spread operator: ",...numbers)

//rest and spread operator
//merging two arrays
let maxNums =[789,678]
let mergedArr=[...numbers,...maxNums]
console.log("merged array: ",mergedArr)

//rest example
let add=(...values)=>{
    let res = values.reduce(
        (accumulator,ele)=>{
            return accumulator + ele
        },
        0 //initial value of accumulator
    )
    console.log("add result: ",res)
}
add(...numbers)
add(34,56,23,1,2,3,4,5,6)

let obj1 = {
    name:"ram prasad",
    age: 23

}
let obj2 = {
    school : "abc school",
    favSubject:"math"

}
let mergedObj = {...obj1,...obj2}
console.log("merged obj: ",mergedObj)