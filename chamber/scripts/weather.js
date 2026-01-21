const apiKey = "YOUR_API_KEY";
const lat = 61.5995;
const lon = -149.1126;

const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");

const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();

    // Current
    currentTemp.textContent = `Current: ${Math.round(data.list[0].main.temp)}°F`;
    weatherDesc.textContent = data.list[0].weather[0].description;

    // Forecast (24h intervals)
    day1.textContent = `Tomorrow: ${Math.round(data.list[8].main.temp)}°F`;
    day2.textContent = `Day 2: ${Math.round(data.list[16].main.temp)}°F`;
    day3.textContent = `Day 3: ${Math.round(data.list[24].main.temp)}°F`;
}

getWeather();