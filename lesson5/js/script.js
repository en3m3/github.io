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

function nextSlide() {
    let current = document.querySelector(".carousel.active");
    if(current === document.querySelector(".carousel-wrapper").lastElementChild) {
        current.classList.toggle("active");
        current = document.querySelector(".carousel-wrapper").firstElementChild;
        current.classList.toggle("active");
    } else {
        current.classList.toggle("active");
        current = current.nextElementSibling;
        current.classList.toggle("active");
    }
} 

function prevSlide() {
    let current = document.querySelector(".carousel.active");
    if(current === document.querySelector(".carousel-wrapper").firstElementChild) {
        current.classList.toggle("active");
        current = document.querySelector(".carousel-wrapper").lastElementChild;
        current.classList.toggle("active");
    } else {
        current.classList.toggle("active");
        current = current.previousElementSibling;
        current.classList.toggle("active");
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
let modified = new Date();
let formattedDate = `${months[modified.getMonth()]} ${modified.getDate()}, ${modified.getFullYear()}`;
document.getElementById("modified").innerHTML = formattedDate;

// let today = new Date();
// let theYear = today.getFullYear();
// document.getElementById("year").innerHTML = theYear;


navtoggle.addEventListener("click", toggleNav);
window.addEventListener("resize", closeNav);


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



//     let days = [];
//     let temp = new Date();
//     temp.setDate(today.getDate());
//     console.log(temp);
//     temp.setDate(today.getDate() + 1);
//     console.log(temp);
//     days[0] = new ForcastDay(
//         temp.setDate(today.getDate()), {
//             weather: "Sunny",
//             temp : "58",
//             barometric: "38",
//             humidity: "10",
//             summary: "Hot Hot Hot"        
//         });
//     days[1] = new ForcastDay(
//         temp.setDate(today.getDate() + 1), {
//         weather: "Sunny",
//         temp : "58",
//         barometric: "38",
//         humidity: "10",
//         summary: "Hot Hot Hot"        
//     });
//     days[2] = new ForcastDay(
//         temp.setDate(today.getDate() + 2), {
//         weather: "Rainy",
//         temp : "58",
//         barometric: "38",
//         humidity: "10",
//         summary: "Hot Hot Hot"        
//     });
//     days[3] = new ForcastDay(
//         temp.setDate(today.getDate() + 3), {
//             weather: "Cloudy",
//             temp : "58",
//             barometric: "38",
//             humidity: "10",
//             summary: "Hot Hot Hot"        
//         });
//     days[4] = new ForcastDay(
//         temp.setDate(today.getDate() + 4), {
//             weather: "Rain",
//             temp : "58",
//             barometric: "38",
//             humidity: "10",
//             summary: "Hot Hot Hot"        
//         });
//     let forcastDays = document.querySelectorAll(".forcast-day");
//     for(let i = 0; i < forcastDays.length; i++) {
//             displayDay = document.createElement("div");
//             dayContent = document.createTextNode(`${days[i].weekDay} the ${days[i].theDate}`);
//             forcastDays[i].appendChild(displayDay);
//             displayDay.appendChild(dayContent);
//     }
    


// })

{/* <div class="five-forecast"> */}
{/* <div class="forcast-day"> */}
});
    