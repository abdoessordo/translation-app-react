import { useEffect, useState } from "react";
import { getWeather } from "../api/wether";

export function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather().then((res) => {
      setWeather(res);
    });
  }, []);

  return (
    <div>
      {weather && (
        <div>
          <h1>{weather.name}</h1>
          <h2>{weather.main.temp} °C</h2>
          <img
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt="weather icon"
          />
        </div>
      )}
    </div>
  );
}
