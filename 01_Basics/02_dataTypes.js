"use strict";
//alert("Hello World!"); // gives error as we are using nodejs not browser
// console.log(typeof null) // gives object which is a bug in js but we have to live with it
// console.log(typeof undefined) // gives undefined
// console.log(typeof NaN) // gives number


let score = "33";
let score2 = "33abc";
let score3 = true
console.log(typeof score);
console.log(typeof score2);
console.log(typeof score3);
let valueInNumber = Number(score);
let valueInNumber2 = Number(score2);
let valueInNumber3 = Number(score3);
console.log(valueInNumber); // gives 33 as it can be converted to number
console.log(valueInNumber2); // gives NaN as it cannot be converted to number
console.log(valueInNumber3); // gives 1 as true is converted to 1   

let isLoggedIn = "false";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // gives true as non-empty string is converted to true

let emptyString = "";
let booleanEmptyString = Boolean(emptyString);
console.log(booleanEmptyString); // gives false as empty string is converted to false

let zeroValue = 0;
let booleanZeroValue = Boolean(zeroValue);
console.log(booleanZeroValue); // gives false as 0 is converted to false

let nullValue = null;
let booleanNullValue = Boolean(nullValue);
console.log(booleanNullValue); // gives false as null is converted to false

let undefinedValue;
let booleanUndefinedValue = Boolean(undefinedValue);
console.log(booleanUndefinedValue); // gives false as undefined is converted to false

let num = 123;
let stringNum = String(num);
console.log(stringNum); // gives "123" as number is converted to string
console.log(typeof stringNum); // gives string  
