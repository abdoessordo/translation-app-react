import data from "../config.json";

const { all, random } = data.matches;

export async function getAllMatches() {
  const response = await fetch(all);
  const data = await response.json();
  return data;
}

export async function getRandomMatches() {
  const response = await fetch(random);
  const data = await response.json();
  return data;
}
