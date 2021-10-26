// var isEven = (element) =>{
//     return element%2 === 0;
// }
// //console.log(isEven(4));

// var Number = [2,5,6,8].every(isEven); // ye isEven refrence hoga uss functiion ka jisse ye operate krega 
// console.log(Number);

// 2nd Method is using a callback/Arrow function

var Number2 = [2,4,6,8].every((e)=>{
      return e%2 === 0;  //jb bhi arrow function use hoga we need to return something
});

console.log(Number2);
//Method 3 by not using arrow function ... AF mein {} ke andr return karana padega agr return ni karana to aise process hogi

var num3 =[2,3,6,8].every((e) => (e%2 ===0 ));
console.log(num3);