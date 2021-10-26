var name = "Rohit"

console.log("Line no. 3 ", name);

function MyName(){
    // var name = "Mr. H"
    console.log("Line no. 7 ", name);
    MynameTwo();
    
    function MynameTwo() {
        // var name = "Aalia"
        console.log("Line no. 10 ", name);
    }
}

MyName()
