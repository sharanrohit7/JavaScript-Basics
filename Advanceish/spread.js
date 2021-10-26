//There are two operators SPREAD and REST

//Maximum value
// var GreatValue = Math.max(1,2,3,4,5,6,7,8,9);
// console.log(GreatValue);

// //Do alag alag ko ek jagah array mein lana

// var Obj = {};
// Object.assign(Obj, { a:1, b:2, c:3}, {x:4,y:3,z:2} )

// console.log(Obj);

function sumOne(a,b){
return a+b;
}

var myA = [5,4]

//console.log(sumOne(myA));  // yahan pe undefined aayega kyunki a & b individual values hain 
//and hm parameter pass kr rhe hain ek group mein that is in array form here
//to kya hoga ki yahan pe [...myA] use krenge that is spread operator jo ki array ke value ko nikaal kr put krdega

console.log(sumOne(...myA));

//Ab yaha tk to hm bss 2,3 no. ko add wagera krne dekhe hain
//lekin what if hmko unlmited no. add krna ho or excatly pata nhi kitna arguments banana hai to uss case mein

//args ka use hoga
// function sumTwo(...args) {   //ab suppose krna hai ki args ek array ahai and we need to loop through the values
//     let sum =0;   //and iss ...args ko rest operator bolte hain
//     for (const arg of args) {
//         sum +=arg;
//     }
//     return sum;
// }
// console.log(sumTwo(2,3,4,5,6,7,854));

//conclusion : SPREAD : Array ya grouped item ko individual bana kr add krta hai
//             REST   : Individual Item ko as an array add krta hai

//ab lets suppose kisi case mein hmko 1-2nd ko alag compute krna hai hai and baaki ko alag
function sumTwo(a,b,...args) {// to yahan first two places ko alag krliye  
    let multi = a*b;

    let sum =0;   
    for (const arg of args) {
        sum +=arg;
    }
    return [sum , multi]; // ab hm yaha kisi bhi tarah return kara skte hm as an array kara rhe abhi
}
console.log(sumTwo(2,3,1,1,1));
