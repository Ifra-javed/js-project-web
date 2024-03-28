//.......singleton object
//const tinderuser = new Object()

const tinderUser = {}   //...not singleton object

tinderUser.id = "246abc"
tinderUser.name = "ifra"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularuser = {
    email: "ifra@gmail.com",
    fullname:{
        userfullname: {
            firstname: "ifra",
            lastname: "javed"
        }
    }
}

console.log(regularuser.fullname.userfullname.firstname);
console.log(regularuser.fullname);

//......optional parameter.......{}......

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c", 4:"d"}

//const obj3 = {obj1, obj2}
const obj3 = Object.assign({},obj1,obj2) //Object.assign to join to object ya assign the value of second obj to first

//const obj3 = {...obj1, ...obj2}  //...spread method...
console.log(obj3);

const user = [
    {
        id:1,
        email:"ifra@gmail.com"
    },
    {
        id:1,
        email:"ifra@gmail.com"
    },
    {
        id:1,
        email:"ifra@gmail.com"
    },
]

user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    name:"javascript",
    price:"999",
    courseInstructor: "ifra"

}
//course.courseInstructor
const {courseInstructor: instructor} = course
console.log(instructor);

//......react......

const navbar = ({ company}) => {

}
navbar(company = "ifra")

//.......API concept.......JSON in json key is also string

// {
//     "name" : "javascript",
//     "price": "free",
//     "courseInstructor": "ifra"

// }

//......objects in array.......
[
    {},
    {}, 
    {}
]
