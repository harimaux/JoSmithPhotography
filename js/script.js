// Nvigation

/* const { $LG } = require("lightgallery/lgQuery"); */

document.querySelector("#navBtn").addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("navToggle");
  document.querySelector("#navBtn").classList.toggle("navBtnColorToggle");
});

/* const navBox = document.querySelector("nav");
const logoBox = document.querySelector(".logo");

window.addEventListener("scroll", () => {
  const navPosition = navBox.getBoundingClientRect().top;


  if (navPosition < 10) {
    navBox.classList.add("navAlter");
    logoBox.classList.add("logoHide");
  }
}); */

// Packages Cards Background Slideshow

$(".pacBackground > div:gt(0)").hide();

setInterval(function () {
  $(".pacBackground > div:first")
    .fadeOut(2500)
    .next()
    .fadeIn(2500)
    .end()
    .appendTo(".pacBackground");
}, 4000);

//Contact modal

const contactBtn = document.querySelector("#btnContact");
const modalContainer = document.querySelector(".conModalContainer");
const modalBox = document.querySelector(".conModalShadow");

//Show modal
contactBtn.addEventListener("click", () => {
  modalContainer.classList.add("conModalContainerShow");
});

//Hide modal
modalBox.addEventListener("click", () => {
  modalContainer.classList.remove("conModalContainerShow");
});

//Contact map

let counter = 0;
document.querySelector("#btnMap").addEventListener("click", () => {
  document.querySelector(".conMap").classList.toggle("conMapShow");

  counter++;

  if (counter % 2 == 0) {
    window.scrollTo(0, 0);
  } else {
    window.scrollTo(0, document.body.scrollHeight);
  }
});
