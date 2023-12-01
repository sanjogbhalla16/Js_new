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


function calculateCartPrice(val1,val2,...num1){ // spread operator and rest operator are same
    return num1;
}
console.log(calculateCartPrice(200,300,400,500));

//insert object in a function

const user = {
    name: "sanjog",
    price: 999
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
}

// handleObject(user); // if the value is not correct it will show undefined
handleObject({
  name:"sam",
  price: 399
});

const myNewArray = [200,400,100,600];

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,500,100,600]));
