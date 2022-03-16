import {
  getDataConcept,
  getDataDesign,
  getDataManagement,
  getDataPlanning,
} from "./getData.js";

export function getBtnValue() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((item) => {
    item.addEventListener("click", function () {
      const btnValue = item.value;
      console.log(btnValue);
      getDataConcept(btnValue);
      getDataDesign(btnValue);
      getDataManagement(btnValue);
      getDataPlanning(btnValue);
    });
  });
}
console.log(getBtnValue);
