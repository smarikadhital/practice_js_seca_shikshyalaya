let PI=3.14
let speedoflight="3*10^8"
let myMarks=45.0
export let calculateAreaOfCircle=(radius)=>{
    return PI*radius*radius
}

//default export
export default PI
//named export
export {speedoflight,myMarks}
/*
{
"speedoflight":"3*10^8",
"myMarks":45.0}

*/