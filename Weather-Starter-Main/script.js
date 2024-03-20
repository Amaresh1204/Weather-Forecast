const apikey = "02aed78890e6ac3007c8f3fb977b464f";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

document.getElementById('search').addEventListener('click', () => {
    const cityInput = document.getElementById('input').value;
    if (cityInput) {
        checkWeather(cityInput);
    } else {
        alert('Please enter a city name.');
    }
});

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    let data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity;
    document.querySelector('.wind').innerHTML = data.wind.speed;

    // Set the weather condition based on the temperature
    let weatherImage = document.querySelector('.weather img');
    let weatherDescription = '';

    if (data.main.temp > 25) {
        weatherImage.src = "images/mist.png";
        weatherDescription = 'Sunny';
    } else if (data.main.temp > 20) {
        weatherImage.src = "images/clouds.png";
        weatherDescription = 'Cloudy';
    } else if (data.main.temp > 15) {
        weatherImage.src = "images/drizzle.png";
        weatherDescription = 'Drizzle';
    } else if (data.main.temp > 10) {
        weatherImage.src = "images/mist.png";
        weatherDescription = 'Misty';
    } else if (data.main.temp > 0) {
        weatherImage.src = "images/rain.png";
        weatherDescription = 'Rainy';
    } else {
        weatherImage.src = "images/snow.png";
        weatherDescription = 'Snowy';
    }

    // Update the weather description and temperature name
    document.querySelector('.weather h3').innerHTML = weatherDescription;
    document.querySelector('.weather h2').innerHTML = Math.round(data.main.temp) + "°C"; // Update temperature
    document.querySelector('.weather-description').innerHTML = weatherDescription; // Update weather description
}