//we generally consume the promise
//first we see how to make the promise , we have created the promise
const promiseOne = new Promise(function (resolve, reject) {
  //Do an Async task
  //DB calls , cryptography, network call
  setTimeout(function () {
    console.log("Async task is complete");
    //want to connect resolve with then
    resolve();
  }, 1000);
});

//now we consume the prmoise
/* The callback to execute when the Promise is resolved. - callback == function

Attaches callbacks for the resolution and/or rejection of the Promise.

@returns — A Promise for the completion of which ever callback is executed
*/
promiseOne.then(function () {
  console.log("promise consumed");
});
//other syntax to write the the prmoise

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise 2 consumed");
});

//if a data comes from the network
/*
Promise(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void): Promise<any>

A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the 
promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided 
reason or error.

Creates a new Promise.
*/
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "chai@example.com" }); //we can return the data in resolve its usually an object , array
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      console.log("resolved");
      resolve({ username: "bhalla_16", password: "123" });
    } else {
      reject("ERROR:Something went wrong");
    }
  }, 1000);
});

//this throws an error
// const username = promiseFour.then((user)=>{
//      console.log(user);
//      return user.username;
// })

const username = promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("the promise is finally resolved or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      console.log("resolved");
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR:JS went wrong");
    }
  }, 1000);
});

//async and await
//this will show error as it will not handle the error
// async function consumepromiseFive() {
//   const response = await promiseFive;
//   console.log(response);
// }
async function consumepromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumepromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();//this method takes time here so we need to await this
//     console.log(data);
//   } catch (error) {
//     console.log("E: ",error);
//   }
// }
// getAllUsers();

/*catch(onrejected?: ((reason: any) => PromiseLike<never>) | null | undefined): Promise<void>
The callback to execute when the Promise is rejected.


Attaches a callback for only the rejection of the Promise.

@returns — A Promise for the completion of the callback.*/

fetch("https://api.github.com/users/sanjogbhalla16")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log("ERROR"));
