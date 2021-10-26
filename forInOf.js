//Forof - Majorly used with Array
// forIn - Majorly with the objects

// const names = ["Youtube", "facebook", "amazon","Netflix","Instagram"];
// for (const n of names) { //n ek iterator imagine kro and of ke baad jiska loop chalana hai uska naam daalo
//     console.log(n)
    
// }

//On objects
//short term ko keys bole i.e yt -youtube  or full form ko value , to agr
// key access krna hai to 
const symbol = {
    yt : "Youtube",
    Fb : "Facebook",
    ig : "Instagram"
}
for (const n in symbol) {
    console.log(n);
}  

// or agr iska value print krna hai to

for (const n in symbol){
    console.log(symbol[n]);
}

//or agr keys and value dono chahiye to 

for(const n in symbol){
    console.log(`Key is ${n} and value is symbol[n]`);
}