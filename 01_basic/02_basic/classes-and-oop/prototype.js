// let myName = "ifra   "

// console.log(myName.trueLength);
// console.log(myName.trim().length);
// console.log(myName.length);


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }

}

Object.prototype.ifra = function(){
    console.log(`ifra is present in  all objects`);
}

Array.prototype.heyifra = function(){
    console.log(`ifra says hey`);
}

// heroPower.ifra()
// myHeros.heyifra()
// heroPower.heyifra()


//...........inheritance..............

const user = {
    name: "ifra",
    email: "ifra@gmail.com"

}

const Teacher = {
    makeVideo: true

}

const TeachingSupport = {
    isAvailable: false

}

const TASupport = {
    makeAssignment: "js assignment",
    fullTime: true,

    __proto__: TeachingSupport

}
Teacher.__proto__ = user

//.........modern syntax...........

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "javascript   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"ifra".trueLength()
"saduu".trueLength()
