const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"
};

for (const key in myObj) {
    // console.log(key);
}

for (const key in myObj) {
    // console.log(`${key} shortcut to ${myObj[key]}`);
}

const programming = ["js","rb","py","java","cpp"];

for (const key in programming) {
    // console.log(key); // this will print the index of the array
}

for (const key in programming) {
    // console.log(programming[key]); // this will print the index of the array
}


// const map = new Map();

// map.set('IN', "India");
// map.set('USA', "United States of America");
// map.set('Fr', "France");

// for (const key in map) {
//     console.log(key); //maps are not iterable 
// }
