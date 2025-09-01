// 1) Basic object + method + this
const user = {
  firstName: "Ravneet",
  lastName: "Kaur",
  scores: [88, 92, 79],
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  average() {
    const total = this.scores.reduce((a, b) => a + b, 0);
    return (total / this.scores.length).toFixed(1);
  }
};
console.log(user.fullName(), user.average());

// 2) Property access + dynamic keys
const key = "email";
user[key] = "ravneet@example.com";
console.log(user.email);

// 3) Nested objects and arrays
const classroom = {
  teacher: { name: "Aman", subject: "JS" },
  students: [
    { name: "Ravi", marks: 91 },
    { name: "Simran", marks: 84 }
  ]
};
console.log(classroom.students[0].marks);

// 4) Destructuring + renaming
const { teacher: { name: tName }, students } = classroom;
console.log(tName);

// 5) Spread, shallow clone, merge
const baseCar = { brand: "Toyota", year: 2020 };
const car = { ...baseCar, model: "Corolla" }; // merge
const clone = { ...car }; // shallow clone
clone.year = 2021;
console.log(car.year, clone.year);

// 6) Deep-ish clone for nested (simple case)
const deepSource = { a: 1, b: { c: 2 } };
const deepClone = JSON.parse(JSON.stringify(deepSource));
deepClone.b.c = 99;
console.log(deepSource.b.c, deepClone.b.c); // 2, 99

// 7) Object utility patterns
const entries = Object.entries(user);  // [[key, val], ...]
const keys = Object.keys(user);
const values = Object.values(user);
console.log(entries.length, keys.length, values.length);
