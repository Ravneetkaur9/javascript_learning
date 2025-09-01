// extra practice

let name = "Ravneet";
let age = 22;
console.log(`My name is ${name} and I am ${age} years old.`);

let a = 5, b = 10;
[a, b] = [b, a];  // swap using array destructuring
console.log(a, b);

let num = 13;
console.log(num % 2 === 0 ? "Even" : "Odd");

// control flow 

let marks = 85;
if (marks >= 90) console.log("A");
else if (marks >= 80) console.log("B");
else if (marks >= 70) console.log("C");
else console.log("Fail");

for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

let day = 3;
switch(day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  // ... add others
  default: console.log("Invalid");
}

// Functions 
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) result *= i;
  return result;
}
console.log(factorial(5)); // 120

function reverseStr(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStr("hello"));

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};
console.log(isPrime(7)); // true
