const juttJulliets = ["wasii", "ifra", "iqra", "amen"]
const classFellow = ["mafia","raheel","talha","bilal"]

juttJulliets.push(classFellow)

console.log(juttJulliets);
console.log(juttJulliets[3][1]);

const newjulliets = juttJulliets.concat(classFellow)
console.log(newjulliets);

const allnewjulliets = [...juttJulliets,...classFellow] //...spread method
console.log(allnewjulliets);
  
const anotherArray = [1,2,3,[3,4,6,],7,[8,6,[4,5]]]

const realanotherArray = anotherArray.flat(Infinity)
console.log(realanotherArray);

console.log(Array.isArray("ifra"))
console.log(Array.from("ifra"))  //it will convert ifra into array
console.log(Array.from({name: "ifra"}))  //interesting

let score1 = 400
let score2 = 600
let score3 = 200
console.log(Array.of(score1,score2,score3));

