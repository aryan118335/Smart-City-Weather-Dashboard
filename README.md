# Smart City Weather Dashboard

A weather app that tells you more than just the temperature. It gives you actual suggestions — like whether to carry an umbrella or wear a jacket — based on what the weather looks like right now.

---

## API

Uses the **OpenWeatherMap API** for current weather and 5-day forecast data.
Docs: https://openweathermap.org/api

---

## What it does

- Search weather by city name
- Loads your local weather automatically using the browser's Geolocation API
- Shows a 5-day forecast
- Gives clothing/activity suggestions based on temperature and conditions
- Background color changes depending on how hot or cold it is
- Filter and sort forecast data (built using array HOFs — no for loops)
- Save favourite cities using Local Storage
- Dark/light mode toggle

---

## Tech used

HTML, CSS, vanilla JavaScript, Fetch API, Geolocation API, Local Storage

---

## Running it locally

1. Clone the repo
2. Get a free API key from https://openweathermap.org
3. Paste it into `api.js` where it says `YOUR_API_KEY`
4. Open `index.html` in your browser

---
