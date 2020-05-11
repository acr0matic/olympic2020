"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* global MicroModal */
MicroModal.init();
var limit = 2 * 3600 * 1000; // 2 часа

var localStorageInitTime = localStorage.getItem('localStorageInitTime');

if (localStorageInitTime === null) {
  localStorage.setItem('localStorageInitTime', +new Date());
} else if (+new Date() - localStorageInitTime > limit) {
  localStorage.clear();
  localStorage.setItem('localStorageInitTime', +new Date());
}

if (localStorage.getItem("modalShow") === null) localStorage.setItem("modalShow", "false");
var data = localStorage.getItem("modalShow");

if (data == "false") {
  MicroModal.show("modal-info");
  localStorage.setItem("modalShow", "true");
}

var anchors = document.querySelectorAll('a[href*="#"]');
var anchorButtons = document.querySelectorAll("[data-anchor-button]");

var _iterator = _createForOfIteratorHelper(anchorButtons),
    _step;

try {
  var _loop = function _loop() {
    var button = _step.value;
    button.addEventListener("click", function (e) {
      e.preventDefault();
      var blockID = button.getAttribute("data-anchor-button").substr(1);
      SmoothScroll(blockID);
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var _iterator2 = _createForOfIteratorHelper(anchors),
    _step2;

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

  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    _loop2();
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
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
if (buttonNav) buttonNav.addEventListener("click", function () {
  SmoothScroll("about");
});
var nav = document.getElementById("navigate");
var ms = new MenuSpy(nav, {
  activeClass: "nav-item--current"
});
var importantButtons = document.querySelectorAll("[data-button=important-info]");

var _iterator3 = _createForOfIteratorHelper(importantButtons),
    _step3;

try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var button = _step3.value;
    if (button.getAttribute("data-button") == "important-info") button.onclick = function () {
      MicroModal.show("modal-info");
      closeMobileMenu();
    };
  }
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}