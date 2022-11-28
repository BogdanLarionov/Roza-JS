// preventDefault()

// btn.onclick - отмениться  только при клиен на мышку

const form = document.querySelector("#form");
const titleInput = document.querySelector("#title");
const priceInput = document.querySelector("#price");
const sectionProducts = document.querySelector("#products");

let products = [];
// let products = [{ title: "book", price: "2500" }]; примеp

form.onsubmit = (e) => {
  //      e.onclick
  //   alert("wow!");
  e.preventDefault();
  //   console.log(titleInput.value, priceInput.value);

  products.push({
    title: titleInput.value,
    print: priceInput.value,
  });

  //   createNode(titleInput.value, priceInput.value);
  newProducts();

  titleInput.value = "";
  priceInput.value = "";

  console.log(products);
};

function createNode(title, price) {
  let div = document.createElement("div");

  let titleP = document.createElement("p");
  let priceP = document.createElement("p");

  titleP.innerText = title;
  priceP.innerText = price;

  div.append("titleP, priceP");
  sectionProducts.append(div);
}

function newProducts() {
  for (let i = 0; i < products.length; i++) {
    createNode(products[i].title, products[i].price);
  }
}
