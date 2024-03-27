//..............array...............

//array.copy operation

//..............shallow copy.............
//mean Reference
//..............deep copy................ 
//mean copy of value

const myArr = [0,1,2,3,4]
const myArr2 = ["ifra","saduuu"]
const myArr3 = new Array(1,2,3,4,5,6)
//console.log(myArr[0]);
//console.log(myArr2[0,1]);
//console.log(myArr3[2]);

//...........Array methods...............
//myArr.push(6) //add elements in array at last
//myArr.pop() //delete the last element
//unshift add the element at first
//shift delete the element at first


//console.log(myArr.includes(8));
//console.log(myArr.indexOf(4));

//const newArr = myArr.join()
//console.log(myArr);
//console.log(newArr);
//console.log(typeof newArr);

console.log("A", myArr);

const myn1 = myArr.slice(1,3) //slice will print 1,2 not 3
console.log("B", myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3) //splice will print 1,2,3....splice also chnge the original value of array

console.log("C", myArr);
console.log(myn2);
