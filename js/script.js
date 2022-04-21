document.querySelector("#navBtn").addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("navToggle");
  document.querySelector("#navBtn").classList.toggle("navBtnColorToggle");
});

lightGallery(document.getElementById("lightgallery"), {
  plugins: [lgZoom, lgThumbnail],
  licenseKey: "free/non comercial",
  speed: 500,
});
