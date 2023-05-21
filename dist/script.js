// // Header
// window.onscroll = function () {
//     const header = document.querySelector('header');
//     const fixedNav = header.offSetTop; 

//     if ( window.pageYOffset > fixedNav ) {
//         header.classList.add('navbar-active');
//     } else {
//         header.classList.remove('navbar-active');
//     }
    
// }

// Sticky Header 
const navSticky = document.querySelector("header")
document.addEventListener("scroll", () => {
    if ( document.documentElement.scrollTop > 20 ) {
        navSticky.classList.add("navbar-active")
    } else {
        navSticky.classList.remove("navbar-active")
    }
})



//  Hamburger Menu
const hamburger = document.querySelector("#hamburger")
const navMenu = document.querySelector("#nav-menu")

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
} )