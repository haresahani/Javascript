const string1 = "A string primitive";
const string2 = "Also a string primitive"
const string3 = `yet another string primitive`;
const string4 = new String("A string object");
// console.log(typeof string4)

// <----character access------->
const cat = "cat";
// console.log(cat.charAt(0));
// console.log(cat[0]);

// <-----Comparing strings----->
// uses the less-than and greater-than operators to compare strings
const a = "a";
const b = "b";

if(a < b) {
    // console.log(`${a} is less than the ${b}`);
} else {
    // console.log(`${b} is graater than the ${a}`)
}

// Note: that all comparison operators, including === and ==,
// compare strings case-sensitively. A common way to compare strings
// case-insensitively is to convert both to the same case (upper or lower)
// before comparing them.

const str1 = "Apple";
const str2 = "Mango";

const campareStr1AndStr2 = (str1, str2) => 
     str1.toUppercase() === str2.toUppercase();

// console.log(campareStr1AndStr2);




//String primitives and string objects


// Note that JavaScript distinguishes between String objects and primitive string values.
// (The same is true of Boolean and Numbers.)

const s1 = "2 + 2";
const s2 = new String("2 + 2");
// console.log(eval(s1))
// console.log(eval(s2))

// console.log(eval(s2.valueOf()));


//String coercion
