//object literals
const mySym = Symbol('mySymbol');
const person = {
    name: 'John',
    "full name": 'John Doe',
    [mySym]: 'myKey',
    age: 30,
    isEmployed: true,
    hobbies: ['reading', 'traveling', 'coding'],
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    },
    greeting: function() {
        return 'Hello World';
    }
    
}
console.log(person.age);
console.log(person["age"]);
console.log(person[mySym]);
console.log(person["full name"]);// can access properties with spaces using bracket notation

// to update properties
person.age = 31;
console.log(person.age);

person.greeting = function() {
    return 'Hiii';
}
console.log(person.greeting()); // Hiii


// to freeze an object
Object.freeze(person);
person.age = 32; // this will not change the age property
console.log(person.age); // still 31

// to check if an object is frozen
console.log(Object.isFrozen(person)); // true

// to get all keys of an object
console.log(Object.keys(person)); // ['name', 'full name', 'age', 'isEmployed', 'hobbies', 'address']

// to get all values of an object
console.log(Object.values(person)); // ['John', 'John Doe', 31, true, ['reading', 'traveling', 'coding'], {street: '123 Main St', city: 'Anytown', country: 'USA'}]

// to get all entries of an object
console.log(Object.entries(person)); // [['name', 'John'], ['full name', 'John Doe'], ['age', 31], ['isEmployed', true], ['hobbies', ['reading', 'traveling', '

person.greeting = function() {
    return 'Hiii';
}
console.log(person.greeting()); // Hiii