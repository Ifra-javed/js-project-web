//..........about this............
 const user = {
    name: "ifra",
    age: "21",

    welcomeMasssage: function(){
        console.log(`${this.name} , welcome to website`);
       // console.log(this);
    }
}
//user.welcomeMasssage()
//user.name = "motu"
//user.welcomeMasssage()
//console.log(this); //this will show empty becacue no current context


//function chaii(){
    //const  username = "ifra"
   //console.log(this.username);  //like this we can access in object not in function
//}
//chaii()

//const chaii = function(){
    //const  username = "ifra"
   //console.log(this.username);
//}
//chaii()

//***********arrow function***********

//const chaii = () =>{
    //const  username = "ifra"
   //console.log(this.username);
//}
//chaii()

//........basic arrow function.......

//........explicit return..........

//const addtwo = (num1 , num2) =>{
    //return num1 + num2
//}
//console.log(addtwo(4,6));

//........eplicit return.........

//const addtwo = (num1 , num2) => num1 + num2
//const addtwo = (num1 , num2) => (num1 + num2) //with paranthesis no need to write return is curly bracket use return

//..........return object..........
const addtwo = (num1 , num2) => ({username: "ifra"}) 

console.log(addtwo(4,6));

