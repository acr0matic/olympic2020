const anchors = document.querySelectorAll('a[href*="#"]');
const anchorButtons = document.querySelectorAll("[data-anchor-button]");

for (let button of anchorButtons) {
  button.addEventListener("click", function(e) {
    e.preventDefault();
    const blockID = button.getAttribute("data-anchor-button").substr(1);

    SmoothScroll(blockID);
  });
}

for (let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const blockID = anchor.getAttribute("href").substr(1);

    SmoothScroll(blockID);
  });
}

function SmoothScroll(blockID) {
  document.getElementById(blockID).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

window.onscroll = function() {
  stickyNavbar();
};

var header = document.getElementById("header"),
  sticky = header.offsetTop;

function stickyNavbar() {
  window.pageYOffset > sticky
    ? header.classList.add("header-sticky")
    : header.classList.remove("header-sticky");
}

var buttonNav = document.querySelector("[data-button-nav]")
buttonNav.addEventListener("click", () => {
  SmoothScroll("about");
})

var buttonLink = document.querySelector("[data-button-link]")
buttonLink.addEventListener("click", () => {
  window.open("")
})