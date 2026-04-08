const API_KEY = "ee4596ec30de2dfcd65f46f503cd00eb";


const cityInput = document.getElementById("cityInput");

const btnSearch = document.getElementById("btnSearch");

const loadingDiv = document.getElementById("loading");

const errorDiv = document.getElementById("error");
const dashboard = document.getElementById("dashboard");

const dataSearchInput = document.getElementById("dataSearchInput");
const filterSelect = document.getElementById("filterSelect");
const sortSelect = document.getElementById("sortSelect");
const themeToggle = document.getElementById("themeToggle");
const cityList = document.getElementById("cityList");

const weatherData = [
  { name: "Copenhagen", temp: 12, condition: "Clouds", category: "clouds", liked: false },
  { name: "Rome", temp: 22, condition: "Clear", category: "clear", liked: false },
  { name: "London", temp: 16, condition: "Rain", category: "rain", liked: false },
  { name: "Tokyo", temp: 19, condition: "Clear", category: "clear", liked: false },
  { name: "Sydney", temp: 25, condition: "Clouds", category: "clouds", liked: false },
];

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

function renderCityList(list) {
  if (list.length === 0) {
    cityList.innerHTML = "<p>No matching cities found.</p>";
    return;
  }

  cityList.innerHTML = list.map(function(item) {
    return (
      "<div class=\"card\">" +
      "<h3>" + item.name + "</h3>" +
      "<p>" + item.condition + "</p>" +
      "<p>" + item.temp + "°C</p>" +
      "<button class=\"favorite-btn " + (item.liked ? "active" : "") + "\" data-city=\"" + item.name + "\">" +
      (item.liked ? "♥ Liked" : "♡ Like") +
      "</button>" +
      "</div>"
    );
  }).join("");
}

function updateCityCards() {
  const searchText = dataSearchInput.value.trim().toLowerCase();
  const filterValue = filterSelect.value;
  const sortValue = sortSelect.value;

  const filtered = weatherData.filter(function(item) {
    const matchSearch =
      item.name.toLowerCase().includes(searchText) ||
      item.condition.toLowerCase().includes(searchText);
    const matchFilter = filterValue === "all" || item.category === filterValue;
    return matchSearch && matchFilter;
  });

  const sorted = filtered.slice().sort(function(a, b) {
    if (sortValue === "name-asc") {
      return a.name.localeCompare(b.name);
    }
    if (sortValue === "name-desc") {
      return b.name.localeCompare(a.name);
    }
    if (sortValue === "temp-asc") {
      return a.temp - b.temp;
    }
    return b.temp - a.temp;
  });

  renderCityList(sorted);
}

cityList.addEventListener("click", function(event) {
  if (event.target.matches(".favorite-btn")) {
    const city = event.target.dataset.city;
    const found = weatherData.find(function(item) {
      return item.name === city;
    });

    if (found) {
      found.liked = !found.liked;
      updateCityCards();
    }
  }
});

[dataSearchInput, filterSelect, sortSelect].forEach(function(element) {
  element.addEventListener("input", updateCityCards);
  element.addEventListener("change", updateCityCards);
});

themeToggle.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
  themeToggle.textContent = document.body.classList.contains("dark-theme") ? "Light Mode" : "Dark Mode";
});

updateCityCards();

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