//higher order function: those function whih has function as a parameter and /or returns function
//res=(A*B)/(C+D)
let calculateComplex=(A,B,C,D,multiplyFunc,sumFunc)=>{
    return multiplyFunc(A,B)/sumFunc(C,D)

}
let resultComplex= calculateComplex(
     24,26,67,34,
     (a,b)=>{
      console.log("multiply=",a*b)
      return a*b
  
     },
     (c,d)=>c+d,
)
console.log("complex calculaion result:",resultComplex)