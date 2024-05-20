//..............for  of loop....................
//      ["","",""]   string in array
//      [{},{},{}]   object in array

//const arr = [1,2,3,4,5,6]

//for (const num of arr) {
   // console.log(num);
    
//}

//............for of loop for String.........

//const greetings = "Assalam Alikum"
//for (const greet of greetings) {
    //console.log(`each char is ${greet}`) 

//}

//.......maps.............

//const map = new Map()
//map.set('pak',"pakistan")
//map.set('fr',"france")
//map.set('ch',"china")

//console.log(map);

//for (const [key , value] of map) {
   //console.log(key , ':-' , value);
    
//}


//...........forin  loop for object.............

//const myObject = {
//    'name':"ifra",
  //  'age':"twenty"
//}

//for (const key in myObject) {
    //console.log(`${key} is ${myObject[key]}`); 
//}


//.............forin for array.............

//const programming = ["js","cpp","html","css"]

//for (const key in programming) {
    //console.log(programming[key]);
   
//}

//.........forin loop for map.........not valid or iterative.......

//const map = new Map()
//map.set('pak',"pakistan")
//map.set('fr',"france")
//map.set('ch',"china")

//for (const key in map) {
   // console.log(key);
  
//}



/////////for each loop//////////////////

const coding = ["js","cpp","html","css","java"]

//coding.forEach(function (item) {
  //  console.log(item);
//} )


//coding.forEach(  (item) => {
  //  console.log(item);
//}  )

//function printMe(item){
    //console.log(item);
//}

//coding.forEach(printMe)

//coding.forEach(  (item, index, arr) => {
//     console.log(item, index, arr);
  //}  )



const myCoding = [
    {
        languageName: "javascript",
        languageFileName:"html"
    },
    {
        languageName: "java.js",
        languageFileName:"javaFile"
    },
    {
        languageName: "java",
        languageFileName:"JavaBook"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);

} )