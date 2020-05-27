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

function search(event) {
  event.preventDefault();
  let findCity = document.querySelector("#city");
  let cityInput = document.querySelector("#search-input");
  findCity.innerHTML = cityInput.value;
}
let searchForm = document.querySelector("#search-location");
searchForm.addEventListener("submit", search);
