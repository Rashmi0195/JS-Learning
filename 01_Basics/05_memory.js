//Primitive Data Types => stored in Stack memory
//Non-Primitive Data Types => stored in Heap memory and accessed by reference

//In JavaScript, primitive data types are immutable, meaning their values cannot be changed once they are created. When you assign a primitive value to a variable, it is stored directly in the variable's memory location. When you copy a primitive value to another variable, a new copy of the value is created in memory.

//On the other hand, non-primitive data types (objects, arrays, functions) are mutable and are stored in the heap memory. When you assign a non-primitive value to a variable, it stores a reference to the location in memory where the value is stored. When you copy a non-primitive value to another variable, both variables point to the same memory location, meaning changes made through one variable will affect the other variable as well. 
let myName = 'Alice';
let anotherName = myName;
console.log(myName); // gives 'Alice'
console.log(anotherName);

anotherName = "Bob";
console.log(anotherName); // gives 'Bob' as we have changed the value of anotherName to 'Bob'

let userOne={name: 'Alice', age: 30};
let userTwo = userOne;
console.log(userOne); // gives {name: 'Alice', age: 30}
console.log(userTwo); // gives {name: 'Alice', age:30} as both userOne and userTwo point to the same memory location

userOne.age=40;
console.log(userOne.age); // gives 40 as we have changed the age property of userOne to 40
console.log(userTwo.age); // gives 40 as userTwo also points to the same memory location as userOne, so it reflects the change made to userOne's age property   
