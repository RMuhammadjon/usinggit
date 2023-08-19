var signupBtn = document.getElementById("signupBtn");
var signinBtn = document.getElementById("signinBtn");
var nameField = document.getElementById("nameField");
var title = document.getElementById("title");
var showHide = document.getElementById("eye");
var join = document.getElementById("join");
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
  var inp1 = document.querySelector(".inp1").value;
  var inp2 = document.querySelector(".inp2").value;
  var inp3 = document.querySelector(".inp3").value;
  console.log("name  ".concat(inp1));
  console.log("email  ".concat(inp2));
  console.log("password  ".concat(inp3));
}
