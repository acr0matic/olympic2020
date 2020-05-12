/* global MicroModal */

MicroModal.init();

var limit = 2 * 3600 * 1000; // 2 часа
var localStorageInitTime = localStorage.getItem("localStorageInitTime");
if (localStorageInitTime === null) {
  localStorage.setItem("localStorageInitTime", +new Date());
} else if (+new Date() - localStorageInitTime > limit) {
  localStorage.clear();
  localStorage.setItem("localStorageInitTime", +new Date());
}

if (localStorage.getItem("modalShow") === null)
  localStorage.setItem("modalShow", "false");

var data = localStorage.getItem("modalShow");
if (data == "false") {
  MicroModal.show("modal-info");
  localStorage.setItem("modalShow", "true");
}

const anchors = document.querySelectorAll('a[href*="#"]');
const anchorButtons = document.querySelectorAll("[data-anchor-button]");

for (let button of anchorButtons) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = button.getAttribute("data-anchor-button").substr(1);

    SmoothScroll(blockID);
  });
}

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute("href").substr(1);

    SmoothScroll(blockID);
    closeMobileMenu();
  });
}

function SmoothScroll(blockID) {
  document.getElementById(blockID).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

window.onscroll = function () {
  stickyNavbar();
};

var header = document.getElementById("header"),
  sticky = header.offsetTop;

function stickyNavbar() {
  window.pageYOffset > sticky
    ? header.classList.add("header-sticky")
    : header.classList.remove("header-sticky");
}

var buttonNav = document.querySelector("[data-button-nav]");
if (buttonNav)
  buttonNav.addEventListener("click", () => {
    SmoothScroll("about");
  });

var nav = document.getElementById("navigate");
var ms = new MenuSpy(nav, {
  activeClass: "nav-item--current",
});

var importantButtons = document.querySelectorAll(
  "[data-button=important-info]"
);

for (const button of importantButtons) {
  if (button.getAttribute("data-button") == "important-info")
    button.onclick = () => {
      MicroModal.show("modal-info");
      closeMobileMenu();
    };
}

var parallaxImage = document.getElementById("hero-parallax");

if (parallaxImage) {
  new simpleParallax(parallaxImage, {
    scale: 1.25,
  });
}
