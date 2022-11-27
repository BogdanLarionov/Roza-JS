// let links = [
//   {
//     link: "https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg",
//     link: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&=750&dpr=1",
//     link: "https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg",
//   },
// ];

let source = [
  "https://images.pexels.com/photos/982314/pexels-photo-982314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://img.freepik.com/free-photo/kitty-with-monochrome-wall-her_23-2148955134.jpg?w=2000",
];

let div1 = document.createElement("div");
let div3 = document.createElement("div");

for (const iterator of source) {
  let img = document.createElement("img");
  img.setAttribute("src", iterator);
  img.style.height = "150px";
  div1.append(img);
  img.onclick = () => {
    bigImage.setAttribute("src", iterator);
    div3.append(bigImage);
  };
}

div3.append(div1);

let div2 = document.createElement("div");
let bigImage = document.createElement("img");
bigImage.style.width = "500px";
div2.append(bigImage);

div3.append(div2);
div3.style.display = "flex";
div3.style.flexDirection = "column";
div3.style.alignItems = "center";
document.body.append(div3);
