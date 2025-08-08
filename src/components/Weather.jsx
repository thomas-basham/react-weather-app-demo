import { useState, useEffect } from "react";

export default function Weather() {
  const [city, setCity] = useState("Seattle");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ message: "", status: false });

  function weatherDisplay() {
    if (weatherData) {
      return (
        <div id="weather-div">
          <p>
            Description <span>{weatherData.weather[0].description}</span>
          </p>
          <p>
            Icon <span>{weatherData.weather[0].icon}</span>
          </p>

          <p>
            Feels Like <span>{weatherData.main.feels_like}</span>
          </p>
        </div>
      );
    }
  }

  useEffect(() => {
    // code to run side effect
    async function getWeather() {
      setLoading(true);
      const key = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        setWeatherData(result);
      } catch (error) {
        console.error(error);
        setError({ message: error.message, status: true });
      } finally {
        setLoading(false);
      }
    }

    getWeather();
  }, [city]); // any dependencies to listen to, to run the effect again

  return (
    <>
      <section>
        <h2>Current weather for {city}</h2>

        {error.status && (
          <p>Whoops! Error fetching weather. {error.message} </p>
        )}

        {loading && <p>Loading...</p>}

        {weatherData && weatherDisplay()}

        {/* <form>
          <label htmlFor="city">Enter a City</label>
          <input type="text" name="city" id="city" />
          <button type="submit">Get Weather</button>
        </form> */}
      </section>
    </>
  );
}
