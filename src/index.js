// week 4
// current date and time
let dateTimeText = document.querySelector("#current-date-time");
dateTimeText.innerHTML = currentDateTime(new Date());
function currentDateTime(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

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
    "December"
  ];

  let currentDate = date.getDate();
  let dayWeek = days[date.getDay()];
  let month = months[date.getMonth()];
  let hour = date.getHours();
  let minutes = date.getMinutes();

  let sentence = `${dayWeek} ${currentDate} ${month}, @${hour}:${minutes}`;
  return sentence;
}

// Search for a city; week 4
//  week 5: search engine;temperature;
function showTemperature (response) {
   console.log (response);
  // console.log (Math.round(response.data.main.temp));
  let temperatureSelectedCity = Math.round(response.data.main.temp);
  let realFeelTemperatureNow = Math.round(response.data.main.feels_like);
  let humidityNow = Math.round(response.data.main.humidity);
  let windSpeedNow = Math.round(response.data.wind.speed);

  let temperatureNow = document.querySelector ("#current-temperature");
  temperatureNow.innerHTML = temperatureSelectedCity ;

 let realFeel = document.querySelector ("#real-feel");
 realFeel.innerHTML = `Real Feel ${realFeelTemperatureNow}°C`;

  let humidity = document.querySelector ("#humidity-now");
  humidity.innerHTML = `Humidity ${humidityNow}%`;

  let windSpeed = document.querySelector ("#wind-speed-now");
  windSpeed.innerHTML = `Wind Speed ${windSpeedNow}%`;

}

function updateCity(event){
   event.preventDefault();
    let currentCity = document.querySelector ("#current-city");
    let userInput = document.querySelector ("#user-input");
    if (userInput.value) {
      currentCity.innerHTML= `${userInput.value}`;
    } else {
      currentCity.innerHTML= null;
      alert ("Please enter a city");     
    }

let city = userInput.value;
let temperatureUnit = "metric";
let apiKey = "8d17eb2f64026eb70f16e29b12bf932a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${temperatureUnit}`;
axios.get(apiUrl).then (showTemperature);
}

let form = document.querySelector ("#search-form");
form = addEventListener ("submit", updateCity);








