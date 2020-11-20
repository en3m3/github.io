
/* Preston: 5604473     */
/* Soda Springs 5607916 */
/* Fish Haven: 5585010  */

var weekdayList = new Array();
weekdayList.push.apply(weekdayList, ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]);

const bodyClasses = document.body.classList;


if(bodyClasses.contains("apiTest")) {
    var page = "apiTest";
    var locationID = "5604473";
}else if(bodyClasses.contains("preston") ) { 
    var page = "Preston";
    var locationID = "5604473";
}else if(bodyClasses.contains("sodaSprings")) {
    var page = "SodaSprings";
    var requestURL = "5607916";
} else if(bodyClasses.contains("fishHaven")) {
    var page = "FishHaven";
    var requestURL = "5585010";
}

var requestURL = `https://api.openweathermap.org/data/2.5/weather?id=${locationID}&units=imperial&appid=ee95bdb22401d075cd5b22ae078a154f`;

function windchill(temp, windSpeed) {
    return Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16));
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
                document.getElementById('temp').textContent = `${jsObject.main.temp}°F`;
                document.getElementById('humidity').textContent = `${jsObject.main.humidity}%`;
                document.getElementById('wind-speed').textContent = `${jsObject.wind.speed}mph`;
                const windchillElement = document.querySelector("#wind-chill");
                let temp = jsObject.main.temp;
                let windSpeed = jsObject.wind.speed;
                let chill = windchill(temp, windSpeed);
                windchillElement.innerHTML = temp >= 50 ? "N/A" : chill + "°F";                
        }
    });

    var requestURL = `https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=01c123b90547d5719b9721540f7c306f`
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then((jsObject) => {
        // console.log(jsObject);
        var fiveDay = [];
        jsObject.list.forEach(forcastDay => {
            if(forcastDay.dt_txt.includes("18:00:00")) {
                fiveDay.push(forcastDay);
            }            
        });
        // console.log(fiveDay);

    const fiveDayContainer = document.querySelector('.five-day');

    fiveDay.forEach(forcastDay =>{
        let dayContainer = document.createElement("div");
        dayContainer.classList.add("forcast-day");

        thedate = new Date(forcastDay.dt_txt);
        let dayWeekday = document.createElement("div");
        dayWeekday.classList.add("day-of-week")
        dayWeekday.textContent = weekdayList[thedate.getDay()];
        let imageIcon = document.createElement("img");
        imageIcon.src = `https://openweathermap.org/img/w/${forcastDay.weather[0].icon}.png`;
        imageIcon.alt = forcastDay.weather[0].description;

        let weatherType = document.createElement("p");
        weatherType.innerHTML = forcastDay.weather[0].description;      

        let dayTempLabel = document.createElement("p");
        dayTempLabel.textContent = "Temp: "
        let dayTemp = document.createElement("p")
        dayTemp.innerHTML = forcastDay.main.temp + "&deg;F";



        fiveDayContainer.appendChild(dayContainer);
        dayContainer.appendChild(dayWeekday);
        dayContainer.appendChild(imageIcon);
        dayContainer.appendChild(weatherType);        
        dayContainer.appendChild(dayTempLabel);
        dayContainer.appendChild(dayTemp);
    })

});