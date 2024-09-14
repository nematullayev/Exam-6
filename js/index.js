function getElement(selct, selector = document) {
  return selector.querySelector(selct);
}

const token = localStorage.getItem("token");

const newTem = getElement(".template");
const elWrapper = getElement(".hero");
const left = getElement("#left");
const elImg = getElement("#img");
const elTitle = getElement("#title");
const elDescription = getElement("#description");
const elBtn = getElement("#btn");
const btn = getElement("#rem");
console.log(img);
left.addEventListener("click", () => {
  console.log("sal");
  localStorage.removeItem("token");
  if (!token) {
    window.location.replace(`../login.html`);
  }
});
btn.addEventListener("click", () => {
  elImg.textContent = "";
  elDescription.textContent = "";
  elTitle.textContent = "";
});

const products = [];
elBtn.addEventListener("click", () => {
  const product = {
    title: elTitle.value,
    img: elImg.value,
    description: elDescription.value,
  };

  products.push(product);

  function createCards(items) {
    elWrapper.textContent = null;

    let createCards = items.map((item) => {
      const newEl = newTem.content.cloneNode(true);

      const topImg = getElement(".card-img-top", newEl);
      const topTitle = getElement(".card-title", newEl);
      const topDes = getElement(".card-text", newEl);

      topImg.src = item.img;
      topTitle.textContent = item.title;
      topDes.textContent = item.description;

      elWrapper.appendChild(newEl);
    });
  }
  createCards(products);
});
