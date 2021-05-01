export function initCommon() {
    /**
     * Show/hide an element based on a change in another field.
     */
    var trigger = document.querySelector(".js-trigger-container");
    if(!trigger) return;

    trigger.addEventListener("click", function () {
      document
        .getElementById(trigger.getAttribute("rel"))
        .classList.toggle("hidden");
    });
  }