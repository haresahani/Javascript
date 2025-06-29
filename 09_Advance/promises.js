//method 1
const promisOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls. cryptography, network

    setTimeout(function() {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promisOne.then(function() {
    console.log("Promise consumed")
})

//method 2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Hare", email:"hare@hare.com"})
    }, 1000)
})

promiseThree.then(function(u){
    console.log(u)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error) {
            resolve({username: "Hare", password: "123"})
        }  else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error) {
    console.log(error);
}).finally(() => {
    console.log("tHe promise is either resolve or rejected")
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: js went wrong')
        }
    }, 1000)
});

async function consumePromisesFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

consumePromisesFive();

// async function getAllUsers() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))