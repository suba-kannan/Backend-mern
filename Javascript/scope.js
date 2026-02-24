//global scope
// A variable declared outside all functions and blocks.It can be accessed anywhere in the program.

let name = "Suba"; // Global scope
function greet() {
  console.log(name); // ✅ Accessible
}
greet();
console.log(name); // ✅ Accessible

// Local Scope
//Local scope means a variable that is available only in a specific area.Usually inside a function or block.

// So most of the time: Local Scope = Function Scope

// Function Scope
// A variable declared inside a function. Accessible only inside that function.
// Applies to var, let, and const

function test() {
  var age = 20;   // Function scope
  console.log(age);  // ✅ Works
}

test();
console.log(age);  // ❌ Error

// Block Scope
// A variable declared inside { } (if, for, while, etc.) Only accessible inside that block.