function getElement(selct, selector = document) {
  return selector.querySelector(selct);
}
const elGmail = getElement("#gmail");
const elPassword = getElement("#password");
const elBtn = getElement("#btn");

elBtn.addEventListener("click", () => {
  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: elGmail.value,
      password: elPassword.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status === 401) {
        throw new Error("Login yoki Parol da hatolik bor");
      }
      return res.json();
    })
    .then((json) => {
      console.log(json);
      localStorage.setItem("token", json.token);
      window.location.replace(`../index.html`);

      if (!json.token) {
        window.location.replace(`../login.html`);
      }
    })
    .catch((err) => {
      alert(err);
    });
});
