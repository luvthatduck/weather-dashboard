var searchBtn = document.getElementById("button-addon2")
var city = []
var uviBadge = document.getElementById("cityUvIndex")


searchBtn.addEventListener("click", function () {
  var cityInput = document.getElementById("city-input")
  city.push(cityInput.value)

  localStorage.setItem('cityName', JSON.stringify(city))
  weatherSearch(cityInput.value)
});




var cityHistory = function () {
  var cityHistory = document.getElementById("cityHistory");
  cityHistory.textContent = ""
  var listofCities = JSON.parse(localStorage.getItem("cityName"))
  var i, len, text;
  for (i = 0, len = listofCities.length, text = ""; i < len; i++) {
    text = listofCities[i];
    var cityList = document.createElement("li")
    cityList.addEventListener("click", function (event) {
      weatherSearch(event.target.textContent)
    })
    cityList.textContent = text
    cityHistory.append(cityList)
  }

}


// 
// when you click on the city in the history list, it will simulate the clickevent listener
//it will put that 



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


      if (response.current.uvi >= 2 && response.current.uvi <= 7) {
        cityUvIndex.classList.add("badge-warning")
      }
      else if (response.current.uvi >= 8) {
        cityUvIndex.classList.add("badge-danger")

      }

    });
};

function fiveday1Fetch(city) {
  fetch(
    'https://api.openweathermap.org/data/2.5/forecast?q='
    + city
    + '&units=imperial'
    + '&appid=77923bca40e129e0b197958708cf0174')
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var forecast1day = document.getElementById('day1date');
      var forecast1temp = document.getElementById('day1temp');
      var forecast1hum = document.getElementById('day1hum');
      forecast1day.innerHTML = '<b>' + response.list[3].dt_txt + '<b>'
      forecast1temp.innerHTML = '<p>' + response.list[3].main.temp + ' degrees F<p><img src="http://openweathermap.org/img/wn/' + response.list[3].weather[0].icon + '.png" />'
      forecast1hum.innerHTML = '<p>' + response.list[3].main.humidity + ' % Humidity<p>'
    });
};
function fiveday2Fetch(city) {
  fetch(
    'https://api.openweathermap.org/data/2.5/forecast?q='
    + city
    + '&units=imperial'
    + '&appid=77923bca40e129e0b197958708cf0174')
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var forecast1day = document.getElementById('day2date');
      var forecast1temp = document.getElementById('day2temp');
      var forecast1hum = document.getElementById('day2hum');
      forecast1day.innerHTML = '<b>' + response.list[11].dt_txt + '<b>'
      forecast1temp.innerHTML = '<p>' + response.list[11].main.temp + ' degrees F<p><img src="http://openweathermap.org/img/wn/' + response.list[11].weather[0].icon + '.png" />'
      forecast1hum.innerHTML = '<p>' + response.list[11].main.humidity + ' % Humidity<p>'
    });
};
function fiveday3Fetch(city) {
  fetch(
    'https://api.openweathermap.org/data/2.5/forecast?q='
    + city
    + '&units=imperial'
    + '&appid=77923bca40e129e0b197958708cf0174')
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var forecast1day = document.getElementById('day3date');
      var forecast1temp = document.getElementById('day3temp');
      var forecast1hum = document.getElementById('day3hum');
      forecast1day.innerHTML = '<b>' + response.list[19].dt_txt + '<b>'
      forecast1temp.innerHTML = '<p>' + response.list[19].main.temp + ' degrees F<p><img src="http://openweathermap.org/img/wn/' + response.list[19].weather[0].icon + '.png" />'
      forecast1hum.innerHTML = '<p>' + response.list[19].main.humidity + ' % Humidity<p>'
    });
};
function fiveday4Fetch(city) {
  fetch(
    'https://api.openweathermap.org/data/2.5/forecast?q='
    + city
    + '&units=imperial'
    + '&appid=77923bca40e129e0b197958708cf0174')
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var forecast1day = document.getElementById('day4date');
      var forecast1temp = document.getElementById('day4temp');
      var forecast1hum = document.getElementById('day4hum');
      forecast1day.innerHTML = '<b>' + response.list[27].dt_txt + '<b>'
      forecast1temp.innerHTML = '<p>' + response.list[27].main.temp + ' degrees F<p><img src="http://openweathermap.org/img/wn/' + response.list[27].weather[0].icon + '.png" />'
      forecast1hum.innerHTML = '<p>' + response.list[27].main.humidity + ' % Humidity<p>'
    });
};
function fiveday5Fetch(city) {
  fetch(
    'https://api.openweathermap.org/data/2.5/forecast?q='
    + city
    + '&units=imperial'
    + '&appid=77923bca40e129e0b197958708cf0174')
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var forecast1day = document.getElementById('day5date');
      var forecast1temp = document.getElementById('day5temp');
      var forecast1hum = document.getElementById('day5hum');
      forecast1day.innerHTML = '<b>' + response.list[35].dt_txt + '<b>'
      forecast1temp.innerHTML = '<p>' + response.list[35].main.temp + ' degrees F<p><img src="http://openweathermap.org/img/wn/' + response.list[35].weather[0].icon + '.png" />'
      forecast1hum.innerHTML = '<p>' + response.list[35].main.humidity + ' % Humidity<p>'
    });
};


function weatherSearch(searchCity) {
  cityHistory(searchCity)
  weatherFetch(searchCity)
  tempFetch(searchCity)
  humidityFetch(searchCity)
  windspeedFetch(searchCity)
  getCoord(searchCity)
  fiveday1Fetch(searchCity)
  fiveday2Fetch(searchCity)
  fiveday3Fetch(searchCity)
  fiveday4Fetch(searchCity)
  fiveday5Fetch(searchCity)
}




// function wtf() {
//   var wtfisgoingon = document.getElementById('day1')
//   wtfisgoingon.innerText = 'is this working?'
// }

// wtf()

// will display city name, date and weather.icon
//will display temperature main.temp
// will display humidity main.humidty 
// will display wind speed wind.speed
//will display UV Index and change color to indicate safety Green/yellow/red

// display a 5 day forcast in 

