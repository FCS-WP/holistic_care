/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/wp-content/themes/ai-zippy-child/src/blocks/contact-message/editor.scss"
/*!*************************************************************************************!*\
  !*** ./src/wp-content/themes/ai-zippy-child/src/blocks/contact-message/editor.scss ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/wp-content/themes/ai-zippy-child/src/blocks/contact-message/style.scss"
/*!************************************************************************************!*\
  !*** ./src/wp-content/themes/ai-zippy-child/src/blocks/contact-message/style.scss ***!
  \************************************************************************************/
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

/***/ "./src/wp-content/themes/ai-zippy-child/src/blocks/contact-message/edit.js"
/*!*********************************************************************************!*\
  !*** ./src/wp-content/themes/ai-zippy-child/src/blocks/contact-message/edit.js ***!
  \*********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");




function normalizeContacts(contacts) {
  return Array.isArray(contacts) ? contacts : [];
}
function renderIcon(type) {
  switch (type) {
    case "whatsapp":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
          d: "M6.7 19.2l.5-3.1A7.5 7.5 0 1 1 19.5 9a7.5 7.5 0 0 1-10.9 6.7l-1.9.5z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
          d: "M9.5 8.8c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .5.4l.6 1.4c.1.2.1.4 0 .6l-.4.6c-.1.2 0 .4.1.6.5.8 1.2 1.5 2.1 2 .2.1.4.2.6.1l.6-.4c.2-.1.4-.1.6 0l1.4.6c.4.2.4.3.4.5v.5c0 .2 0 .4-.4.6-.4.2-1 .4-1.6.3a6.4 6.4 0 0 1-5.4-5.4c-.1-.6 0-1.2.3-1.6z"
        })]
      });
    case "email":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
          d: "M4 7h16v10H4z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
          d: "M4 8l8 6 8-6"
        })]
      });
    case "address":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
          d: "M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("circle", {
          cx: "12",
          cy: "10",
          r: "2.4"
        })]
      });
    case "phone":
    default:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
          d: "M6.8 3.9c1.5-.9 3 .2 3.8 1.8l.8 1.6c.4.8 0 1.8-.8 2.3l-1 .7c-.3.2-.4.7-.2 1 .9 1.7 2.4 3.2 4.1 4.1.3.2.8.1 1-.2l.7-1c.5-.8 1.5-1.2 2.3-.8l1.6.8c1.6.8 2.7 2.3 1.8 3.8-.8 1.2-2.1 1.9-3.6 1.8C10 20.3 3.7 14 3 7.5c-.1-1.4.6-2.8 1.8-3.6z"
        })
      });
  }
}
function Edit({
  attributes,
  setAttributes
}) {
  const {
    sectionTitle,
    sectionDescription,
    contacts,
    formTitle,
    nameLabel,
    namePlaceholder,
    phoneLabel,
    phonePlaceholder,
    emailLabel,
    emailPlaceholder,
    subjectLabel,
    subjectPlaceholder,
    messageLabel,
    messagePlaceholder,
    buttonText,
    forceFullWidth
  } = attributes;
  const safeContacts = normalizeContacts(contacts);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: forceFullWidth ? "alignfull az-force-fullwidth" : ""
  });
  const updateContact = (index, updates) => {
    const next = [...safeContacts];
    next[index] = {
      ...next[index],
      ...updates
    };
    setAttributes({
      contacts: next
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Section", "ai-zippy-child"),
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Force Full Width", "ai-zippy-child"),
          checked: !!forceFullWidth,
          onChange: value => setAttributes({
            forceFullWidth: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stretch block across full viewport width.", "ai-zippy-child")
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Contact Items", "ai-zippy-child"),
        initialOpen: false,
        children: safeContacts.map((contact, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon", "ai-zippy-child")} ${index + 1}`,
            value: contact.icon || "phone",
            options: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Phone", "ai-zippy-child"),
              value: "phone"
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Whatsapp", "ai-zippy-child"),
              value: "whatsapp"
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Email", "ai-zippy-child"),
              value: "email"
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Address", "ai-zippy-child"),
              value: "address"
            }],
            onChange: value => updateContact(index, {
              icon: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Label", "ai-zippy-child")} ${index + 1}`,
            value: contact.label || "",
            onChange: value => updateContact(index, {
              label: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Value", "ai-zippy-child")} ${index + 1}`,
            value: contact.value || "",
            onChange: value => updateContact(index, {
              value: value
            })
          })]
        }, `contact-${index}`))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Form", "ai-zippy-child"),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Form Title", "ai-zippy-child"),
          value: formTitle,
          onChange: value => setAttributes({
            formTitle: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Name Label", "ai-zippy-child"),
          value: nameLabel,
          onChange: value => setAttributes({
            nameLabel: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Name Placeholder", "ai-zippy-child"),
          value: namePlaceholder,
          onChange: value => setAttributes({
            namePlaceholder: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Phone Label", "ai-zippy-child"),
          value: phoneLabel,
          onChange: value => setAttributes({
            phoneLabel: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Phone Placeholder", "ai-zippy-child"),
          value: phonePlaceholder,
          onChange: value => setAttributes({
            phonePlaceholder: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Email Label", "ai-zippy-child"),
          value: emailLabel,
          onChange: value => setAttributes({
            emailLabel: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Email Placeholder", "ai-zippy-child"),
          value: emailPlaceholder,
          onChange: value => setAttributes({
            emailPlaceholder: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Subject Label", "ai-zippy-child"),
          value: subjectLabel,
          onChange: value => setAttributes({
            subjectLabel: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Subject Value", "ai-zippy-child"),
          value: subjectPlaceholder,
          onChange: value => setAttributes({
            subjectPlaceholder: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Message Label", "ai-zippy-child"),
          value: messageLabel,
          onChange: value => setAttributes({
            messageLabel: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Message Placeholder", "ai-zippy-child"),
          value: messagePlaceholder,
          onChange: value => setAttributes({
            messagePlaceholder: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Text", "ai-zippy-child"),
          value: buttonText,
          onChange: value => setAttributes({
            buttonText: value
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "az-child-contact__inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "az-child-contact__aside",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "h2",
            className: "az-child-contact__title",
            value: sectionTitle,
            onChange: value => setAttributes({
              sectionTitle: value
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Contact Us", "ai-zippy-child")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "p",
            className: "az-child-contact__description",
            value: sectionDescription,
            onChange: value => setAttributes({
              sectionDescription: value
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add your contact introduction.", "ai-zippy-child")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "az-child-contact__items",
            children: safeContacts.map((contact, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: `az-child-contact__item az-child-contact__item--${contact.icon || "phone"}`,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "az-child-contact__item-icon",
                children: renderIcon(contact.icon || "phone")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "az-child-contact__item-copy",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "az-child-contact__item-label",
                  children: contact.label || ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "az-child-contact__item-value",
                  children: contact.value || ""
                })]
              })]
            }, `contact-card-${index}`))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "az-child-contact__form-card",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "h3",
            className: "az-child-contact__form-title",
            value: formTitle,
            onChange: value => setAttributes({
              formTitle: value
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Leave A Message", "ai-zippy-child")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "az-child-contact__form",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "az-child-contact__field-grid",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "az-child-contact__field",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "az-child-contact__field-label",
                  children: nameLabel
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "az-child-contact__field-control",
                  children: namePlaceholder
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "az-child-contact__field",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "az-child-contact__field-label",
                  children: phoneLabel
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "az-child-contact__field-control",
                  children: phonePlaceholder
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "az-child-contact__field az-child-contact__field--full",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "az-child-contact__field-label",
                  children: emailLabel
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "az-child-contact__field-control",
                  children: emailPlaceholder
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "az-child-contact__field az-child-contact__field--full",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "az-child-contact__field-label",
                  children: subjectLabel
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "az-child-contact__field-control az-child-contact__field-control--select",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    children: subjectPlaceholder
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    className: "az-child-contact__field-arrow",
                    children: "\u2304"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "az-child-contact__field az-child-contact__field--full",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "az-child-contact__field-label",
                  children: messageLabel
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "az-child-contact__field-control az-child-contact__field-control--textarea",
                  children: messagePlaceholder
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "az-child-contact__submit",
              children: buttonText
            })]
          })]
        })]
      })
    })]
  });
}

/***/ },

/***/ "./src/wp-content/themes/ai-zippy-child/src/blocks/contact-message/index.js"
/*!**********************************************************************************!*\
  !*** ./src/wp-content/themes/ai-zippy-child/src/blocks/contact-message/index.js ***!
  \**********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.js */ "./src/wp-content/themes/ai-zippy-child/src/blocks/contact-message/edit.js");
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save.js */ "./src/wp-content/themes/ai-zippy-child/src/blocks/contact-message/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/wp-content/themes/ai-zippy-child/src/blocks/contact-message/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/wp-content/themes/ai-zippy-child/src/blocks/contact-message/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/wp-content/themes/ai-zippy-child/src/blocks/contact-message/editor.scss");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save_js__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ },

/***/ "./src/wp-content/themes/ai-zippy-child/src/blocks/contact-message/save.js"
/*!*********************************************************************************!*\
  !*** ./src/wp-content/themes/ai-zippy-child/src/blocks/contact-message/save.js ***!
  \*********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
function save() {
  return null;
}

/***/ },

/***/ "./src/wp-content/themes/ai-zippy-child/src/blocks/contact-message/block.json"
/*!************************************************************************************!*\
  !*** ./src/wp-content/themes/ai-zippy-child/src/blocks/contact-message/block.json ***!
  \************************************************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"ai-zippy-child/contact-message","version":"1.0.0","title":"Contact Message Section","category":"ai-zippy","icon":"email-alt","description":"Two-column contact section with info cards and a message form preview.","keywords":["contact","message","form","clinic"],"supports":{"html":false,"align":["wide","full"],"spacing":{"margin":true,"padding":true}},"attributes":{"sectionTitle":{"type":"string","default":"Contact Us"},"sectionDescription":{"type":"string","default":"We\'re here to help you on your journey to holistic wellness. Reach out to us through any of the channels below."},"contacts":{"type":"array","default":[{"icon":"phone","label":"Main Line","value":"6513 4757"},{"icon":"whatsapp","label":"Whatsapp","value":"8893 4529"},{"icon":"email","label":"Email","value":"clinic@holisticcare.sg"},{"icon":"address","label":"Address","value":"Block 455, Sengkang West Avenue"}]},"formTitle":{"type":"string","default":"Leave A Message"},"nameLabel":{"type":"string","default":"Your Name"},"namePlaceholder":{"type":"string","default":"John Doe"},"phoneLabel":{"type":"string","default":"Your Phone"},"phonePlaceholder":{"type":"string","default":"+65 0000 0000"},"emailLabel":{"type":"string","default":"Your Email"},"emailPlaceholder":{"type":"string","default":"john@example.com"},"subjectLabel":{"type":"string","default":"Subject"},"subjectPlaceholder":{"type":"string","default":"General Enquiry"},"messageLabel":{"type":"string","default":"Message"},"messagePlaceholder":{"type":"string","default":"How can we help you today?"},"buttonText":{"type":"string","default":"Send Message"},"forceFullWidth":{"type":"boolean","default":true}},"textdomain":"ai-zippy-child","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

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
/******/ 			"contact-message/index": 0,
/******/ 			"contact-message/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["contact-message/style-index"], () => (__webpack_require__("./src/wp-content/themes/ai-zippy-child/src/blocks/contact-message/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map