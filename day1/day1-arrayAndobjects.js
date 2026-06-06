//array is arrray[]
//object is key value pair as {}
//array example
let fruits=["apple","coconut","orange","mango"]
//getting element of some index
console.log(`fruits at 0:${fruits[0]}`)
//adding new elements
fruits.push("papaya")
console.log(`all fruits:${fruits}`)
//removing lat element or pop
fruits.pop()
console.log(`after pop:${fruits}`)
//updating element of index 2
fruits[2]="banana"
console.log(`After update at 2:${fruits}`)
//finding index of element
let indexOfCoconut=fruits.findIndex((ele)=>{
    return ele=="coconut"
})
console.log(`index of coconut:${indexOfCoconut}`)
//finding element in array
let matchedEle=fruits.find((ele)=>{
    return ele =="mango"

})
console.log(`matched ele:${matchedEle}`)
//removing or deleting element of specific index
//splice(index,numberOFElement)
fruits.splice(2,1)
console.log(`after removing of index 2:${fruits}`)
//creating sublist from main list
//slice(a,b):a:starting index,b:index to where sub list should be created but element of index b is not included
let fruitsSubList=fruits.slice(1,3)
console.log(`sub list:${fruitsSubList}`)
//loop in array
fruits.forEach(
    (element,index)=>{
        console.log(`index:${index}, Element:${element}`)
    }
)
//modify the fruits array and make each element to uppercase 
let modifiedFruits=fruits.map(
    (e,i)=>{
        return e. toUpperCase()
    }
)
console.log("modidfied fruits:",modifiedFruits)