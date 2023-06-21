(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~features-customer-customer-module~features-productionorder-productionorder-module"],{

/***/ "./src/app/features/store/customer/client/client.actions.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/store/customer/client/client.actions.ts ***!
  \******************************************************************/
/*! exports provided: loadClients, loadClientsSuccess, addClient, addClientSuccess, deleteClient, deleteClientSuccess, selectCurrentClientSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadClients", function() { return loadClients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadClientsSuccess", function() { return loadClientsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClient", function() { return addClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClientSuccess", function() { return addClientSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteClient", function() { return deleteClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteClientSuccess", function() { return deleteClientSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentClientSuccess", function() { return selectCurrentClientSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadClients = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Client/API] Load Clients');
var loadClientsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Client/API] Load Clients Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addClient = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Client/API] Add Client', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addClientSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Client/API] Add Client Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteClient = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Client/API] Delete Client', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteClientSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Client/API] Delete Client Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentClientSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Client/API] Select Current Client', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/customer/client/client.effects.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/store/customer/client/client.effects.ts ***!
  \******************************************************************/
/*! exports provided: ClientEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEffects", function() { return ClientEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client.service */ "./src/app/features/store/customer/client/client.service.ts");
/* harmony import */ var _client_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client.actions */ "./src/app/features/store/customer/client/client.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _client_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client.selectors */ "./src/app/features/store/customer/client/client.selectors.ts");








var ClientEffects = /** @class */ (function () {
    function ClientEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadClients$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_client_actions__WEBPACK_IMPORTED_MODULE_5__["loadClients"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_client_selectors__WEBPACK_IMPORTED_MODULE_7__["allClientLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_client_actions__WEBPACK_IMPORTED_MODULE_5__["loadClientsSuccess"])({ data: data }); })); })); });
        this.addClient$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_client_actions__WEBPACK_IMPORTED_MODULE_5__["addClient"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_client_actions__WEBPACK_IMPORTED_MODULE_5__["addClientSuccess"])({ data: data }); })); })); });
        this.deleteClient$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_client_actions__WEBPACK_IMPORTED_MODULE_5__["deleteClient"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_client_actions__WEBPACK_IMPORTED_MODULE_5__["deleteClientSuccess"])({ id: data.id }); }));
        })); });
    }
    ClientEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"] }
    ]; };
    ClientEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"]])
    ], ClientEffects);
    return ClientEffects;
}());



/***/ }),

/***/ "./src/app/features/store/customer/client/client.reducer.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/store/customer/client/client.reducer.ts ***!
  \******************************************************************/
/*! exports provided: clientFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientFeatureKey", function() { return clientFeatureKey; });
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
/* harmony import */ var _client_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client.actions */ "./src/app/features/store/customer/client/client.actions.ts");

var _a;



var clientFeatureKey = 'clients';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allClientsLoaded: false,
    currentClient: null
});
var clientReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_client_actions__WEBPACK_IMPORTED_MODULE_3__["addClientSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentClient: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_client_actions__WEBPACK_IMPORTED_MODULE_3__["deleteClientSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_client_actions__WEBPACK_IMPORTED_MODULE_3__["loadClientsSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_client_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentClientSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentClient: action.data })); }));
function reducer(state, action) {
    return clientReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/customer/client/client.selectors.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/store/customer/client/client.selectors.ts ***!
  \********************************************************************/
/*! exports provided: selectAllClients, allClientLoaded, selectCurrentClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllClients", function() { return selectAllClients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allClientLoaded", function() { return allClientLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentClient", function() { return selectCurrentClient; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _client_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client.reducer */ "./src/app/features/store/customer/client/client.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_client_reducer__WEBPACK_IMPORTED_MODULE_1__["clientFeatureKey"]);
var selectAllClients = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _client_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allClientLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allClientsLoaded; });
var selectCurrentClient = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentClient; });


/***/ }),

/***/ "./src/app/features/store/customer/client/client.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/store/customer/client/client.service.ts ***!
  \******************************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/clients/";
    }
    ClientService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    ClientService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    ClientService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    ClientService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    ClientService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/features/store/customer/client/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/store/customer/client/index.ts ***!
  \*********************************************************/
/*! exports provided: ClientEffects, ClientService, selectAllClients, allClientLoaded, selectCurrentClient, clientFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadClients, loadClientsSuccess, addClient, addClientSuccess, deleteClient, deleteClientSuccess, selectCurrentClientSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _client_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client.effects */ "./src/app/features/store/customer/client/client.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientEffects", function() { return _client_effects__WEBPACK_IMPORTED_MODULE_0__["ClientEffects"]; });

/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client.service */ "./src/app/features/store/customer/client/client.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return _client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"]; });

/* harmony import */ var _client_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client.selectors */ "./src/app/features/store/customer/client/client.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllClients", function() { return _client_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllClients"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allClientLoaded", function() { return _client_selectors__WEBPACK_IMPORTED_MODULE_2__["allClientLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentClient", function() { return _client_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentClient"]; });

/* harmony import */ var _client_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client.reducer */ "./src/app/features/store/customer/client/client.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clientFeatureKey", function() { return _client_reducer__WEBPACK_IMPORTED_MODULE_3__["clientFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _client_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _client_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _client_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _client_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _client_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _client_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _client_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _client_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client.actions */ "./src/app/features/store/customer/client/client.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadClients", function() { return _client_actions__WEBPACK_IMPORTED_MODULE_4__["loadClients"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadClientsSuccess", function() { return _client_actions__WEBPACK_IMPORTED_MODULE_4__["loadClientsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClient", function() { return _client_actions__WEBPACK_IMPORTED_MODULE_4__["addClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClientSuccess", function() { return _client_actions__WEBPACK_IMPORTED_MODULE_4__["addClientSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteClient", function() { return _client_actions__WEBPACK_IMPORTED_MODULE_4__["deleteClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteClientSuccess", function() { return _client_actions__WEBPACK_IMPORTED_MODULE_4__["deleteClientSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentClientSuccess", function() { return _client_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentClientSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/customer/customer/customer.actions.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/store/customer/customer/customer.actions.ts ***!
  \**********************************************************************/
/*! exports provided: loadCustomers, loadCustomersSuccess, addCustomer, addCustomerSuccess, deleteCustomer, deleteCustomerSuccess, selectCurrentCustomerSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCustomers", function() { return loadCustomers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCustomersSuccess", function() { return loadCustomersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomer", function() { return addCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomerSuccess", function() { return addCustomerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCustomer", function() { return deleteCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCustomerSuccess", function() { return deleteCustomerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCustomerSuccess", function() { return selectCurrentCustomerSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadCustomers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Customer/API] Load Customers');
var loadCustomersSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Customer/API] Load Customers Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addCustomer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Customer/API] Add Customer', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addCustomerSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Customer/API] Add Customer Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteCustomer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Customer/API] Delete Customer', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteCustomerSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Customer/API] Delete Customer Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentCustomerSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Customer/API] Select Current Customer', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/customer/customer/customer.effects.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/store/customer/customer/customer.effects.ts ***!
  \**********************************************************************/
/*! exports provided: CustomerEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEffects", function() { return CustomerEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer.service */ "./src/app/features/store/customer/customer/customer.service.ts");
/* harmony import */ var _customer_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer.actions */ "./src/app/features/store/customer/customer/customer.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _customer_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer.selectors */ "./src/app/features/store/customer/customer/customer.selectors.ts");








var CustomerEffects = /** @class */ (function () {
    function CustomerEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadCustomers$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_customer_actions__WEBPACK_IMPORTED_MODULE_5__["loadCustomers"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_customer_selectors__WEBPACK_IMPORTED_MODULE_7__["allCustomerLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_customer_actions__WEBPACK_IMPORTED_MODULE_5__["loadCustomersSuccess"])({ data: data }); })); })); });
        this.addCustomer$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_customer_actions__WEBPACK_IMPORTED_MODULE_5__["addCustomer"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_customer_actions__WEBPACK_IMPORTED_MODULE_5__["addCustomerSuccess"])({ data: data }); })); })); });
        this.deleteCustomer$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_customer_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCustomer"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_customer_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCustomerSuccess"])({ id: data.id }); }));
        })); });
    }
    CustomerEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] }
    ]; };
    CustomerEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]])
    ], CustomerEffects);
    return CustomerEffects;
}());



/***/ }),

/***/ "./src/app/features/store/customer/customer/customer.reducer.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/store/customer/customer/customer.reducer.ts ***!
  \**********************************************************************/
/*! exports provided: customerFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerFeatureKey", function() { return customerFeatureKey; });
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
/* harmony import */ var _customer_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.actions */ "./src/app/features/store/customer/customer/customer.actions.ts");

var _a;



var customerFeatureKey = 'customers';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allCustomersLoaded: false,
    currentCustomer: null
});
var customerReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_customer_actions__WEBPACK_IMPORTED_MODULE_3__["addCustomerSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentCustomer: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_customer_actions__WEBPACK_IMPORTED_MODULE_3__["deleteCustomerSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_customer_actions__WEBPACK_IMPORTED_MODULE_3__["loadCustomersSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_customer_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentCustomerSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentCustomer: action.data })); }));
function reducer(state, action) {
    return customerReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/customer/customer/customer.selectors.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/store/customer/customer/customer.selectors.ts ***!
  \************************************************************************/
/*! exports provided: selectAllCustomers, allCustomerLoaded, selectCurrentCustomer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllCustomers", function() { return selectAllCustomers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allCustomerLoaded", function() { return allCustomerLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCustomer", function() { return selectCurrentCustomer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _customer_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer.reducer */ "./src/app/features/store/customer/customer/customer.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_customer_reducer__WEBPACK_IMPORTED_MODULE_1__["customerFeatureKey"]);
var selectAllCustomers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _customer_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allCustomerLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allCustomersLoaded; });
var selectCurrentCustomer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentCustomer; });


/***/ }),

/***/ "./src/app/features/store/customer/customer/customer.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/store/customer/customer/customer.service.ts ***!
  \**********************************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/customers/";
    }
    CustomerService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    CustomerService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    CustomerService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    CustomerService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    CustomerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/features/store/customer/customer/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/store/customer/customer/index.ts ***!
  \***********************************************************/
/*! exports provided: CustomerEffects, CustomerService, selectAllCustomers, allCustomerLoaded, selectCurrentCustomer, customerFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadCustomers, loadCustomersSuccess, addCustomer, addCustomerSuccess, deleteCustomer, deleteCustomerSuccess, selectCurrentCustomerSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customer_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer.effects */ "./src/app/features/store/customer/customer/customer.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerEffects", function() { return _customer_effects__WEBPACK_IMPORTED_MODULE_0__["CustomerEffects"]; });

/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer.service */ "./src/app/features/store/customer/customer/customer.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return _customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"]; });

/* harmony import */ var _customer_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.selectors */ "./src/app/features/store/customer/customer/customer.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllCustomers", function() { return _customer_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllCustomers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allCustomerLoaded", function() { return _customer_selectors__WEBPACK_IMPORTED_MODULE_2__["allCustomerLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCustomer", function() { return _customer_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentCustomer"]; });

/* harmony import */ var _customer_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.reducer */ "./src/app/features/store/customer/customer/customer.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customerFeatureKey", function() { return _customer_reducer__WEBPACK_IMPORTED_MODULE_3__["customerFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _customer_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _customer_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _customer_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _customer_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _customer_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _customer_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _customer_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _customer_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer.actions */ "./src/app/features/store/customer/customer/customer.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCustomers", function() { return _customer_actions__WEBPACK_IMPORTED_MODULE_4__["loadCustomers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCustomersSuccess", function() { return _customer_actions__WEBPACK_IMPORTED_MODULE_4__["loadCustomersSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCustomer", function() { return _customer_actions__WEBPACK_IMPORTED_MODULE_4__["addCustomer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCustomerSuccess", function() { return _customer_actions__WEBPACK_IMPORTED_MODULE_4__["addCustomerSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCustomer", function() { return _customer_actions__WEBPACK_IMPORTED_MODULE_4__["deleteCustomer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCustomerSuccess", function() { return _customer_actions__WEBPACK_IMPORTED_MODULE_4__["deleteCustomerSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCustomerSuccess", function() { return _customer_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentCustomerSuccess"]; });








/***/ })

}]);
//# sourceMappingURL=default~features-customer-customer-module~features-productionorder-productionorder-module-es5.js.map