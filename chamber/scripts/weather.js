const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-desc');
const forecastList = document.querySelector('#forecast-list');

const myKey = 'eea8226f5c4bc8beab79872446c38eb1';
const myLat = '61.5995';
const myLon = '-149.1146';

const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&units=imperial&appid=${myKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&units=imperial&appid=${myKey}`;

async function getWeather() {
    try {
        const currentResponse = await fetch(currentUrl);
        if (!currentResponse.ok) throw new Error('Current weather fetch failed');
        const currentData = await currentResponse.json();
        displayCurrent(currentData);

        const forecastResponse = await fetch(forecastUrl);
        if (!forecastResponse.ok) throw new Error('Forecast fetch failed');
        const forecastData = await forecastResponse.json();
        displayForecast(forecastData);

    } catch (error) {
        console.error('Weather error:', error);
    }
}

function displayCurrent(data) {
    currentTemp.textContent = `${Math.round(data.main.temp)}°F`;
    weatherDesc.textContent = data.weather[0].description;

    const icon = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.alt = data.weather[0].description;
}

function displayForecast(data) {
    forecastList.innerHTML = '';

    const dailyForecasts = data.list.filter(item =>
        item.dt_txt.includes('12:00:00')
    ).slice(0, 5); // ← FIVE DAYS

    dailyForecasts.forEach(day => {
        const li = document.createElement('li');

        const date = new Date(day.dt_txt);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });

        li.innerHTML = `
            <strong>${dayName}</strong><br>
            ${Math.round(day.main.temp)}°F
        `;

        forecastList.appendChild(li);
    });
}

getWeather();
