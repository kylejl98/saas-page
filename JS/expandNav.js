const hamburger       = document.querySelector("i.fa-solid.fa-bars");
const nav             = document.querySelector(".nav-directory").style;
var   displayPrev = "none";

const displayNav = () => {
  if(window.innerWidth >= 1024){
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
  let right = ((window.innerWidth - headerWidth) / 2) - (navWidth / 2);

  nav.right = `${right}px`;
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
