import { useState, useEffect } from "react";

export default function Weather() {
  const [city, setCity] = useState("Seattle");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // code to run side effect
    async function getWeather() {
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
      } finally {
        //
      }
    }

    getWeather();
  }, [city]); // any dependencies to listen to, to run the effect again

  return (
    <>
      <section>
        <h2>Current weather for {city}</h2>
        {weatherData && weatherData.weather[0].main}

        {/* <form>
          <label htmlFor="city">Enter a City</label>
          <input type="text" name="city" id="city" />
          <button type="submit">Get Weather</button>
        </form> */}
      </section>
    </>
  );
}
