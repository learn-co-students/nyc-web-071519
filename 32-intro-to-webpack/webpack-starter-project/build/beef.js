/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_calculate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/calculate */ "./src/utils/calculate.js");



console.log(_utils_calculate__WEBPACK_IMPORTED_MODULE_0__["willItExport"])

const logStyle = `padding: 10px 20px;font-size: 1.5em;color: #fff;background: linear-gradient(-45deg, #ee7752, #e73c7e);background-size: 100% 100%;text-shadow: 2px 1px #333;`
console.log("before things break")
console.log(`%c 1 + 2 is ${Object(_utils_calculate__WEBPACK_IMPORTED_MODULE_0__["default"])("1 + 2")} `, logStyle)

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault()
  const num1 = e.target.num1.value
  const num2 = e.target.num2.value
  const operator = e.target.operator.value

  const result = Object(_utils_calculate__WEBPACK_IMPORTED_MODULE_0__["default"])(`${num1} ${operator} ${num2}`)
  document.querySelector("#sum").textContent = result
})

/***/ }),

/***/ "./src/utils/calculate.js":
/*!********************************!*\
  !*** ./src/utils/calculate.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./src/utils/math.js");


const evaluate = equation => {

  const values = equation.split(" ")

  const num1 = parseInt(values[0])
  const operator = values[1]
  const num2 = parseInt(values[2])

  switch (operator) {
    case "+":
      return Object(_math__WEBPACK_IMPORTED_MODULE_0__["add"])(num1, num2)
    case "-":
      return Object(_math__WEBPACK_IMPORTED_MODULE_0__["subtract"])(num1, num2)
    case "*":
      return multiply(num1, num2)
    case "/":
      return divide(num1, num2)
    default:
      return ""
  }
}

const willItExport = "no"

/* harmony default export */ __webpack_exports__["default"] = (evaluate);

/***/ }),

/***/ "./src/utils/math.js":
/*!***************************!*\
  !*** ./src/utils/math.js ***!
  \***************************/
/*! exports provided: add, subtract, hi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hi", function() { return hi; });
const add = (num1, num2) => num1 + num2

const subtract = (num1, num2) => num1 - num2

const multiply = (num1, num2) => num1 * num2

const divide = (num1, num2) => num1 / num2

const hi = "cool"



/***/ })

/******/ });