const one =() =>{
    return (" I am one");
}
// const Two = () =>{
//     setTimeout(()=> {
//        return (" I am Two");
//     },3000 )
    
//}
const Two = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=> {
                   resolve (" I am Two");
                 },3000 )
    })
}


const Three = () =>{
    return ("I am Three");
}
const callMe = async() =>{
    let valOne = one();
    console.log(valOne);
    let valTwo = await Two();
    console.log(valTwo);
    let valThree = Three()
    console.log(valThree);
}
callMe();


