// preventDefault()

// const btn = document.querySelector("button");
// btn.onclick = (event) => {
//   event.preventDefault();
//   alert("Welcome!");
// };
// ------------------------------------------------------

// передает значение указанное в окне раннее

const btn = document.querySelector("button");
const name = document.querySelector("#first-name");
btn.onclick = (event) => {
  event.preventDefault();
  alert(name.value);
};
// ------------------------------------------------------
