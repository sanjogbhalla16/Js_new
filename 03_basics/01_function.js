function sayMyName() {
    console.log("s");
    console.log("a");
    console.log("n");
    console.log("j");
    console.log("o");
    console.log("g");
}

// sayMyName();

// function addTwo(number1, number2) {
//     console.log(number1 + number2);
// }


function addTwo(number1, number2) {

    return number1 + number2;
}
// addTwo();//NAN no argument so NAN
// addTwo(3, 4);
// addTwo(3, "4"); // 34 string
// addTwo(3, null); // 3

const result = addTwo(3, 5);
console.log(result); // undefined as the function doesnt return something, now function returns a value

function loginUserMessage(username = "sam"){
    if(username === undefined){
        return "enter a username";
    }
    return `${username} is Logged In`;
}
console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage()); // undefined