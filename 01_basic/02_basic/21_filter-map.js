//const coding = ["js","cpp","html","css","java"]

//const values = coding.forEach( (items) => {
  //  console.log(items); //for each dont return values
    //return items
//})

//console.log(values);

//const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter( (num) => num > 5 )
///const newNums = myNums.filter( (num) => {  // second method
 //    return num > 5  //when you write code for filter return keyword is complusry
//})   

//.........for each loop........

//const newNums = []
//myNums.forEach( (num) => {
 //   if (num > 5 ){
  //      newNums.push(num)
    //}

//})
//console.log(newNums);


const books = [
    {title: 'book one', genre: 'fiction', published: 1981,edition: 2004},
    {title: 'book two', genre: 'fiction', published: 1931,edition: 2008},
    {title: 'book three', genre: 'non fiction', published: 1981,edition: 2010},
    {title: 'book four', genre: 'fiction', published: 1981,edition: 2022},
    {title: 'book five', genre: 'history', published: 2004,edition: 2024},
    {title: 'book six', genre: 'science', published: 1989,edition: 2004},
    {title: 'book seven', genre: 'science', published: 1961,edition: 2002},
    {title: 'book eight', genre: 'fiction', published: 1941,edition: 2003},
];

let userbooks =  books.filter( (bk) => bk.genre === 'history' )
userbooks = books.filter ( (bk) => { 
    return bk.published >= 1950 && bk.genre === "science"

})
//console.log(userbooks);


//.............filter maps.............

//const myNumbers = [1,2,3,4,5,6,7,8,9,10]
 
//const newNumbers = myNumbers.map( (nums) => nums + 10)
//............chaining method...........

//const newNumbers = myNumbers
//.map( (num) => num * 10)
//.map( (num) => num + 1)
//.filter( (num) => num >= 41)

//console.log(newNumbers);

//..............reduce method..................


//const myNums = [1,2,3,4]
//const mytotal = myNums.reduce( function (acc , currval) {
  //  console.log(`acc: ${acc} and currval: ${currval}`);
    //return acc + currval
//}, 0)

//............using arrow function............
//const mytotal = myNums.reduce( (acc , curr) => acc + curr,0)

//console.log(mytotal);

const shoppingcart = [
    {
        itemname: "js course",
        price: 2000
    },
    {
        itemname: "java course",
        price: 2400
    },
    {
        itemname: "pyhton course",
        price: 2050
    },
]

const pricetopay = shoppingcart.reduce( (acc , item) => acc + item.price, 0)
console.log(pricetopay);