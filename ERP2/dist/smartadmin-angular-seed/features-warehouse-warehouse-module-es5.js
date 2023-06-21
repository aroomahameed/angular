(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-warehouse-warehouse-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/features/warehouse/lines/lines.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/warehouse/lines/lines.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-crud-panel \r\n    title=\"Lines\" \r\n    icon=\"fal fa-users\" \r\n    [columns]=\"columns\"\r\n    [selectAllSelector]=\"selectAllSelector\"\r\n    [selectCurrent]=\"selectCurrent\"\r\n    [form] =\"form\"\r\n    [deleteable]=\"true\"\r\n    [editable]=\"true\"\r\n    formTitle=\"Line\"\r\n    itemName=\"Line\"\r\n    >\r\n\r\n    <h2 title><i class=\"fal fa-list\"></i>&nbsp;Lines</h2>\r\n    \r\n</smart-crud-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/warehouse/racks/racks.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/warehouse/racks/racks.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-crud-panel \r\n    title=\"Racks\" \r\n    icon=\"fal fa-users\" \r\n    [columns]=\"columns\"\r\n    [selectAllSelector]=\"selectAllSelector\"\r\n    [selectCurrent]=\"selectCurrent\"\r\n    [form] =\"form\"\r\n    [deleteable]=\"true\"\r\n    [editable]=\"true\"\r\n    formTitle=\"Rack\"\r\n    itemName=\"Rack\"\r\n    >\r\n\r\n    <h2 title><i class=\"fal fa-list\"></i>&nbsp;Racks</h2>\r\n    \r\n</smart-crud-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/warehouse/sections/sections.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/warehouse/sections/sections.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-crud-panel \r\n    title=\"Sections\" \r\n    icon=\"fal fa-users\" \r\n    [columns]=\"columns\"\r\n    [selectAllSelector]=\"selectAllSelector\"\r\n    [selectCurrent]=\"selectCurrent\"\r\n    [form] =\"form\"\r\n    [deleteable]=\"true\"\r\n    [editable]=\"true\"\r\n    formTitle=\"Section\"\r\n    itemName=\"Section\"\r\n    >\r\n\r\n    <h2 title><i class=\"fal fa-list\"></i>&nbsp;Sections</h2>\r\n    \r\n</smart-crud-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/warehouse/warehouses/warehouses.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/warehouse/warehouses/warehouses.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-crud-panel \r\n    title=\"Warehouses\" \r\n    icon=\"fal fa-users\" \r\n    [columns]=\"columns\"\r\n    [selectAllSelector]=\"selectAllSelector\"\r\n    [selectCurrent]=\"selectCurrent\"\r\n    [form] =\"form\"\r\n    [deleteable]=\"true\"\r\n    [editable]=\"true\"\r\n    formTitle=\"Warehouse\"\r\n    itemName=\"Warehouse\"\r\n    >\r\n\r\n    <h2 title><i class=\"fal fa-list\"></i>&nbsp;Warehouse</h2>\r\n    \r\n</smart-crud-panel>"

/***/ }),

/***/ "./src/app/features/store/warehouse/line/index.ts":
/*!********************************************************!*\
  !*** ./src/app/features/store/warehouse/line/index.ts ***!
  \********************************************************/
/*! exports provided: LineEffects, LineService, selectAllLines, allLineLoaded, selectCurrentLine, lineFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadLines, loadLinesSuccess, addLine, addLineSuccess, deleteLine, deleteLineSuccess, selectCurrentLineSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _line_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line.effects */ "./src/app/features/store/warehouse/line/line.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineEffects", function() { return _line_effects__WEBPACK_IMPORTED_MODULE_0__["LineEffects"]; });

/* harmony import */ var _line_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line.service */ "./src/app/features/store/warehouse/line/line.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineService", function() { return _line_service__WEBPACK_IMPORTED_MODULE_1__["LineService"]; });

/* harmony import */ var _line_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line.selectors */ "./src/app/features/store/warehouse/line/line.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllLines", function() { return _line_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllLines"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allLineLoaded", function() { return _line_selectors__WEBPACK_IMPORTED_MODULE_2__["allLineLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentLine", function() { return _line_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentLine"]; });

/* harmony import */ var _line_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line.reducer */ "./src/app/features/store/warehouse/line/line.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineFeatureKey", function() { return _line_reducer__WEBPACK_IMPORTED_MODULE_3__["lineFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _line_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _line_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _line_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _line_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _line_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _line_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _line_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _line_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./line.actions */ "./src/app/features/store/warehouse/line/line.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadLines", function() { return _line_actions__WEBPACK_IMPORTED_MODULE_4__["loadLines"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadLinesSuccess", function() { return _line_actions__WEBPACK_IMPORTED_MODULE_4__["loadLinesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addLine", function() { return _line_actions__WEBPACK_IMPORTED_MODULE_4__["addLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addLineSuccess", function() { return _line_actions__WEBPACK_IMPORTED_MODULE_4__["addLineSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteLine", function() { return _line_actions__WEBPACK_IMPORTED_MODULE_4__["deleteLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteLineSuccess", function() { return _line_actions__WEBPACK_IMPORTED_MODULE_4__["deleteLineSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentLineSuccess", function() { return _line_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentLineSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/warehouse/line/line.actions.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/store/warehouse/line/line.actions.ts ***!
  \***************************************************************/
/*! exports provided: loadLines, loadLinesSuccess, addLine, addLineSuccess, deleteLine, deleteLineSuccess, selectCurrentLineSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLines", function() { return loadLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLinesSuccess", function() { return loadLinesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLine", function() { return addLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLineSuccess", function() { return addLineSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteLine", function() { return deleteLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteLineSuccess", function() { return deleteLineSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentLineSuccess", function() { return selectCurrentLineSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadLines = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Line/API] Load Lines');
var loadLinesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Line/API] Load Lines Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addLine = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Line/API] Add Line', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addLineSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Line/API] Add Line Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteLine = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Line/API] Delete Line', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteLineSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Line/API] Delete Line Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentLineSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Line/API] Select Current Line', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/warehouse/line/line.effects.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/store/warehouse/line/line.effects.ts ***!
  \***************************************************************/
/*! exports provided: LineEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineEffects", function() { return LineEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _line_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./line.service */ "./src/app/features/store/warehouse/line/line.service.ts");
/* harmony import */ var _line_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./line.actions */ "./src/app/features/store/warehouse/line/line.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _line_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./line.selectors */ "./src/app/features/store/warehouse/line/line.selectors.ts");








var LineEffects = /** @class */ (function () {
    function LineEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadLines$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_line_actions__WEBPACK_IMPORTED_MODULE_5__["loadLines"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_line_selectors__WEBPACK_IMPORTED_MODULE_7__["allLineLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_line_actions__WEBPACK_IMPORTED_MODULE_5__["loadLinesSuccess"])({ data: data }); })); })); });
        this.addLine$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_line_actions__WEBPACK_IMPORTED_MODULE_5__["addLine"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_line_actions__WEBPACK_IMPORTED_MODULE_5__["addLineSuccess"])({ data: data }); })); })); });
        this.deleteLine$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_line_actions__WEBPACK_IMPORTED_MODULE_5__["deleteLine"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_line_actions__WEBPACK_IMPORTED_MODULE_5__["deleteLineSuccess"])({ id: data.id }); }));
        })); });
    }
    LineEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _line_service__WEBPACK_IMPORTED_MODULE_4__["LineService"] }
    ]; };
    LineEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _line_service__WEBPACK_IMPORTED_MODULE_4__["LineService"]])
    ], LineEffects);
    return LineEffects;
}());



/***/ }),

/***/ "./src/app/features/store/warehouse/line/line.reducer.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/store/warehouse/line/line.reducer.ts ***!
  \***************************************************************/
/*! exports provided: lineFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineFeatureKey", function() { return lineFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _line_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line.actions */ "./src/app/features/store/warehouse/line/line.actions.ts");

var _a;



var lineFeatureKey = 'lines';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allLinesLoaded: false,
    currentLine: null
});
var lineReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_line_actions__WEBPACK_IMPORTED_MODULE_3__["addLineSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentLine: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_line_actions__WEBPACK_IMPORTED_MODULE_3__["deleteLineSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_line_actions__WEBPACK_IMPORTED_MODULE_3__["loadLinesSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_line_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentLineSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentLine: action.data })); }));
function reducer(state, action) {
    return lineReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/warehouse/line/line.selectors.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/store/warehouse/line/line.selectors.ts ***!
  \*****************************************************************/
/*! exports provided: selectAllLines, allLineLoaded, selectCurrentLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllLines", function() { return selectAllLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allLineLoaded", function() { return allLineLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentLine", function() { return selectCurrentLine; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _line_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line.reducer */ "./src/app/features/store/warehouse/line/line.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_line_reducer__WEBPACK_IMPORTED_MODULE_1__["lineFeatureKey"]);
var selectAllLines = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _line_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allLineLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allLinesLoaded; });
var selectCurrentLine = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentLine; });


/***/ }),

/***/ "./src/app/features/store/warehouse/line/line.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/store/warehouse/line/line.service.ts ***!
  \***************************************************************/
/*! exports provided: LineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineService", function() { return LineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var LineService = /** @class */ (function () {
    function LineService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/lines/";
    }
    LineService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    LineService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    LineService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    LineService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    LineService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    LineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LineService);
    return LineService;
}());



/***/ }),

/***/ "./src/app/features/store/warehouse/rack/index.ts":
/*!********************************************************!*\
  !*** ./src/app/features/store/warehouse/rack/index.ts ***!
  \********************************************************/
/*! exports provided: RackEffects, RackService, selectAllRacks, allRackLoaded, selectCurrentRack, rackFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadRacks, loadRacksSuccess, addRack, addRackSuccess, deleteRack, deleteRackSuccess, selectCurrentRackSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rack_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rack.effects */ "./src/app/features/store/warehouse/rack/rack.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RackEffects", function() { return _rack_effects__WEBPACK_IMPORTED_MODULE_0__["RackEffects"]; });

/* harmony import */ var _rack_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rack.service */ "./src/app/features/store/warehouse/rack/rack.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RackService", function() { return _rack_service__WEBPACK_IMPORTED_MODULE_1__["RackService"]; });

/* harmony import */ var _rack_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rack.selectors */ "./src/app/features/store/warehouse/rack/rack.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllRacks", function() { return _rack_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllRacks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allRackLoaded", function() { return _rack_selectors__WEBPACK_IMPORTED_MODULE_2__["allRackLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentRack", function() { return _rack_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentRack"]; });

/* harmony import */ var _rack_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rack.reducer */ "./src/app/features/store/warehouse/rack/rack.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rackFeatureKey", function() { return _rack_reducer__WEBPACK_IMPORTED_MODULE_3__["rackFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _rack_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _rack_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _rack_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _rack_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _rack_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _rack_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _rack_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _rack_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rack.actions */ "./src/app/features/store/warehouse/rack/rack.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadRacks", function() { return _rack_actions__WEBPACK_IMPORTED_MODULE_4__["loadRacks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadRacksSuccess", function() { return _rack_actions__WEBPACK_IMPORTED_MODULE_4__["loadRacksSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRack", function() { return _rack_actions__WEBPACK_IMPORTED_MODULE_4__["addRack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRackSuccess", function() { return _rack_actions__WEBPACK_IMPORTED_MODULE_4__["addRackSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteRack", function() { return _rack_actions__WEBPACK_IMPORTED_MODULE_4__["deleteRack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteRackSuccess", function() { return _rack_actions__WEBPACK_IMPORTED_MODULE_4__["deleteRackSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentRackSuccess", function() { return _rack_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentRackSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/warehouse/rack/rack.actions.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/store/warehouse/rack/rack.actions.ts ***!
  \***************************************************************/
/*! exports provided: loadRacks, loadRacksSuccess, addRack, addRackSuccess, deleteRack, deleteRackSuccess, selectCurrentRackSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRacks", function() { return loadRacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRacksSuccess", function() { return loadRacksSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRack", function() { return addRack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRackSuccess", function() { return addRackSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRack", function() { return deleteRack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRackSuccess", function() { return deleteRackSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentRackSuccess", function() { return selectCurrentRackSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadRacks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Rack/API] Load Racks');
var loadRacksSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Rack/API] Load Racks Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addRack = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Rack/API] Add Rack', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addRackSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Rack/API] Add Rack Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteRack = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Rack/API] Delete Rack', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteRackSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Rack/API] Delete Rack Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentRackSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Rack/API] Select Current Rack', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/warehouse/rack/rack.effects.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/store/warehouse/rack/rack.effects.ts ***!
  \***************************************************************/
/*! exports provided: RackEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RackEffects", function() { return RackEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _rack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rack.service */ "./src/app/features/store/warehouse/rack/rack.service.ts");
/* harmony import */ var _rack_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rack.actions */ "./src/app/features/store/warehouse/rack/rack.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _rack_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rack.selectors */ "./src/app/features/store/warehouse/rack/rack.selectors.ts");








var RackEffects = /** @class */ (function () {
    function RackEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadRacks$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_rack_actions__WEBPACK_IMPORTED_MODULE_5__["loadRacks"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_rack_selectors__WEBPACK_IMPORTED_MODULE_7__["allRackLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_rack_actions__WEBPACK_IMPORTED_MODULE_5__["loadRacksSuccess"])({ data: data }); })); })); });
        this.addRack$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_rack_actions__WEBPACK_IMPORTED_MODULE_5__["addRack"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_rack_actions__WEBPACK_IMPORTED_MODULE_5__["addRackSuccess"])({ data: data }); })); })); });
        this.deleteRack$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_rack_actions__WEBPACK_IMPORTED_MODULE_5__["deleteRack"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_rack_actions__WEBPACK_IMPORTED_MODULE_5__["deleteRackSuccess"])({ id: data.id }); }));
        })); });
    }
    RackEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _rack_service__WEBPACK_IMPORTED_MODULE_4__["RackService"] }
    ]; };
    RackEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _rack_service__WEBPACK_IMPORTED_MODULE_4__["RackService"]])
    ], RackEffects);
    return RackEffects;
}());



/***/ }),

/***/ "./src/app/features/store/warehouse/rack/rack.reducer.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/store/warehouse/rack/rack.reducer.ts ***!
  \***************************************************************/
/*! exports provided: rackFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rackFeatureKey", function() { return rackFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _rack_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rack.actions */ "./src/app/features/store/warehouse/rack/rack.actions.ts");

var _a;



var rackFeatureKey = 'racks';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allRacksLoaded: false,
    currentRack: null
});
var rackReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_rack_actions__WEBPACK_IMPORTED_MODULE_3__["addRackSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentRack: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_rack_actions__WEBPACK_IMPORTED_MODULE_3__["deleteRackSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_rack_actions__WEBPACK_IMPORTED_MODULE_3__["loadRacksSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_rack_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentRackSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentRack: action.data })); }));
function reducer(state, action) {
    return rackReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/warehouse/rack/rack.selectors.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/store/warehouse/rack/rack.selectors.ts ***!
  \*****************************************************************/
/*! exports provided: selectAllRacks, allRackLoaded, selectCurrentRack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllRacks", function() { return selectAllRacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allRackLoaded", function() { return allRackLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentRack", function() { return selectCurrentRack; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _rack_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rack.reducer */ "./src/app/features/store/warehouse/rack/rack.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_rack_reducer__WEBPACK_IMPORTED_MODULE_1__["rackFeatureKey"]);
var selectAllRacks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _rack_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allRackLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allRacksLoaded; });
var selectCurrentRack = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentRack; });


/***/ }),

/***/ "./src/app/features/store/warehouse/rack/rack.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/store/warehouse/rack/rack.service.ts ***!
  \***************************************************************/
/*! exports provided: RackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RackService", function() { return RackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var RackService = /** @class */ (function () {
    function RackService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/racks/";
    }
    RackService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    RackService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    RackService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    RackService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    RackService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    RackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], RackService);
    return RackService;
}());



/***/ }),

/***/ "./src/app/features/store/warehouse/section/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/store/warehouse/section/index.ts ***!
  \***********************************************************/
/*! exports provided: SectionEffects, SectionService, selectAllSections, allSectionLoaded, selectCurrentSection, sectionFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadSections, loadSectionsSuccess, addSection, addSectionSuccess, deleteSection, deleteSectionSuccess, selectCurrentSectionSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _section_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section.effects */ "./src/app/features/store/warehouse/section/section.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionEffects", function() { return _section_effects__WEBPACK_IMPORTED_MODULE_0__["SectionEffects"]; });

/* harmony import */ var _section_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section.service */ "./src/app/features/store/warehouse/section/section.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionService", function() { return _section_service__WEBPACK_IMPORTED_MODULE_1__["SectionService"]; });

/* harmony import */ var _section_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section.selectors */ "./src/app/features/store/warehouse/section/section.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllSections", function() { return _section_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllSections"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allSectionLoaded", function() { return _section_selectors__WEBPACK_IMPORTED_MODULE_2__["allSectionLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentSection", function() { return _section_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentSection"]; });

/* harmony import */ var _section_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section.reducer */ "./src/app/features/store/warehouse/section/section.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sectionFeatureKey", function() { return _section_reducer__WEBPACK_IMPORTED_MODULE_3__["sectionFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _section_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _section_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _section_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _section_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _section_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _section_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _section_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _section_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./section.actions */ "./src/app/features/store/warehouse/section/section.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadSections", function() { return _section_actions__WEBPACK_IMPORTED_MODULE_4__["loadSections"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadSectionsSuccess", function() { return _section_actions__WEBPACK_IMPORTED_MODULE_4__["loadSectionsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addSection", function() { return _section_actions__WEBPACK_IMPORTED_MODULE_4__["addSection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addSectionSuccess", function() { return _section_actions__WEBPACK_IMPORTED_MODULE_4__["addSectionSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteSection", function() { return _section_actions__WEBPACK_IMPORTED_MODULE_4__["deleteSection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteSectionSuccess", function() { return _section_actions__WEBPACK_IMPORTED_MODULE_4__["deleteSectionSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentSectionSuccess", function() { return _section_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentSectionSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/warehouse/section/section.actions.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/store/warehouse/section/section.actions.ts ***!
  \*********************************************************************/
/*! exports provided: loadSections, loadSectionsSuccess, addSection, addSectionSuccess, deleteSection, deleteSectionSuccess, selectCurrentSectionSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSections", function() { return loadSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSectionsSuccess", function() { return loadSectionsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSection", function() { return addSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSectionSuccess", function() { return addSectionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSection", function() { return deleteSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSectionSuccess", function() { return deleteSectionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentSectionSuccess", function() { return selectCurrentSectionSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadSections = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Section/API] Load Sections');
var loadSectionsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Section/API] Load Sections Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addSection = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Section/API] Add Section', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addSectionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Section/API] Add Section Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteSection = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Section/API] Delete Section', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteSectionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Section/API] Delete Section Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentSectionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Section/API] Select Current Section', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/warehouse/section/section.effects.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/store/warehouse/section/section.effects.ts ***!
  \*********************************************************************/
/*! exports provided: SectionEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionEffects", function() { return SectionEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _section_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./section.service */ "./src/app/features/store/warehouse/section/section.service.ts");
/* harmony import */ var _section_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./section.actions */ "./src/app/features/store/warehouse/section/section.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _section_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./section.selectors */ "./src/app/features/store/warehouse/section/section.selectors.ts");








var SectionEffects = /** @class */ (function () {
    function SectionEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadSections$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_section_actions__WEBPACK_IMPORTED_MODULE_5__["loadSections"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_section_selectors__WEBPACK_IMPORTED_MODULE_7__["allSectionLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_section_actions__WEBPACK_IMPORTED_MODULE_5__["loadSectionsSuccess"])({ data: data }); })); })); });
        this.addSection$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_section_actions__WEBPACK_IMPORTED_MODULE_5__["addSection"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_section_actions__WEBPACK_IMPORTED_MODULE_5__["addSectionSuccess"])({ data: data }); })); })); });
        this.deleteSection$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_section_actions__WEBPACK_IMPORTED_MODULE_5__["deleteSection"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_section_actions__WEBPACK_IMPORTED_MODULE_5__["deleteSectionSuccess"])({ id: data.id }); }));
        })); });
    }
    SectionEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _section_service__WEBPACK_IMPORTED_MODULE_4__["SectionService"] }
    ]; };
    SectionEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _section_service__WEBPACK_IMPORTED_MODULE_4__["SectionService"]])
    ], SectionEffects);
    return SectionEffects;
}());



/***/ }),

/***/ "./src/app/features/store/warehouse/section/section.reducer.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/store/warehouse/section/section.reducer.ts ***!
  \*********************************************************************/
/*! exports provided: sectionFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectionFeatureKey", function() { return sectionFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _section_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section.actions */ "./src/app/features/store/warehouse/section/section.actions.ts");

var _a;



var sectionFeatureKey = 'sections';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allSectionsLoaded: false,
    currentSection: null
});
var sectionReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_section_actions__WEBPACK_IMPORTED_MODULE_3__["addSectionSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentSection: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_section_actions__WEBPACK_IMPORTED_MODULE_3__["deleteSectionSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_section_actions__WEBPACK_IMPORTED_MODULE_3__["loadSectionsSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_section_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentSectionSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentSection: action.data })); }));
function reducer(state, action) {
    return sectionReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/warehouse/section/section.selectors.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/store/warehouse/section/section.selectors.ts ***!
  \***********************************************************************/
/*! exports provided: selectAllSections, allSectionLoaded, selectCurrentSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllSections", function() { return selectAllSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allSectionLoaded", function() { return allSectionLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentSection", function() { return selectCurrentSection; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _section_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section.reducer */ "./src/app/features/store/warehouse/section/section.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_section_reducer__WEBPACK_IMPORTED_MODULE_1__["sectionFeatureKey"]);
var selectAllSections = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _section_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allSectionLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allSectionsLoaded; });
var selectCurrentSection = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentSection; });


/***/ }),

/***/ "./src/app/features/store/warehouse/section/section.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/store/warehouse/section/section.service.ts ***!
  \*********************************************************************/
/*! exports provided: SectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionService", function() { return SectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var SectionService = /** @class */ (function () {
    function SectionService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/sections/";
    }
    SectionService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    SectionService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    SectionService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    SectionService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    SectionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    SectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SectionService);
    return SectionService;
}());



/***/ }),

/***/ "./src/app/features/store/warehouse/warehouse/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/store/warehouse/warehouse/index.ts ***!
  \*************************************************************/
/*! exports provided: WarehouseEffects, WarehouseService, selectAllWarehouses, allWarehouseLoaded, selectCurrentWarehouse, warehouseFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadWarehouses, loadWarehousesSuccess, addWarehouse, addWarehouseSuccess, deleteWarehouse, deleteWarehouseSuccess, selectCurrentWarehouseSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _warehouse_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warehouse.effects */ "./src/app/features/store/warehouse/warehouse/warehouse.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WarehouseEffects", function() { return _warehouse_effects__WEBPACK_IMPORTED_MODULE_0__["WarehouseEffects"]; });

/* harmony import */ var _warehouse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warehouse.service */ "./src/app/features/store/warehouse/warehouse/warehouse.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WarehouseService", function() { return _warehouse_service__WEBPACK_IMPORTED_MODULE_1__["WarehouseService"]; });

/* harmony import */ var _warehouse_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warehouse.selectors */ "./src/app/features/store/warehouse/warehouse/warehouse.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllWarehouses", function() { return _warehouse_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllWarehouses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allWarehouseLoaded", function() { return _warehouse_selectors__WEBPACK_IMPORTED_MODULE_2__["allWarehouseLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentWarehouse", function() { return _warehouse_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentWarehouse"]; });

/* harmony import */ var _warehouse_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./warehouse.reducer */ "./src/app/features/store/warehouse/warehouse/warehouse.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warehouseFeatureKey", function() { return _warehouse_reducer__WEBPACK_IMPORTED_MODULE_3__["warehouseFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _warehouse_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _warehouse_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _warehouse_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _warehouse_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _warehouse_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _warehouse_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _warehouse_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _warehouse_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./warehouse.actions */ "./src/app/features/store/warehouse/warehouse/warehouse.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadWarehouses", function() { return _warehouse_actions__WEBPACK_IMPORTED_MODULE_4__["loadWarehouses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadWarehousesSuccess", function() { return _warehouse_actions__WEBPACK_IMPORTED_MODULE_4__["loadWarehousesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addWarehouse", function() { return _warehouse_actions__WEBPACK_IMPORTED_MODULE_4__["addWarehouse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addWarehouseSuccess", function() { return _warehouse_actions__WEBPACK_IMPORTED_MODULE_4__["addWarehouseSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteWarehouse", function() { return _warehouse_actions__WEBPACK_IMPORTED_MODULE_4__["deleteWarehouse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteWarehouseSuccess", function() { return _warehouse_actions__WEBPACK_IMPORTED_MODULE_4__["deleteWarehouseSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentWarehouseSuccess", function() { return _warehouse_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentWarehouseSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/warehouse/warehouse/warehouse.actions.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/warehouse/warehouse/warehouse.actions.ts ***!
  \*************************************************************************/
/*! exports provided: loadWarehouses, loadWarehousesSuccess, addWarehouse, addWarehouseSuccess, deleteWarehouse, deleteWarehouseSuccess, selectCurrentWarehouseSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadWarehouses", function() { return loadWarehouses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadWarehousesSuccess", function() { return loadWarehousesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWarehouse", function() { return addWarehouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWarehouseSuccess", function() { return addWarehouseSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteWarehouse", function() { return deleteWarehouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteWarehouseSuccess", function() { return deleteWarehouseSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentWarehouseSuccess", function() { return selectCurrentWarehouseSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadWarehouses = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Warehouse/API] Load Warehouses');
var loadWarehousesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Warehouse/API] Load Warehouses Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addWarehouse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Warehouse/API] Add Warehouse', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addWarehouseSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Warehouse/API] Add Warehouse Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteWarehouse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Warehouse/API] Delete Warehouse', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteWarehouseSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Warehouse/API] Delete Warehouse Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentWarehouseSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Warehouse/API] Select Current Warehouse', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/warehouse/warehouse/warehouse.effects.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/warehouse/warehouse/warehouse.effects.ts ***!
  \*************************************************************************/
/*! exports provided: WarehouseEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseEffects", function() { return WarehouseEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _warehouse_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./warehouse.service */ "./src/app/features/store/warehouse/warehouse/warehouse.service.ts");
/* harmony import */ var _warehouse_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./warehouse.actions */ "./src/app/features/store/warehouse/warehouse/warehouse.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _warehouse_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./warehouse.selectors */ "./src/app/features/store/warehouse/warehouse/warehouse.selectors.ts");








var WarehouseEffects = /** @class */ (function () {
    function WarehouseEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadWarehouses$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_warehouse_actions__WEBPACK_IMPORTED_MODULE_5__["loadWarehouses"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_warehouse_selectors__WEBPACK_IMPORTED_MODULE_7__["allWarehouseLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_warehouse_actions__WEBPACK_IMPORTED_MODULE_5__["loadWarehousesSuccess"])({ data: data }); })); })); });
        this.addWarehouse$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_warehouse_actions__WEBPACK_IMPORTED_MODULE_5__["addWarehouse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_warehouse_actions__WEBPACK_IMPORTED_MODULE_5__["addWarehouseSuccess"])({ data: data }); })); })); });
        this.deleteWarehouse$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_warehouse_actions__WEBPACK_IMPORTED_MODULE_5__["deleteWarehouse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_warehouse_actions__WEBPACK_IMPORTED_MODULE_5__["deleteWarehouseSuccess"])({ id: data.id }); }));
        })); });
    }
    WarehouseEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _warehouse_service__WEBPACK_IMPORTED_MODULE_4__["WarehouseService"] }
    ]; };
    WarehouseEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _warehouse_service__WEBPACK_IMPORTED_MODULE_4__["WarehouseService"]])
    ], WarehouseEffects);
    return WarehouseEffects;
}());



/***/ }),

/***/ "./src/app/features/store/warehouse/warehouse/warehouse.reducer.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/warehouse/warehouse/warehouse.reducer.ts ***!
  \*************************************************************************/
/*! exports provided: warehouseFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warehouseFeatureKey", function() { return warehouseFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _warehouse_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./warehouse.actions */ "./src/app/features/store/warehouse/warehouse/warehouse.actions.ts");

var _a;



var warehouseFeatureKey = 'warehouses';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allWarehousesLoaded: false,
    currentWarehouse: null
});
var warehouseReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_warehouse_actions__WEBPACK_IMPORTED_MODULE_3__["addWarehouseSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentWarehouse: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_warehouse_actions__WEBPACK_IMPORTED_MODULE_3__["deleteWarehouseSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_warehouse_actions__WEBPACK_IMPORTED_MODULE_3__["loadWarehousesSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_warehouse_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentWarehouseSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentWarehouse: action.data })); }));
function reducer(state, action) {
    return warehouseReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/warehouse/warehouse/warehouse.selectors.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/store/warehouse/warehouse/warehouse.selectors.ts ***!
  \***************************************************************************/
/*! exports provided: selectAllWarehouses, allWarehouseLoaded, selectCurrentWarehouse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllWarehouses", function() { return selectAllWarehouses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allWarehouseLoaded", function() { return allWarehouseLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentWarehouse", function() { return selectCurrentWarehouse; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _warehouse_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warehouse.reducer */ "./src/app/features/store/warehouse/warehouse/warehouse.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_warehouse_reducer__WEBPACK_IMPORTED_MODULE_1__["warehouseFeatureKey"]);
var selectAllWarehouses = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _warehouse_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allWarehouseLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allWarehousesLoaded; });
var selectCurrentWarehouse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentWarehouse; });


/***/ }),

/***/ "./src/app/features/store/warehouse/warehouse/warehouse.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/warehouse/warehouse/warehouse.service.ts ***!
  \*************************************************************************/
/*! exports provided: WarehouseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseService", function() { return WarehouseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var WarehouseService = /** @class */ (function () {
    function WarehouseService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/warehouses/";
    }
    WarehouseService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    WarehouseService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    WarehouseService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    WarehouseService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    WarehouseService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    WarehouseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], WarehouseService);
    return WarehouseService;
}());



/***/ }),

/***/ "./src/app/features/warehouse/lines/lines.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/warehouse/lines/lines.component.ts ***!
  \*************************************************************/
/*! exports provided: LinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinesComponent", function() { return LinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_warehouse_line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/warehouse/line */ "./src/app/features/store/warehouse/line/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var LinesComponent = /** @class */ (function () {
    function LinesComponent() {
        this.form = [
            {
                row: [
                    { label: 'Line Name', name: 'name', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            }, {
                row: [
                    { label: 'Status', name: 'status', type: 'check' }
                ]
            },
            {
                row: [
                    { label: 'ID', name: 'id', type: 'hidden' }
                ]
            }
        ];
        this.columns = [
            { title: 'Line Name', value: 'name' },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.selectAllSelector = _store_warehouse_line__WEBPACK_IMPORTED_MODULE_1__["selectAllLines"];
        this.selectCurrent = _store_warehouse_line__WEBPACK_IMPORTED_MODULE_1__["selectCurrentLine"];
    }
    LinesComponent.prototype.ngOnInit = function () {
    };
    LinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'smart-lines',
            template: __webpack_require__(/*! raw-loader!./lines.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/warehouse/lines/lines.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LinesComponent);
    return LinesComponent;
}());



/***/ }),

/***/ "./src/app/features/warehouse/racks/racks.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/warehouse/racks/racks.component.ts ***!
  \*************************************************************/
/*! exports provided: RacksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RacksComponent", function() { return RacksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_warehouse_rack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/warehouse/rack */ "./src/app/features/store/warehouse/rack/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var RacksComponent = /** @class */ (function () {
    function RacksComponent() {
        this.form = [
            {
                row: [
                    { label: 'Rack Name', name: 'name', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            }, {
                row: [
                    { label: 'Status', name: 'status', type: 'check' }
                ]
            },
            {
                row: [
                    { label: 'ID', name: 'id', type: 'hidden' }
                ]
            }
        ];
        this.columns = [
            { title: 'Rack Name', value: 'name' },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.selectAllSelector = _store_warehouse_rack__WEBPACK_IMPORTED_MODULE_1__["selectAllRacks"];
        this.selectCurrent = _store_warehouse_rack__WEBPACK_IMPORTED_MODULE_1__["selectCurrentRack"];
    }
    RacksComponent.prototype.ngOnInit = function () {
    };
    RacksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'smart-racks',
            template: __webpack_require__(/*! raw-loader!./racks.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/warehouse/racks/racks.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RacksComponent);
    return RacksComponent;
}());



/***/ }),

/***/ "./src/app/features/warehouse/sections/sections.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/warehouse/sections/sections.component.ts ***!
  \*******************************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_warehouse_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/warehouse/section */ "./src/app/features/store/warehouse/section/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var SectionsComponent = /** @class */ (function () {
    function SectionsComponent() {
        this.form = [
            {
                row: [
                    { label: 'Section Name', name: 'name', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            }, {
                row: [
                    { label: 'Status', name: 'status', type: 'check' }
                ]
            },
            {
                row: [
                    { label: 'ID', name: 'id', type: 'hidden' }
                ]
            }
        ];
        this.columns = [
            { title: 'Section Name', value: 'name' },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.selectAllSelector = _store_warehouse_section__WEBPACK_IMPORTED_MODULE_1__["selectAllSections"];
        this.selectCurrent = _store_warehouse_section__WEBPACK_IMPORTED_MODULE_1__["selectCurrentSection"];
    }
    SectionsComponent.prototype.ngOnInit = function () {
    };
    SectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'smart-sections',
            template: __webpack_require__(/*! raw-loader!./sections.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/warehouse/sections/sections.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "./src/app/features/warehouse/warehouse.module.ts":
/*!********************************************************!*\
  !*** ./src/app/features/warehouse/warehouse.module.ts ***!
  \********************************************************/
/*! exports provided: WarehouseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseModule", function() { return WarehouseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _warehouses_warehouses_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./warehouses/warehouses.component */ "./src/app/features/warehouse/warehouses/warehouses.component.ts");
/* harmony import */ var _racks_racks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./racks/racks.component */ "./src/app/features/warehouse/racks/racks.component.ts");
/* harmony import */ var _sections_sections_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/sections.component */ "./src/app/features/warehouse/sections/sections.component.ts");
/* harmony import */ var _lines_lines_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lines/lines.component */ "./src/app/features/warehouse/lines/lines.component.ts");
/* harmony import */ var src_app_features_store_warehouse_warehouse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/features/store/warehouse/warehouse */ "./src/app/features/store/warehouse/warehouse/index.ts");
/* harmony import */ var src_app_features_store_warehouse_rack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/features/store/warehouse/rack */ "./src/app/features/store/warehouse/rack/index.ts");
/* harmony import */ var src_app_features_store_warehouse_section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/features/store/warehouse/section */ "./src/app/features/store/warehouse/section/index.ts");
/* harmony import */ var src_app_features_store_warehouse_line__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/features/store/warehouse/line */ "./src/app/features/store/warehouse/line/index.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






//component imports




//store imports





var WarehouseModule = /** @class */ (function () {
    function WarehouseModule() {
    }
    WarehouseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_lines_lines_component__WEBPACK_IMPORTED_MODULE_9__["LinesComponent"], _sections_sections_component__WEBPACK_IMPORTED_MODULE_8__["SectionsComponent"], _racks_racks_component__WEBPACK_IMPORTED_MODULE_7__["RacksComponent"], _warehouses_warehouses_component__WEBPACK_IMPORTED_MODULE_6__["WarehousesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                //store for feature
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(src_app_features_store_warehouse_warehouse__WEBPACK_IMPORTED_MODULE_10__["warehouseFeatureKey"], src_app_features_store_warehouse_warehouse__WEBPACK_IMPORTED_MODULE_10__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(src_app_features_store_warehouse_rack__WEBPACK_IMPORTED_MODULE_11__["rackFeatureKey"], src_app_features_store_warehouse_rack__WEBPACK_IMPORTED_MODULE_11__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(src_app_features_store_warehouse_section__WEBPACK_IMPORTED_MODULE_12__["sectionFeatureKey"], src_app_features_store_warehouse_section__WEBPACK_IMPORTED_MODULE_12__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(src_app_features_store_warehouse_line__WEBPACK_IMPORTED_MODULE_13__["lineFeatureKey"], src_app_features_store_warehouse_line__WEBPACK_IMPORTED_MODULE_13__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([src_app_features_store_warehouse_line__WEBPACK_IMPORTED_MODULE_13__["LineEffects"], src_app_features_store_warehouse_section__WEBPACK_IMPORTED_MODULE_12__["SectionEffects"], src_app_features_store_warehouse_rack__WEBPACK_IMPORTED_MODULE_11__["RackEffects"], src_app_features_store_warehouse_warehouse__WEBPACK_IMPORTED_MODULE_10__["WarehouseEffects"]]),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    { path: '', redirectTo: 'lines', pathMatch: 'full' },
                    { path: 'warehouses', component: _warehouses_warehouses_component__WEBPACK_IMPORTED_MODULE_6__["WarehousesComponent"] },
                    { path: 'racks', component: _racks_racks_component__WEBPACK_IMPORTED_MODULE_7__["RacksComponent"] },
                    { path: 'sections', component: _sections_sections_component__WEBPACK_IMPORTED_MODULE_8__["SectionsComponent"] },
                    { path: 'lines', component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_9__["LinesComponent"] },
                ])
            ]
        })
    ], WarehouseModule);
    return WarehouseModule;
}());



/***/ }),

/***/ "./src/app/features/warehouse/warehouses/warehouses.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/warehouse/warehouses/warehouses.component.ts ***!
  \***********************************************************************/
/*! exports provided: WarehousesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehousesComponent", function() { return WarehousesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_warehouse_warehouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/warehouse/warehouse */ "./src/app/features/store/warehouse/warehouse/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var WarehousesComponent = /** @class */ (function () {
    function WarehousesComponent() {
        this.form = [
            {
                row: [
                    { label: 'Warehouse Name', name: 'name', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'Location', name: 'location', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            }, {
                row: [
                    { label: 'Status', name: 'status', type: 'check' }
                ]
            },
            {
                row: [
                    { label: 'ID', name: 'id', type: 'hidden' }
                ]
            }
        ];
        this.columns = [
            { title: 'Warehouse Name', value: 'name' },
            { title: 'Location', value: 'location' },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.selectAllSelector = _store_warehouse_warehouse__WEBPACK_IMPORTED_MODULE_1__["selectAllWarehouses"];
        this.selectCurrent = _store_warehouse_warehouse__WEBPACK_IMPORTED_MODULE_1__["selectCurrentWarehouse"];
    }
    WarehousesComponent.prototype.ngOnInit = function () {
    };
    WarehousesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'smart-warehouses',
            template: __webpack_require__(/*! raw-loader!./warehouses.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/warehouse/warehouses/warehouses.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WarehousesComponent);
    return WarehousesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=features-warehouse-warehouse-module-es5.js.map