// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
let body = document.querySelector("body");

menuOpenBtn.onclick = function() {
    navLinks.style.left = "0";
    body.style.overflow = "hidden"; // Disable scrolling
}

menuCloseBtn.onclick = function() {
    navLinks.style.left = "-100%";
    body.style.overflow = "auto"; // Enable scrolling
}

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
    navLinks.classList.toggle("show1");
}

let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
    navLinks.classList.toggle("show2");
}

let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
    navLinks.classList.toggle("show3");
}
