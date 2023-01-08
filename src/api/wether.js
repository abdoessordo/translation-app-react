import creds from "../config.json";

const { apiKey, baseURL } = creds.weather;

const city = "Doha";

const finalURL = `${baseURL}?q=${city}&appid=${apiKey}`;

export async function getWeather() {
  const response = await fetch(finalURL);
  const data = await response.json();
  return data;
}
