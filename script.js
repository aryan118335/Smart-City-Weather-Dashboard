const API_KEY = "ee4596ec30de2dfcd65f46f503cd00eb";

const cityInput = document.getElementById("cityInput");
const btnSearch = document.getElementById("btnSearch");
const loadingDiv = document.getElementById("loading");
const errorDiv = document.getElementById("error");
const dashboard = document.getElementById("dashboard");

const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const desc = document.getElementById("desc");

btnSearch.addEventListener("click", function() {
  // console.log("Search button was clicked");
  if (cityInput.value !== "") {
    // console.log("User typed: " + cityInput.value);
    getWeather(cityInput.value);
  }
});

function getWeather(city) {
  loadingDiv.classList.remove("hidden");
  dashboard.classList.add("hidden");
  errorDiv.classList.add("hidden");

  // console.log("Fetching data for " + city);

  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + API_KEY + "&units=metric")
    .then(function(res) {
      // console.log("Got response from API");
      if (res.ok === false) {
        throw new Error("City not found");
      }
      return res.json();
    })
    .then(function(data) {
      // console.log(data);
      
      cityName.textContent = data.name;
      temp.textContent = Math.round(data.main.temp) + "°C";
      desc.textContent = data.weather[0].main;

      loadingDiv.classList.add("hidden");
      dashboard.classList.remove("hidden");
    })
    .catch(function(err) {
      // console.log("An error happened: " + err);
      loadingDiv.classList.add("hidden");
      errorDiv.textContent = err.message;
      errorDiv.classList.remove("hidden");
    });
}