//const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "sone@gmail.com",
    fullname: {
        userfullsname: {
            firstname: "sanjog",
            lastname: "bhalla"
        }
    }
}

// console.log(regularUser.fullname.userfullsname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2, obj4);

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

//we get data from the internet like this 
const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    }, {
        id: 1,
        email: "s@gmail.com"
    }, {
        id: 1,
        email: "s@gmail.com"
    },
]

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //return an array
// console.log(Object.values(tinderUser)); //return an array
// console.log(Object.entries(tinderUser)); //return an array

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //return true or false

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const { courseInstructor: Instructor } = course;

// console.log(courseInstructor);
console.log(Instructor);// same value here

//we get values in the json format from the web

// {
//     "name": "sanjog",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {
        id: 1,
        name: "sanjog"
    },
    {
        id: 1,
        name: "sanjog"
    },{
        id: 1,
        name: "sanjog"
    },{
        id: 1,
        name: "sanjog"
    },{
        id: 1,
        name: "sanjog"
    },

]
