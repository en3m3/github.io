
/* Preston: 5604473     */
/* Soda Springs 5607916 */
/* Fish Haven: 5585010  */

const bodyClasses = document.body.classList;
console.log(bodyClasses);
if(bodyClasses.contains("preston") || bodyClasses.contains("apiTest")) {
    var requestURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=ee95bdb22401d075cd5b22ae078a154f";
} else if(bodyClasses.contains("sodaSprings")) {
    var requestURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=ee95bdb22401d075cd5b22ae078a154f";
} else if(bodyClasses.contains("fishHaven")) {
    var requestURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=ee95bdb22401d075cd5b22ae078a154f";
}
console.log(requestURL);
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;    
        document.getElementById('icon').src = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        document.getElementById('icon').alt = jsObject.weather[0].description;
    });