

// 1) Selectors
const title = document.getElementById("title");
const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const list = document.querySelector("#todo-list");
const themeBtn = document.querySelector("#theme-btn");

// 2) Read/Write content
title.textContent = "DOM Practice Hub";

// 3) Styles & classes
document.body.classList.add("light");
// Toggle theme class on click
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// 4) Create & append list items
addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${text}</span>
    <button class="done">Done</button>
    <button class="remove">Remove</button>
  `;
  list.appendChild(li);
  input.value = "";
  input.focus();
});

// 5) Event delegation for buttons inside <li>
list.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const li = btn.closest("li");
  if (btn.classList.contains("done")) {
    li.classList.toggle("completed");
  }
  if (btn.classList.contains("remove")) {
    li.remove();
  }
});

// 6) Attributes
input.setAttribute("maxlength", "40");
console.log(input.getAttribute("maxlength"));

// 7) Small utility: persist theme
const THEME_KEY = "theme-dark";
document.body.classList.toggle("dark", localStorage.getItem(THEME_KEY) === "1");
themeBtn.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem(THEME_KEY, isDark ? "1" : "0");
});
