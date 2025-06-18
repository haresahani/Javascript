const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

const nums = myNums.filter( (num) => {
    return num > 4
})
// console.log(nums)


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


let userBooks = books.filter( (bk) => bk.genre === "History" )

userBooks = books.filter( (bk) => bk.publish >= 2010 && bk.genre === "Self-help" )
console.log(userBooks)