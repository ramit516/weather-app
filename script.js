function getWeather() {
  const apiKey = '5f4e42539a72b9cabc95fcbabe659c3b'; // Free sample key (you should replace with your own)
  const city = document.getElementById('cityInput').value.trim();
  const resultDiv = document.getElementById('weatherResult');

  if (!city) {
    resultDiv.innerHTML = '⚠️ Please enter a city name.';
    return;
  }

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiURL)
    .then(response => {
      if (!response.ok) throw new Error('City not found');
      return response.json();
    })
    .then(data => {
      const { name, main, weather } = data;
      resultDiv.innerHTML = `
        <h3>Weather in ${name}</h3>
        <p>🌡️ Temperature: ${main.temp} °C</p>
        <p>🌧️ Condition: ${weather[0].description}</p>
        <p>💧 Humidity: ${main.humidity}%</p>
      `;
    })
    .catch(error => {
      resultDiv.innerHTML = `❌ ${error.message}`;
    });
}
