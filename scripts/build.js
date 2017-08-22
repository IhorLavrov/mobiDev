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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

let canv = document.getElementsByTagName("canvas");
let contxt, go;
let canvWidth, canvHeight;
canvWidth = 800;
canvHeight = 300;


for (var i = 0; i < canv.length; i++) {
    canv[i].width = canvWidth;
    canv[i].height = canvHeight;
}
let wrap = document.getElementById("wrap");
wrap.addEventListener("mouseup", function () {
    go = false;
});
wrap.addEventListener("mouseover", function () {
    go = false;
});
for (var i = 0; i < canv.length; i++) {
    wrap.addEventListener("mousedown", function (e) {
            newCanv1 = document.createElement("canvas");
            contxt = newCanv1.getContext("2d");
            newCanv1.width = canvWidth;
            newCanv1.height = canvHeight;
            wrap.insertBefore(newCanv1, canv[0]);
            if (canv.length >= 20) {
                con19 = canv[19].getContext("2d");
                con19.drawImage(canv[18], 0, 0);
                canv[18].remove()
            }
            let x, y;
            x = e.pageX;
            y = e.pageY;
            contxt.moveTo(x, y);
            go = true;
            contxt.lineWidth = document.getElementById("select").options[select.selectedIndex].value;
            contxt.strokeStyle = document.getElementById("selectColor").options[selectColor.selectedIndex].value;
        }
    );
    canv[i].addEventListener("mousemove", function (e) {
        if (go) {
            let x, y;
            x = e.pageX;
            y = e.pageY;
            contxt.lineTo(x, y);
            contxt.stroke();
        }
    });
    let clear = document.getElementById("clear");
    clear.addEventListener("mousedown", function () {
        while (canv.length > 1) {
            let i = 0;
            canv[i].remove()
            i++
        }
        let tempCanv = document.getElementById("canv");
        let tempContxt = tempCanv.getContext("2d");
        tempContxt.clearRect(0, 0, canv[0].width, canv[0].height);
    });
}

let undo = document.getElementById("undo");
undo.addEventListener("mousedown", function () {
    canv[0].style.display = "none";
});
let redo = document.getElementById("redo");
redo.addEventListener("mousedown", function () {
    canv[0].style.display = "block";
});


/***/ })
/******/ ]);