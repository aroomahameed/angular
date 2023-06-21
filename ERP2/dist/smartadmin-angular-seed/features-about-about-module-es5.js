(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-about-about-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/features/about/introduction/introduction.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/about/introduction/introduction.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-panel>\r\n    <h2 panelTitle>Smart Form Testing</h2>\r\n    <div panelContent>\r\n        <smart-form [data]=\"data\"></smart-form>\r\n    </div>\r\n</smart-panel>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/about/privacy/privacy.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/about/privacy/privacy.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"subheader\">\r\n  <h1 class=\"subheader-title\">\r\n    <i class=\"fal fa-info-circle\"></i> Privacy\r\n    <small>\r\n      SmartAdmin Privacy\r\n    </small>\r\n  </h1>\r\n</div>\r\n<div class=\"fs-lg fw-300 p-5 bg-white border-faded rounded mb-g\">\r\n  <h2>Privacy</h2>\r\n  <p class=\"mb-g\">\r\n    Your privacy is important to us at SmartAdmin and the protection,\r\n    confidentiality and integrity of your personal data are our prime concerns.\r\n    We will only use your personal information to administer your account,\r\n    provide the products and services you have requested from us, and to keep\r\n    you informed about our products and services (if you have consented to\r\n    this). We only use your data for the purposes for which it was collected\r\n    and, where relevant, to meet local legal obligations. We will retain your\r\n    personal information only for as long as is necessary for the purposes for\r\n    which the information was collected, or as long as is required pursuant to\r\n    law.\r\n  </p>\r\n  <h3>Cookies and other similar technologies</h3>\r\n  <p>\r\n    We collect certain data through cookies and similar technologies (e.g. web\r\n    beacons, tags, device identifiers). Cookies are text files placed on your\r\n    computer to collect standard internet log information and visitor behaviour\r\n    information. This information is used to track visitor use of the website\r\n    and to compile statistical reports on website activity. We register your\r\n    interaction with our services in order to improve our website, content and\r\n    services. Our use of such technologies and the data collected is described\r\n    in more detail in our Cookie Policy. You can manage your cookie preferences\r\n    through your browser settings.\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/features/about/about.module.ts":
/*!************************************************!*\
  !*** ./src/app/features/about/about.module.ts ***!
  \************************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./introduction/introduction.component */ "./src/app/features/about/introduction/introduction.component.ts");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privacy/privacy.component */ "./src/app/features/about/privacy/privacy.component.ts");
/* harmony import */ var _shared_panels_panels_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/panels/panels.module */ "./src/app/shared/panels/panels.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_finance_account__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/finance/account */ "./src/app/features/store/finance/account/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");











var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_5__["IntroductionComponent"], _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_6__["PrivacyComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', pathMatch: 'full', redirectTo: 'introduction' },
                    {
                        path: 'introduction', component: _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_5__["IntroductionComponent"],
                        data: { breadcrumbs: ['Application Intel', 'Introduction'] },
                    },
                    {
                        path: 'privacy', component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_6__["PrivacyComponent"],
                        data: { breadcrumbs: ['Application Intel', 'Privacy'] },
                    },
                ]),
                _shared_panels_panels_module__WEBPACK_IMPORTED_MODULE_7__["PanelsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature(_store_finance_account__WEBPACK_IMPORTED_MODULE_9__["accountFeatureKey"], _store_finance_account__WEBPACK_IMPORTED_MODULE_9__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forFeature([_store_finance_account__WEBPACK_IMPORTED_MODULE_9__["AccountEffects"]]),
            ],
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/app/features/about/introduction/introduction.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/about/introduction/introduction.component.ts ***!
  \***********************************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _store_finance_account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/finance/account */ "./src/app/features/store/finance/account/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");






var IntroductionComponent = /** @class */ (function () {
    function IntroductionComponent(store) {
        this.store = store;
        this.app = src_app_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].app;
        this.model = '';
        this.data = [];
    }
    IntroductionComponent.prototype.ngOnInit = function () {
        this.store.dispatch(Object(_store_finance_account__WEBPACK_IMPORTED_MODULE_4__["loadAccounts"])());
        this.accounts = this.store.select(_store_finance_account__WEBPACK_IMPORTED_MODULE_4__["selectAllAccounts"]);
        this.build();
    };
    IntroductionComponent.prototype.build = function () {
        this.data = [
            {
                row: [
                    { label: 'Name', name: 'name' },
                    { label: 'sdfsdf', name: 'namedd' },
                    { label: 'Name3', name: 'name3', disable: true, validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                    { label: 'Name4', name: 'name4', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ],
            },
            {
                row: [
                    { label: 'A Suitable name', name: 'name5', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                    { label: 'Name6', type: 'date', name: 'name6', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                    { label: 'Name6', name: 'name6', items: this.accounts },
                    { label: 'Name6sfasdf', name: 'name6asdf', type: 'check' },
                ],
            },
        ];
    };
    IntroductionComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
    ]; };
    IntroductionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'smart-introduction',
            template: __webpack_require__(/*! raw-loader!./introduction.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/about/introduction/introduction.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], IntroductionComponent);
    return IntroductionComponent;
}());



/***/ }),

/***/ "./src/app/features/about/privacy/privacy.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/about/privacy/privacy.component.ts ***!
  \*************************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () {
    };
    PrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'smart-privacy',
            template: __webpack_require__(/*! raw-loader!./privacy.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/about/privacy/privacy.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "./src/app/features/store/finance/account/account.actions.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/store/finance/account/account.actions.ts ***!
  \*******************************************************************/
/*! exports provided: loadAccounts, loadAccountsSuccess, addAccount, addAccountSuccess, deleteAccount, deleteAccountSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAccounts", function() { return loadAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAccountsSuccess", function() { return loadAccountsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAccount", function() { return addAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAccountSuccess", function() { return addAccountSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAccount", function() { return deleteAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAccountSuccess", function() { return deleteAccountSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadAccounts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Account/API] Load Accounts');
var loadAccountsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Account/API] Load Accounts Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addAccount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Account/API] Add Account', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addAccountSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Account/API] Add Account Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteAccount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Account/API] Delete Account', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteAccountSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Account/API] Delete Account Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/finance/account/account.effects.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/store/finance/account/account.effects.ts ***!
  \*******************************************************************/
/*! exports provided: AccountEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEffects", function() { return AccountEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.service */ "./src/app/features/store/finance/account/account.service.ts");
/* harmony import */ var _account_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account.actions */ "./src/app/features/store/finance/account/account.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _account_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account.selectors */ "./src/app/features/store/finance/account/account.selectors.ts");








var AccountEffects = /** @class */ (function () {
    function AccountEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadAccounts$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_account_actions__WEBPACK_IMPORTED_MODULE_5__["loadAccounts"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_account_selectors__WEBPACK_IMPORTED_MODULE_7__["allAccountLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_account_actions__WEBPACK_IMPORTED_MODULE_5__["loadAccountsSuccess"])({ data: data }); })); })); });
        this.addAccount$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_account_actions__WEBPACK_IMPORTED_MODULE_5__["addAccount"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_account_actions__WEBPACK_IMPORTED_MODULE_5__["addAccountSuccess"])({ data: data }); })); })); });
        this.deleteAccount$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_account_actions__WEBPACK_IMPORTED_MODULE_5__["deleteAccount"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var id = _a.id;
            return _this.service.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_account_actions__WEBPACK_IMPORTED_MODULE_5__["deleteAccountSuccess"])({ id: id }); }));
        })); });
    }
    AccountEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }
    ]; };
    AccountEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]])
    ], AccountEffects);
    return AccountEffects;
}());



/***/ }),

/***/ "./src/app/features/store/finance/account/account.reducer.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/store/finance/account/account.reducer.ts ***!
  \*******************************************************************/
/*! exports provided: accountFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountFeatureKey", function() { return accountFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _account_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.actions */ "./src/app/features/store/finance/account/account.actions.ts");
var _a;



var accountFeatureKey = 'accounts';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allLoaded: false,
});
var accountReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_account_actions__WEBPACK_IMPORTED_MODULE_2__["addAccountSuccess"], function (state, action) { return adapter.upsertOne(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_account_actions__WEBPACK_IMPORTED_MODULE_2__["deleteAccountSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_account_actions__WEBPACK_IMPORTED_MODULE_2__["loadAccountsSuccess"], function (state, action) { return adapter.addAll(action.data, state); }));
function reducer(state, action) {
    return accountReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/finance/account/account.selectors.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/store/finance/account/account.selectors.ts ***!
  \*********************************************************************/
/*! exports provided: selectAllAccounts, allAccountLoaded, selectAllExceptCashInHand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllAccounts", function() { return selectAllAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allAccountLoaded", function() { return allAccountLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllExceptCashInHand", function() { return selectAllExceptCashInHand; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _account_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.reducer */ "./src/app/features/store/finance/account/account.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_account_reducer__WEBPACK_IMPORTED_MODULE_1__["accountFeatureKey"]);
var selectAllAccounts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _account_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allAccountLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allLoaded; });
var selectAllExceptCashInHand = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAllAccounts, function (heads) { return heads.filter(function (h) { return parseInt(h.id) !== 3; }); });


/***/ }),

/***/ "./src/app/features/store/finance/account/account.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/store/finance/account/account.service.ts ***!
  \*******************************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/finance/accounts/";
    }
    AccountService.prototype.findAll = function () {
        console.log(this.url);
        return this.http.get(this.url);
    };
    AccountService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    AccountService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    AccountService.prototype.delete = function (id) {
        return this.http.delete(this.url + "/" + id + "/");
    };
    AccountService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/features/store/finance/account/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/store/finance/account/index.ts ***!
  \*********************************************************/
/*! exports provided: AccountEffects, AccountService, selectAllAccounts, allAccountLoaded, selectAllExceptCashInHand, accountFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadAccounts, loadAccountsSuccess, addAccount, addAccountSuccess, deleteAccount, deleteAccountSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _account_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.effects */ "./src/app/features/store/finance/account/account.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountEffects", function() { return _account_effects__WEBPACK_IMPORTED_MODULE_0__["AccountEffects"]; });

/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.service */ "./src/app/features/store/finance/account/account.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return _account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]; });

/* harmony import */ var _account_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.selectors */ "./src/app/features/store/finance/account/account.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllAccounts", function() { return _account_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllAccounts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allAccountLoaded", function() { return _account_selectors__WEBPACK_IMPORTED_MODULE_2__["allAccountLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllExceptCashInHand", function() { return _account_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllExceptCashInHand"]; });

/* harmony import */ var _account_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.reducer */ "./src/app/features/store/finance/account/account.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accountFeatureKey", function() { return _account_reducer__WEBPACK_IMPORTED_MODULE_3__["accountFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _account_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _account_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _account_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _account_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _account_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _account_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _account_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _account_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.actions */ "./src/app/features/store/finance/account/account.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadAccounts", function() { return _account_actions__WEBPACK_IMPORTED_MODULE_4__["loadAccounts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadAccountsSuccess", function() { return _account_actions__WEBPACK_IMPORTED_MODULE_4__["loadAccountsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addAccount", function() { return _account_actions__WEBPACK_IMPORTED_MODULE_4__["addAccount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addAccountSuccess", function() { return _account_actions__WEBPACK_IMPORTED_MODULE_4__["addAccountSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteAccount", function() { return _account_actions__WEBPACK_IMPORTED_MODULE_4__["deleteAccount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteAccountSuccess", function() { return _account_actions__WEBPACK_IMPORTED_MODULE_4__["deleteAccountSuccess"]; });








/***/ })

}]);
//# sourceMappingURL=features-about-about-module-es5.js.map