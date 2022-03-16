import {
  renderConcept,
  renderDesign,
  renderManagement,
  renderPlanning,
} from "./render.js";

import { getBtnValue } from "./getButtonValue.js";
getBtnValue();

const cors = "https://cors-anywhere.herokuapp.com/";
const endpoint = "https://zoeken.oba.nl/api/v1/search/?pagesize=5&q=";
const key = "72a5ad5293a99ad46a9235121a3e0df2";
const secret = "187b973dc49e054fa7635313a9c8540f";
const detail = "Default";

const config = {
  Authorization: `Bearer ${secret}`,
};
export function getDataConcept(btnValue) {
  const url = `${cors}${endpoint}subject%3A${btnValue}&authorization=${key}&detaillevel=${detail}&output=json`;

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

export function getDataDesign(btnValue) {
  const url = `${cors}${endpoint}subject%3A${btnValue}&authorization=${key}&detaillevel=${detail}&output=json`;

  const config = {
    Authorization: `Bearer ${secret}`,
  };

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

export function getDataPlanning(btnValue) {
  const url = `${cors}${endpoint}subject%3A${btnValue}&authorization=${key}&detaillevel=${detail}&output=json`;

  const config = {
    Authorization: `Bearer ${secret}`,
  };

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

export function getDataManagement(btnValue) {
  const url = `${cors}${endpoint}subject%3A${btnValue}&authorization=${key}&detaillevel=${detail}&output=json`;

  const config = {
    Authorization: `Bearer ${secret}`,
  };

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
