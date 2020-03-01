"use strict";

var mobileMenu = document.querySelector(".mobile-menu-wrapper");
var mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
var mobileMenuOpenButton = document.getElementById("mobile-menu-open");
var mobileMenuCloseButton = document.getElementById("mobile-menu-close");
mobileMenuOpenButton.addEventListener("click", function () {
  openMobileMenu();
});
mobileMenuCloseButton.addEventListener("click", function () {
  closeMobileMenu();
});

function openMobileMenu() {
  mobileMenu.classList.add("mobile-menu-visible");
  mobileMenuOverlay.classList.add("mobile-menu-overlay-visible");
}

function closeMobileMenu() {
  if (mobileMenu.classList.contains("mobile-menu-visible")) mobileMenu.classList.remove("mobile-menu-visible");
  if (mobileMenuOverlay.classList.contains("mobile-menu-overlay-visible")) mobileMenuOverlay.classList.remove("mobile-menu-overlay-visible");
}