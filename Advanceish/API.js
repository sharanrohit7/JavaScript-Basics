//fetch() //ye keyword hai native vanilla js ka api ko laane keliye
//ye hamesha promise dega
// to hm max shayad.then() 3  baar use krskte hain
//agr api successful hua to .then pe jayega
//uske baad agla waala then
//uske baad last then
//agr kuchh error aaya to.catch use krenge

fetch("https://api.chucknorris.io/jokes/random")
.then((Response)=>{
    console.log(Response);
})
.catch();
//ab isko browser m run karayenge kyunki node env. m nhi hopayega abhi
//or wahan jbtk resolved na show kre tbtk aage nhi badhna hai