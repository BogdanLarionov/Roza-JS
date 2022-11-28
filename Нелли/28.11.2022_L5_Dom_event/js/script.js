const user_form = document.querySelector(".user_form");
const click_btn = document.querySelector(".click_btn");
const users_container = document.querySelector(".users_container");

user_form.addEventListener("submit", (event) => {
  event.preventDefault(); //запрезает форме оюновить страницу после отправки
  //   console.log("hello");
  //   console.log(event);
  console.log(event.target); // event.target - ссылка на элемент, с которым происходит событие

  const firstName = event.target.firstName.value;
  const lastName = event.target.lastName.value;

  const userCard = document.createElement("div");
  const firstNameElem = document.createElement("p");
  const lastNameElem = document.createElement("p");

  firstNameElem.innerText = `First name: ${firstName}`;
  lastNameElem.innerText = `First name: ${lastName}`;

  userCard.append(firstNameElem, lastNameElem);
  users_container.append(userCard);

  event.target.firstName.value = " ";
  event.target.lastName.value = " ";

  //   console.log(`Hello, ${firstName} ${lastName}! You just submited the form`);

  //   console.log(event.target.firstName);
  //   console.log(event.target.lastName);
});

click_btn.addEventListener("click", (event) => {
  console.log(event.target);
});
