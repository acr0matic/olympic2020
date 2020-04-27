MicroModal.init();

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
    closeMobileMenu();
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

var buttonNav = document.querySelector("[data-button-nav]");
buttonNav.addEventListener("click", () => {
  SmoothScroll("about");
});


var nav = document.getElementById("navigate");
var ms = new MenuSpy(nav, {
  activeClass: "nav-item--current"
});

var mapContainer = document.getElementById("contact-map");
var map = document.createElement("iframe");

map.src =
  "https://yandex.ru/map-widget/v1/?um=constructor%3Ae867490a6779cf560ffb7feece2dde5308d88ee2cc001ba8b63632a163313592&amp;source=constructor";
map.width = "100%";
map.height = "500px";
map.frameBorder = "0";

var isLoaded = false;
window.addEventListener("scroll", () => {
  var rect = mapContainer.getBoundingClientRect();
  if (rect.top <= 2500 && !isLoaded) {
    mapContainer.appendChild(map);
    isLoaded = true;
  }
});
