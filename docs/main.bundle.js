webpackJsonp([1,4],{

/***/ 342:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 342;


/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(452);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/victorjohnson/Documents/projects/sites/percentage-calculator/src/main.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export Entry */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Entry = (function () {
    function Entry() {
    }
    return Entry;
}());
var AppComponent = (function () {
    function AppComponent() {
        this.entries = [
            { name: null, weight: null, value: null }
        ];
    }
    AppComponent.prototype.addRow = function () {
        this.entries.push({
            name: '',
            weight: 0,
            value: 0
        });
    };
    AppComponent.prototype.removeRow = function (index) {
        this.entries.splice(index, 1);
    };
    AppComponent.prototype.getTotalWeight = function () {
        return this.entries.reduce(function (prev, next) {
            return prev + Number(next.weight);
        }, 0);
    };
    AppComponent.prototype.computeAverage = function () {
        return this.entries.reduce(function (prev, next) {
            return prev + ((Number(next.weight) / 100) * Number(next.value));
        }, 0);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(608),
            styles: [__webpack_require__(607)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/victorjohnson/Documents/projects/sites/percentage-calculator/src/app.component.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(451);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/victorjohnson/Documents/projects/sites/percentage-calculator/src/app.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/victorjohnson/Documents/projects/sites/percentage-calculator/src/environment.js.map

/***/ }),

/***/ 607:
/***/ (function(module, exports) {

module.exports = ".container {\n    margin: auto;\n    width: 60%;\n}\n\n.row {\n    margin-bottom: 10px;\n}\n\n/*.input {\n    display: inline-block;\n    width: 33%;\n    padding: 10px;\n    box-sizing: border-box;\n}*/\n\ninput {\n    width: 100%;\n    border: none;\n    border-radius: 5px;\n    background-color: #efefef;\n\n    padding: 5px 10px;\n}\n\n.btn {\n    width: 100%;\n}"

/***/ }),

/***/ 608:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n            <div class=\"row\" *ngFor=\"let entry of entries; let i = index\">\n                <div class=\"col-xs-5\">\n                    <input [(ngModel)]=\"entry.name\" placeholder=\"name\"/>\n                </div>\n                <div class=\"col-xs-3\">\n                    <input [(ngModel)]=\"entry.weight\" placeholder=\"weight\"/>\n                </div>\n                <div class=\"col-xs-3\">\n                    <input [(ngModel)]=\"entry.value\" placeholder=\"value\"/>\n                </div>\n                <div class=\"col-xs-1\">\n                    <button class=\"btn\" (click)=\"removeRow(i)\">X</button>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <button class=\"btn add-btn\" (click)=\"addRow()\">+</button>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-6\">\n                    Total Percent Listed: {{getTotalWeight()}}\n                </div>\n                <div class=\"col-xs-6\">\n                    Weighted Average: {{computeAverage()}}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(343);


/***/ })

},[621]);
//# sourceMappingURL=main.bundle.map