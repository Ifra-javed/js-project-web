//.........simple comparison.........

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

//.........this type of conversion create confusion..........

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null != 0);
console.log(null >= 0);

// Reason is that an equality check == and comparison > > <= >= work differently
// comparison convert null to number ,treating it  as 0.
// thats why (4) null >= 0 is true and (1) null > 0 is false

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined != 0);
console.log(undefined >= 0);
console.log(undefined < 0);

//=== ..........triple equal also check datatypes............

console.log("2" === 2);