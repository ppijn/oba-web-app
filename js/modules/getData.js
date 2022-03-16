import {
  renderConcept,
  renderDesign,
  renderManagement,
  renderPlanning,
} from "./render.js";

const cors = "https://cors-anywhere.herokuapp.com/";
const endpoint = "https://zoeken.oba.nl/api/v1/search/?pagesize=5&q=";
const key = "72a5ad5293a99ad46a9235121a3e0df2";
const secret = "187b973dc49e054fa7635313a9c8540f";
const detail = "Default";

export function getDataConcept() {
  let query = "Innovatie";
  const url = `${cors}${endpoint}subject%3A${query}&authorization=${key}&detaillevel=${detail}&output=json`;

  const boeken = document.querySelector(".boeken1");

  const config = {
    Authorization: `Bearer ${secret}`,
  };

  onload = fetch;

  fetch(url, config)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderConcept(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getDataDesign() {
  let query = "Design";
  const url = `${cors}${endpoint}subject%3A${query}&authorization=${key}&detaillevel=${detail}&output=json`;

  const boeken = document.querySelector(".boeken2");

  const config = {
    Authorization: `Bearer ${secret}`,
  };

  onload = fetch;

  fetch(url, config)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderDesign(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getDataPlanning() {
  let query = "Planning";
  const url = `${cors}${endpoint}subject%3A${query}&authorization=${key}&detaillevel=${detail}&output=json`;

  const boeken = document.querySelector(".boeken3");

  const config = {
    Authorization: `Bearer ${secret}`,
  };

  onload = fetch;

  fetch(url, config)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderPlanning(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getDataManagement() {
  let query = "Management";
  const url = `${cors}${endpoint}subject%3A${query}&authorization=${key}&detaillevel=${detail}&output=json`;
  const boeken = document.querySelector(".boeken4");

  const config = {
    Authorization: `Bearer ${secret}`,
  };

  onload = fetch;

  fetch(url, config)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderManagement(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
