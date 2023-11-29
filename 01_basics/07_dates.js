//Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // Object 

// let myCreatedDate = new Date(2023,0,22); //month starts with 0 in JS
// let myCreatedDate = new Date(2023,0,22,5,3); 
// let myCreatedDate = new Date("2023-01-22"); 
let myCreatedDate = new Date("01-14-2023"); 
// console.log(myCreatedDate.toLocaleString());

let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})

