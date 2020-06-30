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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"ui container\">\n    <p class=\"small text \">© Copyright 2020 - University of Melbourne. All rights reserved.</p>\n  </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui main text container\">\n  <h1 class=\"ui header\">INSITE - The FROST Job Manager</h1>\n</div>\n\n<div\n    class=\"ui borderless main menu fixed\"\n    style=\"position: fixed; top: 0px; left: auto; z-index: 10;\"\n>\n  <div class=\"ui text container\">\n    <div class=\"header item\">\n      <img\n          class=\"logo\"\n          src=\"assets/insite.png\"\n          width=\"32\"\n          alt=\"\"\n      />\n      INSITE\n    </div>\n    <a\n        class=\"item\"\n        routerLink=\"/home\"\n        routerLinkActive=\"active\"\n    >Home</a>\n    <a\n        class=\"item\"\n        routerLink=\"/jobs\"\n        routerLinkActive=\"active\"\n    >Jobs</a>\n    <a\n        class=\"item\"\n        routerLinkActive=\"active\"\n        routerLink=\"/job-submission\"\n    >New</a>\n\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container top_spaced \">\n  <div class=\"ui segment\">\n    <h1>InSite</h1>\n    <h3>FROST for DELWP</h3>\n    <p class=\"lead\">\n      This site alllows for basic CRUD operations to FROST.\n    </p>\n    <div class=\"ui button\">View tutorial</div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/job-submission/job-submission.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/job-submission/job-submission.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\">\n  <div\n      class=\"ui raised segment\"\n      style=\"margin-top: 70px;\"\n  >\n    <h2>GLACIATOR/FROST Job Submission Form</h2>\n    <sui-message class=\"warning icon\">\n      <i class=\"exclamation triangle icon\"></i>\n      <h3 class=\"ui header\">Costs warning!</h3>\n      <div class=\"ui content\">\n        <p>Submitting a job here comes with significant operational costs and computational overheads.</p>\n        <p>Be sure you know what you are doing.</p>\n      </div>\n    </sui-message>\n\n    <div class=\"ui divider\"></div>\n\n    <form class=\"ui form\" [formGroup]=\"submissionForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"ui two column stackable grid\">\n\n        <div class=\"column\">\n          <h3 class=\"ui header\">Job metadata</h3>\n\n          <div class=\"grouped fields\">\n            <div class=\"required field\" [ngClass]=\"{ 'error': submitted && f.submitter_name.errors }\">\n              <label>Your Name</label>\n              <input\n                  formControlName=\"submitter_name\"\n                  type=\"text\"\n\n              >\n            </div>\n\n            <div class=\"required field\" [ngClass]=\"{ 'error': submitted && f.submitter_email.errors }\">\n              <label>Email</label>\n              <input formControlName=\"submitter_email\"\n                  type=\"email\"\n              >\n            </div>\n          </div>\n\n          <div class=\"required field\" [ngClass]=\"{ 'error': submitted && f.descr.errors }\">\n            <label for=\"descr\">Description</label>\n            <textarea\n                formControlName=\"descr\"\n            ></textarea>\n          </div>\n\n\n        </div>\n        <div class=\"column\">\n<h3 class=\"ui header\">Parameters</h3>\n\n<div class=\"required field\" [ngClass]=\"{ 'error': submitted && f.name.errors }\">\n  <label>Job Name</label>\n  <input\n      formControlName=\"name\"\n      type=\"text\"\n\n  >\n</div>\n\n            <div class=\"required field\">\n              <label><input type=\"checkbox\"\n                  class=\"toggle\"\n                  formControlName=\"harvesting_on\"\n              /> Harvesting</label>\n            </div>\n\n          <div class=\"grouped required fields\" [ngClass]=\"{ 'errors': submitted && f.regsim_duration.errors }\">\n            <label for=\"regsim_duration\">Simulation time (Years):</label>\n\n            <div class=\"field\">\n              <input type=\"radio\"\n                  class=\"toggle\"\n                  value=\"20\"\n                  formControlName=\"regsim_duration\"\n              /> 25\n            </div>\n            <div class=\"field\">\n              <input type=\"radio\"\n                  class=\"toggle\"\n                  value=\"50\"\n                  formControlName=\"regsim_duration\"\n              /> 50\n            </div>\n          </div>\n\n          <div class=\"grouped required fields\" [ngClass]=\"{ 'errors': submitted && f.num_replicates.errors }\">\n            <label for=\"num_replicates\">Replicates:</label>\n\n            <div class=\"field\">\n              <input type=\"radio\"\n                  class=\"toggle\"\n                  value=\"10\"\n                  formControlName=\"num_replicates\"\n              /> 10\n            </div>\n            <div class=\"field\">\n              <input type=\"radio\"\n                  class=\"toggle\"\n                  value=\"25\"\n                  formControlName=\"num_replicates\"\n              /> 25\n            </div>\n            <div class=\"field\">\n              <input type=\"radio\"\n                  class=\"toggle\"\n                  value=\"50\"\n                  formControlName=\"num_replicates\"\n              /> 50\n            </div>\n          </div>\n\n          <div class=\"required field\" [ngClass]=\"{ 'error': submitted && f.fuel_machine_kind.errors }\">\n            <label for=\"fuel_machine_kind_select\">Fuel Machine: </label>\n            <sui-select\n                class=\"selection\"\n                formControlName=\"fuel_machine_kind\"\n                [options]=\"fuel_options\"\n                labelField=\"label\"\n                [isSearchable]=\"searchable\"\n                [isDisabled]=\"disabled\"\n                #fuel_select\n            >\n              <sui-select-option\n                  *ngFor=\"let option of fuel_select.filteredOptions\"\n                  [value]=\"option\"\n              >\n              </sui-select-option>\n            </sui-select>\n          </div>\n\n          <div class=\"required field\" [ngClass]=\"{ 'error': submitted && f.weather_machine_kind.errors }\">\n            <label for=\"weather_machine_kind_select\">Weather Machine: </label>\n            <sui-select\n              class=\"selection\"\n              formControlName=\"weather_machine_kind\"\n              [options]=\"weather_options\"\n              labelField=\"label\"\n              [isSearchable]=\"searchable\"\n              [isDisabled]=\"disabled\"\n              #weather_select\n          >\n            <sui-select-option\n                *ngFor=\"let option of weather_select.filteredOptions\"\n                [value]=\"option\"\n            >\n            </sui-select-option>\n          </sui-select>\n          </div>\n\n          <div class=\"required field\" [ngClass]=\"{ 'error': submitted && f.planburn_target_perc.errors }\">\n            <label>Burn Target (Percentage per Year)</label>\n            <input\n                type=\"text\"\n                formControlName=\"planburn_target_perc\"\n                placeholder=\"%\"\n            >\n          </div>\n        </div>\n      </div>\n\n      <div class=\"required field\" [ngClass]=\"{ 'error': submitted && f.acceptTerms.errors }\">\n        <div class=\"ui checkbox\">\n          <input\n              formControlName=\"acceptTerms\"\n              type=\"checkbox\"\n              tabindex=\"0\"\n              #acceptTerms\n          >\n          <label>I agree to the Terms and Conditions</label>\n        </div>\n      </div>\n\n      <div\n          class=\"ui primary submit button\"\n          (click)=\"onSubmit($event)\"\n      >Submit</div>\n      <div class=\"ui reset button\" (click)=\"onReset()\">Reset</div>\n      <div class=\"ui clear button\">Clear</div>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/job/job.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/job/job.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>job works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/jobs/jobs.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/jobs/jobs.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui top_spaced container\">\n\n  <div\n      class=\"ui top attached segment\"\n      style=\"margin-top: 70px;\"\n  >\n    <table class=\"ui very basic table\">\n      <thead>\n        <tr>\n          <th class=\"collapsing\"></th>\n          <th>Date</th>\n          <th>Job Name</th>\n          <th>Contact</th>\n          <th>Status</th>\n        </tr>\n      </thead>\n      <tbody>\n\n        <tr\n            *ngFor=\"let qjob of queue\"\n            (click)=\"selectJob(qjob)\"\n            class=\"selectable_row\"\n        >\n\n          <td class=\"collapsing\"><i class=\"ui blue info circle icon\"></i> </td>\n          <td>{{ qjob.submission_time | date }}</td>\n          <td>{{ qjob.name }}</td>\n          <td><a href=\"mailto:{{qjob.submitter_email}}\">{{ qjob.submitter_name }}</a></td>\n          <td>\n            <div class=\"\">Queued</div>\n          </td>\n        </tr>\n\n\n        <tr\n            *ngFor=\"let job of jobs\"\n            (click)=\"selectJob(job)\"\n            class=\"selectable_row\"\n        >\n\n          <td class=\"collapsing\"><i class=\"ui blue info circle icon\"></i> </td>\n          <td>{{ job.submission_time | date }}</td>\n          <td>{{ job.name }}</td>\n          <td><a href=\"mailto:{{job.submitter_email}}\">{{ job.submitter_name }}</a></td>\n          <td>\n            <div class=\"\" *ngIf=\"job.status == 20\">Running Simulations</div>\n            <div class=\"\" *ngIf=\"job.status == 30\">Running Post-Processing</div>\n            <div class=\"\" *ngIf=\"job.status == 40\">Simulations Failed</div>\n            <div class=\"\" *ngIf=\"job.status == 50\">Post-processing Failed</div>\n            <div class=\"\" *ngIf=\"job.status == 100\">Complete</div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div class=\"ui raised attached segment\"><p>Found {{ jobs.length }} jobs ({{ queue.length}} in queue).</p></div>\n\n    <div\n        class=\"ui bottom attached segment\"\n        *ngIf=\"selectedJob\"\n    >\n    <div class=\"ui raised segment\">\n\n\n      <h3 class=\"ui header\">\n        {{selectedJob.name}}\n      </h3>\n      <h5 class=\"ui header\">{{selectedJob.uuid}}</h5>\n        <h4 class=\"ui header\">User: {{selectedJob.submitter_name}}</h4>\n\n        <p class=\"card-text\">\n          {{selectedJob.descr}}\n        </p>\n\n        <div class=\"ui attached segment\">\n          <h3 class=\"header\">Job Parameters</h3>\n          <table>\n            <tbody>\n              <tr>\n                <td>Fuel Machine</td>\n                <td>\n                  <div class=\"\" *ngIf=\"selectedJob.fuel_machine_kind == 1\">InvexpWithLandis</div>\n                  <div class=\"\" *ngIf=\"selectedJob.fuel_machine_kind == 2\">NarclimObservedWithLandis</div>\n                  <div class=\"\" *ngIf=\"selectedJob.fuel_machine_kind == 3\">NarclimFutureWithLandis</div>\n                </td>\n              </tr>\n              <tr>\n                <td>Weather Machine</td>\n                <td>\n                  <div class=\"\" *ngIf=\"selectedJob.weather_machine_kind == 1\">Interpol</div>\n                  <div class=\"\" *ngIf=\"selectedJob.weather_machine_kind == 2\">NarclimObserved</div>\n                  <div class=\"\" *ngIf=\"selectedJob.weather_machine_kind == 3\">NarclimFuture</div>\n                </td>\n              </tr>\n              <tr>\n                <td>Harvesting</td>\n                <td>{{selectedJob.harvesting_on}}</td>\n              </tr>\n              <tr>\n                <td>Replicates</td>\n                <td>{{selectedJob.num_replicates}}</td>\n              </tr>\n              <tr>\n                <td>Simulation Duration</td>\n                <td>{{selectedJob.regsim_duration}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"ui attached stackable compact steps\">\n\n          <div class=\"step\"  [ngClass]=\"selectedJob.status == 1 ? 'active' : ''\">\n            <i class=\"cloud upload icon\"></i>\n            <div class=\"content\">\n              <div class=\"title\">Submission</div>\n              <div class=\"description\">\n                <p>Submitted at: {{ selectedJob.submission_time | date}}</p>\n                <p>Submitted by: {{ selectedJob.submitter_name }}</p>\n              </div>\n            </div>\n          </div>\n\n          <!-- /* Active if running simulations */ //-->\n          <div class=\"step\" *ngIf=\"selectedJob.simulation_start_time\" [ngClass]=\"selectedJob.status == 2 ? 'active' : ''\">\n            <i class=\"microchip icon\"></i>\n            <div class=\"content\">\n              <div class=\"title\">Simulation / Compute</div>\n              <div class=\"description\">\n                <p>Started: {{ selectedJob.simulation_start_time }}</p>\n                <p *ngIf=\"selectedJob.status > 2\"><a href=\"\\\\{{ selectedJob.simulation_results_dir_path }}\">Simulation results</a></p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"disabled step\" *ngIf=\"!selectedJob.simulation_start_time\">\n            <i class=\"microchip icon\"></i>\n            <div class=\"content\">\n              <div class=\"title\">Simulation / Compute</div>\n            </div>\n          </div>\n\n          <!-- /* Active if running post-processing */ //-->\n          <div class=\"step\" *ngIf=\"selectedJob.post_proc_start_time\"  [ngClass]=\"selectedJob.status == 3 ? 'active' : ''\">\n            <i class=\"chart bar icon\"></i>\n            <div class=\"content\">\n              <div class=\"title\">Post-Processing</div>\n            <div class=\"description\">\n              <p>Started: {{ selectedJob.post_proc_start_time }}</p>\n              <p *ngIf=\"selectedJob.status > 3\"><a href=\"\\\\{{ selectedJob.post_proc_results_dir_path }}\">PP results</a></p>\n            </div>\n          </div>\n          </div>\n\n          <div class=\"disabled step\" *ngIf=\"!selectedJob.post_proc_start_time\">\n            <i class=\"chart bar icon\"></i>\n            <div class=\"content\">\n              <div class=\"title\">Post-Processing</div>\n          </div>\n      </div>\n\n\n          <div class=\"step\" *ngIf=\"selectedJob.job_failure_time\" [ngClass]=\"selectedJob.status == 5 ? 'active' : ''\">\n            <i class=\"red bug icon\"></i>\n            <div class=\"content\">\n              <div class=\"title\">Error</div>\n            <div class=\"description\">\n              <p>Error occured: {{ selectedJob.job_failure_time }}</p>\n              <p *ngIf=\"selectedJob.status == 5\">{{ selectedJob.job_failure_error_message }}</p>\n            </div>\n          </div>\n          </div>\n\n          <div class=\"disabled step\" *ngIf=\"!selectedJob.job_failure_time\">\n            <i class=\"bug icon\"></i>\n            <div class=\"content\">\n              <div class=\"title\">No Errors</div>\n          </div>\n          </div>\n\n\n        </div>\n\n\n\n\n      </div>\n\n\n\n    </div>\n  </div>\n</div>\n\n\n<!-- {{ jobs | json }} -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/jobstate/jobstate.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/jobstate/jobstate.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>jobstate works!</p>\n"

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
    WebJobStatus[WebJobStatus["New"] = 10] = "New";
    WebJobStatus[WebJobStatus["RunningSimulations"] = 20] = "RunningSimulations";
    WebJobStatus[WebJobStatus["RunningPostProcessing"] = 30] = "RunningPostProcessing";
    WebJobStatus[WebJobStatus["SimulationFailed"] = 40] = "SimulationFailed";
    WebJobStatus[WebJobStatus["PostProcessingFailed"] = 50] = "PostProcessingFailed";
    WebJobStatus[WebJobStatus["Completed"] = 100] = "Completed";
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _e_num_as_string_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./e-num-as-string.pipe */ "./src/app/e-num-as-string.pipe.ts");







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
            _jobstate_jobstate_component__WEBPACK_IMPORTED_MODULE_13__["JobstateComponent"],
            _e_num_as_string_pipe__WEBPACK_IMPORTED_MODULE_14__["ENumAsStringPipe"]
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

/***/ "./src/app/e-num-as-string.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/e-num-as-string.pipe.ts ***!
  \*****************************************/
/*! exports provided: ENumAsStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENumAsStringPipe", function() { return ENumAsStringPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ENumAsStringPipe = class ENumAsStringPipe {
    transform(value, enumType) {
        return enumType[value].split(/(?=[A-Z])/).join().replace(",", " ");
        ;
    }
};
ENumAsStringPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'eNumAsString'
    })
], ENumAsStringPipe);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nfooter {\n    margin-top: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuIl19 */"

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
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.nav-item{\n    padding:2px;\n    margin-left: 7px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5uYXYtaXRlbXtcbiAgICBwYWRkaW5nOjJweDtcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xufVxuIl19 */"

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
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top_spaced {\n    margin-top: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3Bfc3BhY2VkIHtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuIl19 */"

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
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/job-submission/job-submission.component.css":
/*!*************************************************************!*\
  !*** ./src/app/job-submission/job-submission.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi1zdWJtaXNzaW9uL2pvYi1zdWJtaXNzaW9uLmNvbXBvbmVudC5jc3MifQ== */"

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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../GlaciatorParameters */ "./src/app/GlaciatorParameters.ts");




// import { MustMatch } from '../helpers/must-match.validator';

let JobSubmissionComponent = class JobSubmissionComponent {
    constructor(router, dataService, formBuilder) {
        this.router = router;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.weather_options = [
            { option: _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_4__["WeatherMachineKind"].Interpol, label: "Interpolated" },
            { option: _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_4__["WeatherMachineKind"].NarclimFuture, label: "NARCLIM Future" },
            { option: _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_4__["WeatherMachineKind"].NarclimObserved, label: "NARCLIM Observed" }
        ];
        this.fuel_options = [
            { option: _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_4__["FuelMachineKind"].InvexpWithLandis.valueOf(), label: "Inverse Exponential with LANDIS" },
            { option: _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_4__["FuelMachineKind"].NarclimFutureWithLandis.valueOf(), label: "NARCLIM Future with LANDIS" },
            { option: _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_4__["FuelMachineKind"].NarclimObservedWithLandis.valueOf(), label: "NARCLIM Observed with LANDIS" },
        ];
        this.timeframe_options = [
            { option: _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_4__["TimeframeOptions"].TWENTY, value: _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_4__["TimeframeOptions"].TWENTY.valueOf() },
            { option: _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_4__["TimeframeOptions"].FIFTY, value: _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_4__["TimeframeOptions"].FIFTY.valueOf() },
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
        this.job = _GlaciatorParameters__WEBPACK_IMPORTED_MODULE_4__["glaciator_parameters_example"]; // Default Form values
        this.job.uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
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
        this.job.uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
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
JobSubmissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-job-submission',
        template: __webpack_require__(/*! raw-loader!./job-submission.component.html */ "./node_modules/raw-loader/index.js!./src/app/job-submission/job-submission.component.html"),
        styles: [__webpack_require__(/*! ./job-submission.component.css */ "./src/app/job-submission/job-submission.component.css")]
    })
], JobSubmissionComponent);



/***/ }),

/***/ "./src/app/job/job.component.css":
/*!***************************************!*\
  !*** ./src/app/job/job.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi9qb2IuY29tcG9uZW50LmNzcyJ9 */"

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
        template: __webpack_require__(/*! raw-loader!./job.component.html */ "./node_modules/raw-loader/index.js!./src/app/job/job.component.html"),
        styles: [__webpack_require__(/*! ./job.component.css */ "./src/app/job/job.component.css")]
    })
], JobComponent);



/***/ }),

/***/ "./src/app/jobs/jobs.component.css":
/*!*****************************************!*\
  !*** ./src/app/jobs/jobs.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selectable_row {\n    cursor: pointer;\n    background-color: rgba(255,255,255, 1.0);\n}\n.selectable_row:hover {\n    background-color: rgba(0,24,1250,0.2) !important;\n}\n.ui.steps .step.disabled {\n  background-color: rgba(234,234,234,1.0) !important;\n}\n.ui.steps .step,\n.ui.steps .step.active {\n  background-color: rgba(255,255,255,1.0) !important;\n}\n.ui.steps .step.active .icon {\n  color: rgba(73, 128, 182, 1) !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9qb2JzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxnREFBZ0Q7QUFDcEQ7QUFDQTtFQUNFLGtEQUFrRDtBQUNwRDtBQUNBOztFQUVFLGtEQUFrRDtBQUNwRDtBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDIiwiZmlsZSI6InNyYy9hcHAvam9icy9qb2JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0YWJsZV9yb3cge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LCAxLjApO1xufVxuLnNlbGVjdGFibGVfcm93OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMjQsMTI1MCwwLjIpICFpbXBvcnRhbnQ7XG59XG4udWkuc3RlcHMgLnN0ZXAuZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNCwyMzQsMjM0LDEuMCkgIWltcG9ydGFudDtcbn1cbi51aS5zdGVwcyAuc3RlcCxcbi51aS5zdGVwcyAuc3RlcC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEuMCkgIWltcG9ydGFudDtcbn1cbi51aS5zdGVwcyAuc3RlcC5hY3RpdmUgLmljb24ge1xuICBjb2xvcjogcmdiYSg3MywgMTI4LCAxODIsIDEpICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

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


let JobsComponent = class JobsComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.jobs = [];
        this.queue = [];
    }
    ngOnInit() {
        this.dataService.getJobs().subscribe((data) => {
            console.log(data);
            this.jobs = data; // TODO sort ordering (by status?)
        });
        this.dataService.getQueue().subscribe((data) => {
            console.log(data);
            this.queue = data;
        });
    }
    selectJob(job) {
        this.selectedJob = job;
    }
};
JobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jobs',
        template: __webpack_require__(/*! raw-loader!./jobs.component.html */ "./node_modules/raw-loader/index.js!./src/app/jobs/jobs.component.html"),
        styles: [__webpack_require__(/*! ./jobs.component.css */ "./src/app/jobs/jobs.component.css")]
    })
], JobsComponent);



/***/ }),

/***/ "./src/app/jobstate/jobstate.component.css":
/*!*************************************************!*\
  !*** ./src/app/jobstate/jobstate.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYnN0YXRlL2pvYnN0YXRlLmNvbXBvbmVudC5jc3MifQ== */"

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
        template: __webpack_require__(/*! raw-loader!./jobstate.component.html */ "./node_modules/raw-loader/index.js!./src/app/jobstate/jobstate.component.html"),
        styles: [__webpack_require__(/*! ./jobstate.component.css */ "./src/app/jobstate/jobstate.component.css")]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /black/cloud/UOM/INSITE/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map