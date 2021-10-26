//SLICE - ek chunk nikaalne birthdqy cake ka
// 1st element include hoga i.e inclusive and last element exculde hojayega i.e  called exclusive

var users = ["tim", "ton", "Aalia", "rohit", "adil"]

// console.log(users.slice(1, 3));

//Splice - value change hoga beech array ke andr
// yahah hoga ki first value ko count krega in this case 1, uske baad jo hm second value
// put krenge wahan tk count krke usko omit krke new value jo hm put kiye hain to print hoga

users.splice(1,2 ,"hi",) // ton se count hua.. uske baad 2 element count kiye ton and aalia uske baad un dono
// ki jagah Hi put krdiya
console.log(users);   // isme hm kitna bhi value put kr skte hain e.h "hi", "bye" etc