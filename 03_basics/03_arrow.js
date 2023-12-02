const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username},welcome to website`); // this means current context
        // console.log(this); //this will show the current context
    }
}

// user.welcomeMessage();// this will execute
// user.username = "sam"; // change the context
// user.welcomeMessage();
// console.log(this); //  this will show an empty object {} as in browser it is the window object 

// function chai() {
//     let username = "sanjog"
//     console.log(this.username); // this will give you undefined thats why function cannot use this keyword
// }
// chai();

/*****************Arrow Functions******************/

// const chai = function () {
//     let username = "sanjog"
//     console.log(this.username);
// }

//Arrow Function
// const chai = () => {
//     let username = "sanjog"
//     console.log(this.username); // undefined
//     console.log(this); // {} empty object
// }
// chai(); // undefined

//different ways to write arrow functions

//IF CURLEY BRACES ARE USED YOU NEED TO WRITE RETURN KEYWORD explicit
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2); // USED IN REACT implicit 

const addTwo = (num1, num2) => {name: "hitesh"}; // undefined 

console.log(addTwo(3,4));

const myArray = [2,5,3,7,8];

myArray.forEach();





