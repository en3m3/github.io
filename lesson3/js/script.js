var months = ["Janurary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"];
let modified = new Date(document.lastModified);
let formattedDate = `Last updated: ${months[modified.getMonth()]} ${modified.getDate()}, ${modified.getUTCFullYear()}`;
document.getElementById("modified").innerHTML = formattedDate;

let today = new Date();
let theYear = today.getFullYear();
document.getElementById("year").innerHTML = theYear;