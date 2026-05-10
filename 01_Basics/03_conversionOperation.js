let str1 = "Hello"
let str2 = "World"
let str3=str1 + " " + str2; // gives "Hello World" as it concatenates the two strings
console.log(str3);

console.log("1"+"2"); // gives "12" as it concatenates the two strings
console.log("1"+2); // gives "12" as it converts 2 to string and concatenates
console.log(1+"2"); // gives "12" as it converts 1 to string and concatenates
console.log(1+2); // gives 3 as it adds the two numbers

console.log("1"+2+2)
// gives "122" as it first converts 1 to string and concatenates with 2 to give "12" and then concatenates with 2 to give "122"

console.log(1+2+"3")
// gives "33" as it first adds 1 and 2 to give 3 and then converts 3 to string and concatenates with "3" to give "33"