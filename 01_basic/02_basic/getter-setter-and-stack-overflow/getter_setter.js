class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()

    }
    set email(value){
        this._email = value.toUpperCase()
    }

    get password(){
        // return this._password.toUpperCase()
        return`${this._password}saduu`

    }
    set password(value){
        // this._password = value.toUpperCase()
        this._password = value
    }
}

const ifra = new User("ifra@gmail.com", "ifra")

console.log(ifra.password);
console.log(ifra.email);