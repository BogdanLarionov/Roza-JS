// // object style - мы можем обсолютно любое значение, стиль

// let p = document.createElement("p");
// p.innerText = "Style with js";
// p.style.color = "red";
// p.style.fontWeight = "bold";
// p.style.fontSize = "18px"; // пишем c camelCAse

// // p.style = "color: blue"; // Wrong!!! old method

// // cssText - если задаем несколько стилей
// p.style.cssText = "color:blue; font-weight: 400"; // пишем без camelCAse

// document.body.appendChild(p);

// inleneStyle
// ------------------------------------------

// const div = document.createElement("div");
// document.body.appendChild(div);

// div.style.border = "1px solid black";
// div.style.width = "100px";
// div.style.height = "100px";

// // события
// // onmouseover - при навидении мышки
// // onmouseout - при отведении мышки

// div.onmouseover = function () {
//   div.style.backgroundColor = "salmon";
// };

// div.onmouseout = function () {
//   div.style.backgroundColor = "white";
// };
// ------------------------------------------

// Задача
// Написать цикл, который создает множество div-ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5.

// 0 - 255, i+=5

// for (let i = 0; i <= 255; i += 5) {
//   let div = document.createElement("div");
//   div.style.border = " 1px solid black";
//   div.style.width = "100px";
//   div.style.height = "100px";
//   div.style.display = "inline-block";
//   div.style.marginRight = "5px";

//   document.body.append(div);

//   div.onmouseover = function () {
//     div.style.backgroundColor = `rgb(128,128,${i})`;
//     // "rgb(128,128," + i + ")";
//   };
//   div.onmouseout = () => {
//     div.style.backgroundColor = "white";
//   };
// }
// ------------------------------------------

// classList

// classList.add(""); - добавить
// classList.remove(""); - удалить
// classList.replace("", "");
// ------
// let div = document.createElement("div");
// div.setAttribute("class", "newClass");
// document.body.append(div);
// console.log(div.classList);
// ------------------------------------------

// создать 10 div ( числа 0 - 9);
// // 1.
// for (let i = 0; i < 9; i++) {
//   let div = document.createElement("div");
//   div.innerText = i;
//   //   div.style.border = "1px solid black";

//   document.body.append(div);

//   div.onclick = () => {
//     if (div.classList[0] == "active") {
//       div.classList.remove("active");
//     } else {
//       div.classList.add("active");
//     }
//     // div.classList.add("active");
//     // console.log(div.classList);
//     // div.classList[0]
//   };
// }

// contains -
// toggle - переключатель используют для classList

// 2.
// for (let i = 0; i < 9; i++) {
//   let div = document.createElement("div");
//   div.innerText = i;

//   document.body.append(div);
//   //   ["show", "style", "active"];
//   div.onclick = () => {
//     if (div.classList.contains("active")) {
//       div.classList.remove("active");
//     } else {
//       div.classList.add("active");
//     }
//   };
// }

// 3.
// for (let i = 0; i < 9; i++) {
//   let div = document.createElement("div");
//   div.innerText = i;

//   document.body.append(div);
//   //   ["show", "style", "active"];
//   div.onclick = () => {
//     div.classList.toggle("active");
//     div.classList.replace("active", "");
//   };
// }

// -------------------------

const cards = [
  {
    en: "door",
    ru: "дверь",
  },
  {
    en: "sofa",
    ru: "диван",
  },
  {
    en: "chair",
    ru: "стул",
  },
  {
    en: "stove",
    ru: "плита",
  },
  {
    en: "bag",
    ru: "сумка",
  },
];

// for (let i = 0; i < cards.length; i++) {
//   let div = document.createElement("div");
//   let p = document.createElement("p");
//   p.innerText = cards[i].en;

//   div.appendChild(p);
//   document.body.appendChild(div);

//   div.onclick = () => {
//     if (p.textContent === cards[i].en) {
//       p.innerText = cards[i].ru;
//     } else {
//       p.innerText = cards[i].en;
//     }
//   };
// }

// add, remove, replace
// -----------------------
// for (let i = 0; i < cards.length; i++) {
//   let div = document.createElement("div");
//   let en = document.createElement("p");
//   let ru = document.createElement("p");
//   en.innerText = cards[i].en;
//   ru.innerText = cards[i].ru;

//   en.classList.add("show");
//   ru.classList.add("hide");

//   div.onclick = () => {
//     if (en.classList.contains("show")) {
//       en.classList.replace("show", hide);
//       ru.classList.replace("hide", show);
//     } else {
//       en.classList.replace("hide", show);
//       ru.classList.replace("show", hide);
//     }
//   };

//   div.append(en, ru);
//   //   document.body.append(div);
//   document.body.appendChild(div);
// }

for (let i = 0; i < cards.length; i++) {
  let div = document.createElement("div");
  let en = document.createElement("p");
  let ru = document.createElement("p");
  en.innerText = cards[i].en;
  ru.innerText = cards[i].ru;

  en.classList.add("show");
  ru.classList.add("hide");

  div.addEventListener("click", () => {
    if (en.classList.contains("show")) {
      en.classList.replace("show", "hide");
      ru.classList.replace("hide", "show");
    } else {
      en.classList.replace("hide", "show");
      ru.classList.replace("show", "hide");
    }
  });
  div.append(en, ru);
  document.body.append(div);
}

// -------------
// В документе есть tag button. С помощью скриптов выведите в консоль количество классов этого тега.
// <button class="clickMe style inline">Click</button>

const btn = document.querySelector("button");
console.log(btn.classList.length);
