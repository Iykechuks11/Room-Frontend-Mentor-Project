// SELECT ALL REQUIRED HTML ELEMENTS
let open = document.getElementById("open"),
  close = document.getElementById("close"),
  slideNav = document.getElementById("slide-nav"),
  sections = document.querySelectorAll(".first");

// HAMBURGER OPEN AND CLOSE
open.addEventListener("click", showNav);
close.addEventListener("click", showNav);

function showNav() {
  if (slideNav.classList.contains("show")) {
    slideNav.classList.remove("show");
    close.style.display = "none";
    open.style.display = "block";
  } else {
    slideNav.classList.add("show");
    open.style.display = "none";
    close.style.display = "block";
  }
}

// SECTION SLIDE
console.log(sections);
