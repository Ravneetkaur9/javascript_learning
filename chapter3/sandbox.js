// 1) Declarations vs expressions
function greet(name = "world") {
  return `Hello, ${name}!`;
}
const greetExp = function(name = "world") {
  return `Hello, ${name}!`;
};
const greetArrow = (name = "world") => `Hello, ${name}!`;

console.log(greet("Ravneet"));
console.log(greetExp());
console.log(greetArrow("JS Learner"));

// 2) Callback example
function doTwice(fn) {
  fn();
  fn();
}
doTwice(() => console.log("Callback ran"));

// 3) Higher-order function returning a function
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
const add10 = makeAdder(10);
console.log(add10(5)); // 15

// 4) Rest parameters + default parameters
function sumAll(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// 5) Scope (block vs function)
let outer = "outside";
function showScope() {
  let inner = "inside";
  if (true) {
    const block = "block";
    console.log(outer, inner, block);
  }
  // console.log(block); // ReferenceError
}
showScope();

