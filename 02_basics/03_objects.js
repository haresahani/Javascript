
//Object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Harekrishna",
    age: 18,
    [mySym]: "mykey1",
    location: "jaipur",
    email: "hare@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])

// JsUser.email = "hare@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "hare@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting());
JsUser.greetingTwo = function(){
    console.log(`Hellow JS user, ${this.name}`)
}
console.log(JsUser.greetingTwo())