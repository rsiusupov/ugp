/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/stylesheets/style.css":
/*!***********************************!*\
  !*** ./src/stylesheets/style.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/javascripts/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheets/style.css */ "./src/stylesheets/style.css");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var searchInput = document.querySelector('[data-search-input]');
var searchForm = document.querySelector('[data-search-form]');
var searchToggle = document.querySelector('[data-search-toggle]');
var articleCards = document.querySelectorAll('.O_ArticleCard');
if (searchToggle && searchInput) {
  searchToggle.addEventListener('click', function () {
    searchInput.focus();
    searchInput.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });
}
if (searchForm) {
  searchForm.addEventListener('submit', function (event) {
    var _document$getElementB;
    event.preventDefault();
    var query = ((searchInput === null || searchInput === void 0 ? void 0 : searchInput.value) || '').trim().toLowerCase();
    if (!articleCards.length) {
      return;
    }
    articleCards.forEach(function (card) {
      var haystack = card.textContent.toLowerCase();
      card.hidden = Boolean(query) && !haystack.includes(query);
    });
    (_document$getElementB = document.getElementById('articles')) === null || _document$getElementB === void 0 || _document$getElementB.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}
var stickyNav = document.querySelector('.O_Nav');
if (stickyNav) {
  var syncNav = function syncNav() {
    stickyNav.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  syncNav();
  window.addEventListener('scroll', syncNav, {
    passive: true
  });
}
var shareButton = document.querySelector('[data-share]');
if (shareButton) {
  shareButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var shareData, label, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          shareData = {
            title: document.title,
            url: window.location.href
          };
          _context.p = 1;
          if (!navigator.share) {
            _context.n = 3;
            break;
          }
          _context.n = 2;
          return navigator.share(shareData);
        case 2:
          _context.n = 5;
          break;
        case 3:
          if (!navigator.clipboard) {
            _context.n = 5;
            break;
          }
          _context.n = 4;
          return navigator.clipboard.writeText(shareData.url);
        case 4:
          label = shareButton.querySelector('.A_TextLabel');
          if (label) {
            label.textContent = 'Ссылка скопирована';
          }
        case 5:
          _context.n = 7;
          break;
        case 6:
          _context.p = 6;
          _t = _context.v;
        case 7:
          return _context.a(2);
      }
    }, _callee, null, [[1, 6]]);
  })));
}
var pageUrl = window.location.href;
var pageTitle = document.title;
document.querySelectorAll('[data-share-network]').forEach(function (link) {
  var network = link.getAttribute('data-share-network');
  if (network === 'telegram') {
    link.href = "https://t.me/share/url?url=".concat(encodeURIComponent(pageUrl), "&text=").concat(encodeURIComponent(pageTitle));
  } else if (network === 'pinterest') {
    link.href = "https://pinterest.com/pin/create/button/?url=".concat(encodeURIComponent(pageUrl), "&description=").concat(encodeURIComponent(pageTitle));
  }
});
var luckyLink = document.querySelector('[data-lucky-link]');
if (luckyLink) {
  var luckyPages = ['pages/articles/asap-rocky.html', 'pages/articles/daniel-arsham.html', 'pages/articles/gucci-ghost.html', 'pages/articles/hajime-sorayama.html', 'pages/articles/samuel-ross.html', 'pages/articles/kaws.html'];
  luckyLink.href = luckyPages[Math.floor(Math.random() * luckyPages.length)];
}
var caseGallery = document.querySelector('[data-case-gallery]');
if (caseGallery) {
  var scroller = caseGallery.querySelector('[data-case-scroller]');
  var frames = _toConsumableArray(caseGallery.querySelectorAll('[data-case-frame]'));
  var currentEl = caseGallery.querySelector('[data-case-slide-current]');
  var syncSlide = function syncSlide() {
    if (!scroller || !frames.length || !currentEl) {
      return;
    }
    var viewport = scroller.getBoundingClientRect();
    var index = 0;
    var mostVisible = -1;
    frames.forEach(function (frame, frameIndex) {
      var rect = frame.getBoundingClientRect();
      var visible = Math.min(rect.right, viewport.right) - Math.max(rect.left, viewport.left);
      if (visible > mostVisible) {
        mostVisible = visible;
        index = frameIndex;
      }
    });
    currentEl.textContent = String(index + 1);
  };
  syncSlide();
  scroller === null || scroller === void 0 || scroller.addEventListener('scroll', syncSlide, {
    passive: true
  });
  window.addEventListener('resize', syncSlide);
  frames.forEach(function (frame) {
    var _frame$querySelector;
    (_frame$querySelector = frame.querySelector('img')) === null || _frame$querySelector === void 0 || _frame$querySelector.addEventListener('load', syncSlide);
  });
}
var articleNav = document.querySelector('[data-article-nav]');
if (articleNav) {
  var links = _toConsumableArray(articleNav.querySelectorAll('a[href^="#"]'));
  var sections = links.map(function (link) {
    return document.querySelector(link.getAttribute('href'));
  }).filter(Boolean);
  var syncArticleNav = function syncArticleNav() {
    var marker = 120;
    var currentId = null;
    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= marker) {
        currentId = section.id;
      }
    });
    links.forEach(function (link) {
      var isActive = currentId !== null && link.getAttribute('href') === "#".concat(currentId);
      link.classList.toggle('is-active', isActive);
    });
  };
  syncArticleNav();
  window.addEventListener('scroll', syncArticleNav, {
    passive: true
  });
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQztFQUFBLEVBQUMsQ0FDaEVnQyxNQUFNLENBQUM1RCxPQUFPLENBQUM7RUFFbEIsSUFBTTZELGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFTO0lBQzNCLElBQU1DLE1BQU0sR0FBRyxHQUFHO0lBQ2xCLElBQUlDLFNBQVMsR0FBRyxJQUFJO0lBRXBCTCxRQUFRLENBQUMvRCxPQUFPLENBQUMsVUFBQ3FFLE9BQU8sRUFBSztNQUM1QixJQUFJQSxPQUFPLENBQUNyQixxQkFBcUIsQ0FBQyxDQUFDLENBQUNzQixHQUFHLElBQUlILE1BQU0sRUFBRTtRQUNqREMsU0FBUyxHQUFHQyxPQUFPLENBQUNFLEVBQUU7TUFDeEI7SUFDRixDQUFDLENBQUM7SUFFRlQsS0FBSyxDQUFDOUQsT0FBTyxDQUFDLFVBQUMrQixJQUFJLEVBQUs7TUFDdEIsSUFBTXlDLFFBQVEsR0FDWkosU0FBUyxLQUFLLElBQUksSUFBSXJDLElBQUksQ0FBQ0UsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFBQyxNQUFBLENBQVNrQyxTQUFTLENBQUU7TUFDckVyQyxJQUFJLENBQUNyQixTQUFTLENBQUNDLE1BQU0sQ0FBQyxXQUFXLEVBQUU2RCxRQUFRLENBQUM7SUFDOUMsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVETixjQUFjLENBQUMsQ0FBQztFQUNoQnRELE1BQU0sQ0FBQ3ZCLGdCQUFnQixDQUFDLFFBQVEsRUFBRTZFLGNBQWMsRUFBRTtJQUFFcEQsT0FBTyxFQUFFO0VBQUssQ0FBQyxDQUFDO0FBQ3RFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iMjRkczA4Ly4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iMjRkczA4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2IyNGRzMDgvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iMjRkczA4Ly4vc3JjL2phdmFzY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3N0eWxlc2hlZXRzL3N0eWxlLmNzcydcblxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZWFyY2gtaW5wdXRdJylcbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZWFyY2gtZm9ybV0nKVxuY29uc3Qgc2VhcmNoVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2VhcmNoLXRvZ2dsZV0nKVxuY29uc3QgYXJ0aWNsZUNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLk9fQXJ0aWNsZUNhcmQnKVxuXG5pZiAoc2VhcmNoVG9nZ2xlICYmIHNlYXJjaElucHV0KSB7XG4gIHNlYXJjaFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZWFyY2hJbnB1dC5mb2N1cygpXG4gICAgc2VhcmNoSW5wdXQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KVxuICB9KVxufVxuXG5pZiAoc2VhcmNoRm9ybSkge1xuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBxdWVyeSA9IChzZWFyY2hJbnB1dD8udmFsdWUgfHwgJycpLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAoIWFydGljbGVDYXJkcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGFydGljbGVDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICBjb25zdCBoYXlzdGFjayA9IGNhcmQudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKVxuICAgICAgY2FyZC5oaWRkZW4gPSBCb29sZWFuKHF1ZXJ5KSAmJiAhaGF5c3RhY2suaW5jbHVkZXMocXVlcnkpXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnRpY2xlcycpPy5zY3JvbGxJbnRvVmlldyh7XG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICBibG9jazogJ3N0YXJ0J1xuICAgIH0pXG4gIH0pXG59XG5cbmNvbnN0IHN0aWNreU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5PX05hdicpXG5pZiAoc3RpY2t5TmF2KSB7XG4gIGNvbnN0IHN5bmNOYXYgPSAoKSA9PiB7XG4gICAgc3RpY2t5TmF2LmNsYXNzTGlzdC50b2dnbGUoJ2lzLXNjcm9sbGVkJywgd2luZG93LnNjcm9sbFkgPiA4KVxuICB9XG4gIHN5bmNOYXYoKVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc3luY05hdiwgeyBwYXNzaXZlOiB0cnVlIH0pXG59XG5cbmNvbnN0IHNoYXJlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2hhcmVdJylcbmlmIChzaGFyZUJ1dHRvbikge1xuICBzaGFyZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzaGFyZURhdGEgPSB7XG4gICAgICB0aXRsZTogZG9jdW1lbnQudGl0bGUsXG4gICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChuYXZpZ2F0b3Iuc2hhcmUpIHtcbiAgICAgICAgYXdhaXQgbmF2aWdhdG9yLnNoYXJlKHNoYXJlRGF0YSlcbiAgICAgIH0gZWxzZSBpZiAobmF2aWdhdG9yLmNsaXBib2FyZCkge1xuICAgICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChzaGFyZURhdGEudXJsKVxuICAgICAgICBjb25zdCBsYWJlbCA9IHNoYXJlQnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5BX1RleHRMYWJlbCcpXG4gICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ9Ch0YHRi9C70LrQsCDRgdC60L7Qv9C40YDQvtCy0LDQvdCwJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIFVzZXIgY2FuY2VsbGVkIHRoZSBzaGFyZSBzaGVldC5cbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IHBhZ2VVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuY29uc3QgcGFnZVRpdGxlID0gZG9jdW1lbnQudGl0bGVcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNoYXJlLW5ldHdvcmtdJykuZm9yRWFjaCgobGluaykgPT4ge1xuICBjb25zdCBuZXR3b3JrID0gbGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2hhcmUtbmV0d29yaycpXG4gIGlmIChuZXR3b3JrID09PSAndGVsZWdyYW0nKSB7XG4gICAgbGluay5ocmVmID0gYGh0dHBzOi8vdC5tZS9zaGFyZS91cmw/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhZ2VVcmwpfSZ0ZXh0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhZ2VUaXRsZSl9YFxuICB9IGVsc2UgaWYgKG5ldHdvcmsgPT09ICdwaW50ZXJlc3QnKSB7XG4gICAgbGluay5ocmVmID0gYGh0dHBzOi8vcGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi8/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhZ2VVcmwpfSZkZXNjcmlwdGlvbj0ke2VuY29kZVVSSUNvbXBvbmVudChwYWdlVGl0bGUpfWBcbiAgfVxufSlcblxuY29uc3QgbHVja3lMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbHVja3ktbGlua10nKVxuaWYgKGx1Y2t5TGluaykge1xuICBjb25zdCBsdWNreVBhZ2VzID0gW1xuICAgICdwYWdlcy9hcnRpY2xlcy9hc2FwLXJvY2t5Lmh0bWwnLFxuICAgICdwYWdlcy9hcnRpY2xlcy9kYW5pZWwtYXJzaGFtLmh0bWwnLFxuICAgICdwYWdlcy9hcnRpY2xlcy9ndWNjaS1naG9zdC5odG1sJyxcbiAgICAncGFnZXMvYXJ0aWNsZXMvaGFqaW1lLXNvcmF5YW1hLmh0bWwnLFxuICAgICdwYWdlcy9hcnRpY2xlcy9zYW11ZWwtcm9zcy5odG1sJyxcbiAgICAncGFnZXMvYXJ0aWNsZXMva2F3cy5odG1sJ1xuICBdXG4gIGx1Y2t5TGluay5ocmVmID0gbHVja3lQYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsdWNreVBhZ2VzLmxlbmd0aCldXG59XG5cbmNvbnN0IGNhc2VHYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY2FzZS1nYWxsZXJ5XScpXG5pZiAoY2FzZUdhbGxlcnkpIHtcbiAgY29uc3Qgc2Nyb2xsZXIgPSBjYXNlR2FsbGVyeS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jYXNlLXNjcm9sbGVyXScpXG4gIGNvbnN0IGZyYW1lcyA9IFsuLi5jYXNlR2FsbGVyeS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jYXNlLWZyYW1lXScpXVxuICBjb25zdCBjdXJyZW50RWwgPSBjYXNlR2FsbGVyeS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jYXNlLXNsaWRlLWN1cnJlbnRdJylcblxuICBjb25zdCBzeW5jU2xpZGUgPSAoKSA9PiB7XG4gICAgaWYgKCFzY3JvbGxlciB8fCAhZnJhbWVzLmxlbmd0aCB8fCAhY3VycmVudEVsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB2aWV3cG9ydCA9IHNjcm9sbGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgbGV0IGluZGV4ID0gMFxuICAgIGxldCBtb3N0VmlzaWJsZSA9IC0xXG5cbiAgICBmcmFtZXMuZm9yRWFjaCgoZnJhbWUsIGZyYW1lSW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSBmcmFtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgY29uc3QgdmlzaWJsZSA9XG4gICAgICAgIE1hdGgubWluKHJlY3QucmlnaHQsIHZpZXdwb3J0LnJpZ2h0KSAtIE1hdGgubWF4KHJlY3QubGVmdCwgdmlld3BvcnQubGVmdClcblxuICAgICAgaWYgKHZpc2libGUgPiBtb3N0VmlzaWJsZSkge1xuICAgICAgICBtb3N0VmlzaWJsZSA9IHZpc2libGVcbiAgICAgICAgaW5kZXggPSBmcmFtZUluZGV4XG4gICAgICB9XG4gICAgfSlcblxuICAgIGN1cnJlbnRFbC50ZXh0Q29udGVudCA9IFN0cmluZyhpbmRleCArIDEpXG4gIH1cblxuICBzeW5jU2xpZGUoKVxuICBzY3JvbGxlcj8uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc3luY1NsaWRlLCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN5bmNTbGlkZSlcbiAgZnJhbWVzLmZvckVhY2goKGZyYW1lKSA9PiB7XG4gICAgZnJhbWUucXVlcnlTZWxlY3RvcignaW1nJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBzeW5jU2xpZGUpXG4gIH0pXG59XG5cbmNvbnN0IGFydGljbGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hcnRpY2xlLW5hdl0nKVxuaWYgKGFydGljbGVOYXYpIHtcbiAgY29uc3QgbGlua3MgPSBbLi4uYXJ0aWNsZU5hdi5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpXVxuICBjb25zdCBzZWN0aW9ucyA9IGxpbmtzXG4gICAgLm1hcCgobGluaykgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpKSlcbiAgICAuZmlsdGVyKEJvb2xlYW4pXG5cbiAgY29uc3Qgc3luY0FydGljbGVOYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFya2VyID0gMTIwXG4gICAgbGV0IGN1cnJlbnRJZCA9IG51bGxcblxuICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgIGlmIChzZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8PSBtYXJrZXIpIHtcbiAgICAgICAgY3VycmVudElkID0gc2VjdGlvbi5pZFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICBjb25zdCBpc0FjdGl2ZSA9XG4gICAgICAgIGN1cnJlbnRJZCAhPT0gbnVsbCAmJiBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpID09PSBgIyR7Y3VycmVudElkfWBcbiAgICAgIGxpbmsuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJywgaXNBY3RpdmUpXG4gICAgfSlcbiAgfVxuXG4gIHN5bmNBcnRpY2xlTmF2KClcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN5bmNBcnRpY2xlTmF2LCB7IHBhc3NpdmU6IHRydWUgfSlcbn1cbiJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsInNlYXJjaElucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoRm9ybSIsInNlYXJjaFRvZ2dsZSIsImFydGljbGVDYXJkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9jdXMiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJldmVudCIsIl9kb2N1bWVudCRnZXRFbGVtZW50QiIsInByZXZlbnREZWZhdWx0IiwicXVlcnkiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJmb3JFYWNoIiwiY2FyZCIsImhheXN0YWNrIiwidGV4dENvbnRlbnQiLCJoaWRkZW4iLCJCb29sZWFuIiwiaW5jbHVkZXMiLCJnZXRFbGVtZW50QnlJZCIsInN0aWNreU5hdiIsInN5bmNOYXYiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ3aW5kb3ciLCJzY3JvbGxZIiwicGFzc2l2ZSIsInNoYXJlQnV0dG9uIiwiX2NhbGxlZSIsInNoYXJlRGF0YSIsImxhYmVsIiwiX3QiLCJfY29udGV4dCIsInRpdGxlIiwidXJsIiwibG9jYXRpb24iLCJocmVmIiwibmF2aWdhdG9yIiwic2hhcmUiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJwYWdlVXJsIiwicGFnZVRpdGxlIiwibGluayIsIm5ldHdvcmsiLCJnZXRBdHRyaWJ1dGUiLCJjb25jYXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJsdWNreUxpbmsiLCJsdWNreVBhZ2VzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2FzZUdhbGxlcnkiLCJzY3JvbGxlciIsImZyYW1lcyIsIl90b0NvbnN1bWFibGVBcnJheSIsImN1cnJlbnRFbCIsInN5bmNTbGlkZSIsInZpZXdwb3J0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaW5kZXgiLCJtb3N0VmlzaWJsZSIsImZyYW1lIiwiZnJhbWVJbmRleCIsInJlY3QiLCJ2aXNpYmxlIiwibWluIiwicmlnaHQiLCJtYXgiLCJsZWZ0IiwiU3RyaW5nIiwiX2ZyYW1lJHF1ZXJ5U2VsZWN0b3IiLCJhcnRpY2xlTmF2IiwibGlua3MiLCJzZWN0aW9ucyIsIm1hcCIsImZpbHRlciIsInN5bmNBcnRpY2xlTmF2IiwibWFya2VyIiwiY3VycmVudElkIiwic2VjdGlvbiIsInRvcCIsImlkIiwiaXNBY3RpdmUiXSwic291cmNlUm9vdCI6IiJ9