import data from "../config.json";

const { apiKey, baseURL } = data.weather;

const city = "Doha";

const units = "metric";

const finalURL = `${baseURL}?q=${city}&appid=${apiKey}&units=${units}`;

export async function getWeather() {
  const response = await fetch(finalURL);
  const data = await response.json();
  return data;
}
