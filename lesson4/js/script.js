const navtoggle = document.querySelector('#mobile-toggle');
const nav = document.querySelector('nav');

function toggleNav() {
    nav.classList.toggle("nav-open");
}

var months = ["Janurary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"];
let today = new Date();
let formattedDate = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
document.getElementById("modified").innerHTML = formattedDate;

navtoggle.addEventListener("click", toggleNav);