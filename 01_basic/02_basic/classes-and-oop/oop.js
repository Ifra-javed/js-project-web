//.................object literal...............
//..........this use for current context..........

const user = {
    username: "ifra",
    Age: 22,
    father: "M.Javed",

    getUserDetails: function(){
        console.log("get user details from database");
        console.log(`username: ${this.username}`);
        console.log(this);

    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

//..............constructor function................

function user(username, loginCount, loggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.loggedIn = loggedIn

    this.greeting = function(){
        console.log(`welcome${this.username}`);
    }

    return this   //not compulsory to write

}
const userOne = new user("ifra", 22, true)

const userTwo = new user("saduu", 22, true)
console.log(userOne.constructor);
console.log(userTwo);

//............new keyword................

//..jesy hi new keyword use krty hain ak empty object create hota ha jis ko instance bola jta ha 
//..ak constructor function call hota ha new keyword ki wja sy
//..this keyword k ander inject 
//..phir humy mil jati output
