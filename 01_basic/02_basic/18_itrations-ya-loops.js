//..............for loop...................

for (let i = 0; i < 10 ; i++) {//press ctrl+d to change the i at a same time from everywhere
    const element = i;
    if (element == 6){  //if else condition in loop
        //console.log("6 is the best number");
    }
   // console.log(element);
    
}

for (let i = 0; i <= 10 ; i++) {  //loop in loop
    //console.log(`outer loop value: ${i}`);
   for (let w = 0; w <= 10 ; w++) {
   // console.log(`inner loop value: ${w} and inner loop ${i}`);
    //console.log(i + '*' + w + '=' + i*w );
   } 
    
}

let myArray = ["ifra" , "wasii" ,]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


//..........break and continue.........

for (let index = 1; index <=20 ; index++) {//to stop the loop where we want
    if (index == 5){
       // console.log(`detected 5`)
        break
    }
   // console.log(`value of index is ${index} `);
    
}
for (let index = 1; index <=20 ; index++) {//to stop the loop where we want
    if (index == 5){
        console.log(`detected 5`)
        continue
    }
    console.log(`value of index is ${index} `);
    
}