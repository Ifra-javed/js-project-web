class User{
    constructor(username){
    this.username = username
   }
logMe(){
    console.log(`USERNAME IS ${this.username}`);
   }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password 
    }

    addCourse(){
        console.log(`The new  course is added by ${this.username}`);
    }

}

const chai = new Teacher("ifra", "ifra@gmail.com", "1234")
chai.addCourse()
chai.logMe()

const maslachai = new User("maslachai")

// maslachai.addCourse()  //....not access
maslachai.logMe()

// console.log(chai === maslachai);

// console.log(chai === Teacher);

console.log(chai instanceof Teacher);