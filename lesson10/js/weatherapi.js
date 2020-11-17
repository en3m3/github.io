const requestURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=ee95bdb22401d075cd5b22ae078a154f"

/* Preston: 5604473     */
/* Soda Springs 5607916 */
/* Fish Haven: 5585010  */



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