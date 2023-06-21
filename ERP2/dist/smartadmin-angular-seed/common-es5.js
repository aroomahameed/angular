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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadArticles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Article/API] Load Articles');
var loadArticlesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Article/API] Load Articles Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addArticle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Article/API] Add Article', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addArticleSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Article/API] Add Article Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteArticle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Article/API] Delete Article', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteArticleSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Article/API] Delete Article Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentArticleSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Article/API] Select Current Article', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article.service */ "./src/app/features/store/article/article/article.service.ts");
/* harmony import */ var _article_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article.actions */ "./src/app/features/store/article/article/article.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _article_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article.selectors */ "./src/app/features/store/article/article/article.selectors.ts");








var ArticleEffects = /** @class */ (function () {
    function ArticleEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadArticles$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_article_actions__WEBPACK_IMPORTED_MODULE_5__["loadArticles"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_article_selectors__WEBPACK_IMPORTED_MODULE_7__["allArticleLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_article_actions__WEBPACK_IMPORTED_MODULE_5__["loadArticlesSuccess"])({ data: data }); })); })); });
        this.addArticle$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_article_actions__WEBPACK_IMPORTED_MODULE_5__["addArticle"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_article_actions__WEBPACK_IMPORTED_MODULE_5__["addArticleSuccess"])({ data: data }); })); })); });
        this.deleteArticle$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_article_actions__WEBPACK_IMPORTED_MODULE_5__["deleteArticle"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_article_actions__WEBPACK_IMPORTED_MODULE_5__["deleteArticleSuccess"])({ id: data.id }); }));
        })); });
    }
    ArticleEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"] }
    ]; };
    ArticleEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"]])
    ], ArticleEffects);
    return ArticleEffects;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _article_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article.actions */ "./src/app/features/store/article/article/article.actions.ts");

var _a;



var articleFeatureKey = 'articles';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allArticlesLoaded: false,
    currentArticle: null
});
var articleReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_article_actions__WEBPACK_IMPORTED_MODULE_3__["addArticleSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentArticle: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_article_actions__WEBPACK_IMPORTED_MODULE_3__["deleteArticleSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_article_actions__WEBPACK_IMPORTED_MODULE_3__["loadArticlesSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_article_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentArticleSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentArticle: action.data })); }));
function reducer(state, action) {
    return articleReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _article_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article.reducer */ "./src/app/features/store/article/article/article.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_article_reducer__WEBPACK_IMPORTED_MODULE_1__["articleFeatureKey"]);
var selectAllArticles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _article_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allArticleLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allArticlesLoaded; });
var selectCurrentArticle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentArticle; });
var selectByModelsID = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAllArticles, function (articles, id) {
    var article = articles.filter(function (a) { return a.model.id == id; });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ArticleService = /** @class */ (function () {
    function ArticleService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/articles/";
    }
    ArticleService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    ArticleService.prototype.save = function (item) {
        if (!item.get('id')) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    ArticleService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.get('id') + "/", item);
    };
    ArticleService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    ArticleService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ArticleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ArticleService);
    return ArticleService;
}());



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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadSeasons = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Season/API] Load Seasons');
var loadSeasonsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Season/API] Load Seasons Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addSeason = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Season/API] Add Season', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addSeasonSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Season/API] Add Season Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteSeason = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Season/API] Delete Season', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteSeasonSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Season/API] Delete Season Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentSeasonSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Season/API] Select Current Season', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _season_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./season.service */ "./src/app/features/store/article/season/season.service.ts");
/* harmony import */ var _season_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./season.actions */ "./src/app/features/store/article/season/season.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _season_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./season.selectors */ "./src/app/features/store/article/season/season.selectors.ts");








var SeasonEffects = /** @class */ (function () {
    function SeasonEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadSeasons$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_season_actions__WEBPACK_IMPORTED_MODULE_5__["loadSeasons"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_season_selectors__WEBPACK_IMPORTED_MODULE_7__["allSeasonLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_season_actions__WEBPACK_IMPORTED_MODULE_5__["loadSeasonsSuccess"])({ data: data }); })); })); });
        this.addSeason$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_season_actions__WEBPACK_IMPORTED_MODULE_5__["addSeason"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_season_actions__WEBPACK_IMPORTED_MODULE_5__["addSeasonSuccess"])({ data: data }); })); })); });
        this.deleteSeason$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_season_actions__WEBPACK_IMPORTED_MODULE_5__["deleteSeason"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_season_actions__WEBPACK_IMPORTED_MODULE_5__["deleteSeasonSuccess"])({ id: data.id }); }));
        })); });
    }
    SeasonEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _season_service__WEBPACK_IMPORTED_MODULE_4__["SeasonService"] }
    ]; };
    SeasonEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _season_service__WEBPACK_IMPORTED_MODULE_4__["SeasonService"]])
    ], SeasonEffects);
    return SeasonEffects;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _season_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./season.actions */ "./src/app/features/store/article/season/season.actions.ts");

var _a;



var seasonFeatureKey = 'seasons';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allSeasonsLoaded: false,
    currentSeason: null
});
var seasonReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_season_actions__WEBPACK_IMPORTED_MODULE_3__["addSeasonSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentSeason: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_season_actions__WEBPACK_IMPORTED_MODULE_3__["deleteSeasonSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_season_actions__WEBPACK_IMPORTED_MODULE_3__["loadSeasonsSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_season_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentSeasonSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentSeason: action.data })); }));
function reducer(state, action) {
    return seasonReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _season_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./season.reducer */ "./src/app/features/store/article/season/season.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_season_reducer__WEBPACK_IMPORTED_MODULE_1__["seasonFeatureKey"]);
var selectAllSeasons = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _season_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allSeasonLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allSeasonsLoaded; });
var selectCurrentSeason = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentSeason; });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var SeasonService = /** @class */ (function () {
    function SeasonService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/seasons/";
    }
    SeasonService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    SeasonService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    SeasonService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    SeasonService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    SeasonService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    SeasonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SeasonService);
    return SeasonService;
}());



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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadFactorycodes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Factorycode/API] Load Factorycodes');
var loadFactorycodesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Factorycode/API] Load Factorycodes Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addFactorycode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Factorycode/API] Add Factorycode', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addFactorycodeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Factorycode/API] Add Factorycode Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteFactorycode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Factorycode/API] Delete Factorycode', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteFactorycodeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Factorycode/API] Delete Factorycode Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentFactorycodeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Factorycode/API] Select Current Factorycode', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _factorycode_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factorycode.service */ "./src/app/features/store/settings/factorycode/factorycode.service.ts");
/* harmony import */ var _factorycode_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factorycode.actions */ "./src/app/features/store/settings/factorycode/factorycode.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _factorycode_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./factorycode.selectors */ "./src/app/features/store/settings/factorycode/factorycode.selectors.ts");








var FactorycodeEffects = /** @class */ (function () {
    function FactorycodeEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadFactorycodes$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_factorycode_actions__WEBPACK_IMPORTED_MODULE_5__["loadFactorycodes"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_factorycode_selectors__WEBPACK_IMPORTED_MODULE_7__["allFactorycodeLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_factorycode_actions__WEBPACK_IMPORTED_MODULE_5__["loadFactorycodesSuccess"])({ data: data }); })); })); });
        this.addFactorycode$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_factorycode_actions__WEBPACK_IMPORTED_MODULE_5__["addFactorycode"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_factorycode_actions__WEBPACK_IMPORTED_MODULE_5__["addFactorycodeSuccess"])({ data: data }); })); })); });
        this.deleteFactorycode$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_factorycode_actions__WEBPACK_IMPORTED_MODULE_5__["deleteFactorycode"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_factorycode_actions__WEBPACK_IMPORTED_MODULE_5__["deleteFactorycodeSuccess"])({ id: data.id }); }));
        })); });
    }
    FactorycodeEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _factorycode_service__WEBPACK_IMPORTED_MODULE_4__["FactorycodeService"] }
    ]; };
    FactorycodeEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _factorycode_service__WEBPACK_IMPORTED_MODULE_4__["FactorycodeService"]])
    ], FactorycodeEffects);
    return FactorycodeEffects;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _factorycode_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factorycode.actions */ "./src/app/features/store/settings/factorycode/factorycode.actions.ts");

var _a;



var factorycodeFeatureKey = 'factorycodes';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allFactorycodesLoaded: false,
    currentFactorycode: null
});
var factorycodeReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_factorycode_actions__WEBPACK_IMPORTED_MODULE_3__["addFactorycodeSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentFactorycode: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_factorycode_actions__WEBPACK_IMPORTED_MODULE_3__["deleteFactorycodeSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_factorycode_actions__WEBPACK_IMPORTED_MODULE_3__["loadFactorycodesSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_factorycode_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentFactorycodeSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentFactorycode: action.data })); }));
function reducer(state, action) {
    return factorycodeReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _factorycode_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factorycode.reducer */ "./src/app/features/store/settings/factorycode/factorycode.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_factorycode_reducer__WEBPACK_IMPORTED_MODULE_1__["factorycodeFeatureKey"]);
var selectAllFactorycodes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _factorycode_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allFactorycodeLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allFactorycodesLoaded; });
var selectCurrentFactorycode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentFactorycode; });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var FactorycodeService = /** @class */ (function () {
    function FactorycodeService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/factory-codes/";
    }
    FactorycodeService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    FactorycodeService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    FactorycodeService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    FactorycodeService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    FactorycodeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    FactorycodeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], FactorycodeService);
    return FactorycodeService;
}());



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








/***/ })

}]);
//# sourceMappingURL=common-es5.js.map