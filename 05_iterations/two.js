const myObject = {
    js: 'javascript',
    cpp: 'C++',
    java: 'java',
    py: 'python'
}

// for(const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( (item) => {
    // console.log(item);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})