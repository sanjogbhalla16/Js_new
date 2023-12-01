let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    // console.log("INNER: ", a);
}
// console.log(a);
// // console.log(b);
// // console.log(c);

function one() {
    const username = "hitesh";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.lo(website);
    // two();
}
// one();

if (true) {
    const username = "hitesh";
    if (username === "hitesh") {
        const website = "youtube";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

/*****************interesting*******************/
console.log(addone(3));

function addone(num) {
    return num + 1;
}

addTwo(2); // this will show error this is called hoisting

const addTwo = function (num) { // this is an expression
    return num + 2;
}

// addTwo(2);//this will not show error 