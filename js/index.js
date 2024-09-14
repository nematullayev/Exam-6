function getElement(selct, selector = document) {
  return selector.querySelector(selct);
}

const token = localStorage.getItem("token");
console.log(token);

if (!token) {
  window.location.replace(`../login.html`);
}
