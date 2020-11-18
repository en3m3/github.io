
/* Preston: 5604473     */
/* Soda Springs 5607916 */
/* Fish Haven: 5585010  */

const bodyClasses = document.body.classList;


if(bodyClasses.contains("apiTest")) {
    var page = "apiTest";
    var requestURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=ee95bdb22401d075cd5b22ae078a154f";
}else if(bodyClasses.contains("preston") ) { 
    var page = "preston";
    var requestURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=ee95bdb22401d075cd5b22ae078a154f";
}else if(bodyClasses.contains("sodaSprings")) {
    var page = "sodaSprings";
    var requestURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=ee95bdb22401d075cd5b22ae078a154f";
} else if(bodyClasses.contains("fishHaven")) {
    var page = "fishHaven";
    var requestURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=ee95bdb22401d075cd5b22ae078a154f";
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then((jsObject) => {
        console.log(jsObject);
        switch(page){
            case "apiTest":
                document.getElementById('current-temp').textContent = jsObject.main.temp;    
                document.getElementById('icon').src = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
                document.getElementById('icon').alt = jsObject.weather[0].description;
                break;
            default:
                document.getElementById('current').textContent = jsObject.weather[0].description;    
                document.getElementById('icon').src = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
                document.getElementById('icon').alt = jsObject.weather[0].description;                
                document.getElementById('temp').textContent = jsObject.main.temp;
                document.getElementById('humidity').textContent = jsObject.main.humidity;
                document.getElementById('wind-speed').textContent = jsObject.wind.speed;
        }
    });
/*
    feels_like: 268.21
humidity: 92
pressure: 1025
temp: 271.84
temp_max: 274.26
temp_min: 269.26
__proto__: Object
name: "Preston"
sys: {type: 1, id: 4701, country: "US", sunrise: 1605622860, sunset: 1605657871}
timezone: -25200
visibility: 4828
weather: [{…}]
wind:
deg: 74
speed: 1.88
__proto__: Object
__proto__: Object
*/