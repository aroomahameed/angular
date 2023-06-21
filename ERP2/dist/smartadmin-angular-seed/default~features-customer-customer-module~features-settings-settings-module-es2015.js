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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadCountries = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Country/API] Load Countries');
const loadCountriesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Country/API] Load Countries Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addCountry = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Country/API] Add Country', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addCountrySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Country/API] Add Country Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteCountry = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Country/API] Delete Country', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteCountrySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Country/API] Delete Country Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentCountrySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Country/API] Select Current Country', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _country_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./country.service */ "./src/app/features/store/settings/country/country.service.ts");
/* harmony import */ var _country_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./country.actions */ "./src/app/features/store/settings/country/country.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _country_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./country.selectors */ "./src/app/features/store/settings/country/country.selectors.ts");








let CountryEffects = class CountryEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadCountries$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_country_actions__WEBPACK_IMPORTED_MODULE_5__["loadCountries"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_country_selectors__WEBPACK_IMPORTED_MODULE_7__["allCountryLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_country_actions__WEBPACK_IMPORTED_MODULE_5__["loadCountriesSuccess"])({ data }))))));
        this.addCountry$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_country_actions__WEBPACK_IMPORTED_MODULE_5__["addCountry"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_country_actions__WEBPACK_IMPORTED_MODULE_5__["addCountrySuccess"])({ data }))))));
        this.deleteCountry$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_country_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCountry"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_country_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCountrySuccess"])({ id: data.id }))))));
    }
};
CountryEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _country_service__WEBPACK_IMPORTED_MODULE_4__["CountryService"] }
];
CountryEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _country_service__WEBPACK_IMPORTED_MODULE_4__["CountryService"]])
], CountryEffects);



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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _country_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country.actions */ "./src/app/features/store/settings/country/country.actions.ts");



const countryFeatureKey = 'countries';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allCountriesLoaded: false,
    currentCountry: null
});
const countryReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_country_actions__WEBPACK_IMPORTED_MODULE_2__["addCountrySuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentCountry: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_country_actions__WEBPACK_IMPORTED_MODULE_2__["deleteCountrySuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_country_actions__WEBPACK_IMPORTED_MODULE_2__["loadCountriesSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_country_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentCountrySuccess"], (state, action) => (Object.assign({}, state, { currentCountry: action.data }))));
function reducer(state, action) {
    return countryReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _country_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country.reducer */ "./src/app/features/store/settings/country/country.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_country_reducer__WEBPACK_IMPORTED_MODULE_1__["countryFeatureKey"]);
const selectAllCountries = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _country_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allCountryLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allCountriesLoaded);
const selectCurrentCountry = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentCountry);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let CountryService = class CountryService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/countries/`;
    }
    findAll() {
        return this.http.get(this.url);
    }
    save(item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    }
    update(item) {
        return this.http.put(`${this.url}${item.id}/`, item);
    }
    delete(item) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
};
CountryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CountryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], CountryService);



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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadCurrencies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Currency/API] Load Currencies');
const loadCurrenciesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Currency/API] Load Currencies Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addCurrency = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Currency/API] Add Currency', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addCurrencySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Currency/API] Add Currency Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteCurrency = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Currency/API] Delete Currency', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteCurrencySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Currency/API] Delete Currency Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentCurrencySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Currency/API] Select Current Currency', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _currency_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./currency.service */ "./src/app/features/store/settings/currency/currency.service.ts");
/* harmony import */ var _currency_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currency.actions */ "./src/app/features/store/settings/currency/currency.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _currency_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./currency.selectors */ "./src/app/features/store/settings/currency/currency.selectors.ts");








let CurrencyEffects = class CurrencyEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadCurrencies$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_currency_actions__WEBPACK_IMPORTED_MODULE_5__["loadCurrencies"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_currency_selectors__WEBPACK_IMPORTED_MODULE_7__["allCurrencyLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_currency_actions__WEBPACK_IMPORTED_MODULE_5__["loadCurrenciesSuccess"])({ data }))))));
        this.addCurrency$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_currency_actions__WEBPACK_IMPORTED_MODULE_5__["addCurrency"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_currency_actions__WEBPACK_IMPORTED_MODULE_5__["addCurrencySuccess"])({ data }))))));
        this.deleteCurrency$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_currency_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCurrency"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_currency_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCurrencySuccess"])({ id: data.id }))))));
    }
};
CurrencyEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _currency_service__WEBPACK_IMPORTED_MODULE_4__["CurrencyService"] }
];
CurrencyEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _currency_service__WEBPACK_IMPORTED_MODULE_4__["CurrencyService"]])
], CurrencyEffects);



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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _currency_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currency.actions */ "./src/app/features/store/settings/currency/currency.actions.ts");



const currencyFeatureKey = 'currencies';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allCurrenciesLoaded: false,
    currentCurrency: null
});
const currencyReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_currency_actions__WEBPACK_IMPORTED_MODULE_2__["addCurrencySuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentCurrency: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_currency_actions__WEBPACK_IMPORTED_MODULE_2__["deleteCurrencySuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_currency_actions__WEBPACK_IMPORTED_MODULE_2__["loadCurrenciesSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_currency_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentCurrencySuccess"], (state, action) => (Object.assign({}, state, { currentCurrency: action.data }))));
function reducer(state, action) {
    return currencyReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _currency_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency.reducer */ "./src/app/features/store/settings/currency/currency.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_currency_reducer__WEBPACK_IMPORTED_MODULE_1__["currencyFeatureKey"]);
const selectAllCurrencies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _currency_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allCurrencyLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allCurrenciesLoaded);
const selectCurrentCurrency = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentCurrency);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let CurrencyService = class CurrencyService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/currencies/`;
    }
    findAll() {
        return this.http.get(this.url);
    }
    save(item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    }
    update(item) {
        return this.http.put(`${this.url}${item.id}/`, item);
    }
    delete(item) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
};
CurrencyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CurrencyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], CurrencyService);



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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadPaymentterms = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Paymentterm/API] Load Paymentterms');
const loadPaymenttermsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Paymentterm/API] Load Paymentterms Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addPaymentterm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Paymentterm/API] Add Paymentterm', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addPaymenttermSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Paymentterm/API] Add Paymentterm Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deletePaymentterm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Paymentterm/API] Delete Paymentterm', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deletePaymenttermSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Paymentterm/API] Delete Paymentterm Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentPaymenttermSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Paymentterm/API] Select Current Paymentterm', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _paymentterm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paymentterm.service */ "./src/app/features/store/settings/paymentterm/paymentterm.service.ts");
/* harmony import */ var _paymentterm_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paymentterm.actions */ "./src/app/features/store/settings/paymentterm/paymentterm.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _paymentterm_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paymentterm.selectors */ "./src/app/features/store/settings/paymentterm/paymentterm.selectors.ts");








let PaymenttermEffects = class PaymenttermEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadPaymentterms$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_paymentterm_actions__WEBPACK_IMPORTED_MODULE_5__["loadPaymentterms"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_paymentterm_selectors__WEBPACK_IMPORTED_MODULE_7__["allPaymenttermLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_paymentterm_actions__WEBPACK_IMPORTED_MODULE_5__["loadPaymenttermsSuccess"])({ data }))))));
        this.addPaymentterm$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_paymentterm_actions__WEBPACK_IMPORTED_MODULE_5__["addPaymentterm"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_paymentterm_actions__WEBPACK_IMPORTED_MODULE_5__["addPaymenttermSuccess"])({ data }))))));
        this.deletePaymentterm$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_paymentterm_actions__WEBPACK_IMPORTED_MODULE_5__["deletePaymentterm"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_paymentterm_actions__WEBPACK_IMPORTED_MODULE_5__["deletePaymenttermSuccess"])({ id: data.id }))))));
    }
};
PaymenttermEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _paymentterm_service__WEBPACK_IMPORTED_MODULE_4__["PaymenttermService"] }
];
PaymenttermEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _paymentterm_service__WEBPACK_IMPORTED_MODULE_4__["PaymenttermService"]])
], PaymenttermEffects);



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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _paymentterm_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paymentterm.actions */ "./src/app/features/store/settings/paymentterm/paymentterm.actions.ts");



const paymenttermFeatureKey = 'paymentterms';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allPaymenttermsLoaded: false,
    currentPaymentterm: null
});
const paymenttermReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_paymentterm_actions__WEBPACK_IMPORTED_MODULE_2__["addPaymenttermSuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentPaymentterm: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_paymentterm_actions__WEBPACK_IMPORTED_MODULE_2__["deletePaymenttermSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_paymentterm_actions__WEBPACK_IMPORTED_MODULE_2__["loadPaymenttermsSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_paymentterm_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentPaymenttermSuccess"], (state, action) => (Object.assign({}, state, { currentPaymentterm: action.data }))));
function reducer(state, action) {
    return paymenttermReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _paymentterm_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paymentterm.reducer */ "./src/app/features/store/settings/paymentterm/paymentterm.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_paymentterm_reducer__WEBPACK_IMPORTED_MODULE_1__["paymenttermFeatureKey"]);
const selectAllPaymentterms = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _paymentterm_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allPaymenttermLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allPaymenttermsLoaded);
const selectCurrentPaymentterm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentPaymentterm);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let PaymenttermService = class PaymenttermService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/payment-terms/`;
    }
    findAll() {
        return this.http.get(this.url);
    }
    save(item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    }
    update(item) {
        return this.http.put(`${this.url}${item.id}/`, item);
    }
    delete(item) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
};
PaymenttermService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PaymenttermService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], PaymenttermService);



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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadRegions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Load Regions');
const loadRegionsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Load Regions Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addRegion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Add Region', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addRegionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Add Region Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteRegion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Delete Region', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteRegionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Delete Region Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentRegionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Select Current Region', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _region_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./region.service */ "./src/app/features/store/settings/region/region.service.ts");
/* harmony import */ var _region_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./region.actions */ "./src/app/features/store/settings/region/region.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _region_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./region.selectors */ "./src/app/features/store/settings/region/region.selectors.ts");








let RegionEffects = class RegionEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadRegions$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_region_actions__WEBPACK_IMPORTED_MODULE_5__["loadRegions"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_region_selectors__WEBPACK_IMPORTED_MODULE_7__["allRegionLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_region_actions__WEBPACK_IMPORTED_MODULE_5__["loadRegionsSuccess"])({ data }))))));
        this.addRegion$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_region_actions__WEBPACK_IMPORTED_MODULE_5__["addRegion"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_region_actions__WEBPACK_IMPORTED_MODULE_5__["addRegionSuccess"])({ data }))))));
        this.deleteRegion$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_region_actions__WEBPACK_IMPORTED_MODULE_5__["deleteRegion"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_region_actions__WEBPACK_IMPORTED_MODULE_5__["deleteRegionSuccess"])({ id: data.id }))))));
    }
};
RegionEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _region_service__WEBPACK_IMPORTED_MODULE_4__["RegionService"] }
];
RegionEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _region_service__WEBPACK_IMPORTED_MODULE_4__["RegionService"]])
], RegionEffects);



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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _region_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region.actions */ "./src/app/features/store/settings/region/region.actions.ts");



const regionFeatureKey = 'regions';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allRegionsLoaded: false,
    currentRegion: null
});
const regionReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_region_actions__WEBPACK_IMPORTED_MODULE_2__["addRegionSuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentRegion: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_region_actions__WEBPACK_IMPORTED_MODULE_2__["deleteRegionSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_region_actions__WEBPACK_IMPORTED_MODULE_2__["loadRegionsSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_region_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentRegionSuccess"], (state, action) => (Object.assign({}, state, { currentRegion: action.data }))));
function reducer(state, action) {
    return regionReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _region_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./region.reducer */ "./src/app/features/store/settings/region/region.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_region_reducer__WEBPACK_IMPORTED_MODULE_1__["regionFeatureKey"]);
const selectAllRegions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _region_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allRegionLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allRegionsLoaded);
const selectCurrentRegion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentRegion);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let RegionService = class RegionService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/regions/`;
    }
    findAll() {
        return this.http.get(this.url);
    }
    save(item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    }
    update(item) {
        return this.http.put(`${this.url}${item.id}/`, item);
    }
    delete(item) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
};
RegionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
RegionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], RegionService);



/***/ })

}]);
//# sourceMappingURL=default~features-customer-customer-module~features-settings-settings-module-es2015.js.map