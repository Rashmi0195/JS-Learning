console.log(null>0); // gives false as null is converted to 0 and 0 is not greater than 0
console.log(null==0); // gives false as null is only equal to undefined and not to any other value
console.log(null>=0); // gives true as null is converted to 0 and 0 is greater than or equal to 0

//Primitive DataTYpes
// 7types of primitive data types in JavaScript
// 1. String
// 2. Number
// 3. BigInt
// 4. Boolean
// 5. Undefined
// 6. Symbol
// 7. Null
const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // gives false as each symbol is unique even if they have the same description
const bigNumber = 9007199254740991n; // BigInt is used to represent integers larger than 2^53 - 1
console.log(bigNumber); // gives 9007199254740991n

//Typeof operator is used to check the type of a variable or value
console.log(typeof score); // gives 'number'
console.log(typeof isLoggedIn); // gives 'boolean'
console.log(typeof userEmail); // gives 'undefined'
console.log(typeof id); // gives 'symbol'
console.log(typeof bigNumber); // gives 'bigint'
console.log(typeof anotherId); // gives 'symbol'

//Non-Primitive Data Types
// 1. Object
// 2. Array
// 3. Function  

const fruits = ['Apple', 'Banana', 'Cherry'];

let myObj = {
    name: 'John',
    age: 30,
    isStudent: false
};

const myFunc = function() {
    console.log('Hello, World!');
};

myFunc(); // gives 'Hello, World!' as it calls the function and executes the code inside it
console.log(typeof fruits); // gives 'object' as arrays are a type of object in JavaScript
console.log(typeof myObj); // gives 'object'
console.log(typeof myFunc); // gives 'function' as functions are a special type of object in JavaScript 