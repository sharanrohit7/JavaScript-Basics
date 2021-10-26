const hitesh = {
     firstName : "Hitesh",
     lastname : "Choudhry",
     courseCount : 3,
     getCourseCount : function(){console.log(`
     ${this.firstName} ${this.lastname} has a course count of ${this.courseCount}
     `)}
}

hitesh.getCourseCount();

//ab hm kya chah rhe ki ek baar function define krke alag object ka print karayein 
//to ek naya object bana rhe

const rohit = {
    firstName :"Rohit",
    lastname : "Sharan",
    courseCount:3
}

// yahan pe rohit.getCourseCount() krenge to print nhi krega kuchh

// iske liye bind ya call ka use krenge

//Using BIND

// hitesh.getCourseCount.bind(rohit); // ye bss value apne andr change krke assign krlega hitesh ki jagah rohit object
//iskko print karane keliye ya to ek variable m save kara ke print karayein yaa fir direct ek () dedein

//option 1 
//hitesh.getCourseCount.bind(rohit)();
//option 2

// var y = hitesh.getCourseCount.bind(rohit);
// y();

//to BIND hamesha ek refrence back deta hai or usko fir print karana alag se padega
//or agr CALL use kiye to directly hojayega print

hitesh.getCourseCount.call(rohit);