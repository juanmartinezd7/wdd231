
// Select HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// API URL 
const apiKey = '#';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Debugging
            displayResults(data); // Call function to update UI
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    // Extract temperature and weather description
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)}°F`;

    // Get weather icon and description
    const iconCode = data.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconURL);
    weatherIcon.setAttribute('alt', desc);

    // Update caption with description
    captionDesc.textContent = `${desc}`;
}

apiFetch();




