import React from 'react';
import Header from "./header";


// export default function toggle() {
// const burger = document.getElementsByClassName("hamburger").addEventListener("click", function () {
//   document.getElementById("menu").slideToggle();

// }



export default function toggle() {
  const coll = document.getElementsByClassName("collapsible");

  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
};