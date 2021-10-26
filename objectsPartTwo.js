// method, function kaise add krein object mein

var user = {
    firstName : "Rohit",
    lastName : "Sharan",
    role  : "Admin",
    CourseList : [],  // isme hmko add krna hai courses maan lo 
    buyCourse : function (CourseName){
        this.CourseList.push(CourseName); }  ,        // yhan pe this. ka mtlb hota hai user. and push to array m add krne keliye hoga
        
    getCourseCount : function (){
    return `${this.firstName} is enrolled in ${this.CourseList.length} courses`;
    }
    



};
var CourseList =true;  // ye bss aisehi show krne keliye hain ki agr same cheez kahin or bhi call ki gyi hai to 
// shii jagah pr kaise update krein 
console.log(user.firstName);
user.buyCourse ("react Course");
user.buyCourse (" angular");
console.log(user.getCourseCount())