import { START_TEMPLATE } from "../constants.js";

export const start = () => {
  // Generate start HTML
  document.getElementById("app").innerHTML = START_TEMPLATE({});
};
