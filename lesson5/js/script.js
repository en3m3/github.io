const navtoggle = document.querySelector('#mobile-toggle');
const nav = document.querySelector('nav');
const animDuration = 900;


function toggleNav() {
    navtoggle.removeEventListener("click", toggleNav);
    if (nav.classList.contains("nav-open")) {
        closeNav();
    } else {
        openNav();
    }
}

function openNav() {
    window.removeEventListener("resize", closeNav);
    nav.classList.add("nav-open");
    nav.classList.add("absolute");
    setTimeout(function () {
        navtoggle.addEventListener("click", toggleNav);
        window.addEventListener("resize", closeNav);
    }, animDuration);
}

function closeNav() {
    window.removeEventListener("resize", closeNav);
    nav.classList.remove("nav-open");
    setTimeout(function () {
        nav.classList.remove("absolute");
        navtoggle.addEventListener("click", toggleNav);
        window.addEventListener("resize", closeNav);
    }, animDuration);
}

var months = ["Janurary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"];
let modified = new Date(document.lastModified);
let formattedDate = `Last updated: ${months[modified.getMonth()]} ${modified.getDate()}, ${modified.getUTCFullYear()}`;
document.getElementById("modified").innerHTML = formattedDate;

let today = new Date();
let theYear = today.getFullYear();
document.getElementById("year").innerHTML = theYear;


navtoggle.addEventListener("click", toggleNav);
window.addEventListener("resize", closeNav);