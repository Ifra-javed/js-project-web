//....singleton....apni trha ka ak hi object
//Object.create


//... object literals....both are methods of declare object

//.....symbol declare.....
const mySym = Symbol("key1")


const jsuser = {
    "name": "ifra",
    age: 21,
    email: "ifra@gmail.com",
    [mySym]:"key1"

}
//....for access....
console.log(jsuser.name)
console.log(jsuser["email"])
console.log(jsuser[mySym])

//........for change value......
jsuser.name = "saduuu"
console.log(jsuser.name)

Object.freeze(jsuser)
jsuser.name = "motu"

console.log(jsuser)

//............function............
jsuser.greeting = function(){
    console.log("ASSALAM ALIKUM");
}
console.log(jsuser.greeting);
console.log(jsuser.greeting());

jsuser.greetingtwo = function(){
    console.log(`ASSALAM ALIKUM , ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());



