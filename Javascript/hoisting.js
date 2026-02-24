// Hoisting with var
console.log(a); // undefined
var a = 10;

// Behind the scenes, JavaScript treats it like:

// var a;          // declaration hoisted
// console.log(a); // undefined
// a = 10;

// Hoisting with let and const
console.log(b); // ReferenceError, Temporal Dead Zone (TDZ).
let b = 20;

// Hoisting with Functions
// Function Declaration (Fully Hoisted)
greet();

function greet() {
  console.log("Hello");
}

// Function Expression (Not Fully Hoisted)
// Only the variable is hoisted, not the function value.

//var
sayHi(); // Error

var sayHi = function () {
  console.log("Hi");
};



