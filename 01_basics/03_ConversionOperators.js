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
console.log(typeof booleanLoggedIn);
console.log(booleanLoggedIn);


//"" => false ; "sanjog" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);