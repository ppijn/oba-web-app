import {
  renderConcept,
  renderDesign,
  renderManagement,
  renderPlanning,
} from "./render.js";

import { getBtnValue } from "./getButtonValue.js";
import {
  addSkeletonState1,
  addSkeletonState2,
  addSkeletonState3,
  addSkeletonState4,
  removeSkeletonState1,
  removeSkeletonState2,
  removeSkeletonState3,
  removeSkeletonState4,
} from "./ui.js";
getBtnValue();

const cors = "https://cors-anywhere.herokuapp.com/";
const endpoint = "https://zoeken.oba.nl/api/v1/search/?pagesize=5&q=";
const key = "72a5ad5293a99ad46a9235121a3e0df2";
const secret = "187b973dc49e054fa7635313a9c8540f";
const detail = "Default";

const errorSection1 = document.querySelector(".error1");
const errorSection2 = document.querySelector(".error2");
const errorSection3 = document.querySelector(".error3");
const errorSection4 = document.querySelector(".error4");

const config = {
  Authorization: `Bearer ${secret}`,
};
export function getDataConcept(btnValue) {
  removeSkeletonState1();
  const url = `${cors}${endpoint}subject%3A${btnValue}&authorization=${key}&detaillevel=${detail}&output=json`;

  fetch(url, config)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      addSkeletonState1();
      renderConcept(data);
    })
    .catch((err) => {
      console.log(err);
      errorSection1.insertAdjacentHTML(
        "beforeend",
        `
      <h4>Failed to load sources, please try again...</h4>
      `
      );
    });
}

export function getDataDesign(btnValue) {
  removeSkeletonState2();
  const url = `${cors}${endpoint}subject%3A${btnValue}&authorization=${key}&detaillevel=${detail}&output=json`;

  const config = {
    Authorization: `Bearer ${secret}`,
  };

  fetch(url, config)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      addSkeletonState2();
      renderDesign(data);
    })
    .catch((err) => {
      console.log(err);
      errorSection2.insertAdjacentHTML(
        "beforeend",
        `
      <h4>Failed to load sources, please try again...</h4>
      `
      );
    });
}

export function getDataPlanning(btnValue) {
  removeSkeletonState3();
  const url = `${cors}${endpoint}subject%3A${btnValue}&authorization=${key}&detaillevel=${detail}&output=json`;

  const config = {
    Authorization: `Bearer ${secret}`,
  };

  fetch(url, config)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      addSkeletonState3();
      renderPlanning(data);
    })
    .catch((err) => {
      console.log(err);
      errorSection3.insertAdjacentHTML(
        "beforeend",
        `
      <h4>Failed to load sources, please try again...</h4>
      `
      );
    });
}

export function getDataManagement(btnValue) {
  removeSkeletonState4();
  const url = `${cors}${endpoint}subject%3A${btnValue}&authorization=${key}&detaillevel=${detail}&output=json`;

  const config = {
    Authorization: `Bearer ${secret}`,
  };

  fetch(url, config)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      addSkeletonState4();
      renderManagement(data);
    })
    .catch((err) => {
      console.log(err);
      errorSection4.insertAdjacentHTML(
        "beforeend",
        `
      <h4>Failed to load sources, please try again...</h4>
      `
      );
    });
}
