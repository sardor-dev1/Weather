const weatherRegion = document.querySelector(".weather__region");
const weatherImage = document.querySelector(".weather__image");
const weatherDegree = document.querySelector(".weather__degree");
const weatherDesc = document.querySelector(".weather__desc");


const API_URL = "https://api.weatherapi.com/v1/forecast.json";
const KEY = "644f6ce0ca9e401ebb891832211707";

// https://api.weatherapi.com/v1/forecast.json?key=644f6ce0ca9e401ebb891832211707&q=Tashkent&days=7&aqi=yes&alerts=yes


async function fetchWeatherData(){
    let response = await fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=644f6ce0ca9e401ebb891832211707&q=Tashkent&days=7&aqi=yes&alerts=yes"
    );
    response 
    .json()
    .then((res) => console.log(res))
    .catch((err)=> console.log(err))
}

fetchWeatherData()