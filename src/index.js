import "./style.css";

const cityName = document.getElementById("cityName");
const weatherType = document.getElementById("weatherType");
const temperature = document.getElementById("temp");
const tempFeels = document.getElementById("tempFeels");
const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");

// Function to search Weather API using location
async function weatherSearchFahrenheit(e) {
  // Take a submitted location
  e.preventDefault();
  console.log("New weather search!");
  const searchTerm = document.querySelector("#weatherSearchInput").value;
  console.log("This is the current value of search term: " + searchTerm);

  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        searchTerm +
        "&units=imperial&appid=e1e165ab654f897773dcd2276f118a81",
      { mode: "cors" }
    );
    const returnedWeather = await response.json();

    console.log(returnedWeather);
    // Consider rewording

    cityName.innerHTML = returnedWeather.name;
    weatherType.innerHTML = returnedWeather.weather[0].description + ".";
    temperature.innerHTML = returnedWeather.main.temp + " degrees Fahrenheit.";
    tempFeels.innerHTML =
      returnedWeather.main.feels_like + " degrees Fahrenheit.";
    windSpeed.innerHTML = returnedWeather.wind.speed + " mph.";
    humidity.innerHTML = returnedWeather.main.humidity + "%";
    pressure.innerHTML = returnedWeather.main.pressure;
  } catch (error) {
    console.log(error);
  }
}

async function weatherSearchCelsius(e) {
  // Take a submitted location
  e.preventDefault();
  console.log("New weather search!");
  const searchTerm = document.querySelector("#weatherSearchInput").value;
  console.log("This is the current value of search term: " + searchTerm);

  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        searchTerm +
        "&units=metric&appid=e1e165ab654f897773dcd2276f118a81",
      { mode: "cors" }
    );
    const returnedWeather = await response.json();
    console.log(returnedWeather);
    // Consider rewording

    cityName.innerHTML = returnedWeather.name;
    weatherType.innerHTML = returnedWeather.weather[0].description + ".";
    temperature.innerHTML = returnedWeather.main.temp + " degrees Celsius.";
    tempFeels.innerHTML = returnedWeather.main.feels_like + " degrees Celsius.";
    windSpeed.innerHTML = returnedWeather.wind.speed + " mph.";
    humidity.innerHTML = returnedWeather.main.humidity + "%";
    pressure.innerHTML = returnedWeather.main.pressure;
  } catch (error) {
    console.log(error);
  }
}

// Need a catch if the city entered does not exsist

const fahrenheitButton = document.getElementById("fahrenheitButton");
fahrenheitButton.addEventListener("click", weatherSearchFahrenheit);

const celciusButton = document.getElementById("celciusButton");
celciusButton.addEventListener("click", weatherSearchCelsius);

// Function to retrieve weather data for submitted location
function returnWeatherData() {
  // Return weather JSON data for location from weatherSearch()
}

// Function to process JSON data from the API
function weatherJSONDataProcess() {
  // Process JSON data from returnWeatherData()
  // Possibly JSON.stringify()?
}

// Function to return object with only needed data for app
function weatherDataObject() {
  // Return object with only the required JSON data for app
}

// Form that allows users to input their location, and fetch weather info
function formSubmitWeather() {
  // Simple Form, user can input location
  // Runs appropriate above functions with user location
}

// Toggle display data in Fahrenheit or Celsius
function toggleDisplayTemp() {
  // Toggle temperature between Fahrenheit or Celsius
}

// Optional loading component that displays while data is being retrieved
function loadingDisplay() {
  // displays loading on screen until info comes back from API
}

// Change the look of the page based on the data from Weather API
//      Use standard Weather Icons, gifs could look less professional

// Incorporate Async/Await into the code
