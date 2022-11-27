const body = document.querySelector("body");
// body.appendChild(root);

let userImg = prompt("Add image's link");
let userPost = prompt("Add your post's link");

const image = document.createElement("img");
image.setAttribute("src", userImg);

const post = document.createElement("a"); //название тега который создаем
post.innerText = "Мой пост";
post.setAttribute("href", userPost);
post.setAttribute("target", "_blank");

body.append(image, post);

// Задача
// Запрашиваем у пользователя ссылки на картинку и пост.
// Создаем картинку со ссылкой на этот пост.

let userImg = prompt("Add image's link");
let userPost = prompt("Add your post's link");

const image = document.createElement("img");
image.setAttribute("src", userImg);

const post = document.createElement("a"); //название тега который создаем
post.innerText = "Мой пост";
post.setAttribute("href", userPost);
post.setAttribute("target", "_blank");

post.appendChild(image);
body.append(image, post);
// ----

let links = [
  {
    title: "Google",
    link: "https://www.google.com/",
  },
  {
    title: "Baidu",
    link: "http://www.baidu.com/",
  },
  {
    title: "Bing",
    link: "https://www.bing.com/",
  },
  {
    title: "Yahoo!",
    link: "https://www.yahoo.com/",
  },
  {
    title: "Yandex(dzen)",
    link: "https://www.dzen.ru/",
  },
];
//   `Массив из объектов со свойствами link и title. Свойства хранят в себе ссылку на страницу и название страницы соответственно. Напишите цикл, который создаст для каждого объекта ссылку и добавит в #root.
