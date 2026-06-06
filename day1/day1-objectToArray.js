let student={
    fullName : "Harka Bahadur",
    roll:89,
    marks:9888,
    behaviour:"very worst"
}

//converting object (key: value pair) to array
//loop cannot be used directly in object so we have ti convert it to array
//conversion ways:
let keyArray= Object.keys(student)
console.log("only key array: ",keyArray)
let valueArray = Object.values(student)
console.log("only value array: ",valueArray)
//value and key combination is called entries
let entriesArray=Object.entries(student)
console.log("entries array:",entriesArray)

//to do: use map,foreach,Find,Filter,Reduce,for-in,for-of for  these keyArray,valueArray,entriesArray(use destructing techniues technique on entries)