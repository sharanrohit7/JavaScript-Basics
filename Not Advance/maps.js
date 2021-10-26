var myMap = new Map();
myMap.set(1, "one");
myMap.set(2, "Two")
myMap.set(3, "Three")
myMap.set(4, "Four")

console.log(myMap);

//How to grab values from these maps

//to print the keys
for (const key of myMap.keys()) {
    console.log(`the key is ${key}`);
}

//to print the value

for (const value of myMap.values()) {
    console.log(`the value is ${value}`);
}

//ab agr dono ko print krwaana chahein

for (const [key, value] of myMap) {
    console.log(`key is : ${key} and value is ${value}`);
}