// Nvigation

/* const { $LG } = require("lightgallery/lgQuery"); */

document.querySelector("#navBtn").addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("navToggle");
  document.querySelector("#navBtn").classList.toggle("navBtnColorToggle");
});

//Shows text on testimonials site

const tesText1Box = document.querySelector(".tesTextAnime1");
const tesText2Box = document.querySelector(".tesTextAnime2");

window.addEventListener("scroll", () => {
  const tesText1 = tesText1Box.getBoundingClientRect().top;
  const tesText2 = tesText2Box.getBoundingClientRect().top;

  const objectOnScreenPosition = window.innerHeight / 1.5;

  if (tesText1 < objectOnScreenPosition) {
    tesText1Box.classList.remove("tesTextAnime1");
  }

  if (tesText2 < objectOnScreenPosition) {
    tesText2Box.classList.remove("tesTextAnime2");
  }
});

// Packages Cards

$(".pacBackground > div:gt(0)").hide();

setInterval(function () {
  $(".pacBackground > div:first")
    .fadeOut(2500)
    .next()
    .fadeIn(2500)
    .end()
    .appendTo(".pacBackground");
}, 4000);
