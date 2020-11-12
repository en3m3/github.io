const requestURL = 'towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['prophets'];      
    console.table(jsonObject);  
    // for (let i = 0; i < prophets.length; i++ ) {
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

        
    
    //   }

  });