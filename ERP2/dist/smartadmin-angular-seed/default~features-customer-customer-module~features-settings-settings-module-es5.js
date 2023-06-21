(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~features-customer-customer-module~features-settings-settings-module"],{

/***/ "./src/app/features/store/settings/country/country.actions.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/store/settings/country/country.actions.ts ***!
  \********************************************************************/
/*! exports provided: loadCountries, loadCountriesSuccess, addCountry, addCountrySuccess, deleteCountry, deleteCountrySuccess, selectCurrentCountrySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCountries", function() { return loadCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCountriesSuccess", function() { return loadCountriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCountry", function() { return addCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCountrySuccess", function() { return addCountrySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCountry", function() { return deleteCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCountrySuccess", function() { return deleteCountrySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCountrySuccess", function() { return selectCurrentCountrySuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadCountries = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Country/API] Load Countries');
var loadCountriesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Country/API] Load Countries Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addCountry = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Country/API] Add Country', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addCountrySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Country/API] Add Country Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteCountry = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Country/API] Delete Country', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteCountrySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Country/API] Delete Country Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentCountrySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Country/API] Select Current Country', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/settings/country/country.effects.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/store/settings/country/country.effects.ts ***!
  \********************************************************************/
/*! exports provided: CountryEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryEffects", function() { return CountryEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _country_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./country.service */ "./src/app/features/store/settings/country/country.service.ts");
/* harmony import */ var _country_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./country.actions */ "./src/app/features/store/settings/country/country.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _country_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./country.selectors */ "./src/app/features/store/settings/country/country.selectors.ts");








var CountryEffects = /** @class */ (function () {
    function CountryEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadCountries$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_country_actions__WEBPACK_IMPORTED_MODULE_5__["loadCountries"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_country_selectors__WEBPACK_IMPORTED_MODULE_7__["allCountryLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_country_actions__WEBPACK_IMPORTED_MODULE_5__["loadCountriesSuccess"])({ data: data }); })); })); });
        this.addCountry$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_country_actions__WEBPACK_IMPORTED_MODULE_5__["addCountry"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_country_actions__WEBPACK_IMPORTED_MODULE_5__["addCountrySuccess"])({ data: data }); })); })); });
        this.deleteCountry$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_country_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCountry"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_country_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCountrySuccess"])({ id: data.id }); }));
        })); });
    }
    CountryEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _country_service__WEBPACK_IMPORTED_MODULE_4__["CountryService"] }
    ]; };
    CountryEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _country_service__WEBPACK_IMPORTED_MODULE_4__["CountryService"]])
    ], CountryEffects);
    return CountryEffects;
}());



/***/ }),

/***/ "./src/app/features/store/settings/country/country.reducer.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/store/settings/country/country.reducer.ts ***!
  \********************************************************************/
/*! exports provided: countryFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryFeatureKey", function() { return countryFeatureKey; });
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
/* harmony import */ var _country_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./country.actions */ "./src/app/features/store/settings/country/country.actions.ts");

var _a;



var countryFeatureKey = 'countries';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allCountriesLoaded: false,
    currentCountry: null
});
var countryReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_country_actions__WEBPACK_IMPORTED_MODULE_3__["addCountrySuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentCountry: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_country_actions__WEBPACK_IMPORTED_MODULE_3__["deleteCountrySuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_country_actions__WEBPACK_IMPORTED_MODULE_3__["loadCountriesSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_country_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentCountrySuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentCountry: action.data })); }));
function reducer(state, action) {
    return countryReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/settings/country/country.selectors.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/store/settings/country/country.selectors.ts ***!
  \**********************************************************************/
/*! exports provided: selectAllCountries, allCountryLoaded, selectCurrentCountry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllCountries", function() { return selectAllCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allCountryLoaded", function() { return allCountryLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCountry", function() { return selectCurrentCountry; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _country_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country.reducer */ "./src/app/features/store/settings/country/country.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_country_reducer__WEBPACK_IMPORTED_MODULE_1__["countryFeatureKey"]);
var selectAllCountries = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _country_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allCountryLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allCountriesLoaded; });
var selectCurrentCountry = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentCountry; });


/***/ }),

/***/ "./src/app/features/store/settings/country/country.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/store/settings/country/country.service.ts ***!
  \********************************************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/countries/";
    }
    CountryService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    CountryService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    CountryService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    CountryService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    CountryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    CountryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/features/store/settings/country/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/store/settings/country/index.ts ***!
  \**********************************************************/
/*! exports provided: CountryEffects, CountryService, selectAllCountries, allCountryLoaded, selectCurrentCountry, countryFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadCountries, loadCountriesSuccess, addCountry, addCountrySuccess, deleteCountry, deleteCountrySuccess, selectCurrentCountrySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _country_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country.effects */ "./src/app/features/store/settings/country/country.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CountryEffects", function() { return _country_effects__WEBPACK_IMPORTED_MODULE_0__["CountryEffects"]; });

/* harmony import */ var _country_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country.service */ "./src/app/features/store/settings/country/country.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return _country_service__WEBPACK_IMPORTED_MODULE_1__["CountryService"]; });

/* harmony import */ var _country_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country.selectors */ "./src/app/features/store/settings/country/country.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllCountries", function() { return _country_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllCountries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allCountryLoaded", function() { return _country_selectors__WEBPACK_IMPORTED_MODULE_2__["allCountryLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCountry", function() { return _country_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentCountry"]; });

/* harmony import */ var _country_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./country.reducer */ "./src/app/features/store/settings/country/country.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countryFeatureKey", function() { return _country_reducer__WEBPACK_IMPORTED_MODULE_3__["countryFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _country_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _country_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _country_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _country_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _country_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _country_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _country_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _country_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./country.actions */ "./src/app/features/store/settings/country/country.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCountries", function() { return _country_actions__WEBPACK_IMPORTED_MODULE_4__["loadCountries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCountriesSuccess", function() { return _country_actions__WEBPACK_IMPORTED_MODULE_4__["loadCountriesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCountry", function() { return _country_actions__WEBPACK_IMPORTED_MODULE_4__["addCountry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCountrySuccess", function() { return _country_actions__WEBPACK_IMPORTED_MODULE_4__["addCountrySuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCountry", function() { return _country_actions__WEBPACK_IMPORTED_MODULE_4__["deleteCountry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCountrySuccess", function() { return _country_actions__WEBPACK_IMPORTED_MODULE_4__["deleteCountrySuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCountrySuccess", function() { return _country_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentCountrySuccess"]; });








/***/ }),

/***/ "./src/app/features/store/settings/currency/currency.actions.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/store/settings/currency/currency.actions.ts ***!
  \**********************************************************************/
/*! exports provided: loadCurrencies, loadCurrenciesSuccess, addCurrency, addCurrencySuccess, deleteCurrency, deleteCurrencySuccess, selectCurrentCurrencySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCurrencies", function() { return loadCurrencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCurrenciesSuccess", function() { return loadCurrenciesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCurrency", function() { return addCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCurrencySuccess", function() { return addCurrencySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCurrency", function() { return deleteCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCurrencySuccess", function() { return deleteCurrencySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCurrencySuccess", function() { return selectCurrentCurrencySuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadCurrencies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Currency/API] Load Currencies');
var loadCurrenciesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Currency/API] Load Currencies Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addCurrency = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Currency/API] Add Currency', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addCurrencySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Currency/API] Add Currency Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteCurrency = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Currency/API] Delete Currency', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteCurrencySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Currency/API] Delete Currency Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentCurrencySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Currency/API] Select Current Currency', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/settings/currency/currency.effects.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/store/settings/currency/currency.effects.ts ***!
  \**********************************************************************/
/*! exports provided: CurrencyEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyEffects", function() { return CurrencyEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _currency_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./currency.service */ "./src/app/features/store/settings/currency/currency.service.ts");
/* harmony import */ var _currency_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currency.actions */ "./src/app/features/store/settings/currency/currency.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _currency_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./currency.selectors */ "./src/app/features/store/settings/currency/currency.selectors.ts");








var CurrencyEffects = /** @class */ (function () {
    function CurrencyEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadCurrencies$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_currency_actions__WEBPACK_IMPORTED_MODULE_5__["loadCurrencies"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_currency_selectors__WEBPACK_IMPORTED_MODULE_7__["allCurrencyLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_currency_actions__WEBPACK_IMPORTED_MODULE_5__["loadCurrenciesSuccess"])({ data: data }); })); })); });
        this.addCurrency$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_currency_actions__WEBPACK_IMPORTED_MODULE_5__["addCurrency"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_currency_actions__WEBPACK_IMPORTED_MODULE_5__["addCurrencySuccess"])({ data: data }); })); })); });
        this.deleteCurrency$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_currency_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCurrency"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_currency_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCurrencySuccess"])({ id: data.id }); }));
        })); });
    }
    CurrencyEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _currency_service__WEBPACK_IMPORTED_MODULE_4__["CurrencyService"] }
    ]; };
    CurrencyEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _currency_service__WEBPACK_IMPORTED_MODULE_4__["CurrencyService"]])
    ], CurrencyEffects);
    return CurrencyEffects;
}());



/***/ }),

/***/ "./src/app/features/store/settings/currency/currency.reducer.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/store/settings/currency/currency.reducer.ts ***!
  \**********************************************************************/
/*! exports provided: currencyFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencyFeatureKey", function() { return currencyFeatureKey; });
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
/* harmony import */ var _currency_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currency.actions */ "./src/app/features/store/settings/currency/currency.actions.ts");

var _a;



var currencyFeatureKey = 'currencies';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allCurrenciesLoaded: false,
    currentCurrency: null
});
var currencyReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_currency_actions__WEBPACK_IMPORTED_MODULE_3__["addCurrencySuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentCurrency: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_currency_actions__WEBPACK_IMPORTED_MODULE_3__["deleteCurrencySuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_currency_actions__WEBPACK_IMPORTED_MODULE_3__["loadCurrenciesSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_currency_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentCurrencySuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentCurrency: action.data })); }));
function reducer(state, action) {
    return currencyReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/settings/currency/currency.selectors.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/store/settings/currency/currency.selectors.ts ***!
  \************************************************************************/
/*! exports provided: selectAllCurrencies, allCurrencyLoaded, selectCurrentCurrency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllCurrencies", function() { return selectAllCurrencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allCurrencyLoaded", function() { return allCurrencyLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCurrency", function() { return selectCurrentCurrency; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _currency_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency.reducer */ "./src/app/features/store/settings/currency/currency.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_currency_reducer__WEBPACK_IMPORTED_MODULE_1__["currencyFeatureKey"]);
var selectAllCurrencies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _currency_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allCurrencyLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allCurrenciesLoaded; });
var selectCurrentCurrency = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentCurrency; });


/***/ }),

/***/ "./src/app/features/store/settings/currency/currency.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/store/settings/currency/currency.service.ts ***!
  \**********************************************************************/
/*! exports provided: CurrencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyService", function() { return CurrencyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var CurrencyService = /** @class */ (function () {
    function CurrencyService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/currencies/";
    }
    CurrencyService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    CurrencyService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    CurrencyService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    CurrencyService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    CurrencyService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    CurrencyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CurrencyService);
    return CurrencyService;
}());



/***/ }),

/***/ "./src/app/features/store/settings/currency/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/store/settings/currency/index.ts ***!
  \***********************************************************/
/*! exports provided: CurrencyEffects, CurrencyService, selectAllCurrencies, allCurrencyLoaded, selectCurrentCurrency, currencyFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadCurrencies, loadCurrenciesSuccess, addCurrency, addCurrencySuccess, deleteCurrency, deleteCurrencySuccess, selectCurrentCurrencySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _currency_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency.effects */ "./src/app/features/store/settings/currency/currency.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyEffects", function() { return _currency_effects__WEBPACK_IMPORTED_MODULE_0__["CurrencyEffects"]; });

/* harmony import */ var _currency_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency.service */ "./src/app/features/store/settings/currency/currency.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyService", function() { return _currency_service__WEBPACK_IMPORTED_MODULE_1__["CurrencyService"]; });

/* harmony import */ var _currency_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currency.selectors */ "./src/app/features/store/settings/currency/currency.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllCurrencies", function() { return _currency_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllCurrencies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allCurrencyLoaded", function() { return _currency_selectors__WEBPACK_IMPORTED_MODULE_2__["allCurrencyLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCurrency", function() { return _currency_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentCurrency"]; });

/* harmony import */ var _currency_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currency.reducer */ "./src/app/features/store/settings/currency/currency.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currencyFeatureKey", function() { return _currency_reducer__WEBPACK_IMPORTED_MODULE_3__["currencyFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _currency_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _currency_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _currency_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _currency_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _currency_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _currency_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _currency_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _currency_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./currency.actions */ "./src/app/features/store/settings/currency/currency.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCurrencies", function() { return _currency_actions__WEBPACK_IMPORTED_MODULE_4__["loadCurrencies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCurrenciesSuccess", function() { return _currency_actions__WEBPACK_IMPORTED_MODULE_4__["loadCurrenciesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCurrency", function() { return _currency_actions__WEBPACK_IMPORTED_MODULE_4__["addCurrency"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCurrencySuccess", function() { return _currency_actions__WEBPACK_IMPORTED_MODULE_4__["addCurrencySuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCurrency", function() { return _currency_actions__WEBPACK_IMPORTED_MODULE_4__["deleteCurrency"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCurrencySuccess", function() { return _currency_actions__WEBPACK_IMPORTED_MODULE_4__["deleteCurrencySuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCurrencySuccess", function() { return _currency_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentCurrencySuccess"]; });








/***/ }),

/***/ "./src/app/features/store/settings/paymentterm/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/store/settings/paymentterm/index.ts ***!
  \**************************************************************/
/*! exports provided: PaymenttermEffects, PaymenttermService, selectAllPaymentterms, allPaymenttermLoaded, selectCurrentPaymentterm, paymenttermFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadPaymentterms, loadPaymenttermsSuccess, addPaymentterm, addPaymenttermSuccess, deletePaymentterm, deletePaymenttermSuccess, selectCurrentPaymenttermSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paymentterm_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paymentterm.effects */ "./src/app/features/store/settings/paymentterm/paymentterm.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaymenttermEffects", function() { return _paymentterm_effects__WEBPACK_IMPORTED_MODULE_0__["PaymenttermEffects"]; });

/* harmony import */ var _paymentterm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paymentterm.service */ "./src/app/features/store/settings/paymentterm/paymentterm.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaymenttermService", function() { return _paymentterm_service__WEBPACK_IMPORTED_MODULE_1__["PaymenttermService"]; });

/* harmony import */ var _paymentterm_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paymentterm.selectors */ "./src/app/features/store/settings/paymentterm/paymentterm.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllPaymentterms", function() { return _paymentterm_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllPaymentterms"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allPaymenttermLoaded", function() { return _paymentterm_selectors__WEBPACK_IMPORTED_MODULE_2__["allPaymenttermLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentPaymentterm", function() { return _paymentterm_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentPaymentterm"]; });

/* harmony import */ var _paymentterm_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paymentterm.reducer */ "./src/app/features/store/settings/paymentterm/paymentterm.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paymenttermFeatureKey", function() { return _paymentterm_reducer__WEBPACK_IMPORTED_MODULE_3__["paymenttermFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _paymentterm_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _paymentterm_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _paymentterm_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _paymentterm_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _paymentterm_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _paymentterm_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _paymentterm_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _paymentterm_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paymentterm.actions */ "./src/app/features/store/settings/paymentterm/paymentterm.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadPaymentterms", function() { return _paymentterm_actions__WEBPACK_IMPORTED_MODULE_4__["loadPaymentterms"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadPaymenttermsSuccess", function() { return _paymentterm_actions__WEBPACK_IMPORTED_MODULE_4__["loadPaymenttermsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPaymentterm", function() { return _paymentterm_actions__WEBPACK_IMPORTED_MODULE_4__["addPaymentterm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPaymenttermSuccess", function() { return _paymentterm_actions__WEBPACK_IMPORTED_MODULE_4__["addPaymenttermSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deletePaymentterm", function() { return _paymentterm_actions__WEBPACK_IMPORTED_MODULE_4__["deletePaymentterm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deletePaymenttermSuccess", function() { return _paymentterm_actions__WEBPACK_IMPORTED_MODULE_4__["deletePaymenttermSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentPaymenttermSuccess", function() { return _paymentterm_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentPaymenttermSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/settings/paymentterm/paymentterm.actions.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/store/settings/paymentterm/paymentterm.actions.ts ***!
  \****************************************************************************/
/*! exports provided: loadPaymentterms, loadPaymenttermsSuccess, addPaymentterm, addPaymenttermSuccess, deletePaymentterm, deletePaymenttermSuccess, selectCurrentPaymenttermSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPaymentterms", function() { return loadPaymentterms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPaymenttermsSuccess", function() { return loadPaymenttermsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPaymentterm", function() { return addPaymentterm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPaymenttermSuccess", function() { return addPaymenttermSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePaymentterm", function() { return deletePaymentterm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePaymenttermSuccess", function() { return deletePaymenttermSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentPaymenttermSuccess", function() { return selectCurrentPaymenttermSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadPaymentterms = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Paymentterm/API] Load Paymentterms');
var loadPaymenttermsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Paymentterm/API] Load Paymentterms Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addPaymentterm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Paymentterm/API] Add Paymentterm', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addPaymenttermSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Paymentterm/API] Add Paymentterm Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deletePaymentterm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Paymentterm/API] Delete Paymentterm', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deletePaymenttermSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Paymentterm/API] Delete Paymentterm Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentPaymenttermSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Paymentterm/API] Select Current Paymentterm', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/settings/paymentterm/paymentterm.effects.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/store/settings/paymentterm/paymentterm.effects.ts ***!
  \****************************************************************************/
/*! exports provided: PaymenttermEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymenttermEffects", function() { return PaymenttermEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _paymentterm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paymentterm.service */ "./src/app/features/store/settings/paymentterm/paymentterm.service.ts");
/* harmony import */ var _paymentterm_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paymentterm.actions */ "./src/app/features/store/settings/paymentterm/paymentterm.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _paymentterm_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paymentterm.selectors */ "./src/app/features/store/settings/paymentterm/paymentterm.selectors.ts");








var PaymenttermEffects = /** @class */ (function () {
    function PaymenttermEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadPaymentterms$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_paymentterm_actions__WEBPACK_IMPORTED_MODULE_5__["loadPaymentterms"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_paymentterm_selectors__WEBPACK_IMPORTED_MODULE_7__["allPaymenttermLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_paymentterm_actions__WEBPACK_IMPORTED_MODULE_5__["loadPaymenttermsSuccess"])({ data: data }); })); })); });
        this.addPaymentterm$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_paymentterm_actions__WEBPACK_IMPORTED_MODULE_5__["addPaymentterm"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_paymentterm_actions__WEBPACK_IMPORTED_MODULE_5__["addPaymenttermSuccess"])({ data: data }); })); })); });
        this.deletePaymentterm$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_paymentterm_actions__WEBPACK_IMPORTED_MODULE_5__["deletePaymentterm"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_paymentterm_actions__WEBPACK_IMPORTED_MODULE_5__["deletePaymenttermSuccess"])({ id: data.id }); }));
        })); });
    }
    PaymenttermEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _paymentterm_service__WEBPACK_IMPORTED_MODULE_4__["PaymenttermService"] }
    ]; };
    PaymenttermEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _paymentterm_service__WEBPACK_IMPORTED_MODULE_4__["PaymenttermService"]])
    ], PaymenttermEffects);
    return PaymenttermEffects;
}());



/***/ }),

/***/ "./src/app/features/store/settings/paymentterm/paymentterm.reducer.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/store/settings/paymentterm/paymentterm.reducer.ts ***!
  \****************************************************************************/
/*! exports provided: paymenttermFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymenttermFeatureKey", function() { return paymenttermFeatureKey; });
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
/* harmony import */ var _paymentterm_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paymentterm.actions */ "./src/app/features/store/settings/paymentterm/paymentterm.actions.ts");

var _a;



var paymenttermFeatureKey = 'paymentterms';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allPaymenttermsLoaded: false,
    currentPaymentterm: null
});
var paymenttermReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_paymentterm_actions__WEBPACK_IMPORTED_MODULE_3__["addPaymenttermSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentPaymentterm: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_paymentterm_actions__WEBPACK_IMPORTED_MODULE_3__["deletePaymenttermSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_paymentterm_actions__WEBPACK_IMPORTED_MODULE_3__["loadPaymenttermsSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_paymentterm_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentPaymenttermSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentPaymentterm: action.data })); }));
function reducer(state, action) {
    return paymenttermReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/settings/paymentterm/paymentterm.selectors.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/store/settings/paymentterm/paymentterm.selectors.ts ***!
  \******************************************************************************/
/*! exports provided: selectAllPaymentterms, allPaymenttermLoaded, selectCurrentPaymentterm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllPaymentterms", function() { return selectAllPaymentterms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPaymenttermLoaded", function() { return allPaymenttermLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentPaymentterm", function() { return selectCurrentPaymentterm; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _paymentterm_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paymentterm.reducer */ "./src/app/features/store/settings/paymentterm/paymentterm.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_paymentterm_reducer__WEBPACK_IMPORTED_MODULE_1__["paymenttermFeatureKey"]);
var selectAllPaymentterms = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _paymentterm_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allPaymenttermLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allPaymenttermsLoaded; });
var selectCurrentPaymentterm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentPaymentterm; });


/***/ }),

/***/ "./src/app/features/store/settings/paymentterm/paymentterm.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/store/settings/paymentterm/paymentterm.service.ts ***!
  \****************************************************************************/
/*! exports provided: PaymenttermService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymenttermService", function() { return PaymenttermService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var PaymenttermService = /** @class */ (function () {
    function PaymenttermService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/payment-terms/";
    }
    PaymenttermService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    PaymenttermService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    PaymenttermService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    PaymenttermService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    PaymenttermService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    PaymenttermService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PaymenttermService);
    return PaymenttermService;
}());



/***/ }),

/***/ "./src/app/features/store/settings/region/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/store/settings/region/index.ts ***!
  \*********************************************************/
/*! exports provided: RegionEffects, RegionService, selectAllRegions, allRegionLoaded, selectCurrentRegion, regionFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadRegions, loadRegionsSuccess, addRegion, addRegionSuccess, deleteRegion, deleteRegionSuccess, selectCurrentRegionSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _region_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./region.effects */ "./src/app/features/store/settings/region/region.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegionEffects", function() { return _region_effects__WEBPACK_IMPORTED_MODULE_0__["RegionEffects"]; });

/* harmony import */ var _region_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./region.service */ "./src/app/features/store/settings/region/region.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegionService", function() { return _region_service__WEBPACK_IMPORTED_MODULE_1__["RegionService"]; });

/* harmony import */ var _region_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region.selectors */ "./src/app/features/store/settings/region/region.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllRegions", function() { return _region_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllRegions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allRegionLoaded", function() { return _region_selectors__WEBPACK_IMPORTED_MODULE_2__["allRegionLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentRegion", function() { return _region_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentRegion"]; });

/* harmony import */ var _region_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./region.reducer */ "./src/app/features/store/settings/region/region.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "regionFeatureKey", function() { return _region_reducer__WEBPACK_IMPORTED_MODULE_3__["regionFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _region_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _region_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _region_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _region_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _region_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _region_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _region_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _region_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./region.actions */ "./src/app/features/store/settings/region/region.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadRegions", function() { return _region_actions__WEBPACK_IMPORTED_MODULE_4__["loadRegions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadRegionsSuccess", function() { return _region_actions__WEBPACK_IMPORTED_MODULE_4__["loadRegionsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRegion", function() { return _region_actions__WEBPACK_IMPORTED_MODULE_4__["addRegion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRegionSuccess", function() { return _region_actions__WEBPACK_IMPORTED_MODULE_4__["addRegionSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteRegion", function() { return _region_actions__WEBPACK_IMPORTED_MODULE_4__["deleteRegion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteRegionSuccess", function() { return _region_actions__WEBPACK_IMPORTED_MODULE_4__["deleteRegionSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentRegionSuccess", function() { return _region_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentRegionSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/settings/region/region.actions.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/store/settings/region/region.actions.ts ***!
  \******************************************************************/
/*! exports provided: loadRegions, loadRegionsSuccess, addRegion, addRegionSuccess, deleteRegion, deleteRegionSuccess, selectCurrentRegionSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRegions", function() { return loadRegions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRegionsSuccess", function() { return loadRegionsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRegion", function() { return addRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRegionSuccess", function() { return addRegionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRegion", function() { return deleteRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRegionSuccess", function() { return deleteRegionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentRegionSuccess", function() { return selectCurrentRegionSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadRegions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Load Regions');
var loadRegionsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Load Regions Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addRegion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Add Region', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addRegionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Add Region Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteRegion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Delete Region', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteRegionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Delete Region Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentRegionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Select Current Region', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/settings/region/region.effects.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/store/settings/region/region.effects.ts ***!
  \******************************************************************/
/*! exports provided: RegionEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionEffects", function() { return RegionEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _region_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./region.service */ "./src/app/features/store/settings/region/region.service.ts");
/* harmony import */ var _region_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./region.actions */ "./src/app/features/store/settings/region/region.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _region_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./region.selectors */ "./src/app/features/store/settings/region/region.selectors.ts");








var RegionEffects = /** @class */ (function () {
    function RegionEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadRegions$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_region_actions__WEBPACK_IMPORTED_MODULE_5__["loadRegions"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_region_selectors__WEBPACK_IMPORTED_MODULE_7__["allRegionLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_region_actions__WEBPACK_IMPORTED_MODULE_5__["loadRegionsSuccess"])({ data: data }); })); })); });
        this.addRegion$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_region_actions__WEBPACK_IMPORTED_MODULE_5__["addRegion"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_region_actions__WEBPACK_IMPORTED_MODULE_5__["addRegionSuccess"])({ data: data }); })); })); });
        this.deleteRegion$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_region_actions__WEBPACK_IMPORTED_MODULE_5__["deleteRegion"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_region_actions__WEBPACK_IMPORTED_MODULE_5__["deleteRegionSuccess"])({ id: data.id }); }));
        })); });
    }
    RegionEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _region_service__WEBPACK_IMPORTED_MODULE_4__["RegionService"] }
    ]; };
    RegionEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _region_service__WEBPACK_IMPORTED_MODULE_4__["RegionService"]])
    ], RegionEffects);
    return RegionEffects;
}());



/***/ }),

/***/ "./src/app/features/store/settings/region/region.reducer.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/store/settings/region/region.reducer.ts ***!
  \******************************************************************/
/*! exports provided: regionFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regionFeatureKey", function() { return regionFeatureKey; });
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
/* harmony import */ var _region_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./region.actions */ "./src/app/features/store/settings/region/region.actions.ts");

var _a;



var regionFeatureKey = 'regions';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allRegionsLoaded: false,
    currentRegion: null
});
var regionReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_region_actions__WEBPACK_IMPORTED_MODULE_3__["addRegionSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentRegion: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_region_actions__WEBPACK_IMPORTED_MODULE_3__["deleteRegionSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_region_actions__WEBPACK_IMPORTED_MODULE_3__["loadRegionsSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_region_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentRegionSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentRegion: action.data })); }));
function reducer(state, action) {
    return regionReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/settings/region/region.selectors.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/store/settings/region/region.selectors.ts ***!
  \********************************************************************/
/*! exports provided: selectAllRegions, allRegionLoaded, selectCurrentRegion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllRegions", function() { return selectAllRegions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allRegionLoaded", function() { return allRegionLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentRegion", function() { return selectCurrentRegion; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _region_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./region.reducer */ "./src/app/features/store/settings/region/region.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_region_reducer__WEBPACK_IMPORTED_MODULE_1__["regionFeatureKey"]);
var selectAllRegions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _region_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allRegionLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allRegionsLoaded; });
var selectCurrentRegion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentRegion; });


/***/ }),

/***/ "./src/app/features/store/settings/region/region.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/store/settings/region/region.service.ts ***!
  \******************************************************************/
/*! exports provided: RegionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionService", function() { return RegionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var RegionService = /** @class */ (function () {
    function RegionService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/regions/";
    }
    RegionService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    RegionService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    RegionService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    RegionService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    RegionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    RegionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], RegionService);
    return RegionService;
}());



/***/ })

}]);
//# sourceMappingURL=default~features-customer-customer-module~features-settings-settings-module-es5.js.map