// 1. В div с классом container добавить 2 параграфа с произвольным текстом (через DOM)

// const container = document.querySelector(".container");

// const par_1 = document.createElement("p");
// const par_2 = document.createElement("p");

// par_1.innerText = "Hello!";
// par_2.innerText = "Good morning!";

// container.append(par_1, par_2);

// const img = document.createElement("img");
// Image.setAttribute("src", "");

// 2. В div с классом container добавить карточку (div). Внутрь карточки добавить 2 парагафа с произвольным текстом.

// <div class='container'>
//   <div>
//     <p>Hello</p>
//     <p>Good morning</p>
//   </div>
// </div>

const container = document.querySelector(".container");
const greeting = document.querySelector(".greeting");

const card = document.createElement("div");
const par_1 = document.createElement("p");
const par_2 = document.createElement("p");

par_1.innerText = "Hello";
par_2.innerText = "Good morning!";

card.classList.add("card");
greeting.classList.remove("greeting2");

par_1.style.color = "red";
par_1.style.fontSize = "28px";

card.append(par_1, par_2);

container.append(card);

// 3. Элементу с классом card добавить следующие стили: border, width, border-radius, background-color, padding, margin
