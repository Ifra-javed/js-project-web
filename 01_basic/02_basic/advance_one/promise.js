const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //DB calls, cryptography ,network
    setTimeout(function(){
        console.log("Async  task is completed");
        resolve()

    },1000)


})

promiseOne.then(function(){
    console.log("promise consumed");
})

//...............promise two................

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2 ");
        resolve()
    },1000)

}).then(function(){
    console.log("async 2 resolved");
})

//............... promise Three...............

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "ifra", email: "ifra@gmail.com"})

    },1000)

})

promiseThree.then(function(user){
    console.log(user);
})

//.............promise four................

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error  = false
        if(!error){
            resolve({username:"ifra",password: "1234"})
        }else{
            reject('ERROR: something went wrong')
        }

    },1000)
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => {
    console.log(" the promise is either resolved or rejected");
})

//..............promise five...............

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error  = true
        if(!error) {
            resolve({username: "javascript", password: "123456"
            })
        }else{
            reject('ERROR; js went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response); 
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()

//...............try catch method.............

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E:", error);
        
//     }
   
// }
//getAllUsers()

//..............then.catch...............

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()

})
.then((data) => {
    console.log(data);

})
.catch((error) => console.log(error))


