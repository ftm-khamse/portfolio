const navbar = document.querySelector("#header");
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navLink = document.querySelectorAll(".nav__link");

//add shadow class to navbar
window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
        navbar.classList.add("head-shadow");
    } else {
        navbar.classList.remove("head-shadow");
    }
});

//add show menu 
navToggle.addEventListener("click" ,function(){
    navMenu.classList.toggle("show-menu");
});


// remove menu
function linkAction() {
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))