// DataType -> 2 types
// 1> primitive
//-> 7 types - String, Number, Boolean, null, undefined, Symbol, bigInt

const stringExample = "100" // datatype return -> string
const numberExample = 100; // datatype return -> number
const booleanExample = false //datatype return -> boolean
const nullExample = null //datatype return - object
let undefinedExample; // datatype return -> undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId) // false -> because both are not same

const bigNum = 123347374023402738473928578023n // datatype return -> bigInt



// 2> non-primitive or reference
// Array, Objects, Functions
const ArrayExample = ["Hare", "krishna", "kumar", "Sahani"]; //datatype return -> object

let objExample = { // datatype return -> object
    name: "harekrishna",
    age: 21,
}


const myFunction = function() { //datatype return -> function
    console.log("Hello world");
}
console.log(typeof myFunction)