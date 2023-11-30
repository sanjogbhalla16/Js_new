const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]; //spread operator
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5], 6, [7, 8, 4, [5, 6, 8]]];

const real_another_array = another_array.flat(3); // this will convert 2d and 3d array to 1d array
// console.log(real_another_array);

//methods in arrays

console.log(Array.isArray("Hitesh")); // false , this tells if the give value is array or not
console.log(Array.from("Hitesh"));// this will convert the value into array

/****************this is interesting***************/
console.log(Array.from({name: "hitesh"})); // this will show black object

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

