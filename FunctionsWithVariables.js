 var getUserRole = function (name,role){
switch(role) {
    
    
         case "admin":
        return `${name} is admin with all the access`
        break;

        case "subAdmin":
            return `${name} is sub-admin with access to create and delete courses`
            break; 
        case "testprep":
        return `${name} is testprep with all the access to create or delete test`
        break;
        case "User":
            return `${name} is a user to consume content`
            break;
        
        default:
            return `${name} is a trial user`
        break;
}

}

getUserRole("hitesh", "admin");

var UserType =getUserRole("hitesh", "admin");
console.log(UserType);