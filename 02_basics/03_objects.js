//singleton
//Object.create

const mySym = Symbol("key1");
//object literals
const Jsuser = {
  name: "Hitesh",
  [mySym]: "mykey1", //we use this [mySym] to take it as symbol , not a string
  "full name": "Hitesh Choudhary",
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDay: ["Monday", "Saturday"],
};
//the system wil process this name key as "name"

console.log(Jsuser.email);
// console.log(Jsuser[email]); // this will show error, as it say the email is not defined
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]); //automatically its shows this , by no other way we can access

// console.log(typeof Jsuser.mySym); // this will be treated as a string , but its a symbol
console.log(Jsuser[mySym]);

Jsuser.email = "sboy@gmail.com";
// Object.freeze(Jsuser);//will stop you from doing changes
Jsuser.email = "sanjog@gmail.com";
console.log(Jsuser);

Jsuser.greetings = function () {
  console.log("Hello Js user");
}

console.log(Jsuser.greetings); // function (anonymous)
// console.log(Jsuser.greetings());

Jsuser.greetingsTwo  = function () {
  console.log(`Hello Js user ${this.name}`);
}
console.log(Jsuser.greetingsTwo());
