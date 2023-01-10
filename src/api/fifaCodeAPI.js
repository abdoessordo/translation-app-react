export function getFifaCode(country) {
    if (country === "England") return new Promise((resolve) => resolve("ENG"));
    if (country === "Scotland") return new Promise((resolve) => resolve("SCO"));
    if (country === "Wales") return new Promise((resolve) => resolve("WAL"));
    if (country === "Northern Ireland")
        return new Promise((resolve) => resolve("NIR"));
    if (country === "United States")
        return new Promise((resolve) => resolve("USA"));
    if (country === "United Kingdom")
        return new Promise((resolve) => resolve("GBR"));
    if (country === "Czech Republic")
        return new Promise((resolve) => resolve("CZE"));
    
    
  let fifaCode = "";
  const url = `https://restcountries.com/v3.1/name/${country}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      fifaCode = data[0].fifa;
      return fifaCode;
    })
    .catch((error) => {
      console.log(error);
      return;
    });
}
