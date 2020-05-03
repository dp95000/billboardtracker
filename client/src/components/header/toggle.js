import React from 'react';
import Header from "./header";


// export default function toggle() {
// const burger = document.getElementsByClassName("hamburger").addEventListener("click", function () {
//   document.getElementById("menu").slideToggle();

// }

//to fix issue that toggle adds style(hides) to nav
// export function fixToggle() {
//   window.resize(function () {
//     if (window.innerWidth > 1024) {
//       document.getElementById("menu").removeAttr("style");
//     }
//   })
// }

//icon animation
// var topBar = document.getElementsByClassName("hamburger li:nth-child(1)"),
//   middleBar = document.getElementsByClassName("hamburger li:nth-child(2)"),
//   bottomBar = document.getElementsByClassName("hamburger li:nth-child(3)");

export default function toggle() {

  // var topBar = document.getElementsByClassName("hamburger li:nth-child(1)"),
  //   middleBar = document.getElementsByClassName("hamburger li:nth-child(2)"),
  //   bottomBar = document.getElementsByClassName("hamburger li:nth-child(3)");

  // if (middleBar.hasClass("rot-45deg")) {
  //   topBar.removeClass("rot45deg");
  //   middleBar.removeClass("rot-45deg");
  //   bottomBar.removeClass("hidden");
  // } else {
  //   bottomBar.addClass("hidden");
  //   topBar.addClass("rot45deg");
  //   middleBar.addClass("rot-45deg");
  // }

  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
};