const user = {
    _email: "ifra@gmail.com",
    _password: "4466",


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }

}

const tea = Object.create(user)

console.log(tea.email);