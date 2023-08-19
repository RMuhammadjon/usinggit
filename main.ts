const signupBtn = document.getElementById("signupBtn") as HTMLElement;
const signinBtn = document.getElementById("signinBtn") as HTMLElement;
const nameField = document.getElementById("nameField") as HTMLElement;
const title = document.getElementById("title") as HTMLElement;
const showHide = document.getElementById("eye") as HTMLElement;
const join = document.getElementById("join") as HTMLElement;

signinBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
};

signupBtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
};

join.addEventListener("click", natija);

function natija() {
  var inp1 = (document.querySelector(".inp1") as HTMLInputElement).value;
  var inp2 = (document.querySelector(".inp2") as HTMLInputElement).value;
  var inp3 = (document.querySelector(".inp3") as HTMLInputElement).value;
  console.log(`name  ${inp1}`);
  console.log(`email  ${inp2}`);
  console.log(`password  ${inp3}`);
}
