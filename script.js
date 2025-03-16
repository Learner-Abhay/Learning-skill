document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const weatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const temperaTure = document.getElementById("temperature");
  const descriptionText = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");
  const API_KEY = "a67ddc76af987d65390bc95817b50c08"; // Make sure this is correct!

  weatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found or API error");
    }

    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    console.log(data);
    const { name, main, weather } = data;
    cityName.textContent = name;

    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
    temperaTure.textContent = `Temperature: ${main.temp}°C`;
    descriptionText.textContent = `Description: ${weather[0].description}`;
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
