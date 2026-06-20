//pure function:those function whch doesnot have side effects that means external variable doesnot effect the result of the function
const PI = 3.14
//pure function
let calculate =(x,y)=>{
    console.log("sum of xand y :",x+y)
}
//impure function
let calculateAreaofCircle=(radius)=>{
    console.log("area of circle is:",PI*radius*radius)
}
calculate(23,67)
calculateAreaofCircle(11)