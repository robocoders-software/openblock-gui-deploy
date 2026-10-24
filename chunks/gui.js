var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["gui"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/home-screen/home-screen.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/components/home-screen/home-screen.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ── Home Screen ─────────────────────────────────────── */\n\n.home-screen_homeWrapper_33lTM {\n    width: 100%;\n    height: 100%;\n    background: -o-linear-gradient(315deg, #001E57 0%, #003A8C 60%, #004AAD 100%);\n    background: linear-gradient(135deg, #001E57 0%, #003A8C 60%, #004AAD 100%);\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    overflow-y: auto;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n/* ── Outer white card ── */\n\n.home-screen_card_1bpCy {\n    background: white;\n    border-radius: 20px;\n    padding: 40px 50px;\n    width: 880px;\n    max-width: 95vw;\n    margin: 24px 0;\n    -webkit-box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n}\n\n/* ── \"What would you like to do?\" banner ── */\n\n.home-screen_heading_bZiDv {\n    font-size: 28px;\n    font-weight: 700;\n    color: white;\n    text-align: center;\n    margin: 0 0 30px;\n    background: -o-linear-gradient(315deg, #004AAD, #003A8C);\n    background: linear-gradient(135deg, #004AAD, #003A8C);\n    border-radius: 14px;\n    padding: 22px 30px;\n}\n\n/* ── Top row: Block Coding + Robotics side by side ── */\n\n.home-screen_topRow_1tKhr {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    gap: 16px;\n    margin-bottom: 20px;\n}\n\n.home-screen_topRow_1tKhr .home-screen_section_1jdie {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    margin-bottom: 0;\n}\n\n/* ── Section ── */\n\n.home-screen_section_1jdie {\n    margin-bottom: 20px;\n}\n\n.home-screen_sectionTitle_gNp0X {\n    font-size: 14px;\n    font-weight: 600;\n    color: #555;\n    text-align: center;\n    margin: 0 0 12px;\n    letter-spacing: 0.3px;\n}\n\n/* ── Card grid ── */\n\n.home-screen_modeGrid_1hBKh {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 14px;\n}\n\n/* ── Individual mode card ── */\n\n.home-screen_modeCard_VnWnT {\n    background: #fff;\n    border: 1.5px solid #e8e8e8;\n    border-radius: 14px;\n    padding: 18px 16px 16px;\n    cursor: pointer;\n    position: relative;\n    -webkit-transition: border-color 0.18s, -webkit-box-shadow 0.18s, -webkit-transform 0.18s;\n    transition: border-color 0.18s, -webkit-box-shadow 0.18s, -webkit-transform 0.18s;\n    -o-transition: box-shadow 0.18s, border-color 0.18s, transform 0.18s;\n    transition: box-shadow 0.18s, border-color 0.18s, transform 0.18s;\n    transition: box-shadow 0.18s, border-color 0.18s, transform 0.18s, -webkit-box-shadow 0.18s, -webkit-transform 0.18s;\n    text-align: center;\n    overflow: hidden;\n    outline: none;\n}\n\n.home-screen_modeCard_VnWnT:hover {\n    -webkit-box-shadow: 0 6px 24px rgba(0, 74, 173, 0.25);\n            box-shadow: 0 6px 24px rgba(0, 74, 173, 0.25);\n    border-color: #004AAD;\n    -webkit-transform: translateY(-2px);\n        -ms-transform: translateY(-2px);\n            transform: translateY(-2px);\n}\n\n.home-screen_modeCard_VnWnT:focus {\n    -webkit-box-shadow: 0 0 0 3px rgba(0, 74, 173, 0.5);\n            box-shadow: 0 0 0 3px rgba(0, 74, 173, 0.5);\n    border-color: #004AAD;\n}\n\n/* ── Age badge ── */\n\n.home-screen_ageBadge_1kq7W {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    background: #E8F2FF;\n    color: #003A8C;\n    font-size: 10px;\n    font-weight: 700;\n    padding: 3px 8px;\n    border-radius: 20px;\n}\n\n/* ── Icon ── */\n\n.home-screen_modeIcon_1iDYV {\n    width: 64px;\n    height: 64px;\n    margin: 10px auto 12px;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.home-screen_modeIcon_1iDYV img,\n.home-screen_modeIcon_1iDYV svg {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n\n/* ── Card text ── */\n\n.home-screen_modeTitle_38C2E {\n    font-size: 15px;\n    font-weight: 700;\n    color: #222;\n    margin: 0 0 6px;\n}\n\n.home-screen_modeDescription_2-8jY {\n    font-size: 11.5px;\n    color: #777;\n    line-height: 1.5;\n    margin: 0;\n}\n\n/* ── Loading state ── */\n\n.home-screen_modeCardLoading_1uviY {\n    border-color: #004AAD;\n    -webkit-box-shadow: 0 6px 28px rgba(0, 74, 173, 0.4);\n            box-shadow: 0 6px 28px rgba(0, 74, 173, 0.4);\n    cursor: wait;\n    pointer-events: none;\n    -webkit-animation: home-screen_cardPulse_3E_wF 1s ease-in-out infinite;\n            animation: home-screen_cardPulse_3E_wF 1s ease-in-out infinite;\n}\n\n.home-screen_modeCardDisabled_2G5te {\n    opacity: 0.35;\n    cursor: not-allowed;\n    pointer-events: none;\n    -webkit-transform: none !important;\n        -ms-transform: none !important;\n            transform: none !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n}\n\n.home-screen_loadingOverlay_N5y-P {\n    position: absolute;\n    inset: 0;\n    background: rgba(255, 255, 255, 0.92);\n    border-radius: 13px;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    gap: 12px;\n}\n\n.home-screen_spinner_KRqoW {\n    width: 40px;\n    height: 40px;\n    border: 4px solid #dde8ff;\n    border-top-color: #004AAD;\n    border-radius: 50%;\n    -webkit-animation: home-screen_spin_2Oatt 0.65s linear infinite;\n            animation: home-screen_spin_2Oatt 0.65s linear infinite;\n}\n\n.home-screen_loadingLabel_2in50 {\n    font-size: 13px;\n    font-weight: 600;\n    color: #004AAD;\n    letter-spacing: 0.3px;\n}\n\n@-webkit-keyframes home-screen_spin_2Oatt {\n    to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@keyframes home-screen_spin_2Oatt {\n    to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@-webkit-keyframes home-screen_cardPulse_3E_wF {\n    0%, 100% { -webkit-box-shadow: 0 6px 28px rgba(0, 74, 173, 0.4); box-shadow: 0 6px 28px rgba(0, 74, 173, 0.4); }\n    50%       { -webkit-box-shadow: 0 6px 36px rgba(0, 74, 173, 0.65); box-shadow: 0 6px 36px rgba(0, 74, 173, 0.65); }\n}\n\n@keyframes home-screen_cardPulse_3E_wF {\n    0%, 100% { -webkit-box-shadow: 0 6px 28px rgba(0, 74, 173, 0.4); box-shadow: 0 6px 28px rgba(0, 74, 173, 0.4); }\n    50%       { -webkit-box-shadow: 0 6px 36px rgba(0, 74, 173, 0.65); box-shadow: 0 6px 36px rgba(0, 74, 173, 0.65); }\n}\n", ""]);

// exports
exports.locals = {
	"homeWrapper": "home-screen_homeWrapper_33lTM",
	"card": "home-screen_card_1bpCy",
	"heading": "home-screen_heading_bZiDv",
	"topRow": "home-screen_topRow_1tKhr",
	"section": "home-screen_section_1jdie",
	"sectionTitle": "home-screen_sectionTitle_gNp0X",
	"modeGrid": "home-screen_modeGrid_1hBKh",
	"modeCard": "home-screen_modeCard_VnWnT",
	"ageBadge": "home-screen_ageBadge_1kq7W",
	"modeIcon": "home-screen_modeIcon_1iDYV",
	"modeTitle": "home-screen_modeTitle_38C2E",
	"modeDescription": "home-screen_modeDescription_2-8jY",
	"modeCardLoading": "home-screen_modeCardLoading_1uviY",
	"cardPulse": "home-screen_cardPulse_3E_wF",
	"modeCardDisabled": "home-screen_modeCardDisabled_2G5te",
	"loadingOverlay": "home-screen_loadingOverlay_N5y-P",
	"spinner": "home-screen_spinner_KRqoW",
	"spin": "home-screen_spin_2Oatt",
	"loadingLabel": "home-screen_loadingLabel_2in50"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/index.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/index.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody,\n.index_app_3Qs6X {\n    /* probably unecessary, transitional until layout is refactored */\n    width: 100%; \n    height: 100%;\n    margin: 0;\n\n    /* Setting min height/width makes the UI scroll below those sizes */\n    min-width: 1024px;\n    min-height: 640px; /* Min height to fit sprite/backdrop button */\n}\n\n/* @todo: move globally? Safe / side FX, for blocks particularly? */\n\n* { -webkit-box-sizing: border-box; box-sizing: border-box; }\n", ""]);

// exports
exports.locals = {
	"app": "index_app_3Qs6X"
};

/***/ }),

/***/ "./src/components/home-screen/home-screen.css":
/*!****************************************************!*\
  !*** ./src/components/home-screen/home-screen.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./home-screen.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/home-screen/home-screen.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/home-screen/home-screen.jsx":
/*!****************************************************!*\
  !*** ./src/components/home-screen/home-screen.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_screen_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-screen.css */ "./src/components/home-screen/home-screen.css");
/* harmony import */ var _home_screen_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_screen_css__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* ─── Inline SVG icons ───────────────────────────── */

var BlocksIcon = function BlocksIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "4",
    y: "28",
    width: "24",
    height: "16",
    rx: "4",
    fill: "#FF8C42"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "4",
    y: "28",
    width: "10",
    height: "6",
    rx: "2",
    fill: "#FF6B00"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "36",
    y: "16",
    width: "24",
    height: "16",
    rx: "4",
    fill: "#004AAD"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "36",
    y: "16",
    width: "10",
    height: "6",
    rx: "2",
    fill: "#003A8C"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "20",
    y: "40",
    width: "24",
    height: "16",
    rx: "4",
    fill: "#003A8C"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "20",
    y: "40",
    width: "10",
    height: "6",
    rx: "2",
    fill: "#002D6E"
  }));
};

var AIIcon = function AIIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
    cx: "24",
    cy: "28",
    rx: "16",
    ry: "18",
    fill: "#004AAD",
    opacity: "0.85"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
    cx: "40",
    cy: "28",
    rx: "16",
    ry: "18",
    fill: "#003A8C",
    opacity: "0.85"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
    cx: "32",
    cy: "28",
    rx: "8",
    ry: "18",
    fill: "#4D8FD6"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "18",
    cy: "22",
    r: "3",
    fill: "white",
    opacity: "0.9"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "26",
    cy: "32",
    r: "3",
    fill: "white",
    opacity: "0.9"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "38",
    cy: "22",
    r: "3",
    fill: "white",
    opacity: "0.9"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "46",
    cy: "32",
    r: "3",
    fill: "white",
    opacity: "0.9"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "32",
    cy: "18",
    r: "3",
    fill: "white",
    opacity: "0.9"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "18",
    y1: "22",
    x2: "26",
    y2: "32",
    stroke: "white",
    strokeWidth: "1.5",
    opacity: "0.55"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "26",
    y1: "32",
    x2: "38",
    y2: "22",
    stroke: "white",
    strokeWidth: "1.5",
    opacity: "0.55"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "38",
    y1: "22",
    x2: "46",
    y2: "32",
    stroke: "white",
    strokeWidth: "1.5",
    opacity: "0.55"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "18",
    y1: "22",
    x2: "32",
    y2: "18",
    stroke: "white",
    strokeWidth: "1.5",
    opacity: "0.55"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "32",
    y1: "18",
    x2: "46",
    y2: "32",
    stroke: "white",
    strokeWidth: "1.5",
    opacity: "0.55"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "28",
    y1: "46",
    x2: "36",
    y2: "46",
    stroke: "#FF8C1A",
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "22",
    y1: "50",
    x2: "42",
    y2: "50",
    stroke: "#FF8C1A",
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "28",
    y1: "46",
    x2: "22",
    y2: "50",
    stroke: "#FF8C1A",
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "36",
    y1: "46",
    x2: "42",
    y2: "50",
    stroke: "#FF8C1A",
    strokeWidth: "2",
    strokeLinecap: "round"
  }));
};

var RoboticsIcon = function RoboticsIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "18",
    y: "10",
    width: "28",
    height: "22",
    rx: "5",
    fill: "#004AAD"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "32",
    y1: "10",
    x2: "32",
    y2: "4",
    stroke: "#003A8C",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "32",
    cy: "3",
    r: "2.5",
    fill: "#FF8C42"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "23",
    y: "17",
    width: "7",
    height: "5",
    rx: "2",
    fill: "white"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "34",
    y: "17",
    width: "7",
    height: "5",
    rx: "2",
    fill: "white"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "26.5",
    cy: "19.5",
    r: "2",
    fill: "#004AAD"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "37.5",
    cy: "19.5",
    r: "2",
    fill: "#004AAD"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "25",
    y: "26",
    width: "14",
    height: "3",
    rx: "1.5",
    fill: "#4D8FD6"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "20",
    y: "34",
    width: "24",
    height: "18",
    rx: "4",
    fill: "#003A8C"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "25",
    y: "38",
    width: "14",
    height: "9",
    rx: "2",
    fill: "#4D8FD6",
    opacity: "0.5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "29",
    cy: "42.5",
    r: "1.5",
    fill: "#FF8C42"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "35",
    cy: "42.5",
    r: "1.5",
    fill: "#0FBD8C"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "8",
    y: "35",
    width: "10",
    height: "5",
    rx: "2.5",
    fill: "#004AAD"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "46",
    y: "35",
    width: "10",
    height: "5",
    rx: "2.5",
    fill: "#004AAD"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "22",
    y: "53",
    width: "8",
    height: "7",
    rx: "2",
    fill: "#003A8C"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "34",
    y: "53",
    width: "8",
    height: "7",
    rx: "2",
    fill: "#003A8C"
  }));
};
/* ─── Card definitions ───────────────────────────── */


var TOP_SECTIONS = [{
  title: 'Block Coding',
  cards: [{
    id: 'blocks',
    title: 'Blocks',
    description: 'Code with playful puzzle-shaped blocks',
    age: 'Ages 7+',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BlocksIcon, null)
  }]
}, {
  title: 'Robotics',
  cards: [{
    id: 'robotics',
    title: 'Robotics',
    description: 'Program and control real robots & microcontrollers — Arduino, Raspberry Pi, ESP32 and more',
    age: 'Ages 10+',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RoboticsIcon, null)
  }]
}];
var BOTTOM_SECTIONS = [{
  title: 'Artificial Intelligence and Machine Learning',
  cards: [{
    id: 'ml',
    title: 'AI & ML',
    description: 'Train custom AI models to recognise images, text & sounds — then use them in your projects',
    age: 'Ages 10+',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AIIcon, null)
  }]
}];
/* ─── ModeCard ───────────────────────────────────── */

var ModeCard = function ModeCard(_ref) {
  var mode = _ref.mode,
      _onClick = _ref.onClick,
      isLoading = _ref.isLoading,
      isDisabled = _ref.isDisabled;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: [_home_screen_css__WEBPACK_IMPORTED_MODULE_2___default.a.modeCard, isLoading ? _home_screen_css__WEBPACK_IMPORTED_MODULE_2___default.a.modeCardLoading : '', isDisabled ? _home_screen_css__WEBPACK_IMPORTED_MODULE_2___default.a.modeCardDisabled : ''].join(' '),
    onClick: function onClick() {
      return !isDisabled && !isLoading && _onClick(mode.id);
    },
    role: "button",
    tabIndex: isDisabled ? -1 : 0,
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Enter' && !isDisabled && !isLoading && _onClick(mode.id);
    },
    "aria-disabled": isDisabled || isLoading
  }, mode.age && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _home_screen_css__WEBPACK_IMPORTED_MODULE_2___default.a.ageBadge
  }, mode.age), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _home_screen_css__WEBPACK_IMPORTED_MODULE_2___default.a.modeIcon
  }, mode.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _home_screen_css__WEBPACK_IMPORTED_MODULE_2___default.a.modeTitle
  }, mode.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _home_screen_css__WEBPACK_IMPORTED_MODULE_2___default.a.modeDescription
  }, mode.description), isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _home_screen_css__WEBPACK_IMPORTED_MODULE_2___default.a.loadingOverlay
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _home_screen_css__WEBPACK_IMPORTED_MODULE_2___default.a.spinner
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _home_screen_css__WEBPACK_IMPORTED_MODULE_2___default.a.loadingLabel
  }, "Loading\u2026")));
};

ModeCard.propTypes = {
  mode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    age: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
  }).isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
ModeCard.defaultProps = {
  isLoading: false,
  isDisabled: false
};
/* ─── HomeScreen ─────────────────────────────────── */

var HomeScreen = function HomeScreen(_ref2) {
  var onSelectMode = _ref2.onSelectMode;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      loadingId = _useState2[0],
      setLoadingId = _useState2[1];

  var handleSelect = function handleSelect(id) {
    if (loadingId) return;
    setLoadingId(id); // Two-frame delay: first frame paints the spinner overlay,
    // second frame lets the browser composite it before the heavy
    // navigation/initialization work starts on the main thread.
    // setTimeout fallback ensures navigation happens even if RAF is
    // throttled (e.g. window briefly backgrounded during the click).

    var navigated = false;

    var navigate = function navigate() {
      if (!navigated) {
        navigated = true;
        onSelectMode(id);
      }
    };

    requestAnimationFrame(function () {
      return requestAnimationFrame(navigate);
    });
    setTimeout(navigate, 300);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _home_screen_css__WEBPACK_IMPORTED_MODULE_2___default.a.homeWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _home_screen_css__WEBPACK_IMPORTED_MODULE_2___default.a.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: _home_screen_css__WEBPACK_IMPORTED_MODULE_2___default.a.heading
  }, "What would you like to do?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _home_screen_css__WEBPACK_IMPORTED_MODULE_2___default.a.topRow
  }, TOP_SECTIONS.map(function (_ref3) {
    var title = _ref3.title,
        cards = _ref3.cards;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: title,
      className: _home_screen_css__WEBPACK_IMPORTED_MODULE_2___default.a.section
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: _home_screen_css__WEBPACK_IMPORTED_MODULE_2___default.a.sectionTitle
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _home_screen_css__WEBPACK_IMPORTED_MODULE_2___default.a.modeGrid
    }, cards.map(function (m) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModeCard, {
        key: m.id,
        mode: m,
        onClick: handleSelect,
        isLoading: loadingId === m.id,
        isDisabled: loadingId !== null && loadingId !== m.id
      });
    })));
  })), BOTTOM_SECTIONS.map(function (_ref4) {
    var title = _ref4.title,
        cards = _ref4.cards;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: title,
      className: _home_screen_css__WEBPACK_IMPORTED_MODULE_2___default.a.section
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: _home_screen_css__WEBPACK_IMPORTED_MODULE_2___default.a.sectionTitle
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _home_screen_css__WEBPACK_IMPORTED_MODULE_2___default.a.modeGrid
    }, cards.map(function (m) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModeCard, {
        key: m.id,
        mode: m,
        onClick: handleSelect,
        isLoading: loadingId === m.id,
        isDisabled: loadingId !== null && loadingId !== m.id
      });
    })));
  })));
};

HomeScreen.propTypes = {
  onSelectMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (HomeScreen);

/***/ }),

/***/ "./src/playground/index.css":
/*!**********************************!*\
  !*** ./src/playground/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/index.jsx":
/*!**********************************!*\
  !*** ./src/playground/index.jsx ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! es6-object-assign/auto */ "./node_modules/es6-object-assign/auto.js");
/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/fn/array/includes */ "./node_modules/core-js/fn/array/includes.js");
/* harmony import */ var core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/fn/promise/finally */ "./node_modules/core-js/fn/promise/finally.js");
/* harmony import */ var core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! intl */ "./node_modules/intl/index.js");
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_analytics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/analytics */ "./src/lib/analytics.js");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/browser-modal/browser-modal.jsx */ "./src/components/browser-modal/browser-modal.jsx");
/* harmony import */ var _lib_supported_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/supported-browser */ "./src/lib/supported-browser.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.css */ "./src/playground/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_11__);
// Polyfills



 // For Safari 9

 // Required by @babel/plugin-transform-async-to-generator








Object(_lib_analytics__WEBPACK_IMPORTED_MODULE_7__["initialAnalytics"])(); // Register "base" page view

_lib_analytics__WEBPACK_IMPORTED_MODULE_7__["default"].send({
  hitType: 'pageview',
  page: '/community/web'
});
var appTarget = document.createElement('div');
appTarget.className = _index_css__WEBPACK_IMPORTED_MODULE_11___default.a.app;
document.body.appendChild(appTarget);

if (Object(_lib_supported_browser__WEBPACK_IMPORTED_MODULE_10__["default"])()) {
  // require needed here to avoid importing unsupported browser-crashing code
  // at the top level
  __webpack_require__(/*! ./render-gui.jsx */ "./src/playground/render-gui.jsx").default(appTarget);
} else {
  _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_9__["default"].setAppElement(appTarget);
  var WrappedBrowserModalComponent = Object(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__["default"])(_components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], true
  /* localesOnly */
  );

  var handleBack = function handleBack() {}; // eslint-disable-next-line react/jsx-no-bind


  react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(WrappedBrowserModalComponent, {
    onBack: handleBack
  }), appTarget);
}

/***/ }),

/***/ "./src/playground/render-gui.jsx":
/*!***************************************!*\
  !*** ./src/playground/render-gui.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/gui.jsx */ "./src/containers/gui.jsx");
/* harmony import */ var _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/hash-parser-hoc.jsx */ "./src/lib/hash-parser-hoc.jsx");
/* harmony import */ var _lib_log_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/log.js */ "./src/lib/log.js");
/* harmony import */ var _lib_message_box_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/message-box.js */ "./src/lib/message-box.js");
/* harmony import */ var _lib_app_dialog_service_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/app-dialog-service.js */ "./src/lib/app-dialog-service.js");
/* harmony import */ var _components_home_screen_home_screen_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/home-screen/home-screen.jsx */ "./src/components/home-screen/home-screen.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













/* Mirrors desktop's app.jsx mode switcher: a Home screen that picks Blocks / Robotics /
   AI & ML. The editor is NOT mounted until the user first picks a mode that needs it —
   while hidden via display:none its container is 0×0, which stalls the stage/VM/Blockly
   sizing logic forever (desktop hit this same issue; see its app.jsx comment). Once
   mounted it's kept alive and only hidden (not unmounted) on later trips back home, so
   Blockly/VM state survives.

   Robotics and ML already have a window-event path into the gui package (menu-bar.jsx),
   but on FIRST mount the editor's own HOC chain (font/locale loading, VM init, default
   project load) is asynchronous, so menu-bar's listener isn't registered yet on the very
   next tick — dispatching immediately after setGuiMounted(true) loses the event. The
   container's onProjectLoaded callback fires once the default project has genuinely
   finished loading (Redux-driven, not a guessed delay), which is also exactly when
   menu-bar has mounted — so the pending event is held until then. On later visits the
   editor is already mounted and ready, so it dispatches immediately. */

var PlaygroundApp = function PlaygroundApp(_ref) {
  var guiElement = _ref.guiElement;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('home'),
      _useState2 = _slicedToArray(_useState, 2),
      mode = _useState2[0],
      setMode = _useState2[1]; // 'home' | 'editor'


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      guiMounted = _useState4[0],
      setGuiMounted = _useState4[1];

  var guiReadyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var pendingEventRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var dispatchPendingEvent = function dispatchPendingEvent() {
    if (!pendingEventRef.current) return;
    var eventName = pendingEventRef.current;
    pendingEventRef.current = null;
    window.dispatchEvent(new CustomEvent(eventName));
  }; // Fires once, the first time the default project finishes loading. Deferred to the
  // next tick: project-fetcher-hoc.jsx ALSO reacts to this same "project loaded"
  // transition by force-activating the Blocks tab (its normal, intended behavior for
  // opening a project) in the same React commit, one componentDidUpdate after this one
  // — dispatching synchronously here would just get overwritten by that reset a moment
  // later. Firing after a setTimeout(0) lets that reset finish first, so ours applies last.


  var handleProjectLoaded = function handleProjectLoaded() {
    if (guiReadyRef.current) return;
    guiReadyRef.current = true;
    setTimeout(dispatchPendingEvent, 0);
  }; // On later visits the editor is already mounted/ready (onProjectLoaded won't fire
  // again for an already-loaded project), so dispatch immediately here instead. Also
  // re-dispatches a resize so Blockly/flyout re-measure after display:none → block
  // (same fix desktop's app.jsx uses).


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!guiMounted || mode !== 'editor') return;
    if (guiReadyRef.current) dispatchPendingEvent();
    var raf1 = requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        return window.dispatchEvent(new Event('resize'));
      });
    });
    return function () {
      return cancelAnimationFrame(raf1);
    };
  }, [guiMounted, mode]);

  var handleSelectMode = function handleSelectMode(modeId) {
    if (modeId === 'robotics') {
      pendingEventRef.current = 'robocoders:open-robotics';
    } else if (modeId === 'ml') {
      pendingEventRef.current = 'robocoders:open-ml';
    }

    setGuiMounted(true);
    setMode('editor');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, mode === 'home' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_screen_home_screen_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onSelectMode: handleSelectMode
  }), guiMounted && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: mode === 'editor' ? 'block' : 'none',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(guiElement, {
    onGoHome: function onGoHome() {
      return setMode('home');
    },
    onProjectLoaded: handleProjectLoaded
  })));
};

PlaygroundApp.propTypes = {
  guiElement: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};

var onClickCheckUpdate = function onClickCheckUpdate() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_8__["default"])('User click check update');
};

var onClickUpdate = function onClickUpdate() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_8__["default"])('User click update');
};

var onAbortUpdate = function onAbortUpdate() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_8__["default"])('User click abort update');
};

var onClickClearCache = function onClickClearCache() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_8__["default"])('User click clear cahce');
};

var onClickInstallDriver = function onClickInstallDriver() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_8__["default"])('User click install driver');
};

var handleTelemetryModalCancel = function handleTelemetryModalCancel() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_8__["default"])('User canceled telemetry modal');
};

var handleTelemetryModalOptIn = function handleTelemetryModalOptIn() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_8__["default"])('User opted into telemetry');
};

var handleTelemetryModalOptOut = function handleTelemetryModalOptOut() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_8__["default"])('User opted out of telemetry');
};

var onClickAbout = [{
  title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    defaultMessage: "About",
    id: "gui.desktopMenuBar.about"
  }),
  onClick: function onClick() {
    return Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_8__["default"])('About');
  }
}, {
  title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    defaultMessage: "License",
    id: "gui.desktopMenuBar.license"
  }),
  onClick: function onClick() {
    return Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_8__["default"])('License');
  }
}, {
  title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    defaultMessage: "Privacy policy",
    id: "gui.menuBar.privacyPolicy"
  }),
  onClick: function onClick() {
    return Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_8__["default"])('Privacy Policy');
  }
}, {
  title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    defaultMessage: "Data settings",
    id: "gui.menuBar.dataSettings"
  }),
  onClick: function onClick() {
    return Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_8__["default"])('Data Settings');
  }
}];

var handleShowMessageBox = function handleShowMessageBox(type, message) {
  if (type === _lib_message_box_js__WEBPACK_IMPORTED_MODULE_9__["default"].confirm) {
    return Object(_lib_app_dialog_service_js__WEBPACK_IMPORTED_MODULE_10__["default"])({
      type: 'question',
      title: 'Confirm',
      message: message,
      buttons: ['OK', 'Cancel'],
      defaultId: 0
    }).then(function (idx) {
      return idx === 0;
    });
  }

  return Object(_lib_app_dialog_service_js__WEBPACK_IMPORTED_MODULE_10__["default"])({
    type: 'info',
    title: 'Notice',
    message: message,
    buttons: ['OK'],
    defaultId: 0
  });
};
/*
 * Render the GUI playground. This is a separate function because importing anything
 * that instantiates the VM causes unsupported browsers to crash
 * {object} appTarget - the DOM element to render to
 */


/* harmony default export */ __webpack_exports__["default"] = (function (appTarget) {
  _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].setAppElement(appTarget); // note that redux's 'compose' function is just being used as a general utility to make
  // the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
  // ability to compose reducers.

  var WrappedGui = Object(redux__WEBPACK_IMPORTED_MODULE_3__["compose"])(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__["default"])(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]); // TODO a hack for testing the backpack, allow backpack host to be set by url param

  var backpackHostMatches = window.location.href.match(/[?&]backpack_host=([^&]*)&?/);
  var backpackHost = backpackHostMatches ? backpackHostMatches[1] : null;
  var scratchDesktopMatches = window.location.href.match(/[?&]isScratchDesktop=([^&]+)/);
  var simulateScratchDesktop;

  if (scratchDesktopMatches) {
    try {
      // parse 'true' into `true`, 'false' into `false`, etc.
      simulateScratchDesktop = JSON.parse(scratchDesktopMatches[1]);
    } catch (_unused) {
      // it's not JSON so just use the string
      // note that a typo like "falsy" will be treated as true
      simulateScratchDesktop = scratchDesktopMatches[1];
    }
  }

  if (false) {} // important: this is checking whether `simulateScratchDesktop` is truthy, not just defined!


  var guiElement = simulateScratchDesktop ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedGui, {
    canEditTitle: true,
    isScratchDesktop: true,
    onClickAbout: onClickAbout,
    showTelemetryModal: true,
    canSave: false,
    onTelemetryModalCancel: handleTelemetryModalCancel,
    onTelemetryModalOptIn: handleTelemetryModalOptIn,
    onTelemetryModalOptOut: handleTelemetryModalOptOut,
    onAbortUpdate: onAbortUpdate,
    onClickCheckUpdate: onClickCheckUpdate,
    onClickUpdate: onClickUpdate,
    onClickClearCache: onClickClearCache,
    onClickInstallDriver: onClickInstallDriver,
    onShowMessageBox: handleShowMessageBox
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedGui, {
    canEditTitle: true,
    backpackVisible: true,
    showComingSoon: true,
    backpackHost: backpackHost,
    canSave: false,
    onShowMessageBox: handleShowMessageBox
  });
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PlaygroundApp, {
    guiElement: guiElement
  }), appTarget);
});

/***/ }),

/***/ 1:
/*!*******************************************!*\
  !*** ./locale-data/complete.js (ignored) ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[["./src/playground/index.jsx","lib.min"]]]);
//# sourceMappingURL=gui.js.map