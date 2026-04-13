/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************************************************************************!*\
  !*** ./src/wp-content/themes/ai-zippy-child/src/blocks/header-search-icon/view.js ***!
  \************************************************************************************/
__webpack_require__.r(__webpack_exports__);
document.addEventListener("click", event => {
  const openButton = event.target.closest("[data-az-header-search-open]");
  if (openButton) {
    const block = openButton.closest("[data-az-header-search]");
    const popup = block?.querySelector("[data-az-header-search-popup]");
    const input = block?.querySelector("[data-az-header-search-input]");
    if (!popup) {
      return;
    }
    popup.hidden = false;
    openButton.setAttribute("aria-expanded", "true");
    window.requestAnimationFrame(() => {
      popup.classList.add("is-open");
      input?.focus();
    });
    return;
  }
  const closeButton = event.target.closest("[data-az-header-search-close]");
  if (!closeButton) {
    return;
  }
  const block = closeButton.closest("[data-az-header-search]");
  const popup = block?.querySelector("[data-az-header-search-popup]");
  const openControl = block?.querySelector("[data-az-header-search-open]");
  if (!popup) {
    return;
  }
  popup.classList.remove("is-open");
  openControl?.setAttribute("aria-expanded", "false");
  window.setTimeout(() => {
    popup.hidden = true;
    openControl?.focus();
  }, 200);
});
document.addEventListener("keydown", event => {
  if (event.key !== "Escape") {
    return;
  }
  document.querySelectorAll("[data-az-header-search-popup].is-open").forEach(popup => {
    const block = popup.closest("[data-az-header-search]");
    const openControl = block?.querySelector("[data-az-header-search-open]");
    popup.classList.remove("is-open");
    openControl?.setAttribute("aria-expanded", "false");
    window.setTimeout(() => {
      popup.hidden = true;
      openControl?.focus();
    }, 200);
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map