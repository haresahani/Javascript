//forEach --
// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (items) => {
//     console.log(items)
// })
// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) =>
//    num > 6
//   )


//filter--
// const newNums = myNums.filter( (nums) => {
//     return nums > 5;
// })


// const newNums = []
// myNums.filter( (nums) => {
//     if(nums > 5) {
//         newNums.push(nums);
//     }
// })

const books = [
  {
    title: "The Alchemist",
    genre: "Fiction",
    publish: 1988,
    edition: "1st",
    author: "Paulo Coelho"
  },
  {
    title: "Clean Code",
    genre: "Programming",
    publish: 2008,
    edition: "1st",
    author: "Robert C. Martin"
  },
  {
    title: "Atomic Habits",
    genre: "Self-help",
    publish: 2018,
    edition: "1st",
    author: "James Clear"
  },
  {
    title: "The Pragmatic Programmer",
    genre: "Programming",
    publish: 1999,
    edition: "2nd",
    author: "Andrew Hunt"
  },
  {
    title: "Sapiens",
    genre: "History",
    publish: 2011,
    edition: "1st",
    author: "Yuval Noah Harari"
  },
  {
    title: "You Can Win",
    genre: "Self-help",
    publish: 1998,
    edition: "1st",
    author: "Shiv Khera"
  },
  {
    title: "Eloquent JavaScript",
    genre: "Programming",
    publish: 2011,
    edition: "3rd",
    author: "Marijn Haverbeke"
  },
  {
    title: "Ikigai",
    genre: "Self-help",
    publish: 2016,
    edition: "1st",
    author: "Francesc Miralles"
  }
];


const userBooks = books.filter( (bk) => {
   return bk.publish > 2010 && bk.genre == 'History'
    console.log(bk)
})

//map---
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map( (nums) => nums * 10)
// console.log(newNums)

// const newNums = myNums.map( (nums) => nums * 10).map((nums) => nums + 1).filter((nums) => nums >80)


//reduce---
const myNums = [1, 2, 3];
// const myTotal = myNums.reduce(function (accumalator, currentValue) {
//     console.log(`accumalator ${accumalator} and currentValue ${currentValue}`)
//     return accumalator + currentValue;
// }, 0)

const myTotal2 = myNums.reduce( (accumalator, currentValue) => accumalator+currentValue, 0)
console.log(myTotal2)

const courses = [
  {name: "JavaScript for Beginners", price: 999 },
  { name: "Advanced Java", price: 1299 },
  { name: "Python Zero to Hero", price: 899 },
  { name: "Data Structures & Algorithms", price: 1499 },
  { name: "React Crash Course", price: 1099 },
  { name: "Full Stack Web Development", price: 1999 }
];

const coursesTotal = courses.reduce( (accumalator, item) => {
    return accumalator + item.price;
}, 0)

console.log(coursesTotal)