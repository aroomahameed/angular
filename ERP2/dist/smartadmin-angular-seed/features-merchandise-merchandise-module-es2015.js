(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-merchandise-merchandise-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/features/merchandise/categories/categories.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/merchandise/categories/categories.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-crud-panel \r\n    title=\"\" \r\n    icon=\"\" \r\n    [columns]=\"columns\"\r\n    [selectAllSelector]=\"selectAllSelector\"\r\n    [selectCurrent]=\"selectCurrent\"\r\n    [form] =\"form\"\r\n    [deleteable]=\"true\"\r\n    [editable]=\"true\"\r\n    formTitle=\"Category\"\r\n    itemName=\"Category\"\r\n    >\r\n\r\n\r\n   \r\n</smart-crud-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/merchandise/categorytypes/categorytypes.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/merchandise/categorytypes/categorytypes.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-crud-panel \r\n    title=\"\" \r\n    icon=\"\" \r\n    [columns]=\"columns\"\r\n    [selectAllSelector]=\"selectAllSelector\"\r\n    [selectCurrent]=\"selectCurrent\"\r\n    [form] =\"form\"\r\n    [deleteable]=\"true\"\r\n    [editable]=\"true\"\r\n    formTitle=\"Categorytype\"\r\n    itemName=\"Categorytype\"\r\n    >\r\n\r\n\r\n    \r\n</smart-crud-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/merchandise/main/main.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/merchandise/main/main.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"panel-11\" class=\"panel\">\n  \n    <div class=\"panel-container show\" >\n        <div class=\"panel-content\">\n            <tabset>\n                <tab heading=\"Categories Types\" >\n                    <smart-categorytypes></smart-categorytypes>\n                </tab>\n                <tab heading=\"Categories\" >\n                    <smart-categories></smart-categories>\n                </tab>\n                <tab heading=\"Sub Categories\">\n                    <smart-subcategories></smart-subcategories>\n                </tab>\n                <tab heading=\"Materials\">\n                <smart-materials></smart-materials>\n                </tab>\n            </tabset>\n          \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/merchandise/materials/material-form/material-form.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/merchandise/materials/material-form/material-form.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-modal title=\"{{title}} Materials\">\n    <form [formGroup]=\"fg\" (ngSubmit)=\"onSubmit($event)\">\n        <div class=\"panel-content\">\n            <div class=\"row\">\n                <div class=\"col-md-9\">\n                    <div class=\"col-md-12\">\n                    <smart-input formControlName='name' label=\"Name\"></smart-input>\n                    </div>\n                    <div class=\"col-md-12\">\n                     <br>\n                        </div>\n                    <div class=\"col-md-12\">\n                    <smart-checkbox formControlName='status' label=\"Status\"></smart-checkbox>\n                    </div>\n                    \n                </div>\n                <div class=\"col-md-3 mb-3 \">\n                    <label class=\"form-label\">Material Image<span class=\"text-danger\">*</span> </label>\n                    <img [src]=\"imageurl\" style=\"height: 130px; width: 130px;\"><br>\n                    <div class=\"custom-file\">\n                        <input type=\"file\" class=\"custom-file-input\" name=\"Image\" id=\"image\" required\n                            (change)=\"handlefileinput($event.target.files)\" required id=\"image\">\n                        <label class=\"custom-file-label\" for=\"image\">Choose file</label>\n                    </div>\n                </div>\n            </div>\n\n            <tabset>\n                <tab heading=\"Genral Information\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <smart-select formControlName='sub_category' [items]=\"subcategory\" label=\"Sub Category\">\n                            </smart-select>\n\n                        </div>\n\n                        <div class=\"col-md-6\">\n                            <smart-input formControlName='barcode' label=\"Barcode\"></smart-input>\n\n                        </div>\n                        <div class=\"col-md-6\">\n                            <smart-input formControlName='hs_code' label=\"HS Code\"></smart-input>\n\n                        </div>\n                        <div class=\"col-md-6\">\n                            <smart-input formControlName='unit_price' label=\"Unit Price\"></smart-input>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <smart-select formControlName='sale_uom' [items]=\"uoms\" label=\"Sale UOM\"></smart-select>\n\n\n                        </div>\n                        <div class=\"col-md-6\">\n                            <smart-select formControlName='base_uom' [items]=\"uoms\" label=\"Base UOM\"></smart-select>\n                        </div>\n                    </div>\n                </tab>\n                <tab heading=\"Variants\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <smart-input formControlName='tpt_no' label=\"TPT No\"></smart-input>\n                        </div>\n\n                        <div class=\"col-md-6\">\n                            <smart-input formControlName='dimensions' label=\"Dimensions\"></smart-input>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <smart-input formControlName='volume' label=\"Volume\"></smart-input>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <smart-input formControlName='volume_unit' label=\"Volume Unit\"></smart-input>\n                        </div>\n\n                        <div class=\"col-md-6\">\n                            <smart-input formControlName='weight' label=\"Weight\"></smart-input>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <smart-input formControlName='gross_weight' label=\"Gross Weight\"></smart-input>\n                        </div>\n\n                        <div class=\"col-md-6\">\n                            <smart-input formControlName='net_weight' label=\"Net Weight\"></smart-input>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <smart-input formControlName='weight_unit' label=\"Weight Unit\"></smart-input>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <smart-input formControlName='mat_width' label=\"Mat Width\"></smart-input>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <smart-input formControlName='mat_height' label=\"MAt Height\"></smart-input>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <smart-input formControlName='mat_length' label=\"Mat Length\"></smart-input>\n                        </div>\n                        <div class=\"col-md-6 mb-3\">\n                            <smart-input formControlName='conversion_formula' label=\"Conversion Formula\"></smart-input>\n                        </div>\n\n                    </div>\n                    <div class=\"col-md-12 mb-3\">\n                        <smart-checkbox formControlName='mat_lock_status' label=\"Mat Lock Status:\"></smart-checkbox>\n                    \n                    </div>\n                </tab>\n                <tab heading=\"Inventory\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 mb-3\">\n                            <smart-input formControlName='reorder_level' label=\"Reorder Level\"></smart-input>\n                        </div>\n                        <div class=\"col-md-6 mb-3\">\n                            <smart-input formControlName='min_qty' label=\"Min Qty\"></smart-input>\n                        </div>\n                        <div class=\"col-md-6 mb-3\">\n                            <smart-input formControlName='max_qty' label=\"Max Qty\"></smart-input>\n                        </div>\n                        <div class=\"col-md-6 mb-3\">\n                            <smart-input formControlName='old_material_code' label=\"Old Material Code\"></smart-input>\n                        </div>\n                        <div class=\"col-md-6 mb-3\">\n                            <smart-input formControlName='ean_category' label=\"EAN Category\"></smart-input>\n                        </div>\n                        <div class=\"col-md-6 mb-3\">\n                            <smart-input formControlName='ean_ups_category' label=\"EAN UPS Code\"></smart-input>\n                        </div>\n\n                        <div class=\"col-md-12 mb-3\">\n                            <smart-input formControlName='remarks' label=\"Remarks\"></smart-input>\n                        </div>\n\n\n                    </div>\n                    \n                </tab>\n                <tab heading=\"Development\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 mb-3\">\n                            <smart-input formControlName='material_developer' label=\"Material Developer\"></smart-input>\n                        </div>\n                        <div class=\"col-md-6 mb-3\">\n                            <smart-input formControlName='composition' label=\"Composition\"></smart-input>\n                        </div>\n                        <div class=\"col-md-6 mb-3\">\n                            <smart-input formControlName='construction' label=\"Construction\"></smart-input>\n                        </div>\n                        <div class=\"col-md-6 mb-3\">\n                            <smart-input formControlName='thickness' label=\"Thickness\"></smart-input>\n                        </div>\n                        \n                        <div class=\"col-md-6\">\n                            <smart-select formControlName='first_season' [items]=\"season\" label=\"First Season\"></smart-select>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <smart-select formControlName='dev_type' [items]=\"devtype\" label=\"Developmet Type\"></smart-select>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <smart-select formControlName='mat_release_status' [items]=\"releasestatus\" label=\"Mat Release Status\"></smart-select>\n                        </div>\n                       \n\n                    \n\n                    </div>\n                    \n                </tab>\n                <tab *ngIf=\"materials\"  heading=\"Purchase\">\n\n                    <smart-materialvendors [matId] = 'materials.id' ></smart-materialvendors>\n                </tab>\n                <tab *ngIf=\"materials\"  heading=\"Season\">\n\n                    <smart-materialseasons [matId] = 'materials.id' ></smart-materialseasons>\n                </tab>\n            </tabset> \n\n\n        </div>\n\n\n        <div class=\"border-faded border-left-0 border-right-0 border-bottom-0 d-flex flex-row align-items-center\">\n            <button type=\"submit\" class=\"btn btn-primary ml-auto waves-effect waves-themed mt-2\"\n                type=\"submit\">{{title === 'Add' ? 'Save' : 'Update'}}</button>\n        </div>\n    \n    </form>\n</smart-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/merchandise/materials/materials.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/merchandise/materials/materials.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<smart-panel  [fullscreenable]=\"true\">\r\n    <h2 panelTitle></h2>\r\n    <button panelToolbar class=\"btn btn-primary\" (click)=\"onCreate()\"> <i class=\"fal fa-plus-circle\"></i> Create</button>\r\n\r\n    <div panelContent>\r\n        <smart-table \r\n        [items]=\"materials\" \r\n        [columns]=\"columns\" \r\n        [selectable] = \"false\" \r\n        [editable]=\"true\" \r\n        [deletable]=\"true\" \r\n        (editEvt)=\"onEdit($event)\"\r\n        (deleteEvt)=\"ondelete($event)\"\r\n        >\r\n        </smart-table>\r\n    </div>\r\n</smart-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/merchandise/materialseasons/materialseasons.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/merchandise/materialseasons/materialseasons.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-panel>\r\n    <h2 panelTitle>Material Seasons</h2>\r\n    <button panelToolbar class=\"btn btn-primary\" (click)=\"onCreate()\"> <i class=\"fal fa-plus-circle\"></i> Create</button>\r\n\r\n    <div panelContent>\r\n        <smart-table \r\n        [items]=\"materialseason\" \r\n        [columns]=\"columns\" \r\n        [selectable] = \"false\" \r\n        [editable]=\"true\" \r\n        [deletable]=\"true\" \r\n        (editEvt)=\"onEdit($event)\"\r\n        (deleteEvt)=\"ondelete($event)\"\r\n        >\r\n        </smart-table>\r\n    </div>\r\n</smart-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/merchandise/materialseasons/season-from/season-from.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/merchandise/materialseasons/season-from/season-from.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-modal title=\"{{title}} Materials Seasons\">\n    <form [formGroup]=\"fg\" (ngSubmit)=\"onSubmit($event)\">\n        <div class=\"panel-content\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <smart-select formControlName='season' [items]=\"seasons\" label=\"Season\"></smart-select>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-input formControlName='season_price' label=\"Season Price\"></smart-input>\n                </div>\n               \n                <div class=\"col-md-12\">\n                    <smart-select formControlName='currency' [items]=\"currencys\" label=\"Currency\"></smart-select>\n                </div>\n\n                <div class=\"col-md-12\">\n                    <smart-checkbox formControlName='status' label=\"Season Status\"></smart-checkbox>\n                </div>\n            </div>\n            <div class=\"border-faded border-left-0 border-right-0 border-bottom-0 d-flex flex-row align-items-center\">\n                <button type=\"submit\" class=\"btn btn-primary ml-auto waves-effect waves-themed mt-2\"\n                    type=\"submit\">{{title === 'Add' ? 'Save' : 'Update'}}</button>\n            </div>\n        </div>\n    </form>\n</smart-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/merchandise/materialvendors/materialvendor-form/materialvendor-form.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/merchandise/materialvendors/materialvendor-form/materialvendor-form.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-modal title=\"{{title}} Materials Vendors\">\n    <form [formGroup]=\"fg\" (ngSubmit)=\"onSubmit($event)\">\n        <div class=\"panel-content\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <smart-select formControlName='vendor' [items]=\"vendors\" label=\"Vendor\"></smart-select>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='unit_price' label=\"Unit Price\"></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-select formControlName='purchase_uom' [items]=\"uoms\" label=\"Purchase UOM\"></smart-select>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='other_charges' label=\"Other Charges\"></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-select formControlName='currency' [items]=\"currencys\" label=\"Currency\"></smart-select>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='mat_supplier_name' label=\"Material Supplier Name\"></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='min_order_qty' label=\"Min Order Qty\"></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='lead_time' label=\"Lead Time\"></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='speed_lead_time' label=\"Speed Lead Time\"></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='width' label=\"Width\"></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-select formControlName='width_uom' [items]=\"uoms\" label=\"Width UOM\"></smart-select>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='sample_time' label=\"Sample Time\"></smart-input>\n                </div>\n                <div class=\"col-md-12 mb-3\">\n                    <smart-input formControlName='lead_time_remarks' label=\"Lead Time Ramarks\"></smart-input>\n                </div>\n                <div class=\"col-md-12 mb-3\">\n                    <smart-input formControlName='remarks' label=\"Remarks\"></smart-input>\n                </div>\n\n                <div class=\"col-md-12\">\n                    <smart-checkbox formControlName='status' label=\"Vendor Status\"></smart-checkbox>\n                </div>\n            </div>\n            <div class=\"border-faded border-left-0 border-right-0 border-bottom-0 d-flex flex-row align-items-center\">\n                <button type=\"submit\" class=\"btn btn-primary ml-auto waves-effect waves-themed mt-2\"\n                    type=\"submit\">{{title === 'Add' ? 'Save' : 'Update'}}</button>\n            </div>\n        </div>\n    </form>\n</smart-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/merchandise/materialvendors/materialvendors.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/merchandise/materialvendors/materialvendors.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-panel>\r\n    <h2 panelTitle>Material Vendors</h2>\r\n    <button panelToolbar class=\"btn btn-primary\" (click)=\"onCreate()\"> <i class=\"fal fa-plus-circle\"></i> Create</button>\r\n\r\n    <div panelContent>\r\n        <smart-table \r\n        [items]=\"materialvendor\" \r\n        [columns]=\"columns\" \r\n        [selectable] = \"false\" \r\n        [editable]=\"true\" \r\n        [deletable]=\"true\" \r\n        (editEvt)=\"onEdit($event)\"\r\n        (deleteEvt)=\"ondelete($event)\"\r\n        >\r\n        </smart-table>\r\n    </div>\r\n</smart-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/merchandise/subcategories/subcategories.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/merchandise/subcategories/subcategories.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-crud-panel \r\n    title=\"\" \r\n    icon=\"\" \r\n    [columns]=\"columns\"\r\n    [selectAllSelector]=\"selectAllSelector\"\r\n    [selectCurrent]=\"selectCurrent\"\r\n    [form] =\"form\"\r\n    [deleteable]=\"true\"\r\n    [editable]=\"true\"\r\n    formTitle=\"Subcategory\"\r\n    itemName=\"Subcategory\"\r\n    >\r\n\r\n\r\n    \r\n</smart-crud-panel>"

/***/ }),

/***/ "./src/app/features/merchandise/categories/categories.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/merchandise/categories/categories.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_merchandise_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../store/merchandise/category */ "./src/app/features/store/merchandise/category/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _store_merchandise_categorytype__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/merchandise/categorytype */ "./src/app/features/store/merchandise/categorytype/index.ts");






let CategoriesComponent = class CategoriesComponent {
    constructor(store) {
        this.store = store;
        this.form = [];
        this.columns = [
            { title: 'Category Name', value: 'name' },
            { title: 'Type', value: ['category_type', 'name'] },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.selectAllSelector = _store_merchandise_category__WEBPACK_IMPORTED_MODULE_2__["selectAllCategories"];
        this.selectCurrent = _store_merchandise_category__WEBPACK_IMPORTED_MODULE_2__["selectCurrentCategory"];
    }
    ngOnInit() {
        this.store.dispatch(Object(_store_merchandise_categorytype__WEBPACK_IMPORTED_MODULE_5__["loadCategorytypes"])());
        this.types = this.store.select(_store_merchandise_categorytype__WEBPACK_IMPORTED_MODULE_5__["selectAllCategorytypes"]);
        this.form = [
            {
                row: [
                    { label: 'Category Name', name: 'name', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'Category Type', name: 'category_type', items: this.types, validator: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, type: 'select' },
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
    }
};
CategoriesComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
];
CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'smart-categories',
        template: __webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/merchandise/categories/categories.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
], CategoriesComponent);



/***/ }),

/***/ "./src/app/features/merchandise/categorytypes/categorytypes.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/merchandise/categorytypes/categorytypes.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CategorytypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorytypesComponent", function() { return CategorytypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_merchandise_categorytype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/merchandise/categorytype */ "./src/app/features/store/merchandise/categorytype/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let CategorytypesComponent = class CategorytypesComponent {
    constructor() {
        this.form = [
            {
                row: [
                    { label: 'Name', name: 'name', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
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
            { title: 'Categorytyp Name', value: 'name' },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.selectAllSelector = _store_merchandise_categorytype__WEBPACK_IMPORTED_MODULE_1__["selectAllCategorytypes"];
        this.selectCurrent = _store_merchandise_categorytype__WEBPACK_IMPORTED_MODULE_1__["selectCurrentCategorytype"];
    }
    ngOnInit() {
    }
};
CategorytypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'smart-categorytypes',
        template: __webpack_require__(/*! raw-loader!./categorytypes.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/merchandise/categorytypes/categorytypes.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CategorytypesComponent);



/***/ }),

/***/ "./src/app/features/merchandise/main/main.component.css":
/*!**************************************************************!*\
  !*** ./src/app/features/merchandise/main/main.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL21lcmNoYW5kaXNlL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/merchandise/main/main.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/merchandise/main/main.component.ts ***!
  \*************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/merchandise/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/features/merchandise/main/main.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MainComponent);



/***/ }),

/***/ "./src/app/features/merchandise/materials/material-form/material-form.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/features/merchandise/materials/material-form/material-form.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL21lcmNoYW5kaXNlL21hdGVyaWFscy9tYXRlcmlhbC1mb3JtL21hdGVyaWFsLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/features/merchandise/materials/material-form/material-form.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/merchandise/materials/material-form/material-form.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MaterialFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialFormComponent", function() { return MaterialFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_merchandise_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/merchandise/material */ "./src/app/features/store/merchandise/material/index.ts");
/* harmony import */ var _store_merchandise_subcategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/merchandise/subcategory */ "./src/app/features/store/merchandise/subcategory/index.ts");
/* harmony import */ var _store_article_season__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/article/season */ "./src/app/features/store/article/season/index.ts");
/* harmony import */ var _store_settings_uom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/settings/uom */ "./src/app/features/store/settings/uom/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");









let MaterialFormComponent = class MaterialFormComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
        this.submitted = false;
        this.title = 'Add';
        this.imageurl = "assets/img/demo/upload.png";
        this.filetoupload = null;
        this.releasestatus = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])([{ id: 'New', name: 'New' }, { id: 'Pending', name: 'Pending' }, { id: 'Releases', name: 'Releases' }, { id: 'Rejected', name: 'Rejected' }]);
        this.devtype = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])([{ id: 'New', name: 'New' }, { id: 'Cross Development', name: 'Cross Development' }, { id: 'Improve', name: 'Improve' }]);
    }
    get f() { return this.fg.controls; }
    ngOnInit() {
        this.buildForm();
        this.store.dispatch(Object(_store_merchandise_subcategory__WEBPACK_IMPORTED_MODULE_3__["loadSubcategories"])());
        this.subcategory = this.store.select(_store_merchandise_subcategory__WEBPACK_IMPORTED_MODULE_3__["selectAllSubcategories"]);
        this.store.dispatch(Object(_store_settings_uom__WEBPACK_IMPORTED_MODULE_5__["loadUoms"])());
        this.uoms = this.store.select(_store_settings_uom__WEBPACK_IMPORTED_MODULE_5__["selectAllUoms"]);
        this.store.dispatch(Object(_store_article_season__WEBPACK_IMPORTED_MODULE_4__["loadSeasons"])());
        this.season = this.store.select(_store_article_season__WEBPACK_IMPORTED_MODULE_4__["selectAllSeasons"]);
    }
    handlefileinput(file) {
        this.filetoupload = file.item(0);
        //show image review
        var reader = new FileReader();
        reader.onload = (event) => {
            this.imageurl = event.target.result;
        };
        reader.readAsDataURL(this.filetoupload);
    }
    // convenience getter for easy access to form fields
    buildForm() {
        this.fg = this.fb.group({
            id: [this.materials ? this.materials.id : null],
            name: [this.materials ? this.materials.name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            barcode: [this.materials ? this.materials.barcode : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            mat_lock_status: [this.materials ? this.materials.mat_lock_status : ''],
            image: [this.materials ? this.materials.image : ''],
            sub_category: [this.materials ? this.materials.sub_category.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            hs_code: [this.materials ? this.materials.hs_code : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            unit_price: [this.materials ? this.materials.unit_price : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            sale_uom: [this.materials ? this.materials.sale_uom.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            base_uom: [this.materials ? this.materials.base_uom.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            tpt_no: [this.materials ? this.materials.tpt_no : ''],
            dimensions: [this.materials ? this.materials.dimensions : ''],
            volume_unit: [this.materials ? this.materials.volume_unit : ''],
            volume: [this.materials ? this.materials.volume : ''],
            weight: [this.materials ? this.materials.weight : ''],
            gross_weight: [this.materials ? this.materials.gross_weight : ''],
            net_weight: [this.materials ? this.materials.net_weight : ''],
            weight_unit: [this.materials ? this.materials.weight_unit : ''],
            mat_width: [this.materials ? this.materials.mat_width : ''],
            mat_height: [this.materials ? this.materials.mat_height : ''],
            mat_length: [this.materials ? this.materials.mat_length : ''],
            reorder_level: [this.materials ? this.materials.reorder_level : ''],
            min_qty: [this.materials ? this.materials.min_qty : ''],
            max_qty: [this.materials ? this.materials.max_qty : ''],
            old_material_code: [this.materials ? this.materials.old_material_code : ''],
            ean_category: [this.materials ? this.materials.ean_category : ''],
            ean_ups_category: [this.materials ? this.materials.ean_ups_category : ''],
            remarks: [this.materials ? this.materials.remarks : ''],
            conversion_formula: [this.materials ? this.materials.conversion_formula : ''],
            material_developer: [this.materials ? this.materials.material_developer : ''],
            composition: [this.materials ? this.materials.composition : ''],
            construction: [this.materials ? this.materials.construction : ''],
            thickness: [this.materials ? this.materials.thickness : ''],
            mat_release_status: [this.materials ? this.materials.mat_release_status : null],
            first_season: [this.materials ? this.materials.first_season.id : null],
            dev_type: [this.materials ? this.materials.dev_type : null],
            status: [this.materials ? this.materials.status : ''],
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
        let mat = Object.assign({}, this.fg.value);
        mat.image = event.target.Image.files[0];
        if (mat.image == undefined && (this.fg.value['id'] === 0 || this.fg.value['id'] === null)) {
            // this.toaster.error('Please select a valid image file');
        }
        else {
            let formData = new FormData();
            for (const key of Object.keys(mat)) {
                if (mat[key])
                    formData.append(key, mat[key]);
            }
            formData.append('update', 'true');
            this.store.dispatch(Object(_store_merchandise_material__WEBPACK_IMPORTED_MODULE_2__["addMaterial"])({ data: formData }));
        }
    }
};
MaterialFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }
];
MaterialFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smmat-material-form',
        template: __webpack_require__(/*! raw-loader!./material-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/merchandise/materials/material-form/material-form.component.html"),
        styles: [__webpack_require__(/*! ./material-form.component.css */ "./src/app/features/merchandise/materials/material-form/material-form.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
], MaterialFormComponent);



/***/ }),

/***/ "./src/app/features/merchandise/materials/materials.component.css":
/*!************************************************************************!*\
  !*** ./src/app/features/merchandise/materials/materials.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL21lcmNoYW5kaXNlL21hdGVyaWFscy9tYXRlcmlhbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/features/merchandise/materials/materials.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/merchandise/materials/materials.component.ts ***!
  \***********************************************************************/
/*! exports provided: MaterialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsComponent", function() { return MaterialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_merchandise_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/merchandise/material */ "./src/app/features/store/merchandise/material/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _material_form_material_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material-form/material-form.component */ "./src/app/features/merchandise/materials/material-form/material-form.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/dialogs/dialogs.service */ "./src/app/shared/dialogs/dialogs.service.ts");







let MaterialsComponent = class MaterialsComponent {
    constructor(modalService, store, dialogService) {
        this.modalService = modalService;
        this.store = store;
        this.dialogService = dialogService;
        this.columns = [
            { title: 'Image', value: 'image', image: true },
            { title: 'Name', value: 'name', sortable: true },
            { title: 'Sub Category', value: ['sub_category', 'name'], sortable: true },
            { title: 'Barcode', value: 'barcode', sortable: true },
            { title: 'HS Code', value: 'hs_code', sortable: true },
            { title: 'Unit Price', value: 'unit_price', sortable: true, money: true },
            { title: 'UOM', value: ['sale_uom', 'name'], sortable: true },
            { title: 'Status', value: 'status', bool: true, boolText: { yes: 'Active', no: 'In-Active' } },
        ];
        this.deleteMessage = 'Do you wish to delete this';
        this.deleteItemName = 'Row';
    }
    ngOnInit() {
        this.store.dispatch(Object(_store_merchandise_material__WEBPACK_IMPORTED_MODULE_2__["loadMaterials"])());
        this.materials = this.store.select(_store_merchandise_material__WEBPACK_IMPORTED_MODULE_2__["selectAllMaterials"]);
    }
    onCreate() {
        const initialState = {
            title: 'Add',
            imageurl: 'assets/img/demo/upload.png'
        };
        this.modalService.show(_material_form_material_form_component__WEBPACK_IMPORTED_MODULE_4__["MaterialFormComponent"], { initialState, class: 'modal-lg' });
    }
    onEdit(materials) {
        const initialState = {
            materials,
            title: 'Update',
            imageurl: materials.image
        };
        this.modalService.show(_material_form_material_form_component__WEBPACK_IMPORTED_MODULE_4__["MaterialFormComponent"], { initialState, class: 'modal-lg' });
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
                this.store.dispatch(Object(_store_merchandise_material__WEBPACK_IMPORTED_MODULE_2__["deleteMaterial"])({ data: id }));
            }
        });
    }
};
MaterialsComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_6__["DialogsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MaterialsComponent.prototype, "deleteMessage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MaterialsComponent.prototype, "deleteItemName", void 0);
MaterialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-materials',
        template: __webpack_require__(/*! raw-loader!./materials.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/merchandise/materials/materials.component.html"),
        styles: [__webpack_require__(/*! ./materials.component.css */ "./src/app/features/merchandise/materials/materials.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"], _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_6__["DialogsService"]])
], MaterialsComponent);



/***/ }),

/***/ "./src/app/features/merchandise/materialseasons/materialseasons.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/merchandise/materialseasons/materialseasons.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MaterialseasonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialseasonsComponent", function() { return MaterialseasonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_merchandise_materialseason__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/merchandise/materialseason */ "./src/app/features/store/merchandise/materialseason/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _season_from_season_from_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./season-from/season-from.component */ "./src/app/features/merchandise/materialseasons/season-from/season-from.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");






let MaterialseasonsComponent = class MaterialseasonsComponent {
    constructor(modalService, store) {
        this.modalService = modalService;
        this.store = store;
        this.columns = [
            { title: 'Season', value: ['season', 'name'], sortable: true },
            { title: 'Currency', value: ['currency', 'name'], sortable: true },
            { title: 'Season Price', value: 'season_price', sortable: true, money: true },
            { title: 'Status', value: 'status', bool: true, boolText: { yes: 'Active', no: 'In-Active' } },
        ];
    }
    ngOnInit() {
        this.store.dispatch(Object(_store_merchandise_materialseason__WEBPACK_IMPORTED_MODULE_1__["loadMaterialseasons"])());
        this.materialseason = this.store.select(_store_merchandise_materialseason__WEBPACK_IMPORTED_MODULE_1__["selectseasonBymaterialID"], this.matId);
    }
    onCreate() {
        const initialState = {
            title: 'Add',
            material: this.matId
        };
        this.modalService.show(_season_from_season_from_component__WEBPACK_IMPORTED_MODULE_4__["SeasonFromComponent"], { initialState, class: 'modal-xm' });
    }
    onEdit(materialseason) {
        const initialState = {
            materialseason,
            title: 'Update',
            material: this.matId
        };
        this.modalService.show(_season_from_season_from_component__WEBPACK_IMPORTED_MODULE_4__["SeasonFromComponent"], { initialState, class: 'modal-xm' });
    }
    ondelete(id) {
        if (confirm("Are you sure to want to delete this row")) {
            this.store.dispatch(Object(_store_merchandise_materialseason__WEBPACK_IMPORTED_MODULE_1__["deleteMaterialseason"])({ data: id }));
        }
    }
};
MaterialseasonsComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MaterialseasonsComponent.prototype, "matId", void 0);
MaterialseasonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'smart-materialseasons',
        template: __webpack_require__(/*! raw-loader!./materialseasons.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/merchandise/materialseasons/materialseasons.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
], MaterialseasonsComponent);



/***/ }),

/***/ "./src/app/features/merchandise/materialseasons/season-from/season-from.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/features/merchandise/materialseasons/season-from/season-from.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL21lcmNoYW5kaXNlL21hdGVyaWFsc2Vhc29ucy9zZWFzb24tZnJvbS9zZWFzb24tZnJvbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/merchandise/materialseasons/season-from/season-from.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/merchandise/materialseasons/season-from/season-from.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SeasonFromComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonFromComponent", function() { return SeasonFromComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_merchandise_materialseason__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/merchandise/materialseason */ "./src/app/features/store/merchandise/materialseason/index.ts");
/* harmony import */ var _store_article_season__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/article/season */ "./src/app/features/store/article/season/index.ts");
/* harmony import */ var _store_settings_currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/settings/currency */ "./src/app/features/store/settings/currency/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");







let SeasonFromComponent = class SeasonFromComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
        this.submitted = false;
        this.title = 'Add';
    }
    ngOnInit() {
        this.buildForm();
        this.store.dispatch(Object(_store_article_season__WEBPACK_IMPORTED_MODULE_3__["loadSeasons"])());
        this.seasons = this.store.select(_store_article_season__WEBPACK_IMPORTED_MODULE_3__["selectAllSeasons"]);
        this.store.dispatch(Object(_store_settings_currency__WEBPACK_IMPORTED_MODULE_4__["loadCurrencies"])());
        this.currencys = this.store.select(_store_settings_currency__WEBPACK_IMPORTED_MODULE_4__["selectAllCurrencies"]);
    }
    // convenience getter for easy access to form fields
    get f() { return this.fg.controls; }
    buildForm() {
        this.fg = this.fb.group({
            id: [this.materialseason ? this.materialseason.id : null],
            material: [this.materialseason ? this.materialseason.material.id : this.material],
            season: [this.materialseason ? this.materialseason.season.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            season_price: [this.materialseason ? this.materialseason.season_price : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            currency: [this.materialseason ? this.materialseason.currency.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            status: [this.materialseason ? this.materialseason.status : ''],
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
        this.store.dispatch(Object(_store_merchandise_materialseason__WEBPACK_IMPORTED_MODULE_2__["addMaterialseason"])({ data: this.fg.value }));
    }
};
SeasonFromComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
];
SeasonFromComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-season-from',
        template: __webpack_require__(/*! raw-loader!./season-from.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/merchandise/materialseasons/season-from/season-from.component.html"),
        styles: [__webpack_require__(/*! ./season-from.component.css */ "./src/app/features/merchandise/materialseasons/season-from/season-from.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
], SeasonFromComponent);



/***/ }),

/***/ "./src/app/features/merchandise/materialvendors/materialvendor-form/materialvendor-form.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/features/merchandise/materialvendors/materialvendor-form/materialvendor-form.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL21lcmNoYW5kaXNlL21hdGVyaWFsdmVuZG9ycy9tYXRlcmlhbHZlbmRvci1mb3JtL21hdGVyaWFsdmVuZG9yLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/features/merchandise/materialvendors/materialvendor-form/materialvendor-form.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/merchandise/materialvendors/materialvendor-form/materialvendor-form.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: MaterialvendorFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialvendorFormComponent", function() { return MaterialvendorFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_merchandise_materialvendor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/merchandise/materialvendor */ "./src/app/features/store/merchandise/materialvendor/index.ts");
/* harmony import */ var _store_settings_vendor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/settings/vendor */ "./src/app/features/store/settings/vendor/index.ts");
/* harmony import */ var _store_settings_currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/settings/currency */ "./src/app/features/store/settings/currency/index.ts");
/* harmony import */ var _store_settings_uom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/settings/uom */ "./src/app/features/store/settings/uom/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");








let MaterialvendorFormComponent = class MaterialvendorFormComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
        this.submitted = false;
        this.title = 'Add';
    }
    ngOnInit() {
        this.buildForm();
        this.store.dispatch(Object(_store_settings_vendor__WEBPACK_IMPORTED_MODULE_3__["loadVendors"])());
        this.vendors = this.store.select(_store_settings_vendor__WEBPACK_IMPORTED_MODULE_3__["selectAllVendors"]);
        this.store.dispatch(Object(_store_settings_currency__WEBPACK_IMPORTED_MODULE_4__["loadCurrencies"])());
        this.currencys = this.store.select(_store_settings_currency__WEBPACK_IMPORTED_MODULE_4__["selectAllCurrencies"]);
        this.store.dispatch(Object(_store_settings_uom__WEBPACK_IMPORTED_MODULE_5__["loadUoms"])());
        this.uoms = this.store.select(_store_settings_uom__WEBPACK_IMPORTED_MODULE_5__["selectAllUoms"]);
    }
    // convenience getter for easy access to form fields
    get f() { return this.fg.controls; }
    buildForm() {
        this.fg = this.fb.group({
            id: [this.materialvendor ? this.materialvendor.id : null],
            material: [this.materialvendor ? this.materialvendor.material.id : this.material],
            vendor: [this.materialvendor ? this.materialvendor.vendor.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            purchase_uom: [this.materialvendor ? this.materialvendor.purchase_uom.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            unit_price: [this.materialvendor ? this.materialvendor.unit_price : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            other_charges: [this.materialvendor ? this.materialvendor.other_charges : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            currency: [this.materialvendor ? this.materialvendor.currency.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            remarks: [this.materialvendor ? this.materialvendor.remarks : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            mat_supplier_name: [this.materialvendor ? this.materialvendor.mat_supplier_name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            min_order_qty: [this.materialvendor ? this.materialvendor.min_order_qty : 0],
            lead_time: [this.materialvendor ? this.materialvendor.lead_time : '',],
            speed_lead_time: [this.materialvendor ? this.materialvendor.speed_lead_time : '',],
            sample_time: [this.materialvendor ? this.materialvendor.sample_time : '',],
            lead_time_remarks: [this.materialvendor ? this.materialvendor.lead_time_remarks : '',],
            width: [this.materialvendor ? this.materialvendor.width : '',],
            width_uom: [this.materialvendor ? this.materialvendor.width_uom.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            status: [this.materialvendor ? this.materialvendor.status : ''],
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
        this.store.dispatch(Object(_store_merchandise_materialvendor__WEBPACK_IMPORTED_MODULE_2__["addMaterialvendor"])({ data: this.fg.value }));
    }
};
MaterialvendorFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }
];
MaterialvendorFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-materialvendor-form',
        template: __webpack_require__(/*! raw-loader!./materialvendor-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/merchandise/materialvendors/materialvendor-form/materialvendor-form.component.html"),
        styles: [__webpack_require__(/*! ./materialvendor-form.component.css */ "./src/app/features/merchandise/materialvendors/materialvendor-form/materialvendor-form.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
], MaterialvendorFormComponent);



/***/ }),

/***/ "./src/app/features/merchandise/materialvendors/materialvendors.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/merchandise/materialvendors/materialvendors.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MaterialvendorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialvendorsComponent", function() { return MaterialvendorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_merchandise_materialvendor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/merchandise/materialvendor */ "./src/app/features/store/merchandise/materialvendor/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _materialvendor_form_materialvendor_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./materialvendor-form/materialvendor-form.component */ "./src/app/features/merchandise/materialvendors/materialvendor-form/materialvendor-form.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");






let MaterialvendorsComponent = class MaterialvendorsComponent {
    constructor(modalService, store) {
        this.modalService = modalService;
        this.store = store;
        this.columns = [
            { title: 'Vendor', value: ['vendor', 'name'], sortable: true },
            { title: 'Currency', value: ['currency', 'name'], sortable: true },
            { title: 'Unit Price', value: 'unit_price', sortable: true, money: true },
            { title: 'Status', value: 'status', bool: true, boolText: { yes: 'Active', no: 'In-Active' } },
        ];
    }
    ngOnInit() {
        this.store.dispatch(Object(_store_merchandise_materialvendor__WEBPACK_IMPORTED_MODULE_1__["loadMaterialvendors"])());
        this.materialvendor = this.store.select(_store_merchandise_materialvendor__WEBPACK_IMPORTED_MODULE_1__["selectBymaterialID"], this.matId);
    }
    onCreate() {
        const initialState = {
            title: 'Add',
            material: this.matId
        };
        this.modalService.show(_materialvendor_form_materialvendor_form_component__WEBPACK_IMPORTED_MODULE_4__["MaterialvendorFormComponent"], { initialState, class: 'modal-lg' });
    }
    onEdit(materialvendor) {
        const initialState = {
            materialvendor,
            title: 'Update',
            material: this.matId
        };
        this.modalService.show(_materialvendor_form_materialvendor_form_component__WEBPACK_IMPORTED_MODULE_4__["MaterialvendorFormComponent"], { initialState, class: 'modal-lg' });
    }
    ondelete(id) {
        if (confirm("Are you sure to want to delete this row")) {
            this.store.dispatch(Object(_store_merchandise_materialvendor__WEBPACK_IMPORTED_MODULE_1__["deleteMaterialvendor"])({ data: id }));
        }
    }
};
MaterialvendorsComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MaterialvendorsComponent.prototype, "matId", void 0);
MaterialvendorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'smart-materialvendors',
        template: __webpack_require__(/*! raw-loader!./materialvendors.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/merchandise/materialvendors/materialvendors.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
], MaterialvendorsComponent);



/***/ }),

/***/ "./src/app/features/merchandise/merchandise.module.ts":
/*!************************************************************!*\
  !*** ./src/app/features/merchandise/merchandise.module.ts ***!
  \************************************************************/
/*! exports provided: MerchandiseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchandiseModule", function() { return MerchandiseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_custom_tables_custom_tables_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/custom-tables/custom-tables.module */ "./src/app/shared/custom-tables/custom-tables.module.ts");
/* harmony import */ var _shared_dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/dialogs/dialogs.module */ "./src/app/shared/dialogs/dialogs.module.ts");
/* harmony import */ var _shared_forms_forms_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/forms/forms.module */ "./src/app/shared/forms/forms.module.ts");
/* harmony import */ var _materialseasons_materialseasons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./materialseasons/materialseasons.component */ "./src/app/features/merchandise/materialseasons/materialseasons.component.ts");
/* harmony import */ var _materialvendors_materialvendors_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./materialvendors/materialvendors.component */ "./src/app/features/merchandise/materialvendors/materialvendors.component.ts");
/* harmony import */ var _materials_materials_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./materials/materials.component */ "./src/app/features/merchandise/materials/materials.component.ts");
/* harmony import */ var _subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./subcategories/subcategories.component */ "./src/app/features/merchandise/subcategories/subcategories.component.ts");
/* harmony import */ var _categorytypes_categorytypes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./categorytypes/categorytypes.component */ "./src/app/features/merchandise/categorytypes/categorytypes.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/features/merchandise/categories/categories.component.ts");
/* harmony import */ var src_app_features_store_merchandise_materialseason__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/features/store/merchandise/materialseason */ "./src/app/features/store/merchandise/materialseason/index.ts");
/* harmony import */ var src_app_features_store_merchandise_materialvendor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/features/store/merchandise/materialvendor */ "./src/app/features/store/merchandise/materialvendor/index.ts");
/* harmony import */ var src_app_features_store_merchandise_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/features/store/merchandise/material */ "./src/app/features/store/merchandise/material/index.ts");
/* harmony import */ var src_app_features_store_merchandise_subcategory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/features/store/merchandise/subcategory */ "./src/app/features/store/merchandise/subcategory/index.ts");
/* harmony import */ var src_app_features_store_merchandise_categorytype__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/features/store/merchandise/categorytype */ "./src/app/features/store/merchandise/categorytype/index.ts");
/* harmony import */ var src_app_features_store_merchandise_category__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/features/store/merchandise/category */ "./src/app/features/store/merchandise/category/index.ts");
/* harmony import */ var src_app_features_store_settings_uom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/features/store/settings/uom */ "./src/app/features/store/settings/uom/index.ts");
/* harmony import */ var src_app_features_store_settings_vendor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/features/store/settings/vendor */ "./src/app/features/store/settings/vendor/index.ts");
/* harmony import */ var src_app_features_store_settings_currency__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/features/store/settings/currency */ "./src/app/features/store/settings/currency/index.ts");
/* harmony import */ var src_app_features_store_article_season__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/features/store/article/season */ "./src/app/features/store/article/season/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./main/main.component */ "./src/app/features/merchandise/main/main.component.ts");
/* harmony import */ var _materials_material_form_material_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./materials/material-form/material-form.component */ "./src/app/features/merchandise/materials/material-form/material-form.component.ts");
/* harmony import */ var _materialvendors_materialvendor_form_materialvendor_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./materialvendors/materialvendor-form/materialvendor-form.component */ "./src/app/features/merchandise/materialvendors/materialvendor-form/materialvendor-form.component.ts");
/* harmony import */ var _materialseasons_season_from_season_from_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./materialseasons/season-from/season-from.component */ "./src/app/features/merchandise/materialseasons/season-from/season-from.component.ts");









//component imports






//store imports















let MerchandiseModule = class MerchandiseModule {
};
MerchandiseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [_categories_categories_component__WEBPACK_IMPORTED_MODULE_14__["CategoriesComponent"], _categorytypes_categorytypes_component__WEBPACK_IMPORTED_MODULE_13__["CategorytypesComponent"], _subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_12__["SubcategoriesComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_26__["MainComponent"], _materials_materials_component__WEBPACK_IMPORTED_MODULE_11__["MaterialsComponent"], _materials_material_form_material_form_component__WEBPACK_IMPORTED_MODULE_27__["MaterialFormComponent"], _materialvendors_materialvendors_component__WEBPACK_IMPORTED_MODULE_10__["MaterialvendorsComponent"], _materialvendors_materialvendor_form_materialvendor_form_component__WEBPACK_IMPORTED_MODULE_28__["MaterialvendorFormComponent"], _materialseasons_materialseasons_component__WEBPACK_IMPORTED_MODULE_9__["MaterialseasonsComponent"], _materialseasons_season_from_season_from_component__WEBPACK_IMPORTED_MODULE_29__["SeasonFromComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _shared_custom_tables_custom_tables_module__WEBPACK_IMPORTED_MODULE_6__["CustomTablesModule"],
            _shared_dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_7__["DialogsModule"],
            _shared_forms_forms_module__WEBPACK_IMPORTED_MODULE_8__["CustomFormsModule"],
            //store for feature
            _ngrx_store__WEBPACK_IMPORTED_MODULE_25__["StoreModule"].forFeature(src_app_features_store_merchandise_materialseason__WEBPACK_IMPORTED_MODULE_15__["materialseasonFeatureKey"], src_app_features_store_merchandise_materialseason__WEBPACK_IMPORTED_MODULE_15__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_25__["StoreModule"].forFeature(src_app_features_store_merchandise_materialvendor__WEBPACK_IMPORTED_MODULE_16__["materialvendorFeatureKey"], src_app_features_store_merchandise_materialvendor__WEBPACK_IMPORTED_MODULE_16__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_25__["StoreModule"].forFeature(src_app_features_store_merchandise_material__WEBPACK_IMPORTED_MODULE_17__["materialFeatureKey"], src_app_features_store_merchandise_material__WEBPACK_IMPORTED_MODULE_17__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_25__["StoreModule"].forFeature(src_app_features_store_merchandise_subcategory__WEBPACK_IMPORTED_MODULE_18__["subcategoryFeatureKey"], src_app_features_store_merchandise_subcategory__WEBPACK_IMPORTED_MODULE_18__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_25__["StoreModule"].forFeature(src_app_features_store_merchandise_categorytype__WEBPACK_IMPORTED_MODULE_19__["categorytypeFeatureKey"], src_app_features_store_merchandise_categorytype__WEBPACK_IMPORTED_MODULE_19__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_25__["StoreModule"].forFeature(src_app_features_store_merchandise_category__WEBPACK_IMPORTED_MODULE_20__["categoryFeatureKey"], src_app_features_store_merchandise_category__WEBPACK_IMPORTED_MODULE_20__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_25__["StoreModule"].forFeature(src_app_features_store_settings_uom__WEBPACK_IMPORTED_MODULE_21__["uomFeatureKey"], src_app_features_store_settings_uom__WEBPACK_IMPORTED_MODULE_21__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_25__["StoreModule"].forFeature(src_app_features_store_settings_vendor__WEBPACK_IMPORTED_MODULE_22__["vendorFeatureKey"], src_app_features_store_settings_vendor__WEBPACK_IMPORTED_MODULE_22__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_25__["StoreModule"].forFeature(src_app_features_store_settings_currency__WEBPACK_IMPORTED_MODULE_23__["currencyFeatureKey"], src_app_features_store_settings_currency__WEBPACK_IMPORTED_MODULE_23__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_25__["StoreModule"].forFeature(src_app_features_store_article_season__WEBPACK_IMPORTED_MODULE_24__["seasonFeatureKey"], src_app_features_store_article_season__WEBPACK_IMPORTED_MODULE_24__["reducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature([src_app_features_store_merchandise_category__WEBPACK_IMPORTED_MODULE_20__["CategoryEffects"], src_app_features_store_merchandise_categorytype__WEBPACK_IMPORTED_MODULE_19__["CategorytypeEffects"], src_app_features_store_merchandise_subcategory__WEBPACK_IMPORTED_MODULE_18__["SubcategoryEffects"], src_app_features_store_merchandise_material__WEBPACK_IMPORTED_MODULE_17__["MaterialEffects"], src_app_features_store_settings_uom__WEBPACK_IMPORTED_MODULE_21__["UomEffects"], src_app_features_store_merchandise_materialvendor__WEBPACK_IMPORTED_MODULE_16__["MaterialvendorEffects"], src_app_features_store_settings_vendor__WEBPACK_IMPORTED_MODULE_22__["VendorEffects"], src_app_features_store_settings_currency__WEBPACK_IMPORTED_MODULE_23__["CurrencyEffects"], src_app_features_store_article_season__WEBPACK_IMPORTED_MODULE_24__["SeasonEffects"], src_app_features_store_merchandise_materialseason__WEBPACK_IMPORTED_MODULE_15__["MaterialseasonEffects"]]),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                { path: '', pathMatch: 'full', redirectTo: 'materials' },
                { path: 'materialseasons', component: _materialseasons_materialseasons_component__WEBPACK_IMPORTED_MODULE_9__["MaterialseasonsComponent"] },
                { path: 'materialvendors', component: _materialvendors_materialvendors_component__WEBPACK_IMPORTED_MODULE_10__["MaterialvendorsComponent"] },
                { path: 'materials', component: _materials_materials_component__WEBPACK_IMPORTED_MODULE_11__["MaterialsComponent"] },
                { path: 'sub-categories', component: _subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_12__["SubcategoriesComponent"] },
                { path: 'category-types', component: _categorytypes_categorytypes_component__WEBPACK_IMPORTED_MODULE_13__["CategorytypesComponent"] },
                { path: 'categories', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_14__["CategoriesComponent"] },
                { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_26__["MainComponent"] },
            ])
        ],
        entryComponents: [_materials_material_form_material_form_component__WEBPACK_IMPORTED_MODULE_27__["MaterialFormComponent"], _materialvendors_materialvendor_form_materialvendor_form_component__WEBPACK_IMPORTED_MODULE_28__["MaterialvendorFormComponent"], _materialseasons_season_from_season_from_component__WEBPACK_IMPORTED_MODULE_29__["SeasonFromComponent"]]
    })
], MerchandiseModule);



/***/ }),

/***/ "./src/app/features/merchandise/subcategories/subcategories.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/merchandise/subcategories/subcategories.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SubcategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoriesComponent", function() { return SubcategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_finance_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/finance/category */ "./src/app/features/store/finance/category/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_merchandise_subcategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../store/merchandise/subcategory */ "./src/app/features/store/merchandise/subcategory/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let SubcategoriesComponent = class SubcategoriesComponent {
    constructor(store) {
        this.store = store;
        this.form = [];
        this.columns = [
            { title: 'Subcategory Name', value: 'name' },
            { title: 'Category', value: ['category', 'name'] },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.selectAllSelector = _store_merchandise_subcategory__WEBPACK_IMPORTED_MODULE_3__["selectAllSubcategories"];
        this.selectCurrent = _store_merchandise_subcategory__WEBPACK_IMPORTED_MODULE_3__["selectCurrentSubcategory"];
    }
    ngOnInit() {
        this.store.dispatch(Object(_store_finance_category__WEBPACK_IMPORTED_MODULE_1__["loadCategories"])());
        this.categories = this.store.select(_store_finance_category__WEBPACK_IMPORTED_MODULE_1__["selectAllCategories"]);
        this.form = [
            {
                row: [
                    { label: 'Name', name: 'name', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'Category', name: 'category', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, type: 'select', items: this.categories },
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
    }
};
SubcategoriesComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
SubcategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'smart-subcategories',
        template: __webpack_require__(/*! raw-loader!./subcategories.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/merchandise/subcategories/subcategories.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], SubcategoriesComponent);



/***/ }),

/***/ "./src/app/features/store/finance/category/category.actions.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/store/finance/category/category.actions.ts ***!
  \*********************************************************************/
/*! exports provided: loadCategories, loadCategoriesSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategories", function() { return loadCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategoriesSuccess", function() { return loadCategoriesSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadCategories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Category/API] Load Categories');
const loadCategoriesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Category/API] Load Categories Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/finance/category/category.effects.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/store/finance/category/category.effects.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryEffects", function() { return CategoryEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _category_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.actions */ "./src/app/features/store/finance/category/category.actions.ts");
/* harmony import */ var _category_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category.selectors */ "./src/app/features/store/finance/category/category.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category.service */ "./src/app/features/store/finance/category/category.service.ts");








let CategoryEffects = class CategoryEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadCategories$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_category_actions__WEBPACK_IMPORTED_MODULE_3__["loadCategories"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store.select(_category_selectors__WEBPACK_IMPORTED_MODULE_4__["allCategoryLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => Object(_category_actions__WEBPACK_IMPORTED_MODULE_3__["loadCategoriesSuccess"])({ data }))))));
    }
};
CategoryEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
    { type: _category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"] }
];
CategoryEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"], _category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"]])
], CategoryEffects);



/***/ }),

/***/ "./src/app/features/store/finance/category/category.reducer.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/store/finance/category/category.reducer.ts ***!
  \*********************************************************************/
/*! exports provided: categoryFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryFeatureKey", function() { return categoryFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _category_category_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category/category.actions */ "./src/app/features/store/finance/category/category.actions.ts");



const categoryFeatureKey = 'categories';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allLoaded: false,
});
const categoryReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_category_category_actions__WEBPACK_IMPORTED_MODULE_2__["loadCategoriesSuccess"], (state, action) => adapter.addAll(action.data, state)));
function reducer(state, action) {
    return categoryReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/features/store/finance/category/category.selectors.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/store/finance/category/category.selectors.ts ***!
  \***********************************************************************/
/*! exports provided: selectAllCategories, allCategoryLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllCategories", function() { return selectAllCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allCategoryLoaded", function() { return allCategoryLoaded; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _category_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.reducer */ "./src/app/features/store/finance/category/category.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_category_reducer__WEBPACK_IMPORTED_MODULE_1__["categoryFeatureKey"]);
const selectAllCategories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _category_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allCategoryLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allLoaded);


/***/ }),

/***/ "./src/app/features/store/finance/category/category.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/store/finance/category/category.service.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/finance/heads/categories/`;
    }
    findAll() {
        return this.http.get(this.url);
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], CategoryService);



/***/ }),

/***/ "./src/app/features/store/finance/category/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/store/finance/category/index.ts ***!
  \**********************************************************/
/*! exports provided: CategoryEffects, CategoryService, selectAllCategories, allCategoryLoaded, categoryFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadCategories, loadCategoriesSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.effects */ "./src/app/features/store/finance/category/category.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryEffects", function() { return _category_effects__WEBPACK_IMPORTED_MODULE_0__["CategoryEffects"]; });

/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.service */ "./src/app/features/store/finance/category/category.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return _category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]; });

/* harmony import */ var _category_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.selectors */ "./src/app/features/store/finance/category/category.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllCategories", function() { return _category_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allCategoryLoaded", function() { return _category_selectors__WEBPACK_IMPORTED_MODULE_2__["allCategoryLoaded"]; });

/* harmony import */ var _category_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.reducer */ "./src/app/features/store/finance/category/category.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "categoryFeatureKey", function() { return _category_reducer__WEBPACK_IMPORTED_MODULE_3__["categoryFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _category_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _category_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _category_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _category_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _category_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _category_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _category_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _category_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category.actions */ "./src/app/features/store/finance/category/category.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCategories", function() { return _category_actions__WEBPACK_IMPORTED_MODULE_4__["loadCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCategoriesSuccess", function() { return _category_actions__WEBPACK_IMPORTED_MODULE_4__["loadCategoriesSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/merchandise/category/category.actions.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/merchandise/category/category.actions.ts ***!
  \*************************************************************************/
/*! exports provided: loadCategories, loadCategoriesSuccess, addCategory, addCategorySuccess, deleteCategory, deleteCategorySuccess, selectCurrentCategorySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategories", function() { return loadCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategoriesSuccess", function() { return loadCategoriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCategory", function() { return addCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCategorySuccess", function() { return addCategorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCategory", function() { return deleteCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCategorySuccess", function() { return deleteCategorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCategorySuccess", function() { return selectCurrentCategorySuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadCategories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Category/API] Load Categories');
const loadCategoriesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Category/API] Load Categories Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addCategory = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Category/API] Add Category', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addCategorySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Category/API] Add Category Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteCategory = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Category/API] Delete Category', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteCategorySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Category/API] Delete Category Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentCategorySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Category/API] Select Current Category', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/merchandise/category/category.effects.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/merchandise/category/category.effects.ts ***!
  \*************************************************************************/
/*! exports provided: CategoryEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryEffects", function() { return CategoryEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category.service */ "./src/app/features/store/merchandise/category/category.service.ts");
/* harmony import */ var _category_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category.actions */ "./src/app/features/store/merchandise/category/category.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _category_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category.selectors */ "./src/app/features/store/merchandise/category/category.selectors.ts");








let CategoryEffects = class CategoryEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadCategories$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_category_actions__WEBPACK_IMPORTED_MODULE_5__["loadCategories"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_category_selectors__WEBPACK_IMPORTED_MODULE_7__["allCategoryLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_category_actions__WEBPACK_IMPORTED_MODULE_5__["loadCategoriesSuccess"])({ data }))))));
        this.addCategory$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_category_actions__WEBPACK_IMPORTED_MODULE_5__["addCategory"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_category_actions__WEBPACK_IMPORTED_MODULE_5__["addCategorySuccess"])({ data }))))));
        this.deleteCategory$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_category_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCategory"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_category_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCategorySuccess"])({ id: data.id }))))));
    }
};
CategoryEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] }
];
CategoryEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]])
], CategoryEffects);



/***/ }),

/***/ "./src/app/features/store/merchandise/category/category.reducer.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/merchandise/category/category.reducer.ts ***!
  \*************************************************************************/
/*! exports provided: categoryFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryFeatureKey", function() { return categoryFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _category_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.actions */ "./src/app/features/store/merchandise/category/category.actions.ts");



const categoryFeatureKey = 'categories';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allCategoriesLoaded: false,
    currentCategory: null
});
const categoryReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_category_actions__WEBPACK_IMPORTED_MODULE_2__["addCategorySuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentCategory: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_category_actions__WEBPACK_IMPORTED_MODULE_2__["deleteCategorySuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_category_actions__WEBPACK_IMPORTED_MODULE_2__["loadCategoriesSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_category_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentCategorySuccess"], (state, action) => (Object.assign({}, state, { currentCategory: action.data }))));
function reducer(state, action) {
    return categoryReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/features/store/merchandise/category/category.selectors.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/store/merchandise/category/category.selectors.ts ***!
  \***************************************************************************/
/*! exports provided: selectAllCategories, allCategoryLoaded, selectCurrentCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllCategories", function() { return selectAllCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allCategoryLoaded", function() { return allCategoryLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCategory", function() { return selectCurrentCategory; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _category_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.reducer */ "./src/app/features/store/merchandise/category/category.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_category_reducer__WEBPACK_IMPORTED_MODULE_1__["categoryFeatureKey"]);
const selectAllCategories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _category_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allCategoryLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allCategoriesLoaded);
const selectCurrentCategory = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentCategory);


/***/ }),

/***/ "./src/app/features/store/merchandise/category/category.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/merchandise/category/category.service.ts ***!
  \*************************************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/categories/`;
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
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], CategoryService);



/***/ }),

/***/ "./src/app/features/store/merchandise/category/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/store/merchandise/category/index.ts ***!
  \**************************************************************/
/*! exports provided: CategoryEffects, CategoryService, selectAllCategories, allCategoryLoaded, selectCurrentCategory, categoryFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadCategories, loadCategoriesSuccess, addCategory, addCategorySuccess, deleteCategory, deleteCategorySuccess, selectCurrentCategorySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.effects */ "./src/app/features/store/merchandise/category/category.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryEffects", function() { return _category_effects__WEBPACK_IMPORTED_MODULE_0__["CategoryEffects"]; });

/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.service */ "./src/app/features/store/merchandise/category/category.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return _category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]; });

/* harmony import */ var _category_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.selectors */ "./src/app/features/store/merchandise/category/category.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllCategories", function() { return _category_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allCategoryLoaded", function() { return _category_selectors__WEBPACK_IMPORTED_MODULE_2__["allCategoryLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCategory", function() { return _category_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentCategory"]; });

/* harmony import */ var _category_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.reducer */ "./src/app/features/store/merchandise/category/category.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "categoryFeatureKey", function() { return _category_reducer__WEBPACK_IMPORTED_MODULE_3__["categoryFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _category_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _category_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _category_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _category_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _category_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _category_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _category_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _category_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category.actions */ "./src/app/features/store/merchandise/category/category.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCategories", function() { return _category_actions__WEBPACK_IMPORTED_MODULE_4__["loadCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCategoriesSuccess", function() { return _category_actions__WEBPACK_IMPORTED_MODULE_4__["loadCategoriesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCategory", function() { return _category_actions__WEBPACK_IMPORTED_MODULE_4__["addCategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCategorySuccess", function() { return _category_actions__WEBPACK_IMPORTED_MODULE_4__["addCategorySuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCategory", function() { return _category_actions__WEBPACK_IMPORTED_MODULE_4__["deleteCategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCategorySuccess", function() { return _category_actions__WEBPACK_IMPORTED_MODULE_4__["deleteCategorySuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCategorySuccess", function() { return _category_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentCategorySuccess"]; });








/***/ }),

/***/ "./src/app/features/store/merchandise/categorytype/categorytype.actions.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/store/merchandise/categorytype/categorytype.actions.ts ***!
  \*********************************************************************************/
/*! exports provided: loadCategorytypes, loadCategorytypesSuccess, addCategorytype, addCategorytypeSuccess, deleteCategorytype, deleteCategorytypeSuccess, selectCurrentCategorytypeSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategorytypes", function() { return loadCategorytypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategorytypesSuccess", function() { return loadCategorytypesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCategorytype", function() { return addCategorytype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCategorytypeSuccess", function() { return addCategorytypeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCategorytype", function() { return deleteCategorytype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCategorytypeSuccess", function() { return deleteCategorytypeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCategorytypeSuccess", function() { return selectCurrentCategorytypeSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadCategorytypes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Categorytype/API] Load Categorytypes');
const loadCategorytypesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Categorytype/API] Load Categorytypes Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addCategorytype = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Categorytype/API] Add Categorytype', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addCategorytypeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Categorytype/API] Add Categorytype Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteCategorytype = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Categorytype/API] Delete Categorytype', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteCategorytypeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Categorytype/API] Delete Categorytype Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentCategorytypeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Categorytype/API] Select Current Categorytype', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/merchandise/categorytype/categorytype.effects.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/store/merchandise/categorytype/categorytype.effects.ts ***!
  \*********************************************************************************/
/*! exports provided: CategorytypeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorytypeEffects", function() { return CategorytypeEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _categorytype_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categorytype.service */ "./src/app/features/store/merchandise/categorytype/categorytype.service.ts");
/* harmony import */ var _categorytype_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categorytype.actions */ "./src/app/features/store/merchandise/categorytype/categorytype.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _categorytype_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categorytype.selectors */ "./src/app/features/store/merchandise/categorytype/categorytype.selectors.ts");








let CategorytypeEffects = class CategorytypeEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadCategorytypes$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_categorytype_actions__WEBPACK_IMPORTED_MODULE_5__["loadCategorytypes"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_categorytype_selectors__WEBPACK_IMPORTED_MODULE_7__["allCategorytypeLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_categorytype_actions__WEBPACK_IMPORTED_MODULE_5__["loadCategorytypesSuccess"])({ data }))))));
        this.addCategorytype$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_categorytype_actions__WEBPACK_IMPORTED_MODULE_5__["addCategorytype"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_categorytype_actions__WEBPACK_IMPORTED_MODULE_5__["addCategorytypeSuccess"])({ data }))))));
        this.deleteCategorytype$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_categorytype_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCategorytype"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_categorytype_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCategorytypeSuccess"])({ id: data.id }))))));
    }
};
CategorytypeEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _categorytype_service__WEBPACK_IMPORTED_MODULE_4__["CategorytypeService"] }
];
CategorytypeEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _categorytype_service__WEBPACK_IMPORTED_MODULE_4__["CategorytypeService"]])
], CategorytypeEffects);



/***/ }),

/***/ "./src/app/features/store/merchandise/categorytype/categorytype.reducer.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/store/merchandise/categorytype/categorytype.reducer.ts ***!
  \*********************************************************************************/
/*! exports provided: categorytypeFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categorytypeFeatureKey", function() { return categorytypeFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _categorytype_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categorytype.actions */ "./src/app/features/store/merchandise/categorytype/categorytype.actions.ts");



const categorytypeFeatureKey = 'categorytypes';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allCategorytypesLoaded: false,
    currentCategorytype: null
});
const categorytypeReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_categorytype_actions__WEBPACK_IMPORTED_MODULE_2__["addCategorytypeSuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentCategorytype: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_categorytype_actions__WEBPACK_IMPORTED_MODULE_2__["deleteCategorytypeSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_categorytype_actions__WEBPACK_IMPORTED_MODULE_2__["loadCategorytypesSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_categorytype_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentCategorytypeSuccess"], (state, action) => (Object.assign({}, state, { currentCategorytype: action.data }))));
function reducer(state, action) {
    return categorytypeReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/features/store/merchandise/categorytype/categorytype.selectors.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/store/merchandise/categorytype/categorytype.selectors.ts ***!
  \***********************************************************************************/
/*! exports provided: selectAllCategorytypes, allCategorytypeLoaded, selectCurrentCategorytype */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllCategorytypes", function() { return selectAllCategorytypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allCategorytypeLoaded", function() { return allCategorytypeLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCategorytype", function() { return selectCurrentCategorytype; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _categorytype_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categorytype.reducer */ "./src/app/features/store/merchandise/categorytype/categorytype.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_categorytype_reducer__WEBPACK_IMPORTED_MODULE_1__["categorytypeFeatureKey"]);
const selectAllCategorytypes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _categorytype_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allCategorytypeLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allCategorytypesLoaded);
const selectCurrentCategorytype = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentCategorytype);


/***/ }),

/***/ "./src/app/features/store/merchandise/categorytype/categorytype.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/store/merchandise/categorytype/categorytype.service.ts ***!
  \*********************************************************************************/
/*! exports provided: CategorytypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorytypeService", function() { return CategorytypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let CategorytypeService = class CategorytypeService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/category-types/`;
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
CategorytypeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CategorytypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], CategorytypeService);



/***/ }),

/***/ "./src/app/features/store/merchandise/categorytype/index.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/store/merchandise/categorytype/index.ts ***!
  \******************************************************************/
/*! exports provided: CategorytypeEffects, CategorytypeService, selectAllCategorytypes, allCategorytypeLoaded, selectCurrentCategorytype, categorytypeFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadCategorytypes, loadCategorytypesSuccess, addCategorytype, addCategorytypeSuccess, deleteCategorytype, deleteCategorytypeSuccess, selectCurrentCategorytypeSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _categorytype_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categorytype.effects */ "./src/app/features/store/merchandise/categorytype/categorytype.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategorytypeEffects", function() { return _categorytype_effects__WEBPACK_IMPORTED_MODULE_0__["CategorytypeEffects"]; });

/* harmony import */ var _categorytype_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categorytype.service */ "./src/app/features/store/merchandise/categorytype/categorytype.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategorytypeService", function() { return _categorytype_service__WEBPACK_IMPORTED_MODULE_1__["CategorytypeService"]; });

/* harmony import */ var _categorytype_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categorytype.selectors */ "./src/app/features/store/merchandise/categorytype/categorytype.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllCategorytypes", function() { return _categorytype_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllCategorytypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allCategorytypeLoaded", function() { return _categorytype_selectors__WEBPACK_IMPORTED_MODULE_2__["allCategorytypeLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCategorytype", function() { return _categorytype_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentCategorytype"]; });

/* harmony import */ var _categorytype_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categorytype.reducer */ "./src/app/features/store/merchandise/categorytype/categorytype.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "categorytypeFeatureKey", function() { return _categorytype_reducer__WEBPACK_IMPORTED_MODULE_3__["categorytypeFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _categorytype_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _categorytype_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _categorytype_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _categorytype_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _categorytype_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _categorytype_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _categorytype_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _categorytype_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categorytype.actions */ "./src/app/features/store/merchandise/categorytype/categorytype.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCategorytypes", function() { return _categorytype_actions__WEBPACK_IMPORTED_MODULE_4__["loadCategorytypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCategorytypesSuccess", function() { return _categorytype_actions__WEBPACK_IMPORTED_MODULE_4__["loadCategorytypesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCategorytype", function() { return _categorytype_actions__WEBPACK_IMPORTED_MODULE_4__["addCategorytype"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCategorytypeSuccess", function() { return _categorytype_actions__WEBPACK_IMPORTED_MODULE_4__["addCategorytypeSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCategorytype", function() { return _categorytype_actions__WEBPACK_IMPORTED_MODULE_4__["deleteCategorytype"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCategorytypeSuccess", function() { return _categorytype_actions__WEBPACK_IMPORTED_MODULE_4__["deleteCategorytypeSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCategorytypeSuccess", function() { return _categorytype_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentCategorytypeSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/merchandise/materialseason/index.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/store/merchandise/materialseason/index.ts ***!
  \********************************************************************/
/*! exports provided: MaterialseasonEffects, MaterialseasonService, selectAllMaterialseasons, allMaterialseasonLoaded, selectCurrentMaterialseason, selectseasonBymaterialID, materialseasonFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadMaterialseasons, loadMaterialseasonsSuccess, addMaterialseason, addMaterialseasonSuccess, deleteMaterialseason, deleteMaterialseasonSuccess, selectCurrentMaterialseasonSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _materialseason_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./materialseason.effects */ "./src/app/features/store/merchandise/materialseason/materialseason.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialseasonEffects", function() { return _materialseason_effects__WEBPACK_IMPORTED_MODULE_0__["MaterialseasonEffects"]; });

/* harmony import */ var _materialseason_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./materialseason.service */ "./src/app/features/store/merchandise/materialseason/materialseason.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialseasonService", function() { return _materialseason_service__WEBPACK_IMPORTED_MODULE_1__["MaterialseasonService"]; });

/* harmony import */ var _materialseason_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./materialseason.selectors */ "./src/app/features/store/merchandise/materialseason/materialseason.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllMaterialseasons", function() { return _materialseason_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllMaterialseasons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allMaterialseasonLoaded", function() { return _materialseason_selectors__WEBPACK_IMPORTED_MODULE_2__["allMaterialseasonLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentMaterialseason", function() { return _materialseason_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentMaterialseason"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectseasonBymaterialID", function() { return _materialseason_selectors__WEBPACK_IMPORTED_MODULE_2__["selectseasonBymaterialID"]; });

/* harmony import */ var _materialseason_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./materialseason.reducer */ "./src/app/features/store/merchandise/materialseason/materialseason.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "materialseasonFeatureKey", function() { return _materialseason_reducer__WEBPACK_IMPORTED_MODULE_3__["materialseasonFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _materialseason_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _materialseason_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _materialseason_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _materialseason_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _materialseason_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _materialseason_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _materialseason_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _materialseason_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./materialseason.actions */ "./src/app/features/store/merchandise/materialseason/materialseason.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadMaterialseasons", function() { return _materialseason_actions__WEBPACK_IMPORTED_MODULE_4__["loadMaterialseasons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadMaterialseasonsSuccess", function() { return _materialseason_actions__WEBPACK_IMPORTED_MODULE_4__["loadMaterialseasonsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addMaterialseason", function() { return _materialseason_actions__WEBPACK_IMPORTED_MODULE_4__["addMaterialseason"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addMaterialseasonSuccess", function() { return _materialseason_actions__WEBPACK_IMPORTED_MODULE_4__["addMaterialseasonSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteMaterialseason", function() { return _materialseason_actions__WEBPACK_IMPORTED_MODULE_4__["deleteMaterialseason"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteMaterialseasonSuccess", function() { return _materialseason_actions__WEBPACK_IMPORTED_MODULE_4__["deleteMaterialseasonSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentMaterialseasonSuccess", function() { return _materialseason_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentMaterialseasonSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/merchandise/materialseason/materialseason.actions.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/store/merchandise/materialseason/materialseason.actions.ts ***!
  \*************************************************************************************/
/*! exports provided: loadMaterialseasons, loadMaterialseasonsSuccess, addMaterialseason, addMaterialseasonSuccess, deleteMaterialseason, deleteMaterialseasonSuccess, selectCurrentMaterialseasonSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMaterialseasons", function() { return loadMaterialseasons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMaterialseasonsSuccess", function() { return loadMaterialseasonsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMaterialseason", function() { return addMaterialseason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMaterialseasonSuccess", function() { return addMaterialseasonSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMaterialseason", function() { return deleteMaterialseason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMaterialseasonSuccess", function() { return deleteMaterialseasonSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentMaterialseasonSuccess", function() { return selectCurrentMaterialseasonSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadMaterialseasons = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Materialseason/API] Load Materialseasons');
const loadMaterialseasonsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Materialseason/API] Load Materialseasons Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addMaterialseason = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Materialseason/API] Add Materialseason', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addMaterialseasonSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Materialseason/API] Add Materialseason Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteMaterialseason = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Materialseason/API] Delete Materialseason', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteMaterialseasonSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Materialseason/API] Delete Materialseason Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentMaterialseasonSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Materialseason/API] Select Current Materialseason', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/merchandise/materialseason/materialseason.effects.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/store/merchandise/materialseason/materialseason.effects.ts ***!
  \*************************************************************************************/
/*! exports provided: MaterialseasonEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialseasonEffects", function() { return MaterialseasonEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _materialseason_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./materialseason.service */ "./src/app/features/store/merchandise/materialseason/materialseason.service.ts");
/* harmony import */ var _materialseason_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./materialseason.actions */ "./src/app/features/store/merchandise/materialseason/materialseason.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _materialseason_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./materialseason.selectors */ "./src/app/features/store/merchandise/materialseason/materialseason.selectors.ts");








let MaterialseasonEffects = class MaterialseasonEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadMaterialseasons$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_materialseason_actions__WEBPACK_IMPORTED_MODULE_5__["loadMaterialseasons"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_materialseason_selectors__WEBPACK_IMPORTED_MODULE_7__["allMaterialseasonLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_materialseason_actions__WEBPACK_IMPORTED_MODULE_5__["loadMaterialseasonsSuccess"])({ data }))))));
        this.addMaterialseason$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_materialseason_actions__WEBPACK_IMPORTED_MODULE_5__["addMaterialseason"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_materialseason_actions__WEBPACK_IMPORTED_MODULE_5__["addMaterialseasonSuccess"])({ data }))))));
        this.deleteMaterialseason$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_materialseason_actions__WEBPACK_IMPORTED_MODULE_5__["deleteMaterialseason"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_materialseason_actions__WEBPACK_IMPORTED_MODULE_5__["deleteMaterialseasonSuccess"])({ id: data.id }))))));
    }
};
MaterialseasonEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _materialseason_service__WEBPACK_IMPORTED_MODULE_4__["MaterialseasonService"] }
];
MaterialseasonEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _materialseason_service__WEBPACK_IMPORTED_MODULE_4__["MaterialseasonService"]])
], MaterialseasonEffects);



/***/ }),

/***/ "./src/app/features/store/merchandise/materialseason/materialseason.reducer.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/store/merchandise/materialseason/materialseason.reducer.ts ***!
  \*************************************************************************************/
/*! exports provided: materialseasonFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialseasonFeatureKey", function() { return materialseasonFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _materialseason_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./materialseason.actions */ "./src/app/features/store/merchandise/materialseason/materialseason.actions.ts");



const materialseasonFeatureKey = 'materialseasons';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allMaterialseasonsLoaded: false,
    currentMaterialseason: null
});
const materialseasonReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_materialseason_actions__WEBPACK_IMPORTED_MODULE_2__["addMaterialseasonSuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentMaterialseason: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_materialseason_actions__WEBPACK_IMPORTED_MODULE_2__["deleteMaterialseasonSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_materialseason_actions__WEBPACK_IMPORTED_MODULE_2__["loadMaterialseasonsSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_materialseason_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentMaterialseasonSuccess"], (state, action) => (Object.assign({}, state, { currentMaterialseason: action.data }))));
function reducer(state, action) {
    return materialseasonReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/features/store/merchandise/materialseason/materialseason.selectors.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/features/store/merchandise/materialseason/materialseason.selectors.ts ***!
  \***************************************************************************************/
/*! exports provided: selectAllMaterialseasons, allMaterialseasonLoaded, selectCurrentMaterialseason, selectseasonBymaterialID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllMaterialseasons", function() { return selectAllMaterialseasons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allMaterialseasonLoaded", function() { return allMaterialseasonLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentMaterialseason", function() { return selectCurrentMaterialseason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectseasonBymaterialID", function() { return selectseasonBymaterialID; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _materialseason_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./materialseason.reducer */ "./src/app/features/store/merchandise/materialseason/materialseason.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_materialseason_reducer__WEBPACK_IMPORTED_MODULE_1__["materialseasonFeatureKey"]);
const selectAllMaterialseasons = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _materialseason_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allMaterialseasonLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allMaterialseasonsLoaded);
const selectCurrentMaterialseason = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentMaterialseason);
const selectseasonBymaterialID = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAllMaterialseasons, (material, id) => {
    const mat = material.filter(m => m.material.id == id);
    return mat;
});


/***/ }),

/***/ "./src/app/features/store/merchandise/materialseason/materialseason.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/store/merchandise/materialseason/materialseason.service.ts ***!
  \*************************************************************************************/
/*! exports provided: MaterialseasonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialseasonService", function() { return MaterialseasonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let MaterialseasonService = class MaterialseasonService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/material-seasons/`;
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
MaterialseasonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
MaterialseasonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], MaterialseasonService);



/***/ }),

/***/ "./src/app/features/store/merchandise/materialvendor/index.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/store/merchandise/materialvendor/index.ts ***!
  \********************************************************************/
/*! exports provided: MaterialvendorEffects, MaterialvendorService, selectAllMaterialvendors, allMaterialvendorLoaded, selectCurrentMaterialvendor, selectBymaterialID, materialvendorFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadMaterialvendors, loadMaterialvendorsSuccess, addMaterialvendor, addMaterialvendorSuccess, deleteMaterialvendor, deleteMaterialvendorSuccess, selectCurrentMaterialvendorSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _materialvendor_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./materialvendor.effects */ "./src/app/features/store/merchandise/materialvendor/materialvendor.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialvendorEffects", function() { return _materialvendor_effects__WEBPACK_IMPORTED_MODULE_0__["MaterialvendorEffects"]; });

/* harmony import */ var _materialvendor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./materialvendor.service */ "./src/app/features/store/merchandise/materialvendor/materialvendor.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialvendorService", function() { return _materialvendor_service__WEBPACK_IMPORTED_MODULE_1__["MaterialvendorService"]; });

/* harmony import */ var _materialvendor_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./materialvendor.selectors */ "./src/app/features/store/merchandise/materialvendor/materialvendor.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllMaterialvendors", function() { return _materialvendor_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllMaterialvendors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allMaterialvendorLoaded", function() { return _materialvendor_selectors__WEBPACK_IMPORTED_MODULE_2__["allMaterialvendorLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentMaterialvendor", function() { return _materialvendor_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentMaterialvendor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectBymaterialID", function() { return _materialvendor_selectors__WEBPACK_IMPORTED_MODULE_2__["selectBymaterialID"]; });

/* harmony import */ var _materialvendor_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./materialvendor.reducer */ "./src/app/features/store/merchandise/materialvendor/materialvendor.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "materialvendorFeatureKey", function() { return _materialvendor_reducer__WEBPACK_IMPORTED_MODULE_3__["materialvendorFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _materialvendor_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _materialvendor_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _materialvendor_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _materialvendor_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _materialvendor_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _materialvendor_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _materialvendor_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _materialvendor_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./materialvendor.actions */ "./src/app/features/store/merchandise/materialvendor/materialvendor.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadMaterialvendors", function() { return _materialvendor_actions__WEBPACK_IMPORTED_MODULE_4__["loadMaterialvendors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadMaterialvendorsSuccess", function() { return _materialvendor_actions__WEBPACK_IMPORTED_MODULE_4__["loadMaterialvendorsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addMaterialvendor", function() { return _materialvendor_actions__WEBPACK_IMPORTED_MODULE_4__["addMaterialvendor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addMaterialvendorSuccess", function() { return _materialvendor_actions__WEBPACK_IMPORTED_MODULE_4__["addMaterialvendorSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteMaterialvendor", function() { return _materialvendor_actions__WEBPACK_IMPORTED_MODULE_4__["deleteMaterialvendor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteMaterialvendorSuccess", function() { return _materialvendor_actions__WEBPACK_IMPORTED_MODULE_4__["deleteMaterialvendorSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentMaterialvendorSuccess", function() { return _materialvendor_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentMaterialvendorSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/merchandise/materialvendor/materialvendor.actions.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/store/merchandise/materialvendor/materialvendor.actions.ts ***!
  \*************************************************************************************/
/*! exports provided: loadMaterialvendors, loadMaterialvendorsSuccess, addMaterialvendor, addMaterialvendorSuccess, deleteMaterialvendor, deleteMaterialvendorSuccess, selectCurrentMaterialvendorSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMaterialvendors", function() { return loadMaterialvendors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMaterialvendorsSuccess", function() { return loadMaterialvendorsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMaterialvendor", function() { return addMaterialvendor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMaterialvendorSuccess", function() { return addMaterialvendorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMaterialvendor", function() { return deleteMaterialvendor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMaterialvendorSuccess", function() { return deleteMaterialvendorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentMaterialvendorSuccess", function() { return selectCurrentMaterialvendorSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadMaterialvendors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Materialvendor/API] Load Materialvendors');
const loadMaterialvendorsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Materialvendor/API] Load Materialvendors Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addMaterialvendor = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Materialvendor/API] Add Materialvendor', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addMaterialvendorSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Materialvendor/API] Add Materialvendor Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteMaterialvendor = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Materialvendor/API] Delete Materialvendor', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteMaterialvendorSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Materialvendor/API] Delete Materialvendor Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentMaterialvendorSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Materialvendor/API] Select Current Materialvendor', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/merchandise/materialvendor/materialvendor.effects.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/store/merchandise/materialvendor/materialvendor.effects.ts ***!
  \*************************************************************************************/
/*! exports provided: MaterialvendorEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialvendorEffects", function() { return MaterialvendorEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _materialvendor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./materialvendor.service */ "./src/app/features/store/merchandise/materialvendor/materialvendor.service.ts");
/* harmony import */ var _materialvendor_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./materialvendor.actions */ "./src/app/features/store/merchandise/materialvendor/materialvendor.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _materialvendor_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./materialvendor.selectors */ "./src/app/features/store/merchandise/materialvendor/materialvendor.selectors.ts");








let MaterialvendorEffects = class MaterialvendorEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadMaterialvendors$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_materialvendor_actions__WEBPACK_IMPORTED_MODULE_5__["loadMaterialvendors"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_materialvendor_selectors__WEBPACK_IMPORTED_MODULE_7__["allMaterialvendorLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_materialvendor_actions__WEBPACK_IMPORTED_MODULE_5__["loadMaterialvendorsSuccess"])({ data }))))));
        this.addMaterialvendor$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_materialvendor_actions__WEBPACK_IMPORTED_MODULE_5__["addMaterialvendor"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_materialvendor_actions__WEBPACK_IMPORTED_MODULE_5__["addMaterialvendorSuccess"])({ data }))))));
        this.deleteMaterialvendor$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_materialvendor_actions__WEBPACK_IMPORTED_MODULE_5__["deleteMaterialvendor"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_materialvendor_actions__WEBPACK_IMPORTED_MODULE_5__["deleteMaterialvendorSuccess"])({ id: data.id }))))));
    }
};
MaterialvendorEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _materialvendor_service__WEBPACK_IMPORTED_MODULE_4__["MaterialvendorService"] }
];
MaterialvendorEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _materialvendor_service__WEBPACK_IMPORTED_MODULE_4__["MaterialvendorService"]])
], MaterialvendorEffects);



/***/ }),

/***/ "./src/app/features/store/merchandise/materialvendor/materialvendor.reducer.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/store/merchandise/materialvendor/materialvendor.reducer.ts ***!
  \*************************************************************************************/
/*! exports provided: materialvendorFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialvendorFeatureKey", function() { return materialvendorFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _materialvendor_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./materialvendor.actions */ "./src/app/features/store/merchandise/materialvendor/materialvendor.actions.ts");



const materialvendorFeatureKey = 'materialvendors';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allMaterialvendorsLoaded: false,
    currentMaterialvendor: null
});
const materialvendorReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_materialvendor_actions__WEBPACK_IMPORTED_MODULE_2__["addMaterialvendorSuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentMaterialvendor: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_materialvendor_actions__WEBPACK_IMPORTED_MODULE_2__["deleteMaterialvendorSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_materialvendor_actions__WEBPACK_IMPORTED_MODULE_2__["loadMaterialvendorsSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_materialvendor_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentMaterialvendorSuccess"], (state, action) => (Object.assign({}, state, { currentMaterialvendor: action.data }))));
function reducer(state, action) {
    return materialvendorReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/features/store/merchandise/materialvendor/materialvendor.selectors.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/features/store/merchandise/materialvendor/materialvendor.selectors.ts ***!
  \***************************************************************************************/
/*! exports provided: selectAllMaterialvendors, allMaterialvendorLoaded, selectCurrentMaterialvendor, selectBymaterialID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllMaterialvendors", function() { return selectAllMaterialvendors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allMaterialvendorLoaded", function() { return allMaterialvendorLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentMaterialvendor", function() { return selectCurrentMaterialvendor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBymaterialID", function() { return selectBymaterialID; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _materialvendor_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./materialvendor.reducer */ "./src/app/features/store/merchandise/materialvendor/materialvendor.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_materialvendor_reducer__WEBPACK_IMPORTED_MODULE_1__["materialvendorFeatureKey"]);
const selectAllMaterialvendors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _materialvendor_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allMaterialvendorLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allMaterialvendorsLoaded);
const selectCurrentMaterialvendor = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentMaterialvendor);
const selectBymaterialID = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAllMaterialvendors, (material, id) => {
    const mat = material.filter(m => m.material.id == id);
    return mat;
});


/***/ }),

/***/ "./src/app/features/store/merchandise/materialvendor/materialvendor.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/store/merchandise/materialvendor/materialvendor.service.ts ***!
  \*************************************************************************************/
/*! exports provided: MaterialvendorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialvendorService", function() { return MaterialvendorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let MaterialvendorService = class MaterialvendorService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/material-vendors/`;
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
MaterialvendorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
MaterialvendorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], MaterialvendorService);



/***/ }),

/***/ "./src/app/features/store/merchandise/subcategory/index.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/store/merchandise/subcategory/index.ts ***!
  \*****************************************************************/
/*! exports provided: SubcategoryEffects, SubcategoryService, selectAllSubcategories, allSubcategoryLoaded, selectCurrentSubcategory, subcategoryFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadSubcategories, loadSubcategoriesSuccess, addSubcategory, addSubcategorySuccess, deleteSubcategory, deleteSubcategorySuccess, selectCurrentSubcategorySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subcategory_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subcategory.effects */ "./src/app/features/store/merchandise/subcategory/subcategory.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubcategoryEffects", function() { return _subcategory_effects__WEBPACK_IMPORTED_MODULE_0__["SubcategoryEffects"]; });

/* harmony import */ var _subcategory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subcategory.service */ "./src/app/features/store/merchandise/subcategory/subcategory.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubcategoryService", function() { return _subcategory_service__WEBPACK_IMPORTED_MODULE_1__["SubcategoryService"]; });

/* harmony import */ var _subcategory_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subcategory.selectors */ "./src/app/features/store/merchandise/subcategory/subcategory.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllSubcategories", function() { return _subcategory_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllSubcategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allSubcategoryLoaded", function() { return _subcategory_selectors__WEBPACK_IMPORTED_MODULE_2__["allSubcategoryLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentSubcategory", function() { return _subcategory_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentSubcategory"]; });

/* harmony import */ var _subcategory_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subcategory.reducer */ "./src/app/features/store/merchandise/subcategory/subcategory.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subcategoryFeatureKey", function() { return _subcategory_reducer__WEBPACK_IMPORTED_MODULE_3__["subcategoryFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _subcategory_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _subcategory_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _subcategory_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _subcategory_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _subcategory_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _subcategory_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _subcategory_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _subcategory_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subcategory.actions */ "./src/app/features/store/merchandise/subcategory/subcategory.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadSubcategories", function() { return _subcategory_actions__WEBPACK_IMPORTED_MODULE_4__["loadSubcategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadSubcategoriesSuccess", function() { return _subcategory_actions__WEBPACK_IMPORTED_MODULE_4__["loadSubcategoriesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addSubcategory", function() { return _subcategory_actions__WEBPACK_IMPORTED_MODULE_4__["addSubcategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addSubcategorySuccess", function() { return _subcategory_actions__WEBPACK_IMPORTED_MODULE_4__["addSubcategorySuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteSubcategory", function() { return _subcategory_actions__WEBPACK_IMPORTED_MODULE_4__["deleteSubcategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteSubcategorySuccess", function() { return _subcategory_actions__WEBPACK_IMPORTED_MODULE_4__["deleteSubcategorySuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentSubcategorySuccess", function() { return _subcategory_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentSubcategorySuccess"]; });








/***/ }),

/***/ "./src/app/features/store/merchandise/subcategory/subcategory.actions.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/store/merchandise/subcategory/subcategory.actions.ts ***!
  \*******************************************************************************/
/*! exports provided: loadSubcategories, loadSubcategoriesSuccess, addSubcategory, addSubcategorySuccess, deleteSubcategory, deleteSubcategorySuccess, selectCurrentSubcategorySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSubcategories", function() { return loadSubcategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSubcategoriesSuccess", function() { return loadSubcategoriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSubcategory", function() { return addSubcategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSubcategorySuccess", function() { return addSubcategorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSubcategory", function() { return deleteSubcategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSubcategorySuccess", function() { return deleteSubcategorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentSubcategorySuccess", function() { return selectCurrentSubcategorySuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadSubcategories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Subcategory/API] Load Subcategories');
const loadSubcategoriesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Subcategory/API] Load Subcategories Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addSubcategory = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Subcategory/API] Add Subcategory', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addSubcategorySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Subcategory/API] Add Subcategory Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteSubcategory = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Subcategory/API] Delete Subcategory', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteSubcategorySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Subcategory/API] Delete Subcategory Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentSubcategorySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Subcategory/API] Select Current Subcategory', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/merchandise/subcategory/subcategory.effects.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/store/merchandise/subcategory/subcategory.effects.ts ***!
  \*******************************************************************************/
/*! exports provided: SubcategoryEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryEffects", function() { return SubcategoryEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _subcategory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subcategory.service */ "./src/app/features/store/merchandise/subcategory/subcategory.service.ts");
/* harmony import */ var _subcategory_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subcategory.actions */ "./src/app/features/store/merchandise/subcategory/subcategory.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _subcategory_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subcategory.selectors */ "./src/app/features/store/merchandise/subcategory/subcategory.selectors.ts");








let SubcategoryEffects = class SubcategoryEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadSubcategories$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_subcategory_actions__WEBPACK_IMPORTED_MODULE_5__["loadSubcategories"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_subcategory_selectors__WEBPACK_IMPORTED_MODULE_7__["allSubcategoryLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_subcategory_actions__WEBPACK_IMPORTED_MODULE_5__["loadSubcategoriesSuccess"])({ data }))))));
        this.addSubcategory$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_subcategory_actions__WEBPACK_IMPORTED_MODULE_5__["addSubcategory"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_subcategory_actions__WEBPACK_IMPORTED_MODULE_5__["addSubcategorySuccess"])({ data }))))));
        this.deleteSubcategory$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_subcategory_actions__WEBPACK_IMPORTED_MODULE_5__["deleteSubcategory"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_subcategory_actions__WEBPACK_IMPORTED_MODULE_5__["deleteSubcategorySuccess"])({ id: data.id }))))));
    }
};
SubcategoryEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _subcategory_service__WEBPACK_IMPORTED_MODULE_4__["SubcategoryService"] }
];
SubcategoryEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _subcategory_service__WEBPACK_IMPORTED_MODULE_4__["SubcategoryService"]])
], SubcategoryEffects);



/***/ }),

/***/ "./src/app/features/store/merchandise/subcategory/subcategory.reducer.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/store/merchandise/subcategory/subcategory.reducer.ts ***!
  \*******************************************************************************/
/*! exports provided: subcategoryFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subcategoryFeatureKey", function() { return subcategoryFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _subcategory_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subcategory.actions */ "./src/app/features/store/merchandise/subcategory/subcategory.actions.ts");



const subcategoryFeatureKey = 'subcategories';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allSubcategoriesLoaded: false,
    currentSubcategory: null
});
const subcategoryReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_subcategory_actions__WEBPACK_IMPORTED_MODULE_2__["addSubcategorySuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentSubcategory: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_subcategory_actions__WEBPACK_IMPORTED_MODULE_2__["deleteSubcategorySuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_subcategory_actions__WEBPACK_IMPORTED_MODULE_2__["loadSubcategoriesSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_subcategory_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentSubcategorySuccess"], (state, action) => (Object.assign({}, state, { currentSubcategory: action.data }))));
function reducer(state, action) {
    return subcategoryReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/features/store/merchandise/subcategory/subcategory.selectors.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/store/merchandise/subcategory/subcategory.selectors.ts ***!
  \*********************************************************************************/
/*! exports provided: selectAllSubcategories, allSubcategoryLoaded, selectCurrentSubcategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllSubcategories", function() { return selectAllSubcategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allSubcategoryLoaded", function() { return allSubcategoryLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentSubcategory", function() { return selectCurrentSubcategory; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _subcategory_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subcategory.reducer */ "./src/app/features/store/merchandise/subcategory/subcategory.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_subcategory_reducer__WEBPACK_IMPORTED_MODULE_1__["subcategoryFeatureKey"]);
const selectAllSubcategories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _subcategory_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allSubcategoryLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allSubcategoriesLoaded);
const selectCurrentSubcategory = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentSubcategory);


/***/ }),

/***/ "./src/app/features/store/merchandise/subcategory/subcategory.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/store/merchandise/subcategory/subcategory.service.ts ***!
  \*******************************************************************************/
/*! exports provided: SubcategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryService", function() { return SubcategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let SubcategoryService = class SubcategoryService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/sub-categories/`;
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
SubcategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
SubcategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], SubcategoryService);



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








/***/ })

}]);
//# sourceMappingURL=features-merchandise-merchandise-module-es2015.js.map