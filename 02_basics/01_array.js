//array

const myArr = [0,1,2,3,4];
const myHeros = ["shaktiman","naagraj"];

const myArr2 = new Array(1,2,3,4);
// console.log(myArr[0]);


//Array Methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

myArr.unshift(9); //very hectic process , as it will shift all the values of the array
myArr.shift();

//true and false values
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9)); // -1 if the element is not 

// const newArr = myArr.join(); // turns your array into a string
// console.log(newArr);
// console.log(myArr);

//slice and splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3); //  this will not change the original array , but make the new array and take the required values

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3);

console.log(myn2);// it will change the structure of original array and will include the last index also
console.log("C ",myArr);




