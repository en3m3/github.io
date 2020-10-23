const navtoggle = document.querySelector('#mobile-toggle');
const nav = document.querySelector('nav');
const animDuration = 900;

var months = ["Janurary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"];
let modified = new Date();
let formattedDate = `${months[modified.getMonth()]} ${modified.getDate()}, ${modified.getFullYear()}`;
document.getElementById("modified").innerHTML = formattedDate;

navtoggle.addEventListener("click", function() {
    nav.toggle("nav-open");
});

document.addEventListener("DOMContentLoaded", function(){
    if(document.body.classList.contains("preston")) {
        let notice = document.querySelector("#friday-notice");
        let today = new Date();
        let weekDay = new Date().getDay();
        if(weekDay === 5) {
            notice.classList.remove("hide");
        }
    }
});

WebFont.load({
    google: {
      families: [
         'Raleway',
         'Roboto+Slab',
      ]
    }
  });  