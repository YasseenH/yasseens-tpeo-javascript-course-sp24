// 1. Block-Scope Declaration with let and const

// Use let to declare variables with block scope
let x = 10;
{
    let x = 20;
    console.log(x);
}

// Using const to declare immutable variables
const PI = 3.14;
// PI = 3.14159; // ERROR: assignment to constant variable.

// 2. Arrow Functions
// Regular function
function add(a, b) {
    return a + b;
}

// Arrow Function
let add2 = (a, b) => a + b;
console.log(add2(2,3));


// 3. Spread and Rest Operators
// Spread Operators
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged);

// Rest Parameter
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 2);
}
console.log(sum(1, 2, 3, 4));


// 4. For/of loop
const arr3 = ['a', 'b', 'c'];
for (const element of arr3) {
    console.log(element);
}

// 5. Map and Set Objects
// Map objects
const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
console.log(map.get('key1'));

// Set objects
const set = new Set([1, 2, 3, 4]);
console.log(set);

// 6. Classes
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}
const rect = new Rectangle(5, 4);
console.log(rect.area());

// 7. Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);
    });
}
fetchData()
    .then(data => console.log(data));
    // .catch(error => console.error(error));

// 8. Symbol
const symbol1 = Symbol('symbol');
const symbol2 = Symbol('symbol');
console.log(symbol1 === symbol2);

// 9. Default Parameters and Rest Parameters
// Default parameters
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}
greet();
greet('Raina');

// Rest parameters
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4));


// 10. String and Array Methods
const str = 'Hello, world!';
console.log(str.includes('world'));
console.log(str.startsWith('Hello'));
console.log(str.endsWith("!"));

const arr = [1, 2, 3, 4, 5];
console.log(Array.from(arr, x => x*2));
console.log(arr.find(x => x > 2));
console.log(arr.findIndex(x => x > 2));

// 11. New Math and Number Features
console.log(Math.trunc(3.7));
console.log(Number.isInteger(5));

// 12. New Global Methods
const obj = {a: 1, b: 2, c: 3};
console.log(Object.entries(obj));

// // math.js
// export function add(a, b) {
//     return a + b;
// }

// //app.js
// import { add } from './math';
// console.log(add(1,2));