//console.log(tinderUser.hasOwnProperty('isLoggedIn'));

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
