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

var ForcastDay = function(theDay, weather) {
    console.log(theDay);
    this.dayOfWeek = theDay.getDay();
    this.theDate = theDay.getDate();
    this.weather = weather;
};

document.addEventListener("DOMContentLoaded", function(){
    if(document.body.classList.contains("preston")) {
        let notice = document.querySelector("#friday-notice");
        let today = new Date();
        let weekDay = new Date().getDay();
        if(weekDay === 5) {
            notice.classList.remove("hide");
        }
        var previous = document.getElementsByClassName("prev");
        for(i = 0;i < previous.length; i++) {
        previous[i].addEventListener("click", prevSlide);
        }
        var next = document.getElementsByClassName("next");
        for(i = 0;i < next.length; i++) {
            next[i].addEventListener("click", nextSlide);
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