const weatherRegion = document.querySelector(".weather__region");
const weatherImage = document.querySelector(".weather__image");
const weatherDegree = document.querySelector(".weather__degree");
const weatherDesc = document.querySelector(".weather__desc");
const searchForm = document.querySelector(".search__form");
const searchInput = document.querySelector(".search__input");

const forecastday = document.querySelector(".forecastday");

searchForm.addEventListener("submit", e => {
  e.preventDefault()
  fetchWeatherData(searchInput.value);
})

// https://api.weatherapi.com/v1/forecast.json?key=644f6ce0ca9e401ebb891832211707&q=Tashkent&days=7&aqi=yes&alerts=yes

document.addEventListener("DOMContentLoaded", () => {
  fetchWeatherData();
});

async function fetchWeatherData(region = "mecca") {
    let response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=644f6ce0ca9e401ebb891832211707&q=${region}&days=7&aqi=yes&alerts=yes`
    );
    await  response
      .json()
      .then(res =>{
        if (res.error) {
          throw new Error("Bunday shahar mavjud emas")
        }
         renderWeather(res);
      })
      .catch(err => {
        alert(err)
      })

    }


function renderWeather(data) {
    console.log(data);
    weatherRegion.innerHTML = `${data.location.name}. ${data.location.country}`;
    weatherDegree.textContent = `${data.current.temp_c}°`;
    weatherImage.src = data.current.condition.icon
    weatherDesc.textContent = data.current.condition.text;

    let forecastdayItems = ""
    let date = new Date()
    let hour = date.getHours()
    console.log(hour);

    
    data.forecast.forecastday[0].hour.slice(hour+1).forEach((el) => {
      forecastdayItems += `
      <div class="forecastday__item">
        <p>${el.time.split(" ")[1]}</p>
        <img src=${el.condition.icon} alt="">
        <p>${el.temp_c}°</p>
        </div>
      `;
      forecastday.innerHTML = forecastdayItems;
    });
  }