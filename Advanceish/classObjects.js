const User = require ('./classjs');
const hitesh = new User("Hitesh", "Rohit@gmail.com")
//console.log(hitesh.getInfo());
// ab thoda course bharte haih

hitesh.enrollCourse("react course")
hitesh.enrollCourse("Angular Course")
//console.log(hitesh.getCourseList); //course list array h uss page m to print as an array hi hoga
// agr as a string print karana hai to
//for each loop se print krdenge
let courses = hitesh.getCourseList();

courses.forEach((c) => {
    console.log(c);;
});


//nw to find the total courses

console.log(`total no. of courses are ${hitesh.getCourseList.length}`);
