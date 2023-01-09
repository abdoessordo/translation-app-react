import { useEffect, useState } from "react";
import { getWeather } from "../api/wetherAPI";
import pin from "../assets/pin.svg";
import humidite from "../assets/humidite.svg";
import wind from "../assets/wind.svg";
import feelsLike from "../assets/feelsLike.svg";

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather().then((res) => {
      setWeather(res);
    });
  }, []);

  function capitalizeWords(str) {
    return str
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <div>
      {weather && (
        <div>
          {/* 
          <h1>{weather.name}</h1>
          <h2>{weather.main.temp} °C</h2>
          <img
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt="weather icon"
          /> 
          */}

          <div className="meteo">
            <div className="location">
              {/* icon */}
              <img className="pin" src={pin} alt="pin" />

              {/* City */}
              <h1>{weather.name}</h1>
            </div>

            <div className="meteo-body">
              {/* icon */}
              <div className="img-container">
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                  alt="weather icon"
                />
              </div>

              {/* Temperature */}
              <h1>{Math.round(weather.main.temp)}°C</h1>

              {/* Description */}
              <h2>{capitalizeWords(weather.weather[0].description)}</h2>
            </div>
            
            <hr />

            <div className="meteo-footer">
              {/* Feels like */}
              <div className="subsection">
                {/* icon */}
                <img className="feelsLike" src={feelsLike} alt="feelsLike" />
                {/* details */}
                <div className="details">
                  <h1>{Math.round(weather.main.feels_like)}°C</h1>
                  <h2>Feels like</h2>
                </div>
              </div>

              {/* Humidity */}
              <div className="subsection">
                {/* icon */}
                <img className="humidite" src={humidite} alt="humidite" />
                {/* details */}
                <div className="details">
                  <h1>{weather.main.humidity}%</h1>
                  <h2>Humidity</h2>
                </div>
              </div>

              {/* Wind */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
