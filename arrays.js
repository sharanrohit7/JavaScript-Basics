var states = new Array ("Rajasthan", "Delhi", "Mumbai", "Patna");
// console.log(states);
// console.log(states[1]);
// console.log(states.length);
// states [0] ="punjab"
// console.log(states);

//other commands 

// to pop out last elements in the array

// states.pop();  // repeating it will remove one object every time
// console.log(states);

//To edit the value at very first 

// states.unshift("Porbandar");
// console.log(states);

//to delete the first

states.shift();
console.log(states);
//console.log(states.length);

//To find where in the array an object is placed we use index of

console.log(states.indexOf("Delhi"))
console.log(states.indexOf("Patna"))
