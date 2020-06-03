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
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n  <div class=\"ui container\">\n    <p class=\"small text \">© Copyright 2020 - University of Melbourne. All rights reserved.</p>\n  </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui main text container\">\n  <h1 class=\"ui header\">INSITE - The FROST Job Manager</h1>\n</div>\n\n<div\n    class=\"ui borderless main menu fixed\"\n    style=\"position: fixed; top: 0px; left: auto; z-index: 10;\"\n>\n  <div class=\"ui text container\">\n    <div class=\"header item\">\n      <img\n          class=\"logo\"\n          src=\"assets/insite.png\"\n          width=\"32\"\n          alt=\"\"\n      />\n      INSITE\n    </div>\n    <a\n        class=\"item\"\n        routerLink=\"/home\"\n        routerLinkActive=\"active\"\n    >Home</a>\n    <a\n        class=\"item\"\n        routerLink=\"/jobs\"\n        routerLinkActive=\"active\"\n    >Jobs</a>\n    <a\n        class=\"item\"\n        routerLinkActive=\"active\"\n        routerLink=\"/job-submission\"\n    >New</a>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui container top_spaced \">\n  <div class=\"ui segment\">\n    <h1>InSite</h1>\n    <h3>FROST for DELWP</h3>\n    <p class=\"lead\">\n      This site alllows for basic CRUD operations to FROST.\n    </p>\n    <div class=\"ui button\">View tutorial</div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/job-submission/job-submission.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job-submission/job-submission.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui container\">\n  <div\n      class=\"ui raised segment\"\n      style=\"margin-top: 70px;\"\n  >\n    <h2>GLACIATOR/FROST Job Submission Form</h2>\n    <sui-message class=\"warning icon\">\n      <i class=\"exclamation triangle icon\"></i>\n      <div class=\"header\">Costs warning!</div>\n      <p>Submitting a job here comes with significant operational costs and computational overheads.</p>\n      <p>Be sure you know what you are doing.</p>\n    </sui-message>\n\n    <div class=\"ui divider\"></div>\n\n    <form class=\"ui form\" [formGroup]=\"submissionForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"ui two column stackable grid\">\n\n        <div class=\"column\">\n          <h3 class=\"ui header\">Job metadata</h3>\n\n          <div class=\"grouped fields\">\n            <div class=\"required field\" [ngClass]=\"{ 'error': submitted && f.submitter_name.errors }\">\n              <label>Your Name</label>\n              <input\n                  formControlName=\"submitter_name\"\n                  type=\"text\"\n\n              >\n            </div>\n\n            <div class=\"required field\" [ngClass]=\"{ 'error': submitted && f.submitter_email.errors }\">\n              <label>Email</label>\n              <input formControlName=\"submitter_email\"\n                  type=\"email\"\n              >\n            </div>\n          </div>\n\n          <div class=\"required field\" [ngClass]=\"{ 'error': submitted && f.descr.errors }\">\n            <label for=\"descr\">Description</label>\n            <textarea\n                formControlName=\"descr\"\n            ></textarea>\n          </div>\n\n\n        </div>\n        <div class=\"column\">\n<h3 class=\"ui header\">Parameters</h3>\n\n<div class=\"required field\" [ngClass]=\"{ 'error': submitted && f.name.errors }\">\n  <label>Job Name</label>\n  <input\n      formControlName=\"name\"\n      type=\"text\"\n\n  >\n</div>\n\n            <div class=\"required field\">\n              <label><input type=\"checkbox\"\n                  class=\"toggle\"\n                  formControlName=\"harvesting_on\"\n              /> Harvesting</label>\n            </div>\n\n          <div class=\"grouped required fields\" [ngClass]=\"{ 'errors': submitted && f.regsim_duration.errors }\">\n            <label for=\"regsim_duration\">Simulation time (Years):</label>\n\n            <div class=\"field\">\n              <input type=\"radio\"\n                  class=\"toggle\"\n                  value=\"20\"\n                  formControlName=\"regsim_duration\"\n              /> 25\n            </div>\n            <div class=\"field\">\n              <input type=\"radio\"\n                  class=\"toggle\"\n                  value=\"50\"\n                  formControlName=\"regsim_duration\"\n              /> 50\n            </div>\n          </div>\n\n          <div class=\"grouped required fields\" [ngClass]=\"{ 'errors': submitted && f.num_replicates.errors }\">\n            <label for=\"num_replicates\">Replicates:</label>\n\n            <div class=\"field\">\n              <input type=\"radio\"\n                  class=\"toggle\"\n                  value=\"10\"\n                  formControlName=\"num_replicates\"\n              /> 10\n            </div>\n            <div class=\"field\">\n              <input type=\"radio\"\n                  class=\"toggle\"\n                  value=\"25\"\n                  formControlName=\"num_replicates\"\n              /> 25\n            </div>\n            <div class=\"field\">\n              <input type=\"radio\"\n                  class=\"toggle\"\n                  value=\"50\"\n                  formControlName=\"num_replicates\"\n              /> 50\n            </div>\n          </div>\n\n          <div class=\"required field\" [ngClass]=\"{ 'error': submitted && f.fuel_machine_kind.errors }\">\n            <label for=\"fuel_machine_kind_select\">Fuel Machine: </label>\n            <sui-select\n                class=\"selection\"\n                formControlName=\"fuel_machine_kind\"\n                [options]=\"fuel_options\"\n                labelField=\"label\"\n                [isSearchable]=\"searchable\"\n                [isDisabled]=\"disabled\"\n                #fuel_select\n            >\n              <sui-select-option\n                  *ngFor=\"let option of fuel_select.filteredOptions\"\n                  [value]=\"option\"\n              >\n              </sui-select-option>\n            </sui-select>\n          </div>\n\n          <div class=\"required field\" [ngClass]=\"{ 'error': submitted && f.weather_machine_kind.errors }\">\n            <label for=\"weather_machine_kind_select\">Weather Machine: </label>\n            <sui-select\n              class=\"selection\"\n              formControlName=\"weather_machine_kind\"\n              [options]=\"weather_options\"\n              labelField=\"label\"\n              [isSearchable]=\"searchable\"\n              [isDisabled]=\"disabled\"\n              #weather_select\n          >\n            <sui-select-option\n                *ngFor=\"let option of weather_select.filteredOptions\"\n                [value]=\"option\"\n            >\n            </sui-select-option>\n          </sui-select>\n          </div>\n\n          <div class=\"required field\" [ngClass]=\"{ 'error': submitted && f.planburn_target_perc.errors }\">\n            <label>Burn Target (Percentage per Year)</label>\n            <input\n                type=\"text\"\n                formControlName=\"planburn_target_perc\"\n                placeholder=\"%\"\n            >\n          </div>\n        </div>\n      </div>\n\n      <div class=\"required field\" [ngClass]=\"{ 'error': submitted && f.acceptTerms.errors }\">\n        <div class=\"ui checkbox\">\n          <input\n              formControlName=\"acceptTerms\"\n              type=\"checkbox\"\n              tabindex=\"0\"\n              #acceptTerms\n          >\n          <label>I agree to the Terms and Conditions</label>\n        </div>\n      </div>\n\n      <div\n          class=\"ui primary submit button\"\n          (click)=\"onSubmit($event)\"\n      >Submit</div>\n      <div class=\"ui reset button\" (click)=\"onReset()\">Reset</div>\n      <div class=\"ui clear button\">Clear</div>\n    </form>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/job/job.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job/job.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>job works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/jobs.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/jobs.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui top_spaced container\">\n\n  <div\n      class=\"ui top attached segment\"\n      style=\"margin-top: 70px;\"\n  >\n    <table class=\"ui very basic table\">\n      <thead>\n        <tr>\n          <th class=\"collapsing\"></th>\n          <th>Date</th>\n          <th>Job Name</th>\n          <th>Contact</th>\n          <th>Status</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n            *ngFor=\"let job of jobs\"\n            (click)=\"selectJob(job)\"\n            class=\"selectable_row\"\n        >\n\n          <td class=\"collapsing\"><i class=\"ui blue info circle icon\"></i> </td>\n          <td>{{ job.submission_time | date }}</td>\n          <td>{{ job.name }}</td>\n          <td> {{ job.submitter_email }}</td>\n          <td>\n            <div class=\"\" *ngIf=\"job.status == 1\">New</div>\n            <div class=\"\" *ngIf=\"job.status == 2\">Running Simulations</div>\n            <div class=\"\" *ngIf=\"job.status == 3\">Running Post-Processing</div>\n            <div class=\"\" *ngIf=\"job.status == 4\">Failed</div>\n            <div class=\"\" *ngIf=\"job.status == 5\">Complete</div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div class=\"ui raised attached segment\"><p>Found {{ jobs.length }} jobs.</p></div>\n\n    <div\n        class=\"ui raised bottom attached segment\"\n        *ngIf=\"selectedJob\"\n    >\n      <div class=\"ui header\">\n        {{selectedJob.uuid}}\n      </div>\n      <div class=\"ui segment\">\n        <h4 class=\"ui header\">User: {{selectedJob.submitter_name}}</h4>\n\n        <p class=\"card-text\">\n          {{selectedJob.descr}}\n        </p>\n        <p>Submitted at: {{ selectedJob.submission_time | date}}</p>\n        <p>Submitted by: {{ selectedJob.submitter_name }}</p>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- {{ jobs | json }} -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/jobstate/jobstate.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jobstate/jobstate.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>jobstate works!</p>\n");

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

/***/ "./src/app/GlaciatorParameters.ts":
/*!****************************************!*\
  !*** ./src/app/GlaciatorParameters.ts ***!
  \****************************************/
/*! exports provided: GlaciatorParameters, TimeframeOptions, ReplicateOptions, WeatherMachineKind, FuelMachineKind, WebJobStatus, glaciator_parameters_example */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlaciatorParameters", function() { return GlaciatorParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeframeOptions", function() { return TimeframeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplicateOptions", function() { return ReplicateOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherMachineKind", function() { return WeatherMachineKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelMachineKind", function() { return FuelMachineKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebJobStatus", function() { return WebJobStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glaciator_parameters_example", function() { return glaciator_parameters_example; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class GlaciatorParameters {
    constructor(fd) {
        console.log(fd);
    }
}
var TimeframeOptions;
(function (TimeframeOptions) {
    TimeframeOptions[TimeframeOptions["TWENTY"] = 20] = "TWENTY";
    TimeframeOptions[TimeframeOptions["FIFTY"] = 50] = "FIFTY";
})(TimeframeOptions || (TimeframeOptions = {}));
var ReplicateOptions;
(function (ReplicateOptions) {
    ReplicateOptions[ReplicateOptions["TEN"] = 10] = "TEN";
    ReplicateOptions[ReplicateOptions["TWENTY_FIVE"] = 25] = "TWENTY_FIVE";
    ReplicateOptions[ReplicateOptions["FIFTY"] = 50] = "FIFTY";
})(ReplicateOptions || (ReplicateOptions = {}));
var WeatherMachineKind;
(function (WeatherMachineKind) {
    WeatherMachineKind[WeatherMachineKind["Interpol"] = 1] = "Interpol";
    WeatherMachineKind[WeatherMachineKind["NarclimObserved"] = 2] = "NarclimObserved";
    WeatherMachineKind[WeatherMachineKind["NarclimFuture"] = 3] = "NarclimFuture";
})(WeatherMachineKind || (WeatherMachineKind = {}));
var FuelMachineKind;
(function (FuelMachineKind) {
    FuelMachineKind[FuelMachineKind["InvexpWithLandis"] = 1] = "InvexpWithLandis";
    FuelMachineKind[FuelMachineKind["NarclimObservedWithLandis"] = 2] = "NarclimObservedWithLandis";
    FuelMachineKind[FuelMachineKind["NarclimFutureWithLandis"] = 3] = "NarclimFutureWithLandis";
})(FuelMachineKind || (FuelMachineKind = {}));
var WebJobStatus;
(function (WebJobStatus) {
    WebJobStatus[WebJobStatus["New"] = 1] = "New";
    WebJobStatus[WebJobStatus["RunningSimulations"] = 2] = "RunningSimulations";
    WebJobStatus[WebJobStatus["RunningPostProcessing"] = 3] = "RunningPostProcessing";
    WebJobStatus[WebJobStatus["Failed"] = 4] = "Failed";
    WebJobStatus[WebJobStatus["Completed"] = 5] = "Completed";
})(WebJobStatus || (WebJobStatus = {}));
const glaciator_parameters_example = {
    // Schema by Dan
    descr: "Example only; a place holder",
    name: "DUMMY FROST RUN",
    uuid: "3c92af22-0b19-44ce-9c43-ca22cda9723b",
    submitter_name: "No-one",
    submission_time: "Friday January 31 2020",
    submitter_email: "anthony.rawlins@unimelb.edu.au",
    weather_machine_kind: WeatherMachineKind.Interpol.valueOf(),
    fuel_machine_kind: FuelMachineKind.InvexpWithLandis.valueOf(),
    planburn_target_perc: 0,
    regsim_duration: TimeframeOptions.FIFTY.valueOf(),
    num_replicates: ReplicateOptions.FIFTY.valueOf(),
    harvesting_on: false
};


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
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobs/jobs.component */ "./src/app/jobs/jobs.component.ts");
/* harmony import */ var _job_submission_job_submission_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./job-submission/job-submission.component */ "./src/app/job-submission/job-submission.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");






const routes = [
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: "job-submission", component: _job_submission_job_submission_component__WEBPACK_IMPORTED_MODULE_4__["JobSubmissionComponent"] },
    { path: "jobs", component: _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_3__["JobsComponent"] },
    { path: "", pathMatch: "full", redirectTo: "home" }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'INSITE';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jobs/jobs.component */ "./src/app/jobs/jobs.component.ts");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./job/job.component */ "./src/app/job/job.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _job_submission_job_submission_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./job-submission/job-submission.component */ "./src/app/job-submission/job-submission.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _jobstate_jobstate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./jobstate/jobstate.component */ "./src/app/jobstate/jobstate.component.ts");







// import { NgxDatatableModule } from '@swimlane/ngx-datatable';








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_7__["JobsComponent"],
            _job_job_component__WEBPACK_IMPORTED_MODULE_8__["JobComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
            _job_submission_job_submission_component__WEBPACK_IMPORTED_MODULE_11__["JobSubmissionComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _jobstate_jobstate_component__WEBPACK_IMPORTED_MODULE_13__["JobstateComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            // NgxDatatableModule,
            ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__["SuiModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");




// const host = 'localhost';
// const host = 'insite.lightning.deepblack.cloud';
const host = 'insite.dss.cloud.bushfirebehaviour.net.au';
// const port = ':8181';
const port = '';
const protocol = 'https';
let DataService = class DataService {
    constructor() {
        this.getJobs = () => {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
                this.socket.emit('list-jobs', (ack) => {
                    console.log(ack);
                });
                this.socket.on('jobs-list', (jobdata) => {
                    console.log(jobdata);
                    observer.next(jobdata);
                });
            });
        };
        this.createJob = (formdata) => {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
                this.socket.emit('submission', formdata, (ack) => {
                    console.log(ack);
                    this.temp = null;
                });
                this.socket.on('validation-error', (ve) => {
                    console.log(ve);
                    observer.next(ve);
                });
                this.socket.on('insertion-error', (ie) => {
                    console.log(ie);
                    observer.next(ie);
                });
            });
        };
        this.getData = () => {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
                this.socket.on('job', (job) => {
                    observer.next(job);
                });
            });
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default.a.connect(`${protocol}://${host}${port}`);
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nfooter {\n    margin-top: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.nav-item{\n    padding:2px;\n    margin-left: 7px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5uYXYtaXRlbXtcbiAgICBwYWRkaW5nOjJweDtcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xufVxuIl19 */");

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


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top_spaced {\n    margin-top: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3Bfc3BhY2VkIHtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/job-submission/job-submission.component.css":
/*!*************************************************************!*\
  !*** ./src/app/job-submission/job-submission.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi1zdWJtaXNzaW9uL2pvYi1zdWJtaXNzaW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/job-submission/job-submission.component.ts":
/*!************************************************************!*\
  !*** ./src/app/job-submission/job-submission.component.ts ***!
  \************************************************************/
/*! exports provided: JobSubmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobSubmissionComponent", function() { return JobSubmissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../GlaciatorParameters */ "./src/app/GlaciatorParameters.ts");






// import { MustMatch } from '../helpers/must-match.validator';

let JobSubmissionComponent = class JobSubmissionComponent {
    constructor(router, dataService, formBuilder) {
        this.router = router;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.weather_options = [
            { option: _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_6__["WeatherMachineKind"].Interpol, label: "Interpolated" },
            { option: _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_6__["WeatherMachineKind"].NarclimFuture, label: "NARCLIM Future" },
            { option: _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_6__["WeatherMachineKind"].NarclimObserved, label: "NARCLIM Observed" }
        ];
        this.fuel_options = [
            { option: _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_6__["FuelMachineKind"].InvexpWithLandis.valueOf(), label: "Inverse Exponential with LANDIS" },
            { option: _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_6__["FuelMachineKind"].NarclimFutureWithLandis.valueOf(), label: "NARCLIM Future with LANDIS" },
            { option: _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_6__["FuelMachineKind"].NarclimObservedWithLandis.valueOf(), label: "NARCLIM Observed with LANDIS" },
        ];
        this.timeframe_options = [
            { option: _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_6__["TimeframeOptions"].TWENTY, value: _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_6__["TimeframeOptions"].TWENTY.valueOf() },
            { option: _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_6__["TimeframeOptions"].FIFTY, value: _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_6__["TimeframeOptions"].FIFTY.valueOf() },
        ];
        this.submitted = false;
        this.acceptTerms = false;
    }
    ngOnInit() {
        this.submissionForm = this.formBuilder.group({
            submitter_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            submitter_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            descr: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            planburn_target_perc: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)
                ]],
            weather_machine_kind: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(3)
                ]],
            fuel_machine_kind: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(3)]],
            num_replicates: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)
                ]
            ],
            regsim_duration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            harvesting_on: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]
        });
        this.job = _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_6__["glaciator_parameters_example"]; // Default Form values
        this.job.uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
    }
    get f() { return this.submissionForm.controls; }
    onSubmit(event) {
        this.submitted = true;
        // stop here if form is invalid
        if (this.submissionForm.invalid) {
            return;
        }
        console.log(this.submissionForm.value);
        let validated_data = this.submissionForm.value;
        // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(validated_data, null, 4));
        this.createJob(validated_data);
        this.dataService.createJob(this.job).subscribe((data) => {
            console.log('Complete:' + data);
            this.router.navigate(['/jobs']);
        }, (err) => {
            console.error('Error' + err);
        }, () => {
            console.log('Nothing?');
        });
    }
    createJob(data) {
        this.job.uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
        this.job.name = data.name;
        this.job.submission_time = new Date().toISOString();
        this.job.num_replicates = Number.parseInt(data.num_replicates);
        this.job.regsim_duration = Number.parseInt(data.regsim_duration);
        this.job.fuel_machine_kind = data.fuel_machine_kind.option;
        this.job.weather_machine_kind = data.weather_machine_kind.option;
        // this.job.parameters.weather = this.weather.option;
        this.job.planburn_target_perc = Number.parseInt(data.planburn_target_perc);
        this.job.harvesting_on = data.harvesting_on;
        this.job.submitter_name = data.submitter_name;
        this.job.submitter_email = data.submitter_email;
        this.job.descr = data.descr;
        console.log(this.job);
        // Resets the databindings
        // this.job = {id: null, name: "", description: "", email: ""}; // Better way?
    }
    onReset() {
        this.submitted = false;
        this.submissionForm.reset();
    }
};
JobSubmissionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
JobSubmissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-job-submission',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./job-submission.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/job-submission/job-submission.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./job-submission.component.css */ "./src/app/job-submission/job-submission.component.css")).default]
    })
], JobSubmissionComponent);



/***/ }),

/***/ "./src/app/job/job.component.css":
/*!***************************************!*\
  !*** ./src/app/job/job.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi9qb2IuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/job/job.component.ts":
/*!**************************************!*\
  !*** ./src/app/job/job.component.ts ***!
  \**************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JobComponent = class JobComponent {
    constructor() { }
    ngOnInit() {
    }
};
JobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-job',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./job.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/job/job.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./job.component.css */ "./src/app/job/job.component.css")).default]
    })
], JobComponent);



/***/ }),

/***/ "./src/app/jobs/jobs.component.css":
/*!*****************************************!*\
  !*** ./src/app/jobs/jobs.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selectable_row {\n    cursor: pointer;\n    background-color: rgba(255,255,255, 1.0);\n}\n.selectable_row:hover {\n    background-color: rgba(0,24,1250,0.02);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9qb2JzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxzQ0FBc0M7QUFDMUMiLCJmaWxlIjoic3JjL2FwcC9qb2JzL2pvYnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RhYmxlX3JvdyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIDEuMCk7XG59XG4uc2VsZWN0YWJsZV9yb3c6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwyNCwxMjUwLDAuMDIpO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/jobs/jobs.component.ts":
/*!****************************************!*\
  !*** ./src/app/jobs/jobs.component.ts ***!
  \****************************************/
/*! exports provided: JobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsComponent", function() { return JobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



let JobsComponent = class JobsComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.jobs = [];
        this.dataService.getJobs().subscribe((data) => {
            console.log(data);
            this.jobs.push(JSON.parse(data));
            // this.jobs.sort((a, b) => (a.task.progress > b.task.progress) ? -1 : 1);
        });
    }
    selectJob(job) {
        this.selectedJob = job;
    }
};
JobsComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
JobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jobs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jobs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/jobs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jobs.component.css */ "./src/app/jobs/jobs.component.css")).default]
    })
], JobsComponent);



/***/ }),

/***/ "./src/app/jobstate/jobstate.component.css":
/*!*************************************************!*\
  !*** ./src/app/jobstate/jobstate.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYnN0YXRlL2pvYnN0YXRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/jobstate/jobstate.component.ts":
/*!************************************************!*\
  !*** ./src/app/jobstate/jobstate.component.ts ***!
  \************************************************/
/*! exports provided: JobstateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobstateComponent", function() { return JobstateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JobstateComponent = class JobstateComponent {
    constructor() { }
    ngOnInit() {
    }
};
JobstateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jobstate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jobstate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/jobstate/jobstate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jobstate.component.css */ "./src/app/jobstate/jobstate.component.css")).default]
    })
], JobstateComponent);



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

module.exports = __webpack_require__(/*! /black/cloud/UOM/INSITE/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map