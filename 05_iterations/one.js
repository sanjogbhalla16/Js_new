//for 

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop is ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop is ${j} and inner loop value ${i}`);

        // console.log(i + ' * ' + j + ' = ' + i * j);
    }
}

let myArr = ["flash","batman","superman"];
// console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

//break and continue

// for (let index = 1; index <= 20 ; index++){
//      if(index === 5)
//      {
//         console.log(`Detected 5`);
//         break;
//      }
//      console.log(`value of i is ${index}`);
// }

for (let index = 1; index <= 20 ; index++){
    if(index === 5)
    {
       console.log(`Detected 5`);
       continue;
    }
    console.log(`value of i is ${index}`);
}