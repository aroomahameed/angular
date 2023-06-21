(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~features-article-article-module~features-fit-fit-module"],{

/***/ "./src/app/features/store/article/model/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/store/article/model/index.ts ***!
  \*******************************************************/
/*! exports provided: ModelEffects, ModelService, selectAllModels, allModelLoaded, selectCurrentModel, selectByClientID, modelFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadModels, loadModelsSuccess, addModel, addModelSuccess, deleteModel, deleteModelSuccess, selectCurrentModelSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.effects */ "./src/app/features/store/article/model/model.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelEffects", function() { return _model_effects__WEBPACK_IMPORTED_MODULE_0__["ModelEffects"]; });

/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.service */ "./src/app/features/store/article/model/model.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return _model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"]; });

/* harmony import */ var _model_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model.selectors */ "./src/app/features/store/article/model/model.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllModels", function() { return _model_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllModels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allModelLoaded", function() { return _model_selectors__WEBPACK_IMPORTED_MODULE_2__["allModelLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentModel", function() { return _model_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectByClientID", function() { return _model_selectors__WEBPACK_IMPORTED_MODULE_2__["selectByClientID"]; });

/* harmony import */ var _model_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model.reducer */ "./src/app/features/store/article/model/model.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modelFeatureKey", function() { return _model_reducer__WEBPACK_IMPORTED_MODULE_3__["modelFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _model_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _model_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _model_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _model_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _model_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _model_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _model_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _model_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model.actions */ "./src/app/features/store/article/model/model.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadModels", function() { return _model_actions__WEBPACK_IMPORTED_MODULE_4__["loadModels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadModelsSuccess", function() { return _model_actions__WEBPACK_IMPORTED_MODULE_4__["loadModelsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addModel", function() { return _model_actions__WEBPACK_IMPORTED_MODULE_4__["addModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addModelSuccess", function() { return _model_actions__WEBPACK_IMPORTED_MODULE_4__["addModelSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteModel", function() { return _model_actions__WEBPACK_IMPORTED_MODULE_4__["deleteModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteModelSuccess", function() { return _model_actions__WEBPACK_IMPORTED_MODULE_4__["deleteModelSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentModelSuccess", function() { return _model_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentModelSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/article/model/model.actions.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/store/article/model/model.actions.ts ***!
  \***************************************************************/
/*! exports provided: loadModels, loadModelsSuccess, addModel, addModelSuccess, deleteModel, deleteModelSuccess, selectCurrentModelSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadModels", function() { return loadModels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadModelsSuccess", function() { return loadModelsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addModel", function() { return addModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addModelSuccess", function() { return addModelSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteModel", function() { return deleteModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteModelSuccess", function() { return deleteModelSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentModelSuccess", function() { return selectCurrentModelSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadModels = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Model/API] Load Models');
var loadModelsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Model/API] Load Models Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addModel = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Model/API] Add Model', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addModelSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Model/API] Add Model Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteModel = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Model/API] Delete Model', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteModelSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Model/API] Delete Model Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentModelSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Model/API] Select Current Model', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/article/model/model.effects.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/store/article/model/model.effects.ts ***!
  \***************************************************************/
/*! exports provided: ModelEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelEffects", function() { return ModelEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model.service */ "./src/app/features/store/article/model/model.service.ts");
/* harmony import */ var _model_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model.actions */ "./src/app/features/store/article/model/model.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model.selectors */ "./src/app/features/store/article/model/model.selectors.ts");








var ModelEffects = /** @class */ (function () {
    function ModelEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadModels$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_model_actions__WEBPACK_IMPORTED_MODULE_5__["loadModels"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_model_selectors__WEBPACK_IMPORTED_MODULE_7__["allModelLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_model_actions__WEBPACK_IMPORTED_MODULE_5__["loadModelsSuccess"])({ data: data }); })); })); });
        this.addModel$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_model_actions__WEBPACK_IMPORTED_MODULE_5__["addModel"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_model_actions__WEBPACK_IMPORTED_MODULE_5__["addModelSuccess"])({ data: data }); })); })); });
        this.deleteModel$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_model_actions__WEBPACK_IMPORTED_MODULE_5__["deleteModel"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_model_actions__WEBPACK_IMPORTED_MODULE_5__["deleteModelSuccess"])({ id: data.id }); }));
        })); });
    }
    ModelEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"] }
    ]; };
    ModelEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]])
    ], ModelEffects);
    return ModelEffects;
}());



/***/ }),

/***/ "./src/app/features/store/article/model/model.reducer.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/store/article/model/model.reducer.ts ***!
  \***************************************************************/
/*! exports provided: modelFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modelFeatureKey", function() { return modelFeatureKey; });
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
/* harmony import */ var _model_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model.actions */ "./src/app/features/store/article/model/model.actions.ts");

var _a;



var modelFeatureKey = 'models';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allModelsLoaded: false,
    currentModel: null
});
var modelReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_model_actions__WEBPACK_IMPORTED_MODULE_3__["addModelSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentModel: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_model_actions__WEBPACK_IMPORTED_MODULE_3__["deleteModelSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_model_actions__WEBPACK_IMPORTED_MODULE_3__["loadModelsSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_model_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentModelSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentModel: action.data })); }));
function reducer(state, action) {
    return modelReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/article/model/model.selectors.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/store/article/model/model.selectors.ts ***!
  \*****************************************************************/
/*! exports provided: selectAllModels, allModelLoaded, selectCurrentModel, selectByClientID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllModels", function() { return selectAllModels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allModelLoaded", function() { return allModelLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentModel", function() { return selectCurrentModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectByClientID", function() { return selectByClientID; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _model_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.reducer */ "./src/app/features/store/article/model/model.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_model_reducer__WEBPACK_IMPORTED_MODULE_1__["modelFeatureKey"]);
var selectAllModels = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _model_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allModelLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allModelsLoaded; });
var selectCurrentModel = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentModel; });
var selectByClientID = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAllModels, function (models, id) {
    var model = models.filter(function (m) { return m.client.id == id; });
    return model;
});


/***/ }),

/***/ "./src/app/features/store/article/model/model.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/store/article/model/model.service.ts ***!
  \***************************************************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ModelService = /** @class */ (function () {
    function ModelService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/models/";
    }
    ModelService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    ModelService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    ModelService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    ModelService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    ModelService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ModelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ModelService);
    return ModelService;
}());



/***/ }),

/***/ "./src/app/features/store/merchandise/material/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/store/merchandise/material/index.ts ***!
  \**************************************************************/
/*! exports provided: MaterialEffects, MaterialService, selectAllMaterials, allMaterialLoaded, selectCurrentMaterial, selecetmaterialbyid, materialFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadMaterials, loadMaterialsSuccess, addMaterial, addMaterialSuccess, deleteMaterial, deleteMaterialSuccess, selectCurrentMaterialSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.effects */ "./src/app/features/store/merchandise/material/material.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialEffects", function() { return _material_effects__WEBPACK_IMPORTED_MODULE_0__["MaterialEffects"]; });

/* harmony import */ var _material_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material.service */ "./src/app/features/store/merchandise/material/material.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialService", function() { return _material_service__WEBPACK_IMPORTED_MODULE_1__["MaterialService"]; });

/* harmony import */ var _material_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.selectors */ "./src/app/features/store/merchandise/material/material.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllMaterials", function() { return _material_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllMaterials"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allMaterialLoaded", function() { return _material_selectors__WEBPACK_IMPORTED_MODULE_2__["allMaterialLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentMaterial", function() { return _material_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentMaterial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selecetmaterialbyid", function() { return _material_selectors__WEBPACK_IMPORTED_MODULE_2__["selecetmaterialbyid"]; });

/* harmony import */ var _material_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.reducer */ "./src/app/features/store/merchandise/material/material.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "materialFeatureKey", function() { return _material_reducer__WEBPACK_IMPORTED_MODULE_3__["materialFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _material_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _material_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _material_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _material_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _material_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _material_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _material_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _material_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.actions */ "./src/app/features/store/merchandise/material/material.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadMaterials", function() { return _material_actions__WEBPACK_IMPORTED_MODULE_4__["loadMaterials"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadMaterialsSuccess", function() { return _material_actions__WEBPACK_IMPORTED_MODULE_4__["loadMaterialsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addMaterial", function() { return _material_actions__WEBPACK_IMPORTED_MODULE_4__["addMaterial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addMaterialSuccess", function() { return _material_actions__WEBPACK_IMPORTED_MODULE_4__["addMaterialSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteMaterial", function() { return _material_actions__WEBPACK_IMPORTED_MODULE_4__["deleteMaterial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteMaterialSuccess", function() { return _material_actions__WEBPACK_IMPORTED_MODULE_4__["deleteMaterialSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentMaterialSuccess", function() { return _material_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentMaterialSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/merchandise/material/material.actions.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/merchandise/material/material.actions.ts ***!
  \*************************************************************************/
/*! exports provided: loadMaterials, loadMaterialsSuccess, addMaterial, addMaterialSuccess, deleteMaterial, deleteMaterialSuccess, selectCurrentMaterialSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMaterials", function() { return loadMaterials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMaterialsSuccess", function() { return loadMaterialsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMaterial", function() { return addMaterial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMaterialSuccess", function() { return addMaterialSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMaterial", function() { return deleteMaterial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMaterialSuccess", function() { return deleteMaterialSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentMaterialSuccess", function() { return selectCurrentMaterialSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadMaterials = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Material/API] Load Materials');
var loadMaterialsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Material/API] Load Materials Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addMaterial = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Material/API] Add Material', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addMaterialSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Material/API] Add Material Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteMaterial = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Material/API] Delete Material', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteMaterialSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Material/API] Delete Material Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentMaterialSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Material/API] Select Current Material', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/merchandise/material/material.effects.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/merchandise/material/material.effects.ts ***!
  \*************************************************************************/
/*! exports provided: MaterialEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialEffects", function() { return MaterialEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _material_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.service */ "./src/app/features/store/merchandise/material/material.service.ts");
/* harmony import */ var _material_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.actions */ "./src/app/features/store/merchandise/material/material.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _material_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.selectors */ "./src/app/features/store/merchandise/material/material.selectors.ts");








var MaterialEffects = /** @class */ (function () {
    function MaterialEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadMaterials$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_material_actions__WEBPACK_IMPORTED_MODULE_5__["loadMaterials"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_material_selectors__WEBPACK_IMPORTED_MODULE_7__["allMaterialLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_material_actions__WEBPACK_IMPORTED_MODULE_5__["loadMaterialsSuccess"])({ data: data }); })); })); });
        this.addMaterial$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_material_actions__WEBPACK_IMPORTED_MODULE_5__["addMaterial"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_material_actions__WEBPACK_IMPORTED_MODULE_5__["addMaterialSuccess"])({ data: data }); })); })); });
        this.deleteMaterial$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_material_actions__WEBPACK_IMPORTED_MODULE_5__["deleteMaterial"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_material_actions__WEBPACK_IMPORTED_MODULE_5__["deleteMaterialSuccess"])({ id: data.id }); }));
        })); });
    }
    MaterialEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _material_service__WEBPACK_IMPORTED_MODULE_4__["MaterialService"] }
    ]; };
    MaterialEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _material_service__WEBPACK_IMPORTED_MODULE_4__["MaterialService"]])
    ], MaterialEffects);
    return MaterialEffects;
}());



/***/ }),

/***/ "./src/app/features/store/merchandise/material/material.reducer.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/merchandise/material/material.reducer.ts ***!
  \*************************************************************************/
/*! exports provided: materialFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialFeatureKey", function() { return materialFeatureKey; });
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
/* harmony import */ var _material_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.actions */ "./src/app/features/store/merchandise/material/material.actions.ts");

var _a;



var materialFeatureKey = 'materials';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allMaterialsLoaded: false,
    currentMaterial: null
});
var materialReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_material_actions__WEBPACK_IMPORTED_MODULE_3__["addMaterialSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentMaterial: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_material_actions__WEBPACK_IMPORTED_MODULE_3__["deleteMaterialSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_material_actions__WEBPACK_IMPORTED_MODULE_3__["loadMaterialsSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_material_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentMaterialSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentMaterial: action.data })); }));
function reducer(state, action) {
    return materialReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/merchandise/material/material.selectors.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/store/merchandise/material/material.selectors.ts ***!
  \***************************************************************************/
/*! exports provided: selectAllMaterials, allMaterialLoaded, selectCurrentMaterial, selecetmaterialbyid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllMaterials", function() { return selectAllMaterials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allMaterialLoaded", function() { return allMaterialLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentMaterial", function() { return selectCurrentMaterial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selecetmaterialbyid", function() { return selecetmaterialbyid; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _material_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material.reducer */ "./src/app/features/store/merchandise/material/material.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_material_reducer__WEBPACK_IMPORTED_MODULE_1__["materialFeatureKey"]);
var selectAllMaterials = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _material_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allMaterialLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allMaterialsLoaded; });
var selectCurrentMaterial = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentMaterial; });
var selecetmaterialbyid = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAllMaterials, function (materials, id) {
    var mat = materials.filter(function (a) { return a.id == id; });
    return mat;
});


/***/ }),

/***/ "./src/app/features/store/merchandise/material/material.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/merchandise/material/material.service.ts ***!
  \*************************************************************************/
/*! exports provided: MaterialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialService", function() { return MaterialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var MaterialService = /** @class */ (function () {
    function MaterialService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/materials/";
    }
    MaterialService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    MaterialService.prototype.save = function (item) {
        if (!item.get('id')) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    MaterialService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.get('id') + "/", item);
    };
    MaterialService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    MaterialService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    MaterialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MaterialService);
    return MaterialService;
}());



/***/ })

}]);
//# sourceMappingURL=default~features-article-article-module~features-fit-fit-module-es5.js.map