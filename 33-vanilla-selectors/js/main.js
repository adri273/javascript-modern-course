import "../css/sakura.css";
import "../css/custom.css";

import { initCategoryFilter } from './category';
import { initCommon } from './common';
import { initForms, initUserForm } from './forms';

/**
 * Init functions
 */
window.addEventListener("DOMContentLoaded", () => {
  initCommon();

  if (document.getElementById("category")) {
    initCategoryFilter();
  }
  if (document.querySelector("form")) {
    initForms();
  }
  if (document.getElementById("user_form")) {
    initUserForm();
  }
});
