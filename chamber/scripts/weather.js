const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');
const forecastList = document.querySelector('#forecast-list');

const myKey = 'eea8226f5c4bc8beab79872446c38eb1';
const myLat = '49.7';
const myLon = '6.64';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        displayResults(data);

    } catch (error) {
        console.error("Weather API error:", error);
        currentTemp.textContent = "N/A";
        captionDesc.textContent = "Unable to load weather data.";
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;

    const icon = data.weather[0].icon;
    const description = data.weather[0].description;

    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.alt = description;
    captionDesc.textContent = description;
}

apiFetch();
