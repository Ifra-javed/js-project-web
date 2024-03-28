//...........function.........
function myName(){
    console.log("i");
    console.log("f");
    console.log("r");
    console.log("a");
}
//myName()  //for execution of function

//function addNumber(number1,number2){ //number1 and number2 are called paramenters
   // console.log(number1 + number2);
//}
//addNumber(4,6)  //4 and 6 are called arguments

function addNumber(number1,number2){ //number1 and number2 are called paramenters
    //let result = number1 + number2
    //return result    //after return no more code execute
    return number1 + number2  //another method
    console.log("ifra");
}
const result = addNumber(4,6)
//console.log("result:", result);

function loginUserMsg(username = "motu"){    //default value
    //if(!username){     // second method
        //console.log("please enter a username");
        //return
    //}
    if(username === undefined){
       console.log("please enter a username");
        return
    }
    return`"${username} just logged in"`  //string interpultion
}
//console.log(loginUserMsg("ifra"));
//console.log(loginUserMsg());  //undefined

function calculateCartPrice(val1,val2, ...num1){   //rest operator
    return num1

}
//console.log(calculateCartPrice(2,4,6,8));

//..........object ko function main pass krnaa.........
const user ={
    name: "ifra",
    age: "21"
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and age is ${anyobject.age}`);
}
//handleObject(user)

handleObject({     //.....pass direct object
    name:"motu",
    age: 21
})

//........array pass in function.............
const myNewArray = [200,300,400,500] 

function  returnSecondValue(getarray){
    return getarray[1]
}
console.log(returnSecondValue(myNewArray))

