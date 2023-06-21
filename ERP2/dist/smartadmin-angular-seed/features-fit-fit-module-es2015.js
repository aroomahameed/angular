(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-fit-fit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/features/fit/balltests/balltests.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/fit/balltests/balltests.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<smart-modal title=\"{{title}} Ball Tests\">\r\n    <form [formGroup]=\"fg\" (ngSubmit)=\"onSubmit($event)\">\r\n        <div class=\"panel-content\">\r\n            <div class=\"row\">\r\n                \r\n                <div class=\"col-md-6\">\r\n                    <smart-input formControlName='version' label=\"Version\"></smart-input>\r\n                </div>\r\n             \r\n                <div class=\"col-md-6\">\r\n                    <smart-input formControlName='lab_no' label=\"Lab No\"></smart-input>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <smart-select formControlName='model_name' [items]=\"models\"  label=\"Model Name\"></smart-select>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <smart-input type=\"file\" formControlName='tds_link' label=\"TDS Link\" ></smart-input>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <smart-input formControlName='remarks' label=\"Remarks\" ></smart-input>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <smart-input formControlName='test_date' label=\"Test Date\" type='date'></smart-input>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <smart-select formControlName='test' [items]=\"test\" label=\"Test\"></smart-select>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <smart-select formControlName='test_status' [items]=\"test_status\" label=\"Test status\"></smart-select>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <smart-input formControlName='tester_name' label=\"Tester Name\" ></smart-input>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <smart-input formControlName='tester_remarks' label=\"Tester Remarks\" ></smart-input>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <smart-input type=\"file\" formControlName='test_link' label=\"Test Link\" ></smart-input>\r\n                </div>\r\n                \r\n\r\n                <div class=\"col-md-12\">\r\n                    <smart-checkbox formControlName='status' label=\" Test Status\"></smart-checkbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"border-faded border-left-0 border-right-0 border-bottom-0 d-flex flex-row align-items-center\">\r\n                <button type=\"submit\" class=\"btn btn-primary ml-auto waves-effect waves-themed mt-2\"\r\n                    type=\"submit\"  *ngIf=\"!viewStatus\"  >{{title === 'Add' ? 'Save' : 'Update'}}</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</smart-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/fit/materialtests/materialtests.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/fit/materialtests/materialtests.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-modal title=\"{{title}} Materials Tests\">\r\n    <form [formGroup]=\"fg\" (ngSubmit)=\"onSubmit($event)\">\r\n        <div class=\"panel-content\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <smart-input formControlName='version' label=\"Version\"></smart-input>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <smart-input formControlName='lab_no' label=\"Lab No\"></smart-input>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <smart-select formControlName='material_name' [items]=\"material\" label=\"Material Name\">\r\n                    </smart-select>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <smart-select formControlName='material_type' [items]=\"material_types\" label=\"Material type\">\r\n                    </smart-select>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <smart-input formControlName='remarks' label=\"Remarks\"></smart-input>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <smart-input formControlName='test_date' label=\"Test Date\" type='date'></smart-input>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <smart-select formControlName='test' [items]=\"test\" label=\"Test\"></smart-select>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <smart-select formControlName='test_status' [items]=\"test_status\" label=\"Test status\">\r\n                    </smart-select>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <smart-input formControlName='tester_name' label=\"Tester Name\"></smart-input>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <smart-input formControlName='tester_remarks' label=\"Tester Remarks\"></smart-input>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <smart-input type=\"file\" formControlName='test_link' label=\"Test Link\"></smart-input>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <smart-input type=\"file\" formControlName='tds_link' label=\"TDS Link\"></smart-input>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <smart-checkbox formControlName='status' label=\" Test Status\"></smart-checkbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"border-faded border-left-0 border-right-0 border-bottom-0 d-flex flex-row align-items-center\">\r\n                <button type=\"submit\" class=\"btn btn-primary ml-auto waves-effect waves-themed mt-2\" type=\"submit\"\r\n                    *ngIf=\"!viewStatus\">{{title === 'Add' ? 'Save' : 'Update'}}</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</smart-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/fit/projects/projects.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/fit/projects/projects.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-panel  [fullscreenable]=\"true\">\r\n    <h2 panelTitle>Project</h2>\r\n    <button panelToolbar class=\"btn btn-primary\" (click)=\"onCreate()\"> <i class=\"fal fa-plus-circle\"></i> Create</button>\r\n\r\n    <div panelContent>\r\n        <smart-table \r\n        [items]=\"project\" \r\n        [columns]=\"columns\" \r\n        [selectable] = \"false\" \r\n        [editable]=\"true\" \r\n        [deletable]=\"true\" \r\n        [View]=\"true\" \r\n        ViewToolTip=\"View\"\r\n        currentItemAction=\"[Materialtest/API] Select Current Materialtest\"\r\n        (editEvt)=\"onEdit($event)\"\r\n        (deleteEvt)=\"ondelete($event)\"\r\n        (viewEvent)=\"onshow($event)\"\r\n        >\r\n        </smart-table>\r\n    </div>\r\n</smart-panel>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/fit/projects/test-form/test-form.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/fit/projects/test-form/test-form.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-modal title=\"{{title}} Project\">\n    <form [formGroup]=\"fg\" (ngSubmit)=\"onSubmit($event)\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <smart-input formControlName='name' label=\" Project Name\"></smart-input>\n            </div>\n            <div class=\"col-md-6\">\n                <smart-input formControlName='lab_no' label=\"Lab No\" type='number'></smart-input>\n            </div>\n            <div class=\"col-md-6\">\n                <smart-input formControlName='start_date' label=\"Start Date\" type='date'></smart-input>\n            </div>\n            <div class=\"col-md-6\">\n                <smart-input formControlName='end_date' label=\"End Date\" type='date'></smart-input>\n            </div>\n\n            <div class=\"col-md-12\">\n                <smart-input formControlName='remarks' label=\"Remarks\"></smart-input>\n            </div>\n            <div class=\"col-md-12\">\n                <smart-checkbox formControlName='status' label=\"Status\"></smart-checkbox>\n            </div>\n\n        </div>\n\n\n        <div class=\"d-flex align-items-end justify-content-end\">\n            <button class=\"btn btn-primary ml-auto waves-effect waves-themed mt-2\" type=\"submit\"\n                *ngIf=\"!viewStatus\">{{title === 'Add' ? 'Save' : 'Update'}}</button>\n        </div>\n    </form>\n    <div *ngIf=\"projectId\">\n\n        <tabset>\n            <tab heading=\"Material Tests\">\n                <smart-panel [collapsible]=\"false\">\n\n\n                    <button panelToolbar class=\"btn btn-warning\" *ngIf=\"!viewStatus\" (click)=\"oncreatematerial()\"> <i\n                            class=\"fal fa-plus-circle\"></i> Create</button>\n\n\n                    <div panelContent>\n                        <smart-table [items]=\"materialtest\" [columns]=\"columns\" [selectable]=\" false\"\n                            [editable]=\"viewStatus ? false : true\" [deletable]=\"viewStatus ? false : true\"\n                            ViewToolTip=\"View\" [View]=\"viewStatus ? true : false\" (editEvt)=\"onEditmaterial($event) \"\n                            (deleteEvt)=\"ondeleteMaterial($event) \" (viewEvent)=\"onshowMaterial($event)\">\n                        </smart-table>\n                    </div>\n                </smart-panel>\n            </tab>\n            <tab heading=\"Balls Tests\">\n                <smart-panel [collapsible]=\"false\">\n\n\n                    <button panelToolbar class=\"btn btn-warning\" *ngIf=\"!viewStatus\" (click)=\"oncreateball()\"> <i\n                            class=\"fal fa-plus-circle\"></i> Create</button>\n\n\n                    <div panelContent>\n                        <smart-table [items]=\"balltest\" [columns]=\"columns2\" [selectable]=\"false\"\n                            [editable]=\"viewStatus ? false : true\" [deletable]=\"viewStatus ? false : true\"\n                            ViewToolTip=\"View\" [View]=\"viewStatus ? true : false\" (editEvt)=\"onEditball($event) \"\n                            (deleteEvt)=\"ondeleteball($event)\" (viewEvent)=\"onshowball($event)\">\n                        </smart-table>\n                    </div>\n                </smart-panel>\n            </tab>\n\n        </tabset>\n\n\n    </div>\n\n\n\n    <!-- {{(currentProject | async)?.id}} -->\n\n\n</smart-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/fit/tests/tests.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/fit/tests/tests.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-crud-panel \r\n    title=\"Tests\" \r\n    icon=\"fal fa-users\" \r\n    [columns]=\"columns\"\r\n    [selectAllSelector]=\"selectAllSelector\"\r\n    [selectCurrent]=\"selectCurrent\"\r\n    [form] =\"form\"\r\n    [deleteable]=\"true\"\r\n    [editable]=\"true\"\r\n    formTitle=\"Test\"\r\n    itemName=\"Test\"\r\n    >\r\n\r\n    <h2 title><i class=\"fal fa-list\"></i>&nbsp;Test</h2>\r\n    \r\n</smart-crud-panel>\r\n\r\n"

/***/ }),

/***/ "./src/app/features/fit/balltests/balltests.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/fit/balltests/balltests.component.ts ***!
  \***************************************************************/
/*! exports provided: BalltestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalltestsComponent", function() { return BalltestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_fit_balltest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/fit/balltest */ "./src/app/features/store/fit/balltest/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_fit_test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/fit/test */ "./src/app/features/store/fit/test/index.ts");
/* harmony import */ var _store_article_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/article/model */ "./src/app/features/store/article/model/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let BalltestsComponent = class BalltestsComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
        this.submitted = false;
        this.title = 'Add';
        this.test_status = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])([{ id: 'P', name: 'Pass' }, { id: 'F', name: 'Fail' }, { id: 'W', name: 'Pending' }]);
    }
    ngOnInit() {
        this.buildForm();
        this.store.dispatch(Object(_store_fit_test__WEBPACK_IMPORTED_MODULE_3__["loadTests"])());
        this.test = this.store.select(_store_fit_test__WEBPACK_IMPORTED_MODULE_3__["selectAllTests"]);
        this.store.dispatch(Object(_store_article_model__WEBPACK_IMPORTED_MODULE_4__["loadModels"])());
        this.models = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_4__["selectAllModels"]);
    }
    // convenience getter for easy access to form fields
    get f() { return this.fg.controls; }
    buildForm() {
        this.fg = this.fb.group({
            id: [this.balltest ? this.balltest.id : null],
            project: [this.balltest ? this.balltest.project : this.projectId, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            version: [this.balltest ? this.balltest.version : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            model_name: [this.balltest ? this.balltest.model_name : null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            test_date: [this.balltest ? this.balltest.test_date : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            lab_no: [this.balltest ? this.balltest.lab_no : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            tds_link: [this.balltest ? this.balltest.tds_link : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            remarks: [this.balltest ? this.balltest.remarks : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            test: [this.balltest ? this.balltest.test : null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            test_status: [this.balltest ? this.balltest.test_status : null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            tester_name: [this.balltest ? this.balltest.tester_name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            tester_remarks: [this.balltest ? this.balltest.tester_remarks : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            test_link: [this.balltest ? this.balltest.test_link : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            status: [this.balltest ? this.balltest.status : ''],
        });
    }
    onSubmit(event) {
        Object.keys(this.fg.controls).forEach(field => {
            const control = this.fg.get(field);
            control.markAsTouched({ onlySelf: true });
            control.markAsDirty({ onlySelf: true });
        });
        if (this.fg.invalid)
            return;
        this.store.dispatch(Object(_store_fit_balltest__WEBPACK_IMPORTED_MODULE_1__["addBalltest"])({ data: this.fg.value }));
    }
};
BalltestsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
];
BalltestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'smart-balltests',
        template: __webpack_require__(/*! raw-loader!./balltests.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/fit/balltests/balltests.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
], BalltestsComponent);



/***/ }),

/***/ "./src/app/features/fit/fit.module.ts":
/*!********************************************!*\
  !*** ./src/app/features/fit/fit.module.ts ***!
  \********************************************/
/*! exports provided: FitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitModule", function() { return FitModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_custom_tables_custom_tables_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/custom-tables/custom-tables.module */ "./src/app/shared/custom-tables/custom-tables.module.ts");
/* harmony import */ var _shared_dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/dialogs/dialogs.module */ "./src/app/shared/dialogs/dialogs.module.ts");
/* harmony import */ var _shared_forms_forms_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/forms/forms.module */ "./src/app/shared/forms/forms.module.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/features/fit/projects/projects.component.ts");
/* harmony import */ var _balltests_balltests_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./balltests/balltests.component */ "./src/app/features/fit/balltests/balltests.component.ts");
/* harmony import */ var _materialtests_materialtests_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./materialtests/materialtests.component */ "./src/app/features/fit/materialtests/materialtests.component.ts");
/* harmony import */ var _tests_tests_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tests/tests.component */ "./src/app/features/fit/tests/tests.component.ts");
/* harmony import */ var src_app_features_store_fit_project__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/features/store/fit/project */ "./src/app/features/store/fit/project/index.ts");
/* harmony import */ var src_app_features_store_fit_balltest__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/features/store/fit/balltest */ "./src/app/features/store/fit/balltest/index.ts");
/* harmony import */ var src_app_features_store_fit_materialtest__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/features/store/fit/materialtest */ "./src/app/features/store/fit/materialtest/index.ts");
/* harmony import */ var src_app_features_store_fit_test__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/features/store/fit/test */ "./src/app/features/store/fit/test/index.ts");
/* harmony import */ var src_app_features_store_merchandise_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/features/store/merchandise/material */ "./src/app/features/store/merchandise/material/index.ts");
/* harmony import */ var src_app_features_store_article_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/features/store/article/model */ "./src/app/features/store/article/model/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _projects_test_form_test_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./projects/test-form/test-form.component */ "./src/app/features/fit/projects/test-form/test-form.component.ts");









//component imports




//store imports








let FitModule = class FitModule {
};
FitModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [_tests_tests_component__WEBPACK_IMPORTED_MODULE_12__["TestsComponent"], _projects_test_form_test_form_component__WEBPACK_IMPORTED_MODULE_20__["TestFormComponent"], _materialtests_materialtests_component__WEBPACK_IMPORTED_MODULE_11__["MaterialtestsComponent"], _balltests_balltests_component__WEBPACK_IMPORTED_MODULE_10__["BalltestsComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _shared_custom_tables_custom_tables_module__WEBPACK_IMPORTED_MODULE_6__["CustomTablesModule"],
            _shared_dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_7__["DialogsModule"],
            _shared_forms_forms_module__WEBPACK_IMPORTED_MODULE_8__["CustomFormsModule"],
            //store for feature
            _ngrx_store__WEBPACK_IMPORTED_MODULE_19__["StoreModule"].forFeature(src_app_features_store_fit_project__WEBPACK_IMPORTED_MODULE_13__["projectFeatureKey"], src_app_features_store_fit_project__WEBPACK_IMPORTED_MODULE_13__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_19__["StoreModule"].forFeature(src_app_features_store_fit_balltest__WEBPACK_IMPORTED_MODULE_14__["balltestFeatureKey"], src_app_features_store_fit_balltest__WEBPACK_IMPORTED_MODULE_14__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_19__["StoreModule"].forFeature(src_app_features_store_fit_materialtest__WEBPACK_IMPORTED_MODULE_15__["materialtestFeatureKey"], src_app_features_store_fit_materialtest__WEBPACK_IMPORTED_MODULE_15__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_19__["StoreModule"].forFeature(src_app_features_store_fit_test__WEBPACK_IMPORTED_MODULE_16__["testFeatureKey"], src_app_features_store_fit_test__WEBPACK_IMPORTED_MODULE_16__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_19__["StoreModule"].forFeature(src_app_features_store_merchandise_material__WEBPACK_IMPORTED_MODULE_17__["materialFeatureKey"], src_app_features_store_merchandise_material__WEBPACK_IMPORTED_MODULE_17__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_19__["StoreModule"].forFeature(src_app_features_store_article_model__WEBPACK_IMPORTED_MODULE_18__["modelFeatureKey"], src_app_features_store_article_model__WEBPACK_IMPORTED_MODULE_18__["reducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature([src_app_features_store_fit_test__WEBPACK_IMPORTED_MODULE_16__["TestEffects"], src_app_features_store_fit_materialtest__WEBPACK_IMPORTED_MODULE_15__["MaterialtestEffects"], src_app_features_store_merchandise_material__WEBPACK_IMPORTED_MODULE_17__["MaterialEffects"], src_app_features_store_fit_balltest__WEBPACK_IMPORTED_MODULE_14__["BalltestEffects"], src_app_features_store_article_model__WEBPACK_IMPORTED_MODULE_18__["ModelEffects"], src_app_features_store_fit_project__WEBPACK_IMPORTED_MODULE_13__["ProjectEffects"]]),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                { path: '', pathMatch: 'full', redirectTo: 'test' },
                { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"] },
                { path: 'balltests', component: _balltests_balltests_component__WEBPACK_IMPORTED_MODULE_10__["BalltestsComponent"] },
                { path: 'materialtests', component: _materialtests_materialtests_component__WEBPACK_IMPORTED_MODULE_11__["MaterialtestsComponent"] },
                { path: 'test', component: _tests_tests_component__WEBPACK_IMPORTED_MODULE_12__["TestsComponent"] },
            ])
        ],
        entryComponents: [_projects_test_form_test_form_component__WEBPACK_IMPORTED_MODULE_20__["TestFormComponent"], _materialtests_materialtests_component__WEBPACK_IMPORTED_MODULE_11__["MaterialtestsComponent"], _balltests_balltests_component__WEBPACK_IMPORTED_MODULE_10__["BalltestsComponent"]]
    })
], FitModule);



/***/ }),

/***/ "./src/app/features/fit/materialtests/materialtests.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/fit/materialtests/materialtests.component.ts ***!
  \***********************************************************************/
/*! exports provided: MaterialtestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialtestsComponent", function() { return MaterialtestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_fit_materialtest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/fit/materialtest */ "./src/app/features/store/fit/materialtest/index.ts");
/* harmony import */ var _store_merchandise_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/merchandise/material */ "./src/app/features/store/merchandise/material/index.ts");
/* harmony import */ var _store_fit_test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/fit/test */ "./src/app/features/store/fit/test/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let MaterialtestsComponent = class MaterialtestsComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
        this.submitted = false;
        this.title = 'Add';
        this.material_types = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])([{ id: 'N', name: 'New' }, { id: 'A', name: 'Already Tested' }]);
        this.test_status = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])([{ id: 'P', name: 'Pass' }, { id: 'F', name: 'Fail' }, { id: 'W', name: 'Pending' }]);
    }
    ngOnInit() {
        this.buildForm();
        this.store.dispatch(Object(_store_fit_test__WEBPACK_IMPORTED_MODULE_4__["loadTests"])());
        this.test = this.store.select(_store_fit_test__WEBPACK_IMPORTED_MODULE_4__["selectAllTests"]);
        this.store.dispatch(Object(_store_merchandise_material__WEBPACK_IMPORTED_MODULE_3__["loadMaterials"])());
        this.material = this.store.select(_store_merchandise_material__WEBPACK_IMPORTED_MODULE_3__["selectAllMaterials"]);
    }
    // convenience getter for easy access to form fields
    get f() { return this.fg.controls; }
    buildForm() {
        this.fg = this.fb.group({
            id: [this.materialtest ? this.materialtest.id : null],
            material_name: [this.materialtest ? this.materialtest.material_name.id : null],
            project: [this.materialtest ? this.materialtest.project : this.projectId, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            version: [this.materialtest ? this.materialtest.version : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            material_type: [this.materialtest ? this.materialtest.material_type : null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            test_date: [this.materialtest ? this.materialtest.test_date : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            lab_no: [this.materialtest ? this.materialtest.lab_no : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            tds_link: [this.materialtest ? this.materialtest.tds_link : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            remarks: [this.materialtest ? this.materialtest.remarks : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            test: [this.materialtest ? this.materialtest.test.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            test_status: [this.materialtest ? this.materialtest.test_status : null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            tester_name: [this.materialtest ? this.materialtest.tester_name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            tester_remarks: [this.materialtest ? this.materialtest.tester_remarks : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            test_link: [this.materialtest ? this.materialtest.test_link : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            status: [this.materialtest ? this.materialtest.status : ''],
        });
    }
    onSubmit(event) {
        Object.keys(this.fg.controls).forEach(field => {
            const control = this.fg.get(field);
            control.markAsTouched({ onlySelf: true });
            control.markAsDirty({ onlySelf: true });
        });
        if (this.fg.invalid)
            return;
        this.store.dispatch(Object(_store_fit_materialtest__WEBPACK_IMPORTED_MODULE_2__["addMaterialtest"])({ data: this.fg.value }));
    }
};
MaterialtestsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
];
MaterialtestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-materialtests',
        template: __webpack_require__(/*! raw-loader!./materialtests.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/fit/materialtests/materialtests.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
], MaterialtestsComponent);



/***/ }),

/***/ "./src/app/features/fit/projects/projects.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/fit/projects/projects.component.ts ***!
  \*************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_fit_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/fit/project */ "./src/app/features/store/fit/project/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _test_form_test_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-form/test-form.component */ "./src/app/features/fit/projects/test-form/test-form.component.ts");
/* harmony import */ var _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/dialogs/dialogs.service */ "./src/app/shared/dialogs/dialogs.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");







let ProjectsComponent = class ProjectsComponent {
    constructor(modalService, store, dialogService) {
        this.modalService = modalService;
        this.store = store;
        this.dialogService = dialogService;
        this.columns = [
            { title: 'Name', value: 'name', sortable: true },
            { title: 'Lab No', value: 'lab_no', sortable: true },
            { title: 'Start Date', value: 'start_date', sortable: true, date: true },
            { title: 'End Date', value: 'end_date', sortable: true, date: true },
            { title: 'Status', value: 'status', bool: true, sortable: true },
        ];
        this.deleteMessage = 'Do you wish to delete this';
        this.deleteItemName = 'Row';
    }
    ngOnInit() {
        this.store.dispatch(Object(_store_fit_project__WEBPACK_IMPORTED_MODULE_1__["loadProjects"])());
        this.project = this.store.select(_store_fit_project__WEBPACK_IMPORTED_MODULE_1__["selectAllProjects"]);
    }
    onshow(project) {
        const initialState = {
            project,
            title: '',
            viewStatus: true,
        };
        this.modalService.show(_test_form_test_form_component__WEBPACK_IMPORTED_MODULE_4__["TestFormComponent"], { initialState, class: 'modal-xl' });
    }
    onCreate() {
        this.store.dispatch(Object(_store_fit_project__WEBPACK_IMPORTED_MODULE_1__["selectCurrentProjectSuccess"])({ data: null }));
        const initialState = {
            title: 'Add',
            viewStatus: false,
        };
        this.modalService.show(_test_form_test_form_component__WEBPACK_IMPORTED_MODULE_4__["TestFormComponent"], { initialState, class: 'modal-xl' });
    }
    onEdit(project) {
        const initialState = {
            project,
            title: 'Update',
            viewStatus: false,
        };
        this.modalService.show(_test_form_test_form_component__WEBPACK_IMPORTED_MODULE_4__["TestFormComponent"], { initialState, class: 'modal-xl' });
    }
    ondelete(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const result = yield this.dialogService.confirm({
                title: `<i class='fal fa-times-circle text-danger mr-2'></i>
      ${this.deleteMessage} <span class='fw-500'>&nbsp;${[this.deleteItemName]}&nbsp;</span>?`,
                message: `<span><strong>Warning:</strong> This action cannot be undone!</span>`,
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-danger shadow-0'
                    },
                    cancel: {
                        label: 'No',
                        className: 'btn-default'
                    }
                }
            }).toPromise();
            if (result) {
                this.store.dispatch(Object(_store_fit_project__WEBPACK_IMPORTED_MODULE_1__["deleteProject"])({ data: id }));
            }
        });
    }
};
ProjectsComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
    { type: _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_5__["DialogsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProjectsComponent.prototype, "deleteMessage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProjectsComponent.prototype, "deleteItemName", void 0);
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'smart-projects',
        template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/fit/projects/projects.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"], _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_5__["DialogsService"]])
], ProjectsComponent);



/***/ }),

/***/ "./src/app/features/fit/projects/test-form/test-form.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/features/fit/projects/test-form/test-form.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2ZpdC9wcm9qZWN0cy90ZXN0LWZvcm0vdGVzdC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/features/fit/projects/test-form/test-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/fit/projects/test-form/test-form.component.ts ***!
  \************************************************************************/
/*! exports provided: TestFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFormComponent", function() { return TestFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_fit_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/fit/project */ "./src/app/features/store/fit/project/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _materialtests_materialtests_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../materialtests/materialtests.component */ "./src/app/features/fit/materialtests/materialtests.component.ts");
/* harmony import */ var _balltests_balltests_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../balltests/balltests.component */ "./src/app/features/fit/balltests/balltests.component.ts");
/* harmony import */ var _store_fit_materialtest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/fit/materialtest */ "./src/app/features/store/fit/materialtest/index.ts");
/* harmony import */ var _store_fit_balltest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/fit/balltest */ "./src/app/features/store/fit/balltest/index.ts");










let TestFormComponent = class TestFormComponent {
    constructor(fb, store, modalService) {
        this.fb = fb;
        this.store = store;
        this.modalService = modalService;
        this.submitted = false;
        this.title = 'Add';
        this.columns = [
            { title: 'Version', value: 'version', sortable: true },
            { title: 'Lab No', value: 'lab_no', sortable: true },
            { title: 'Material Name', value: ['material_name', 'name'], sortable: true },
            { title: 'Test Date', value: 'test_date', date: true, sortable: true },
            { title: 'Test', value: ['test', 'name'], sortable: true },
            { title: 'Status', value: 'status', bool: true, sortable: true },
        ];
        this.columns2 = [
            { title: 'Version', value: 'version', sortable: true },
            { title: 'Lab No', value: 'lab_no', sortable: true },
            { title: 'Model Name', value: ['model_name', 'name'], sortable: true },
            { title: 'Test Date', value: 'test_date', date: true, sortable: true },
            { title: 'Test', value: ['test', 'name'], sortable: true },
            { title: 'Status', value: 'status', bool: true, sortable: true },
        ];
    }
    ngOnInit() {
        this.buildForm();
        if (this.project) {
            this.store.dispatch(Object(_store_fit_project__WEBPACK_IMPORTED_MODULE_2__["selectCurrentProjectSuccess"])({ data: this.project }));
            this.currentProject = this.store.select(_store_fit_project__WEBPACK_IMPORTED_MODULE_2__["selectCurrentProject"]);
            this.currentProject.subscribe(data => {
                if (data)
                    this.projectId = data.id;
            });
        }
        this.store.dispatch(Object(_store_fit_materialtest__WEBPACK_IMPORTED_MODULE_8__["loadMaterialtests"])());
        this.materialtest = this.store.select(_store_fit_materialtest__WEBPACK_IMPORTED_MODULE_8__["selectMaterialbyprojectID"], this.projectId);
        this.store.dispatch(Object(_store_fit_balltest__WEBPACK_IMPORTED_MODULE_9__["loadBalltests"])());
        this.balltest = this.store.select(_store_fit_balltest__WEBPACK_IMPORTED_MODULE_9__["selectAllBallbyprojectID"], this.projectId);
    }
    // convenience getter for easy access to form fields
    get f() { return this.fg.controls; }
    buildForm() {
        this.fg = this.fb.group({
            id: [this.project ? this.project.id : null],
            name: [this.project ? this.project.name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            start_date: [this.project ? this.project.start_date : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            end_date: [this.project ? this.project.end_date : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lab_no: [this.project ? this.project.lab_no : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            remarks: [this.project ? this.project.remarks : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: [this.project ? this.project.status : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    onSubmit(event) {
        Object.keys(this.fg.controls).forEach(field => {
            const control = this.fg.get(field);
            control.markAsTouched({ onlySelf: true });
            control.markAsDirty({ onlySelf: true });
        });
        if (this.fg.invalid)
            return;
        this.store.dispatch(Object(_store_fit_project__WEBPACK_IMPORTED_MODULE_2__["addProject"])({ data: this.fg.value }));
        this.store.select(_store_fit_project__WEBPACK_IMPORTED_MODULE_2__["selectCurrentProject"]).subscribe(data => {
            if (data !== null) {
                this.project = data;
                this.projectId = data.id;
                this.materialtest = this.store.select(_store_fit_materialtest__WEBPACK_IMPORTED_MODULE_8__["selectMaterialbyprojectID"], data.id);
                this.balltest = this.store.select(_store_fit_balltest__WEBPACK_IMPORTED_MODULE_9__["selectAllBallbyprojectID"], data.id);
            }
        });
    }
    onshowMaterial(materialtest) {
        const initialState = {
            materialtest,
            title: '',
            projectId: this.projectId,
            project: this.project,
            viewStatus: true,
        };
        this.modalService.show(_materialtests_materialtests_component__WEBPACK_IMPORTED_MODULE_6__["MaterialtestsComponent"], { initialState, class: 'modal-lg' });
    }
    oncreatematerial() {
        const initialState = {
            title: 'Add',
            projectId: this.projectId,
            project: this.project,
            viewStatus: false,
        };
        this.modalService.show(_materialtests_materialtests_component__WEBPACK_IMPORTED_MODULE_6__["MaterialtestsComponent"], { initialState, class: 'modal-lg' });
    }
    onEditmaterial(materialtest) {
        const initialState = {
            materialtest,
            title: 'Update',
            projectId: this.projectId,
            project: this.project,
            viewStatus: false,
        };
        this.modalService.show(_materialtests_materialtests_component__WEBPACK_IMPORTED_MODULE_6__["MaterialtestsComponent"], { initialState, class: 'modal-lg' });
    }
    ondeleteMaterial(id) {
        if (confirm("Are you sure to want to delete this row")) {
            this.store.dispatch(Object(_store_fit_materialtest__WEBPACK_IMPORTED_MODULE_8__["deleteMaterialtest"])({ data: id }));
        }
    }
    onshowball(balltest) {
        const initialState = {
            balltest,
            title: '',
            projectId: this.projectId,
            viewStatus: true,
        };
        this.modalService.show(_balltests_balltests_component__WEBPACK_IMPORTED_MODULE_7__["BalltestsComponent"], { initialState, class: 'modal-lg' });
    }
    oncreateball() {
        const initialState = {
            title: 'Add',
            projectId: this.projectId,
            viewStatus: false,
        };
        this.modalService.show(_balltests_balltests_component__WEBPACK_IMPORTED_MODULE_7__["BalltestsComponent"], { initialState, class: 'modal-lg' });
    }
    onEditball(balltest) {
        const initialState = {
            balltest,
            title: 'Update',
            projectId: this.projectId,
            viewStatus: false,
        };
        this.modalService.show(_balltests_balltests_component__WEBPACK_IMPORTED_MODULE_7__["BalltestsComponent"], { initialState, class: 'modal-lg' });
    }
    ondeleteball(id) {
        if (confirm("Are you sure to want to delete this row")) {
            this.store.dispatch(Object(_store_fit_balltest__WEBPACK_IMPORTED_MODULE_9__["deleteBalltest"])({ data: id }));
        }
    }
};
TestFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] }
];
TestFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-test-form',
        template: __webpack_require__(/*! raw-loader!./test-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/fit/projects/test-form/test-form.component.html"),
        styles: [__webpack_require__(/*! ./test-form.component.css */ "./src/app/features/fit/projects/test-form/test-form.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]])
], TestFormComponent);



/***/ }),

/***/ "./src/app/features/fit/tests/tests.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/fit/tests/tests.component.ts ***!
  \*******************************************************/
/*! exports provided: TestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsComponent", function() { return TestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_fit_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/fit/test */ "./src/app/features/store/fit/test/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");






let TestsComponent = class TestsComponent {
    constructor(store) {
        this.store = store;
        this.types = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([{ id: 'B', name: 'Ball' }, { id: 'M', name: 'Material' }]);
        this.form = [
            {
                row: [
                    { label: 'Test Name', name: 'name', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'Code', name: 'code', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'Type', name: 'type', items: this.types, validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, type: 'select' },
                ]
            },
            {
                row: [
                    { label: 'Method', name: 'method', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
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
            { title: 'Test Name', value: 'name' },
            { title: 'Code', value: 'code' },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.selectAllSelector = _store_fit_test__WEBPACK_IMPORTED_MODULE_1__["selectAllTests"];
        this.selectCurrent = _store_fit_test__WEBPACK_IMPORTED_MODULE_1__["selectCurrentTest"];
    }
    ngOnInit() {
    }
};
TestsComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
];
TestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'smart-tests',
        template: __webpack_require__(/*! raw-loader!./tests.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/fit/tests/tests.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
], TestsComponent);



/***/ }),

/***/ "./src/app/features/store/fit/balltest/balltest.actions.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/store/fit/balltest/balltest.actions.ts ***!
  \*****************************************************************/
/*! exports provided: loadBalltests, loadBalltestsSuccess, addBalltest, addBalltestSuccess, deleteBalltest, deleteBalltestSuccess, selectCurrentBalltestSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBalltests", function() { return loadBalltests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBalltestsSuccess", function() { return loadBalltestsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBalltest", function() { return addBalltest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBalltestSuccess", function() { return addBalltestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBalltest", function() { return deleteBalltest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBalltestSuccess", function() { return deleteBalltestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentBalltestSuccess", function() { return selectCurrentBalltestSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadBalltests = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Balltest/API] Load Balltests');
const loadBalltestsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Balltest/API] Load Balltests Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addBalltest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Balltest/API] Add Balltest', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addBalltestSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Balltest/API] Add Balltest Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteBalltest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Balltest/API] Delete Balltest', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteBalltestSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Balltest/API] Delete Balltest Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentBalltestSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Balltest/API] Select Current Balltest', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/fit/balltest/balltest.effects.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/store/fit/balltest/balltest.effects.ts ***!
  \*****************************************************************/
/*! exports provided: BalltestEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalltestEffects", function() { return BalltestEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _balltest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./balltest.service */ "./src/app/features/store/fit/balltest/balltest.service.ts");
/* harmony import */ var _balltest_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./balltest.actions */ "./src/app/features/store/fit/balltest/balltest.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _balltest_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./balltest.selectors */ "./src/app/features/store/fit/balltest/balltest.selectors.ts");








let BalltestEffects = class BalltestEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadBalltests$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_balltest_actions__WEBPACK_IMPORTED_MODULE_5__["loadBalltests"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_balltest_selectors__WEBPACK_IMPORTED_MODULE_7__["allBalltestLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_balltest_actions__WEBPACK_IMPORTED_MODULE_5__["loadBalltestsSuccess"])({ data }))))));
        this.addBalltest$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_balltest_actions__WEBPACK_IMPORTED_MODULE_5__["addBalltest"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_balltest_actions__WEBPACK_IMPORTED_MODULE_5__["addBalltestSuccess"])({ data }))))));
        this.deleteBalltest$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_balltest_actions__WEBPACK_IMPORTED_MODULE_5__["deleteBalltest"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_balltest_actions__WEBPACK_IMPORTED_MODULE_5__["deleteBalltestSuccess"])({ id: data.id }))))));
    }
};
BalltestEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _balltest_service__WEBPACK_IMPORTED_MODULE_4__["BalltestService"] }
];
BalltestEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _balltest_service__WEBPACK_IMPORTED_MODULE_4__["BalltestService"]])
], BalltestEffects);



/***/ }),

/***/ "./src/app/features/store/fit/balltest/balltest.reducer.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/store/fit/balltest/balltest.reducer.ts ***!
  \*****************************************************************/
/*! exports provided: balltestFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "balltestFeatureKey", function() { return balltestFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _balltest_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./balltest.actions */ "./src/app/features/store/fit/balltest/balltest.actions.ts");



const balltestFeatureKey = 'balltests';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allBalltestsLoaded: false,
    currentBalltest: null
});
const balltestReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_balltest_actions__WEBPACK_IMPORTED_MODULE_2__["addBalltestSuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentBalltest: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_balltest_actions__WEBPACK_IMPORTED_MODULE_2__["deleteBalltestSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_balltest_actions__WEBPACK_IMPORTED_MODULE_2__["loadBalltestsSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_balltest_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentBalltestSuccess"], (state, action) => (Object.assign({}, state, { currentBalltest: action.data }))));
function reducer(state, action) {
    return balltestReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/features/store/fit/balltest/balltest.selectors.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/store/fit/balltest/balltest.selectors.ts ***!
  \*******************************************************************/
/*! exports provided: selectAllBalltests, allBalltestLoaded, selectCurrentBalltest, selectAllBallbyprojectID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllBalltests", function() { return selectAllBalltests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allBalltestLoaded", function() { return allBalltestLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentBalltest", function() { return selectCurrentBalltest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllBallbyprojectID", function() { return selectAllBallbyprojectID; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _balltest_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./balltest.reducer */ "./src/app/features/store/fit/balltest/balltest.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_balltest_reducer__WEBPACK_IMPORTED_MODULE_1__["balltestFeatureKey"]);
const selectAllBalltests = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _balltest_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allBalltestLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allBalltestsLoaded);
const selectCurrentBalltest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentBalltest);
const selectAllBallbyprojectID = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAllBalltests, (balltest, id) => {
    const ball = balltest.filter(m => m.project == id);
    return ball;
});


/***/ }),

/***/ "./src/app/features/store/fit/balltest/balltest.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/store/fit/balltest/balltest.service.ts ***!
  \*****************************************************************/
/*! exports provided: BalltestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalltestService", function() { return BalltestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let BalltestService = class BalltestService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/ball-tests/`;
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
BalltestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
BalltestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], BalltestService);



/***/ }),

/***/ "./src/app/features/store/fit/balltest/index.ts":
/*!******************************************************!*\
  !*** ./src/app/features/store/fit/balltest/index.ts ***!
  \******************************************************/
/*! exports provided: BalltestEffects, BalltestService, selectAllBalltests, allBalltestLoaded, selectCurrentBalltest, selectAllBallbyprojectID, balltestFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadBalltests, loadBalltestsSuccess, addBalltest, addBalltestSuccess, deleteBalltest, deleteBalltestSuccess, selectCurrentBalltestSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _balltest_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balltest.effects */ "./src/app/features/store/fit/balltest/balltest.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BalltestEffects", function() { return _balltest_effects__WEBPACK_IMPORTED_MODULE_0__["BalltestEffects"]; });

/* harmony import */ var _balltest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./balltest.service */ "./src/app/features/store/fit/balltest/balltest.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BalltestService", function() { return _balltest_service__WEBPACK_IMPORTED_MODULE_1__["BalltestService"]; });

/* harmony import */ var _balltest_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./balltest.selectors */ "./src/app/features/store/fit/balltest/balltest.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllBalltests", function() { return _balltest_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllBalltests"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allBalltestLoaded", function() { return _balltest_selectors__WEBPACK_IMPORTED_MODULE_2__["allBalltestLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentBalltest", function() { return _balltest_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentBalltest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllBallbyprojectID", function() { return _balltest_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllBallbyprojectID"]; });

/* harmony import */ var _balltest_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./balltest.reducer */ "./src/app/features/store/fit/balltest/balltest.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "balltestFeatureKey", function() { return _balltest_reducer__WEBPACK_IMPORTED_MODULE_3__["balltestFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _balltest_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _balltest_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _balltest_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _balltest_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _balltest_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _balltest_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _balltest_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _balltest_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./balltest.actions */ "./src/app/features/store/fit/balltest/balltest.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadBalltests", function() { return _balltest_actions__WEBPACK_IMPORTED_MODULE_4__["loadBalltests"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadBalltestsSuccess", function() { return _balltest_actions__WEBPACK_IMPORTED_MODULE_4__["loadBalltestsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addBalltest", function() { return _balltest_actions__WEBPACK_IMPORTED_MODULE_4__["addBalltest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addBalltestSuccess", function() { return _balltest_actions__WEBPACK_IMPORTED_MODULE_4__["addBalltestSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteBalltest", function() { return _balltest_actions__WEBPACK_IMPORTED_MODULE_4__["deleteBalltest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteBalltestSuccess", function() { return _balltest_actions__WEBPACK_IMPORTED_MODULE_4__["deleteBalltestSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentBalltestSuccess", function() { return _balltest_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentBalltestSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/fit/materialtest/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/store/fit/materialtest/index.ts ***!
  \**********************************************************/
/*! exports provided: MaterialtestEffects, MaterialtestService, selectAllMaterialtests, allMaterialtestLoaded, selectCurrentMaterialtest, selectMaterialbyprojectID, materialtestFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadMaterialtests, loadMaterialtestsSuccess, addMaterialtest, addMaterialtestSuccess, deleteMaterialtest, deleteMaterialtestSuccess, selectCurrentMaterialtestSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _materialtest_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./materialtest.effects */ "./src/app/features/store/fit/materialtest/materialtest.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialtestEffects", function() { return _materialtest_effects__WEBPACK_IMPORTED_MODULE_0__["MaterialtestEffects"]; });

/* harmony import */ var _materialtest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./materialtest.service */ "./src/app/features/store/fit/materialtest/materialtest.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialtestService", function() { return _materialtest_service__WEBPACK_IMPORTED_MODULE_1__["MaterialtestService"]; });

/* harmony import */ var _materialtest_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./materialtest.selectors */ "./src/app/features/store/fit/materialtest/materialtest.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllMaterialtests", function() { return _materialtest_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllMaterialtests"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allMaterialtestLoaded", function() { return _materialtest_selectors__WEBPACK_IMPORTED_MODULE_2__["allMaterialtestLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentMaterialtest", function() { return _materialtest_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentMaterialtest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectMaterialbyprojectID", function() { return _materialtest_selectors__WEBPACK_IMPORTED_MODULE_2__["selectMaterialbyprojectID"]; });

/* harmony import */ var _materialtest_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./materialtest.reducer */ "./src/app/features/store/fit/materialtest/materialtest.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "materialtestFeatureKey", function() { return _materialtest_reducer__WEBPACK_IMPORTED_MODULE_3__["materialtestFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _materialtest_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _materialtest_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _materialtest_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _materialtest_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _materialtest_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _materialtest_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _materialtest_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _materialtest_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./materialtest.actions */ "./src/app/features/store/fit/materialtest/materialtest.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadMaterialtests", function() { return _materialtest_actions__WEBPACK_IMPORTED_MODULE_4__["loadMaterialtests"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadMaterialtestsSuccess", function() { return _materialtest_actions__WEBPACK_IMPORTED_MODULE_4__["loadMaterialtestsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addMaterialtest", function() { return _materialtest_actions__WEBPACK_IMPORTED_MODULE_4__["addMaterialtest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addMaterialtestSuccess", function() { return _materialtest_actions__WEBPACK_IMPORTED_MODULE_4__["addMaterialtestSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteMaterialtest", function() { return _materialtest_actions__WEBPACK_IMPORTED_MODULE_4__["deleteMaterialtest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteMaterialtestSuccess", function() { return _materialtest_actions__WEBPACK_IMPORTED_MODULE_4__["deleteMaterialtestSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentMaterialtestSuccess", function() { return _materialtest_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentMaterialtestSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/fit/materialtest/materialtest.actions.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/fit/materialtest/materialtest.actions.ts ***!
  \*************************************************************************/
/*! exports provided: loadMaterialtests, loadMaterialtestsSuccess, addMaterialtest, addMaterialtestSuccess, deleteMaterialtest, deleteMaterialtestSuccess, selectCurrentMaterialtestSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMaterialtests", function() { return loadMaterialtests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMaterialtestsSuccess", function() { return loadMaterialtestsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMaterialtest", function() { return addMaterialtest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMaterialtestSuccess", function() { return addMaterialtestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMaterialtest", function() { return deleteMaterialtest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMaterialtestSuccess", function() { return deleteMaterialtestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentMaterialtestSuccess", function() { return selectCurrentMaterialtestSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadMaterialtests = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Materialtest/API] Load Materialtests');
const loadMaterialtestsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Materialtest/API] Load Materialtests Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addMaterialtest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Materialtest/API] Add Materialtest', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addMaterialtestSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Materialtest/API] Add Materialtest Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteMaterialtest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Materialtest/API] Delete Materialtest', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteMaterialtestSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Materialtest/API] Delete Materialtest Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentMaterialtestSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Materialtest/API] Select Current Materialtest', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/fit/materialtest/materialtest.effects.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/fit/materialtest/materialtest.effects.ts ***!
  \*************************************************************************/
/*! exports provided: MaterialtestEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialtestEffects", function() { return MaterialtestEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _materialtest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./materialtest.service */ "./src/app/features/store/fit/materialtest/materialtest.service.ts");
/* harmony import */ var _materialtest_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./materialtest.actions */ "./src/app/features/store/fit/materialtest/materialtest.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _materialtest_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./materialtest.selectors */ "./src/app/features/store/fit/materialtest/materialtest.selectors.ts");








let MaterialtestEffects = class MaterialtestEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadMaterialtests$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_materialtest_actions__WEBPACK_IMPORTED_MODULE_5__["loadMaterialtests"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_materialtest_selectors__WEBPACK_IMPORTED_MODULE_7__["allMaterialtestLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_materialtest_actions__WEBPACK_IMPORTED_MODULE_5__["loadMaterialtestsSuccess"])({ data }))))));
        this.addMaterialtest$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_materialtest_actions__WEBPACK_IMPORTED_MODULE_5__["addMaterialtest"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_materialtest_actions__WEBPACK_IMPORTED_MODULE_5__["addMaterialtestSuccess"])({ data }))))));
        this.deleteMaterialtest$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_materialtest_actions__WEBPACK_IMPORTED_MODULE_5__["deleteMaterialtest"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_materialtest_actions__WEBPACK_IMPORTED_MODULE_5__["deleteMaterialtestSuccess"])({ id: data.id }))))));
    }
};
MaterialtestEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _materialtest_service__WEBPACK_IMPORTED_MODULE_4__["MaterialtestService"] }
];
MaterialtestEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _materialtest_service__WEBPACK_IMPORTED_MODULE_4__["MaterialtestService"]])
], MaterialtestEffects);



/***/ }),

/***/ "./src/app/features/store/fit/materialtest/materialtest.reducer.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/fit/materialtest/materialtest.reducer.ts ***!
  \*************************************************************************/
/*! exports provided: materialtestFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialtestFeatureKey", function() { return materialtestFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _materialtest_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./materialtest.actions */ "./src/app/features/store/fit/materialtest/materialtest.actions.ts");



const materialtestFeatureKey = 'materialtests';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allMaterialtestsLoaded: false,
    currentMaterialtest: null
});
const materialtestReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_materialtest_actions__WEBPACK_IMPORTED_MODULE_2__["addMaterialtestSuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentMaterialtest: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_materialtest_actions__WEBPACK_IMPORTED_MODULE_2__["deleteMaterialtestSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_materialtest_actions__WEBPACK_IMPORTED_MODULE_2__["loadMaterialtestsSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_materialtest_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentMaterialtestSuccess"], (state, action) => (Object.assign({}, state, { currentMaterialtest: action.data }))));
function reducer(state, action) {
    return materialtestReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/features/store/fit/materialtest/materialtest.selectors.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/store/fit/materialtest/materialtest.selectors.ts ***!
  \***************************************************************************/
/*! exports provided: selectAllMaterialtests, allMaterialtestLoaded, selectCurrentMaterialtest, selectMaterialbyprojectID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllMaterialtests", function() { return selectAllMaterialtests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allMaterialtestLoaded", function() { return allMaterialtestLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentMaterialtest", function() { return selectCurrentMaterialtest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMaterialbyprojectID", function() { return selectMaterialbyprojectID; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _materialtest_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./materialtest.reducer */ "./src/app/features/store/fit/materialtest/materialtest.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_materialtest_reducer__WEBPACK_IMPORTED_MODULE_1__["materialtestFeatureKey"]);
const selectAllMaterialtests = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _materialtest_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allMaterialtestLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allMaterialtestsLoaded);
const selectCurrentMaterialtest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentMaterialtest);
const selectMaterialbyprojectID = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAllMaterialtests, (materialtest, id) => {
    const mat = materialtest.filter(m => m.project == id);
    return mat;
});


/***/ }),

/***/ "./src/app/features/store/fit/materialtest/materialtest.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/fit/materialtest/materialtest.service.ts ***!
  \*************************************************************************/
/*! exports provided: MaterialtestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialtestService", function() { return MaterialtestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let MaterialtestService = class MaterialtestService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/material-tests/`;
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
MaterialtestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
MaterialtestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], MaterialtestService);



/***/ }),

/***/ "./src/app/features/store/fit/project/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/store/fit/project/index.ts ***!
  \*****************************************************/
/*! exports provided: ProjectEffects, ProjectService, selectAllProjects, allProjectLoaded, selectCurrentProject, projectFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadProjects, loadProjectsSuccess, addProject, addProjectSuccess, deleteProject, deleteProjectSuccess, selectCurrentProjectSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.effects */ "./src/app/features/store/fit/project/project.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectEffects", function() { return _project_effects__WEBPACK_IMPORTED_MODULE_0__["ProjectEffects"]; });

/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.service */ "./src/app/features/store/fit/project/project.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return _project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]; });

/* harmony import */ var _project_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.selectors */ "./src/app/features/store/fit/project/project.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllProjects", function() { return _project_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllProjects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allProjectLoaded", function() { return _project_selectors__WEBPACK_IMPORTED_MODULE_2__["allProjectLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentProject", function() { return _project_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentProject"]; });

/* harmony import */ var _project_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.reducer */ "./src/app/features/store/fit/project/project.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "projectFeatureKey", function() { return _project_reducer__WEBPACK_IMPORTED_MODULE_3__["projectFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _project_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _project_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _project_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _project_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _project_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _project_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _project_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _project_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project.actions */ "./src/app/features/store/fit/project/project.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadProjects", function() { return _project_actions__WEBPACK_IMPORTED_MODULE_4__["loadProjects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadProjectsSuccess", function() { return _project_actions__WEBPACK_IMPORTED_MODULE_4__["loadProjectsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addProject", function() { return _project_actions__WEBPACK_IMPORTED_MODULE_4__["addProject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addProjectSuccess", function() { return _project_actions__WEBPACK_IMPORTED_MODULE_4__["addProjectSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteProject", function() { return _project_actions__WEBPACK_IMPORTED_MODULE_4__["deleteProject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteProjectSuccess", function() { return _project_actions__WEBPACK_IMPORTED_MODULE_4__["deleteProjectSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentProjectSuccess", function() { return _project_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentProjectSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/fit/project/project.actions.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/store/fit/project/project.actions.ts ***!
  \***************************************************************/
/*! exports provided: loadProjects, loadProjectsSuccess, addProject, addProjectSuccess, deleteProject, deleteProjectSuccess, selectCurrentProjectSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProjects", function() { return loadProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProjectsSuccess", function() { return loadProjectsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProject", function() { return addProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProjectSuccess", function() { return addProjectSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProject", function() { return deleteProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProjectSuccess", function() { return deleteProjectSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentProjectSuccess", function() { return selectCurrentProjectSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadProjects = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Project/API] Load Projects');
const loadProjectsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Project/API] Load Projects Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addProject = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Project/API] Add Project', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addProjectSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Project/API] Add Project Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteProject = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Project/API] Delete Project', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteProjectSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Project/API] Delete Project Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentProjectSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Project/API] Select Current Project', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/fit/project/project.effects.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/store/fit/project/project.effects.ts ***!
  \***************************************************************/
/*! exports provided: ProjectEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectEffects", function() { return ProjectEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project.service */ "./src/app/features/store/fit/project/project.service.ts");
/* harmony import */ var _project_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project.actions */ "./src/app/features/store/fit/project/project.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _project_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project.selectors */ "./src/app/features/store/fit/project/project.selectors.ts");








let ProjectEffects = class ProjectEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadProjects$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_project_actions__WEBPACK_IMPORTED_MODULE_5__["loadProjects"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_project_selectors__WEBPACK_IMPORTED_MODULE_7__["allProjectLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_project_actions__WEBPACK_IMPORTED_MODULE_5__["loadProjectsSuccess"])({ data }))))));
        this.addProject$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_project_actions__WEBPACK_IMPORTED_MODULE_5__["addProject"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_project_actions__WEBPACK_IMPORTED_MODULE_5__["addProjectSuccess"])({ data }))))));
        this.deleteProject$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_project_actions__WEBPACK_IMPORTED_MODULE_5__["deleteProject"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_project_actions__WEBPACK_IMPORTED_MODULE_5__["deleteProjectSuccess"])({ id: data.id }))))));
    }
};
ProjectEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] }
];
ProjectEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]])
], ProjectEffects);



/***/ }),

/***/ "./src/app/features/store/fit/project/project.reducer.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/store/fit/project/project.reducer.ts ***!
  \***************************************************************/
/*! exports provided: projectFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectFeatureKey", function() { return projectFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _project_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.actions */ "./src/app/features/store/fit/project/project.actions.ts");



const projectFeatureKey = 'projects';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allProjectsLoaded: false,
    currentProject: null
});
const projectReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_project_actions__WEBPACK_IMPORTED_MODULE_2__["addProjectSuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentProject: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_project_actions__WEBPACK_IMPORTED_MODULE_2__["deleteProjectSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_project_actions__WEBPACK_IMPORTED_MODULE_2__["loadProjectsSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_project_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentProjectSuccess"], (state, action) => (Object.assign({}, state, { currentProject: action.data }))));
function reducer(state, action) {
    return projectReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/features/store/fit/project/project.selectors.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/store/fit/project/project.selectors.ts ***!
  \*****************************************************************/
/*! exports provided: selectAllProjects, allProjectLoaded, selectCurrentProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllProjects", function() { return selectAllProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allProjectLoaded", function() { return allProjectLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentProject", function() { return selectCurrentProject; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _project_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.reducer */ "./src/app/features/store/fit/project/project.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_project_reducer__WEBPACK_IMPORTED_MODULE_1__["projectFeatureKey"]);
const selectAllProjects = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _project_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allProjectLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allProjectsLoaded);
const selectCurrentProject = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => {
    return state.currentProject;
});


/***/ }),

/***/ "./src/app/features/store/fit/project/project.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/store/fit/project/project.service.ts ***!
  \***************************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ProjectService = class ProjectService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/projects/`;
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
ProjectService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ProjectService);



/***/ }),

/***/ "./src/app/features/store/fit/test/index.ts":
/*!**************************************************!*\
  !*** ./src/app/features/store/fit/test/index.ts ***!
  \**************************************************/
/*! exports provided: TestEffects, TestService, selectAllTests, allTestLoaded, selectCurrentTest, testFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadTests, loadTestsSuccess, addTest, addTestSuccess, deleteTest, deleteTestSuccess, selectCurrentTestSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _test_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.effects */ "./src/app/features/store/fit/test/test.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TestEffects", function() { return _test_effects__WEBPACK_IMPORTED_MODULE_0__["TestEffects"]; });

/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.service */ "./src/app/features/store/fit/test/test.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return _test_service__WEBPACK_IMPORTED_MODULE_1__["TestService"]; });

/* harmony import */ var _test_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.selectors */ "./src/app/features/store/fit/test/test.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllTests", function() { return _test_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllTests"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allTestLoaded", function() { return _test_selectors__WEBPACK_IMPORTED_MODULE_2__["allTestLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentTest", function() { return _test_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentTest"]; });

/* harmony import */ var _test_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.reducer */ "./src/app/features/store/fit/test/test.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "testFeatureKey", function() { return _test_reducer__WEBPACK_IMPORTED_MODULE_3__["testFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _test_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _test_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _test_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _test_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _test_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _test_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _test_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _test_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test.actions */ "./src/app/features/store/fit/test/test.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadTests", function() { return _test_actions__WEBPACK_IMPORTED_MODULE_4__["loadTests"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadTestsSuccess", function() { return _test_actions__WEBPACK_IMPORTED_MODULE_4__["loadTestsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addTest", function() { return _test_actions__WEBPACK_IMPORTED_MODULE_4__["addTest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addTestSuccess", function() { return _test_actions__WEBPACK_IMPORTED_MODULE_4__["addTestSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteTest", function() { return _test_actions__WEBPACK_IMPORTED_MODULE_4__["deleteTest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteTestSuccess", function() { return _test_actions__WEBPACK_IMPORTED_MODULE_4__["deleteTestSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentTestSuccess", function() { return _test_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentTestSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/fit/test/test.actions.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/store/fit/test/test.actions.ts ***!
  \*********************************************************/
/*! exports provided: loadTests, loadTestsSuccess, addTest, addTestSuccess, deleteTest, deleteTestSuccess, selectCurrentTestSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTests", function() { return loadTests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTestsSuccess", function() { return loadTestsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTest", function() { return addTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTestSuccess", function() { return addTestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTest", function() { return deleteTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTestSuccess", function() { return deleteTestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentTestSuccess", function() { return selectCurrentTestSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadTests = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Test/API] Load Tests');
const loadTestsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Test/API] Load Tests Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addTest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Test/API] Add Test', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addTestSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Test/API] Add Test Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteTest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Test/API] Delete Test', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteTestSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Test/API] Delete Test Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentTestSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Test/API] Select Current Test', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/fit/test/test.effects.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/store/fit/test/test.effects.ts ***!
  \*********************************************************/
/*! exports provided: TestEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestEffects", function() { return TestEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test.service */ "./src/app/features/store/fit/test/test.service.ts");
/* harmony import */ var _test_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test.actions */ "./src/app/features/store/fit/test/test.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _test_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test.selectors */ "./src/app/features/store/fit/test/test.selectors.ts");








let TestEffects = class TestEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadTests$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_test_actions__WEBPACK_IMPORTED_MODULE_5__["loadTests"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_test_selectors__WEBPACK_IMPORTED_MODULE_7__["allTestLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_test_actions__WEBPACK_IMPORTED_MODULE_5__["loadTestsSuccess"])({ data }))))));
        this.addTest$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_test_actions__WEBPACK_IMPORTED_MODULE_5__["addTest"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_test_actions__WEBPACK_IMPORTED_MODULE_5__["addTestSuccess"])({ data }))))));
        this.deleteTest$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_test_actions__WEBPACK_IMPORTED_MODULE_5__["deleteTest"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_test_actions__WEBPACK_IMPORTED_MODULE_5__["deleteTestSuccess"])({ id: data.id }))))));
    }
};
TestEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _test_service__WEBPACK_IMPORTED_MODULE_4__["TestService"] }
];
TestEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _test_service__WEBPACK_IMPORTED_MODULE_4__["TestService"]])
], TestEffects);



/***/ }),

/***/ "./src/app/features/store/fit/test/test.reducer.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/store/fit/test/test.reducer.ts ***!
  \*********************************************************/
/*! exports provided: testFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testFeatureKey", function() { return testFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _test_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.actions */ "./src/app/features/store/fit/test/test.actions.ts");



const testFeatureKey = 'tests';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allTestsLoaded: false,
    currentTest: null
});
const testReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_test_actions__WEBPACK_IMPORTED_MODULE_2__["addTestSuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentTest: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_test_actions__WEBPACK_IMPORTED_MODULE_2__["deleteTestSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_test_actions__WEBPACK_IMPORTED_MODULE_2__["loadTestsSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_test_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentTestSuccess"], (state, action) => (Object.assign({}, state, { currentTest: action.data }))));
function reducer(state, action) {
    return testReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/features/store/fit/test/test.selectors.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/store/fit/test/test.selectors.ts ***!
  \***********************************************************/
/*! exports provided: selectAllTests, allTestLoaded, selectCurrentTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllTests", function() { return selectAllTests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allTestLoaded", function() { return allTestLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentTest", function() { return selectCurrentTest; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _test_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.reducer */ "./src/app/features/store/fit/test/test.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_test_reducer__WEBPACK_IMPORTED_MODULE_1__["testFeatureKey"]);
const selectAllTests = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _test_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allTestLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allTestsLoaded);
const selectCurrentTest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentTest);


/***/ }),

/***/ "./src/app/features/store/fit/test/test.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/store/fit/test/test.service.ts ***!
  \*********************************************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let TestService = class TestService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/fit-tests/`;
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
TestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], TestService);



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



/***/ })

}]);
//# sourceMappingURL=features-fit-fit-module-es2015.js.map