let text = document.getElementById("text");
text.innerText = "getElementById with innerText";

let text2 = document.getElementById("text2");
text2.textContent = "getElementById with textContent";

let text3 = document.getElementById("text3");
text3.innerHTML = "getElementById with innerHTML";

// 2
const getByClaas = document.getElementsByClassName("getclass");
for (let i = 0; i < getByClaas.length; i++) {
  getByClaas[i].innerText = "getElementsByClassName";
}
console.log(getByClaas[i]);

let forOf = document.getElementsByClassName("getclass2");
for (let v of forOf) {
  v.innerText = "he";
}
