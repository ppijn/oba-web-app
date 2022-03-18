import { backToHome } from "./modules/detail.js";
import {
  getDataConcept,
  getDataDesign,
  getDataManagement,
  getDataPlanning,
} from "./modules/getData.js";

getDataConcept("Startende onderneming");
getDataDesign("Logo's");
getDataPlanning("Financiering");
getDataManagement("Juridische Aspecten");
backToHome();
// toDetailPage();
