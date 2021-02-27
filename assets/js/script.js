var searchBtn = document.getElementById("button-addon2")
var city = []

searchBtn.addEventListener("click", function () {
  var cityInput = document.getElementById("city-input")
  // console.log(cityInput.value)
  city.push(cityInput.value)
  
  localStorage.setItem('cityName', city)
  cityHistory()
})

var cityHistory = function(){
  var listofCities = localStorage.getItem("cityName")
  console.log(listofCities.split(","))

}

cityHistory()