import "./style.css";

const cityName = document.getElementById("cityName");
const weatherType = document.getElementById("weatherType");
const temperature = document.getElementById("temp");
const tempFeels = document.getElementById("tempFeels");
const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");

// Function to search Weather API using location, returns data in Fahrenheit
async function weatherSearchFahrenheit() {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        document.querySelector("#weatherSearchInput").value +
        "&units=imperial&appid=e1e165ab654f897773dcd2276f118a81",
      { mode: "cors" }
    );
    const returnedWeather = await response.json();

    cityName.innerHTML = returnedWeather.name.toUpperCase();
    weatherType.innerHTML =
      returnedWeather.weather[0].description.toUpperCase();
    temperature.innerHTML = returnedWeather.main.temp + " &deg;F";
    tempFeels.innerHTML = returnedWeather.main.feels_like + " &deg;F";
    windSpeed.innerHTML = returnedWeather.wind.speed + " mph";
    humidity.innerHTML = returnedWeather.main.humidity + "%";
    pressure.innerHTML = returnedWeather.main.pressure;

    document.querySelector("#weatherSearchInput").value = null;
  } catch (error) {
    alert("Sorry, could not find that city.");
  }
}

// Function to search Weather API using location, returns data in Celsius
async function weatherSearchCelsius() {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        document.querySelector("#weatherSearchInput").value +
        "&units=metric&appid=e1e165ab654f897773dcd2276f118a81",
      { mode: "cors" }
    );
    const returnedWeather = await response.json();

    cityName.innerHTML = returnedWeather.name.toUpperCase();
    weatherType.innerHTML =
      returnedWeather.weather[0].description.toUpperCase();
    temperature.innerHTML = returnedWeather.main.temp + " &deg;C";
    tempFeels.innerHTML = returnedWeather.main.feels_like + " &deg;C";
    windSpeed.innerHTML = returnedWeather.wind.speed + " mps";
    humidity.innerHTML = returnedWeather.main.humidity + "%";
    pressure.innerHTML = returnedWeather.main.pressure;

    document.querySelector("#weatherSearchInput").value = null;
  } catch (error) {
    alert("Sorry, could not find that city.");
  }
}

const fahrenheitButton = document.getElementById("fahrenheitButton");
fahrenheitButton.addEventListener("click", weatherSearchFahrenheit);

const celsiusButton = document.getElementById("celsiusButton");
celsiusButton.addEventListener("click", weatherSearchCelsius);

// Change the look of the page based on the data from Weather API
//      Use openWeather Icons, gifs could look less professional
