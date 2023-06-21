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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadClients = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Client/API] Load Clients');
const loadClientsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Client/API] Load Clients Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addClient = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Client/API] Add Client', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addClientSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Client/API] Add Client Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteClient = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Client/API] Delete Client', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteClientSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Client/API] Delete Client Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentClientSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Client/API] Select Current Client', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client.service */ "./src/app/features/store/customer/client/client.service.ts");
/* harmony import */ var _client_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client.actions */ "./src/app/features/store/customer/client/client.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _client_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client.selectors */ "./src/app/features/store/customer/client/client.selectors.ts");








let ClientEffects = class ClientEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadClients$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_client_actions__WEBPACK_IMPORTED_MODULE_5__["loadClients"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_client_selectors__WEBPACK_IMPORTED_MODULE_7__["allClientLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_client_actions__WEBPACK_IMPORTED_MODULE_5__["loadClientsSuccess"])({ data }))))));
        this.addClient$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_client_actions__WEBPACK_IMPORTED_MODULE_5__["addClient"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_client_actions__WEBPACK_IMPORTED_MODULE_5__["addClientSuccess"])({ data }))))));
        this.deleteClient$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_client_actions__WEBPACK_IMPORTED_MODULE_5__["deleteClient"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_client_actions__WEBPACK_IMPORTED_MODULE_5__["deleteClientSuccess"])({ id: data.id }))))));
    }
};
ClientEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"] }
];
ClientEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"]])
], ClientEffects);



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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _client_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client.actions */ "./src/app/features/store/customer/client/client.actions.ts");



const clientFeatureKey = 'clients';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allClientsLoaded: false,
    currentClient: null
});
const clientReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_client_actions__WEBPACK_IMPORTED_MODULE_2__["addClientSuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentClient: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_client_actions__WEBPACK_IMPORTED_MODULE_2__["deleteClientSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_client_actions__WEBPACK_IMPORTED_MODULE_2__["loadClientsSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_client_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentClientSuccess"], (state, action) => (Object.assign({}, state, { currentClient: action.data }))));
function reducer(state, action) {
    return clientReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _client_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client.reducer */ "./src/app/features/store/customer/client/client.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_client_reducer__WEBPACK_IMPORTED_MODULE_1__["clientFeatureKey"]);
const selectAllClients = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _client_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allClientLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allClientsLoaded);
const selectCurrentClient = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentClient);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ClientService = class ClientService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/clients/`;
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
ClientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ClientService);



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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadCustomers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Customer/API] Load Customers');
const loadCustomersSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Customer/API] Load Customers Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addCustomer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Customer/API] Add Customer', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addCustomerSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Customer/API] Add Customer Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteCustomer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Customer/API] Delete Customer', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteCustomerSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Customer/API] Delete Customer Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentCustomerSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Customer/API] Select Current Customer', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer.service */ "./src/app/features/store/customer/customer/customer.service.ts");
/* harmony import */ var _customer_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer.actions */ "./src/app/features/store/customer/customer/customer.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _customer_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer.selectors */ "./src/app/features/store/customer/customer/customer.selectors.ts");








let CustomerEffects = class CustomerEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadCustomers$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_customer_actions__WEBPACK_IMPORTED_MODULE_5__["loadCustomers"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_customer_selectors__WEBPACK_IMPORTED_MODULE_7__["allCustomerLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_customer_actions__WEBPACK_IMPORTED_MODULE_5__["loadCustomersSuccess"])({ data }))))));
        this.addCustomer$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_customer_actions__WEBPACK_IMPORTED_MODULE_5__["addCustomer"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_customer_actions__WEBPACK_IMPORTED_MODULE_5__["addCustomerSuccess"])({ data }))))));
        this.deleteCustomer$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_customer_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCustomer"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_customer_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCustomerSuccess"])({ id: data.id }))))));
    }
};
CustomerEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] }
];
CustomerEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]])
], CustomerEffects);



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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _customer_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.actions */ "./src/app/features/store/customer/customer/customer.actions.ts");



const customerFeatureKey = 'customers';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allCustomersLoaded: false,
    currentCustomer: null
});
const customerReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_customer_actions__WEBPACK_IMPORTED_MODULE_2__["addCustomerSuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentCustomer: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_customer_actions__WEBPACK_IMPORTED_MODULE_2__["deleteCustomerSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_customer_actions__WEBPACK_IMPORTED_MODULE_2__["loadCustomersSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_customer_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentCustomerSuccess"], (state, action) => (Object.assign({}, state, { currentCustomer: action.data }))));
function reducer(state, action) {
    return customerReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _customer_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer.reducer */ "./src/app/features/store/customer/customer/customer.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_customer_reducer__WEBPACK_IMPORTED_MODULE_1__["customerFeatureKey"]);
const selectAllCustomers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _customer_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allCustomerLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allCustomersLoaded);
const selectCurrentCustomer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentCustomer);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let CustomerService = class CustomerService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/customers/`;
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
CustomerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], CustomerService);



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
//# sourceMappingURL=default~features-customer-customer-module~features-productionorder-productionorder-module-es2015.js.map