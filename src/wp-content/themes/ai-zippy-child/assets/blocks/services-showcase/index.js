/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/wp-content/themes/ai-zippy-child/src/blocks/services-showcase/editor.scss"
/*!***************************************************************************************!*\
  !*** ./src/wp-content/themes/ai-zippy-child/src/blocks/services-showcase/editor.scss ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/wp-content/themes/ai-zippy-child/src/blocks/services-showcase/style.scss"
/*!**************************************************************************************!*\
  !*** ./src/wp-content/themes/ai-zippy-child/src/blocks/services-showcase/style.scss ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./src/wp-content/themes/ai-zippy-child/src/blocks/services-showcase/edit.js"
/*!***********************************************************************************!*\
  !*** ./src/wp-content/themes/ai-zippy-child/src/blocks/services-showcase/edit.js ***!
  \***********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");




function normalizeCards(cards) {
  return Array.isArray(cards) ? cards : [];
}
function createServiceItem() {
  return {
    title: "",
    description: ""
  };
}
function createCard() {
  return {
    title: "",
    caption: "",
    imageId: 0,
    imageUrl: "",
    items: [createServiceItem()]
  };
}
function Edit({
  attributes,
  setAttributes
}) {
  const {
    sectionLabel,
    cards,
    forceFullWidth
  } = attributes;
  const safeCards = normalizeCards(cards);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: forceFullWidth ? "alignfull az-force-fullwidth" : ""
  });
  const updateCards = nextCards => {
    setAttributes({
      cards: nextCards
    });
  };
  const addCard = () => {
    updateCards([...safeCards, createCard()]);
  };
  const removeCard = cardIndex => {
    updateCards(safeCards.filter((_, index) => index !== cardIndex));
  };
  const updateCard = (cardIndex, updates) => {
    const next = [...safeCards];
    next[cardIndex] = {
      ...next[cardIndex],
      ...updates
    };
    updateCards(next);
  };
  const updateItem = (cardIndex, itemIndex, updates) => {
    const next = [...safeCards];
    const card = next[cardIndex] || {};
    const items = Array.isArray(card.items) ? [...card.items] : [];
    items[itemIndex] = {
      ...(items[itemIndex] || {}),
      ...updates
    };
    next[cardIndex] = {
      ...card,
      items
    };
    updateCards(next);
  };
  const addItem = cardIndex => {
    const next = [...safeCards];
    const card = next[cardIndex] || createCard();
    const items = Array.isArray(card.items) ? [...card.items] : [];
    items.push(createServiceItem());
    next[cardIndex] = {
      ...card,
      items
    };
    updateCards(next);
  };
  const removeItem = (cardIndex, itemIndex) => {
    const next = [...safeCards];
    const card = next[cardIndex] || {};
    const items = Array.isArray(card.items) ? [...card.items] : [];
    next[cardIndex] = {
      ...card,
      items: items.filter((_, index) => index !== itemIndex)
    };
    updateCards(next);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Section", "ai-zippy-child"),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Section Label", "ai-zippy-child"),
          value: sectionLabel,
          onChange: value => setAttributes({
            sectionLabel: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Force Full Width", "ai-zippy-child"),
          checked: !!forceFullWidth,
          onChange: value => setAttributes({
            forceFullWidth: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stretch block across full viewport width.", "ai-zippy-child")
        })]
      }), safeCards.map((card, cardIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Card", "ai-zippy-child")} ${cardIndex + 1}`,
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title", "ai-zippy-child"),
          value: card.title || "",
          onChange: value => updateCard(cardIndex, {
            title: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Caption", "ai-zippy-child"),
          value: card.caption || "",
          onChange: value => updateCard(cardIndex, {
            caption: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            onSelect: media => updateCard(cardIndex, {
              imageId: media.id,
              imageUrl: media.url
            }),
            allowedTypes: ["image"],
            value: card.imageId || 0,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: {
                marginBottom: "16px"
              },
              children: [card.imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                src: card.imageUrl,
                alt: "",
                style: {
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "8px"
                }
              }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "secondary",
                onClick: open,
                children: card.imageUrl ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Replace Image", "ai-zippy-child") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select Image", "ai-zippy-child")
              })]
            })
          })
        }), Array.isArray(card.items) ? card.items.map((item, itemIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          style: {
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #e0e0e0",
            borderRadius: "6px"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Item", "ai-zippy-child")} ${itemIndex + 1} ${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title", "ai-zippy-child")}`,
            value: item.title || "",
            onChange: value => updateItem(cardIndex, itemIndex, {
              title: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
            label: `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Item", "ai-zippy-child")} ${itemIndex + 1} ${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Description", "ai-zippy-child")}`,
            value: item.description || "",
            onChange: value => updateItem(cardIndex, itemIndex, {
              description: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "tertiary",
            isDestructive: true,
            onClick: () => removeItem(cardIndex, itemIndex),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove Item", "ai-zippy-child")
          })]
        }, `item-panel-${cardIndex}-${itemIndex}`)) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          style: {
            display: "flex",
            gap: "8px",
            marginTop: "8px"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "secondary",
            onClick: () => addItem(cardIndex),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add Item", "ai-zippy-child")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "tertiary",
            isDestructive: true,
            onClick: () => removeCard(cardIndex),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove Card", "ai-zippy-child")
          })]
        })]
      }, `card-panel-${cardIndex}`)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Manage Cards", "ai-zippy-child"),
        initialOpen: safeCards.length === 0,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "secondary",
          onClick: addCard,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add Card", "ai-zippy-child")
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "az-child-services__inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "h2",
          className: "az-child-services__label",
          value: sectionLabel,
          onChange: value => setAttributes({
            sectionLabel: value
          }),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Our Services", "ai-zippy-child")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "az-child-services__grid",
          children: safeCards.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("No service cards yet.", "ai-zippy-child")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              variant: "secondary",
              onClick: addCard,
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add First Card", "ai-zippy-child")
            })]
          }) : safeCards.map((card, cardIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("article", {
            className: "az-child-services__card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "h3",
              className: "az-child-services__title",
              value: card.title || "",
              onChange: value => updateCard(cardIndex, {
                title: value
              }),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Service Title", "ai-zippy-child")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "az-child-services__media-wrap",
              children: card.imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                className: "az-child-services__media",
                src: card.imageUrl,
                alt: ""
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "az-child-services__media az-child-services__media--placeholder",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select image in sidebar", "ai-zippy-child")
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "p",
              className: "az-child-services__caption",
              value: card.caption || "",
              onChange: value => updateCard(cardIndex, {
                caption: value
              }),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Short service summary", "ai-zippy-child")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "az-child-services__detail-box",
              children: Array.isArray(card.items) ? card.items.map((item, itemIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "az-child-services__item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "h4",
                  className: "az-child-services__item-title",
                  value: item.title || "",
                  onChange: value => updateItem(cardIndex, itemIndex, {
                    title: value
                  }),
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Item title", "ai-zippy-child")
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "p",
                  className: "az-child-services__item-desc",
                  value: item.description || "",
                  onChange: value => updateItem(cardIndex, itemIndex, {
                    description: value
                  }),
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Item description", "ai-zippy-child")
                })]
              }, `item-${cardIndex}-${itemIndex}`)) : null
            })]
          }, `card-${cardIndex}`))
        })]
      })
    })]
  });
}

/***/ },

/***/ "./src/wp-content/themes/ai-zippy-child/src/blocks/services-showcase/index.js"
/*!************************************************************************************!*\
  !*** ./src/wp-content/themes/ai-zippy-child/src/blocks/services-showcase/index.js ***!
  \************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.js */ "./src/wp-content/themes/ai-zippy-child/src/blocks/services-showcase/edit.js");
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save.js */ "./src/wp-content/themes/ai-zippy-child/src/blocks/services-showcase/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/wp-content/themes/ai-zippy-child/src/blocks/services-showcase/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/wp-content/themes/ai-zippy-child/src/blocks/services-showcase/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/wp-content/themes/ai-zippy-child/src/blocks/services-showcase/editor.scss");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save_js__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ },

/***/ "./src/wp-content/themes/ai-zippy-child/src/blocks/services-showcase/save.js"
/*!***********************************************************************************!*\
  !*** ./src/wp-content/themes/ai-zippy-child/src/blocks/services-showcase/save.js ***!
  \***********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
function save() {
  return null;
}

/***/ },

/***/ "./src/wp-content/themes/ai-zippy-child/src/blocks/services-showcase/block.json"
/*!**************************************************************************************!*\
  !*** ./src/wp-content/themes/ai-zippy-child/src/blocks/services-showcase/block.json ***!
  \**************************************************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"ai-zippy-child/services-showcase","version":"1.0.0","title":"Services Showcase","category":"ai-zippy","icon":"screenoptions","description":"Grid of healthcare services with image cards and detailed offerings.","keywords":["services","clinic","healthcare","grid"],"supports":{"html":false,"align":["wide","full"],"spacing":{"margin":true,"padding":true}},"attributes":{"sectionLabel":{"type":"string","default":"Our Services"},"forceFullWidth":{"type":"boolean","default":true},"cards":{"type":"array","default":[{"title":"Family Care","caption":"Providing immediate care for your everyday health needs.","imageId":0,"imageUrl":"https://placehold.co/360x280","items":[{"title":"Acute Illness Management","description":"Treatment for flu, headaches, and common infections."},{"title":"Minor Procedures","description":"In-clinic wound stitching, dressing, and skin surgeries."},{"title":"Dermatological Care","description":"Expert management for acne, rashes, and hyperpigmentation."}]},{"title":"Chronic Care","caption":"Partnering with you for long-term health and vitality.","imageId":0,"imageUrl":"https://placehold.co/360x280","items":[{"title":"Chronic Disease Management","description":"Targeted care for Hypertension, Cholesterol, and Diabetes."},{"title":"Respiratory Health","description":"Dedicated Asthma control and management plans."},{"title":"Weight Management","description":"Evidence-based guidance to help you reach your health goals."}]},{"title":"Women\'s Medical Care","caption":"Private and compassionate care tailored to women\'s health.","imageId":0,"imageUrl":"https://placehold.co/360x280","items":[{"title":"Preventive Screening","description":"Regular PAP Smears and wellness checkups."},{"title":"Family Planning","description":"Professional contraceptive advice and options."},{"title":"Life Transitions","description":"Expert Menopause management and hormonal support."}]},{"title":"Child Medical Care","caption":"Supporting your child\'s growth from their very first steps.","imageId":0,"imageUrl":"https://placehold.co/360x280","items":[{"title":"Immunisation","description":"Full suite of childhood vaccinations and boosters."},{"title":"Growth Tracking","description":"Comprehensive developmental assessments."},{"title":"Paediatric Nutrition","description":"Expert advice to ensure healthy physical and mental growth."}]},{"title":"Vocational Care","caption":"Efficient medical clearances for work and school requirements.","imageId":0,"imageUrl":"https://placehold.co/360x280","items":[{"title":"Employment Screenings","description":"Work Permit and Domestic Helper checkups."},{"title":"Education Clearances","description":"OBS, School, and University medical certifications."},{"title":"Statutory Exams","description":"Prompt and professional medical examinations."}]},{"title":"Aesthetic Services","caption":"Where medical science meets skin confidence.","imageId":0,"imageUrl":"https://placehold.co/360x280","items":[{"title":"Anti-Aging","description":"Advanced treatments to restore youthful skin and elasticity."},{"title":"Clear Skin Solutions","description":"Specialized medical treatments for acne and scarring."},{"title":"Customised Care","description":"Medical-grade facials and targeted pigmentation therapy."}]}]}},"textdomain":"ai-zippy-child","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"services-showcase/index": 0,
/******/ 			"services-showcase/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkai_zippy"] = globalThis["webpackChunkai_zippy"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["services-showcase/style-index"], () => (__webpack_require__("./src/wp-content/themes/ai-zippy-child/src/blocks/services-showcase/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map