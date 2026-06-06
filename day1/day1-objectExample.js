let obj={
    price: 567.8,
    "name":"television",
    status: true,
}
//accessing value pf object with key
//1. Bracket Notation
console.log("price:",obj["price"])
console.log('Status: ',obj["status"])

//2.dot notation
console.log("using dot product")
console.log("name: ",obj.name)
console.log("price with dot: ",obj.price)

//3. adding new key:value 
obj.address="ktm"
console.log("after adding:",obj)

//4. updating existing value
obj.status=false
console.log("after updating:",obj)

//5.deleting key:value pair
delete obj.price
console.log("after deleting:",obj)