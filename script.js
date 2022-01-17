async function getWeather() {
  const searchString = document.querySelector("#locationText").value;
  const responce = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      searchString +
      "&APPID=141af2a03cf6847d668b2582912d726c",
    //Yes, I know this API key is public and that is bad practice,
    // this is for testing purposes only
    { mode: "cors" }
  );
  const weatherData = await responce.json();

  const Temperature = weatherData.main.temp / 10;
  console.log(Temperature);
  document.querySelector("#currentTemp").innerHTML =
    "Current Temperature is " + Temperature + " F";
  console.log(weatherData);
}
