// defining objects in the function or you can say that this is the functional approach to 
// to define an object

var User = function (firstName, CourCount){
    this.firstName =firstName;
    this.CourCount = CourCount;
    this.getCourseCount= function (){
        console.log(`Course count is ${this.CourCount}`);
    }

}
User.prototype.getFirstName = function () {  //iss poore function ko hm upar waale ki tarah kr skte the lekin
    // big scale project m aisehi hota

    console.log(`Your First Name is : ${this.firstName}`);
    

} // ab isme bahot error aata hai mistake se undefine hone ka to ek cross check keliye code likhenge






// ab is above prototype mein agr hm data ghusayein to workk krne keliye "New " keyword ka use krna padega
// agr direct user() krke ghusaye to unidentified hojayega
var rohit = new User("Rohit", 2)   
//from  line no.18 ka comments.. jahan keliye check krna hai uske neeche likhenge   
if (rohit.hasOwnProperty("firstName")){   //ye hasOwnProperty proto ka hi hai joki broswer pe dikhta hai
    rohit.getFirstName();
}
// console.log(rohit);
var aalia = new User("Aalia", 3);


// console.log(aalia);