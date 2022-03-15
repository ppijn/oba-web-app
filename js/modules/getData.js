import { render } from "./render.js";

export function getData() {
  const boeken = document.querySelector(".boeken");
  const cors = "https://cors-anywhere.herokuapp.com/";
  const endpoint = "https://zoeken.oba.nl/api/v1/search/?q=";
  const query = "tolkien";
  const key = "f60b69054b02f50180d9c088e06270ea";
  const secret = "34dd0c6e69370e1b0d2b06fb8343c17f";
  const detail = "Minimum";
  const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

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
