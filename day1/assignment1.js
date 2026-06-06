let student = {
    name: "Smarika",
    age: 20,
    faculty: "BSc CSIT"
};

// Convert object into arrays
let keyArray = Object.keys(student);
let valueArray = Object.values(student);
let entriesArray = Object.entries(student);

console.log("object to array");
console.log("Keys Array:", keyArray);
console.log("Values Array:", valueArray);
console.log("Entries Array:", entriesArray);



//map

console.log("map");

// keyArray
let mapKeys = keyArray.map(key => key.toUpperCase());
console.log("Mapped Keys:", mapKeys);

// valueArray
let mapValues = valueArray.map(value => value.toString());
console.log("Mapped Values:", mapValues);

// entriesArray using destructuring
let mapEntries = entriesArray.map(([key, value]) => {
    return key + " = " + value;
});
console.log("Mapped Entries:", mapEntries);



//forEach

console.log("forEach");

// keyArray
console.log("Keys:");
keyArray.forEach(key => {
    console.log(key);
});

// valueArray
console.log("Values:");
valueArray.forEach(value => {
    console.log(value);
});

// entriesArray
console.log("Entries:");
entriesArray.forEach(([key, value]) => {
    console.log(key + " : " + value);
});


//find

console.log("find");

// keyArray
let findKey = keyArray.find(key => key === "age");
console.log("Found Key:", findKey);

// valueArray
let findValue = valueArray.find(value => value === 20);
console.log("Found Value:", findValue);

// entriesArray
let findEntry = entriesArray.find(([key, value]) => key === "faculty");
console.log("Found Entry:", findEntry);


//filter

console.log("filter");

// keyArray
let filterKeys = keyArray.filter(key => key.length > 3);
console.log("Filtered Keys:", filterKeys);

// valueArray
let filterValues = valueArray.filter(value => typeof value === "string");
console.log("Filtered Values:", filterValues);

// entriesArray
let filterEntries = entriesArray.filter(([key, value]) => {
    return typeof value === "string";
});
console.log("Filtered Entries:", filterEntries);



//reduce

console.log("reduce");

// keyArray
let reduceKeys = keyArray.reduce((acc, key) => {
    return acc + " " + key;
});
console.log("Reduced Keys:", reduceKeys);

// valueArray
let reduceValues = valueArray.reduce((acc, value) => {
    if (typeof value === "number") {
        return acc + value;
    }
    return acc;
}, 0);

console.log("Reduced Values:", reduceValues);

// entriesArray
let reduceEntries = entriesArray.reduce((acc, [key, value]) => {
    return acc + key + ":" + value + " ";
}, "");

console.log("Reduced Entries:", reduceEntries);



//for in

console.log("for in");

for (let key in student) {
    console.log(key + " : " + student[key]);
}



//for of

console.log("for of");

// keyArray
console.log("Keys:");
for (let key of keyArray) {
    console.log(key);
}

// valueArray
console.log("Values:");
for (let value of valueArray) {
    console.log(value);
}

// entriesArray using destructuring
console.log("Entries:");
for (let [key, value] of entriesArray) {
    console.log(key + " : " + value);
}