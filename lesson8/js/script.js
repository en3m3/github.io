const navtoggle = document.querySelector('#mobile-toggle');
const nav = document.querySelector('nav');

var months = ["Janurary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"];
let today = new Date();
let formattedDate = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
document.getElementById("modified").innerHTML = formattedDate;

navtoggle.addEventListener("click", function () {
    nav.classList.toggle("nav-open");
});

document.addEventListener("DOMContentLoaded", function () {
    if (document.body.classList.contains("preston")) {
        let notice = document.querySelector("#friday-notice");
        let today = new Date();
        let weekDay = new Date().getDay();
        if (weekDay === 5) {
            notice.classList.remove("hide");
        }
    }
});


function severityChange(severityLevel) {
    document.getElementById("severityOutput").innerHTML = severityLevel;
}


WebFont.load({
    google: {
        families: [
            'Rubik',
            'Montserrat',
        ]
    }
});