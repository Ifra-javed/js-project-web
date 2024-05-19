//implicit scope
//const balance = 1000

//if(balance > 500) console.log("test"),console.log("test2");

//..........nesting..........
// if(balance < 500){
//     console.log("less than 500"); 
// }else if(balance < 750){
//     console.log("less than 750");
// }else {
//     console.log("less than 1200");
// }

const userLoggedIn =  true
const debitCard = true
const userLoggedInFromGoggle = false
const userLoggedInFromEmail = true 

if(userLoggedIn && debitCard && 2==2){  //and(&&) statement check more then one condition if one condition is false there is no output
    console.log("yes user can do shopping");
}
if(userLoggedInFromGoggle || userLoggedInFromEmail){  //or(||)  also check more then one condition but if one condition is true it will give output
    console.log("yes logged in");
}