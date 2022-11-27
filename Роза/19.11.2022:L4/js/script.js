let arr = ["first", "second", "third"];
console.log(arr[2]); // third

console.log(arr.length); // 3

console.log(arr.length); // 3
arr.push(2, 3, 4); // добовляет в конец массива элементы
console.log(arr); // [ 'first', 'second', 'third', 2, 3, 4 ]
console.log(arr.length); // 6
console.log(arr.length - 1); // 5

arr.pop(); // удаляет самый последний элемент и только один
console.log(arr.pop()); //3
console.log(arr); // [ 'first', 'second', 'third', 2 ]

// Задача 1
const arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr.length); // 6 ,длина массива
console.log(arr.length - 1); // выведит последний элемент 5
console.log(arr[arr.length - 1]); //  =>arr[10-1] arr[9];
//Задача 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [];

arr2.push(arr1[0] * 2);
arr2.push(arr1[1] * 2);
arr2.push(arr1[2] * 2);
arr2.push(arr1[3] * 2);
arr2.push(arr1[4] * 2);

console.log(arr2); // [ 2, 4, 6, 8, 10 ]
// ---------------------------------------
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}
console.log(arr2); // [ 2, 4, 6, 8, 10 ]

// циклы - for, while, do while

// вывести  0 - 5
// for
for (let i = 0; i <= 5; i++) {
  // или i < 6
  // 0 1 2 3 4 5 6 - итераций
  console.log(i);
}

// while

let i = 0;

while (i < 6) {
  console.log(i); // 0 1 2 3 4 5  - итераций
  i++;
}

// do while

let j = 0;
do {
  console.log(j); // 0 1 2 3 4 5  - итераций
  j++;
} while (j < 6);
// задача
let s = 6;
for (let i = 6; i >= 0; i--) {
  console.log(i); // 6,5,4,3,2,1,0
}
// задача
let arr7 = [1, 4, 8, -5, 2, -3, 1];
for (let i = arr7.length - 1; i >= 0; i--) {
  console.log(arr7[i]); // 1, -3, 2, -5, 8, 4, 1
}

// задача

let arr3 = [1, 4, 8, -5, 2, -3, 1];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] < 0) console.log(arr3[i]); // -5, -3
}
// ---------------------------------------
// fot of - element берет
// for in - index берет

let arr4 = [1, 4, 8, -5, 2, -3, 1];
for (let index in arr4) {
  if (arr4[index] < 0) console.log(arr4[index]); // -5, -3
}

// 5 % 2 = 1

let arr5 = [1, 4, 8, -5, 2, -3, 1];
for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] % 2 === 0) console.log(arr5[i]); // 4, 8, 2
}
// ---------------------------------------
console.log("1" === 1); // true
console.log("1" === 1); // false
// ---------------------------------------
let arr6 = [1, 4, 8, -5, 2, -3, 1];
for (let num of arr6) {
  if (num < 0) console.log(num); // -5, -3
}

// задача

let array = ["dog", "cat", "dog", "fish", "fish"];
// => 'dog' - 'собака', 'cat' - 'кошка', 'fish' - 'рыба'
let result = [];
for (let animal of array) {
  if (animal === "dog") {
    result.push("собака");
  } else if ((animal = "cat")) {
    result.push("кошка");
  } else {
    result.push("рыба");
  }
  // if (array[i] === "dog") {
  //   return push.result("собака");
  // } else if (array[i] === "cat") {
  //   return push.result("кошка");
  // } else {
  //   return push.result("рыба");
  // }
}
console.log(result); // [ 'собака', 'кошка', 'собака', 'кошка', 'кошка' ]

// переписать ? :

// object

const animal = {
  dog_name: "Rex",
  gog_age: 7,
  dog_color: "black",
};

// dote notation
console.log(animal.dog_name); // Rex

// bracket notation
console.log(animal["dog_name"]); // Rex
// -----
const animal = {
  dog_name: "Rex",
  gog_age: 7,
  "dog color": "black",
};

// console.log(animal.dog color); // не работает точка с пробелом .dog color
console.log(animal["dog color"]); // black

// ["New York"];

for (let i = 0; i < 2; i++) {
  animal[`dog${i}`] = 3;
}

animal["dog_weight"] = "15";
animal.dog_size = "small"; // добавили новый ключ
console.log(animal); // { dog_name: 'Rex', gog_age: 7, 'dog color': 'black', dog0: 3, dog1: 3 }

const items = [
  {
    title: "Gucci",
    price: 500,
    type: "bag",
  },
  {
    title: "Adidas",
    price: 100,
    type: "shoe",
  },
  {
    title: "LV",
    price: 600,
    type: "bag",
  },
  {
    title: "Nile",
    price: 200,
    type: "shoe",
  },
];

// Nike's price is 200, type is shoe
console.log(`Nike's price is ${items[3].price} `);
for (let i in items) {
  console.log(
    `${items[i].title}'s price is ${items[i].price}, type is ${items[i].type}`
  );
}
// Gucci's price is 500, type is bag
// Adidas's price is 100, type is shoe
// LV's price is 600, type is bag
// Nile's price is 200, type is shoe

("use strict"); // жесткие проверка
x = 5;
console.log(x);
// ---------------------------------------

const items = [
  {
    title: "Gucci",
    price: 500,
    type: "bag",
  },
  {
    title: "Adidas",
    price: 100,
    type: "shoe",
  },
  {
    title: "LV",
    price: 600,
    type: "bag",
  },
  {
    title: "Nile",
    price: 200,
    type: "shoe",
  },
];

let result = 0; // 0 + 100 +200 // undefined // NoN
for (let obj of items) {
  // result = result + obj.price; // длинная запись
  result += obj.price; // короткая запись
}

items[0].discount = 30;
let priceWithDis = (items[0].price * items[0].discount) / 100;

console.log(result); // 1400
// ---------------------------------------
// Function Declaration

function square(num) {
  //num - parameter,params
  console.log(num * num);
  console.log(num ** 2);
  console.log(num ** 3);
}
// ---------------------------------------
// argument
square(5);
// ----
function cons() {
  console.log("Строка в консоле");
}

cons(); // Строка в консоле
cons(); // Строка в консоле
cons(); // Строка в консоле
cons(); // Строка в консоле
// ---------------------------------------

function TestNumber(number) {
  if (number % 2 === 0) {
    console.log("number is even");
  } else {
    console.log("number is odd");
  }
}

TestNumber(5); // number is odd
TestNumber(2); // number is even
TestNumber(3); // number is odd
// ---------------------------------------

function testNumber(number) {
  if (number % 2 === 0) {
    return "number is even";
  } else {
    return "number is odd";
  }
}

let arr = [1, 5, 8, 7, 4, 1];
for (let num of arr) {
  return testNum(num);
  console.log(result + " " + num);
}

// ---------------------------------------

function testNums(number) {
  if (number % 2 === 0) {
    let result = testNum(num);
    console.log(result);
  }
}
