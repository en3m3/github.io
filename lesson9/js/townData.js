const requestURL = 'towndata.json';

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

function Town(rainfall,
              population,
              events,
              motto,
              name,
              photo,
              founded
              ) {
    this.averageRainFall = population;
    this.events = events;
    this.motto = motto;
    this.name = name;
    this.photo = photo;
    this.founded = founded

}

function getList(townEvents) {
    var events = [];
    townEvents.forEach(element => {
        events.append(towns[i].element);
    });
    return eventList;
}

var siteTowns = [];
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];      
    console.table(jsonObject);  
    townArray = {};
    for (let i = 0; i < towns.length; i++ ) {
        if(towns[i].name == "Fish Haven") {
            var eventList = getList(towns[i].events);

            var fishHaven = Town(
                                towns[i].averageRainfall,
                                towns[i].currentPopulation,
                                eventList,
                                towns[i].motto,
                                towns[i].name,                                
                                towns[i].photo,
                                towns[i].yearFounded,                                  
                                )
            townArray["fishHaven"]= fishHaven;
        } else if(towns[i].name == "Preston") {
            var eventList = getList(towns[i].events);

            var preston = Town(
                                towns[i].averageRainfall,
                                towns[i].currentPopulation,
                                eventList,
                                towns[i].motto,
                                towns[i].name,                                
                                towns[i].photo,
                                towns[i].yearFounded,                                  
                                )            
            townArray["preston"]= preston;
        } else if(towns[i].name == "Soda Springs") {
            var eventList = getList(towns[i].events);

            var sodaSprings = Town(
                                towns[i].averageRainfall,
                                towns[i].currentPopulation,
                                eventList,
                                towns[i].motto,
                                towns[i].name,                                
                                towns[i].photo,
                                towns[i].yearFounded,                                  
                                )            
            townArray["sodaSprings"]= sodaSprings;
        }   
      }
  });

      //     let card = document.createElement('section');
    //     let h2 = document.createElement('h2');
    //     let birthday = document.createElement('p');
    //     let birthplace = document.createElement('p');
    //     let image = document.createElement('img');
    //     h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
    //     birthday.textContent = "Date of Birth: "+ prophets[i].birthdate;
    //     birthplace.textContent = "Place of Birth: "+ prophets[i].birthplace;


    //     card.appendChild(h2);
    //     card.appendChild(birthday);
    //     card.appendChild(birthplace);
    //     card.appendChild(image); 
    //     image.setAttribute('src', prophets[i].imageurl);
    //     document.querySelector('.cards').appendChild(card);
