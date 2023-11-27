// Primitive

// 7 types
//String , Number, Boolean , null , undefined , Symbol, BigInt
//Js is Dynamically typed

const score = 100;
const scoreValue = 100.98;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNum = 1823640913091263099734053n;

//Reference (Non - primitve)

//Array , Objects , Functions

const heros = ['shaktiman','naagraj','doga'];

let myObj = {
    name:"Sajog",
    age:25
};

const myFunc = function () {
    console.log("hello world");
}
console.log(typeof bigNum); //undefined

console.log(typeof outsideTemp); // object -  of null

console.log(typeof undefined); // undefined

console.log(typeof myObj); //object

console.log(typeof myFunc); // function - Object Function

console.log(typeof heros); //Object

console.log(typeof id); // symbol

// https://262.ecma-international.org/5.1/#sec-11.4.3
