"use strict";
const x = 1;
console.log(x);
// Types in function arguement and return type
function greeting(firstName) {
    console.log(`Hello ${firstName}`);
    return `Hello!, ${firstName}`;
}
console.log(greeting("Me"));
// Type in function arguement and Type inference, dont need to explicitly return number in function def.
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(1, 2));
// Function aruements type definition
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
