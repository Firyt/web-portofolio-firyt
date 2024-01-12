// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const scrollTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    scrollTop.classList.remove("hidden");
    scrollTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    scrollTop.classList.add("hidden");
    scrollTop.classList.remove("flex");
  }
};

// Click on outside hamburger
window.addEventListener("click", function (e) {
  if (e.target != navMenu && e.target != hamburger) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});
