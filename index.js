const key = "4cf9e965c4dec79c5cfce91aa1835581";

let city = "";

const body = document.querySelector("body");

const searchText = document.querySelector("input[type='text']");
const searchButton = document.querySelector("input[type='button']");

const cityName = document.getElementById("city");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const weather = document.getElementById("weather");

const loadingScreen = document.querySelector(".visually-hidden");

searchButton.addEventListener("click", () => {
  cityName.innerText = "City: ";
  temp.innerText = "Temperature: ";
  humidity.innerText = "Humidity: ";
  weather.innerText = "Weather: ";
  city = searchText.value;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  getWeatherData(url);
});

const displayWeatherData = (data) => {
  cityName.textContent += data.name;

  temp.textContent += data.main.temp;

  humidity.textContent += data.main.humidity;

  weather.textContent += data.weather[0].main;
};

const getWeatherData = async (url) => {
  try {
    loadingScreen.classList.toggle("visually-hidden");
    const response = await fetch(url);
    const responseData = await response.json();
    loadingScreen.classList.toggle("visually-hidden");
    displayWeatherData(responseData);
  } catch (err) {
    console.log(err);
  }
};
