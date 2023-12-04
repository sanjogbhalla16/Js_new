//for of

["", "", ""]
[{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World";

for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}

//maps

const map = new Map();

map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

map.set('IN', "India");
// console.log(map);

for (const [keys, value] of map) {
    console.log(keys, ":-", value);
}

//this will not work on oobjects
const myObj = {
    game1: 'NFS',
    game2: 'Spiderman'
};

for (const [key, value] of myObj) {
    console.log(key, ":-", value);
}