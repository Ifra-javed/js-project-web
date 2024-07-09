function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);


function createUser(username, score){
    this.username =username
    this.score = score

}

createUser.prototype.increment = function(){
    this.score++

}

 //...........this mean jis.............

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai =  new createUser("ifra", 66)
const tea = createUser("saduu",  88)

chai.printMe();

/* heres what happens behind the scene when new keyword is used:
A new object is created: The new keyword initiates the creation of a new javascript object.

A prototype is linked: The newly created object gets linked to the prototype of the constructor function.
This means that it has access to properties and methods defined on the constructor prototype


The constructor is called: The constructor function is called with the specified arguments and this is 
bound to the newly created object. If no explicit return value is specified from the constructor , javascript 
assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it does not return a non
primitive value (object, array, function, etc.), the newly created object  is returned.

*/