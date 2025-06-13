function myName() {
    console.log("H")
    console.log("A")
    console.log("R")
    console.log("E")
}

// myName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1+num2)
// } 

// addTwoNumbers(3, 5)
// addTwoNumbers(3, "5")
// addTwoNumbers(3, null)
// addTwoNumbers(3)

function addTwoNumbers(num1, num2) {
    // let result = (num1+num2)
    return num1+num2
} 

// addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username) {
    return `${username} just logged in`
}

// console.log(loginUserMessage("Harekrishna"))

function loginUsermessage(username) {
    if(!username) {
        console.log("Please enter a usernam]")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())

function calculateCartPrice(...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.calculateCartPrice} ${anyobject.price}`);
}

handleObject(user)