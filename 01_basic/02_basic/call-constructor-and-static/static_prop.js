class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createId(){
        return `1234`
    }
}

const ifra = new user("ifra")
// console.log(ifra.createId());


class Teacher extends user {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@gmail.com")

console.log(iphone.createId());
// iphone.logMe();