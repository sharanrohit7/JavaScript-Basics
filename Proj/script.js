const courses = [
    {
        name: "Complete ReactJS Course",
        price: "2.3"
    },
    {
        name: "Complete Angular Course",
        price: "2.1"
    },
    {
        name: "Complete MERN Course",
        price: "2.7"
    },
    {
        name: "Complete C++ Course",
        price: "2.2"
    },
]
 // ab index.html waale block mein kaise add krein saari chezzein jiska code souce ye hai

//  <ul class="list-group"> LINE 26
//         <li class="list-group-item"> LINE 32 -34
//           Javascript course<span class="float-right">$2.1</span> --yahan JS COURSE likha hai isko text node bolte hain
//         </li>
//       </ul>
function generateList(){
    const ul = document.querySelector(".list-group")                              //ab html mein ul mein hai saari cheezein to hmko wahan pe generate krne keliye
    ul.innerHTML =""; 
    courses.forEach(course =>{//ye hoga loop mein saare array ko daalne keliye  abd Foreach allows you to have a callback funciton

     // Ab index.html mein list item ke andr hai ek.. to yaha sbke liye list item create krna padega

     const li = document.createElement("li")  // ye <li><\li> represent krega
     // <li class="list-group-item"> ab yaham class = list.... aise krne keliye
     li.classList.add("list-group-item")

     const name = document.createTextNode(course.name) //Ye bss assign krega name ko
     li.appendChild(name)     //ye list item mein as a text node add krdega name 
     //ab Span add krna hai
     const span = document.createElement("span")   //<span> </span>
     // ab span ke aage class add krna hai
     span.classList.add("float-right")  // <span class="float-right"></span>
     const price = document.createTextNode("$ "+course.price)  //ye bss assign hua hai
     span.appendChild(price)   //<span class="float-right">$2.1</span>
    //Abhi span independet hai ab isko list item ke andr inject krna hai

    li.appendChild(span)   //span is injected
    // ab abhi list item independent hai to ab finally usko unordered list ke andr daalna hai
    ul.appendChild(li);
    
    })                      
}

//generateList();
window.addEventListener("load",generateList);
// ab hmko wo button click krke sort krna hai price ascending order mein
// sbse phle button ka refrence lenge
//<button
// {type="button"
// class="btn btn-success btn-lg mt-4 mx-auto d-block sort-btn"
// >
// Sort courses
// </button>

// ye yahan se button ka id leliye hain}
const button = document.querySelector(".sort-btn")
button.addEventListener("click", () =>{// ab yahan hm click ke baad method bhi likh skte.. phle bana ke isme assign krdein nhi to yahin pe ek call back function banayein

    //joki action lega click krne pe kya hona hai
 courses.sort((a,b) => a.price - b.price)          //a.price - classes mein sara cheez compare hoga.. to .price likh ke price access krna h


generateList();
// ye sorting ho hoga lekin 2 baar show krega saara. isko bolte hain regenerate krna element ko uske liye fix h in LINE -
})       
                                          
