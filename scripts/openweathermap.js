const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const myKey = 'eea8226f5c4bc8beab79872446c38eb1'
const myLat = '49.7';
const myLon= '6.64';

const url = `https://api.openweathermap.org/data/3.0/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units={imperial}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${icon}.`

}

apiFetch();