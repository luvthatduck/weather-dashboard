var searchBtn = document.getElementById("button-addon2")
var city = []
var uviBadge = document.getElementById("cityUvIndex")

searchBtn.addEventListener("click", function () {
  var cityInput = document.getElementById("city-input")
  // console.log(cityInput.value)
  city.push(cityInput.value)

  localStorage.setItem('cityName', city)
  cityHistory(cityInput.value)
  weatherFetch(cityInput.value)
  tempFetch(cityInput.value)
  humidityFetch(cityInput.value)
  windspeedFetch(cityInput.value)
  uviFetch(cityInput.value)
  getCoord(cityInput.value)
  // fivedayFetch(cityInput.value)
});

var cityHistory = function () {
  var cityHistory = document.getElementById("cityHistory");
  var listofCities = localStorage.getItem("cityName")
  // console.log(listofCities.split(","))
  cityHistory.innerHTML = listofCities
};

function weatherFetch(city) {
  // when you click on the button the city will call API and display in cityName ID
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q='
    + city
    + '&appid=77923bca40e129e0b197958708cf0174')
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var citySearch = document.querySelector('#cityName');
      citySearch.innerHTML = '<h2>' + response.name + ' (' + new Date().toLocaleString() + ')<h2><img src="http://openweathermap.org/img/wn/' + response.weather[0].icon + '.png" />'

    });
};


function tempFetch(city) {
  // when you click on the button the city will call API and display in cityName ID
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q='
    + city
    + '&units=imperial'
    + '&appid=77923bca40e129e0b197958708cf0174')
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var cityTemp = document.querySelector('#cityTemp');
      cityTemp.innerHTML = '<h3>' + response.main.temp + ' degrees Fahrenheit <h3>';

    });
};


function humidityFetch(city) {

  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q='
    + city
    + '&appid=77923bca40e129e0b197958708cf0174')
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var cityHumidity = document.querySelector('#cityHumidity');
      cityHumidity.innerHTML = '<h3>' + response.main.humidity + '% Humidity <h3>';

    });
};

function windspeedFetch(city) {

  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q='

    + city

    + '&appid=77923bca40e129e0b197958708cf0174')
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var cityWindspeed = document.querySelector('#cityWindSpeed');
      cityWindspeed.innerHTML = '<h3>' + response.wind.speed + ' mph Wind Speed <h3>';

    });
};






function getCoord(city) {

  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q='
    + city
    + '&appid=77923bca40e129e0b197958708cf0174')
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var lat = response.coord.lat
      var lon = response.coord.lon
      uviFetch(lat, lon)
    });
}






function uviFetch(lat, lon) {
  fetch(
    'https://api.openweathermap.org/data/2.5/onecall?lat='

    + lat

    + '&lon='

    + lon

    + '&exclude=minutely,hourly,daily,alerts&appid=77923bca40e129e0b197958708cf0174')
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var cityUvIndex = document.querySelector('#cityUvIndex');
      cityUvIndex.innerHTML = '<h4>' + response.current.uvi + ' UV Index <h4>'
      content = JSON.parse(response.current.uvi)

      if (content <= 7 && content >= 3)  {
          document.querySelector.add(".badge-warning")
      }
      else if (content > 7) {
        uviBadge.document.querySelector.add(".badge-danger")
      }
    });
};


// function fivedayFetch(city) {
//   var date = new Date();
//   fetch(
//     'https://api.openweathermap.org/data/2.5/weather?q='
//     + city
//     + '&appid=77923bca40e129e0b197958708cf0174')
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (response) {
//       var fiveDayForecast1 = document.querySelector('#card-title1');
//       fiveDayForecast1.innerHTML = '<h3>' + new (Date() + 1).toLocaleString() + ')<h2><img src="http://openweathermap.org/img/wn/' + response.weather[0].icon + '.png" />'

//     });
// };

// function fivedayFetch(city) {
//   // when you click on the button the city will call API and display in cityName ID
//   fetch(
//     'https://api.openweathermap.org/data/2.5/forecast?q='
//     + city
//     + '&appid=77923bca40e129e0b197958708cf0174')
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (response) {
//       var fiveDayForecast1 = document.querySelector('##card-title1');
//       fiveDayForecast1.innerHTML = '<h2>' + response.name + ' (' + new Date().toLocaleString() + ')<h2><img src="http://openweathermap.org/img/wn/' + response.weather[0].icon + '.png" />'

//     });
// };




// will display city name, date and weather.icon
//will display temperature main.temp
// will display humidity main.humidty 
// will display wind speed wind.speed
//will display UV Index and change color to indicate safety Green/yellow/red

// display a 5 day forcast in 

weatherFetch()
tempFetch()
cityHistory()
humidityFetch()
windspeedFetch()

// fivedayFetch()