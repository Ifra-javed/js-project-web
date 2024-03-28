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