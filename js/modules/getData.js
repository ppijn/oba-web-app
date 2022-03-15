import { render } from "./render.js";

export function getData() {
  const boeken = document.querySelector(".boeken");
  const cors = "https://cors-anywhere.herokuapp.com/";
  const endpoint = "https://zoeken.oba.nl/api/v1/search/?pagesize=5&q=";
  let query = "startende onderneming";
  const key = "72a5ad5293a99ad46a9235121a3e0df2";
  const secret = "187b973dc49e054fa7635313a9c8540f";
  const detail = "Default";
  const url = `${cors}${endpoint}subject%3A${query}&authorization=${key}&detaillevel=${detail}&output=json`;

  const config = {
    Authorization: `Bearer ${secret}`,
  };

  onload = fetch;

  fetch(url, config)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      render(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
