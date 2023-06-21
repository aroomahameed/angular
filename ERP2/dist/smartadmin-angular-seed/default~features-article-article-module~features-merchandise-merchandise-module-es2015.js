(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~features-article-article-module~features-merchandise-merchandise-module"],{

/***/ "./src/app/features/store/article/season/index.ts":
/*!********************************************************!*\
  !*** ./src/app/features/store/article/season/index.ts ***!
  \********************************************************/
/*! exports provided: SeasonEffects, SeasonService, selectAllSeasons, allSeasonLoaded, selectCurrentSeason, seasonFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadSeasons, loadSeasonsSuccess, addSeason, addSeasonSuccess, deleteSeason, deleteSeasonSuccess, selectCurrentSeasonSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _season_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./season.effects */ "./src/app/features/store/article/season/season.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SeasonEffects", function() { return _season_effects__WEBPACK_IMPORTED_MODULE_0__["SeasonEffects"]; });

/* harmony import */ var _season_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./season.service */ "./src/app/features/store/article/season/season.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SeasonService", function() { return _season_service__WEBPACK_IMPORTED_MODULE_1__["SeasonService"]; });

/* harmony import */ var _season_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./season.selectors */ "./src/app/features/store/article/season/season.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllSeasons", function() { return _season_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllSeasons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allSeasonLoaded", function() { return _season_selectors__WEBPACK_IMPORTED_MODULE_2__["allSeasonLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentSeason", function() { return _season_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentSeason"]; });

/* harmony import */ var _season_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./season.reducer */ "./src/app/features/store/article/season/season.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seasonFeatureKey", function() { return _season_reducer__WEBPACK_IMPORTED_MODULE_3__["seasonFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _season_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _season_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _season_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _season_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _season_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _season_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _season_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _season_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./season.actions */ "./src/app/features/store/article/season/season.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadSeasons", function() { return _season_actions__WEBPACK_IMPORTED_MODULE_4__["loadSeasons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadSeasonsSuccess", function() { return _season_actions__WEBPACK_IMPORTED_MODULE_4__["loadSeasonsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addSeason", function() { return _season_actions__WEBPACK_IMPORTED_MODULE_4__["addSeason"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addSeasonSuccess", function() { return _season_actions__WEBPACK_IMPORTED_MODULE_4__["addSeasonSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteSeason", function() { return _season_actions__WEBPACK_IMPORTED_MODULE_4__["deleteSeason"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteSeasonSuccess", function() { return _season_actions__WEBPACK_IMPORTED_MODULE_4__["deleteSeasonSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentSeasonSuccess", function() { return _season_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentSeasonSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/article/season/season.actions.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/store/article/season/season.actions.ts ***!
  \*****************************************************************/
/*! exports provided: loadSeasons, loadSeasonsSuccess, addSeason, addSeasonSuccess, deleteSeason, deleteSeasonSuccess, selectCurrentSeasonSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSeasons", function() { return loadSeasons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSeasonsSuccess", function() { return loadSeasonsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSeason", function() { return addSeason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSeasonSuccess", function() { return addSeasonSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSeason", function() { return deleteSeason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSeasonSuccess", function() { return deleteSeasonSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentSeasonSuccess", function() { return selectCurrentSeasonSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadSeasons = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Season/API] Load Seasons');
const loadSeasonsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Season/API] Load Seasons Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addSeason = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Season/API] Add Season', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addSeasonSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Season/API] Add Season Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteSeason = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Season/API] Delete Season', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteSeasonSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Season/API] Delete Season Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentSeasonSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Season/API] Select Current Season', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/article/season/season.effects.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/store/article/season/season.effects.ts ***!
  \*****************************************************************/
/*! exports provided: SeasonEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonEffects", function() { return SeasonEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _season_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./season.service */ "./src/app/features/store/article/season/season.service.ts");
/* harmony import */ var _season_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./season.actions */ "./src/app/features/store/article/season/season.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _season_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./season.selectors */ "./src/app/features/store/article/season/season.selectors.ts");








let SeasonEffects = class SeasonEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadSeasons$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_season_actions__WEBPACK_IMPORTED_MODULE_5__["loadSeasons"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_season_selectors__WEBPACK_IMPORTED_MODULE_7__["allSeasonLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_season_actions__WEBPACK_IMPORTED_MODULE_5__["loadSeasonsSuccess"])({ data }))))));
        this.addSeason$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_season_actions__WEBPACK_IMPORTED_MODULE_5__["addSeason"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_season_actions__WEBPACK_IMPORTED_MODULE_5__["addSeasonSuccess"])({ data }))))));
        this.deleteSeason$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_season_actions__WEBPACK_IMPORTED_MODULE_5__["deleteSeason"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_season_actions__WEBPACK_IMPORTED_MODULE_5__["deleteSeasonSuccess"])({ id: data.id }))))));
    }
};
SeasonEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _season_service__WEBPACK_IMPORTED_MODULE_4__["SeasonService"] }
];
SeasonEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _season_service__WEBPACK_IMPORTED_MODULE_4__["SeasonService"]])
], SeasonEffects);



/***/ }),

/***/ "./src/app/features/store/article/season/season.reducer.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/store/article/season/season.reducer.ts ***!
  \*****************************************************************/
/*! exports provided: seasonFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seasonFeatureKey", function() { return seasonFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _season_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./season.actions */ "./src/app/features/store/article/season/season.actions.ts");



const seasonFeatureKey = 'seasons';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allSeasonsLoaded: false,
    currentSeason: null
});
const seasonReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_season_actions__WEBPACK_IMPORTED_MODULE_2__["addSeasonSuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentSeason: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_season_actions__WEBPACK_IMPORTED_MODULE_2__["deleteSeasonSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_season_actions__WEBPACK_IMPORTED_MODULE_2__["loadSeasonsSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_season_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentSeasonSuccess"], (state, action) => (Object.assign({}, state, { currentSeason: action.data }))));
function reducer(state, action) {
    return seasonReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/features/store/article/season/season.selectors.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/store/article/season/season.selectors.ts ***!
  \*******************************************************************/
/*! exports provided: selectAllSeasons, allSeasonLoaded, selectCurrentSeason */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllSeasons", function() { return selectAllSeasons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allSeasonLoaded", function() { return allSeasonLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentSeason", function() { return selectCurrentSeason; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _season_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./season.reducer */ "./src/app/features/store/article/season/season.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_season_reducer__WEBPACK_IMPORTED_MODULE_1__["seasonFeatureKey"]);
const selectAllSeasons = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _season_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allSeasonLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allSeasonsLoaded);
const selectCurrentSeason = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentSeason);


/***/ }),

/***/ "./src/app/features/store/article/season/season.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/store/article/season/season.service.ts ***!
  \*****************************************************************/
/*! exports provided: SeasonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonService", function() { return SeasonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let SeasonService = class SeasonService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/seasons/`;
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
SeasonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
SeasonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], SeasonService);



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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadMaterials = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Material/API] Load Materials');
const loadMaterialsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Material/API] Load Materials Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addMaterial = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Material/API] Add Material', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addMaterialSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Material/API] Add Material Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteMaterial = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Material/API] Delete Material', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteMaterialSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Material/API] Delete Material Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentMaterialSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Material/API] Select Current Material', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _material_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.service */ "./src/app/features/store/merchandise/material/material.service.ts");
/* harmony import */ var _material_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.actions */ "./src/app/features/store/merchandise/material/material.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _material_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.selectors */ "./src/app/features/store/merchandise/material/material.selectors.ts");








let MaterialEffects = class MaterialEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadMaterials$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_material_actions__WEBPACK_IMPORTED_MODULE_5__["loadMaterials"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_material_selectors__WEBPACK_IMPORTED_MODULE_7__["allMaterialLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_material_actions__WEBPACK_IMPORTED_MODULE_5__["loadMaterialsSuccess"])({ data }))))));
        this.addMaterial$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_material_actions__WEBPACK_IMPORTED_MODULE_5__["addMaterial"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_material_actions__WEBPACK_IMPORTED_MODULE_5__["addMaterialSuccess"])({ data }))))));
        this.deleteMaterial$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_material_actions__WEBPACK_IMPORTED_MODULE_5__["deleteMaterial"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_material_actions__WEBPACK_IMPORTED_MODULE_5__["deleteMaterialSuccess"])({ id: data.id }))))));
    }
};
MaterialEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _material_service__WEBPACK_IMPORTED_MODULE_4__["MaterialService"] }
];
MaterialEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _material_service__WEBPACK_IMPORTED_MODULE_4__["MaterialService"]])
], MaterialEffects);



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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _material_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.actions */ "./src/app/features/store/merchandise/material/material.actions.ts");



const materialFeatureKey = 'materials';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allMaterialsLoaded: false,
    currentMaterial: null
});
const materialReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_material_actions__WEBPACK_IMPORTED_MODULE_2__["addMaterialSuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentMaterial: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_material_actions__WEBPACK_IMPORTED_MODULE_2__["deleteMaterialSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_material_actions__WEBPACK_IMPORTED_MODULE_2__["loadMaterialsSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_material_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentMaterialSuccess"], (state, action) => (Object.assign({}, state, { currentMaterial: action.data }))));
function reducer(state, action) {
    return materialReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _material_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material.reducer */ "./src/app/features/store/merchandise/material/material.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_material_reducer__WEBPACK_IMPORTED_MODULE_1__["materialFeatureKey"]);
const selectAllMaterials = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _material_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allMaterialLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allMaterialsLoaded);
const selectCurrentMaterial = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentMaterial);
const selecetmaterialbyid = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAllMaterials, (materials, id) => {
    const mat = materials.filter(a => a.id == id);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let MaterialService = class MaterialService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/materials/`;
    }
    findAll() {
        return this.http.get(this.url);
    }
    save(item) {
        if (!item.get('id')) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    }
    update(item) {
        return this.http.put(`${this.url}${item.get('id')}/`, item);
    }
    delete(item) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
};
MaterialService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
MaterialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], MaterialService);



/***/ }),

/***/ "./src/app/features/store/settings/uom/index.ts":
/*!******************************************************!*\
  !*** ./src/app/features/store/settings/uom/index.ts ***!
  \******************************************************/
/*! exports provided: UomEffects, UomService, selectAllUoms, allUomLoaded, selectCurrentUom, uomFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadUoms, loadUomsSuccess, addUom, addUomSuccess, deleteUom, deleteUomSuccess, selectCurrentUomSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uom_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uom.effects */ "./src/app/features/store/settings/uom/uom.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UomEffects", function() { return _uom_effects__WEBPACK_IMPORTED_MODULE_0__["UomEffects"]; });

/* harmony import */ var _uom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uom.service */ "./src/app/features/store/settings/uom/uom.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UomService", function() { return _uom_service__WEBPACK_IMPORTED_MODULE_1__["UomService"]; });

/* harmony import */ var _uom_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uom.selectors */ "./src/app/features/store/settings/uom/uom.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllUoms", function() { return _uom_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllUoms"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allUomLoaded", function() { return _uom_selectors__WEBPACK_IMPORTED_MODULE_2__["allUomLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentUom", function() { return _uom_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentUom"]; });

/* harmony import */ var _uom_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uom.reducer */ "./src/app/features/store/settings/uom/uom.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uomFeatureKey", function() { return _uom_reducer__WEBPACK_IMPORTED_MODULE_3__["uomFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _uom_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _uom_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _uom_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _uom_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _uom_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _uom_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _uom_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _uom_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uom.actions */ "./src/app/features/store/settings/uom/uom.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadUoms", function() { return _uom_actions__WEBPACK_IMPORTED_MODULE_4__["loadUoms"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadUomsSuccess", function() { return _uom_actions__WEBPACK_IMPORTED_MODULE_4__["loadUomsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addUom", function() { return _uom_actions__WEBPACK_IMPORTED_MODULE_4__["addUom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addUomSuccess", function() { return _uom_actions__WEBPACK_IMPORTED_MODULE_4__["addUomSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteUom", function() { return _uom_actions__WEBPACK_IMPORTED_MODULE_4__["deleteUom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteUomSuccess", function() { return _uom_actions__WEBPACK_IMPORTED_MODULE_4__["deleteUomSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentUomSuccess", function() { return _uom_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentUomSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/settings/uom/uom.actions.ts":
/*!************************************************************!*\
  !*** ./src/app/features/store/settings/uom/uom.actions.ts ***!
  \************************************************************/
/*! exports provided: loadUoms, loadUomsSuccess, addUom, addUomSuccess, deleteUom, deleteUomSuccess, selectCurrentUomSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUoms", function() { return loadUoms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUomsSuccess", function() { return loadUomsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUom", function() { return addUom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUomSuccess", function() { return addUomSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUom", function() { return deleteUom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUomSuccess", function() { return deleteUomSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentUomSuccess", function() { return selectCurrentUomSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadUoms = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Uom/API] Load Uoms');
const loadUomsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Uom/API] Load Uoms Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addUom = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Uom/API] Add Uom', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addUomSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Uom/API] Add Uom Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteUom = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Uom/API] Delete Uom', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteUomSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Uom/API] Delete Uom Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentUomSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Uom/API] Select Current Uom', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/settings/uom/uom.effects.ts":
/*!************************************************************!*\
  !*** ./src/app/features/store/settings/uom/uom.effects.ts ***!
  \************************************************************/
/*! exports provided: UomEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UomEffects", function() { return UomEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _uom_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uom.service */ "./src/app/features/store/settings/uom/uom.service.ts");
/* harmony import */ var _uom_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uom.actions */ "./src/app/features/store/settings/uom/uom.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _uom_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uom.selectors */ "./src/app/features/store/settings/uom/uom.selectors.ts");








let UomEffects = class UomEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadUoms$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_uom_actions__WEBPACK_IMPORTED_MODULE_5__["loadUoms"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_uom_selectors__WEBPACK_IMPORTED_MODULE_7__["allUomLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_uom_actions__WEBPACK_IMPORTED_MODULE_5__["loadUomsSuccess"])({ data }))))));
        this.addUom$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_uom_actions__WEBPACK_IMPORTED_MODULE_5__["addUom"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_uom_actions__WEBPACK_IMPORTED_MODULE_5__["addUomSuccess"])({ data }))))));
        this.deleteUom$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_uom_actions__WEBPACK_IMPORTED_MODULE_5__["deleteUom"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_uom_actions__WEBPACK_IMPORTED_MODULE_5__["deleteUomSuccess"])({ id: data.id }))))));
    }
};
UomEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _uom_service__WEBPACK_IMPORTED_MODULE_4__["UomService"] }
];
UomEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _uom_service__WEBPACK_IMPORTED_MODULE_4__["UomService"]])
], UomEffects);



/***/ }),

/***/ "./src/app/features/store/settings/uom/uom.reducer.ts":
/*!************************************************************!*\
  !*** ./src/app/features/store/settings/uom/uom.reducer.ts ***!
  \************************************************************/
/*! exports provided: uomFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uomFeatureKey", function() { return uomFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _uom_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uom.actions */ "./src/app/features/store/settings/uom/uom.actions.ts");



const uomFeatureKey = 'uoms';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allUomsLoaded: false,
    currentUom: null
});
const uomReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_uom_actions__WEBPACK_IMPORTED_MODULE_2__["addUomSuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentUom: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_uom_actions__WEBPACK_IMPORTED_MODULE_2__["deleteUomSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_uom_actions__WEBPACK_IMPORTED_MODULE_2__["loadUomsSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_uom_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentUomSuccess"], (state, action) => (Object.assign({}, state, { currentUom: action.data }))));
function reducer(state, action) {
    return uomReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/features/store/settings/uom/uom.selectors.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/store/settings/uom/uom.selectors.ts ***!
  \**************************************************************/
/*! exports provided: selectAllUoms, allUomLoaded, selectCurrentUom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllUoms", function() { return selectAllUoms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allUomLoaded", function() { return allUomLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentUom", function() { return selectCurrentUom; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _uom_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uom.reducer */ "./src/app/features/store/settings/uom/uom.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_uom_reducer__WEBPACK_IMPORTED_MODULE_1__["uomFeatureKey"]);
const selectAllUoms = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _uom_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allUomLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allUomsLoaded);
const selectCurrentUom = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentUom);


/***/ }),

/***/ "./src/app/features/store/settings/uom/uom.service.ts":
/*!************************************************************!*\
  !*** ./src/app/features/store/settings/uom/uom.service.ts ***!
  \************************************************************/
/*! exports provided: UomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UomService", function() { return UomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let UomService = class UomService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/uoms/`;
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
UomService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], UomService);



/***/ })

}]);
//# sourceMappingURL=default~features-article-article-module~features-merchandise-merchandise-module-es2015.js.map