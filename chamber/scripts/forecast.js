const apiKey = '#';
const lat = 33.21;
const lon = -97.13;

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

const weatherCardsContainer = document.querySelector('#weather-cards');

async function fetchForecast() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(await response.text());

        const data = await response.json();
        console.log(data);
        displayForecast(data);
    } catch (error) {
        console.error('Error fetching forecast:', error);
    }
}

function displayForecast(data) {
    weatherCardsContainer.innerHTML = '';

    // Group forecast entries by date
    const grouped = {};

    data.list.forEach(item => {
        const date = item.dt_txt.split(' ')[0]; // 'YYYY-MM-DD'
        if (!grouped[date]) grouped[date] = [];
        grouped[date].push(item);
    });

    const allDates = Object.keys(grouped);
    const todayDate = allDates[0];
    const next3Dates = allDates.slice(1, 4);

    // === 🟩 TODAY'S CARD ===
    const todayEntries = grouped[todayDate];

    const temps = todayEntries.map(item => item.main.temp);
    const tempNow = todayEntries[0].main.temp.toFixed(1);
    const highTemp = Math.max(...temps).toFixed(1);
    const lowTemp = Math.min(...temps).toFixed(1);

    const desc = todayEntries[0].weather[0].description;
    const icon = todayEntries[0].weather[0].icon;

    const todayCard = document.createElement('div');
    todayCard.classList.add('card');
    todayCard.innerHTML = `
        <h3>Today</h3>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}">
        <p>${tempNow}°F</p>
        <p>${desc}</p>
        <p><strong>High:</strong> ${highTemp}°F | <strong>Low:</strong> ${lowTemp}°F</p>
    `;
    weatherCardsContainer.appendChild(todayCard);

    // === 🟦 NEXT 3 DAYS COMBINED CARD ===
    const nextCard = document.createElement('div');
    nextCard.classList.add('card');
    let nextCardContent = `<h3>Next 3 Days</h3>`;

    next3Dates.forEach(date => {
        const entries = grouped[date];
        const avgTemp = (
            entries.reduce((sum, item) => sum + item.main.temp, 0) / entries.length
        ).toFixed(1);
        const desc = entries[0].weather[0].description;
        const icon = entries[0].weather[0].icon;
        const dayLabel = new Date(date).toLocaleDateString(undefined, {
            weekday: 'long', month: 'short', day: 'numeric'
        });

        nextCardContent += `
            <div style="margin-bottom: 1rem;">
                <h4>${dayLabel}</h4>
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}" style="width:60px;height:60px;">
                <p>${avgTemp}°F</p>
                <p>${desc}</p>
            </div>
        `;
    });

    nextCard.innerHTML = nextCardContent;
    weatherCardsContainer.appendChild(nextCard);
}



fetchForecast();

