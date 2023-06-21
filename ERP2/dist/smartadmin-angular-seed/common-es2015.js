(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/features/store/article/article/article.actions.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/store/article/article/article.actions.ts ***!
  \*******************************************************************/
/*! exports provided: loadArticles, loadArticlesSuccess, addArticle, addArticleSuccess, deleteArticle, deleteArticleSuccess, selectCurrentArticleSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticles", function() { return loadArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticlesSuccess", function() { return loadArticlesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addArticle", function() { return addArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addArticleSuccess", function() { return addArticleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticle", function() { return deleteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticleSuccess", function() { return deleteArticleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticleSuccess", function() { return selectCurrentArticleSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadArticles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Article/API] Load Articles');
const loadArticlesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Article/API] Load Articles Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addArticle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Article/API] Add Article', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addArticleSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Article/API] Add Article Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteArticle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Article/API] Delete Article', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteArticleSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Article/API] Delete Article Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentArticleSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Article/API] Select Current Article', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/article/article/article.effects.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/store/article/article/article.effects.ts ***!
  \*******************************************************************/
/*! exports provided: ArticleEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleEffects", function() { return ArticleEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article.service */ "./src/app/features/store/article/article/article.service.ts");
/* harmony import */ var _article_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article.actions */ "./src/app/features/store/article/article/article.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _article_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article.selectors */ "./src/app/features/store/article/article/article.selectors.ts");








let ArticleEffects = class ArticleEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadArticles$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_article_actions__WEBPACK_IMPORTED_MODULE_5__["loadArticles"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_article_selectors__WEBPACK_IMPORTED_MODULE_7__["allArticleLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_article_actions__WEBPACK_IMPORTED_MODULE_5__["loadArticlesSuccess"])({ data }))))));
        this.addArticle$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_article_actions__WEBPACK_IMPORTED_MODULE_5__["addArticle"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_article_actions__WEBPACK_IMPORTED_MODULE_5__["addArticleSuccess"])({ data }))))));
        this.deleteArticle$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_article_actions__WEBPACK_IMPORTED_MODULE_5__["deleteArticle"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_article_actions__WEBPACK_IMPORTED_MODULE_5__["deleteArticleSuccess"])({ id: data.id }))))));
    }
};
ArticleEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"] }
];
ArticleEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"]])
], ArticleEffects);



/***/ }),

/***/ "./src/app/features/store/article/article/article.reducer.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/store/article/article/article.reducer.ts ***!
  \*******************************************************************/
/*! exports provided: articleFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleFeatureKey", function() { return articleFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _article_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article.actions */ "./src/app/features/store/article/article/article.actions.ts");



const articleFeatureKey = 'articles';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allArticlesLoaded: false,
    currentArticle: null
});
const articleReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_article_actions__WEBPACK_IMPORTED_MODULE_2__["addArticleSuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentArticle: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_article_actions__WEBPACK_IMPORTED_MODULE_2__["deleteArticleSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_article_actions__WEBPACK_IMPORTED_MODULE_2__["loadArticlesSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_article_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentArticleSuccess"], (state, action) => (Object.assign({}, state, { currentArticle: action.data }))));
function reducer(state, action) {
    return articleReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/features/store/article/article/article.selectors.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/store/article/article/article.selectors.ts ***!
  \*********************************************************************/
/*! exports provided: selectAllArticles, allArticleLoaded, selectCurrentArticle, selectByModelsID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllArticles", function() { return selectAllArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allArticleLoaded", function() { return allArticleLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticle", function() { return selectCurrentArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectByModelsID", function() { return selectByModelsID; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _article_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article.reducer */ "./src/app/features/store/article/article/article.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_article_reducer__WEBPACK_IMPORTED_MODULE_1__["articleFeatureKey"]);
const selectAllArticles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _article_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allArticleLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allArticlesLoaded);
const selectCurrentArticle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentArticle);
const selectByModelsID = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAllArticles, (articles, id) => {
    const article = articles.filter(a => a.model.id == id);
    return article;
});


/***/ }),

/***/ "./src/app/features/store/article/article/article.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/store/article/article/article.service.ts ***!
  \*******************************************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ArticleService = class ArticleService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/articles/`;
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
ArticleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ArticleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ArticleService);



/***/ }),

/***/ "./src/app/features/store/article/article/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/store/article/article/index.ts ***!
  \*********************************************************/
/*! exports provided: ArticleEffects, ArticleService, selectAllArticles, allArticleLoaded, selectCurrentArticle, selectByModelsID, articleFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadArticles, loadArticlesSuccess, addArticle, addArticleSuccess, deleteArticle, deleteArticleSuccess, selectCurrentArticleSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _article_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article.effects */ "./src/app/features/store/article/article/article.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleEffects", function() { return _article_effects__WEBPACK_IMPORTED_MODULE_0__["ArticleEffects"]; });

/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article.service */ "./src/app/features/store/article/article/article.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return _article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]; });

/* harmony import */ var _article_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article.selectors */ "./src/app/features/store/article/article/article.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllArticles", function() { return _article_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllArticles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allArticleLoaded", function() { return _article_selectors__WEBPACK_IMPORTED_MODULE_2__["allArticleLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticle", function() { return _article_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentArticle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectByModelsID", function() { return _article_selectors__WEBPACK_IMPORTED_MODULE_2__["selectByModelsID"]; });

/* harmony import */ var _article_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article.reducer */ "./src/app/features/store/article/article/article.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "articleFeatureKey", function() { return _article_reducer__WEBPACK_IMPORTED_MODULE_3__["articleFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _article_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _article_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _article_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _article_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _article_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _article_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _article_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _article_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article.actions */ "./src/app/features/store/article/article/article.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadArticles", function() { return _article_actions__WEBPACK_IMPORTED_MODULE_4__["loadArticles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadArticlesSuccess", function() { return _article_actions__WEBPACK_IMPORTED_MODULE_4__["loadArticlesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addArticle", function() { return _article_actions__WEBPACK_IMPORTED_MODULE_4__["addArticle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addArticleSuccess", function() { return _article_actions__WEBPACK_IMPORTED_MODULE_4__["addArticleSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteArticle", function() { return _article_actions__WEBPACK_IMPORTED_MODULE_4__["deleteArticle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteArticleSuccess", function() { return _article_actions__WEBPACK_IMPORTED_MODULE_4__["deleteArticleSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticleSuccess", function() { return _article_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentArticleSuccess"]; });








/***/ }),

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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadModels = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Model/API] Load Models');
const loadModelsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Model/API] Load Models Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addModel = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Model/API] Add Model', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addModelSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Model/API] Add Model Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteModel = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Model/API] Delete Model', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteModelSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Model/API] Delete Model Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentModelSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Model/API] Select Current Model', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model.service */ "./src/app/features/store/article/model/model.service.ts");
/* harmony import */ var _model_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model.actions */ "./src/app/features/store/article/model/model.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _model_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model.selectors */ "./src/app/features/store/article/model/model.selectors.ts");








let ModelEffects = class ModelEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadModels$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_model_actions__WEBPACK_IMPORTED_MODULE_5__["loadModels"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_model_selectors__WEBPACK_IMPORTED_MODULE_7__["allModelLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_model_actions__WEBPACK_IMPORTED_MODULE_5__["loadModelsSuccess"])({ data }))))));
        this.addModel$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_model_actions__WEBPACK_IMPORTED_MODULE_5__["addModel"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_model_actions__WEBPACK_IMPORTED_MODULE_5__["addModelSuccess"])({ data }))))));
        this.deleteModel$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_model_actions__WEBPACK_IMPORTED_MODULE_5__["deleteModel"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_model_actions__WEBPACK_IMPORTED_MODULE_5__["deleteModelSuccess"])({ id: data.id }))))));
    }
};
ModelEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"] }
];
ModelEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]])
], ModelEffects);



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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _model_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model.actions */ "./src/app/features/store/article/model/model.actions.ts");



const modelFeatureKey = 'models';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allModelsLoaded: false,
    currentModel: null
});
const modelReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_model_actions__WEBPACK_IMPORTED_MODULE_2__["addModelSuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentModel: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_model_actions__WEBPACK_IMPORTED_MODULE_2__["deleteModelSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_model_actions__WEBPACK_IMPORTED_MODULE_2__["loadModelsSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_model_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentModelSuccess"], (state, action) => (Object.assign({}, state, { currentModel: action.data }))));
function reducer(state, action) {
    return modelReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _model_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.reducer */ "./src/app/features/store/article/model/model.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_model_reducer__WEBPACK_IMPORTED_MODULE_1__["modelFeatureKey"]);
const selectAllModels = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _model_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allModelLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allModelsLoaded);
const selectCurrentModel = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentModel);
const selectByClientID = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAllModels, (models, id) => {
    const model = models.filter(m => m.client.id == id);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ModelService = class ModelService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/models/`;
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
ModelService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ModelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ModelService);



/***/ }),

/***/ "./src/app/features/store/settings/factorycode/factorycode.actions.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/store/settings/factorycode/factorycode.actions.ts ***!
  \****************************************************************************/
/*! exports provided: loadFactorycodes, loadFactorycodesSuccess, addFactorycode, addFactorycodeSuccess, deleteFactorycode, deleteFactorycodeSuccess, selectCurrentFactorycodeSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFactorycodes", function() { return loadFactorycodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFactorycodesSuccess", function() { return loadFactorycodesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFactorycode", function() { return addFactorycode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFactorycodeSuccess", function() { return addFactorycodeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFactorycode", function() { return deleteFactorycode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFactorycodeSuccess", function() { return deleteFactorycodeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentFactorycodeSuccess", function() { return selectCurrentFactorycodeSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadFactorycodes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Factorycode/API] Load Factorycodes');
const loadFactorycodesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Factorycode/API] Load Factorycodes Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addFactorycode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Factorycode/API] Add Factorycode', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addFactorycodeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Factorycode/API] Add Factorycode Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteFactorycode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Factorycode/API] Delete Factorycode', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteFactorycodeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Factorycode/API] Delete Factorycode Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentFactorycodeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Factorycode/API] Select Current Factorycode', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/settings/factorycode/factorycode.effects.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/store/settings/factorycode/factorycode.effects.ts ***!
  \****************************************************************************/
/*! exports provided: FactorycodeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactorycodeEffects", function() { return FactorycodeEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _factorycode_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factorycode.service */ "./src/app/features/store/settings/factorycode/factorycode.service.ts");
/* harmony import */ var _factorycode_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factorycode.actions */ "./src/app/features/store/settings/factorycode/factorycode.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _factorycode_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./factorycode.selectors */ "./src/app/features/store/settings/factorycode/factorycode.selectors.ts");








let FactorycodeEffects = class FactorycodeEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadFactorycodes$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_factorycode_actions__WEBPACK_IMPORTED_MODULE_5__["loadFactorycodes"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_factorycode_selectors__WEBPACK_IMPORTED_MODULE_7__["allFactorycodeLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_factorycode_actions__WEBPACK_IMPORTED_MODULE_5__["loadFactorycodesSuccess"])({ data }))))));
        this.addFactorycode$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_factorycode_actions__WEBPACK_IMPORTED_MODULE_5__["addFactorycode"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_factorycode_actions__WEBPACK_IMPORTED_MODULE_5__["addFactorycodeSuccess"])({ data }))))));
        this.deleteFactorycode$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_factorycode_actions__WEBPACK_IMPORTED_MODULE_5__["deleteFactorycode"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_factorycode_actions__WEBPACK_IMPORTED_MODULE_5__["deleteFactorycodeSuccess"])({ id: data.id }))))));
    }
};
FactorycodeEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _factorycode_service__WEBPACK_IMPORTED_MODULE_4__["FactorycodeService"] }
];
FactorycodeEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _factorycode_service__WEBPACK_IMPORTED_MODULE_4__["FactorycodeService"]])
], FactorycodeEffects);



/***/ }),

/***/ "./src/app/features/store/settings/factorycode/factorycode.reducer.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/store/settings/factorycode/factorycode.reducer.ts ***!
  \****************************************************************************/
/*! exports provided: factorycodeFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factorycodeFeatureKey", function() { return factorycodeFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _factorycode_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factorycode.actions */ "./src/app/features/store/settings/factorycode/factorycode.actions.ts");



const factorycodeFeatureKey = 'factorycodes';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allFactorycodesLoaded: false,
    currentFactorycode: null
});
const factorycodeReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_factorycode_actions__WEBPACK_IMPORTED_MODULE_2__["addFactorycodeSuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentFactorycode: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_factorycode_actions__WEBPACK_IMPORTED_MODULE_2__["deleteFactorycodeSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_factorycode_actions__WEBPACK_IMPORTED_MODULE_2__["loadFactorycodesSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_factorycode_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentFactorycodeSuccess"], (state, action) => (Object.assign({}, state, { currentFactorycode: action.data }))));
function reducer(state, action) {
    return factorycodeReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/features/store/settings/factorycode/factorycode.selectors.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/store/settings/factorycode/factorycode.selectors.ts ***!
  \******************************************************************************/
/*! exports provided: selectAllFactorycodes, allFactorycodeLoaded, selectCurrentFactorycode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllFactorycodes", function() { return selectAllFactorycodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allFactorycodeLoaded", function() { return allFactorycodeLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentFactorycode", function() { return selectCurrentFactorycode; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _factorycode_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factorycode.reducer */ "./src/app/features/store/settings/factorycode/factorycode.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_factorycode_reducer__WEBPACK_IMPORTED_MODULE_1__["factorycodeFeatureKey"]);
const selectAllFactorycodes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _factorycode_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allFactorycodeLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allFactorycodesLoaded);
const selectCurrentFactorycode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentFactorycode);


/***/ }),

/***/ "./src/app/features/store/settings/factorycode/factorycode.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/store/settings/factorycode/factorycode.service.ts ***!
  \****************************************************************************/
/*! exports provided: FactorycodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactorycodeService", function() { return FactorycodeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let FactorycodeService = class FactorycodeService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/factory-codes/`;
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
FactorycodeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
FactorycodeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], FactorycodeService);



/***/ }),

/***/ "./src/app/features/store/settings/factorycode/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/store/settings/factorycode/index.ts ***!
  \**************************************************************/
/*! exports provided: FactorycodeEffects, FactorycodeService, selectAllFactorycodes, allFactorycodeLoaded, selectCurrentFactorycode, factorycodeFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadFactorycodes, loadFactorycodesSuccess, addFactorycode, addFactorycodeSuccess, deleteFactorycode, deleteFactorycodeSuccess, selectCurrentFactorycodeSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factorycode_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factorycode.effects */ "./src/app/features/store/settings/factorycode/factorycode.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FactorycodeEffects", function() { return _factorycode_effects__WEBPACK_IMPORTED_MODULE_0__["FactorycodeEffects"]; });

/* harmony import */ var _factorycode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factorycode.service */ "./src/app/features/store/settings/factorycode/factorycode.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FactorycodeService", function() { return _factorycode_service__WEBPACK_IMPORTED_MODULE_1__["FactorycodeService"]; });

/* harmony import */ var _factorycode_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factorycode.selectors */ "./src/app/features/store/settings/factorycode/factorycode.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllFactorycodes", function() { return _factorycode_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllFactorycodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allFactorycodeLoaded", function() { return _factorycode_selectors__WEBPACK_IMPORTED_MODULE_2__["allFactorycodeLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentFactorycode", function() { return _factorycode_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentFactorycode"]; });

/* harmony import */ var _factorycode_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factorycode.reducer */ "./src/app/features/store/settings/factorycode/factorycode.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "factorycodeFeatureKey", function() { return _factorycode_reducer__WEBPACK_IMPORTED_MODULE_3__["factorycodeFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _factorycode_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _factorycode_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _factorycode_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _factorycode_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _factorycode_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _factorycode_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _factorycode_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _factorycode_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factorycode.actions */ "./src/app/features/store/settings/factorycode/factorycode.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadFactorycodes", function() { return _factorycode_actions__WEBPACK_IMPORTED_MODULE_4__["loadFactorycodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadFactorycodesSuccess", function() { return _factorycode_actions__WEBPACK_IMPORTED_MODULE_4__["loadFactorycodesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addFactorycode", function() { return _factorycode_actions__WEBPACK_IMPORTED_MODULE_4__["addFactorycode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addFactorycodeSuccess", function() { return _factorycode_actions__WEBPACK_IMPORTED_MODULE_4__["addFactorycodeSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteFactorycode", function() { return _factorycode_actions__WEBPACK_IMPORTED_MODULE_4__["deleteFactorycode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteFactorycodeSuccess", function() { return _factorycode_actions__WEBPACK_IMPORTED_MODULE_4__["deleteFactorycodeSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentFactorycodeSuccess", function() { return _factorycode_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentFactorycodeSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/settings/vendor/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/store/settings/vendor/index.ts ***!
  \*********************************************************/
/*! exports provided: VendorEffects, VendorService, selectAllVendors, allVendorLoaded, selectCurrentVendor, vendorFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadVendors, loadVendorsSuccess, addVendor, addVendorSuccess, deleteVendor, deleteVendorSuccess, selectCurrentVendorSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor.effects */ "./src/app/features/store/settings/vendor/vendor.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VendorEffects", function() { return _vendor_effects__WEBPACK_IMPORTED_MODULE_0__["VendorEffects"]; });

/* harmony import */ var _vendor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor.service */ "./src/app/features/store/settings/vendor/vendor.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VendorService", function() { return _vendor_service__WEBPACK_IMPORTED_MODULE_1__["VendorService"]; });

/* harmony import */ var _vendor_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor.selectors */ "./src/app/features/store/settings/vendor/vendor.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllVendors", function() { return _vendor_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllVendors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allVendorLoaded", function() { return _vendor_selectors__WEBPACK_IMPORTED_MODULE_2__["allVendorLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentVendor", function() { return _vendor_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentVendor"]; });

/* harmony import */ var _vendor_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor.reducer */ "./src/app/features/store/settings/vendor/vendor.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vendorFeatureKey", function() { return _vendor_reducer__WEBPACK_IMPORTED_MODULE_3__["vendorFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _vendor_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _vendor_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _vendor_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _vendor_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _vendor_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _vendor_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _vendor_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _vendor_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor.actions */ "./src/app/features/store/settings/vendor/vendor.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadVendors", function() { return _vendor_actions__WEBPACK_IMPORTED_MODULE_4__["loadVendors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadVendorsSuccess", function() { return _vendor_actions__WEBPACK_IMPORTED_MODULE_4__["loadVendorsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addVendor", function() { return _vendor_actions__WEBPACK_IMPORTED_MODULE_4__["addVendor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addVendorSuccess", function() { return _vendor_actions__WEBPACK_IMPORTED_MODULE_4__["addVendorSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteVendor", function() { return _vendor_actions__WEBPACK_IMPORTED_MODULE_4__["deleteVendor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteVendorSuccess", function() { return _vendor_actions__WEBPACK_IMPORTED_MODULE_4__["deleteVendorSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentVendorSuccess", function() { return _vendor_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentVendorSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/settings/vendor/vendor.actions.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/store/settings/vendor/vendor.actions.ts ***!
  \******************************************************************/
/*! exports provided: loadVendors, loadVendorsSuccess, addVendor, addVendorSuccess, deleteVendor, deleteVendorSuccess, selectCurrentVendorSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadVendors", function() { return loadVendors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadVendorsSuccess", function() { return loadVendorsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVendor", function() { return addVendor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVendorSuccess", function() { return addVendorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteVendor", function() { return deleteVendor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteVendorSuccess", function() { return deleteVendorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentVendorSuccess", function() { return selectCurrentVendorSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadVendors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Vendor/API] Load Vendors');
const loadVendorsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Vendor/API] Load Vendors Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addVendor = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Vendor/API] Add Vendor', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addVendorSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Vendor/API] Add Vendor Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteVendor = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Vendor/API] Delete Vendor', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteVendorSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Vendor/API] Delete Vendor Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentVendorSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Vendor/API] Select Current Vendor', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/settings/vendor/vendor.effects.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/store/settings/vendor/vendor.effects.ts ***!
  \******************************************************************/
/*! exports provided: VendorEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorEffects", function() { return VendorEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _vendor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor.service */ "./src/app/features/store/settings/vendor/vendor.service.ts");
/* harmony import */ var _vendor_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendor.actions */ "./src/app/features/store/settings/vendor/vendor.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _vendor_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vendor.selectors */ "./src/app/features/store/settings/vendor/vendor.selectors.ts");








let VendorEffects = class VendorEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadVendors$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_vendor_actions__WEBPACK_IMPORTED_MODULE_5__["loadVendors"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_vendor_selectors__WEBPACK_IMPORTED_MODULE_7__["allVendorLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_vendor_actions__WEBPACK_IMPORTED_MODULE_5__["loadVendorsSuccess"])({ data }))))));
        this.addVendor$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_vendor_actions__WEBPACK_IMPORTED_MODULE_5__["addVendor"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_vendor_actions__WEBPACK_IMPORTED_MODULE_5__["addVendorSuccess"])({ data }))))));
        this.deleteVendor$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_vendor_actions__WEBPACK_IMPORTED_MODULE_5__["deleteVendor"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_vendor_actions__WEBPACK_IMPORTED_MODULE_5__["deleteVendorSuccess"])({ id: data.id }))))));
    }
};
VendorEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _vendor_service__WEBPACK_IMPORTED_MODULE_4__["VendorService"] }
];
VendorEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _vendor_service__WEBPACK_IMPORTED_MODULE_4__["VendorService"]])
], VendorEffects);



/***/ }),

/***/ "./src/app/features/store/settings/vendor/vendor.reducer.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/store/settings/vendor/vendor.reducer.ts ***!
  \******************************************************************/
/*! exports provided: vendorFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vendorFeatureKey", function() { return vendorFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _vendor_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor.actions */ "./src/app/features/store/settings/vendor/vendor.actions.ts");



const vendorFeatureKey = 'vendors';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allVendorsLoaded: false,
    currentVendor: null
});
const vendorReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_vendor_actions__WEBPACK_IMPORTED_MODULE_2__["addVendorSuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentVendor: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_vendor_actions__WEBPACK_IMPORTED_MODULE_2__["deleteVendorSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_vendor_actions__WEBPACK_IMPORTED_MODULE_2__["loadVendorsSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_vendor_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentVendorSuccess"], (state, action) => (Object.assign({}, state, { currentVendor: action.data }))));
function reducer(state, action) {
    return vendorReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/features/store/settings/vendor/vendor.selectors.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/store/settings/vendor/vendor.selectors.ts ***!
  \********************************************************************/
/*! exports provided: selectAllVendors, allVendorLoaded, selectCurrentVendor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllVendors", function() { return selectAllVendors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allVendorLoaded", function() { return allVendorLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentVendor", function() { return selectCurrentVendor; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _vendor_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor.reducer */ "./src/app/features/store/settings/vendor/vendor.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_vendor_reducer__WEBPACK_IMPORTED_MODULE_1__["vendorFeatureKey"]);
const selectAllVendors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _vendor_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allVendorLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allVendorsLoaded);
const selectCurrentVendor = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentVendor);


/***/ }),

/***/ "./src/app/features/store/settings/vendor/vendor.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/store/settings/vendor/vendor.service.ts ***!
  \******************************************************************/
/*! exports provided: VendorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorService", function() { return VendorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let VendorService = class VendorService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/vendors/`;
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
VendorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
VendorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], VendorService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map