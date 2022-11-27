// ДЗ ОТ НЕЛЛИ
// 1. При клике на кнопку выводится сообщение 'hello' в консоль

const hello_btn = document.querySelector(".hello_btn");
hello_btn.addEventListener("click", () => console.log("hello"));

// 2. При клике на кнопку меняется цвет заднего фона у параграфа

const background_color_btn = document.querySelector(".background_color_btn");

const background_color_change = document.querySelector(
  ".background_color_change"
);

background_color_btn.addEventListener(
  "click",
  () => (background_color_change.style.backgroundColor = "green")
);
// 3. При клике на кнопку цвет фона меняется на черный, а при следующем клике меняется на белый

// const black_mode_btn = document.querySelector(".black_mode");
// black_mode_btn.addEventListener("click", () => {
//   document.body.style.backgroundColor = "black";
// });

// const black_mode_btn = document.querySelector(".black_mode");
// black_mode_btn.addEventListener("click", () => {
//   const black_color = document.body.style.backgroundColor;
//   if (document.body.style.backgroundColor === "black") {
//     document.body.style.backgroundColor = "white";
//   } else {
//     document.body.style.backgroundColor = "black";
//   }
// });

// const black_mode_btn = document.querySelector(".black_mode");
// black_mode_btn.addEventListener("click", () => {
//   const black_color = document.body.style;
//   if (black_color.backgroundColor === "black") {
//     black_color.backgroundColor = "white";
//   } else {
//     black_color.backgroundColor = "black";
//   }
// });

// --------------
// const black_mode_btn = document.querySelector(".black_mode_btn");
// black_mode_btn.addEventListener("click", () => {
//   document.body.style.backgroundColor === "black" ? "white" : "black";
// });

// --------------
const a = 12;
if (a >= 10) {
  console.log("a больше 10");
} else {
  console.log("а меньше 10");
}

// выражение 1 ? выражение 2 : выражение 3

// выражение 1 - условие

// выражение 2 - что произайдет, если условие верно

// выражение 3 - что произайдет, если условие не верно

a >= 10 ? console.log("a больше 10") : console.log("а меньше 10");

// const color = i === 0 ? 'blue' : i === 1 ? 'black' : 'brown';
// -----------------
function getMassage() {
  console.log("hello");
}

getMassage();
// -----------------
// arra func

const getMessage2 = () => {
  console.log("hello222!");
};

// const getMessage2 = () => console.log("hello222!"); - сократили код

getMessage2();

// 4.  Прм клике на кнопку выводить содержимое импута в консоль

const show_text_btn = document.querySelector(".show_text_btn");
const show_text_input = document.querySelector(".show_text");
show_text_btn.addEventListener("click", () => {
  console.log(show_text_input.value);
});

//5. При клике на кнопку поменять содержимое инпута с ??? на !!!

const change_text_btn = document.querySelector(".change_text_btn");
const change_text_input = document.querySelector(".change_text_input");

change_text_btn.addEventListener(
  "click",
  () => (change_text_input.value = "!!!")
);

// 6.

const visibility_btn = document.querySelector(".visibility_btn");
const visibility_input = document.querySelector(".visibility_input");

visibility_btn.addEventListener("click", () => {
  visibility_input.type =
    visibility_input.type === "password" ? "text" : "password";
});

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
