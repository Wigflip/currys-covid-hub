"use strict";

const howToBuy = document.querySelector(".how-to-buy-mobile");
const tabbedNav = document.querySelector("nav");
const navLinks = tabbedNav.querySelectorAll("li");
const mainContent = document.querySelector("main");
const pages = mainContent.querySelectorAll("section");
const faqs = document.querySelector(".faqs");

//Navigation
tabbedNav.addEventListener("click", function (e) {
  const target = e.target.closest("li");
  //BETTER SOLUTION?
  //Array.from(pages).forEach((cur) => (cur.style.display = "none"));
  //Don't need to convert to array, nodelists (which 'querySelectorAll' produces) have access to thier own forEach instance method
  pages.forEach((cur) => {
    cur.style.display = "none";
  });

  Array.from(navLinks)
    .find((cur) => {
      return cur.classList.contains("active");
    })
    .classList.remove("active");

  document.querySelector(`#${target.dataset.page}`).style.display = "block";
  target.classList.add("active");
});

//FAQs dropdown
faqs.addEventListener("click", function (e) {
  const target = e.target.closest(".question-wrap");
  if (target === null) return;
  target.classList.toggle("active");
});

//"How to buy" dropdown
howToBuy.addEventListener("click", function () {
  //BETTER WAY TO DO THIS?
  this.querySelector(".content-wrap").classList.toggle("active");
});
