// DataType -> 2 types
// 1> primitive
//-> 7 types - String, Number, Boolean, null, undefined, Symbol, bigInt

const stringExample = "100"
const numberExample = 100;
const booleanExample = false
const nullExample = null
let undefinedExample;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNum = 123347374023402738473928578023n


// 2> non-primitive or reference
// Array, Objects, Functions
const ArrayExample = ["Hare", "krishna", "kumar", "Sahani"];

let objExample = {
    name: "harekrishna",
    age: 21,
}

const myFunction = function() {
    console.log("Hello world");
}
