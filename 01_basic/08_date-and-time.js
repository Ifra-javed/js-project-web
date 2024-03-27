//''''''''''''''''dates''''''''''''
let myDate = new Date
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreateDate = new Date(2024,2,27)  //just for date
//let myCreateDate = new Date(2024,2,27, 12, 25) //for time also
console.log(myCreateDate.toLocaleString());
console.log(myCreateDate.toDateString());

//let myCreateDate  = new Date("2024-01-27")
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));//to remove decimal


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+ 1);

//.........string interpolutionmean backticks(``).........
//`${newDate.getDay()} and time is`


newDate.toLocaleString('default',{
    weekDay: "long"
})



