var body = document.body;
// var header = document.header

var searchBtn = document.getElementById("button-addon2")
var city = []

// var h1El = document.createElement('h1');
// h1El.textContent = 'Weather Dashboard Area';
// h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
// header.appendChild(h1El);

searchBtn.addEventListener("click", function () {
  var cityInput = document.getElementById("city-input")
  // console.log(cityInput.value)
  city.push(cityInput.value)

  localStorage.setItem('cityName', city)
  cityHistory()
});

var cityHistory = function () {
  var cityHistory = document.getElementById("cityHistory");
  var listofCities = localStorage.getItem("cityName")
  console.log(listofCities.split(","))
  cityHistory.innerHTML = listofCities
  // for (var i = 0, cityHistory; cityHistory = city[i]; i++) {
  //   listofCities += "<li>" + cityHistory + "</li>";
  // }
  

};

cityHistory()