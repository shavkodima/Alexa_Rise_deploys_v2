/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio */ \"./src/js/portfolio.js\");\n/* harmony import */ var _mobileMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobileMenu */ \"./src/js/mobileMenu.js\");\n/* harmony import */ var _scrollHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrollHeader */ \"./src/js/scrollHeader.js\");\n/* harmony import */ var _switchTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./switchTheme */ \"./src/js/switchTheme.js\");\n/* harmony import */ var _switchTranslate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./switchTranslate */ \"./src/js/switchTranslate.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal */ \"./src/js/modal.js\");\n/* harmony import */ var _validForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validForm */ \"./src/js/validForm.js\");\n\n\n\n\n\n\n\n\n(0,_switchTheme__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_portfolio__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_mobileMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_scrollHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_validForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_switchTranslate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n//# sourceURL=webpack://alexa-rise/./src/js/index.js?");

/***/ }),

/***/ "./src/js/mobileMenu.js":
/*!******************************!*\
  !*** ./src/js/mobileMenu.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar mobileMenu = function mobileMenu() {\n  var nav = document.querySelector('.navigation');\n  var btnOpen = document.querySelector('.menu-mobile');\n  var btnClose = document.querySelector('.close-mobile');\n  btnOpen.addEventListener('click', function (e) {\n    nav.classList.add('activ');\n  });\n  btnClose.addEventListener('click', function (e) {\n    nav.classList.remove('activ');\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mobileMenu);\n\n//# sourceURL=webpack://alexa-rise/./src/js/mobileMenu.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar modals = function modals() {\n  var btnOpenModal = document.querySelector('.hero__btn');\n  var overflowCloseModal = null;\n\n  var closeModal = function closeModal(e) {\n    var target = e.target;\n\n    if (target.classList.contains('overflow') || target.classList.contains('modal-close')) {\n      overflowCloseModal.classList.remove('activ');\n    }\n  };\n\n  var getBtnModal = function getBtnModal() {\n    overflowCloseModal = document.querySelector('.overflow');\n    overflowCloseModal.addEventListener('click', closeModal);\n    overflowCloseModal.classList.add('activ');\n  };\n\n  var createModal = function createModal(value) {\n    return \"\\n            <div class=\\\"overflow \\\">\\n                <div class=\\\"modal\\\">\\n                    <h3 class=\\\"hello-user\\\">\".concat(value, \"</h3>\\n                    <span class=\\\"modal-close\\\">X</span>\\n                </div>\\n            </div>\\n        \");\n  };\n\n  btnOpenModal.addEventListener('click', function (e) {\n    getBtnModal();\n  });\n  var modalHtml = createModal('Hello Dima');\n  document.body.insertAdjacentHTML('beforeend', modalHtml);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modals);\n\n//# sourceURL=webpack://alexa-rise/./src/js/modal.js?");

/***/ }),

/***/ "./src/js/portfolio.js":
/*!*****************************!*\
  !*** ./src/js/portfolio.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar getPortfolio = function getPortfolio() {\n  var imgSetting = {\n    autumn: {\n      count: 6,\n      path: 'autumn'\n    },\n    spring: {\n      count: 6,\n      path: \"spring\"\n    },\n    summer: {\n      count: 6,\n      path: \"summer\"\n    },\n    winter: {\n      count: 6,\n      path: \"winter\"\n    }\n  };\n  var navPortfolio = document.querySelectorAll('.button-portfolio');\n  var sectionImg = document.querySelector('.portfolio__view');\n\n  var getPortfolioCategory = function getPortfolioCategory(e) {\n    removeActivCategory();\n    var target = e.target;\n    target.classList.add('activ');\n    getGenerateImg(target.getAttribute('data-aria'));\n  };\n\n  var getGenerateImg = function getGenerateImg(value) {\n    var str = value.toLowerCase();\n    sectionImg.innerHTML = \"\";\n    var listImg = '';\n\n    for (var i = 1; i <= imgSetting[str].count; i++) {\n      listImg += \"\\n                <div class=\\\"portfolio__img\\\">\\n                    <img src='img/portfolio/\".concat(imgSetting[str].path, \"/\").concat(i, \".png' >\\n                </div>\\n            \");\n    }\n\n    sectionImg.insertAdjacentHTML('afterbegin', listImg);\n  };\n\n  var removeActivCategory = function removeActivCategory() {\n    navPortfolio.forEach(function (elem) {\n      return elem.classList.remove('activ');\n    });\n  };\n\n  navPortfolio.forEach(function (elem) {\n    elem.addEventListener('click', getPortfolioCategory);\n  });\n  getGenerateImg('winter');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getPortfolio);\n\n//# sourceURL=webpack://alexa-rise/./src/js/portfolio.js?");

/***/ }),

/***/ "./src/js/scrollHeader.js":
/*!********************************!*\
  !*** ./src/js/scrollHeader.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar scrollHeader = function scrollHeader() {\n  var header = document.querySelector('header');\n  var section = document.querySelectorAll('section.scroll');\n  var navigationLink = document.querySelectorAll('.navigation__list li a');\n\n  var scrollToElem = function scrollToElem(e) {\n    e.preventDefault();\n    var link = e.target.getAttribute('href').replace('#', '');\n    document.querySelector(\".\".concat(link)).scrollIntoView({\n      behavior: 'smooth'\n    });\n  };\n\n  var observer = new IntersectionObserver(function (entries) {\n    entries.forEach(function (entry) {\n      if (entry.isIntersecting) {\n        navigationLink.forEach(function (elem) {\n          elem.addEventListener('click', scrollToElem);\n          elem.classList.remove('activ');\n          var link = elem.getAttribute('href').replace('#', '');\n          var dataEntry = entry.target.getAttribute('data-scroll');\n\n          if (link === dataEntry) {\n            elem.classList.add('activ');\n          }\n        });\n      }\n    });\n  }, {\n    threshold: .2\n  });\n  navigationLink.forEach(function (elem) {\n    elem.addEventListener('click', scrollToElem);\n  });\n  section.forEach(function (elem) {\n    console.log(elem);\n    observer.observe(elem);\n  });\n  window.addEventListener('scroll', function (e) {\n    var top = document.documentElement.scrollTop;\n    top > 300 ? header.classList.add('activ') : header.classList.remove('activ');\n    top === 0 ? navigationLink[0].classList.remove('activ') : \"\";\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (scrollHeader);\n\n//# sourceURL=webpack://alexa-rise/./src/js/scrollHeader.js?");

/***/ }),

/***/ "./src/js/switchTheme.js":
/*!*******************************!*\
  !*** ./src/js/switchTheme.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar switchTheme = function switchTheme() {\n  var html = document.querySelector('html');\n  html.classList.add('dark');\n  var switchBtn = document.querySelector('.switch-theme');\n\n  var getLocalStorageTheme = function getLocalStorageTheme() {\n    var local = localStorage.getItem('theme');\n\n    if (local) {\n      var parseTheme = JSON.parse(local);\n      addActivClassTheme(parseTheme);\n    } else {\n      addActivClassTheme('moon');\n    }\n  };\n\n  var saveLocalStorage = function saveLocalStorage(value) {\n    localStorage.setItem('theme', JSON.stringify(value));\n  };\n\n  switchBtn.addEventListener('click', function (e) {\n    var target = e.target.getAttribute('data-theme');\n    var reversTheme = null;\n\n    if (target === 'sun') {\n      reversTheme = 'moon';\n    } else {\n      reversTheme = 'sun';\n    }\n\n    saveLocalStorage(reversTheme);\n    addActivClassTheme(reversTheme);\n  });\n\n  var removeActivClassTheme = function removeActivClassTheme(value) {\n    switchBtn.classList.remove(value);\n  };\n\n  var addActivClassTheme = function addActivClassTheme(value) {\n    var reversTheme = value === 'moon' ? 'sun' : 'moon';\n    removeActivClassTheme(value);\n    switchBtn.setAttribute('data-theme', value);\n    switchBtn.classList.add(reversTheme);\n    html.classList.remove(reversTheme);\n    html.classList.add(value);\n  };\n\n  getLocalStorageTheme();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (switchTheme);\n\n//# sourceURL=webpack://alexa-rise/./src/js/switchTheme.js?");

/***/ }),

/***/ "./src/js/switchTranslate.js":
/*!***********************************!*\
  !*** ./src/js/switchTranslate.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translate */ \"./src/js/translate.js\");\n\n\nvar switchTranslate = function switchTranslate() {\n  var switchLang = document.querySelectorAll('.lang');\n\n  var getLocalStorageLang = function getLocalStorageLang() {\n    var language = localStorage.getItem('lang');\n\n    if (language) {\n      var parseLang = JSON.parse(language);\n      translate(parseLang);\n      switchLang.forEach(function (el) {\n        el.getAttribute('data-lang') === parseLang ? setActivClassLang(el) : null;\n      });\n    }\n  };\n\n  var saveLocalStorage = function saveLocalStorage(value) {\n    localStorage.setItem('lang', JSON.stringify(value));\n  };\n\n  var handlerLanguage = function handlerLanguage(e) {\n    e.preventDefault();\n    var target = e.target;\n    var getLang = target.getAttribute('data-lang');\n    setActivClassLang(target);\n\n    if (getLang === 'ru') {\n      translate(getLang);\n      saveLocalStorage(getLang);\n    } else {\n      translate(getLang);\n      saveLocalStorage(getLang);\n    }\n  };\n\n  switchLang.forEach(function (elem) {\n    elem.addEventListener('click', handlerLanguage);\n  });\n\n  var setActivClassLang = function setActivClassLang(target) {\n    removeActivSwitchLang();\n    target.classList.add('activ');\n  };\n\n  var translate = function translate() {\n    var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';\n    var langValue = _translate__WEBPACK_IMPORTED_MODULE_0__[\"default\"][lang];\n\n    var _loop = function _loop(key) {\n      var all = document.querySelectorAll(\".\".concat(key));\n\n      if (all.length > 1) {\n        all.forEach(function (elem) {\n          elem.textContent = langValue[key];\n        });\n      } else {\n        document.querySelector(\".\".concat(key)).textContent = langValue[key];\n      }\n    };\n\n    for (var key in langValue) {\n      _loop(key);\n    }\n  };\n\n  var removeActivSwitchLang = function removeActivSwitchLang() {\n    switchLang.forEach(function (elem) {\n      elem.classList.remove('activ');\n    });\n  };\n\n  getLocalStorageLang();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (switchTranslate);\n\n//# sourceURL=webpack://alexa-rise/./src/js/switchTranslate.js?");

/***/ }),

/***/ "./src/js/translate.js":
/*!*****************************!*\
  !*** ./src/js/translate.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar i18Obj = {\n  'en': {\n    'skills': 'Skills',\n    'portfolio': 'Portfolio',\n    'video': 'Video',\n    'price': 'Price',\n    'contacts': 'Contacts',\n    'hero-title': 'Alexa Rise',\n    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',\n    'hire': 'Hire me',\n    'skill-title-1': 'Digital photography',\n    'skill-text-1': 'High-quality photos in the studio and on the nature',\n    'skill-title-2': 'Video shooting',\n    'skill-text-2': 'Capture your moments so that they always stay with you',\n    'skill-title-3': 'Rotouch',\n    'skill-text-3': 'I strive to make photography surpass reality',\n    'skill-title-4': 'Audio',\n    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',\n    'winter': 'Winter',\n    'spring': 'Spring',\n    'summer': 'Summer',\n    'autumn': 'Autumn',\n    'price-description-1-span-1': 'One location',\n    'price-description-1-span-2': '120 photos in color',\n    'price-description-1-span-3': '12 photos in retouch',\n    'price-description-1-span-4': 'Readiness 2-3 weeks',\n    'price-description-1-span-5': 'Make up, visage',\n    'price-description-2-span-1': 'One or two locations',\n    'price-description-2-span-2': '200 photos in color',\n    'price-description-2-span-3': '20 photos in retouch',\n    'price-description-2-span-4': 'Readiness 1-2 weeks',\n    'price-description-2-span-5': 'Make up, visage',\n    'price-description-3-span-1': 'Three locations or more',\n    'price-description-3-span-2': '300 photos in color',\n    'price-description-3-span-3': '50 photos in retouch',\n    'price-description-3-span-4': 'Readiness 1 week',\n    'price-description-3-span-5': 'Make up, visage, hairstyle',\n    'order': 'Order shooting',\n    'contact-me': 'Contact me',\n    'send-message': 'Send message',\n    'hello-user': 'Hi Dima'\n  },\n  'ru': {\n    'hello-user': 'Привет Дима',\n    'skills': 'Навыки',\n    'portfolio': 'Портфолио',\n    'video': 'Видео',\n    'price': 'Цены',\n    'contacts': 'Контакты',\n    'hero-title': 'Алекса Райс',\n    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',\n    'hire': 'Пригласить',\n    'skill-title-1': 'Фотография',\n    'skill-text-1': 'Высококачественные фото в студии и на природе',\n    'skill-title-2': 'Видеосъемка',\n    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',\n    'skill-title-3': 'Ретушь',\n    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',\n    'skill-title-4': 'Звук',\n    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',\n    'winter': 'Зима',\n    'spring': 'Весна',\n    'summer': 'Лето',\n    'autumn': 'Осень',\n    'price-description-1-span-1': 'Одна локация',\n    'price-description-1-span-2': '120 цветных фото',\n    'price-description-1-span-3': '12 отретушированных фото',\n    'price-description-1-span-4': 'Готовность через 2-3 недели',\n    'price-description-1-span-5': 'Макияж, визаж',\n    'price-description-2-span-1': 'Одна-две локации',\n    'price-description-2-span-2': '200 цветных фото',\n    'price-description-2-span-3': '20 отретушированных фото',\n    'price-description-2-span-4': 'Готовность через 1-2 недели',\n    'price-description-2-span-5': 'Макияж, визаж',\n    'price-description-3-span-1': 'Три локации и больше',\n    'price-description-3-span-2': '300 цветных фото',\n    'price-description-3-span-3': '50 отретушированных фото',\n    'price-description-3-span-4': 'Готовность через 1 неделю',\n    'price-description-3-span-5': 'Макияж, визаж, прическа',\n    'order': 'Заказать съемку',\n    'contact-me': 'Свяжитесь со мной',\n    'send-message': 'Отправить'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (i18Obj);\n\n//# sourceURL=webpack://alexa-rise/./src/js/translate.js?");

/***/ }),

/***/ "./src/js/validForm.js":
/*!*****************************!*\
  !*** ./src/js/validForm.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar validForm = function validForm() {\n  var forms = document.querySelector('.forms');\n\n  var validInput = function validInput(form) {\n    var flag = true;\n\n    for (var i = 0; i < form.length - 1; i++) {\n      if (!form[i].value) {\n        form[i].classList.add('error-valid');\n        flag = false;\n      } else {\n        form[i].classList.remove('error-valid');\n      }\n    }\n\n    return flag;\n  };\n\n  forms.addEventListener('click', function (e) {\n    var target = e.target;\n\n    if (target.classList.contains('submit-form')) {\n      e.preventDefault();\n\n      if (validInput(forms.elements)) {\n        alert(\"Форма заполнена\");\n      }\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (validForm);\n\n//# sourceURL=webpack://alexa-rise/./src/js/validForm.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \********************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icon/close.png */ \"./src/img/icon/close.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icon/close-hover.png */ \"./src/img/icon/close-hover.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icon/menu.png */ \"./src/img/icon/menu.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icon/sun.svg */ \"./src/img/icon/sun.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icon/sun-hover.svg */ \"./src/img/icon/sun-hover.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icon/moon.svg */ \"./src/img/icon/moon.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icon/moon-hover.svg */ \"./src/img/icon/moon-hover.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icon/menu-hover.png */ \"./src/img/icon/menu-hover.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bg.png */ \"./src/img/bg.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icon/play.png */ \"./src/img/icon/play.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icon/play_hover.png */ \"./src/img/icon/play_hover.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".header {\\n  -webkit-transition: all 1s;\\n  -o-transition: all 1s;\\n  transition: all 1s;\\n  position: absolute;\\n  top: 0px;\\n  left: 0%;\\n  width: 100%;\\n}\\n.header.activ {\\n  position: fixed;\\n  -webkit-transition: 1;\\n  -o-transition: 1;\\n  transition: 1;\\n  opacity: 1;\\n  max-width: 100%;\\n  background-color: #000000;\\n  z-index: 9999;\\n  -webkit-transition: all 1s;\\n  -o-transition: all 1s;\\n  transition: all 1s;\\n}\\n.header .header__top {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  padding: 20px 0;\\n}\\n.header .header__top .navigation .navigation__list {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n}\\n.header .header__top .navigation .navigation__list li {\\n  margin-right: 30px;\\n}\\n.header .header__top .navigation .navigation__list li a {\\n  -webkit-transition: all 0.2s;\\n  -o-transition: all 0.2s;\\n  transition: all 0.2s;\\n  color: #fff;\\n  display: block;\\n  padding: 10px 0;\\n}\\n.header .header__top .navigation .navigation__list li a.activ {\\n  color: #BDAE82;\\n}\\n.header .header__top .navigation .navigation__list li a:hover {\\n  color: #BDAE82;\\n}\\n@media (max-width: 768px) {\\n  .header .header__top .close-mobile {\\n    width: 45px;\\n    height: 45px;\\n    position: absolute;\\n    right: 66px;\\n    top: 23px;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    -o-object-fit: contain;\\n       object-fit: contain;\\n    cursor: pointer;\\n  }\\n  .header .header__top .close-mobile:hover {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  }\\n  .header .header__top .navigation {\\n    position: fixed;\\n    top: 0px;\\n    right: -100%;\\n    background: #000000;\\n    height: 100vh;\\n    width: 400px;\\n    -webkit-transition: all 1s;\\n    -o-transition: all 1s;\\n    transition: all 1s;\\n    z-index: 999;\\n  }\\n  .header .header__top .navigation .navigation__list {\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n            flex-direction: column;\\n    padding: 100px 0 0 50px;\\n  }\\n  .header .header__top .navigation .close-navigation {\\n    display: block;\\n  }\\n  .header .header__top .navigation.activ {\\n    right: 0;\\n  }\\n}\\n@media (max-width: 544px) {\\n  .header .header__top .navigation {\\n    width: 100%;\\n  }\\n}\\n.header .header__top .header__nav {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n}\\n.header .header__top .header__nav .menu-mobile {\\n  display: none;\\n  width: 40px;\\n  height: 50px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-repeat: no-repeat;\\n  margin-left: 20px;\\n  cursor: pointer;\\n}\\n.header .header__top .header__nav .switch-theme {\\n  width: 41px;\\n  height: 45px;\\n  background-repeat: no-repeat;\\n  -o-object-fit: contain;\\n     object-fit: contain;\\n  margin-left: 20px;\\n  cursor: pointer;\\n}\\n.header .header__top .header__nav .switch-theme.sun {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n}\\n.header .header__top .header__nav .switch-theme.sun:hover {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n}\\n.header .header__top .header__nav .switch-theme.moon {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n}\\n.header .header__top .header__nav .switch-theme.moon:hover {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \");\\n}\\n@media (max-width: 768px) {\\n  .header .header__top .header__nav .menu-mobile {\\n    display: block;\\n  }\\n}\\n.header .header__top .header__nav .menu-mobile:hover {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \");\\n}\\n.header .header__top .switch__language .language__list {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n}\\n.header .header__top .switch__language .language__list li a, .header .header__top .switch__language .language__list li span {\\n  color: #fff;\\n}\\n.header .header__top .switch__language .language__list li span {\\n  margin: 0 8px;\\n}\\n.header .header__top .switch__language .language__list li a.activ {\\n  color: #BDAE82;\\n}\\n\\n.hero {\\n  width: 100%;\\n  height: 800px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \");\\n  -o-object-fit: fill;\\n     object-fit: fill;\\n  background-repeat: no-repeat;\\n  background-position: center center;\\n}\\n.hero .hero__item {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  height: 100%;\\n  color: #fff;\\n  width: 100%;\\n}\\n.hero .hero__item .hero__description {\\n  width: inherit;\\n  padding-left: 5%;\\n}\\n.hero .hero__item .hero__description h1 {\\n  font-family: \\\"Merriweather\\\";\\n  font-size: 60px;\\n  margin-bottom: 20px;\\n}\\n.hero .hero__item .hero__description p {\\n  max-width: 470px;\\n  font-family: \\\"Inter\\\";\\n  line-height: 40px;\\n}\\n.hero .hero__item .hero__description .hero__btn {\\n  margin-top: 25px;\\n}\\n\\n@media (max-width: 768px) {\\n  .hero {\\n    height: 650px;\\n  }\\n  .hero .hero__item .hero__description p {\\n    font-size: 18px;\\n    line-height: 30px;\\n  }\\n  .hero .hero__item .hero__description h1 {\\n    font-size: 40px;\\n  }\\n}\\n.section-skills {\\n  background-color: #000000;\\n  -webkit-transition: all 1s;\\n  -o-transition: all 1s;\\n  transition: all 1s;\\n}\\n.section-skills .skills__content {\\n  padding: 90px 0;\\n}\\n.section-skills .skills__content .skills__title {\\n  position: relative;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  margin: 0 auto;\\n  -webkit-box-pack: space-evenly;\\n      -ms-flex-pack: space-evenly;\\n          justify-content: space-evenly;\\n  max-width: 700px;\\n}\\n.section-skills .skills__content .skills__title h2 {\\n  font-family: \\\"Merriweather\\\";\\n  text-align: center;\\n  font-size: 40px;\\n  color: #BDAE82;\\n  position: relative;\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1 0 auto;\\n          flex: 1 0 auto;\\n}\\n.section-skills .skills__content .skills__title .skills-left__underline {\\n  top: 25px;\\n  left: 100px;\\n  background-color: #BDAE82;\\n  width: 100%;\\n  height: 2px;\\n  -webkit-box-flex: 2;\\n      -ms-flex: 2;\\n          flex: 2;\\n}\\n.section-skills .skills__content .skills__title .skills-right__underline {\\n  top: 25px;\\n  right: 100px;\\n  width: 100%;\\n  background-color: #BDAE82;\\n  height: 2px;\\n  -webkit-box-flex: 2;\\n      -ms-flex: 2;\\n          flex: 2;\\n}\\n.section-skills .skills__content .skills__items {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  color: #fff;\\n  text-align: center;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  margin-top: 65px;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row;\\n}\\n.section-skills .skills__content .skills__items .skills__item {\\n  margin: 10px;\\n}\\n.section-skills .skills__content .skills__items .skills__item img {\\n  margin-bottom: 50px;\\n}\\n.section-skills .skills__content .skills__items .skills__item .skills-item__title {\\n  font-weight: bold;\\n  margin-bottom: 20px;\\n}\\n.section-skills .skills__content .skills__items .skills__item .skills-item_desc {\\n  line-height: 36px;\\n}\\n@media (max-width: 768px) {\\n  .section-skills .skills__content .skills__title {\\n    max-width: 365px;\\n  }\\n}\\n@media (max-width: 998px) {\\n  .section-skills .skills__content .skills__items {\\n    -ms-flex-wrap: wrap;\\n        flex-wrap: wrap;\\n    -webkit-box-pack: space-evenly;\\n        -ms-flex-pack: space-evenly;\\n            justify-content: space-evenly;\\n  }\\n  .section-skills .skills__content .skills__items .skills__item {\\n    -webkit-box-flex: 0;\\n        -ms-flex: 0 1 300px;\\n            flex: 0 1 300px;\\n  }\\n}\\n\\n.section-portfolio {\\n  background-color: #000000;\\n  -webkit-transition: all 1s;\\n  -o-transition: all 1s;\\n  transition: all 1s;\\n}\\n.section-portfolio .portfolio__content {\\n  padding: 90px 0;\\n  -webkit-transition: 1s all;\\n  -o-transition: 1s all;\\n  transition: 1s all;\\n}\\n.section-portfolio .portfolio__content .portfolio__title {\\n  position: relative;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  margin: 0 auto;\\n  -webkit-box-pack: space-evenly;\\n      -ms-flex-pack: space-evenly;\\n          justify-content: space-evenly;\\n  max-width: 700px;\\n}\\n.section-portfolio .portfolio__content .portfolio__title h2 {\\n  font-family: \\\"Merriweather\\\";\\n  text-align: center;\\n  font-size: 40px;\\n  color: #BDAE82;\\n  position: relative;\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1 0 auto;\\n          flex: 1 0 auto;\\n}\\n.section-portfolio .portfolio__content .portfolio__title .portfolio-left__underline {\\n  top: 25px;\\n  left: 100px;\\n  background-color: #BDAE82;\\n  width: 100%;\\n  height: 2px;\\n  -webkit-box-flex: 2;\\n      -ms-flex: 2;\\n          flex: 2;\\n}\\n.section-portfolio .portfolio__content .portfolio__title .portfolio-right__underline {\\n  top: 25px;\\n  right: 100px;\\n  width: 100%;\\n  background-color: #BDAE82;\\n  height: 2px;\\n  -webkit-box-flex: 2;\\n      -ms-flex: 2;\\n          flex: 2;\\n}\\n.section-portfolio .portfolio__content .portfolio__items {\\n  margin-top: 65px;\\n}\\n.section-portfolio .portfolio__content .portfolio__items .portfolio__item .portfolio__nav {\\n  max-width: 900px;\\n  margin: 0 auto;\\n  margin-bottom: 60px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n}\\n.section-portfolio .portfolio__content .portfolio__items .portfolio__item .portfolio__nav .button-portfolio {\\n  margin: 5px;\\n}\\n@media (max-width: 768px) {\\n  .section-portfolio .portfolio__content .portfolio__items .portfolio__item .portfolio__nav .button-portfolio {\\n    -webkit-box-flex: 1;\\n        -ms-flex: 1 1 210px;\\n            flex: 1 1 210px;\\n    margin: 5px;\\n  }\\n}\\n@media (max-width: 768px) {\\n  .section-portfolio .portfolio__content .portfolio__items .portfolio__item .portfolio__nav {\\n    max-width: 440px;\\n    -webkit-box-pack: center;\\n        -ms-flex-pack: center;\\n            justify-content: center;\\n    -ms-flex-wrap: wrap;\\n        flex-wrap: wrap;\\n  }\\n}\\n.section-portfolio .portfolio__content .portfolio__items .portfolio__item .portfolio__view {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row;\\n  -ms-flex-wrap: wrap;\\n      flex-wrap: wrap;\\n  -webkit-box-pack: space-evenly;\\n      -ms-flex-pack: space-evenly;\\n          justify-content: space-evenly;\\n  min-height: 400px;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n}\\n.section-portfolio .portfolio__content .portfolio__items .portfolio__item .portfolio__view .portfolio__img {\\n  width: 440px;\\n  height: 560px;\\n  margin: 12px;\\n}\\n.section-portfolio .portfolio__content .portfolio__items .portfolio__item .portfolio__view .portfolio__img img {\\n  width: 100%;\\n  height: inherit;\\n  -webkit-transition: all 1s;\\n  -o-transition: all 1s;\\n  transition: all 1s;\\n  -o-object-fit: cover;\\n     object-fit: cover;\\n}\\n@media (max-width: 768px) {\\n  .section-portfolio .portfolio__content .portfolio__title {\\n    max-width: 365px;\\n  }\\n}\\n\\n.section-video {\\n  background-color: #000000;\\n  -webkit-transition: all 1s;\\n  -o-transition: all 1s;\\n  transition: all 1s;\\n}\\n.section-video .video__content {\\n  padding: 90px 0;\\n}\\n.section-video .video__content .video__title {\\n  position: relative;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  margin: 0 auto;\\n  -webkit-box-pack: space-evenly;\\n      -ms-flex-pack: space-evenly;\\n          justify-content: space-evenly;\\n  max-width: 700px;\\n}\\n.section-video .video__content .video__title h2 {\\n  font-family: \\\"Merriweather\\\";\\n  text-align: center;\\n  font-size: 40px;\\n  color: #BDAE82;\\n  position: relative;\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1 0 auto;\\n          flex: 1 0 auto;\\n}\\n.section-video .video__content .video__title .video-left__underline {\\n  top: 25px;\\n  left: 100px;\\n  background-color: #BDAE82;\\n  width: 100%;\\n  height: 2px;\\n  -webkit-box-flex: 2;\\n      -ms-flex: 2;\\n          flex: 2;\\n}\\n.section-video .video__content .video__title .video-right__underline {\\n  top: 25px;\\n  right: 100px;\\n  width: 100%;\\n  background-color: #BDAE82;\\n  height: 2px;\\n  -webkit-box-flex: 2;\\n      -ms-flex: 2;\\n          flex: 2;\\n}\\n.section-video .video__content .section-video__items {\\n  margin-top: 60px;\\n}\\n.section-video .video__content .section-video__items .video__item {\\n  position: relative;\\n}\\n.section-video .video__content .section-video__items .video__item .player {\\n  width: 100%;\\n}\\n.section-video .video__content .section-video__items .video__item .player__play {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  width: 100px;\\n  height: 100px;\\n  -webkit-transform: translate(-50%, -50%);\\n      -ms-transform: translate(-50%, -50%);\\n          transform: translate(-50%, -50%);\\n  background-size: contain;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \");\\n  background-repeat: no-repeat;\\n  cursor: pointer;\\n}\\n.section-video .video__content .section-video__items .video__item .player__play:hover {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \");\\n}\\n@media (max-width: 768px) {\\n  .section-video .video__content .video__title {\\n    max-width: 365px;\\n  }\\n}\\n\\n.section-price {\\n  background-color: #000000;\\n  -webkit-transition: all 1s;\\n  -o-transition: all 1s;\\n  transition: all 1s;\\n}\\n.section-price .price__content {\\n  padding: 90px 0;\\n}\\n.section-price .price__content .price__title {\\n  position: relative;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  margin: 0 auto;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  max-width: 700px;\\n}\\n.section-price .price__content .price__title h2 {\\n  font-family: \\\"Merriweather\\\";\\n  text-align: center;\\n  font-size: 40px;\\n  color: #BDAE82;\\n  position: relative;\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1 0 auto;\\n          flex: 1 0 auto;\\n}\\n.section-price .price__content .price__title .price-left__underline {\\n  top: 25px;\\n  left: 100px;\\n  background-color: #BDAE82;\\n  width: 100%;\\n  height: 2px;\\n  -webkit-box-flex: 2;\\n      -ms-flex: 2;\\n          flex: 2;\\n}\\n.section-price .price__content .price__title .price-right__underline {\\n  top: 25px;\\n  right: 100px;\\n  width: 100%;\\n  background-color: #BDAE82;\\n  height: 2px;\\n  -webkit-box-flex: 2;\\n      -ms-flex: 2;\\n          flex: 2;\\n}\\n.section-price .price__content .price__items {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  color: #fff;\\n  text-align: center;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  margin-top: 65px;\\n}\\n.section-price .price__content .price__items .price__item {\\n  width: 400px;\\n  max-width: 400px;\\n  border: 3px solid #BDAE82;\\n  padding: 40px 20px;\\n  margin-bottom: 75px;\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1 1 auto;\\n          flex: 1 1 auto;\\n  margin: 5px;\\n}\\n.section-price .price__content .price__items .price__item img {\\n  margin-bottom: 50px;\\n}\\n.section-price .price__content .price__items .price__item .price-item__title {\\n  font-weight: bold;\\n  margin-bottom: 28px;\\n  font-family: \\\"Merriweather\\\";\\n}\\n.section-price .price__content .price__items .price__item .price-item_cash {\\n  color: #BDAE82;\\n  font-weight: bold;\\n  margin-bottom: 24px;\\n}\\n.section-price .price__content .price__items .price__item .price-item_desc {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  line-height: 36px;\\n  margin-bottom: 40px;\\n}\\n.section-price .price__content .price__items .price__item .price-item_desc span {\\n  font-size: 18px;\\n}\\n@media (max-width: 768px) {\\n  .section-price .price__content .price__title {\\n    max-width: 365px;\\n  }\\n}\\n@media (max-width: 998px) {\\n  .section-price .price__content .price__items {\\n    -webkit-box-pack: space-evenly;\\n        -ms-flex-pack: space-evenly;\\n            justify-content: space-evenly;\\n    -ms-flex-wrap: wrap;\\n        flex-wrap: wrap;\\n  }\\n}\\n\\n.section-contacts {\\n  width: 100%;\\n  height: 700px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \");\\n  -o-object-fit: fill;\\n     object-fit: fill;\\n  background-repeat: no-repeat;\\n  background-position: right right;\\n}\\n.section-contacts .contacts__item {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  color: #fff;\\n  width: 100%;\\n  height: 100%;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n}\\n.section-contacts .contacts__item .contacts__form {\\n  width: 500px;\\n  max-width: 500px;\\n}\\n.section-contacts .contacts__item .contacts__form .form__title {\\n  font-family: \\\"Merriweather\\\";\\n  font-size: 40px;\\n  color: #BDAE82;\\n  font-weight: bold;\\n  margin-bottom: 40px;\\n}\\n.section-contacts .contacts__item .contacts__form .forms {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n}\\n.section-contacts .contacts__item .contacts__form .forms .error-valid {\\n  -webkit-transition: 0.5s;\\n  -o-transition: 0.5s;\\n  transition: 0.5s;\\n  border: 2px solid #870909;\\n}\\n.section-contacts .contacts__item .contacts__form .forms input, .section-contacts .contacts__item .contacts__form .forms textarea {\\n  background: #00000052;\\n  height: 50px;\\n  border: 2px solid #BDAE82;\\n  text-indent: 20px;\\n  color: #BDAE82;\\n  -webkit-transition: 0.5s;\\n  -o-transition: 0.5s;\\n  transition: 0.5s;\\n}\\n.section-contacts .contacts__item .contacts__form .forms input, .section-contacts .contacts__item .contacts__form .forms textarea, .section-contacts .contacts__item .contacts__form .forms button {\\n  margin: 10px 0;\\n  resize: none;\\n}\\n.section-contacts .contacts__item .contacts__form .forms textarea {\\n  height: 100px;\\n  text-indent: 20px;\\n  padding: 10px 0;\\n}\\n.section-contacts .contacts__item .contacts__form .forms input::-webkit-input-placeholder, .section-contacts .contacts__item .contacts__form .forms textarea::-webkit-input-placeholder {\\n  color: #BDAE82;\\n  font-family: \\\"Inter\\\";\\n}\\n.section-contacts .contacts__item .contacts__form .forms input::-moz-placeholder, .section-contacts .contacts__item .contacts__form .forms textarea::-moz-placeholder {\\n  color: #BDAE82;\\n  font-family: \\\"Inter\\\";\\n}\\n.section-contacts .contacts__item .contacts__form .forms input:-ms-input-placeholder, .section-contacts .contacts__item .contacts__form .forms textarea:-ms-input-placeholder {\\n  color: #BDAE82;\\n  font-family: \\\"Inter\\\";\\n}\\n.section-contacts .contacts__item .contacts__form .forms input::-ms-input-placeholder, .section-contacts .contacts__item .contacts__form .forms textarea::-ms-input-placeholder {\\n  color: #BDAE82;\\n  font-family: \\\"Inter\\\";\\n}\\n.section-contacts .contacts__item .contacts__form .forms input::placeholder, .section-contacts .contacts__item .contacts__form .forms textarea::placeholder {\\n  color: #BDAE82;\\n  font-family: \\\"Inter\\\";\\n}\\n@media (max-width: 768px) {\\n  .section-contacts .contacts__item .contacts__form {\\n    margin: 0 auto;\\n  }\\n  .section-contacts .contacts__item .contacts__form .form__title {\\n    text-align: center;\\n  }\\n  .section-contacts .contacts__item .contacts__form .forms {\\n    -webkit-box-align: center;\\n        -ms-flex-align: center;\\n            align-items: center;\\n  }\\n  .section-contacts .contacts__item .contacts__form .forms input, .section-contacts .contacts__item .contacts__form .forms textarea {\\n    width: 100%;\\n  }\\n}\\n\\n.footer {\\n  background-color: #000000;\\n  padding: 50px 0;\\n}\\n.footer .footer__content .footer__items {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  color: #fff;\\n  text-align: center;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n}\\n.footer .footer__content .footer__items .footer__item.info {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n}\\n.footer .footer__content .footer__items .footer__item.info p {\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1 1 auto;\\n          flex: 1 1 auto;\\n  margin-right: 20px;\\n}\\n@media (max-width: 768px) {\\n  .footer .footer__content .footer__items {\\n    -ms-flex-wrap: wrap;\\n        flex-wrap: wrap;\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n            flex-direction: column;\\n  }\\n  .footer .footer__content .footer__items .footer__item {\\n    margin: 10px 0;\\n  }\\n}\\n\\n.overflow {\\n  width: 100vw;\\n  position: fixed;\\n  color: #fff;\\n  z-index: 999;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  height: 100vh;\\n  background: #00000096;\\n  top: 0px;\\n  left: 0px;\\n  visibility: hidden;\\n}\\n.overflow.activ {\\n  -webkit-animation: 0.2s overflow linear;\\n          animation: 0.2s overflow linear;\\n  visibility: visible;\\n}\\n@-webkit-keyframes overflow {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n@keyframes overflow {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n.overflow.activ .modal {\\n  background: #fff;\\n  color: #111;\\n  width: 300px;\\n  max-width: 300px;\\n  height: 200px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  border-radius: 10px;\\n  position: relative;\\n  -webkit-animation: 0.5s modal;\\n          animation: 0.5s modal;\\n}\\n@-webkit-keyframes modal {\\n  from {\\n    opacity: 0;\\n    -webkit-transform: translateY(-100%);\\n            transform: translateY(-100%);\\n  }\\n  to {\\n    opacity: 1;\\n    -webkit-transform: translateY(0%);\\n            transform: translateY(0%);\\n  }\\n}\\n@keyframes modal {\\n  from {\\n    opacity: 0;\\n    -webkit-transform: translateY(-100%);\\n            transform: translateY(-100%);\\n  }\\n  to {\\n    opacity: 1;\\n    -webkit-transform: translateY(0%);\\n            transform: translateY(0%);\\n  }\\n}\\n.overflow.activ .modal h3 {\\n  font-size: 28px;\\n}\\n.overflow.activ .modal .modal-close {\\n  text-align: center;\\n  position: absolute;\\n  top: 4px;\\n  right: 8px;\\n  background: #870909;\\n  width: 24px;\\n  border-radius: 50%;\\n  cursor: pointer;\\n  color: #fff;\\n}\\n.overflow.activ .modal .modal-close:hover {\\n  background: #420202;\\n}\\n\\nhtml {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nhtml.sun .section-skills {\\n  background-color: #fff;\\n  color: #000000;\\n}\\nhtml.sun .section-skills .skills__title .skills-left__underline,\\nhtml.sun .section-skills .skills__title .skills-right__underline {\\n  background-color: #000000;\\n}\\nhtml.sun .section-skills .skills__title h2 {\\n  color: #000000;\\n}\\nhtml.sun .section-skills .skills__items {\\n  color: #000000;\\n}\\nhtml.sun .section-portfolio {\\n  background-color: #fff;\\n  color: #000000;\\n}\\nhtml.sun .section-portfolio .portfolio__title .portfolio-left__underline,\\nhtml.sun .section-portfolio .portfolio__title .portfolio-right__underline {\\n  background-color: #000000;\\n}\\nhtml.sun .section-portfolio .portfolio__title h2 {\\n  color: #000000;\\n}\\nhtml.sun .section-portfolio .button-portfolio {\\n  color: #000000;\\n}\\nhtml.sun .section-portfolio .button-dark.activ {\\n  color: #fff;\\n}\\nhtml.sun .section-video {\\n  background-color: #fff;\\n  color: #000000;\\n}\\nhtml.sun .section-video .video__title .video-left__underline,\\nhtml.sun .section-video .video__title .video-right__underline {\\n  background-color: #000000;\\n}\\nhtml.sun .section-video .video__title h2 {\\n  color: #000000;\\n}\\nhtml.sun .section-price {\\n  background-color: #fff;\\n  color: #000000;\\n}\\nhtml.sun .section-price .price__title .price-left__underline,\\nhtml.sun .section-price .price__title .price-right__underline {\\n  background-color: #000000;\\n}\\nhtml.sun .section-price .price__title h2 {\\n  color: #000000;\\n}\\nhtml.sun .section-price .price__items {\\n  color: #000000;\\n}\\nhtml.sun .section-price .button-dark.activ {\\n  color: #fff;\\n}\\n\\nsection {\\n  border: 0;\\n  outline: none;\\n}\\n\\n* {\\n  padding: 0;\\n  margin: 0;\\n  outline: none;\\n  font-size: 20px;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: #fff;\\n  cursor: pointer;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\nbody {\\n  font-family: \\\"Inter\\\";\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n}\\n\\nbutton {\\n  border: 0;\\n  cursor: pointer;\\n}\\n\\n.wrapper {\\n  position: relative;\\n  max-width: 1440px;\\n  margin: 0 auto;\\n}\\n\\n.container {\\n  padding: 0 20px;\\n  height: 100%;\\n}\\n\\n.button-gold {\\n  width: 220px;\\n  height: 55px;\\n  background: #BDAE82;\\n  -webkit-transition: 0.5s all;\\n  -o-transition: 0.5s all;\\n  transition: 0.5s all;\\n  position: relative;\\n  overflow: hidden;\\n}\\n\\n.button-dark {\\n  width: 220px;\\n  height: 55px;\\n  background: transparent;\\n  -webkit-transition: 0.5s all;\\n  -o-transition: 0.5s all;\\n  transition: 0.5s all;\\n  border: 1px solid #BDAE82;\\n  color: #BDAE82;\\n}\\n\\n.button-dark.activ {\\n  background-color: #BDAE82;\\n  color: #000000;\\n}\\n\\n.button-gold::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 0;\\n  left: 0px;\\n  width: 100%;\\n  height: inherit;\\n  -webkit-transition: all 0.3s;\\n  -o-transition: all 0.3s;\\n  transition: all 0.3s;\\n}\\n\\n.button-gold::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 0;\\n  right: 0px;\\n  width: 100%;\\n  height: inherit;\\n  -webkit-transition: all 0.3s;\\n  -o-transition: all 0.3s;\\n  transition: all 0.3s;\\n}\\n\\n.button-gold:hover::before {\\n  left: 100%;\\n  background: #333;\\n}\\n\\n.button-gold:hover::after {\\n  right: 100%;\\n  background: #333;\\n}\\n\\n.button-gold:hover, .button-dark:hover {\\n  color: #fff;\\n  border-radius: 5px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://alexa-rise/./src/scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://alexa-rise/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://alexa-rise/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://alexa-rise/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://alexa-rise/./src/scss/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://alexa-rise/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://alexa-rise/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://alexa-rise/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://alexa-rise/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://alexa-rise/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://alexa-rise/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/img/bg.png":
/*!************************!*\
  !*** ./src/img/bg.png ***!
  \************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/bg.png\";\n\n//# sourceURL=webpack://alexa-rise/./src/img/bg.png?");

/***/ }),

/***/ "./src/img/icon/close-hover.png":
/*!**************************************!*\
  !*** ./src/img/icon/close-hover.png ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/close-hover.png\";\n\n//# sourceURL=webpack://alexa-rise/./src/img/icon/close-hover.png?");

/***/ }),

/***/ "./src/img/icon/close.png":
/*!********************************!*\
  !*** ./src/img/icon/close.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/close.png\";\n\n//# sourceURL=webpack://alexa-rise/./src/img/icon/close.png?");

/***/ }),

/***/ "./src/img/icon/menu-hover.png":
/*!*************************************!*\
  !*** ./src/img/icon/menu-hover.png ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/menu-hover.png\";\n\n//# sourceURL=webpack://alexa-rise/./src/img/icon/menu-hover.png?");

/***/ }),

/***/ "./src/img/icon/menu.png":
/*!*******************************!*\
  !*** ./src/img/icon/menu.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/menu.png\";\n\n//# sourceURL=webpack://alexa-rise/./src/img/icon/menu.png?");

/***/ }),

/***/ "./src/img/icon/moon-hover.svg":
/*!*************************************!*\
  !*** ./src/img/icon/moon-hover.svg ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/moon-hover.svg\";\n\n//# sourceURL=webpack://alexa-rise/./src/img/icon/moon-hover.svg?");

/***/ }),

/***/ "./src/img/icon/moon.svg":
/*!*******************************!*\
  !*** ./src/img/icon/moon.svg ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/moon.svg\";\n\n//# sourceURL=webpack://alexa-rise/./src/img/icon/moon.svg?");

/***/ }),

/***/ "./src/img/icon/play.png":
/*!*******************************!*\
  !*** ./src/img/icon/play.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/play.png\";\n\n//# sourceURL=webpack://alexa-rise/./src/img/icon/play.png?");

/***/ }),

/***/ "./src/img/icon/play_hover.png":
/*!*************************************!*\
  !*** ./src/img/icon/play_hover.png ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/play_hover.png\";\n\n//# sourceURL=webpack://alexa-rise/./src/img/icon/play_hover.png?");

/***/ }),

/***/ "./src/img/icon/sun-hover.svg":
/*!************************************!*\
  !*** ./src/img/icon/sun-hover.svg ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/sun-hover.svg\";\n\n//# sourceURL=webpack://alexa-rise/./src/img/icon/sun-hover.svg?");

/***/ }),

/***/ "./src/img/icon/sun.svg":
/*!******************************!*\
  !*** ./src/img/icon/sun.svg ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/sun.svg\";\n\n//# sourceURL=webpack://alexa-rise/./src/img/icon/sun.svg?");

/***/ })

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;