const menuButton = document.querySelector(".nav__menu");
const dropdown = document.querySelector(".dropdown");

function clicked() {
  console.log("clicked");
  dropdown.classList.toggle("dropdown--show");
}
