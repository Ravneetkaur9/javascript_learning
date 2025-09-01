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

//objects
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  getInfo: function() {
    return `${this.brand} ${this.model} (${this.year})`;
  }
};
console.log(car.getInfo());

let obj = {a:1, b:2, c:3};
console.log(Object.keys(obj).length); // 3

let students = [
  {name: "Aman", marks: 88},
  {name: "Ravi", marks: 95},
  {name: "Simran", marks: 72}
];
let topStudent = students.reduce((prev, curr) => 
  prev.marks > curr.marks ? prev : curr
);
console.log(topStudent.name); // Ravi

//DOM
document.getElementById("colorBtn").addEventListener("click", () => {
  document.body.style.background = "lightgreen";
});

document.getElementById("addBtn").addEventListener("click", () => {
  let text = document.getElementById("userInput").value;
  let li = document.createElement("li");
  li.textContent = text;
  document.getElementById("list").appendChild(li);
});

document.querySelectorAll("p").forEach(p => {
  p.style.color = "blue";
});
