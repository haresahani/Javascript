const user = {
    username: "harekrishna",
    price: 99,
    
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "hare"
// user.welcomeMessage()

// console.log(this)

// function chai() {
//     let username = "hitesh"
//     console.log(this.usrname);
// }

// chai();

// const addTwo = (num1, num2) => { // 1st way to use Arrow function
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 // 2nd way to use Arraw function
const addTwo = (num1, num2) => ( // 3rd way to use Arrow function - in parentheses do not use return 
    num1 + num2
)

const addTwo = (num1, num2) => ({username: "harekrishna "})
console.log(addTwo(3, 4))


