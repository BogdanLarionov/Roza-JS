// 1. В div с классом cards_container создать карточку с тремя параграфами - First name: Alex, Last name: Ivanov, Age: 47

const cards_container = document.querySelector(".cards_container");

const card = document.createElement("div");
const firstnameElem = document.createElement("p");
const lastnameElem = document.createElement("p");
const ageElem = document.createElement("p");

firstnameElem.innerText = "First name: Alex";
lastnameElem.innerText = "Last Name: Ivanov";
ageElem.innerText = "Age: 47";
card.append(firstnameElem, lastnameElem, ageElem);
cards_container.append(card);

// 2. Добавить элементу card класс card. По этому классу в стилях добавить свойства: width, border, border-radius, padding, margin, background-color

// 3. Параграфу ageElem задать размер шрифта 24px (сделать это через JS)

// От 0 до 3 если не включая три

// Вывести в консоль числа от 25 до 39, используя цикл for

// Вывести в консоль четные числа от 60 до 45
