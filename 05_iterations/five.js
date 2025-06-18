const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (value) {
    // console.log(value);
})

coding.forEach( (value) => {
    // console.log(value)
})

const myCoding = [
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "cpp",
        languageFileName: "cpp"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})