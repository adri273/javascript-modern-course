
import { iterateNodes } from "./utils";
/*******************************************************************************************************************
   * Filter courses by category
   ******************************************************************************************************************/
export function initCategoryFilter() {
    var filter = document.getElementById("category");
    if(!filter) return;

    filter.addEventListener("change", function () {
      var category = this.value;

      var elementsToFilter = document.querySelectorAll(".js-filtered-item");

      iterateNodes(elementsToFilter, function (element) {
        if (category && category !== element.getAttribute("data-category")) {
          element.classList.add("hidden");
        } else {
          element.classList.remove("hidden");
        }
      });
    });
  }