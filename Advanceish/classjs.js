class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    #courseList = [];
    getInfo(){
        return{name: this.name, email: this.email}
    }
    enrollCourse(name){
        this.#courseList.push(name)
    }
    getCourseList(){
        return this.#courseList
    }
    static login(){
        return "You are logged in"
    }
}


module.exports = User;

// ab jayebfe classObjects.js mein

//ab aata private variables ... #-sign hota hai.. ye bss uss class ke ander operate krega bahar nhi

//INHERITENCE

//AB maanlo hmko ek or class banana hai jnki kuchh property milti to above class se

class SubAdmin extends User{ //ye extend word inherit krega properties
constructor(name, email){
    super(name, email);  //ye supar this ki jagah use hua hai
}
//ab agr extra kuchh properties add krni hain to 
getAdminInfo(){
    return "I am sub-Admin"
}
}

const tom = new SubAdmin("Tom", "tom@jerry.com");
console.log(tom.getAdminInfo()); //ye tom class m declared h
console.log(tom.getInfo()); // lekin ye inheritence se aaya hai
  //Ab agr privacy keliye kisi ko sirf usi class m rakhna hai or inherit nhi kaerana
  //to uss function/method ke phle static use krenge as in LNE 16
  //Ab agr usko same tarahg se iss class m declare krenge to error dikhayefa
//   console.log(tom.login());