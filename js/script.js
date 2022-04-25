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

$(".cards").hover(function () {
  if ($(this).hasClass("card1")) {
    $(".pacBackground").html("<img src='images/packages/pacBackground1.jpeg'>");
  } else if ($(this).hasClass("card2")) {
    $(".pacBackground").html("<img src='images/packages/pacBackground2.jpeg'>");
  } else if ($(this).hasClass("card3")) {
    $(".pacBackground").html("<img src='images/packages/pacBackground3.jpeg'>");
  } else if ($(this).hasClass("card4")) {
    $(".pacBackground").html("<img src='images/packages/pacBackground4.jpeg'>");
  } else if ($(this).hasClass("card5")) {
    $(".pacBackground").html("<img src='images/packages/pacBackground5.jpeg'>");
  }
});

/* $(".cards").mouseleave(function () {
  if ($(this).hasClass("cards")) {
    $(".pacBackground").html("");
  }
}); */
