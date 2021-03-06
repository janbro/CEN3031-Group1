(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.5.0/css/all.css\" integrity=\"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU\" crossorigin=\"anonymous\">\n<app-navigation></app-navigation>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'parking-picker-ui';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/material.module */ "./src/app/core/material.module.ts");
/* harmony import */ var ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mapbox-gl */ "./node_modules/ngx-mapbox-gl/fesm5/ngx-mapbox-gl.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _pipes_time_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/time.pipe */ "./src/app/pipes/time.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', component: _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"], data: { title: 'Map Component' } },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ParkDialogComponent"],
                _pipes_time_pipe__WEBPACK_IMPORTED_MODULE_15__["TimePipe"]
            ],
            entryComponents: [
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ParkDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_9__["NgxMapboxGLModule"].withConfig({
                    accessToken: 'pk.eyJ1IjoiY2hlbHNlYWNhbmRlbG9yYSIsImEiOiJjam5ieWVpMDcwOTRxM3BvbDlqZGx4YXltIn0.v0C5haf-TS-noMhWkdTTYQ'
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes),
                _core_material_module__WEBPACK_IMPORTED_MODULE_8__["CustomMaterialModule"]
            ],
            providers: [
                _services_backend_service__WEBPACK_IMPORTED_MODULE_12__["BackendService"],
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_13__["MAT_DIALOG_DATA"], useValue: {} },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_13__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: false } }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/material.module.ts":
/*!*****************************************!*\
  !*** ./src/app/core/material.module.ts ***!
  \*****************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"]],
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.component.css":
/*!*********************************************!*\
  !*** ./src/app/dialog/dialog.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".park-option {\n    width: 100%;\n    padding-bottom: 3px;\n}"

/***/ }),

/***/ "./src/app/dialog/dialog.component.html":
/*!**********************************************!*\
  !*** ./src/app/dialog/dialog.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"margin-bottom:0px;\" mat-dialog-title>What space did you park in?</h2>\n<h5 class=\"mt-1\" *ngIf=\"errMsg\" style=\"color: red;font-size:medium;margin-bottom: 0px;\" mat-dialog-title> {{errMsg}} </h5>\n<mat-dialog-content>\n    <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"decals\" multiple required>\n        <mat-radio-button class=\"park-option\" *ngFor=\"let decal of decalList\" [value]=\"decal.value\" [checked]=\"decalList[0] == decal\">{{decal.name}}</mat-radio-button>\n    </mat-radio-group>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Cancel</button>\n  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n  <button mat-button (click)=\"onParkClick()\">Park</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/*! exports provided: ParkDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkDialogComponent", function() { return ParkDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ParkDialogComponent = /** @class */ (function () {
    function ParkDialogComponent(dialogRef, data, backendService, snackBar) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.backendService = backendService;
        this.snackBar = snackBar;
        this.lut = [{ name: 'Green', value: 'green' },
            { name: 'Park & Ride', value: 'parkNRide' },
            { name: 'Red 1', value: 'red1' },
            { name: 'Red 3', value: 'red3' },
            { name: 'Brown', value: 'brown' },
            { name: 'Disabled', value: 'handicap' },
            { name: 'Motorcycle/Scooter', value: 'scooter' },
            { name: 'Gold', value: 'gold' },
            { name: 'Silver', value: 'silver' },
            { name: 'Official Business', value: 'business' },
            { name: 'Orange', value: 'orange' },
            { name: 'Blue', value: 'blue' },
            { name: 'Medical Resident', value: 'medRes' },
            { name: 'Staff Commuter', value: 'staffComm' },
            { name: 'Disabled', value: 'disabled' },
            { name: 'Carpool', value: 'carpool' },
            { name: 'Motorcycle/Scooter', value: 'scooter' },
            { name: 'Orange/Blue', value: 'orangeBlue' },
            { name: 'Any', value: 'any' }];
        this.decalList = [];
        this.decals = null;
        this.errMsg = '';
        // Don't open modal if no garage data
        if (data.garageDecals === undefined) {
            return;
        }
        this.selectedGarage = data.garageDecals;
        // Iterate through decals and retrieve user friendly names
        data.garageDecals.decals.forEach(function (ele, ind) {
            if (data.permissions.length === 0 || data.permissions.includes(ele.name)) {
                _this.lut.some(function (d) {
                    if (d.value === ele.name) {
                        _this.decalList.push(d);
                        return true;
                    }
                });
            }
        });
        this.decalList.sort(function (a, b) { return a.name < b.name ? -1 : a.name === b.name ? 0 : 1; });
    }
    // Update decal list when user changes decal settings
    ParkDialogComponent.prototype.ngOnChanges = function (changes) {
        if (changes.permissions) {
            if (changes.permissions.currentValue.length > 0) {
                this.decalList = changes.permission;
                this.decalList.sort(function (a, b) { return a.name < b.name ? -1 : a.name === b.name ? 0 : 1; });
            }
        }
    };
    // On click handler for park button
    ParkDialogComponent.prototype.onParkClick = function () {
        var _this = this;
        // Decal seletion required
        if (!this.decals) {
            this.errMsg = '*required';
            return false;
        }
        else {
            // Create request to update occupancy data in backend
            this.backendService.addOccupancy({ name: this.data.garageDecals.name, decal: this.decals, park: true }).subscribe(function (res) {
                if (typeof (Storage) !== 'undefined') {
                    localStorage.setItem('parked', JSON.stringify({
                        'garage': _this.selectedGarage,
                        'decal': { name: _this.data.garageDecals.name, decal: _this.decals, park: false },
                        'parked': false
                    }));
                    _this.snackBar.open('You have successfully parked!', '', {
                        duration: 2000,
                    });
                }
            });
            this.dialogRef.close();
            return true;
        }
    };
    ParkDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-park-dialog',
            styles: [__webpack_require__(/*! ./dialog.component.css */ "./src/app/dialog/dialog.component.css")],
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/dialog/dialog.component.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], ParkDialogComponent);
    return ParkDialogComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mgl-map {\n  height: 100vh;\n  width: 100vw;\n}\n\n.menu {\n  position: absolute;\n  padding: 8px;\n}\n\n.bigtext\n{\n  font-size:24px;\n  -webkit-text-stroke:1.5px;\n}\n\n.btn-primary {\n  background-color: rgb(0, 33, 165);\n  color: white;\n  border-radius: 5px;\n  width: 50%;\n  height: 30px;\n}\n\n.btn-secondary {\n  background-color: rgb(110, 135, 231);\n  color: white;\n  border-radius: 5px;\n  width: 75%;\n  height: 30px;\n}\n\n.disabled {\n  pointer-events: none;\n}"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mgl-map\n[style]=\"'mapbox://styles/chelseacandelora/cjp4ek7n13wq22ro23s7vf8fg'\"\n[zoom]=\"[13.6]\"\n[center]=\"[-82.3489, 29.6400]\"\n[cursorStyle]=\"cursorStyle\">\n<mgl-control mglNavigation></mgl-control>\n<mgl-geojson-source\n  id=\"points\"\n  [data]=\"points\">\n</mgl-geojson-source>\n<mgl-layer\n  id=\"points\"\n  source=\"points\"\n  type=\"symbol\"\n  [layout]=\"{\n    'icon-image': 'marker-carsnew',\n    'icon-allow-overlap': true\n  }\"\n  (click)=\"onClick($event)\"\n  (mouseEnter)=\"cursorStyle = 'pointer'\"\n  (mouseLeave)=\"cursorStyle = ''\">\n</mgl-layer>\n<mgl-popup\n  *ngIf=\"selectedPoint\"\n  [lngLat]=\"selectedPoint.geometry.coordinates\"\n  (close)=\"selectedPoint = null\" >\n  <div style=\"text-align:center;min-width:90px;\">\n    <span [innerHTML]=\"selectedPoint.properties.name\"></span>\n    <br>\n    <span [ngClass]=\"'bigtext'\" [style.color] = \"selectedPoint.properties.color\" [innerHTML]=\"selectedPoint.properties.capacity\" style=\"padding-left:10%;\">\n    </span>%\n    <br>\n    <button (click)=\"openAddFileDialog()\" class=\"btn btn-primary\" id=\"park-btn\" role=\"button\" aria-pressed=\"true\" *ngIf=\"!parked\">Park</button>\n    <button class=\"btn btn-secondary disabled\" id=\"park-btn\" role=\"button\" *ngIf=\"parked\"><s>Parked</s></button>\n  </div>\n</mgl-popup>\n</mgl-map>"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapComponent = /** @class */ (function () {
    function MapComponent(changeDetectorRef, http, backendService, dialog) {
        this.changeDetectorRef = changeDetectorRef;
        this.http = http;
        this.backendService = backendService;
        this.dialog = dialog;
        this.closed = true;
        this.garageSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dialogClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showPoints();
    }
    // Load in garage points
    MapComponent.prototype.showPoints = function () {
        var _this = this;
        this.backendService.getGaragesMapbox().subscribe(function (mapboxData) {
            _this.points = mapboxData;
        });
    };
    // Called to open park dialog
    MapComponent.prototype.openAddFileDialog = function () {
        var _this = this;
        // Make sure not to open more than one dialog at a time
        if (this.closed) {
            if (this.selectedPoint.properties.capacity === 100) {
                alert('Parking lot is full!');
            }
            else {
                this.closed = false;
                this.parkDialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ParkDialogComponent"], {
                    data: {
                        garageDecals: this.selectedGarage,
                        permissions: this.permissions
                    }
                });
                this.parkDialogRef.afterClosed().subscribe(function (event) {
                    // Reset reentrancy var
                    _this.closed = true;
                    _this.dialogClosed.emit();
                    _this.garageSelected.emit(_this.selectedGarage);
                });
            }
        }
    };
    // On user settings change update garage points on map
    MapComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.permissions) {
            this.selectedPoint = null;
            // If the user has decals selected
            if (changes.permissions.currentValue.length > 0) {
                this.backendService.getFilteredGaragesMapbox(this.permissions).subscribe(function (mapboxData) {
                    _this.points = mapboxData;
                });
            }
            else {
                this.showPoints();
            }
        }
    };
    // Set the selected garage when user clicks point
    MapComponent.prototype.onClick = function (evt) {
        var _this = this;
        this.selectedPoint = null;
        this.changeDetectorRef.detectChanges();
        this.selectedPoint = evt.features[0];
        // Get garage data from backend
        this.backendService.getGarage(this.selectedPoint.properties.id).subscribe(function (garage) {
            _this.selectedGarage = garage;
            _this.garageSelected.emit(_this.selectedGarage);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "parked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "permissions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "garageSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "dialogClosed", void 0);
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")],
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.example-container {\n  height: 100%;\n}\n.mat-sidenav {\n  padding: 30px;\n  width: 240px;\n}\n.blue\n{\n  background-color: rgb(0, 82, 155);\n}\n.orange\n{\n  color: rgb(188, 88, 26);\n}\n.placeholder\n{\n  color: rgb(0, 82, 155);\n}\n.orangeline\n{\n  background-color: rgb(188, 88, 26);\n  height: 5px;\n}\n.center{\n  background:url('/assets/uf-parking.svg');\n  background-size:cover;\n}\n.btn-warn {\n  background-color: rgb(185, 44, 44);\n  border-color: rgb(185, 44, 44);\n  color: white;\n  height: 200px;\n  border-radius: 15px;\n  padding-left: 40px;\n  padding-right: 40px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  pointer-events: all;\n  cursor: pointer;\n}\n.btn-float {\n  position: absolute;\n  height: 100px;\n  width: 200px;\n  font-size: 30px;\n  bottom: 13%;\n}\n.btn-container {\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n}\n@-webkit-keyframes glowing {\n  0% { box-shadow: 0 0 -10px #c40000; }\n  40% { box-shadow: 0 0 50px #c40000; }\n  60% { box-shadow: 0 0 50px #c40000; }\n  100% { box-shadow: 0 0 -10px #c40000; }\n}\n@keyframes glowing {\n  0% { box-shadow: 0 0 -10px #c40000; }\n  40% { box-shadow: 0 0 50px #c40000; }\n  60% { box-shadow: 0 0 50px #c40000; }\n  100% { box-shadow: 0 0 -10px #c40000; }\n}\n.pulse-red {\n  -webkit-animation: glowing 3000ms infinite;\n          animation: glowing 3000ms infinite;\n}"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"blue\" class=\"center\">\n  <img src=\"assets/uf-parking.svg\" style=\"display:none;\">\n  <mat-toolbar-row>\n    <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\" color=\"warn\" class=\"orange\">\n      <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n    </button>\n    <!-- <span>Parking Picker</span> -->\n    <!-- <span><img src=\"./assets/UF-parkingpicker.png\"></span> -->\n  </mat-toolbar-row>\n</mat-toolbar>\n<mat-toolbar color=\"primary\" class=\"orangeline\"></mat-toolbar>\n\n<mat-sidenav-container class=\"example-container\" (click)=\"updateParked()\">\n  <mat-sidenav #drawer mode=\"side\" opened role=\"navigation\" style=\"width: 275px; z-index: 3;\">\n    <mat-form-field color=\"warn\" class=\"placeholder\">\n      <mat-select placeholder=\"Student\" [formControl]=\"decals\" multiple >\n        <mat-option (click) = \"updateSettings()\" *ngFor=\"let decal of decalList\" [value]=\"decal.value\">{{decal.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <br>\n    <mat-form-field color=\"warn\" class=\"placeholder\">\n      <mat-select placeholder=\"Faculty & Staff\" [formControl]=\"decals\" multiple>\n        <mat-option (click) = \"updateSettings()\" *ngFor=\"let decal of decalList1\" [value]=\"decal.value\">{{decal.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <br>\n    <h3 class=\"mat-headline-1\" style=\"text-align: center;\">{{garage.name}}</h3>\n    <div class=\"box flex\" style=\"justify-content: center; display: flex; padding-left: 20px;\">\n      <img class=\"fas\" style=\"height: 20px; padding-right:20px;\" src=\"assets/parking-meter.svg\" *ngIf=\"garage.meter\">\n      <i class=\"fas fa-car\" style=\"padding-right:20px;\" *ngIf=\"garage.name\"></i>\n      <i class=\"fas fa-motorcycle\" style=\"padding-right:20px;\" *ngIf=\"garage.scooter\"></i>\n      <img class=\"fas\" style=\"height: 14px; padding-right:20px;\" src=\"assets/battery.svg\" *ngIf=\"garage.electric\">\n    </div>\n    <mat-list role=\"list\">\n      <mat-list-item role=\"listitem\" style=\"pointer-events: all; text-align: center;\" *ngFor=\"let decal of garage.decals\">\n        <a matLine title=\"{{getDecalName(decal.name)}} - {{getOccupancy(decal.name)}}%\"><b>{{getDecalName(decal.name)}}</b> - <a [style.color]=\"getColor(getOccupancy(decal.name))\">{{getOccupancy(decal.name)}}%</a></a>\n        <mat-divider></mat-divider>\n        <a matLine>Mon - <a *ngIf=\"decal.restrictions.weekend\">Sun</a><a *ngIf=\"!decal.restrictions.weekend\">Fri</a></a>\n        <a matLine *ngIf=\"!decal.restrictions.allDay\">{{decal.restrictions.startTime | time}} - {{decal.restrictions.endTime | time}}</a>\n        <a matLine *ngIf=\"decal.restrictions.allDay\">ALL DAY</a>\n      </mat-list-item>\n    </mat-list>\n  </mat-sidenav>\n  <mat-sidenav-content style=\"max-height: 92vh;\">\n    <div class=\"box flex btn-container\" style=\"justify-content: center; display: flex;\">\n        <button class=\"btn btn-warn btn-float pulse-red\" (click)=\"onUnparkClick()\" type=\"button\" *ngIf=\"parked\">Unpark</button>\n    </div>\n    <app-map [permissions]=\"permissions\" [parked]=\"parked\" (garageSelected)=\"updateGarageInfo($event)\" (dialogClosed)=\"updateParked($event)\"></app-map>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(backendService, snackBar) {
        this.backendService = backendService;
        this.snackBar = snackBar;
        this.decals = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.permissions = [];
        this.garage = {};
        this.decalList = [{ name: 'Green', value: 'green' },
            { name: 'Park & Ride', value: 'parkNRide' },
            { name: 'Red 1', value: 'red1' },
            { name: 'Red 3', value: 'red3' },
            { name: 'Brown', value: 'brown' },
            { name: 'Disabled', value: 'handicap' }];
        this.decalList1 = [{ name: 'Gold', value: 'gold' },
            { name: 'Silver', value: 'silver' },
            { name: 'Official Business', value: 'business' },
            { name: 'Orange', value: 'orange' },
            { name: 'Blue', value: 'blue' },
            { name: 'Medical Resident', value: 'medRes' },
            { name: 'Staff Commuter', value: 'staffComm' },
            { name: 'Disabled', value: 'handicap' },
            { name: 'Carpool', value: 'carpool' }];
        this.lut = [{ name: 'Green', value: 'green' },
            { name: 'Park & Ride', value: 'parkNRide' },
            { name: 'Red 1', value: 'red1' },
            { name: 'Red 3', value: 'red3' },
            { name: 'Brown', value: 'brown' },
            { name: 'Disabled', value: 'handicap' },
            { name: 'Motorcycle/Scooter', value: 'scooter' },
            { name: 'Gold', value: 'gold' },
            { name: 'Silver', value: 'silver' },
            { name: 'Official Business', value: 'business' },
            { name: 'Orange', value: 'orange' },
            { name: 'Blue', value: 'blue' },
            { name: 'Medical Resident', value: 'medRes' },
            { name: 'Staff Commuter', value: 'staffComm' },
            { name: 'Disabled', value: 'disabled' },
            { name: 'Carpool', value: 'carpool' },
            { name: 'Motorcycle/Scooter', value: 'scooter' },
            { name: 'Orange/Blue', value: 'orangeBlue' },
            { name: 'Any', value: 'any' },
            { name: 'Gated', value: 'gated' },
            { name: 'Any (not PNR)', value: 'anyNotPNR' },
            { name: 'Brown/Green', value: 'brownGreen' },
            { name: 'Orange/Blue/Medical/Business', value: 'OBMO' },
            { name: 'Red/Green', value: 'redGreen' }];
        this.occupancies = [];
        this.parked = false;
    }
    // Called when user clicks an input, update decal permissions
    NavigationComponent.prototype.updateSettings = function () {
        var _this = this;
        this.backendService.getFilteredDecalPermissions(this.decals.value).subscribe(function (permissions) {
            _this.permissions = permissions;
        });
        if (typeof (Storage) !== 'undefined') {
            localStorage.setItem('UserSettings', JSON.stringify(this.decals.value));
        }
        this.updateGarageInfo();
    };
    // Called to retrieve occupancy information of selected garage
    NavigationComponent.prototype.updateGarageInfo = function (garage) {
        var _this = this;
        if (garage) {
            this.garage = garage;
        }
        if (this.garage) {
            this.backendService.getOccupanciesByName(this.garage['name']).subscribe(function (res) {
                _this.occupancies = res.data;
            });
        }
    };
    // Retrieves the human readable decal name
    NavigationComponent.prototype.getDecalName = function (decalName) {
        var name = this.lut.find(function (ele) {
            return ele['value'] === decalName;
        });
        return name ? name.name : decalName;
    };
    // Retrieves the occupancy represented in percentage
    NavigationComponent.prototype.getOccupancy = function (decalName) {
        if (this.occupancies) {
            var occupancy = this.occupancies.find(function (ele) {
                return ele.decal === decalName;
            });
            var total = this.garage['decals'].find(function (ele) { return ele.name === decalName; }).specCapacity;
            if (!occupancy) {
                return 0;
            }
            return Math.ceil(occupancy.currOccupancy / total * 100);
        }
        return 0;
    };
    // Retrieves the color for occupancy percentage
    NavigationComponent.prototype.getColor = function (capacity) {
        if (capacity < 60) {
            // Green
            return '#48af48';
        }
        else if (capacity < 85) {
            // Yellow
            return '#fde627';
        }
        else {
            // Red
            return '#a53a3a';
        }
    };
    NavigationComponent.prototype.updateParked = function () {
        this.parked = JSON.parse(localStorage.getItem('parked')) ? true : false;
    };
    NavigationComponent.prototype.onUnparkClick = function () {
        var _this = this;
        var parked = JSON.parse(localStorage.getItem('parked'));
        this.backendService.addOccupancy(parked.decal).subscribe(function (res) {
            localStorage.removeItem('parked');
            _this.parked = false;
            _this.updateGarageInfo();
            _this.snackBar.open('Thank you for parking!', '', {
                duration: 2000
            });
        });
    };
    NavigationComponent.prototype.ngOnInit = function () {
        this.decals.setValue(JSON.parse(localStorage.getItem('UserSettings')));
        if (JSON.parse(localStorage.getItem('parked'))) {
            this.parked = true;
        }
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/pipes/time.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/time.pipe.ts ***!
  \************************************/
/*! exports provided: TimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePipe", function() { return TimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Takes a time in military format and converts it to AM/PM
 * Usage:
 *   value | time
 * Example:
 *   {{ 07:30 | time }}
 *   formats to: 7:30 AM
*/
var TimePipe = /** @class */ (function () {
    function TimePipe() {
    }
    TimePipe.prototype.transform = function (value) {
        var result = '';
        var time = value.split(':');
        var hour = parseInt(time[0], 10);
        var minutes = parseInt(time[1], 10);
        var AM = hour <= 12;
        result += AM ? hour : (hour - 12);
        result += ':' + minutes;
        result += ' ';
        result += AM ? 'AM' : 'PM';
        return result;
    };
    TimePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'time' })
    ], TimePipe);
    return TimePipe;
}());



/***/ }),

/***/ "./src/app/services/backend.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/backend.service.ts ***!
  \*********************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackendService = /** @class */ (function () {
    function BackendService(http) {
        this.http = http;
        this.baseURI = 'https://parking-picker.herokuapp.com';
        this.mapboxConfigUrl = this.baseURI + '/api/garages/mapbox';
        this.permissionsConfigUrl = this.baseURI + '/api/decals/';
        this.garagesConfigUrl = this.baseURI + '/api/garages/';
        this.occupancyConfigUrl = this.baseURI + '/api/occupancy';
    }
    // Gets all geojson garage data
    BackendService.prototype.getGaragesMapbox = function () {
        return this.http.get(this.mapboxConfigUrl);
    };
    // Gets geojson garage data based on passed decal types
    BackendService.prototype.getFilteredGaragesMapbox = function (permissions) {
        return this.http.post(this.mapboxConfigUrl, { decals: permissions });
    };
    // Gets decal permission of passed decals
    BackendService.prototype.getFilteredDecalPermissions = function (decals) {
        return this.http.post(this.permissionsConfigUrl, { decals: decals });
    };
    // Gets garage data based on id
    BackendService.prototype.getGarage = function (id) {
        return this.http.get(this.garagesConfigUrl + id);
    };
    // Gets all garage data
    BackendService.prototype.getAllGarages = function () {
        return this.http.get(this.garagesConfigUrl);
    };
    // Get garages based on passed decal types
    BackendService.prototype.getGarages = function (decals) {
        return this.http.post(this.garagesConfigUrl, { decals: decals });
    };
    // Get all occupancy data
    BackendService.prototype.getOccupancies = function () {
        return this.http.get(this.occupancyConfigUrl);
    };
    // Get occupancy of garage by name
    BackendService.prototype.getOccupanciesByName = function (garageName) {
        return this.http.get(this.occupancyConfigUrl + '/' + garageName);
    };
    // Posts request to increment occupancy of decal spaces in garage specified
    BackendService.prototype.addOccupancy = function (occupancy) {
        return this.http.post(this.occupancyConfigUrl, { occupancy: occupancy });
    };
    BackendService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BackendService);
    return BackendService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alejandro/Documents/School/2018 Fall/CEN 3031/Parking Picker/CEN3031-Group1/parking-picker-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map