const hamburger = document.querySelector("i.fa-solid.fa-bars");
const nav       = document.querySelector(".nav-directory");

const toggleMenu = () => {
  if(nav.style.display == "none" || nav.style.display == "") {
    nav.style.display = "block";
  } 
  else {
    nav.style.display = "none";
  }
}
//TODO: FORMAT CSS FOR TOGGLE NAV MENU
hamburger.addEventListener("click", toggleMenu)