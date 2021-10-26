function addition (y){
    return function (x){
        return x+y;
    }
}

var add = addition(10);
//console.log(add(5));
console.log(addition(10)(8));

//ek or process hai isko krne ka called curring

addition()()()     //curring
