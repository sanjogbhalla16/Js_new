const accountId = 144553;
let accountEmail = "sboy75065@gmail.com";
var accountPassword = "12345";
accountCity = "Jabalpur";
let accountStatus;

// accountId = 2; // not allowed

/*
 we dont use var now kyuki woh issue deti hai functional scope aur block scope mai  
*/

accountEmail = "sb@gmail.com";
accountPassword = "123";
accountCity = "Gurgaon";

console.table([accountEmail,accountId,accountPassword,accountCity,accountStatus]);
