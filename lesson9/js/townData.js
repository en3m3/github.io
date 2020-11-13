const requestURL = 'towndata.json';
var townArray = [];

function Town(rainfall,
              population,
              events,
              motto,
              name,
              photo,
              founded
              ) {
    this.averageRainFall = rainfall;
    this.population = population
    this.events = events;
    this.motto = motto;
    this.name = name;
    this.photo = photo;
    this.founded = founded;
    return this;
}

function buildTownStructure(container, townObject){
    let townSection = document.createElement('div');
    let container = document.querySelector(container);
    townSection.classList.add('townBanner')
    container.appendChild('townSection')
}


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



function getList(townEvents) {
    var events = [];
    townEvents.forEach(element => {
        events.push(element);
    });
    return events;
}

var siteTowns = [];
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];      
    var townArray = {};
    var eventList = [];
    for (let i = 0; i < towns.length; i++ ) {
        if(towns[i].name == "Fish Haven") {
            eventList = getList(towns[i].events);

            var fishHaven = new Town(
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
            eventList = getList(towns[i].events);

            var preston = new Town(
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
            eventList = getList(towns[i].events);

            var sodaSprings = new Town(
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
      buildTownStructure("town-grid",townArray["preston"]);
      buildTownStructure("town-grid",townArray["sodaSprings"]);
      buildTownStructure("town-grid",townArray["fishHaven"]);

  });