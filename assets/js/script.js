var searchBtn = document.getElementById("button-addon2")
var city = []


searchBtn.addEventListener("click", function () {
  var cityInput = document.getElementById("city-input")
  // console.log(cityInput.value)
  city.push(cityInput.value)

  localStorage.setItem('cityName', city)
  cityHistory()
  weatherFetch(cityInput.value)
  tempFetch()
  humidityFetch()
});

var cityHistory = function () {
  var cityHistory = document.getElementById("cityHistory");
  var listofCities = localStorage.getItem("cityName")
  console.log(listofCities.split(","))
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
    + '&appid=77923bca40e129e0b197958708cf0174')
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var cityTemp = document.querySelector('#cityTemp');
      cityTemp.innerHTML = '<h3>' + response.temp + '<h3>';

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
      cityHumidity.innerHTML = '<h3>' + response.main[0].humidity + '<h3>';

    });
};

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