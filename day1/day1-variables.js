console.log("hello,welcome");

// let,const,var:dynamically typed datatype
let a = 10
const PI = 3.14
var msg = "hello"

console.log(a, PI, msg)

// var:function scope
function display() {
    var x = 100
    console.log("inside display:", x)
}

display()

//console.log("outside display:", x)
//block scope variable
if(true){
    var test="Test"
    let price =100;
    console.log("price:",price)
}
console.log("outside block:")
console.log(test)
// console.log(price)
//arrow function
let add =(a,b)=> a+b //inline
let res = add(10,51)
console.log("res:",res)
let dis=(name)=>{
    console.log("name is",name)
    console.log("hello",name)

}
dis("hari")
//template literals:embeding variables value inside the string
//syntax:`$`
let message ="welcome to first day js practice"
let name="pradip shrestha"
let role ="Director"
let salary=40000
//using template literals to combine all these variables value
let combineMsg=`${message},My full name is ${name.toUpperCase()} and my role is ${role}.My salary is ${salary}`
console.log(combineMsg)
// //without using template literals or can say traditional way
// let traditionalMsg=message+",Myfull name is"+name.toUpperCase()+"and my role is"+role+"my salary is"+salary
// console.log(traditionalMsg)

//default parameter
let divide=(a=1,b=1)=>{
    let divRes=a/b
    console.log(`divide result =${divRes}`)
}
divide()
divide(34)
divide(45,5)


