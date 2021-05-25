//Feature 1//

let dateElement = document.querySelector("#date");

let currentTime = new Date();
let hours = currentTime.getHours();
if (hours < 10) { hours = `0${hours}`}
let minutes = currentTime.getMinutes();
if (minutes < 10) { minutes = `0${minutes}`};
let day = currentTime.getDay();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

dateElement.innerHTML = `${days[day]} ${hours}:${minutes}`;

//Feature 2//

function search (event) {
    event.preventDefault ();
    let cityElement = document.querySelector("#city");
    let cityInput = document.querySelector ("#city-input");
    cityElement.innerHTML = cityInput.value;
    cityElement.innerHTML = CityElement.toUpperCase();
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
//Bonus feature //