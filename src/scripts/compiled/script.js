"use strict";

MicroModal.init();
var anchors = document.querySelectorAll('a[href*="#"]');
var anchorButtons = document.querySelectorAll("[data-anchor-button]");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var button = _step.value;
    button.addEventListener("click", function (e) {
      e.preventDefault();
      var blockID = button.getAttribute("data-anchor-button").substr(1);
      SmoothScroll(blockID);
    });
  };

  for (var _iterator = anchorButtons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  var _loop2 = function _loop2() {
    var anchor = _step2.value;
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute("href").substr(1);
      SmoothScroll(blockID);
      closeMobileMenu();
    });
  };

  for (var _iterator2 = anchors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    _loop2();
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

function SmoothScroll(blockID) {
  document.getElementById(blockID).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

window.onscroll = function () {
  stickyNavbar();
};

var header = document.getElementById("header"),
    sticky = header.offsetTop;

function stickyNavbar() {
  window.pageYOffset > sticky ? header.classList.add("header-sticky") : header.classList.remove("header-sticky");
}

var buttonNav = document.querySelector("[data-button-nav]");
buttonNav.addEventListener("click", function () {
  SmoothScroll("about");
});
var nav = document.getElementById("navigate");
var ms = new MenuSpy(nav, {
  activeClass: "nav-item--current"
});
var mapContainer = document.getElementById("contact-map");
var map = document.createElement("iframe");
map.src = "https://yandex.ru/map-widget/v1/?um=constructor%3Ae867490a6779cf560ffb7feece2dde5308d88ee2cc001ba8b63632a163313592&amp;source=constructor";
map.width = "100%";
map.height = "500px";
map.frameBorder = "0";
var isLoaded = false;
window.addEventListener("scroll", function () {
  var rect = mapContainer.getBoundingClientRect();

  if (rect.top <= 2500 && !isLoaded) {
    mapContainer.appendChild(map);
    isLoaded = true;
  }
});