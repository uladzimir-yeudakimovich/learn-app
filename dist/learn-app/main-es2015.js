(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header (featureSelected)=\"onNavigate($event)\"></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signin/signin.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signin/signin.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n    <form (ngSubmit)=\"onSignin(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"email\">Mail</label>\n        <input type=\"email\" id=\"email\" name=\"email\" ngModel class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n          type=\"password\" \n          id=\"password\" \n          name=\"password\" \n          ngModel \n          class=\"form-control\"\n          [minlength]=\"6\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Sign In</button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n    <form (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"email\">Mail</label>\n        <input type=\"email\" id=\"email\" name=\"email\" ngModel class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n          type=\"password\" \n          id=\"password\" \n          name=\"password\" \n          ngModel \n          class=\"form-control\"\n          [minlength]=\"6\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Sign Up</button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a routerLink=\"/\" class=\"navbar-brand\">Recipe Book</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a routerLink=\"/recipes\">Recipes</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/shopping-list\">Shopping List</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <ng-template [ngIf]=\"!authService.isAuthentificated()\">\n          <li><a routerLink=\"/signup\">Register</a></li>\n          <li><a routerLink=\"/signin\">Login</a></li>\n        </ng-template>\n        <li><a \n            style=\"cursor: pointer;\" \n            (click)=\"onLogout()\" \n            *ngIf=\"authService.isAuthentificated()\">Logout</a></li>\n        <li class=\"dropdown\" appDropdown *ngIf=\"authService.isAuthentificated()\">\n          <a style=\"cursor: pointer;\" class=\"dropdown-toggle\" role=\"button\">Manage <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a style=\"cursor: pointer;\" (click)=\"onSaveData()\">Save Data</a></li>\n            <li><a style=\"cursor: pointer;\" (click)=\"onFetchData()\">Fetch Data</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-detail/recipe-detail.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-detail/recipe-detail.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <img \n      [src]=\"recipe.imagePath\" \n      alt=\"{{ recipe.name }}\" \n      class=\"img-responsive\"\n      style=\"max-height: 300px;\">\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1>{{ recipe.name }}</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div \n      class=\"btn-group\"\n      appDropdown>\n      <button \n        type=\"button\"\n        class=\"btn btn-primary dropdown-toggle\">\n        Manage Recipe <span class=\"caret\"></span>\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li><a (click)=\"onAddToShoppingList()\" style=\"cursor: pointer;\">To Shopping List</a></li>\n        <li><a (click)=\"onEditRecipe()\" style=\"cursor: pointer;\">Edit Recipe</a></li>\n        <li><a style=\"cursor: pointer;\" (click)=\"onDeleteRecipe()\">Delete Recipe</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    {{ recipe.description }}\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <ul class=\"list-group\">\n      <li \n        class=\"list-group-item\"\n        *ngFor=\"let ingredient of recipe.ingredients\">\n        {{ ingredient.name }} - {{ ingredient.amount }}\n      </li>\n    </ul>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-edit/recipe-edit.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-edit/recipe-edit.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <button \n            type=\"submit\" \n            class=\"btn btn-success\"\n            [disabled]=\"!recipeForm.valid\">Save</button>\n          <button \n            type=\"button\" \n            class=\"btn btn-danger\" \n            (click)=\"onCancel()\">Cancel</button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input \n              type=\"text\" \n              id=\"name\"\n              formControlName=\"name\"\n              class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"imagePath\">Image URL</label>\n            <input \n              type=\"text\" \n              id=\"imagePath\"\n              formControlName=\"imagePath\"\n              class=\"form-control\"\n              #imagePath>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <img [src]=\"imagePath.value\" class=\"img-responsive\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"description\">Description</label>\n            <textarea \n              type=\"text\" \n              id=\"description\"\n              formControlName=\"description\"\n              class=\"form-control\"\n              rows=\"6\"></textarea>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\" formArrayName=\"ingredients\">\n          <div \n            class=\"row\" \n            *ngFor=\"let ingredientCtrl of recipeForm.get('ingredients').controls; let i = index\"\n            [formGroupName]=\"i\"\n            style=\"margin-top: 10px;\">\n            <div class=\"col-xs-8\">\n              <input \n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"name\">\n            </div>\n            <div class=\"col-xs-2\">\n              <input \n                type=\"number\"\n                class=\"form-control\"\n                formControlName=\"amount\">\n            </div>\n            <div class=\"col-xs-2\">\n              <button\n              type=\"button\"\n                class=\"btn btn-danger\"\n                (click)=\"onDeleteIngredient(i)\">X</button>\n            </div>\n          </div>\n          <hr>\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <button \n                type=\"button\"\n                class=\"btn btn-success\" \n                (click)=\"onAddIngredient()\">Add Ingredient</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\n  style=\"cursor: pointer;\"\n  [routerLink]=\"[index]\"\n  routerLinkActive=\"active\"\n  class=\"list-group-item clearfix\">\n  <div class=\"pull-left\">\n    <h4 class=\"list-group-item-heading\">{{ recipe.name }}</h4>\n    <p class=\"list-group-item-text\">{{ recipe.description }}</p>\n  </div>\n  <span class=\"pull-right\">\n    <img \n      src=\"{{ recipe.imagePath }}\" \n      alt=\"{{ recipe.name }}\" \n      class=\"img-responsive\" \n      style=\"max-height: 50px;\">\n  </span>\n</a>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-list.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-list.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <button class=\"btn btn-success\" (click)=\"onNewRecipe()\">New Recipe</button>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <app-recipe-item\n      *ngFor=\"let recipeEl of recipes; let i = index;\"\n      [recipe]=\"recipeEl\"\n      [index]=\"i\"></app-recipe-item>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-start/recipe-start.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-start/recipe-start.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Please select a Recipe!</h3>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-5\">\n    <app-recipe-list></app-recipe-list>\n  </div>\n  <div class=\"col-md-7\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-edit/shopping-edit.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-edit/shopping-edit.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-sm-5 form-group\">\n          <label for=\"name\">Name</label>\n          <input \n            type=\"text\" \n            id=\"name\" \n            class=\"form-control\"\n            name=\"name\"\n            ngModel\n            required>\n        </div>\n        <div class=\"col-sm-2 form-group\">\n          <label for=\"amount\">Amount</label>\n          <input \n            type=\"number\" \n            id=\"amount\" \n            class=\"form-control\"\n            name=\"amount\"\n            ngModel\n            required\n            pattern=\"^[1-9]+[0-9]*$\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <button \n            class=\"btn btn-success\" \n            type=\"submit\" \n            [disabled]=\"!f.valid\">{{ editMode ? 'Update' : 'Add' }}</button>\n          <button \n            class=\"btn btn-danger\" \n            type=\"button\" \n            (click)=\"onDelete()\"\n            *ngIf=\"editMode\">Delete</button>\n          <button \n            class=\"btn btn-primary\" \n            type=\"button\" \n            (click)=\"onClear()\">Clear</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-xs-10\">\n    <app-shopping-edit></app-shopping-edit>\n    <hr>\n    <ul class=\"list-group\">\n      <a\n        class=\"list-group-item\" \n        style=\"cursor: pointer;\"\n        *ngFor=\"let ingredient of ingredients; let i = index;\"\n        (click)=\"onEditItem(i)\"\n      >\n      {{ ingredient.name }} ({{ ingredient.amount }})\n    </a>\n    </ul>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipes/recipe-start/recipe-start.component */ "./src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes/recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes/recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");











const appRoutes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__["RecipesComponent"], children: [
            { path: '', component: _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_5__["RecipeStartComponent"] },
            { path: 'new', component: _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__["RecipeEditComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
            { path: ':id', component: _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_6__["RecipeDetailComponent"] },
            { path: ':id/edit', component: _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__["RecipeEditComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] }
        ] },
    { path: 'shopping-list', component: _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingListComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"] },
    { path: 'signin', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_9__["SigninComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



let AppComponent = class AppComponent {
    constructor() {
        this.loadedFeature = 'recipe';
    }
    ngOnInit() {
        firebase__WEBPACK_IMPORTED_MODULE_2__["initializeApp"]({
            apiKey: "AIzaSyALw41fzGgRwZtWC0nwSaNPinN96qGVKN8",
            authDomain: "ng-recipe-book-84c52.firebaseapp.com"
        });
    }
    onNavigate(feature) {
        this.loadedFeature = feature;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipes/recipe-list/recipe-list.component */ "./src/app/recipes/recipe-list/recipe-list.component.ts");
/* harmony import */ var _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipes/recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recipes/recipe-list/recipe-item/recipe-item.component */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shopping-list/shopping-edit/shopping-edit.component */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts");
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/dropdown.directive */ "./src/app/shared/dropdown.directive.ts");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shopping-list/shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./recipes/recipe-start/recipe-start.component */ "./src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./recipes/recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./recipes/recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_7__["RecipesComponent"],
            _recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_8__["RecipeListComponent"],
            _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_9__["RecipeDetailComponent"],
            _recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_10__["RecipeItemComponent"],
            _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_11__["ShoppingListComponent"],
            _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_12__["ShoppingEditComponent"],
            _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_13__["DropdownDirective"],
            _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_16__["RecipeStartComponent"],
            _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_17__["RecipeEditComponent"],
            _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_20__["SignupComponent"],
            _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_21__["SigninComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"]
        ],
        providers: [_shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_14__["ShoppingListServise"], _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_18__["RecipeService"], _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_19__["DataStorageService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"], _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");



let AuthGuard = class AuthGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(route, state) {
        return this.authService.isAuthentificated();
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);




let AuthService = class AuthService {
    constructor(router) {
        this.router = router;
    }
    signupUser(email, password) {
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().createUserWithEmailAndPassword(email, password)
            .catch(error => console.log(error));
    }
    signinUser(email, password) {
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithEmailAndPassword(email, password)
            .then(response => {
            this.router.navigate(['/']);
            firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.getIdToken()
                .then((token) => this.token = token);
        })
            .catch(error => console.log(error));
    }
    logout() {
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signOut();
        this.token = null;
    }
    getToken() {
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.getIdToken()
            .then((token) => this.token = token);
        return this.token;
    }
    isAuthentificated() {
        return this.token != null;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/auth/signin/signin.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



let SigninComponent = class SigninComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    onSignin(form) {
        const email = form.value.email;
        const password = form.value.password;
        this.authService.signinUser(email, password);
    }
};
SigninComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signin/signin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin.component.scss */ "./src/app/auth/signin/signin.component.scss")).default]
    })
], SigninComponent);



/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



let SignupComponent = class SignupComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    onSignup(form) {
        const email = form.value.email;
        const password = form.value.password;
        this.authService.signupUser(email, password);
    }
};
SignupComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(dataStorageService, authService) {
        this.dataStorageService = dataStorageService;
        this.authService = authService;
    }
    onSaveData() {
        this.dataStorageService.storeRecipes()
            .subscribe((response) => {
            console.log(response);
        });
    }
    onFetchData() {
        this.dataStorageService.getRecipes();
    }
    onLogout() {
        this.authService.logout();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWRldGFpbC9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipes/recipe.service.ts");




let RecipeDetailComponent = class RecipeDetailComponent {
    constructor(recipeService, route, router) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params
            .subscribe((params) => {
            this.id = +params['id'];
            this.recipe = this.recipeService.getRecipe(this.id);
        });
    }
    onAddToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
    onEditRecipe() {
        this.router.navigate(['edit'], { relativeTo: this.route });
        // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    }
    onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    }
};
RecipeDetailComponent.ctorParameters = () => [
    { type: _recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RecipeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-detail/recipe-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-detail.component.scss */ "./src/app/recipes/recipe-detail/recipe-detail.component.scss")).default]
    })
], RecipeDetailComponent);



/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.ng-invalid.ng-touched,\ntextarea.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZWRpdC9DOlxcVXNlcnNcXFZvdmEuRXZkb2tpbW92aWNoXFxEZXNrdG9wXFxsZWFybi1hcHAvc3JjXFxhcHBcXHJlY2lwZXNcXHJlY2lwZS1lZGl0XFxyZWNpcGUtZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZWRpdC9yZWNpcGUtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxxQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZWRpdC9yZWNpcGUtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCxcclxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuIiwiaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLFxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditComponent", function() { return RecipeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipes/recipe.service.ts");





let RecipeEditComponent = class RecipeEditComponent {
    constructor(route, recipeService, router) {
        this.route = route;
        this.recipeService = recipeService;
        this.router = router;
        this.editMode = false;
    }
    ngOnInit() {
        this.route.params
            .subscribe((params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            this.initForm();
        });
    }
    onSubmit() {
        // const newRecipe = new Recipe(
        //   this.recipeForm.value['name'],
        //   this.recipeForm.value['description'],
        //   this.recipeForm.value['imagePath'],
        //   this.recipeForm.value['ingredients']
        // );
        if (this.editMode) {
            this.recipeService.updataRecipe(this.id, this.recipeForm.value);
        }
        else {
            this.recipeService.addRecipe(this.recipeForm.value);
        }
        this.onCancel();
    }
    onAddIngredient() {
        this.recipeForm.get('ingredients').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[1-9]+[0-9]*$/)
            ])
        }));
    }
    onCancel() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
    onDeleteIngredient(index) {
        this.recipeForm.get('ingredients').removeAt(index);
    }
    initForm() {
        let recipeName = '';
        let recipeImagePath = '';
        let recipeDescription = '';
        let recipeIngredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]);
        if (this.editMode) {
            const recipe = this.recipeService.getRecipe(this.id);
            recipeName = recipe.name;
            recipeImagePath = recipe.imagePath;
            recipeDescription = recipe.description;
            if (recipe['ingredients']) {
                for (let ingredient of recipe.ingredients) {
                    recipeIngredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ingredient.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                        'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ingredient.amount, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[1-9]+[0-9]*$/)
                        ])
                    }));
                }
            }
        }
        this.recipeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'imagePath': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeImagePath, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'ingredients': recipeIngredients
        });
    }
};
RecipeEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RecipeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-edit/recipe-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-edit.component.scss */ "./src/app/recipes/recipe-edit/recipe-edit.component.scss")).default]
    })
], RecipeEditComponent);



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWl0ZW0vcmVjaXBlLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: RecipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function() { return RecipeItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecipeItemComponent = class RecipeItemComponent {
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipeItemComponent.prototype, "recipe", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipeItemComponent.prototype, "index", void 0);
RecipeItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-item.component.scss */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.scss")).default]
    })
], RecipeItemComponent);



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipes/recipe.service.ts");




let RecipeListComponent = class RecipeListComponent {
    constructor(recipeService, router, route) {
        this.recipeService = recipeService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.subscription = this.recipeService.recipesChanged
            .subscribe((recipes) => {
            this.recipes = recipes;
        });
        this.recipes = this.recipeService.getRecipes();
    }
    onNewRecipe() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
RecipeListComponent.ctorParameters = () => [
    { type: _recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
RecipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-list.component.scss */ "./src/app/recipes/recipe-list/recipe-list.component.scss")).default]
    })
], RecipeListComponent);



/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLXN0YXJ0L3JlY2lwZS1zdGFydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.ts ***!
  \****************************************************************/
/*! exports provided: RecipeStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeStartComponent", function() { return RecipeStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecipeStartComponent = class RecipeStartComponent {
    constructor() { }
    ngOnInit() {
    }
};
RecipeStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-start',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-start.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-start/recipe-start.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-start.component.scss */ "./src/app/recipes/recipe-start/recipe-start.component.scss")).default]
    })
], RecipeStartComponent);



/***/ }),

/***/ "./src/app/recipes/recipe.model.ts":
/*!*****************************************!*\
  !*** ./src/app/recipes/recipe.model.ts ***!
  \*****************************************/
/*! exports provided: Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Recipe {
    constructor(name, desc, imagePath, ingredients) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}


/***/ }),

/***/ "./src/app/recipes/recipe.service.ts":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipe.service.ts ***!
  \*******************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe.model */ "./src/app/recipes/recipe.model.ts");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shopping-list/shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");






let RecipeService = class RecipeService {
    constructor(slService) {
        this.slService = slService;
        this.recipesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.recipes = [
            new _recipe_model__WEBPACK_IMPORTED_MODULE_3__["Recipe"]('Tasty Schnitzel', 'A super-tasty Schnitzel - just awesome!', 'https://www.weightwatchers.co.uk/images/2057/dynamic/foodandrecipes/2013/10/SteakChipsMustardMayo_xl.jpg', [
                new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_4__["Ingredient"]('Meat', 1),
                new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_4__["Ingredient"]('French Fries', 20)
            ]),
            new _recipe_model__WEBPACK_IMPORTED_MODULE_3__["Recipe"]('Big Fat Burger', 'What else you need to say?', 'https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4-500x500.jpg', [
                new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_4__["Ingredient"]('Buns', 2),
                new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_4__["Ingredient"]('Meat', 1)
            ])
        ];
    }
    setRecipes(recipes) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index) {
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients) {
        this.slService.addIngredients(ingredients);
    }
    addRecipe(recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updataRecipe(index, newRecipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
};
RecipeService.ctorParameters = () => [
    { type: _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingListServise"] }
];
RecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RecipeService);



/***/ }),

/***/ "./src/app/recipes/recipes.component.scss":
/*!************************************************!*\
  !*** ./src/app/recipes/recipes.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/recipes/recipes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recipes/recipes.component.ts ***!
  \**********************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecipesComponent = class RecipesComponent {
    constructor() { }
    ngOnInit() { }
};
RecipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipes.component.scss */ "./src/app/recipes/recipes.component.scss")).default]
    })
], RecipesComponent);



/***/ }),

/***/ "./src/app/shared/data-storage.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/data-storage.service.ts ***!
  \************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipes/recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");






let DataStorageService = class DataStorageService {
    constructor(http, recipesServise, authService) {
        this.http = http;
        this.recipesServise = recipesServise;
        this.authService = authService;
    }
    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-recipe-book-84c52.firebaseio.com/recipes.json?auth=' + token, this.recipesServise.getRecipes());
    }
    getRecipes() {
        const token = this.authService.getToken();
        return this.http.get('https://ng-recipe-book-84c52.firebaseio.com/recipes.json?auth=' + token)
            .map((response) => {
            const recipes = response.json();
            for (let recipe of recipes) {
                if (!recipe['ingredients']) {
                    recipe['ingredients'] = [];
                }
            }
            return recipes;
        })
            .subscribe((recipes) => {
            this.recipesServise.setRecipes(recipes);
        });
    }
};
DataStorageService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
DataStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataStorageService);



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DropdownDirective = class DropdownDirective {
    constructor() {
        this.isOpen = false;
    }
    toggleOpen() {
        this.isOpen = !this.isOpen;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open')
], DropdownDirective.prototype, "isOpen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDropdown]'
    })
], DropdownDirective);



/***/ }),

/***/ "./src/app/shared/ingredient.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Ingredient {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}


/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctZWRpdC9zaG9wcGluZy1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: ShoppingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingEditComponent", function() { return ShoppingEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");




let ShoppingEditComponent = class ShoppingEditComponent {
    constructor(slServise) {
        this.slServise = slServise;
        this.editMode = false;
    }
    ngOnInit() {
        this.subscription = this.slServise.startedEditing
            .subscribe((index) => {
            this.editedItemIndex = index;
            this.editMode = true;
            this.editedItem = this.slServise.getIngredient(index);
            this.slForm.setValue({
                name: this.editedItem.name,
                amount: this.editedItem.amount
            });
        });
    }
    onSubmit(form) {
        const value = form.value;
        const newIngredient = new src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"](value.name, value.amount);
        if (this.editMode) {
            this.slServise.updateIngredient(this.editedItemIndex, newIngredient);
        }
        else {
            this.slServise.addIngredient(newIngredient);
        }
        this.editMode = false;
        form.reset();
    }
    onDelete() {
        this.slServise.deleteIngredient(this.editedItemIndex);
        this.onClear();
    }
    onClear() {
        this.slForm.reset();
        this.editMode = false;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
ShoppingEditComponent.ctorParameters = () => [
    { type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingListServise"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: true })
], ShoppingEditComponent.prototype, "slForm", void 0);
ShoppingEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-edit/shopping-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-edit.component.scss */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.scss")).default]
    })
], ShoppingEditComponent);



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");



let ShoppingListComponent = class ShoppingListComponent {
    constructor(slServise) {
        this.slServise = slServise;
    }
    ngOnInit() {
        this.ingredients = this.slServise.getIngredients();
        this.subscription = this.slServise.ingredientsChanged.
            subscribe((ingredients) => {
            this.ingredients = ingredients;
        });
    }
    onEditItem(index) {
        this.slServise.startedEditing.next(index);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
ShoppingListComponent.ctorParameters = () => [
    { type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListServise"] }
];
ShoppingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-list.component.scss */ "./src/app/shopping-list/shopping-list.component.scss")).default]
    })
], ShoppingListComponent);



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.service.ts ***!
  \********************************************************/
/*! exports provided: ShoppingListServise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListServise", function() { return ShoppingListServise; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class ShoppingListServise {
    constructor() {
        this.ingredientsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ingredients = [
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Apples', 5),
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Tomatoes', 10)
        ];
    }
    getIngredients() {
        return this.ingredients.slice();
    }
    getIngredient(index) {
        return this.ingredients[index];
    }
    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients) {
        // for (let ingredient of ingredients) {
        //   this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredient(index, newIngredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Vova.Evdokimovich\Desktop\learn-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map