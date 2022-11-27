// window.getComputedStyle() - метод можем просмотреть какие есть стили

// let div = document.createElement("div");

// div.style.width = "90%";

// document.body.append(div);

// console.log(window.getComputedStyle(div).width);

// console.log(window.getComputedStyle(div, "::after"));

// // -------------------------

// // getPropertyValue()
// // -------------------------

// // global scope - область видимости
// // 1. global scope
// function foo() {
//   // function scope
//   if (condition) {
//     // block scope
//   }
// }

// // 2. sunction scope - область видимости
// let dog = "Rex";
// function name() {
//   console.log(dog);
// }
// name();
// console.log(dog);

// // 3. block scope - область видимости
// if (true) {
//   // let,const
//   let num = 30;
// }
// console.log(num);

// //  global scope
// let name = "Joe";
// function foo() {
//   // function scope
//   if (true) {
//     // block scope
//     var num1 = 25;
//     let num2 = 16;
//     const num3 = 12;
//   }
//   console.log(num1);
//   // console.log(num2);
//   console.log(num3);
// }
// foo();

// // ----------------------------------------------------------

// // Задача1
// // 1)Даны картинки в виде массива. Напишите цикл, который создает картинки на основе этого массива. Привяжите к каждой картинке событие, чтобы по клику на картинку алертом выводился ее src.

// const img = [
//   "https://www.gorilladoctors.org/wp-content/uploads/2014/10/empowering2-300x300.jpg",
//   "https://i.pinimg.com/originals/7f/a1/0f/7fa10fdd13baa44a73f0a77ed32e8566.jpg",
//   "https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-061-e1340955308953.jpg",
//   "https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-03.jpg",
// ];

// for (let i = 0; i < img.length; i++) {
//   let newImg = document.createElement("img");
//   newImg.setAttribute("src", img[i]);
//   newImg.setAttribute("alt", "Nature");

//   document.body.append(newImg);

//   newImg.onclick = () => {
//     alert(img[i]);
//   };
// }
// ----------------------------------------------------------
// Задача-2

// 2) Даны числа в виде массива.Напишите функцию ,которая создает параграфы на основе этого массива. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит.

// let nums = [2, 3, 4, 5, 6];
// function createP(array) {
//   for (let nums of array) {
//     let p = document.createElement("p");
//     p.innerText = nums;

//     document.body.append(p);
//     p.onclick = () => {
//       p.innerText = p.textContent ** 2;
//       // Math.pow(p.textContent, 2);
//     };
//   }
// }
// createP(nums);

// Задача-3
// 3) Доработайте предыдущий скрипт. Добавьте к каждому абзацу 2 кнопки. Одна кнопка при клике уменьшает число на единицу, а другая кнопка увеличивает на единицу.

// let nums = [2, 3, 4, 5, 6];
// function createP(array) {
//   for (let nums of array) {
//     let p = document.createElement("p");
//     p.innerText = nums;

//     let increment = document.createElement("button");
//     increment.innerText = "+";

//     let decrement = document.createElement("button");
//     decrement.innerText = "+";

//     document.body.append(increment, p, decrement);
//     p.onclick = () => {
//       p.innerText = p.textContent ** 2;
//       // Math.pow(p.textContent, 2);
//       // Math.sqrt(number);
//     };

//     console.log(typeof p.textContent);
//     increment.onclick = () => {
//       p.innerText = +p.textContent + 1; // textContent возврощает строку
//       // p.innerText += 1;
//     };
//     decrement.onclick = p.textContent - 1;
//   }
// }
// createP(nums);

// 4) Застилизуйте так, чтобы параграф и его кнопки были на одной строке.

// let nums = [2, 3, 4, 5, 6];
// function createP(array) {
//   for (let nums of array) {
//     let div = document.createElement("div");

//     let p = document.createElement("p");
//     p.innerText = nums;

//     let increment = document.createElement("button");
//     increment.innerText = "+";

//     let decrement = document.createElement("button");
//     decrement.innerText = "+";

//     document.body.append(increment, p, decrement);
//     // div.clas
//     p.onclick = () => {
//       p.innerText = p.textContent ** 2;
//       // Math.pow(p.textContent, 2);
//       // Math.sqrt(number);
//     };

//     console.log(typeof p.textContent);
//     increment.onclick = () => {
//       p.innerText = +p.textContent + 1; // textContent возврощает строку
//       // p.innerText += 1;
//     };
//     decrement.onclick = p.textContent - 1;
//   }
// }
// createP(nums);

// ------------------------------------------------------
// Задача - click me button

// const btn = document.createElement("button");
// btn.innerText = "Click me!";

// document.body.append(btn);

// btn.addEventListener("click", func1);
// btn.addEventListener("click", func2);
// btn.addEventListener("click", func3);

// // hoisting

// function func1() {
//   alert("1");
//   btn.removeEventListener("click", func1);
// }
// function func2() {
//   alert("2");
//   btn.removeEventListener("click", func2);
// }
// function func3() {
//   alert("3");
// }

// ------------------------------------------------------
// 5) У нас есть кнопка в html документе. С помощью скриптов сделайте след. логику:
// 1)добавьте 3 event listener-а на кнопку, которые выводят на экран 1,2,3. (первая функция выводит цифру 1, вторая - 2, и последняя 3),
// 2) Пусть при первом клике на кнопку сработают все 3 функции и при этом func1 и func2 отвяжутся от элемента. И при следующих кликах будет срабатывать только функция func3, которую мы не отвязываем.

let btn1 = document.createElement("button");
btn1.innerText = "Start";

let btn2 = document.createElement("button");
btn2.innerText = "End";

let p = document.createElement("p");

document.body.append(btn1, btn2, p);

btn1.addEventListener("click", () => {
  document.addEventListener("mousemove", move);
});

btn2.addEventListener("click", () => {
  document.removeEventListener("mousemove", move);
});

function move(event) {
  p.innerText = `X:${event.pageX} Y:${event.pageY}`;
  // console.log(event);
}
// ----------
// let array = [2, 4, 7];
// for (item of array) {
//   item = item * 2;
// }
// console.log(array); // [ 2, 4, 7 ]
// ----------
