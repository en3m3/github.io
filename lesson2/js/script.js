var toggle = document.querySelectorAll(".accordian-item");
toggle.forEach(item => {
    item.addEventListener("click",function(e){
        toggle.forEach(item2 => {       
            if(item2 === this) {
                if(this.classList.contains("show")) {
                    this.classList.remove("show"); 
                    main.style.height = 100 + "px";  
                } else {
                    this.classList.add("show"); 
                    let main = document.getElementById("main");
                    main.style.height = 1500 + "px";

                }
            } else {
                item2.classList.remove("show");
                main.style.height = 100 + "px"; 
            }
        });    
    });
});

var months = ["Janurary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"];
let modified = new Date(document.lastModified);
let formattedDate = `Last updated: ${months[modified.getMonth()]} ${modified.getDate()}, ${modified.getUTCFullYear()}`;
document.getElementById("modified").innerHTML = formattedDate;

let today = new Date();
let theYear = today.getFullYear();
document.getElementById("year").innerHTML = theYear;

setTimeout(function(){
    let foot = document.getElementsByTagName("footer")[0];
    foot.classList.add("hide");

    document.addEventListener("mousemove", function(e){
        let foot = document.getElementsByTagName("footer")[0];
        if(e.clientY>750) {
            foot.classList.remove("hide");
        } else {
            foot.classList.add("hide");
        }
    });        
},1500);
