//Immediately Invoked Function Expression (IIFE)

//Global scope ke pollution se problem hoti hai to uske liye IIFE

(function chai() {
    console.log('DB CONNECTED');
})();

(() => {
    console.log(`DB CONNECTED TWO`)
})();