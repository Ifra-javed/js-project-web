// ......memory main data ko save or access k 2 method han ya categories k 
// primitive and non primitive......

// primitive............................................................

// 1: String
// 2: Number
// 3: null
// 4: Boolean
// 5: undefined..... when variable declare memory declare but value not decide 
// 6: Symbol.....for unique
// 7: BigInt....for big values

// ............examples of primitive...........

//const score = 33
// const scoreValue = 100.4
// const outsideTemp = null
// const isLoggedIn = false
// let userEmail;
// const id = Symbol("246")
// const anotherId = Symbol("246")
// console.log(id ===anotherId);
// const bigNumber = 38847895498947949797499849



// Non primitive  or (Reference)...............................................

// 1: array
// 2: Object
// 3: functions


// .......Array.......

const name = ["MUHAMMAD","ALLAH"]


// ........Object.........

let myObj = {
    name: "IFRa",
    Age: 21,
    Gender: "female"
}

// ......function......

 const myFun  = function(){
    console.log("Assalam-Alikum");

}

// .......To find datatypes.......

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof myFun);
// console.log(typeof anotherId);



// ...........stack and heap memory...............

// stack(primitive values).........heap(non primitive values)

// stack main values ki copy  or  heap main reference ha

// .....example of stack.....

//if we change tha value from second variable it will be change in second not in first variable

// let myEmail  = "ifra@gmail.com"
// let anotherEmail = myEmail
// anotherEmail = "saduuu@gmail.com"
// console.log(myEmail);
// console.log(anotherEmail);

// ........example of heap...........
//if we change tha value from second variable it will also be change in first variable

let userOne = {
    name: "ifra",
    gender: "female"
}

let userTwo = userOne

userTwo.name = "saduu"
userTwo.gender = "male" 
console.log(userTwo);
console.log(userOne);