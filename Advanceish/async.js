const one =() =>{
    console.log(" I am one");
}
const Two = () =>{
    setTimeout(()=> {
        console.log("Wohhooo");
    },3000 )
    console.log(" I am Two");
}
const Three = () =>{
    console.log("I am Three");
}

one();
Two();
Three();