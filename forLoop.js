var states = ["Bihar", "Karnataka", 1947, "Delhi", "Kerala"];

for(let i = 0; i<(states.length); i++){
    if(typeof states[i] === "string") continue;
        console.log(states[i])
}
