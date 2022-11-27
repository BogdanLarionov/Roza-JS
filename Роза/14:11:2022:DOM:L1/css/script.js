// DOM: Document - Object Model

// подключение по:
// 1. id
// 2. class
// 3. tag
// 4. selector h2.mn
// ------------------------
// .textContent - берем текст который есть в теге
// .innerText = 'text'; - добовляет текс в теги
// ------------------------

// 1. ID - .getElementByID()

// let, const, var

// document = {
//     это большой объeкт
// }

let head = document.getElementById("heading");
// console.log(head); // выведет текст
head.innerText = "Я уже знаком(а) с DOM"; // выведет текст
// .innerText - меняет внутриний текст

// .innerText() vs .innerHtml() - вчем разница?
// ------------------------

// 2. class - .getElementsByClassName()

// let i = [1, 2, 3];
// i[0];
// let obj = {
//   name: "Name",
// };

//obj.name - dot notation(.);
//obj[name] - bracket notation [];

let hello = document.getElementsByClassName("hello");
//console.log(hello); // [p.hello, p.hello, p.hello, p.hello, p.hello] - получили html колекцию

// HTMLcolection
// for, while, do while
// for in - index
// for of - element
//--------------------------------------------------------
// 1
for (let i = 0; i < hello.length; i++) {
  hello[i].innerText = "Привет!"; // <p class="hello">Привет!</p>
}

// 2
for (let p of hello) {
  p.innerText = "Привет!";
} //. -- работает как и for выше

for (let index in hello) {
  hello[index].innerText = `${index}` + "Hello!";
}

//-------------
// 3.
// тут добавляем в массив
let arr = [];
for (let element of hello) {
  arr.push(element.textContent); // return new length of array
}
console.log(arr); // [p.hello, p.hello, p.hello, p.hello, p.hello]

let single = arr.pop(); // удаляет последний ждемент из массива
console.log(arr); // [p.hello, p.hello, p.hello, p.hello, p.hello]
console.log(single);

// shift/unshift - добовляет и удаляет элементы в начале

// arr.shift(); // удаляет первый элемент в начале масива -- ['0hello!', '1hello!', '2hello!', '3hello!']
// arr.unshift("new1", "new2"); // добовляет первый элемент в начале масива --  ['new1', 'new2', '0hello!', '1hello!', '2hello!', '3hello!']
console.log(arr);
// ------------------------------------------------------------------------
// Задача
// Добавить в объект

// date notation(.) / bracket notation [];

let obj = {
  name: "Name",
};
for (let i = 0; i < hello.length; i++) {
  obj[i] = hello[i].textContent;
}
console.log(obj);
delete obj[4]; // удалит 5 элемент в массиве
//delete obj.name; // если ключь не цифра, то можно писать через точку
console.log(obj);
// console.log(obj.name);
obj.age = 23;
let n = 5;
delete obj[n];

// --------------
// 3. tag.getElementsByTagName()

// let lis = document.getElementsByTagName("li");
// for (let li of lis) {
//   li.innerText = "haha";
// }

// конконтинация / интерполяция

// let lis = document.getElementsByTagName("li");
// for (let li in lis) {
//   // lis[li].innerText = li + " " + "text"; // конконтинация
//   lis[li].innerText = `${li} text2`; // интерполяция
// }

// --------------

// 4. selector
// .querySelector(), CSS selector - обьединяет в себе  id, class, tag
// .querySelector(); - получить/возвратить один найденый элемент
// .querySelectorAll(); - получить все элементы

let items = document.querySelectorAll("li");
for (let item in items) {
  items[item].innerText = `New ${item} text`;
}

// element.textContent // для тошо что бы брать контент текста

// camel case - specialItems
// snake case - special_items

// ---------------
// querySelectorAll - берем все элементы у кого class="special" (указанный селектор)
let special_items = document.querySelectorAll("li.special");
// все пункты у которых class="spacial"
// HTMLCollection
for (let index in special_items) {
  // index - special_item
  special_items[index].innerText = `This is ${index} special item`;
  // меняем внутрений текст
}

// querySelector - берем первый li элемент у кого <li></li>
let first_li = document.querySelector("li");
// let first_li = document.querySelector("li.special"); //  в место первого li поменяется li.special!
first_li.innerText = "I am first li";
// ---------------
// цикл по индексам for in
// let array = ["a", "b", "c", "d"];
// for (let index in array) {
//   console.log(index); // 0, 1, 2 ,3
// }
// цикл по элементам for of
let array = ["a", "b", "c", "d"];
for (let index of array) {
  console.log(index); // a, b, c, d
}
// ---------------
//  setAttribute - добовляем атрибут для нашего илимента в данном случае (src, alt)

let images = document.querySelectorAll("img");
// querySelector -  возврощает массив
for (let single_img of images) {
  single_img.setAttribute(
    "src",
    "https://www.iso.org/files/live/sites/isoorg/files/news/News_archive/2019/04/Ref2384/Ref2384.jpg/thumbnails/300x300"
  );
  single_img.setAttribute("alt", "Nature");
}
// Для одной картинки
let images1 = document.querySelector("img.second");
// querySelector -  возврощает массив
images1.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2toibrmEEuS2vv51bWSniU7X8agJbeQIhzw&usqp=CAU"
);
images1.setAttribute("alt", "neket girl");
