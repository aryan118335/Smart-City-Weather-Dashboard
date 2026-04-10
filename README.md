# Smart City Weather Dashboard

A basic weather dashboard built for a web development college assignment. This project demonstrates API integration, dynamic DOM manipulation, and the use of JavaScript Higher-Order Functions (HOF).

## 🎓 Project Overview

This dashboard allows users to search for real-time weather data for any city globally and manage a predefined list of "saved" cities to demonstrate data handling.

### Key Features
- **Real-time Search**: Fetches data directly from the OpenWeatherMap API.
- **Dynamic Weather Cards**: Displays city name, temperature, and weather conditions.
- **Advanced Filtering**: Filter the saved cities list by weather condition (Clear, Clouds, Rain).
- **Sorting Logic**: Sort cities by name (A-Z/Z-A) or temperature (High-Low).
- **Higher-Order Functions**: Implemented using `.map()`, `.filter()`, and `.sort()` to satisfy Milestone 3 requirements.
- **Responsive Layout**: Designed to be viewable on both desktop and mobile devices.

## 🛠️ Tech Stack
- **HTML5**: Semantic structure.
- **CSS3**: Basic Flexbox layout with mobile responsiveness.
- **JavaScript (ES6)**: Fetch API and Higher-Order Functions.
- **API**: [OpenWeatherMap API](https://openweathermap.org/api)

## 🚀 Getting Started

1. **Clone the project**:
   ```bash
   git clone https://github.com/aryan118335/Smart-City-Weather-Dashboard.git
   ```

2. **API Configuration**:
   - Get a free API key from [OpenWeatherMap](https://openweathermap.org).
   - Open `script.js` and replace the `API_KEY` variable with your unique key.

3. **Run Locally**:
   - Open `index.html` in any modern web browser or use a local server like `Live Server`.

## 📝 Milestone 3 Requirements Verified 
- [x] Use of `.filter()` to manage search results.
- [x] Use of `.map()` to render dynamic UI components.
- [x] Use of `.sort()` for data organization.
- [x] Minimalist, clean CSS using standard fonts (Arial).


## Project Structure
index.html: Contains the semantic structure and dashboard layout.

style.css: Implements a minimalist "Antigravity" design focused on readability and mobile responsiveness.

script.js: Handles API calls, state management, and DOM updates using ES6+ features.

## Deployment
The project is live and hosted via Netlify.

Continuous Deployment: The site is linked to the GitHub repository. Any changes pushed to the main branch are automatically built and deployed to the live server.

## Live Link: https://smart-city-weather-dashboard.netlify.app/
