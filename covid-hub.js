"use strict";

const mainPage = document.querySelector("#currys-style");
const popUpVid = document.querySelector(".safety-video-mobile");
let videoDisplay; //SHOULD I DELCARE THIS WHERE IT IS USED?
const howToBuy = document.querySelector(".how-to-buy-mobile");
const tabbedNav = document.querySelector("nav");
const navLinks = tabbedNav.querySelectorAll("li");
const mainContent = document.querySelector("main");
const pages = mainContent.querySelectorAll("section");
const faqs = document.querySelector(".faqs");

//Video popup for mobile
const video = `
<div class="videoDisplay">
  <div class="video-bg"></div>
  <div class="pop-up-vid">
    <span class="close-btn">X</span>
    <div class="videoWrapper">
      <iframe scrolling="no" frameborder="0" mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true" src="video/safety-first.m4v"></iframe>
    </div>
  </div>
</div>
`;

popUpVid.addEventListener("click", function(){
  mainPage.insertAdjacentHTML('afterbegin', video);
  videoDisplay = document.querySelector(".videoDisplay");

  videoDisplay.addEventListener("click", function(e){
    const target = e.target.classList;
    if(target.contains("close-btn") || target.contains("video-bg")) videoDisplay.remove();
  });
})


//Navigation
tabbedNav.addEventListener("click", function (e) {
  const target = e.target.closest("li");
  //BETTER SOLUTION?
  //Array.from(pages).forEach((cur) => (cur.style.display = "none"));
  //Don't need to convert to array, nodelists (which 'querySelectorAll' produces) have access to thier own forEach instance method
  pages.forEach((cur) => cur.style.display = "none");

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
