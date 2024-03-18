const name = "ifra"
//const age = "21 "
//console.log(name +  age +  "barfi"); //outdated method of cancatination(jodna)
//......modern method.......using backticks(``) called string interpolation
//console.log( `my name is ${name}, my age is ${age}, and my nick name is barfi.`);

const gameName = new String('ifra-mrj-cutie')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); //upercase main convert krny k liyae

console.log(gameName.charAt(2));//kis  index ya position py konsa character ha
console.log(gameName.indexOf('r')); //konsa character kis index py ha

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)//...in this method we can use negative value
console.log(anotherString);

const newStringOne = "    ifra   "
console.log(newStringOne);
console.log(anotherString.trim());//...to remove starting and ending space

const url = "https://ifra@.com/ifra%20saduu"
console.log(url.replace('%20','-'))

console.log(url.includes('motu'))
console.log(gameName.split(','));