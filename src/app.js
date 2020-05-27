function formatDate(date) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay()];
  let dayDate = now.getDate();
  let year = now.getFullYear();
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return `${day} ${month} ${dayDate}, ${year} ${hour}:${minute}`;
}
let now = new Date();
let currentDate = document.querySelector("#date-time");
currentDate.innerHTML = formatDate(now);

function displayCurrentWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind-speed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#real-feel").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].description;

  celsiusTemp = response.data.main.temp;
}

function searchCity(city) {
  let apiKey = "47aecf87524427e10968c44895784738";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayCurrentWeather);
}

function findCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  searchCity(city);
}

function showFahrenheit(event) {
  event.preventDefault();
  let fahrenheitValue = (celsiusTemp * 9) / 5 + 32;
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = Math.round(fahrenheitValue);
  let degreeSign = document.querySelector("#degree-sign");
  degreeSign.innerHTML = "°F";
}

let celsiusTemp = null;

let searchForm = document.querySelector("#search-location");
searchForm.addEventListener("submit", findCity);

let fahrenheitButton = document.querySelector("#fahrenheit");
fahrenheitButton.addEventListener("click", showFahrenheit);

searchCity("Hawaii");
