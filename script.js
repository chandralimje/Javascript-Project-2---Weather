const form = document.getElementById("form");
const main = document.getElementById("main");
const get = document.getElementById("get");

function byLocation(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=433775cdf88ba4b3ff6600101ec5e82d`
  )
    .then((res) => res.json())
    .then((resData) => {
      console.log(resData);
      weatherPage(resData);
    });
}

function weatherPage(data) {
  const temp = Math.floor(data.main.temp - 273.15);

  const weather = document.createElement("div");

  weather.classList.add("weather");

  weather.innerHTML = `
  <h2> 
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
  </h2>`;

  // console.log(weather)

  main.innerHTML = "";
  main.appendChild(weather);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = get.value;
  console.log(city);
  if (city) {
    byLocation(city);
  }
});
