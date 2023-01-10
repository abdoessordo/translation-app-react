import data from "../utils/data.json";

const { apiKey, baseURL } = data.weather;


const units = "metric";


export async function getWeather(city) {
  const finalURL = `${baseURL}?q=${city}&appid=${apiKey}&units=${units}`;
  const response = await fetch(finalURL);
  const data = await response.json();
  return data;
}
