const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// const allheros= marvel_heros.concat(dc_heros)
// console.log(allheros);

const all_newHEros = [...marvel_heros, ...dc_heros]
// console.log(all_newHEros)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Harekrishna"))
console.log(Array.from({name: "Harekrishna"})) //interview Intersting