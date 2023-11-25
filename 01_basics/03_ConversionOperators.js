let score = "33abc";

//console.log(typeof score); //string
//console.log(typeof (score)); //string

let valueInNumber = Number(score);
//console.log(typeof valueInNumber); // string
//console.log(valueInNumber); //NaN

// "33" => 33
// "33abc" => NaN but its typeof is number
// true => 1; false => 0

let isLoggedIn = 1;

let booleanLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanLoggedIn);
// console.log(booleanLoggedIn);


//"" => false ; "sanjog" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(typeof stringNumber);
// console.log(stringNumber);

/************************Operations*******************/

let value = 1;
let negVal = -value;
console.log(negVal);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2%2);
// console.log(2/2);

console.log("1" + 2); //12
console.log(1 + "2"); //12 
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

console.log(+true);
console.log(+"");

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

