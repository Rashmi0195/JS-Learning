const myArr = new Array(1, 2, 3, 4, 5);
console.log(myArr);

const myArr2 = [1, 2, 3, 4, 5];
console.log(myArr2);
myArr2.push(6);
console.log(myArr2);

myArr2.pop();
console.log(myArr2);

const myArr3 = new Array(5);
console.log(myArr3);

const myArr4 = new Array(1, 2, 3, 4, 5);
console.log(myArr4.length);

myArr.unshift(9);
console.log(myArr);

myArr.shift();
console.log(myArr);

myArr.splice(1,3);
console.log(myArr);

myArr.slice(2, 1);
console.log(myArr);

const myArr5 = [1, 2, 3, 4, 5];
const myArr6 = myArr5.slice(0, 3);
console.log(myArr6);

// concat and push
const fruit1 = ['apple', 'banana'];
const fruit2 = ['orange', 'grape'];
const allFruit = fruit1.concat(fruit2);
console.log(allFruit);

fruit1.push(...fruit2);// spread operator, spread the elements of fruit2 into the push method
console.log(fruit1);

const originalArray = [1, 2, 3,[4,5,6],7,[8,9,[10,11]]];
const flatArray = originalArray.flat(Infinity);
console.log(flatArray);