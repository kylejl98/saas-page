const hamburger       = document.querySelector("i.fa-solid.fa-bars");
const nav             = document.querySelector(".nav-directory").style;
var   displayPrev = "none";

const displayNav = () => {
  if(window.screen.width >= 1024){
    nav.display = "inline-block";
  } 
  else {
    console.log(`Previous: ${displayPrev}`)
    if (displayPrev == "none"){
      nav.display = "none";
    } else if (displayPrev == "flex") {
      nav.display = "flex";
    }
  }
}

const alignNav = () => {
  let headerWidth = document.querySelector("nav").clientWidth;
  let navWidth = document.querySelector(".nav-directory").clientWidth;
  let right = ((window.screen.width - headerWidth) / 2) - (navWidth / 2);
  let logo = document.querySelector("header nav img").style;

  if(window.screen.width >= 768 && window.screen.width < 1024) {
    nav.right = `${right}px`;
    nav.left = 'initial';
    nav.bottom = 'initial';
    nav.top = 'initial';
    nav.gap = 'initial';
    nav.justifyContent = 'initial';
  } else if (window.screen.width < 768){
    nav.margin = 0;
    nav.left = 0;
    nav.right = 0;
    nav.bottom = 0;
    nav.top = 0;
    nav.zIndex = 100;
    nav.gap = '30px'
    nav.justifyContent = 'center';
    nav.maxWidth = window.screen.width;
    hamburger.style.zIndex = 101;
    logo.zIndex = 101;
  }
}

const toggleMenu = () => {
  if(nav.display == "none" || nav.display == "") { 
    displayPrev = "flex"
    nav.display = "flex";
    alignNav();
  } 
  else {
    displayPrev = "none"
    nav.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu)

window.addEventListener("resize", alignNav)
window.addEventListener("resize", displayNav)