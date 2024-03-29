//let a = 10
//const b = 20
//var c = 30

//...........outside code is global scope........
var  c = 20
let a = 20
//.............block scope............
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ",a);

}
console.log(a)
console.log(b)
console.log(c)

//.........nested scope.............


function one(){
    const username = "ifra"

    function two(){
        const website  = "javascript"
        console.log(username);
    }
     //console.log(website);
    two()
}
//one()

//.........if else......... 

if(true){
    const username = "ifra"
    if(username === "ifra"){
        const website = " javascript"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//................interesting.........mini hoiisting........

//this one can acces addone before initialization 
console.log(addone(6));
function addone(num){
    return num + 1
}

console.log(addtwo(6)); //this one can not acces addtwo before initialization it will through error  
const addtwo = function(num){ //this  one sometime called expression..like variable
    return num +2
}

