(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-article-article-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/articlecatagorys/articlecatagorys.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/articlecatagorys/articlecatagorys.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-crud-panel \r\n    title=\"Articlecatagorys\" \r\n    icon=\"fal fa-users\" \r\n    [columns]=\"columns\"\r\n    [selectAllSelector]=\"selectAllSelector\"\r\n    [selectCurrent]=\"selectCurrent\"\r\n    [form] =\"form\"\r\n    [deleteable]=\"true\"\r\n    [editable]=\"true\"\r\n    formTitle=\"Articlecatagory\"\r\n    itemName=\"Articlecatagory\"\r\n    >\r\n\r\n    <h2 title><i class=\"fal fa-list\"></i>&nbsp;Article Categories</h2>\r\n    \r\n</smart-crud-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/articlelibrary/articlelibrary.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/articlelibrary/articlelibrary.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"panel-11\" class=\"panel\">\n  \n    <div class=\"panel-container show\" >\n        <div class=\"panel-content\">\n            <tabset>\n                <tab heading=\"Models\" >\n                    <smart-models></smart-models>\n                </tab>\n                <tab heading=\"Article\" >\n                    <smart-articles></smart-articles>\n                </tab>\n                <tab heading=\"Article Size\">\n                    <smart-articlesizes></smart-articlesizes>\n                </tab>\n                <tab heading=\"Production Lines\">\n                    <smart-productionlines></smart-productionlines>\n                </tab>\n                <tab heading=\"Materials\">\n                    <smart-articlematerials></smart-articlematerials>\n                </tab>\n                <!-- <tab heading=\"Material Descriptions\">\n                    <smart-articlematerialsubs></smart-articlematerialsubs>\n                </tab> -->\n            </tabset>\n          \n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/articlematerials/articlematerials.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/articlematerials/articlematerials.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-panel >\r\n    <h2 panelTitle><i class=\"fal fa-list\"></i>&nbsp;Materials</h2>\r\n    <button panelToolbar class=\"btn btn-primary\" (click)=\"onCreate()\"> <i class=\"fal fa-plus-circle\"></i> Create</button>\r\n    \r\n    <div panelContent>\r\n        <smart-table \r\n        [items]=\"material\" \r\n        [columns]=\"columns\" \r\n        [selectable] = \"false\" \r\n        [editable]=\"true\" \r\n        [deletable]=\"true\" \r\n        (editEvt)=\"onEdit($event)\"\r\n        (deleteEvt)=\"ondelete($event)\"\r\n        >\r\n        </smart-table>\r\n    </div>\r\n\r\n  \r\n   \r\n \r\n</smart-panel> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/articlematerials/material-form/material-form.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/articlematerials/material-form/material-form.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-modal title=\"{{title}} Material\">\n    <form [formGroup]=\"fg\" (ngSubmit)=\"onSubmit($event)\">\n        <div class=\"panel-content\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n\n                    <smart-select formControlName='client' [items]=\"clients\"   (changeEvt)=\"onChangeClient($event)\" label=\"Client\" ></smart-select>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-select formControlName='model' [items]=\"model\"  (changeEvt)=\"onChangeModel($event)\" label=\"Model\"></smart-select>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-select formControlName='article' label=\"Article\" (changeEvt)=\"onChangeArticle($event)\" [items]=\"article\"></smart-select>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-select formControlName='size' [items]=\"sizes\" label=\"Size\" (changeEvt)=\"onChangeArticlesize($event)\" name='size' ></smart-select>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-select formControlName='production_line' [items]=\"productionlines\" label=\"Production Line\"  name='name' ></smart-select>\n                </div>\n                \n                <div class=\"col-md-6\">\n                    <smart-input formControlName='serial_no' label=\"Serial No\" ></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-select formControlName='material' [items]='allmaterials' (changeEvt)=\"onChangeMaterial($event)\" label=\"Material Code\" ></smart-select>\n                </div>\n                <!-- <div class=\"col-md-6\">\n                    <smart-select formControlName='base_uom' [items]='allmaterial' label=\"Base UOM\" [name]=\"['base_uom', 'name']\"  ></smart-select>\n                </div> -->\n\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='width'  label=\"Width\" ></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='length' label=\"Length\" ></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='height' label=\"Height\" ></smart-input>\n                </div>\n                <!-- <div class=\"col-md-6\">\n                    <smart-select formControlName='type' [items]='options' (changeEvt)=\"onChangeType($event)\"  label=\"Calculation Type\" ></smart-select>\n                </div> -->\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='cutting_time' label=\"Cutting Time\" ></smart-input>\n                </div\n                >\n                <div class=\"col-md-6\">\n                    <smart-input type=\"number\" formControlName='mat_formula'   label=\"Mat Formula\" ></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input type=\"number\" formControlName='mat_extra' label=\"Material Extra\" ></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input type=\"number\" formControlName='total_formula' label=\"Total Formula\" value='total' ></smart-input>\n                </div>\n            \n               \n                <div class=\"col-md-12\">\n                    <smart-input formControlName='mat_description' label=\"Material Description\" ></smart-input>\n                </div>\n\n                <div class=\"col-md-12\">\n                    <smart-checkbox formControlName='status'  label=\"Status\"></smart-checkbox>\n                </div>\n\n            </div>\n\n\n        </div>\n        <div class=\"border-faded border-left-0 border-right-0 border-bottom-0 d-flex flex-row align-items-center\">\n            <button type=\"submit\" class=\"btn btn-primary ml-auto waves-effect waves-themed mt-2\"\n                type=\"submit\">{{title === 'Add' ? 'Save' : 'Save'}}</button>\n        </div>\n    </form>\n</smart-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/articlematerialsubs/articlematerialsubs.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/articlematerialsubs/articlematerialsubs.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-panel >\r\n    <h2 panelTitle><i class=\"fal fa-list\"></i>&nbsp;Materials Sub</h2>\r\n    <button panelToolbar class=\"btn btn-primary\" (click)=\"onCreate()\"> <i class=\"fal fa-plus-circle\"></i> Create</button>\r\n    \r\n    <div panelContent>\r\n        <smart-table \r\n        [items]=\"articlematerialsub\" \r\n        [columns]=\"columns\" \r\n        [selectable] = \"false\" \r\n        [editable]=\"true\" \r\n        [deletable]=\"true\" \r\n        (editEvt)=\"onEdit($event)\"\r\n        (deleteEvt)=\"ondelete($event)\"\r\n        >\r\n        </smart-table>\r\n    </div>\r\n\r\n  \r\n   \r\n \r\n</smart-panel> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/articlematerialsubs/sub-forms/sub-forms.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/articlematerialsubs/sub-forms/sub-forms.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-modal title=\"{{title}} Material Sub\">\n    <form [formGroup]=\"fg\" (ngSubmit)=\"onSubmit($event)\">\n        <div class=\"panel-content\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n\n                    <smart-select formControlName='client' [items]=\"clients\"   (changeEvt)=\"onChangeClient($event)\" label=\"Client\" ></smart-select>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-select formControlName='model' [items]=\"model\"  (changeEvt)=\"onChangeModel($event)\" label=\"Model\"></smart-select>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-select formControlName='article' label=\"Article\" (changeEvt)=\"onChangeArticle($event)\" [items]=\"article\"></smart-select>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-select formControlName='size' [items]=\"sizes\" label=\"Size\" (changeEvt)=\"onChangeArticlesize($event)\" name='size' ></smart-select>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-select formControlName='production_line' [items]=\"productionlines\" label=\"Production Line\" (changeEvt)=\"onChangeArticleMaterial($event)\" name='name' ></smart-select>\n                </div>\n                \n                <div class=\"col-md-6\">\n                    <smart-input formControlName='serial_no' label=\"Serial No\" ></smart-input>\n                </div>\n                <!-- <div class=\"col-md-6\">\n                    <smart-select formControlName='art_material' [items]='materials'  label=\"Material Code\" ></smart-select>\n                </div> -->\n                <!-- <div class=\"col-md-6\">\n                    <smart-select formControlName='base_uom' [items]='allmaterial' label=\"Base UOM\" [name]=\"['base_uom', 'name']\"  ></smart-select>\n                </div> -->\n\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='width'  label=\"Width\" ></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='length' label=\"Length\" ></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='height' label=\"Height\" ></smart-input>\n                </div>\n              \n                <div class=\"col-md-6\">\n                    <smart-input formControlName='mat_use_name' label=\"Marerial Usename\" ></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='no_of_pcs' label=\"No of Pcs\" ></smart-input>\n                </div>\n               \n                <div class=\"col-md-6\">\n                    <smart-input formControlName='total_material' label=\"Total Material\" ></smart-input>\n                </div>\n               \n               \n   \n             \n               \n               \n                <div class=\"col-md-12\">\n                    <smart-checkbox formControlName='status'  label=\"Status\"></smart-checkbox>\n                </div>\n\n            </div>\n\n\n        </div>\n        <div class=\"border-faded border-left-0 border-right-0 border-bottom-0 d-flex flex-row align-items-center\">\n            <button type=\"submit\" class=\"btn btn-primary ml-auto waves-effect waves-themed mt-2\"\n                type=\"submit\">{{title === 'Add' ? 'Save' : 'Update'}}</button>\n        </div>\n    </form>\n</smart-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/articlemes/articlemes.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/articlemes/articlemes.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-panel >\r\n    <h2 panelTitle><i class=\"fal fa-list\"></i>&nbsp;Article</h2>\r\n    <div panelContent>\r\n        <smart-table \r\n        [items]=\"articles\" \r\n        [columns]=\"columns2\" \r\n        [selectable] = \"false\" \r\n        [createNext]=\"true\" \r\n        createNextToolTip = \"Add\"\r\n        (createNextEvt)=\"onCreate($event)\"\r\n        >\r\n        </smart-table>\r\n    </div>\r\n \r\n</smart-panel> \r\n<smart-panel >\r\n    <h2 panelTitle><i class=\"fal fa-list\"></i>&nbsp;Article ME</h2>\r\n    <!-- <button panelToolbar class=\"btn btn-primary\" (click)=\"onCreate()\"> <i class=\"fal fa-plus-circle\"></i> Create</button> -->\r\n    \r\n    <div panelContent>\r\n        <smart-table \r\n        [items]=\"articleme\" \r\n        [columns]=\"columns\" \r\n        [selectable] = \"false\" \r\n        [editable]=\"true\" \r\n        [deletable]=\"true\" \r\n        (editEvt)=\"onEdit($event)\"\r\n        (deleteEvt)=\"ondelete($event)\"\r\n        >\r\n        </smart-table>\r\n    </div>\r\n\r\n  \r\n   \r\n \r\n</smart-panel> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/articlemes/me-form/me-form.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/articlemes/me-form/me-form.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-modal title=\"{{title}} Article ME\">\n    <form [formGroup]=\"fg\" (ngSubmit)=\"onSubmit($event)\">\n        <div class=\"panel-content\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n\n                    <smart-select formControlName='client' [items]=\"clients\"   (changeEvt)=\"onChangeClients($event)\" label=\"Client\" ></smart-select>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-select formControlName='model' [items]=\"model\"  (changeEvt)=\"onChangeModels($event)\" label=\"Model\" name='name'></smart-select>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-select formControlName='article' label=\"Article\"  [items]=\"article\"></smart-select>\n                </div>\n               \n                <div class=\"col-md-12\">\n                    <smart-input formControlName='gsd_target' label=\"GSD Target\" ></smart-input>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-input formControlName='me_target' label=\"ME Target\" ></smart-input>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-input formControlName='packing_target' label=\"Packing Target\" ></smart-input>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-input formControlName='sam_forming' label=\"SAM Forming\" ></smart-input>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-input formControlName='sam_packing' label=\"SAM Packing\" ></smart-input>\n                </div>\n               \n               \n                <div class=\"col-md-12\">\n                    <smart-checkbox formControlName='status'  label=\"Status\"></smart-checkbox>\n                </div>\n\n            </div>\n\n\n        </div>\n        <div class=\"border-faded border-left-0 border-right-0 border-bottom-0 d-flex flex-row align-items-center\">\n            <button type=\"submit\" class=\"btn btn-primary ml-auto waves-effect waves-themed mt-2\"\n                type=\"submit\">{{title === 'Add' ? 'Save' : 'Update'}}</button>\n        </div>\n    </form>\n</smart-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/articleqcas/articleqcas.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/articleqcas/articleqcas.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-panel >\r\n    <h2 panelTitle><i class=\"fal fa-list\"></i>&nbsp;Article Szes</h2>\r\n\r\n    \r\n    <div panelContent>\r\n        <smart-table \r\n        [items]=\"articlesize\" \r\n        [columns]=\"columns2\" \r\n        [selectable] = \"false\" \r\n        [createNext]=\"true\" \r\n        createNextToolTip = \"Add\"\r\n        (createNextEvt)=\"onCreate($event)\"\r\n        >\r\n        </smart-table>\r\n    </div>\r\n</smart-panel> \r\n<smart-panel >\r\n    <h2 panelTitle><i class=\"fal fa-list\"></i>&nbsp;Article QC Attributes</h2>\r\n    \r\n    <div panelContent>\r\n        <smart-table \r\n        [items]=\"articleqca\" \r\n        [columns]=\"columns\" \r\n        [selectable] = \"false\" \r\n        [editable]=\"true\" \r\n        [deletable]=\"true\" \r\n        (editEvt)=\"onEdit($event)\"\r\n        (deleteEvt)=\"ondelete($event)\"\r\n        >\r\n        </smart-table>\r\n    </div>\r\n</smart-panel> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/articleqcas/qca-form/qca-form.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/articleqcas/qca-form/qca-form.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-modal title=\"{{title}} Article QC Attributes\">\n    <form [formGroup]=\"fg\" (ngSubmit)=\"onSubmit($event)\">\n        <div class=\"panel-content\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n\n                    <smart-select formControlName='client' [items]=\"clients\"   (changeEvt)=\"onChangeClients($event)\" label=\"Client\" ></smart-select>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-select formControlName='model' [items]=\"model\"  (changeEvt)=\"onChangeModels($event)\" label=\"Model\" name='name'></smart-select>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-select formControlName='article' label=\"Article\"  [items]=\"article\" (changeEvt)=\"onChangeArticle($event)\"></smart-select>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-select formControlName='size' label=\"Size\"  [items]=\"sizes\" name='size'></smart-select>\n                </div>\n               \n               \n                <div class=\"col-md-12\">\n                    <smart-input formControlName='name' label=\" Name\" ></smart-input>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-input formControlName='start_value' label=\"Start Value\" ></smart-input>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-input formControlName='end_value' label=\"End Value \" ></smart-input>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-input formControlName='description' label=\"Description\" ></smart-input>\n                </div>\n               <div class=\"col-md-12\">\n                    <smart-checkbox formControlName='status'  label=\"Status\"></smart-checkbox>\n                </div>\n\n            </div>\n\n\n        </div>\n        <div class=\"border-faded border-left-0 border-right-0 border-bottom-0 d-flex flex-row align-items-center\">\n            <button type=\"submit\" class=\"btn btn-primary ml-auto waves-effect waves-themed mt-2\"\n                type=\"submit\">{{title === 'Add' ? 'Save' : 'Update'}}</button>\n        </div>\n    </form>\n</smart-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/articlerates/articlerates.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/articlerates/articlerates.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-panel >\r\n    <h2 panelTitle><i class=\"fal fa-list\"></i>&nbsp;Article Size</h2>\r\n    \r\n    <div panelContent>\r\n        <smart-table \r\n        [items]=\"articlesize\" \r\n        [columns]=\"columns2\" \r\n        [selectable] = \"false\" \r\n        [createNext]=\"true\" \r\n        createNextToolTip = \"Add\"\r\n        (createNextEvt)=\"onCreate($event)\"\r\n        >\r\n        </smart-table>\r\n    </div>\r\n</smart-panel> \r\n<smart-panel >\r\n    <h2 panelTitle><i class=\"fal fa-list\"></i>&nbsp;Article Size Rates</h2>\r\n   \r\n    \r\n    <div panelContent>\r\n        <smart-table \r\n        [items]=\"articlerate\" \r\n        [columns]=\"columns\" \r\n        [selectable] = \"false\" \r\n        [editable]=\"true\" \r\n        [deletable]=\"true\" \r\n        (editEvt)=\"onEdit($event)\"\r\n        (deleteEvt)=\"ondelete($event)\"\r\n        >\r\n        </smart-table>\r\n    </div>\r\n\r\n  \r\n   \r\n \r\n</smart-panel> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/articlerates/rate-form/rate-form.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/articlerates/rate-form/rate-form.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-modal title=\"{{title}} Article Size Rates\">\n    <form [formGroup]=\"fg\" (ngSubmit)=\"onSubmit($event)\">\n        <div class=\"panel-content\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n\n                    <smart-select formControlName='client' [items]=\"clients\"   (changeEvt)=\"onChangeClients($event)\" label=\"Client\" ></smart-select>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-select formControlName='model' [items]=\"model\"  (changeEvt)=\"onChangeModels($event)\" label=\"Model\" name='name'></smart-select>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-select formControlName='article' label=\"Article\"  [items]=\"article\" (changeEvt)=\"onChangeArticle($event)\"></smart-select>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-select formControlName='size' label=\"Size\"  [items]=\"sizes\" name='size'></smart-select>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-select formControlName='carton' label=\"Carton\"  [items]=\"carton\" ></smart-select>\n                </div>\n               \n                <div class=\"col-md-12\">\n                    <smart-input formControlName='name' label=\"Size Rate Name\" ></smart-input>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-input formControlName='charges' label=\"Charges\" ></smart-input>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-input formControlName='other_charges' label=\"Other Charges\" ></smart-input>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-input formControlName='description' label=\"Description\" ></smart-input>\n                </div>\n               <div class=\"col-md-12\">\n                    <smart-checkbox formControlName='status'  label=\"Status\"></smart-checkbox>\n                </div>\n\n            </div>\n\n\n        </div>\n        <div class=\"border-faded border-left-0 border-right-0 border-bottom-0 d-flex flex-row align-items-center\">\n            <button type=\"submit\" class=\"btn btn-primary ml-auto waves-effect waves-themed mt-2\"\n                type=\"submit\">{{title === 'Add' ? 'Save' : 'Update'}}</button>\n        </div>\n    </form>\n</smart-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/articles/article-from/article-from.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/articles/article-from/article-from.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-modal title=\"{{title}} Article\">\n    <form [formGroup]=\"fg\" (ngSubmit)=\"onSubmit($event)\">\n        <div class=\"panel-content\">\n            <div class=\"row\">\n                <div class=\"col-md-9\">\n\n                    <smart-select formControlName='client'  [items]=\"clients\"   (changeEvt)=\"onChange($event)\" label=\"Client\" ></smart-select>\n                    <smart-select formControlName='model' [items]=\"model\" label=\"Model\"></smart-select>\n                    <smart-input formControlName='name' label=\"Name\"></smart-input>\n                \n                </div>\n                <div class=\"col-md-3 mb-3 \">\n                    <label class=\"form-label\">Article Image<span class=\"text-danger\">*</span> </label>\n                    <img [src]=\"imageurl\" style=\"height: 130px; width: 130px;\"><br>\n                    <div class=\"custom-file\">\n                        <input type=\"file\" class=\"custom-file-input\" name=\"Image\" id=\"image\" required\n                            (change)=\"handlefileinput($event.target.files)\" required id=\"image\">\n                        <label class=\"custom-file-label\" for=\"image\">Choose file</label>\n                    </div>\n                </div>\n               \n                <div class=\"col-md-6\">\n                    <smart-input formControlName='art_number' label=\"Article Number\" ></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='color' label=\"Color\"></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-select formControlName='first_season' [items]=\"season\" label=\"First Season\"></smart-select>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='description' label=\"Description\"></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='ready_date' type=\"date\" label=\" By Ready Date\"></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='mer_date' type=\"date\" label=\"MER Date\"></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='ready_closing_date' type=\"date\" label=\"Ready Closing Date\"></smart-input>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-checkbox formControlName='ready_status'  label=\"Ready Status\"></smart-checkbox>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-checkbox formControlName='mer_status'  label=\"MER Status\"></smart-checkbox>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-checkbox formControlName='status'  label=\"Status\"></smart-checkbox>\n                </div>\n\n            </div>\n\n\n        </div>\n\n\n\n        <div class=\"border-faded border-left-0 border-right-0 border-bottom-0 d-flex flex-row align-items-center\">\n            <button type=\"submit\" class=\"btn btn-primary ml-auto waves-effect waves-themed mt-2\"\n                type=\"submit\">{{title === 'Add' ? 'Save' : 'Save'}}</button>\n        </div>\n    </form>\n</smart-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/articles/articles.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/articles/articles.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-panel >\r\n    <h2 panelTitle><i class=\"fal fa-list\"></i>&nbsp;Article</h2>\r\n    <button panelToolbar class=\"btn btn-primary\" (click)=\"onCreate()\"> <i class=\"fal fa-plus-circle\"></i> Create</button>\r\n    \r\n    <div panelContent>\r\n        <smart-table \r\n        [items]=\"article\" \r\n        [columns]=\"columns\" \r\n        [selectable] = \"false\" \r\n        [editable]=\"true\" \r\n        [deletable]=\"true\" \r\n        [createNext]=\"true\" \r\n        (editEvt)=\"onEdit($event)\"\r\n        (deleteEvt)=\"ondelete($event)\"\r\n        createNextToolTip = \"Create article size\"\r\n        (createNextEvt)=\"oncreateartsize($event)\"\r\n        >\r\n        </smart-table>\r\n    </div>\r\n\r\n   \r\n \r\n</smart-panel> \r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/articlesizes/articlesize-form/articlesize-form.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/articlesizes/articlesize-form/articlesize-form.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-modal title=\"{{title}} Article Size\">\n    <form [formGroup]=\"fg\" (ngSubmit)=\"onSubmit($event)\">\n        <div class=\"panel-content\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n\n                    <smart-select formControlName='client' [items]=\"clients\"   (changeEvt)=\"onChangeClient($event)\" label=\"Client\" ></smart-select>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-select formControlName='model' [items]=\"model\"  (changeEvt)=\"onChangeModel($event)\"label=\"Model\"></smart-select>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-select formControlName='article' label=\"Article\" [items]=\"articles\"></smart-select>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='size' label=\"Size\" ></smart-input>\n                </div>\n                <div class=\"col-md-4\">\n                    <smart-select formControlName='carton' label=\"Carton\" [items]=\"carton\" ></smart-select>\n                </div>\n                <div class=\"col-md-4\">\n                    <smart-input formControlName='qty_per_carton' type=\"number\" label=\"Qty per Carton\"></smart-input>\n                </div>\n                <div class=\"col-md-4\">\n                    <smart-input formControlName='unit_price' type=\"number\" label=\"Unit Price\"></smart-input>\n                </div>\n                <div class=\"col-md-4\">\n                    <smart-input formControlName='sale_price'  type=\"number\" label=\"Sale Price\"></smart-input>\n                </div>\n                <div class=\"col-md-4\">\n                    <smart-select formControlName='base_uom' [items]=\"uom\" label=\"Base UOM\"></smart-select>\n                </div>\n                <div class=\"col-md-4\">\n                    <smart-select formControlName='weight_uom' [items]=\"uom\" label=\"Weight UOM\"></smart-select>\n                </div>\n                <div class=\"col-md-4\">\n                    <smart-input formControlName='dimension'  label=\"Dimension\"></smart-input>\n                </div>\n                <div class=\"col-md-4\">\n                    <smart-input formControlName='tac_time'  label=\"Tac Time\"></smart-input>\n                </div>\n                \n                <div class=\"col-md-4\">\n                    <smart-input formControlName='reference'  label=\"Internal Reference\"></smart-input>\n                </div>\n                <div class=\"col-md-4\">\n                    <smart-input formControlName='net_weight'  type=\"number\" label=\"Net Weight\"></smart-input>\n                </div>\n                <div class=\"col-md-4\">\n                    <smart-input formControlName='net_net_weight' type=\"number\" label=\"Net Net Weight(kgs)\"></smart-input>\n                </div>\n                <div class=\"col-md-4\">\n                    <smart-input formControlName='barcode'  label=\" Internal Barcode\"></smart-input>\n                </div>\n                <div class=\"col-md-4\">\n                    <smart-input formControlName='ean_barcode'  label=\"EAN Barcode\"></smart-input>\n                </div>\n                <div class=\"col-md-4\">\n                    <smart-input formControlName='upc_barcode'  label=\"UPC Barcode\"></smart-input>\n                </div>\n                <div class=\"col-md-4\">\n                    <smart-input formControlName='any_other_barcode'  label=\"Any other barcode\"></smart-input>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-input formControlName='description'  label=\"Description\"></smart-input>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-checkbox formControlName='status'  label=\"Status\"></smart-checkbox>\n                </div>\n\n            </div>\n\n\n        </div>\n        <div class=\"border-faded border-left-0 border-right-0 border-bottom-0 d-flex flex-row align-items-center\">\n            <button type=\"submit\" class=\"btn btn-primary ml-auto waves-effect waves-themed mt-2\"\n                type=\"submit\">{{title === 'Add' ? 'Save' : 'Save'}}</button>\n        </div>\n    </form>\n</smart-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/articlesizes/articlesizes.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/articlesizes/articlesizes.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-panel >\r\n    <h2 panelTitle><i class=\"fal fa-list\"></i>&nbsp;Article Size</h2>\r\n    <button panelToolbar class=\"btn btn-primary\" (click)=\"onCreate()\"> <i class=\"fal fa-plus-circle\"></i> Create</button>\r\n    \r\n    <div panelContent>\r\n        <smart-table \r\n        [items]=\"articlesize\" \r\n        [columns]=\"columns\" \r\n        [selectable] = \"false\" \r\n        [editable]=\"true\" \r\n        [deletable]=\"true\" \r\n        [createNext]=\"true\" \r\n        (editEvt)=\"onEdit($event)\"\r\n        (deleteEvt)=\"ondelete($event)\"\r\n        createNextToolTip = \"Create Production Lines\"\r\n        (createNextEvt)=\"oncreateprdlines($event)\"\r\n        >\r\n        </smart-table>\r\n    </div>\r\n\r\n  \r\n\r\n \r\n</smart-panel> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/cartons/cartons.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/cartons/cartons.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-crud-panel \r\n    title=\"Cartons\" \r\n    icon=\"fal fa-users\" \r\n    [columns]=\"columns\"\r\n    [selectAllSelector]=\"selectAllSelector\"\r\n    [selectCurrent]=\"selectCurrent\"\r\n    [form] =\"form\"\r\n    [deleteable]=\"true\"\r\n    [editable]=\"true\"\r\n    formTitle=\"Carton\"\r\n    itemName=\"Carton\"\r\n    >\r\n\r\n    <h2 title><i class=\"fal fa-list\"></i>&nbsp;Carton</h2>\r\n    \r\n</smart-crud-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/models/model-form/model-form.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/models/model-form/model-form.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-modal title=\"{{title}} Models\">\n    <form [formGroup]=\"fg\" (ngSubmit)=\"onSubmit($event)\">\n        <div class=\"panel-content\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n\n                    <smart-select formControlName='client' [items]=\"clients\"    label=\"Client\" ></smart-select>\n                </div>\n               \n                <div class=\"col-md-6\">\n                    <smart-input formControlName='name' label=\" Model Name\" ></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='code' label=\"Model Code\" ></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n\n                    <smart-select formControlName='category' [items]=\"category\"    label=\"Category\" ></smart-select>\n                </div>\n                <div class=\"col-md-6\">\n\n                    <smart-select formControlName='season' [items]=\"season\"    label=\"Season\" ></smart-select>\n                </div>\n                <div class=\"col-md-6\">\n\n                    <smart-select formControlName='factory' [items]=\"factorycode\"  label=\"Factory Code\" ></smart-select>\n                </div>\n                <div class=\"col-md-6\">\n\n                    <smart-select formControlName='range' [items]=\"range\"    label=\"Range\" ></smart-select>\n                </div>\n                \n                <div class=\"col-md-6\">\n                    <smart-input formControlName='working_no' label=\"Working No\" ></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='event_desc' label=\"Event Description\" ></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='ad_path' type=\"file\" label=\"AD Path\" ></smart-input>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-input formControlName='description'  label=\"Description\" ></smart-input>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-checkbox formControlName='edit_status'  label=\"Edit Status\"></smart-checkbox>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-checkbox formControlName='status'  label=\"Status\"></smart-checkbox>\n                </div>\n\n            </div>\n\n\n        </div>\n        <div class=\"border-faded border-left-0 border-right-0 border-bottom-0 d-flex flex-row align-items-center\">\n            <button type=\"submit\" class=\"btn btn-primary ml-auto waves-effect waves-themed mt-2\"\n                type=\"submit\">{{title === 'Add' ? 'Save' : 'Save'}}</button>\n        </div>\n    </form>\n</smart-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/models/models.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/models/models.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-panel >\r\n    <h2 panelTitle><i class=\"fal fa-list\"></i>&nbsp;Models</h2>\r\n    <button panelToolbar class=\"btn btn-primary\" (click)=\"onCreate()\"> <i class=\"fal fa-plus-circle\"></i> Create</button>\r\n    \r\n    <div panelContent>\r\n        <smart-table \r\n        [items]=\"models\" \r\n        [columns]=\"columns\" \r\n        [selectable] = \"false\" \r\n        [editable]=\"true\" \r\n        [deletable]=\"true\" \r\n        [createNext]=\"true\" \r\n        (editEvt)=\"onEdit($event)\"\r\n        (deleteEvt)=\"ondelete($event)\"\r\n        createNextToolTip = \"Add Article\"\r\n        (createNextEvt)=\"oncreateMaterial($event)\"\r\n        >\r\n        </smart-table>\r\n    </div>\r\n\r\n  \r\n   \r\n \r\n</smart-panel> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/productionlines/prdlines-form/prdlines-form.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/productionlines/prdlines-form/prdlines-form.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-modal title=\"{{title}} Production Lines\">\n    <form [formGroup]=\"fg\" (ngSubmit)=\"onSubmit($event)\">\n        <div class=\"panel-content\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n\n                    <smart-select formControlName='client' [items]=\"clients\"   (changeEvt)=\"onChangeClient($event)\" label=\"Client\" ></smart-select>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-select formControlName='model' [items]=\"model\"  (changeEvt)=\"onChangeModel($event)\" label=\"Model\"></smart-select>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-select formControlName='article' label=\"Article\" (changeEvt)=\"onChangeArticle($event)\" [items]=\"article\"></smart-select>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-select formControlName='size' [items]=\"sizes\" label=\"Size\" name='size' ></smart-select>\n                </div>\n                <div class=\"col-md-12\">\n                    <smart-input formControlName='name' label=\"Name\" ></smart-input>\n                </div>\n               \n               \n                <div class=\"col-md-12\">\n                    <smart-checkbox formControlName='status'  label=\"Status\"></smart-checkbox>\n                </div>\n\n            </div>\n\n\n        </div>\n        <div class=\"border-faded border-left-0 border-right-0 border-bottom-0 d-flex flex-row align-items-center\">\n            <button type=\"submit\" class=\"btn btn-primary ml-auto waves-effect waves-themed mt-2\"\n                type=\"submit\">{{title === 'Add' ? 'Save' : 'Save'}}</button>\n        </div>\n    </form>\n</smart-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/productionlines/productionlines.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/productionlines/productionlines.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-panel >\r\n    <h2 panelTitle><i class=\"fal fa-list\"></i>&nbsp;Production Lines</h2>\r\n    <button panelToolbar class=\"btn btn-primary\" (click)=\"onCreate()\"> <i class=\"fal fa-plus-circle\"></i> Create</button>\r\n    \r\n    <div panelContent>\r\n        <smart-table \r\n        [items]=\"productionline\" \r\n        [columns]=\"columns\" \r\n        [selectable] = \"false\" \r\n        [editable]=\"true\" \r\n        [deletable]=\"true\" \r\n        [createNext]=\"true\" \r\n        (editEvt)=\"onEdit($event)\"\r\n        (deleteEvt)=\"ondelete($event)\"\r\n        createNextToolTip = \"Add Material\"\r\n        (createNextEvt)=\"oncreateMaterial($event)\"\r\n        >\r\n        </smart-table>\r\n    </div>\r\n\r\n  \r\n   \r\n \r\n</smart-panel> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/ranges/ranges.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/ranges/ranges.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-crud-panel \r\n    title=\"Ranges\" \r\n    icon=\"fal fa-users\" \r\n    [columns]=\"columns\"\r\n    [selectAllSelector]=\"selectAllSelector\"\r\n    [selectCurrent]=\"selectCurrent\"\r\n    [form] =\"form\"\r\n    [deleteable]=\"true\"\r\n    [editable]=\"true\"\r\n    formTitle=\"Range\"\r\n    itemName=\"Range\"\r\n    >\r\n\r\n    <h2 title><i class=\"fal fa-list\"></i>&nbsp;Range</h2>\r\n    \r\n</smart-crud-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/article/seasons/seasons.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/article/seasons/seasons.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-crud-panel \r\n    title=\"Seasons\" \r\n    icon=\"fal fa-users\" \r\n    [columns]=\"columns\"\r\n    [selectAllSelector]=\"selectAllSelector\"\r\n    [selectCurrent]=\"selectCurrent\"\r\n    [form] =\"form\"\r\n    [deleteable]=\"true\"\r\n    [editable]=\"true\"\r\n    formTitle=\"Season\"\r\n    itemName=\"Season\"\r\n    >\r\n\r\n    <h2 title><i class=\"fal fa-list\"></i>&nbsp;Season</h2>\r\n    \r\n</smart-crud-panel>"

/***/ }),

/***/ "./src/app/features/article/article.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/article/article.module.ts ***!
  \****************************************************/
/*! exports provided: ArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModule", function() { return ArticleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_custom_tables_custom_tables_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/custom-tables/custom-tables.module */ "./src/app/shared/custom-tables/custom-tables.module.ts");
/* harmony import */ var _shared_dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/dialogs/dialogs.module */ "./src/app/shared/dialogs/dialogs.module.ts");
/* harmony import */ var _shared_forms_forms_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/forms/forms.module */ "./src/app/shared/forms/forms.module.ts");
/* harmony import */ var _articleqcas_articleqcas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./articleqcas/articleqcas.component */ "./src/app/features/article/articleqcas/articleqcas.component.ts");
/* harmony import */ var _articlematerialsubs_articlematerialsubs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./articlematerialsubs/articlematerialsubs.component */ "./src/app/features/article/articlematerialsubs/articlematerialsubs.component.ts");
/* harmony import */ var _articlerates_articlerates_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./articlerates/articlerates.component */ "./src/app/features/article/articlerates/articlerates.component.ts");
/* harmony import */ var _articlematerials_articlematerials_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./articlematerials/articlematerials.component */ "./src/app/features/article/articlematerials/articlematerials.component.ts");
/* harmony import */ var _productionlines_productionlines_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./productionlines/productionlines.component */ "./src/app/features/article/productionlines/productionlines.component.ts");
/* harmony import */ var _articlesizes_articlesizes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./articlesizes/articlesizes.component */ "./src/app/features/article/articlesizes/articlesizes.component.ts");
/* harmony import */ var _articlemes_articlemes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./articlemes/articlemes.component */ "./src/app/features/article/articlemes/articlemes.component.ts");
/* harmony import */ var _articles_articles_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./articles/articles.component */ "./src/app/features/article/articles/articles.component.ts");
/* harmony import */ var _cartons_cartons_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cartons/cartons.component */ "./src/app/features/article/cartons/cartons.component.ts");
/* harmony import */ var _models_models_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./models/models.component */ "./src/app/features/article/models/models.component.ts");
/* harmony import */ var _seasons_seasons_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./seasons/seasons.component */ "./src/app/features/article/seasons/seasons.component.ts");
/* harmony import */ var _ranges_ranges_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ranges/ranges.component */ "./src/app/features/article/ranges/ranges.component.ts");
/* harmony import */ var _articlecatagorys_articlecatagorys_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./articlecatagorys/articlecatagorys.component */ "./src/app/features/article/articlecatagorys/articlecatagorys.component.ts");
/* harmony import */ var src_app_features_store_article_articleqca__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/features/store/article/articleqca */ "./src/app/features/store/article/articleqca/index.ts");
/* harmony import */ var src_app_features_store_article_articlematerialsub__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/features/store/article/articlematerialsub */ "./src/app/features/store/article/articlematerialsub/index.ts");
/* harmony import */ var src_app_features_store_article_articlerate__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/features/store/article/articlerate */ "./src/app/features/store/article/articlerate/index.ts");
/* harmony import */ var src_app_features_store_article_articlematerial__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/features/store/article/articlematerial */ "./src/app/features/store/article/articlematerial/index.ts");
/* harmony import */ var src_app_features_store_article_productionline__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/features/store/article/productionline */ "./src/app/features/store/article/productionline/index.ts");
/* harmony import */ var src_app_features_store_article_articlesize__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/features/store/article/articlesize */ "./src/app/features/store/article/articlesize/index.ts");
/* harmony import */ var src_app_features_store_article_articleme__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/features/store/article/articleme */ "./src/app/features/store/article/articleme/index.ts");
/* harmony import */ var src_app_features_store_article_article__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/features/store/article/article */ "./src/app/features/store/article/article/index.ts");
/* harmony import */ var src_app_features_store_article_carton__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/features/store/article/carton */ "./src/app/features/store/article/carton/index.ts");
/* harmony import */ var src_app_features_store_article_model__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! src/app/features/store/article/model */ "./src/app/features/store/article/model/index.ts");
/* harmony import */ var src_app_features_store_article_season__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! src/app/features/store/article/season */ "./src/app/features/store/article/season/index.ts");
/* harmony import */ var src_app_features_store_article_range__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! src/app/features/store/article/range */ "./src/app/features/store/article/range/index.ts");
/* harmony import */ var src_app_features_store_article_articlecatagory__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! src/app/features/store/article/articlecatagory */ "./src/app/features/store/article/articlecatagory/index.ts");
/* harmony import */ var src_app_features_store_customer_client__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! src/app/features/store/customer/client */ "./src/app/features/store/customer/client/index.ts");
/* harmony import */ var src_app_features_store_settings_factorycode__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! src/app/features/store/settings/factorycode */ "./src/app/features/store/settings/factorycode/index.ts");
/* harmony import */ var src_app_features_store_settings_uom__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! src/app/features/store/settings/uom */ "./src/app/features/store/settings/uom/index.ts");
/* harmony import */ var src_app_features_store_merchandise_material__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! src/app/features/store/merchandise/material */ "./src/app/features/store/merchandise/material/index.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _articles_article_from_article_from_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./articles/article-from/article-from.component */ "./src/app/features/article/articles/article-from/article-from.component.ts");
/* harmony import */ var _articlelibrary_articlelibrary_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./articlelibrary/articlelibrary.component */ "./src/app/features/article/articlelibrary/articlelibrary.component.ts");
/* harmony import */ var _articlesizes_articlesize_form_articlesize_form_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./articlesizes/articlesize-form/articlesize-form.component */ "./src/app/features/article/articlesizes/articlesize-form/articlesize-form.component.ts");
/* harmony import */ var _productionlines_prdlines_form_prdlines_form_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./productionlines/prdlines-form/prdlines-form.component */ "./src/app/features/article/productionlines/prdlines-form/prdlines-form.component.ts");
/* harmony import */ var _articlematerials_material_form_material_form_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./articlematerials/material-form/material-form.component */ "./src/app/features/article/articlematerials/material-form/material-form.component.ts");
/* harmony import */ var _articlemes_me_form_me_form_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./articlemes/me-form/me-form.component */ "./src/app/features/article/articlemes/me-form/me-form.component.ts");
/* harmony import */ var _models_model_form_model_form_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./models/model-form/model-form.component */ "./src/app/features/article/models/model-form/model-form.component.ts");
/* harmony import */ var _articlematerialsubs_sub_forms_sub_forms_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./articlematerialsubs/sub-forms/sub-forms.component */ "./src/app/features/article/articlematerialsubs/sub-forms/sub-forms.component.ts");
/* harmony import */ var _articlerates_rate_form_rate_form_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./articlerates/rate-form/rate-form.component */ "./src/app/features/article/articlerates/rate-form/rate-form.component.ts");
/* harmony import */ var _articleqcas_qca_form_qca_form_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./articleqcas/qca-form/qca-form.component */ "./src/app/features/article/articleqcas/qca-form/qca-form.component.ts");









//component imports













//store imports




























var ArticleModule = /** @class */ (function () {
    function ArticleModule() {
    }
    ArticleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_articlecatagorys_articlecatagorys_component__WEBPACK_IMPORTED_MODULE_21__["ArticlecatagorysComponent"], _ranges_ranges_component__WEBPACK_IMPORTED_MODULE_20__["RangesComponent"], _seasons_seasons_component__WEBPACK_IMPORTED_MODULE_19__["SeasonsComponent"], _models_models_component__WEBPACK_IMPORTED_MODULE_18__["ModelsComponent"], _cartons_cartons_component__WEBPACK_IMPORTED_MODULE_17__["CartonsComponent"], _articles_articles_component__WEBPACK_IMPORTED_MODULE_16__["ArticlesComponent"], _articlemes_articlemes_component__WEBPACK_IMPORTED_MODULE_15__["ArticlemesComponent"], _articlesizes_articlesizes_component__WEBPACK_IMPORTED_MODULE_14__["ArticlesizesComponent"], _articles_article_from_article_from_component__WEBPACK_IMPORTED_MODULE_40__["ArticleFromComponent"], _articlelibrary_articlelibrary_component__WEBPACK_IMPORTED_MODULE_41__["ArticlelibraryComponent"], _articlesizes_articlesize_form_articlesize_form_component__WEBPACK_IMPORTED_MODULE_42__["ArticlesizeFormComponent"], _productionlines_productionlines_component__WEBPACK_IMPORTED_MODULE_13__["ProductionlinesComponent"], _productionlines_prdlines_form_prdlines_form_component__WEBPACK_IMPORTED_MODULE_43__["PrdlinesFormComponent"], _articlematerials_articlematerials_component__WEBPACK_IMPORTED_MODULE_12__["ArticlematerialsComponent"], _articlematerials_material_form_material_form_component__WEBPACK_IMPORTED_MODULE_44__["MaterialFormComponent"], _articlemes_me_form_me_form_component__WEBPACK_IMPORTED_MODULE_45__["MeFormComponent"], _articlerates_articlerates_component__WEBPACK_IMPORTED_MODULE_11__["ArticleratesComponent"], _models_model_form_model_form_component__WEBPACK_IMPORTED_MODULE_46__["ModelFormComponent"], _articlematerialsubs_articlematerialsubs_component__WEBPACK_IMPORTED_MODULE_10__["ArticlematerialsubsComponent"], _articlematerialsubs_sub_forms_sub_forms_component__WEBPACK_IMPORTED_MODULE_47__["SubFormsComponent"], _articlerates_rate_form_rate_form_component__WEBPACK_IMPORTED_MODULE_48__["RateFormComponent"], _articleqcas_articleqcas_component__WEBPACK_IMPORTED_MODULE_9__["ArticleqcasComponent"], _articleqcas_qca_form_qca_form_component__WEBPACK_IMPORTED_MODULE_49__["QcaFormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_39__["SharedModule"],
                _shared_custom_tables_custom_tables_module__WEBPACK_IMPORTED_MODULE_6__["CustomTablesModule"],
                _shared_dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_7__["DialogsModule"],
                _shared_forms_forms_module__WEBPACK_IMPORTED_MODULE_8__["CustomFormsModule"],
                //store for feature
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(src_app_features_store_article_articleqca__WEBPACK_IMPORTED_MODULE_22__["articleqcaFeatureKey"], src_app_features_store_article_articleqca__WEBPACK_IMPORTED_MODULE_22__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(src_app_features_store_article_articlematerialsub__WEBPACK_IMPORTED_MODULE_23__["articlematerialsubFeatureKey"], src_app_features_store_article_articlematerialsub__WEBPACK_IMPORTED_MODULE_23__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(src_app_features_store_article_articlerate__WEBPACK_IMPORTED_MODULE_24__["articlerateFeatureKey"], src_app_features_store_article_articlerate__WEBPACK_IMPORTED_MODULE_24__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(src_app_features_store_article_articlematerial__WEBPACK_IMPORTED_MODULE_25__["articlematerialFeatureKey"], src_app_features_store_article_articlematerial__WEBPACK_IMPORTED_MODULE_25__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(src_app_features_store_article_productionline__WEBPACK_IMPORTED_MODULE_26__["productionlineFeatureKey"], src_app_features_store_article_productionline__WEBPACK_IMPORTED_MODULE_26__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(src_app_features_store_article_articlesize__WEBPACK_IMPORTED_MODULE_27__["articlesizeFeatureKey"], src_app_features_store_article_articlesize__WEBPACK_IMPORTED_MODULE_27__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(src_app_features_store_article_articleme__WEBPACK_IMPORTED_MODULE_28__["articlemeFeatureKey"], src_app_features_store_article_articleme__WEBPACK_IMPORTED_MODULE_28__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(src_app_features_store_article_article__WEBPACK_IMPORTED_MODULE_29__["articleFeatureKey"], src_app_features_store_article_article__WEBPACK_IMPORTED_MODULE_29__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(src_app_features_store_article_carton__WEBPACK_IMPORTED_MODULE_30__["cartonFeatureKey"], src_app_features_store_article_carton__WEBPACK_IMPORTED_MODULE_30__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(src_app_features_store_article_model__WEBPACK_IMPORTED_MODULE_31__["modelFeatureKey"], src_app_features_store_article_model__WEBPACK_IMPORTED_MODULE_31__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(src_app_features_store_article_season__WEBPACK_IMPORTED_MODULE_32__["seasonFeatureKey"], src_app_features_store_article_season__WEBPACK_IMPORTED_MODULE_32__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(src_app_features_store_article_range__WEBPACK_IMPORTED_MODULE_33__["rangeFeatureKey"], src_app_features_store_article_range__WEBPACK_IMPORTED_MODULE_33__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(src_app_features_store_article_articlecatagory__WEBPACK_IMPORTED_MODULE_34__["articlecatagoryFeatureKey"], src_app_features_store_article_articlecatagory__WEBPACK_IMPORTED_MODULE_34__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(src_app_features_store_customer_client__WEBPACK_IMPORTED_MODULE_35__["clientFeatureKey"], src_app_features_store_customer_client__WEBPACK_IMPORTED_MODULE_35__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(src_app_features_store_settings_factorycode__WEBPACK_IMPORTED_MODULE_36__["factorycodeFeatureKey"], src_app_features_store_settings_factorycode__WEBPACK_IMPORTED_MODULE_36__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(src_app_features_store_settings_uom__WEBPACK_IMPORTED_MODULE_37__["uomFeatureKey"], src_app_features_store_settings_uom__WEBPACK_IMPORTED_MODULE_37__["reducer"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(src_app_features_store_merchandise_material__WEBPACK_IMPORTED_MODULE_38__["materialFeatureKey"], src_app_features_store_merchandise_material__WEBPACK_IMPORTED_MODULE_38__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([src_app_features_store_article_articlecatagory__WEBPACK_IMPORTED_MODULE_34__["ArticlecatagoryEffects"], src_app_features_store_article_range__WEBPACK_IMPORTED_MODULE_33__["RangeEffects"], src_app_features_store_article_season__WEBPACK_IMPORTED_MODULE_32__["SeasonEffects"], src_app_features_store_article_model__WEBPACK_IMPORTED_MODULE_31__["ModelEffects"], src_app_features_store_customer_client__WEBPACK_IMPORTED_MODULE_35__["ClientEffects"], src_app_features_store_settings_factorycode__WEBPACK_IMPORTED_MODULE_36__["FactorycodeEffects"], src_app_features_store_article_carton__WEBPACK_IMPORTED_MODULE_30__["CartonEffects"], src_app_features_store_settings_uom__WEBPACK_IMPORTED_MODULE_37__["UomEffects"], src_app_features_store_article_article__WEBPACK_IMPORTED_MODULE_29__["ArticleEffects"], src_app_features_store_article_articleme__WEBPACK_IMPORTED_MODULE_28__["ArticlemeEffects"], src_app_features_store_article_articlesize__WEBPACK_IMPORTED_MODULE_27__["ArticlesizeEffects"], src_app_features_store_article_productionline__WEBPACK_IMPORTED_MODULE_26__["ProductionlineEffects"], src_app_features_store_article_articlematerial__WEBPACK_IMPORTED_MODULE_25__["ArticlematerialEffects"], src_app_features_store_merchandise_material__WEBPACK_IMPORTED_MODULE_38__["MaterialEffects"], src_app_features_store_article_articlematerialsub__WEBPACK_IMPORTED_MODULE_23__["ArticlematerialsubEffects"], src_app_features_store_article_articlerate__WEBPACK_IMPORTED_MODULE_24__["ArticlerateEffects"], src_app_features_store_article_articleqca__WEBPACK_IMPORTED_MODULE_22__["ArticleqcaEffects"]]),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    { path: '', redirectTo: 'article-library', pathMatch: 'full' },
                    { path: 'articleqcas', component: _articleqcas_articleqcas_component__WEBPACK_IMPORTED_MODULE_9__["ArticleqcasComponent"] },
                    { path: 'articlematerialsubs', component: _articlematerialsubs_articlematerialsubs_component__WEBPACK_IMPORTED_MODULE_10__["ArticlematerialsubsComponent"] },
                    { path: 'articlerates', component: _articlerates_articlerates_component__WEBPACK_IMPORTED_MODULE_11__["ArticleratesComponent"] },
                    { path: 'articlematerials', component: _articlematerials_articlematerials_component__WEBPACK_IMPORTED_MODULE_12__["ArticlematerialsComponent"] },
                    { path: 'productionlines', component: _productionlines_productionlines_component__WEBPACK_IMPORTED_MODULE_13__["ProductionlinesComponent"] },
                    { path: 'article-library', component: _articlelibrary_articlelibrary_component__WEBPACK_IMPORTED_MODULE_41__["ArticlelibraryComponent"] },
                    { path: 'articlesizes', component: _articlesizes_articlesizes_component__WEBPACK_IMPORTED_MODULE_14__["ArticlesizesComponent"] },
                    { path: 'articlemes', component: _articlemes_articlemes_component__WEBPACK_IMPORTED_MODULE_15__["ArticlemesComponent"] },
                    { path: 'articles', component: _articles_articles_component__WEBPACK_IMPORTED_MODULE_16__["ArticlesComponent"] },
                    { path: 'cartons', component: _cartons_cartons_component__WEBPACK_IMPORTED_MODULE_17__["CartonsComponent"] },
                    { path: 'models', component: _models_models_component__WEBPACK_IMPORTED_MODULE_18__["ModelsComponent"] },
                    { path: 'seasons', component: _seasons_seasons_component__WEBPACK_IMPORTED_MODULE_19__["SeasonsComponent"] },
                    { path: 'ranges', component: _ranges_ranges_component__WEBPACK_IMPORTED_MODULE_20__["RangesComponent"] },
                    { path: 'articlecatagorys', component: _articlecatagorys_articlecatagorys_component__WEBPACK_IMPORTED_MODULE_21__["ArticlecatagorysComponent"] },
                ])
            ],
            entryComponents: [_articles_article_from_article_from_component__WEBPACK_IMPORTED_MODULE_40__["ArticleFromComponent"], _articlesizes_articlesize_form_articlesize_form_component__WEBPACK_IMPORTED_MODULE_42__["ArticlesizeFormComponent"], _productionlines_prdlines_form_prdlines_form_component__WEBPACK_IMPORTED_MODULE_43__["PrdlinesFormComponent"], _articlematerials_material_form_material_form_component__WEBPACK_IMPORTED_MODULE_44__["MaterialFormComponent"], _articlemes_me_form_me_form_component__WEBPACK_IMPORTED_MODULE_45__["MeFormComponent"], _models_model_form_model_form_component__WEBPACK_IMPORTED_MODULE_46__["ModelFormComponent"], _articlematerialsubs_sub_forms_sub_forms_component__WEBPACK_IMPORTED_MODULE_47__["SubFormsComponent"], _articlerates_rate_form_rate_form_component__WEBPACK_IMPORTED_MODULE_48__["RateFormComponent"], _articleqcas_qca_form_qca_form_component__WEBPACK_IMPORTED_MODULE_49__["QcaFormComponent"]]
        })
    ], ArticleModule);
    return ArticleModule;
}());



/***/ }),

/***/ "./src/app/features/article/articlecatagorys/articlecatagorys.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/article/articlecatagorys/articlecatagorys.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ArticlecatagorysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlecatagorysComponent", function() { return ArticlecatagorysComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_article_articlecatagory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/article/articlecatagory */ "./src/app/features/store/article/articlecatagory/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");





var ArticlecatagorysComponent = /** @class */ (function () {
    function ArticlecatagorysComponent(store) {
        this.store = store;
        this.form = [
            {
                row: [
                    { label: 'Article Category Name', name: 'name', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'Remarks', name: 'remarks', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
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
            { title: 'Article Category Name', value: 'name' },
            { title: 'Remarks', value: 'remarks' },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.selectAllSelector = _store_article_articlecatagory__WEBPACK_IMPORTED_MODULE_1__["selectAllArticlecatagorys"];
        this.selectCurrent = _store_article_articlecatagory__WEBPACK_IMPORTED_MODULE_1__["selectCurrentArticlecatagory"];
    }
    ArticlecatagorysComponent.prototype.ngOnInit = function () {
        this.store.dispatch(Object(_store_article_articlecatagory__WEBPACK_IMPORTED_MODULE_1__["loadArticlecatagorys"])());
    };
    ArticlecatagorysComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    ArticlecatagorysComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'smart-articlecatagorys',
            template: __webpack_require__(/*! raw-loader!./articlecatagorys.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/articlecatagorys/articlecatagorys.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], ArticlecatagorysComponent);
    return ArticlecatagorysComponent;
}());



/***/ }),

/***/ "./src/app/features/article/articlelibrary/articlelibrary.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/features/article/articlelibrary/articlelibrary.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FydGljbGUvYXJ0aWNsZWxpYnJhcnkvYXJ0aWNsZWxpYnJhcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/features/article/articlelibrary/articlelibrary.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/article/articlelibrary/articlelibrary.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ArticlelibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlelibraryComponent", function() { return ArticlelibraryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArticlelibraryComponent = /** @class */ (function () {
    function ArticlelibraryComponent() {
    }
    ArticlelibraryComponent.prototype.ngOnInit = function () {
    };
    ArticlelibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'smart-articlelibrary',
            template: __webpack_require__(/*! raw-loader!./articlelibrary.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/articlelibrary/articlelibrary.component.html"),
            styles: [__webpack_require__(/*! ./articlelibrary.component.css */ "./src/app/features/article/articlelibrary/articlelibrary.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArticlelibraryComponent);
    return ArticlelibraryComponent;
}());



/***/ }),

/***/ "./src/app/features/article/articlematerials/articlematerials.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/article/articlematerials/articlematerials.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ArticlematerialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlematerialsComponent", function() { return ArticlematerialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_article_articlematerial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/article/articlematerial */ "./src/app/features/store/article/articlematerial/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _material_form_material_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material-form/material-form.component */ "./src/app/features/article/articlematerials/material-form/material-form.component.ts");
/* harmony import */ var _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/dialogs/dialogs.service */ "./src/app/shared/dialogs/dialogs.service.ts");







var ArticlematerialsComponent = /** @class */ (function () {
    function ArticlematerialsComponent(store, modalService, dialogService) {
        this.store = store;
        this.modalService = modalService;
        this.dialogService = dialogService;
        this.deleteItemName = 'Quotation';
        this.deleteMessage = 'Do you wish to delete this';
        this.columns = [
            { title: 'Material Code', value: ['material', 'name'], sortable: true },
            { title: 'Status', value: 'status', bool: true },
        ];
    }
    ArticlematerialsComponent.prototype.ngOnInit = function () {
        this.store.dispatch(Object(_store_article_articlematerial__WEBPACK_IMPORTED_MODULE_1__["loadArticlematerials"])());
        this.material = this.store.select(_store_article_articlematerial__WEBPACK_IMPORTED_MODULE_1__["selectAllArticlematerials"]);
    };
    ArticlematerialsComponent.prototype.onCreate = function () {
        var initialState = {
            title: 'Add',
        };
        this.modalService.show(_material_form_material_form_component__WEBPACK_IMPORTED_MODULE_5__["MaterialFormComponent"], { initialState: initialState, class: 'modal-lg' });
    };
    ArticlematerialsComponent.prototype.onEdit = function (material) {
        var initialState = {
            material: material,
            title: 'Update',
        };
        this.modalService.show(_material_form_material_form_component__WEBPACK_IMPORTED_MODULE_5__["MaterialFormComponent"], { initialState: initialState, class: 'modal-lg' });
    };
    ArticlematerialsComponent.prototype.ondelete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialogService.confirm({
                            title: "<i class='fal fa-times-circle text-danger mr-2'></i>\n      " + this.deleteMessage + " <span class='fw-500'>&nbsp;" + [this.deleteItemName] + " &nbsp;</span>?",
                            message: "<span><strong>Warning:</strong> This action cannot be undone!</span>",
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
                        }).toPromise()];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.store.dispatch(Object(_store_article_articlematerial__WEBPACK_IMPORTED_MODULE_1__["deleteArticlematerial"])({ data: id }));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticlematerialsComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_6__["DialogsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticlematerialsComponent.prototype, "deleteItemName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticlematerialsComponent.prototype, "deleteMessage", void 0);
    ArticlematerialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'smart-articlematerials',
            template: __webpack_require__(/*! raw-loader!./articlematerials.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/articlematerials/articlematerials.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_6__["DialogsService"]])
    ], ArticlematerialsComponent);
    return ArticlematerialsComponent;
}());



/***/ }),

/***/ "./src/app/features/article/articlematerials/material-form/material-form.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/article/articlematerials/material-form/material-form.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FydGljbGUvYXJ0aWNsZW1hdGVyaWFscy9tYXRlcmlhbC1mb3JtL21hdGVyaWFsLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/features/article/articlematerials/material-form/material-form.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/features/article/articlematerials/material-form/material-form.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MaterialFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialFormComponent", function() { return MaterialFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_article_articlematerial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/article/articlematerial */ "./src/app/features/store/article/articlematerial/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_customer_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/customer/client */ "./src/app/features/store/customer/client/index.ts");
/* harmony import */ var _store_article_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/article/model */ "./src/app/features/store/article/model/index.ts");
/* harmony import */ var _store_article_article__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/article/article */ "./src/app/features/store/article/article/index.ts");
/* harmony import */ var _store_article_articlesize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/article/articlesize */ "./src/app/features/store/article/articlesize/index.ts");
/* harmony import */ var _store_article_productionline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../store/article/productionline */ "./src/app/features/store/article/productionline/index.ts");
/* harmony import */ var _store_settings_uom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/settings/uom */ "./src/app/features/store/settings/uom/index.ts");
/* harmony import */ var _store_merchandise_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../store/merchandise/material */ "./src/app/features/store/merchandise/material/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");














var MaterialFormComponent = /** @class */ (function () {
    function MaterialFormComponent(fb, store, modalService) {
        this.fb = fb;
        this.store = store;
        this.modalService = modalService;
        this.title = "Add";
        this.options = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([{ id: '1', name: 'Manual' }, { id: '2', name: 'Auto' }]);
        this.submitted = false;
    }
    Object.defineProperty(MaterialFormComponent.prototype, "f", {
        get: function () { return this.fg.controls; },
        enumerable: true,
        configurable: true
    });
    MaterialFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.store.dispatch(Object(_store_customer_client__WEBPACK_IMPORTED_MODULE_6__["loadClients"])());
        this.clients = this.store.select(_store_customer_client__WEBPACK_IMPORTED_MODULE_6__["selectAllClients"]);
        this.store.dispatch(Object(_store_settings_uom__WEBPACK_IMPORTED_MODULE_11__["loadUoms"])());
        this.uom = this.store.select(_store_settings_uom__WEBPACK_IMPORTED_MODULE_11__["selectAllUoms"]);
        this.store.dispatch(Object(_store_merchandise_material__WEBPACK_IMPORTED_MODULE_12__["loadMaterials"])());
        this.allmaterials = this.store.select(_store_merchandise_material__WEBPACK_IMPORTED_MODULE_12__["selectAllMaterials"]);
        if (this.material) {
            this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_7__["selectByClientID"], this.material.client.id);
            this.article = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_8__["selectByModelsID"], this.material.model.id);
            this.sizes = this.store.select(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_9__["selectByArticleID"], this.material.article.id);
            this.productionlines = this.store.select(_store_article_productionline__WEBPACK_IMPORTED_MODULE_10__["selectByArticlesizeID"], this.material.size.id);
        }
        if (this.productionline) {
            this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_7__["selectByClientID"], this.productionline.client.id);
            this.article = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_8__["selectByModelsID"], this.productionline.model.id);
            this.sizes = this.store.select(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_9__["selectByArticleID"], this.productionline.article.id);
            this.productionlines = this.store.select(_store_article_productionline__WEBPACK_IMPORTED_MODULE_10__["selectByArticlesizeID"], this.productionline.size.id);
        }
    };
    MaterialFormComponent.prototype.buildForm = function () {
        this.fg = this.fb.group({
            id: [this.material ? this.material.id : null],
            client: [this.productionline ? this.productionline.client.id : this.material ? this.material.client.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            model: [this.productionline ? this.productionline.model.id : this.material ? this.material.model.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            article: [this.productionline ? this.productionline.article.id : this.material ? this.material.article.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            size: [this.productionline ? this.productionline.size.id : this.material ? this.material.size.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            production_line: [this.productionline ? this.productionline.id : this.material ? this.material.production_line.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            material: [this.material ? this.material.material : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            serial_no: [this.material ? this.material.serial_no : ''],
            base_uom: [{ value: this.material ? this.material.base_uom : null, disabled: true }],
            width: [{ value: this.material ? this.material.width : 0, disabled: true }],
            length: [{ value: this.material ? this.material.length : 0, disabled: true }],
            height: [{ value: this.material ? this.material.height : 0, disabled: true }],
            cutting_time: [this.material ? this.material.cutting_time : 0],
            mat_formula: [this.material ? this.material.mat_formula : 0],
            mat_extra: [this.material ? this.material.mat_extra : 0],
            total_formula: [this.material ? this.material.total_formula : 0],
            eou_formula: [this.material ? this.material.eou_formula : 0],
            mat_wastage: [this.material ? this.material.mat_wastage : 0],
            mat_description: [this.material ? this.material.mat_description : ''],
            process_id: [this.material ? this.material.process_id : 0],
            status: [this.material ? this.material.status : ''],
            type: [null],
        });
    };
    MaterialFormComponent.prototype.onChangeClient = function (event) {
        this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_7__["selectByClientID"], event);
    };
    MaterialFormComponent.prototype.onChangeModel = function (event) {
        this.article = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_8__["selectByModelsID"], event);
    };
    MaterialFormComponent.prototype.onChangeArticle = function (event) {
        this.sizes = this.store.select(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_9__["selectByArticleID"], event);
    };
    MaterialFormComponent.prototype.onChangeArticlesize = function (event) {
        this.productionlines = this.store.select(_store_article_productionline__WEBPACK_IMPORTED_MODULE_10__["selectByArticlesizeID"], event);
    };
    // onChangeType(event, material) {
    //   if (event == 1) {
    //     this.fg.controls['mat_formula'].enable({ onlySelf: true });
    //     this.fg.controls['cutting_time'].enable({ onlySelf: true });
    //     this.fg.controls['mat_extra'].enable({ onlySelf: true });
    //     this.fg.controls['total_formula'].enable({ onlySelf: true });
    //     this.fg.controls['mat_description'].enable({ onlySelf: true });
    //   }
    //   if (event == 2) {
    //     this.fg.controls['mat_formula'].disable({ onlySelf: true });
    //     this.fg.controls['cutting_time'].disable({ onlySelf: true });
    //     this.fg.controls['mat_extra'].disable({ onlySelf: true });
    //     this.fg.controls['total_formula'].disable({ onlySelf: true });
    //     this.fg.controls['mat_description'].disable({ onlySelf: true });
    //     const initialState = {
    //       material,
    //       title: 'ADD',
    //     };
    //     this.modalService.show(SubFormsComponent, { initialState, class: 'modal-lg' });
    //   }
    // }
    MaterialFormComponent.prototype.onChangeMaterial = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sub;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.allmaterial = this.store.select(_store_merchandise_material__WEBPACK_IMPORTED_MODULE_12__["selecetmaterialbyid"], event);
                sub = this.allmaterial.subscribe(function (data) {
                    var mat = data[0];
                    _this.fg.patchValue({ width: mat.mat_width });
                    _this.fg.patchValue({ base_uom: mat.base_uom.id });
                    _this.fg.patchValue({ length: mat.mat_length });
                    _this.fg.patchValue({ height: mat.mat_height });
                });
                sub.unsubscribe();
                return [2 /*return*/];
            });
        });
    };
    MaterialFormComponent.prototype.onSubmit = function (event) {
        var _this = this;
        Object.keys(this.fg.controls).forEach(function (field) {
            var control = _this.fg.get(field);
            control.markAsTouched({ onlySelf: true });
            control.markAsDirty({ onlySelf: true });
        });
        if (this.fg.invalid)
            return;
        this.store.dispatch(Object(_store_article_articlematerial__WEBPACK_IMPORTED_MODULE_2__["addArticlematerial"])({ data: this.fg.getRawValue() }));
    };
    MaterialFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["BsModalService"] }
    ]; };
    MaterialFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'smart-material-form',
            template: __webpack_require__(/*! raw-loader!./material-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/articlematerials/material-form/material-form.component.html"),
            styles: [__webpack_require__(/*! ./material-form.component.css */ "./src/app/features/article/articlematerials/material-form/material-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["BsModalService"]])
    ], MaterialFormComponent);
    return MaterialFormComponent;
}());



/***/ }),

/***/ "./src/app/features/article/articlematerialsubs/articlematerialsubs.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/features/article/articlematerialsubs/articlematerialsubs.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ArticlematerialsubsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlematerialsubsComponent", function() { return ArticlematerialsubsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_article_articlematerialsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/article/articlematerialsub */ "./src/app/features/store/article/articlematerialsub/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _sub_forms_sub_forms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sub-forms/sub-forms.component */ "./src/app/features/article/articlematerialsubs/sub-forms/sub-forms.component.ts");






var ArticlematerialsubsComponent = /** @class */ (function () {
    function ArticlematerialsubsComponent(store, modalService) {
        this.store = store;
        this.modalService = modalService;
        this.columns = [
            { title: 'Serial No', value: 'serial_no', sortable: true },
            { title: 'Status', value: 'status', bool: true },
        ];
    }
    ArticlematerialsubsComponent.prototype.ngOnInit = function () {
        this.store.dispatch(Object(_store_article_articlematerialsub__WEBPACK_IMPORTED_MODULE_1__["loadArticlematerialsubs"])());
        this.articlematerialsub = this.store.select(_store_article_articlematerialsub__WEBPACK_IMPORTED_MODULE_1__["selectAllArticlematerialsubs"]);
        console.log(this.articlematerialsub);
    };
    ArticlematerialsubsComponent.prototype.onCreate = function () {
        var initialState = {
            title: 'Add',
        };
        this.modalService.show(_sub_forms_sub_forms_component__WEBPACK_IMPORTED_MODULE_5__["SubFormsComponent"], { initialState: initialState, class: 'modal-lg' });
    };
    ArticlematerialsubsComponent.prototype.onEdit = function (material) {
        var initialState = {
            material: material,
            title: 'Update',
        };
        this.modalService.show(_sub_forms_sub_forms_component__WEBPACK_IMPORTED_MODULE_5__["SubFormsComponent"], { initialState: initialState, class: 'modal-lg' });
    };
    ArticlematerialsubsComponent.prototype.ondelete = function (id) {
        if (confirm("Are you sure to want to delete this row")) {
            this.store.dispatch(Object(_store_article_articlematerialsub__WEBPACK_IMPORTED_MODULE_1__["deleteArticlematerialsub"])({ data: id }));
            //  this.toaster.success('Material has been deleted successfully');
        }
    };
    ArticlematerialsubsComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] }
    ]; };
    ArticlematerialsubsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'smart-articlematerialsubs',
            template: __webpack_require__(/*! raw-loader!./articlematerialsubs.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/articlematerialsubs/articlematerialsubs.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], ArticlematerialsubsComponent);
    return ArticlematerialsubsComponent;
}());



/***/ }),

/***/ "./src/app/features/article/articlematerialsubs/sub-forms/sub-forms.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/features/article/articlematerialsubs/sub-forms/sub-forms.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FydGljbGUvYXJ0aWNsZW1hdGVyaWFsc3Vicy9zdWItZm9ybXMvc3ViLWZvcm1zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/features/article/articlematerialsubs/sub-forms/sub-forms.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/features/article/articlematerialsubs/sub-forms/sub-forms.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SubFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubFormsComponent", function() { return SubFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_article_articlematerial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/article/articlematerial */ "./src/app/features/store/article/articlematerial/index.ts");
/* harmony import */ var _store_article_articlematerialsub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/article/articlematerialsub */ "./src/app/features/store/article/articlematerialsub/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_customer_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/customer/client */ "./src/app/features/store/customer/client/index.ts");
/* harmony import */ var _store_article_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/article/model */ "./src/app/features/store/article/model/index.ts");
/* harmony import */ var _store_article_article__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/article/article */ "./src/app/features/store/article/article/index.ts");
/* harmony import */ var _store_article_articlesize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/article/articlesize */ "./src/app/features/store/article/articlesize/index.ts");
/* harmony import */ var _store_article_productionline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../store/article/productionline */ "./src/app/features/store/article/productionline/index.ts");











var SubFormsComponent = /** @class */ (function () {
    function SubFormsComponent(fb, store) {
        this.fb = fb;
        this.store = store;
        this.title = "Add";
        this.submitted = false;
    }
    Object.defineProperty(SubFormsComponent.prototype, "f", {
        get: function () { return this.fg.controls; },
        enumerable: true,
        configurable: true
    });
    SubFormsComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.store.dispatch(Object(_store_customer_client__WEBPACK_IMPORTED_MODULE_6__["loadClients"])());
        this.clients = this.store.select(_store_customer_client__WEBPACK_IMPORTED_MODULE_6__["selectAllClients"]);
        // this.store.dispatch(loadUoms())
        // this.uom = this.store.select(selectAllUoms)
        // // this.store.dispatch(loadMaterials())
        // // this.allmaterials = this.store.select(selectAllMaterials)
        if (this.articlematerialsub) {
            this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_7__["selectByClientID"], this.articlematerialsub.client);
            this.article = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_8__["selectByModelsID"], this.articlematerialsub.model);
            this.sizes = this.store.select(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_9__["selectByArticleID"], this.articlematerialsub.article);
            this.productionlines = this.store.select(_store_article_productionline__WEBPACK_IMPORTED_MODULE_10__["selectByArticlesizeID"], this.articlematerialsub.size);
            this.materials = this.store.select(_store_article_articlematerial__WEBPACK_IMPORTED_MODULE_2__["selectByArticleMaterialID"], this.articlematerialsub.art_material);
        }
        if (this.material) {
            this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_7__["selectByClientID"], this.material.client);
            this.article = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_8__["selectByModelsID"], this.material.model);
            this.sizes = this.store.select(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_9__["selectByArticleID"], this.material.article);
            this.productionlines = this.store.select(_store_article_productionline__WEBPACK_IMPORTED_MODULE_10__["selectByArticlesizeID"], this.material.size);
        }
    };
    SubFormsComponent.prototype.buildForm = function () {
        this.fg = this.fb.group({
            id: [this.articlematerialsub ? this.articlematerialsub.id : null],
            client: [this.material ? this.material.client : this.articlematerialsub ? this.articlematerialsub.client : null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            model: [this.material ? this.material.model : this.articlematerialsub ? this.articlematerialsub.model : null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            article: [this.material ? this.material.article : this.articlematerialsub ? this.articlematerialsub.article : null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            size: [this.material ? this.material.size : this.articlematerialsub ? this.articlematerialsub.size : null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            production_line: [this.material ? this.material.production_line : this.articlematerialsub ? this.articlematerialsub.production_line : null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            art_material: [this.material ? this.material.id : this.articlematerialsub ? this.articlematerialsub.art_material : null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            serial_no: [this.articlematerialsub ? this.articlematerialsub.serial_no : ''],
            width: [this.articlematerialsub ? this.articlematerialsub.width : 0],
            length: [this.articlematerialsub ? this.articlematerialsub.length : 0],
            height: [this.articlematerialsub ? this.articlematerialsub.height : 0],
            mat_use_name: [this.articlematerialsub ? this.articlematerialsub.mat_use_name : ''],
            no_of_pcs: [this.articlematerialsub ? this.articlematerialsub.no_of_pcs : ''],
            total_material: [this.articlematerialsub ? this.articlematerialsub.total_material : 0],
            status: [this.articlematerialsub ? this.articlematerialsub.status : true],
        });
    };
    SubFormsComponent.prototype.onChangeClient = function (event) {
        this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_7__["selectByClientID"], event);
    };
    SubFormsComponent.prototype.onChangeModel = function (event) {
        this.article = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_8__["selectByModelsID"], event);
    };
    SubFormsComponent.prototype.onChangeArticle = function (event) {
        this.sizes = this.store.select(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_9__["selectByArticleID"], event);
    };
    SubFormsComponent.prototype.onChangeArticlesize = function (event) {
        this.productionlines = this.store.select(_store_article_productionline__WEBPACK_IMPORTED_MODULE_10__["selectByArticlesizeID"], event);
    };
    SubFormsComponent.prototype.onChangeArticleMaterial = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sub;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.materials = this.store.select(_store_article_articlematerial__WEBPACK_IMPORTED_MODULE_2__["selectAllArticlematerials"], event);
                sub = this.materials.subscribe(function (data) {
                    var mat = data[0];
                    _this.fg.patchValue({ art_material: mat.material });
                });
                sub.unsubscribe();
                return [2 /*return*/];
            });
        });
    };
    // async onChangeMaterial(event){
    //  this.allmaterials=this.store.select(selecetmaterialbyid, event)
    //  let sub = this.allmaterials.subscribe(data => {
    //    const mat = data[0];
    //    this.fg.patchValue({width: mat.mat_width})
    //    this.fg.patchValue({base_uom: mat.base_uom.id})
    //    this.fg.patchValue({length: mat.mat_length})
    //    this.fg.patchValue({height: mat.mat_height})
    //  })
    //  sub.unsubscribe();
    // }
    SubFormsComponent.prototype.onSubmit = function (event) {
        var _this = this;
        Object.keys(this.fg.controls).forEach(function (field) {
            var control = _this.fg.get(field);
            control.markAsTouched({ onlySelf: true });
            control.markAsDirty({ onlySelf: true });
        });
        if (this.fg.invalid)
            return;
        this.store.dispatch(Object(_store_article_articlematerialsub__WEBPACK_IMPORTED_MODULE_3__["addArticlematerialsub"])({ data: this.fg.getRawValue() }));
    };
    SubFormsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
    ]; };
    SubFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'smart-sub-forms',
            template: __webpack_require__(/*! raw-loader!./sub-forms.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/articlematerialsubs/sub-forms/sub-forms.component.html"),
            styles: [__webpack_require__(/*! ./sub-forms.component.css */ "./src/app/features/article/articlematerialsubs/sub-forms/sub-forms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], SubFormsComponent);
    return SubFormsComponent;
}());



/***/ }),

/***/ "./src/app/features/article/articlemes/articlemes.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/article/articlemes/articlemes.component.ts ***!
  \*********************************************************************/
/*! exports provided: ArticlemesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlemesComponent", function() { return ArticlemesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_article_articleme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/article/articleme */ "./src/app/features/store/article/articleme/index.ts");
/* harmony import */ var _store_article_article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../store/article/article */ "./src/app/features/store/article/article/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _me_form_me_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./me-form/me-form.component */ "./src/app/features/article/articlemes/me-form/me-form.component.ts");
/* harmony import */ var _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/dialogs/dialogs.service */ "./src/app/shared/dialogs/dialogs.service.ts");








var ArticlemesComponent = /** @class */ (function () {
    function ArticlemesComponent(store, modalService, dialogService) {
        this.store = store;
        this.modalService = modalService;
        this.dialogService = dialogService;
        this.deleteItemName = 'Row';
        this.deleteMessage = 'Do you wish to delete this';
        this.columns = [
            { title: 'Client', value: ['client', 'name'], sortable: true },
            { title: 'Model', value: ['model', 'name'], sortable: true },
            { title: 'Article', value: ['article', 'name'], sortable: true },
            { title: 'GSD Target', value: 'gsd_target' },
            { title: 'ME Target', value: 'me_target' },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.columns2 = [
            { title: 'Client', value: ['client', 'name'], sortable: true },
            { title: 'Model', value: ['model', 'name'], sortable: true },
            { title: 'Article', value: 'name', sortable: true },
        ];
    }
    ArticlemesComponent.prototype.ngOnInit = function () {
        this.store.dispatch(Object(_store_article_articleme__WEBPACK_IMPORTED_MODULE_1__["loadArticlemes"])());
        this.articleme = this.store.select(_store_article_articleme__WEBPACK_IMPORTED_MODULE_1__["selectAllArticlemes"]);
        this.store.dispatch(Object(_store_article_article__WEBPACK_IMPORTED_MODULE_2__["loadArticles"])());
        this.articles = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_2__["selectAllArticles"]);
    };
    ArticlemesComponent.prototype.onCreate = function (articles) {
        var initialState = {
            articles: articles,
            title: 'Add',
        };
        this.modalService.show(_me_form_me_form_component__WEBPACK_IMPORTED_MODULE_6__["MeFormComponent"], { initialState: initialState, class: 'modal-mx' });
    };
    ArticlemesComponent.prototype.onEdit = function (articleme) {
        var initialState = {
            articleme: articleme,
            title: 'Update',
        };
        this.modalService.show(_me_form_me_form_component__WEBPACK_IMPORTED_MODULE_6__["MeFormComponent"], { initialState: initialState, class: 'modal-mx' });
    };
    ArticlemesComponent.prototype.ondelete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialogService.confirm({
                            title: "<i class='fal fa-times-circle text-danger mr-2'></i>\n      " + this.deleteMessage + " <span class='fw-500'>&nbsp;" + [this.deleteItemName] + " &nbsp;</span>?",
                            message: "<span><strong>Warning:</strong> This action cannot be undone!</span>",
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
                        }).toPromise()];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.store.dispatch(Object(_store_article_articleme__WEBPACK_IMPORTED_MODULE_1__["deleteArticleme"])({ data: id }));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticlemesComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
        { type: _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__["DialogsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticlemesComponent.prototype, "deleteItemName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticlemesComponent.prototype, "deleteMessage", void 0);
    ArticlemesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'smart-articlemes',
            template: __webpack_require__(/*! raw-loader!./articlemes.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/articlemes/articlemes.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"], _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__["DialogsService"]])
    ], ArticlemesComponent);
    return ArticlemesComponent;
}());



/***/ }),

/***/ "./src/app/features/article/articlemes/me-form/me-form.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/features/article/articlemes/me-form/me-form.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FydGljbGUvYXJ0aWNsZW1lcy9tZS1mb3JtL21lLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/features/article/articlemes/me-form/me-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/article/articlemes/me-form/me-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: MeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeFormComponent", function() { return MeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_article_articleme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/article/articleme */ "./src/app/features/store/article/articleme/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_customer_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/customer/client */ "./src/app/features/store/customer/client/index.ts");
/* harmony import */ var _store_article_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/article/model */ "./src/app/features/store/article/model/index.ts");
/* harmony import */ var _store_article_article__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/article/article */ "./src/app/features/store/article/article/index.ts");








var MeFormComponent = /** @class */ (function () {
    function MeFormComponent(fb, store) {
        this.fb = fb;
        this.store = store;
        this.title = "Add";
        this.submitted = false;
    }
    Object.defineProperty(MeFormComponent.prototype, "f", {
        get: function () { return this.fg.controls; },
        enumerable: true,
        configurable: true
    });
    MeFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.store.dispatch(Object(_store_customer_client__WEBPACK_IMPORTED_MODULE_5__["loadClients"])());
        this.clients = this.store.select(_store_customer_client__WEBPACK_IMPORTED_MODULE_5__["selectAllClients"]);
        this.store.dispatch(Object(_store_article_model__WEBPACK_IMPORTED_MODULE_6__["loadModels"])());
        this.store.dispatch(Object(_store_article_article__WEBPACK_IMPORTED_MODULE_7__["loadArticles"])());
        if (this.articleme) {
            this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_6__["selectByClientID"], this.articleme.client.id);
            this.article = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_7__["selectByModelsID"], this.articleme.model.id);
        }
        if (this.articles) {
            this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_6__["selectByClientID"], this.articles.client.id);
            this.article = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_7__["selectByModelsID"], this.articles.model.id);
        }
    };
    MeFormComponent.prototype.buildForm = function () {
        this.fg = this.fb.group({
            id: [this.articleme ? this.articleme.id : null],
            client: [this.articles ? this.articles.client.id : this.articleme ? this.articleme.client.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            model: [this.articles ? this.articles.model.id : this.articleme ? this.articleme.model.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            article: [this.articles ? this.articles.id : this.articleme ? this.articleme.article.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gsd_target: [this.articleme ? this.articleme.gsd_target : ''],
            me_target: [this.articleme ? this.articleme.me_target : ''],
            packing_target: [this.articleme ? this.articleme.packing_target : ''],
            sam_forming: [this.articleme ? this.articleme.sam_forming : ''],
            sam_packing: [this.articleme ? this.articleme.sam_packing : ''],
            status: [this.articleme ? this.articleme.status : '']
        });
    };
    MeFormComponent.prototype.onChangeClients = function (event) {
        this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_6__["selectByClientID"], event);
    };
    MeFormComponent.prototype.onChangeModels = function (event) {
        this.article = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_7__["selectByModelsID"], event);
    };
    MeFormComponent.prototype.onSubmit = function (event) {
        var _this = this;
        Object.keys(this.fg.controls).forEach(function (field) {
            var control = _this.fg.get(field);
            control.markAsTouched({ onlySelf: true });
            control.markAsDirty({ onlySelf: true });
        });
        if (this.fg.invalid)
            return;
        this.store.dispatch(Object(_store_article_articleme__WEBPACK_IMPORTED_MODULE_2__["addArticleme"])({ data: this.fg.value }));
    };
    MeFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    MeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'smart-me-form',
            template: __webpack_require__(/*! raw-loader!./me-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/articlemes/me-form/me-form.component.html"),
            styles: [__webpack_require__(/*! ./me-form.component.css */ "./src/app/features/article/articlemes/me-form/me-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], MeFormComponent);
    return MeFormComponent;
}());



/***/ }),

/***/ "./src/app/features/article/articleqcas/articleqcas.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/article/articleqcas/articleqcas.component.ts ***!
  \***********************************************************************/
/*! exports provided: ArticleqcasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleqcasComponent", function() { return ArticleqcasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_article_articleqca__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/article/articleqca */ "./src/app/features/store/article/articleqca/index.ts");
/* harmony import */ var _store_article_articlesize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../store/article/articlesize */ "./src/app/features/store/article/articlesize/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _qca_form_qca_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qca-form/qca-form.component */ "./src/app/features/article/articleqcas/qca-form/qca-form.component.ts");
/* harmony import */ var _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/dialogs/dialogs.service */ "./src/app/shared/dialogs/dialogs.service.ts");








var ArticleqcasComponent = /** @class */ (function () {
    function ArticleqcasComponent(store, modalService, dialogService) {
        this.store = store;
        this.modalService = modalService;
        this.dialogService = dialogService;
        this.deleteItemName = 'Row';
        this.deleteMessage = 'Do you wish to delete this';
        this.columns = [
            { title: 'Client', value: ['client', 'name'], sortable: true },
            { title: 'Model', value: ['model', 'name'], sortable: true },
            { title: 'Article', value: ['article', 'name'], sortable: true },
            { title: 'Name', value: 'name', sortable: true },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.columns2 = [
            { title: 'Client', value: ['client', 'name'], sortable: true },
            { title: 'Model', value: ['model', 'name'], sortable: true },
            { title: 'Article', value: ['article', 'name'], sortable: true },
            { title: 'Size', value: 'size', sortable: true },
            { title: 'Status', value: 'status', bool: true },
        ];
    }
    ArticleqcasComponent.prototype.ngOnInit = function () {
        this.store.dispatch(Object(_store_article_articleqca__WEBPACK_IMPORTED_MODULE_1__["loadArticleqcas"])());
        this.articleqca = this.store.select(_store_article_articleqca__WEBPACK_IMPORTED_MODULE_1__["selectAllArticleqcas"]);
        this.store.dispatch(Object(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_2__["loadArticlesizes"])());
        this.articlesize = this.store.select(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_2__["selectAllArticlesizes"]);
    };
    ArticleqcasComponent.prototype.onCreate = function (articlesize) {
        var initialState = {
            articlesize: articlesize,
            title: 'Add',
        };
        this.modalService.show(_qca_form_qca_form_component__WEBPACK_IMPORTED_MODULE_6__["QcaFormComponent"], { initialState: initialState, class: 'modal-mx' });
    };
    ArticleqcasComponent.prototype.onEdit = function (articleqca) {
        var initialState = {
            articleqca: articleqca,
            title: 'Update',
        };
        this.modalService.show(_qca_form_qca_form_component__WEBPACK_IMPORTED_MODULE_6__["QcaFormComponent"], { initialState: initialState, class: 'modal-mx' });
    };
    ArticleqcasComponent.prototype.ondelete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialogService.confirm({
                            title: "<i class='fal fa-times-circle text-danger mr-2'></i>\n      " + this.deleteMessage + " <span class='fw-500'>&nbsp;" + [this.deleteItemName] + " &nbsp;</span>?",
                            message: "<span><strong>Warning:</strong> This action cannot be undone!</span>",
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
                        }).toPromise()];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.store.dispatch(Object(_store_article_articleqca__WEBPACK_IMPORTED_MODULE_1__["deleteArticleqca"])({ data: id }));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticleqcasComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
        { type: _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__["DialogsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleqcasComponent.prototype, "deleteItemName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleqcasComponent.prototype, "deleteMessage", void 0);
    ArticleqcasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'smart-articleqcas',
            template: __webpack_require__(/*! raw-loader!./articleqcas.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/articleqcas/articleqcas.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"], _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__["DialogsService"]])
    ], ArticleqcasComponent);
    return ArticleqcasComponent;
}());



/***/ }),

/***/ "./src/app/features/article/articleqcas/qca-form/qca-form.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/features/article/articleqcas/qca-form/qca-form.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FydGljbGUvYXJ0aWNsZXFjYXMvcWNhLWZvcm0vcWNhLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/features/article/articleqcas/qca-form/qca-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/article/articleqcas/qca-form/qca-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: QcaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QcaFormComponent", function() { return QcaFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_article_articleqca__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/article/articleqca */ "./src/app/features/store/article/articleqca/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_customer_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/customer/client */ "./src/app/features/store/customer/client/index.ts");
/* harmony import */ var _store_article_carton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/article/carton */ "./src/app/features/store/article/carton/index.ts");
/* harmony import */ var _store_article_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/article/model */ "./src/app/features/store/article/model/index.ts");
/* harmony import */ var _store_article_article__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/article/article */ "./src/app/features/store/article/article/index.ts");
/* harmony import */ var _store_article_articlesize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/article/articlesize */ "./src/app/features/store/article/articlesize/index.ts");










var QcaFormComponent = /** @class */ (function () {
    function QcaFormComponent(fb, store) {
        this.fb = fb;
        this.store = store;
        this.title = "Add";
        this.submitted = false;
    }
    Object.defineProperty(QcaFormComponent.prototype, "f", {
        get: function () { return this.fg.controls; },
        enumerable: true,
        configurable: true
    });
    QcaFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.store.dispatch(Object(_store_customer_client__WEBPACK_IMPORTED_MODULE_5__["loadClients"])());
        this.clients = this.store.select(_store_customer_client__WEBPACK_IMPORTED_MODULE_5__["selectAllClients"]);
        this.store.dispatch(Object(_store_article_model__WEBPACK_IMPORTED_MODULE_7__["loadModels"])());
        this.store.dispatch(Object(_store_article_article__WEBPACK_IMPORTED_MODULE_8__["loadArticles"])());
        this.store.dispatch(Object(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_9__["loadArticlesizes"])());
        this.store.dispatch(Object(_store_article_carton__WEBPACK_IMPORTED_MODULE_6__["loadCartons"])());
        this.carton = this.store.select(_store_article_carton__WEBPACK_IMPORTED_MODULE_6__["selectAllCartons"]);
        if (this.articleqca) {
            this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_7__["selectByClientID"], this.articleqca.client.id);
            this.article = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_8__["selectByModelsID"], this.articleqca.model.id);
            this.sizes = this.store.select(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_9__["selectByArticleID"], this.articleqca.article.id);
        }
        if (this.articlesize) {
            this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_7__["selectByClientID"], this.articlesize.client.id);
            this.article = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_8__["selectByModelsID"], this.articlesize.model.id);
            this.sizes = this.store.select(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_9__["selectByArticleID"], this.articlesize.article.id);
        }
    };
    QcaFormComponent.prototype.buildForm = function () {
        this.fg = this.fb.group({
            id: [this.articleqca ? this.articleqca.id : null],
            client: [this.articlesize ? this.articlesize.client.id : this.articleqca ? this.articleqca.client.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            model: [this.articlesize ? this.articlesize.model.id : this.articleqca ? this.articleqca.model.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            article: [this.articlesize ? this.articlesize.article.id : this.articleqca ? this.articleqca.article.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            size: [this.articlesize ? this.articlesize.id : this.articleqca ? this.articleqca.size.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: [this.articleqca ? this.articleqca.name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            start_value: [this.articleqca ? this.articleqca.start_value : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            end_value: [this.articleqca ? this.articleqca.end_value : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [this.articleqca ? this.articleqca.description : ''],
            status: [this.articleqca ? this.articleqca.status : '']
        });
    };
    QcaFormComponent.prototype.onChangeClients = function (event) {
        this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_7__["selectByClientID"], event);
    };
    QcaFormComponent.prototype.onChangeModels = function (event) {
        this.article = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_8__["selectByModelsID"], event);
    };
    QcaFormComponent.prototype.onChangeArticle = function (event) {
        this.sizes = this.store.select(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_9__["selectByArticleID"], event);
    };
    QcaFormComponent.prototype.onSubmit = function (event) {
        var _this = this;
        Object.keys(this.fg.controls).forEach(function (field) {
            var control = _this.fg.get(field);
            control.markAsTouched({ onlySelf: true });
            control.markAsDirty({ onlySelf: true });
        });
        if (this.fg.invalid)
            return;
        this.store.dispatch(Object(_store_article_articleqca__WEBPACK_IMPORTED_MODULE_2__["addArticleqca"])({ data: this.fg.value }));
    };
    QcaFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    QcaFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'smart-qca-form',
            template: __webpack_require__(/*! raw-loader!./qca-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/articleqcas/qca-form/qca-form.component.html"),
            styles: [__webpack_require__(/*! ./qca-form.component.css */ "./src/app/features/article/articleqcas/qca-form/qca-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], QcaFormComponent);
    return QcaFormComponent;
}());



/***/ }),

/***/ "./src/app/features/article/articlerates/articlerates.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/article/articlerates/articlerates.component.ts ***!
  \*************************************************************************/
/*! exports provided: ArticleratesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleratesComponent", function() { return ArticleratesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_article_articlerate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/article/articlerate */ "./src/app/features/store/article/articlerate/index.ts");
/* harmony import */ var _store_article_articlesize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../store/article/articlesize */ "./src/app/features/store/article/articlesize/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _rate_form_rate_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rate-form/rate-form.component */ "./src/app/features/article/articlerates/rate-form/rate-form.component.ts");
/* harmony import */ var _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/dialogs/dialogs.service */ "./src/app/shared/dialogs/dialogs.service.ts");








var ArticleratesComponent = /** @class */ (function () {
    function ArticleratesComponent(store, modalService, dialogService) {
        this.store = store;
        this.modalService = modalService;
        this.dialogService = dialogService;
        this.deleteItemName = 'Row';
        this.deleteMessage = 'Do you wish to delete this';
        this.columns = [
            { title: 'Client', value: ['client', 'name'], sortable: true },
            { title: 'Model', value: ['model', 'name'], sortable: true },
            { title: 'Article', value: ['article', 'name'], sortable: true },
            { title: 'Name', value: 'name', sortable: true },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.columns2 = [
            { title: 'Client', value: ['client', 'name'], sortable: true },
            { title: 'Model', value: ['model', 'name'], sortable: true },
            { title: 'Article', value: ['article', 'name'], sortable: true },
            { title: 'Size', value: 'size', sortable: true },
            { title: 'Status', value: 'status', bool: true },
        ];
    }
    ArticleratesComponent.prototype.ngOnInit = function () {
        this.store.dispatch(Object(_store_article_articlerate__WEBPACK_IMPORTED_MODULE_1__["loadArticlerates"])());
        this.articlerate = this.store.select(_store_article_articlerate__WEBPACK_IMPORTED_MODULE_1__["selectAllArticlerates"]);
        this.store.dispatch(Object(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_2__["loadArticlesizes"])());
        this.articlesize = this.store.select(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_2__["selectAllArticlesizes"]);
    };
    ArticleratesComponent.prototype.onCreate = function (articlesize) {
        var initialState = {
            articlesize: articlesize,
            title: 'Add',
        };
        this.modalService.show(_rate_form_rate_form_component__WEBPACK_IMPORTED_MODULE_6__["RateFormComponent"], { initialState: initialState, class: 'modal-mx' });
    };
    ArticleratesComponent.prototype.onEdit = function (articlerate) {
        var initialState = {
            articlerate: articlerate,
            title: 'Update',
        };
        this.modalService.show(_rate_form_rate_form_component__WEBPACK_IMPORTED_MODULE_6__["RateFormComponent"], { initialState: initialState, class: 'modal-mx' });
    };
    ArticleratesComponent.prototype.ondelete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialogService.confirm({
                            title: "<i class='fal fa-times-circle text-danger mr-2'></i>\n      " + this.deleteMessage + " <span class='fw-500'>&nbsp;" + [this.deleteItemName] + " &nbsp;</span>?",
                            message: "<span><strong>Warning:</strong> This action cannot be undone!</span>",
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
                        }).toPromise()];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.store.dispatch(Object(_store_article_articlerate__WEBPACK_IMPORTED_MODULE_1__["deleteArticlerate"])({ data: id }));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticleratesComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
        { type: _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__["DialogsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleratesComponent.prototype, "deleteItemName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleratesComponent.prototype, "deleteMessage", void 0);
    ArticleratesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'smart-articlerates',
            template: __webpack_require__(/*! raw-loader!./articlerates.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/articlerates/articlerates.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"], _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__["DialogsService"]])
    ], ArticleratesComponent);
    return ArticleratesComponent;
}());



/***/ }),

/***/ "./src/app/features/article/articlerates/rate-form/rate-form.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/features/article/articlerates/rate-form/rate-form.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FydGljbGUvYXJ0aWNsZXJhdGVzL3JhdGUtZm9ybS9yYXRlLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/features/article/articlerates/rate-form/rate-form.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/features/article/articlerates/rate-form/rate-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: RateFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateFormComponent", function() { return RateFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_article_articlerate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/article/articlerate */ "./src/app/features/store/article/articlerate/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_customer_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/customer/client */ "./src/app/features/store/customer/client/index.ts");
/* harmony import */ var _store_article_carton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/article/carton */ "./src/app/features/store/article/carton/index.ts");
/* harmony import */ var _store_article_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/article/model */ "./src/app/features/store/article/model/index.ts");
/* harmony import */ var _store_article_article__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/article/article */ "./src/app/features/store/article/article/index.ts");
/* harmony import */ var _store_article_articlesize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/article/articlesize */ "./src/app/features/store/article/articlesize/index.ts");










var RateFormComponent = /** @class */ (function () {
    function RateFormComponent(fb, store) {
        this.fb = fb;
        this.store = store;
        this.title = "Add";
        this.submitted = false;
    }
    Object.defineProperty(RateFormComponent.prototype, "f", {
        get: function () { return this.fg.controls; },
        enumerable: true,
        configurable: true
    });
    RateFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.store.dispatch(Object(_store_customer_client__WEBPACK_IMPORTED_MODULE_5__["loadClients"])());
        this.clients = this.store.select(_store_customer_client__WEBPACK_IMPORTED_MODULE_5__["selectAllClients"]);
        this.store.dispatch(Object(_store_article_model__WEBPACK_IMPORTED_MODULE_7__["loadModels"])());
        this.store.dispatch(Object(_store_article_article__WEBPACK_IMPORTED_MODULE_8__["loadArticles"])());
        this.store.dispatch(Object(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_9__["loadArticlesizes"])());
        this.store.dispatch(Object(_store_article_carton__WEBPACK_IMPORTED_MODULE_6__["loadCartons"])());
        this.carton = this.store.select(_store_article_carton__WEBPACK_IMPORTED_MODULE_6__["selectAllCartons"]);
        if (this.articlerate) {
            this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_7__["selectByClientID"], this.articlerate.client.id);
            this.article = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_8__["selectByModelsID"], this.articlerate.model.id);
            this.sizes = this.store.select(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_9__["selectByArticleID"], this.articlerate.article.id);
        }
        if (this.articlesize) {
            this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_7__["selectByClientID"], this.articlesize.client.id);
            this.article = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_8__["selectByModelsID"], this.articlesize.model.id);
            this.sizes = this.store.select(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_9__["selectByArticleID"], this.articlesize.article.id);
        }
    };
    RateFormComponent.prototype.buildForm = function () {
        this.fg = this.fb.group({
            id: [this.articlerate ? this.articlerate.id : null],
            client: [this.articlesize ? this.articlesize.client.id : this.articlerate ? this.articlerate.client.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            model: [this.articlesize ? this.articlesize.model.id : this.articlerate ? this.articlerate.model.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            article: [this.articlesize ? this.articlesize.article.id : this.articlerate ? this.articlerate.article.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            size: [this.articlesize ? this.articlesize.id : this.articlerate ? this.articlerate.size.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            carton: [this.articlerate ? this.articlerate.carton : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: [this.articlerate ? this.articlerate.name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            charges: [this.articlerate ? this.articlerate.charges : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            other_charges: [this.articlerate ? this.articlerate.other_charges : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [this.articlerate ? this.articlerate.description : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: [this.articlerate ? this.articlerate.status : '']
        });
    };
    RateFormComponent.prototype.onChangeClients = function (event) {
        this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_7__["selectByClientID"], event);
    };
    RateFormComponent.prototype.onChangeModels = function (event) {
        this.article = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_8__["selectByModelsID"], event);
    };
    RateFormComponent.prototype.onChangeArticle = function (event) {
        this.sizes = this.store.select(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_9__["selectByArticleID"], event);
    };
    RateFormComponent.prototype.onSubmit = function (event) {
        var _this = this;
        Object.keys(this.fg.controls).forEach(function (field) {
            var control = _this.fg.get(field);
            control.markAsTouched({ onlySelf: true });
            control.markAsDirty({ onlySelf: true });
        });
        if (this.fg.invalid)
            return;
        this.store.dispatch(Object(_store_article_articlerate__WEBPACK_IMPORTED_MODULE_2__["addArticlerate"])({ data: this.fg.value }));
    };
    RateFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    RateFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'smart-rate-form',
            template: __webpack_require__(/*! raw-loader!./rate-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/articlerates/rate-form/rate-form.component.html"),
            styles: [__webpack_require__(/*! ./rate-form.component.css */ "./src/app/features/article/articlerates/rate-form/rate-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], RateFormComponent);
    return RateFormComponent;
}());



/***/ }),

/***/ "./src/app/features/article/articles/article-from/article-from.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/features/article/articles/article-from/article-from.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FydGljbGUvYXJ0aWNsZXMvYXJ0aWNsZS1mcm9tL2FydGljbGUtZnJvbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/article/articles/article-from/article-from.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/features/article/articles/article-from/article-from.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ArticleFromComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleFromComponent", function() { return ArticleFromComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _store_article_article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/article/article */ "./src/app/features/store/article/article/index.ts");
/* harmony import */ var _store_customer_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/customer/client */ "./src/app/features/store/customer/client/index.ts");
/* harmony import */ var _store_article_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/article/model */ "./src/app/features/store/article/model/index.ts");
/* harmony import */ var _store_article_season__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/article/season */ "./src/app/features/store/article/season/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");








var ArticleFromComponent = /** @class */ (function () {
    function ArticleFromComponent(fb, store) {
        this.fb = fb;
        this.store = store;
        this.title = "Add";
        this.submitted = false;
        this.imageurl = "assets/img/demo/upload.png";
        this.filetoupload = null;
    }
    Object.defineProperty(ArticleFromComponent.prototype, "f", {
        get: function () { return this.fg.controls; },
        enumerable: true,
        configurable: true
    });
    ArticleFromComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.store.dispatch(Object(_store_customer_client__WEBPACK_IMPORTED_MODULE_4__["loadClients"])());
        this.clients = this.store.select(_store_customer_client__WEBPACK_IMPORTED_MODULE_4__["selectAllClients"]);
        this.store.dispatch(Object(_store_article_season__WEBPACK_IMPORTED_MODULE_6__["loadSeasons"])());
        this.season = this.store.select(_store_article_season__WEBPACK_IMPORTED_MODULE_6__["selectAllSeasons"]);
        if (this.article) {
            this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_5__["selectByClientID"], this.article.client.id);
        }
        if (this.models) {
            this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_5__["selectByClientID"], this.models.client.id);
        }
    };
    ArticleFromComponent.prototype.handlefileinput = function (file) {
        var _this = this;
        this.filetoupload = file.item(0);
        //show image review
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageurl = event.target.result;
        };
        reader.readAsDataURL(this.filetoupload);
    };
    ArticleFromComponent.prototype.buildForm = function () {
        this.fg = this.fb.group({
            id: [this.article ? this.article.id : null],
            client: [this.models ? this.models.client.id : this.article ? this.article.client.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            model: [this.models ? this.models.id : this.article ? this.article.model.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image: [this.article ? this.article.image : ''],
            name: [this.article ? this.article.name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            art_number: [this.article ? this.article.art_number : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            color: [this.article ? this.article.color : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            first_season: [this.article ? this.article.first_season : null],
            description: [this.article ? this.article.description : ''],
            ready_date: [this.article ? this.article.ready_date : ''],
            mer_date: [this.article ? this.article.mer_date : ''],
            ready_closing_date: [this.article ? this.article.ready_closing_date : ''],
            ready_status: [this.article ? this.article.ready_status : ''],
            mer_status: [this.article ? this.article.mer_status : ''],
            status: [this.article ? this.article.status : '']
        });
    };
    ArticleFromComponent.prototype.onChange = function (event) {
        this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_5__["selectByClientID"], event);
    };
    ArticleFromComponent.prototype.onSubmit = function (event) {
        var _this = this;
        var e_1, _a;
        Object.keys(this.fg.controls).forEach(function (field) {
            var control = _this.fg.get(field);
            control.markAsTouched({ onlySelf: true });
            control.markAsDirty({ onlySelf: true });
        });
        if (this.fg.invalid)
            return;
        var art = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.fg.value);
        art.image = event.target.Image.files[0];
        if (art.image == undefined && (this.fg.value['id'] === 0 || this.fg.value['id'] === null)) {
            // this.toaster.error('Please select a valid image file');
        }
        else {
            var formData = new FormData();
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.keys(art)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    if (art[key])
                        formData.append(key, art[key]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            formData.append('update', 'true');
            this.store.dispatch(Object(_store_article_article__WEBPACK_IMPORTED_MODULE_3__["addArticle"])({ data: formData }));
        }
    };
    ArticleFromComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }
    ]; };
    ArticleFromComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'smart-article-from',
            template: __webpack_require__(/*! raw-loader!./article-from.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/articles/article-from/article-from.component.html"),
            styles: [__webpack_require__(/*! ./article-from.component.css */ "./src/app/features/article/articles/article-from/article-from.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
    ], ArticleFromComponent);
    return ArticleFromComponent;
}());



/***/ }),

/***/ "./src/app/features/article/articles/articles.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/article/articles/articles.component.ts ***!
  \*****************************************************************/
/*! exports provided: ArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function() { return ArticlesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_article_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/article/article */ "./src/app/features/store/article/article/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _article_from_article_from_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article-from/article-from.component */ "./src/app/features/article/articles/article-from/article-from.component.ts");
/* harmony import */ var _articlesizes_articlesize_form_articlesize_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../articlesizes/articlesize-form/articlesize-form.component */ "./src/app/features/article/articlesizes/articlesize-form/articlesize-form.component.ts");
/* harmony import */ var _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/dialogs/dialogs.service */ "./src/app/shared/dialogs/dialogs.service.ts");









var ArticlesComponent = /** @class */ (function () {
    function ArticlesComponent(store, modalService, dialogService) {
        this.store = store;
        this.modalService = modalService;
        this.dialogService = dialogService;
        this.deleteItemName = 'Article';
        this.deleteMessage = 'Do you wish to delete this';
        this.columns = [
            { title: 'Client', value: ['client', 'name'], sortable: true },
            { title: 'Model', value: ['model', 'name'], sortable: true },
            { title: 'Article Name', value: 'name', sortable: true },
            { title: 'Art Number', value: 'art_number', sortable: true },
            { title: 'Status', value: 'status', bool: true, sortable: true },
        ];
    }
    ArticlesComponent.prototype.ngOnInit = function () {
        this.store.dispatch(Object(_store_article_article__WEBPACK_IMPORTED_MODULE_1__["loadArticles"])());
        this.article = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_1__["selectAllArticles"]);
    };
    ArticlesComponent.prototype.onCreate = function () {
        var initialState = {
            title: 'Add',
            imageurl: 'assets/img/demo/upload.png'
        };
        this.modalService.show(_article_from_article_from_component__WEBPACK_IMPORTED_MODULE_5__["ArticleFromComponent"], { initialState: initialState, class: 'modal-lg' });
    };
    ArticlesComponent.prototype.onEdit = function (article) {
        var initialState = {
            article: article,
            title: 'Update',
            imageurl: article.image
        };
        this.modalService.show(_article_from_article_from_component__WEBPACK_IMPORTED_MODULE_5__["ArticleFromComponent"], { initialState: initialState, class: 'modal-lg' });
    };
    ArticlesComponent.prototype.ondelete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialogService.confirm({
                            title: "<i class='fal fa-times-circle text-danger mr-2'></i>\n        " + this.deleteMessage + " <span class='fw-500'>&nbsp;" + [this.deleteItemName] + " &nbsp;</span>?",
                            message: "<span><strong>Warning:</strong> This action cannot be undone!</span>",
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
                        }).toPromise()];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.store.dispatch(Object(_store_article_article__WEBPACK_IMPORTED_MODULE_1__["deleteArticle"])({ data: id }));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticlesComponent.prototype.oncreateartsize = function (article) {
        var initialState = {
            article: article,
            title: 'Create',
        };
        this.modalService.show(_articlesizes_articlesize_form_articlesize_form_component__WEBPACK_IMPORTED_MODULE_6__["ArticlesizeFormComponent"], { initialState: initialState, class: 'modal-lg' });
    };
    ArticlesComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__["DialogsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticlesComponent.prototype, "deleteItemName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticlesComponent.prototype, "deleteMessage", void 0);
    ArticlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'smart-articles',
            template: __webpack_require__(/*! raw-loader!./articles.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/articles/articles.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__["DialogsService"]])
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ }),

/***/ "./src/app/features/article/articlesizes/articlesize-form/articlesize-form.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/features/article/articlesizes/articlesize-form/articlesize-form.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FydGljbGUvYXJ0aWNsZXNpemVzL2FydGljbGVzaXplLWZvcm0vYXJ0aWNsZXNpemUtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/article/articlesizes/articlesize-form/articlesize-form.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/article/articlesizes/articlesize-form/articlesize-form.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ArticlesizeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesizeFormComponent", function() { return ArticlesizeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_article_articlesize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/article/articlesize */ "./src/app/features/store/article/articlesize/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_customer_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/customer/client */ "./src/app/features/store/customer/client/index.ts");
/* harmony import */ var _store_article_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/article/model */ "./src/app/features/store/article/model/index.ts");
/* harmony import */ var _store_article_article__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/article/article */ "./src/app/features/store/article/article/index.ts");
/* harmony import */ var _store_article_carton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/article/carton */ "./src/app/features/store/article/carton/index.ts");
/* harmony import */ var _store_settings_uom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/settings/uom */ "./src/app/features/store/settings/uom/index.ts");










var ArticlesizeFormComponent = /** @class */ (function () {
    function ArticlesizeFormComponent(fb, store) {
        this.fb = fb;
        this.store = store;
        this.title = "Add";
        this.submitted = false;
    }
    Object.defineProperty(ArticlesizeFormComponent.prototype, "f", {
        get: function () { return this.fg.controls; },
        enumerable: true,
        configurable: true
    });
    ArticlesizeFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.store.dispatch(Object(_store_customer_client__WEBPACK_IMPORTED_MODULE_5__["loadClients"])());
        this.clients = this.store.select(_store_customer_client__WEBPACK_IMPORTED_MODULE_5__["selectAllClients"]);
        // this.store.dispatch(loadArticles())
        // this.article = this.store.select(selectAllArticles)
        this.store.dispatch(Object(_store_article_carton__WEBPACK_IMPORTED_MODULE_8__["loadCartons"])());
        this.carton = this.store.select(_store_article_carton__WEBPACK_IMPORTED_MODULE_8__["selectAllCartons"]);
        this.store.dispatch(Object(_store_settings_uom__WEBPACK_IMPORTED_MODULE_9__["loadUoms"])());
        this.uom = this.store.select(_store_settings_uom__WEBPACK_IMPORTED_MODULE_9__["selectAllUoms"]);
        if (this.articlesize) {
            this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_6__["selectByClientID"], this.articlesize.client.id);
            this.articles = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_7__["selectByModelsID"], this.articlesize.model.id);
        }
        if (this.article) {
            this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_6__["selectByClientID"], this.article.client.id);
            this.articles = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_7__["selectByModelsID"], this.article.model.id);
        }
    };
    ArticlesizeFormComponent.prototype.buildForm = function () {
        this.fg = this.fb.group({
            id: [this.articlesize ? this.articlesize.id : null],
            client: [this.article ? this.article.client.id : this.articlesize ? this.articlesize.client.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            model: [this.article ? this.article.model.id : this.articlesize ? this.articlesize.model.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            article: [this.article ? this.article.id : this.articlesize ? this.articlesize.article.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            size: [this.articlesize ? this.articlesize.size : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            carton: [this.articlesize ? this.articlesize.carton : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            qty_per_carton: [this.articlesize ? this.articlesize.qty_per_carton : 0],
            unit_price: [this.articlesize ? this.articlesize.unit_price : 0],
            sale_price: [this.articlesize ? this.articlesize.sale_price : 0],
            base_uom: [this.articlesize ? this.articlesize.base_uom : ''],
            weight_uom: [this.articlesize ? this.articlesize.weight_uom : ''],
            dimension: [this.articlesize ? this.articlesize.dimension : ''],
            description: [this.articlesize ? this.articlesize.description : ''],
            tac_time: [this.articlesize ? this.articlesize.tac_time : ''],
            reference: [this.articlesize ? this.articlesize.reference : ''],
            net_weight: [this.articlesize ? this.articlesize.net_weight : 0],
            net_net_weight: [this.articlesize ? this.articlesize.net_net_weight : 0],
            barcode: [this.articlesize ? this.articlesize.barcode : ''],
            ean_barcode: [this.articlesize ? this.articlesize.ean_barcode : ''],
            upc_barcode: [this.articlesize ? this.articlesize.upc_barcode : ''],
            any_other_barcode: [this.articlesize ? this.articlesize.any_other_barcode : ''],
            status: [this.articlesize ? this.articlesize.status : '']
        });
    };
    ArticlesizeFormComponent.prototype.onChangeClient = function (event) {
        this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_6__["selectByClientID"], event);
    };
    ArticlesizeFormComponent.prototype.onChangeModel = function (event) {
        this.articles = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_7__["selectByModelsID"], event);
    };
    ArticlesizeFormComponent.prototype.onSubmit = function (event) {
        var _this = this;
        Object.keys(this.fg.controls).forEach(function (field) {
            var control = _this.fg.get(field);
            control.markAsTouched({ onlySelf: true });
            control.markAsDirty({ onlySelf: true });
        });
        if (this.fg.invalid)
            return;
        this.store.dispatch(Object(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_2__["addArticlesize"])({ data: this.fg.value }));
    };
    ArticlesizeFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    ArticlesizeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'smart-articlesize-form',
            template: __webpack_require__(/*! raw-loader!./articlesize-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/articlesizes/articlesize-form/articlesize-form.component.html"),
            styles: [__webpack_require__(/*! ./articlesize-form.component.css */ "./src/app/features/article/articlesizes/articlesize-form/articlesize-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], ArticlesizeFormComponent);
    return ArticlesizeFormComponent;
}());



/***/ }),

/***/ "./src/app/features/article/articlesizes/articlesizes.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/article/articlesizes/articlesizes.component.ts ***!
  \*************************************************************************/
/*! exports provided: ArticlesizesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesizesComponent", function() { return ArticlesizesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_article_articlesize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/article/articlesize */ "./src/app/features/store/article/articlesize/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _articlesize_form_articlesize_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articlesize-form/articlesize-form.component */ "./src/app/features/article/articlesizes/articlesize-form/articlesize-form.component.ts");
/* harmony import */ var _productionlines_prdlines_form_prdlines_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../productionlines/prdlines-form/prdlines-form.component */ "./src/app/features/article/productionlines/prdlines-form/prdlines-form.component.ts");
/* harmony import */ var _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/dialogs/dialogs.service */ "./src/app/shared/dialogs/dialogs.service.ts");








var ArticlesizesComponent = /** @class */ (function () {
    function ArticlesizesComponent(store, modalService, dialogService) {
        this.store = store;
        this.modalService = modalService;
        this.dialogService = dialogService;
        this.deleteItemName = 'Size';
        this.deleteMessage = 'Do you wish to delete this';
        this.columns = [
            { title: 'Client', value: ['client', 'name'], sortable: true },
            { title: 'Model', value: ['model', 'name'], sortable: true },
            { title: 'Article', value: ['article', 'name'], sortable: true },
            { title: 'Article Size', value: 'size', sortable: true },
            { title: 'Status', value: 'status', bool: true },
        ];
    }
    ArticlesizesComponent.prototype.ngOnInit = function () {
        this.store.dispatch(Object(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_1__["loadArticlesizes"])());
        this.articlesize = this.store.select(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_1__["selectAllArticlesizes"]);
    };
    ArticlesizesComponent.prototype.onCreate = function () {
        var initialState = {
            title: 'Add',
        };
        this.modalService.show(_articlesize_form_articlesize_form_component__WEBPACK_IMPORTED_MODULE_5__["ArticlesizeFormComponent"], { initialState: initialState, class: 'modal-lg' });
    };
    ArticlesizesComponent.prototype.onEdit = function (articlesize) {
        var initialState = {
            articlesize: articlesize,
            title: 'Update',
        };
        this.modalService.show(_articlesize_form_articlesize_form_component__WEBPACK_IMPORTED_MODULE_5__["ArticlesizeFormComponent"], { initialState: initialState, class: 'modal-lg' });
    };
    ArticlesizesComponent.prototype.ondelete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialogService.confirm({
                            title: "<i class='fal fa-times-circle text-danger mr-2'></i>\n        " + this.deleteMessage + " <span class='fw-500'>&nbsp;" + [this.deleteItemName] + " &nbsp;</span>?",
                            message: "<span><strong>Warning:</strong> This action cannot be undone!</span>",
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
                        }).toPromise()];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.store.dispatch(Object(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_1__["deleteArticlesize"])({ data: id }));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticlesizesComponent.prototype.oncreateprdlines = function (articlesize) {
        var initialState = {
            articlesize: articlesize,
            title: 'Create',
        };
        this.modalService.show(_productionlines_prdlines_form_prdlines_form_component__WEBPACK_IMPORTED_MODULE_6__["PrdlinesFormComponent"], { initialState: initialState, class: 'modal-mx' });
    };
    ArticlesizesComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__["DialogsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticlesizesComponent.prototype, "deleteItemName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticlesizesComponent.prototype, "deleteMessage", void 0);
    ArticlesizesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'smart-articlesizes',
            template: __webpack_require__(/*! raw-loader!./articlesizes.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/articlesizes/articlesizes.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__["DialogsService"]])
    ], ArticlesizesComponent);
    return ArticlesizesComponent;
}());



/***/ }),

/***/ "./src/app/features/article/cartons/cartons.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/article/cartons/cartons.component.ts ***!
  \***************************************************************/
/*! exports provided: CartonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartonsComponent", function() { return CartonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_article_carton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/article/carton */ "./src/app/features/store/article/carton/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_settings_uom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/settings/uom */ "./src/app/features/store/settings/uom/index.ts");






var CartonsComponent = /** @class */ (function () {
    function CartonsComponent(store) {
        this.store = store;
        this.selectAllSelector = _store_article_carton__WEBPACK_IMPORTED_MODULE_1__["selectAllCartons"];
        this.selectCurrent = _store_article_carton__WEBPACK_IMPORTED_MODULE_1__["selectCurrentCarton"];
        this.form = [];
        this.columns = [
            { title: 'Carton Name', value: 'name' },
            { title: 'UOM', value: ['unit', 'name'] },
            { title: 'Status', value: 'status', bool: true },
        ];
    }
    CartonsComponent.prototype.ngOnInit = function () {
        this.store.dispatch(Object(_store_settings_uom__WEBPACK_IMPORTED_MODULE_5__["loadUoms"])());
        this.uom = this.store.select(_store_settings_uom__WEBPACK_IMPORTED_MODULE_5__["selectAllUoms"]);
        this.form = [
            {
                row: [
                    { label: 'Carton Name', name: 'name', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'Length', name: 'length', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'Width', name: 'width', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'Height', name: 'height', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'Weight', name: 'weight', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'UOM', name: 'unit', items: this.uom, validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, type: 'select' },
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
    };
    CartonsComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    CartonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'smart-cartons',
            template: __webpack_require__(/*! raw-loader!./cartons.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/cartons/cartons.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], CartonsComponent);
    return CartonsComponent;
}());



/***/ }),

/***/ "./src/app/features/article/models/model-form/model-form.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/features/article/models/model-form/model-form.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FydGljbGUvbW9kZWxzL21vZGVsLWZvcm0vbW9kZWwtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/article/models/model-form/model-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/article/models/model-form/model-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: ModelFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelFormComponent", function() { return ModelFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_article_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/article/model */ "./src/app/features/store/article/model/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_customer_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/customer/client */ "./src/app/features/store/customer/client/index.ts");
/* harmony import */ var _store_article_season__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/article/season */ "./src/app/features/store/article/season/index.ts");
/* harmony import */ var _store_article_range__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/article/range */ "./src/app/features/store/article/range/index.ts");
/* harmony import */ var _store_article_articlecatagory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/article/articlecatagory */ "./src/app/features/store/article/articlecatagory/index.ts");
/* harmony import */ var _store_settings_factorycode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/settings/factorycode */ "./src/app/features/store/settings/factorycode/index.ts");










var ModelFormComponent = /** @class */ (function () {
    function ModelFormComponent(fb, store) {
        this.fb = fb;
        this.store = store;
        this.title = "Add";
        this.submitted = false;
    }
    Object.defineProperty(ModelFormComponent.prototype, "f", {
        get: function () { return this.fg.controls; },
        enumerable: true,
        configurable: true
    });
    ModelFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.store.dispatch(Object(_store_customer_client__WEBPACK_IMPORTED_MODULE_5__["loadClients"])());
        this.clients = this.store.select(_store_customer_client__WEBPACK_IMPORTED_MODULE_5__["selectAllClients"]);
        this.store.dispatch(Object(_store_article_season__WEBPACK_IMPORTED_MODULE_6__["loadSeasons"])());
        this.season = this.store.select(_store_article_season__WEBPACK_IMPORTED_MODULE_6__["selectAllSeasons"]);
        this.store.dispatch(Object(_store_settings_factorycode__WEBPACK_IMPORTED_MODULE_9__["loadFactorycodes"])());
        this.factorycode = this.store.select(_store_settings_factorycode__WEBPACK_IMPORTED_MODULE_9__["selectAllFactorycodes"]);
        this.store.dispatch(Object(_store_article_range__WEBPACK_IMPORTED_MODULE_7__["loadRanges"])());
        this.range = this.store.select(_store_article_range__WEBPACK_IMPORTED_MODULE_7__["selectAllRanges"]);
        this.store.dispatch(Object(_store_article_articlecatagory__WEBPACK_IMPORTED_MODULE_8__["loadArticlecatagorys"])());
        this.category = this.store.select(_store_article_articlecatagory__WEBPACK_IMPORTED_MODULE_8__["selectAllArticlecatagorys"]);
    };
    ModelFormComponent.prototype.buildForm = function () {
        this.fg = this.fb.group({
            id: [this.models ? this.models.id : null],
            client: [this.models ? this.models.client.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            code: [this.models ? this.models.code : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            category: [this.models ? this.models.category : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            range: [this.models ? this.models.range : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            season: [this.models ? this.models.season : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: [this.models ? this.models.name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            factory: [this.models ? this.models.factory : null],
            working_no: [this.models ? this.models.working_no : ''],
            event_desc: [this.models ? this.models.event_desc : ''],
            ad_path: [this.models ? this.models.ad_path : ''],
            description: [this.models ? this.models.description : ''],
            edit_status: [this.models ? this.models.edit_status : ''],
            status: [this.models ? this.models.status : '']
        });
    };
    ModelFormComponent.prototype.onSubmit = function (event) {
        var _this = this;
        Object.keys(this.fg.controls).forEach(function (field) {
            var control = _this.fg.get(field);
            control.markAsTouched({ onlySelf: true });
            control.markAsDirty({ onlySelf: true });
        });
        if (this.fg.invalid)
            return;
        this.store.dispatch(Object(_store_article_model__WEBPACK_IMPORTED_MODULE_2__["addModel"])({ data: this.fg.value }));
    };
    ModelFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    ModelFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'smart-model-form',
            template: __webpack_require__(/*! raw-loader!./model-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/models/model-form/model-form.component.html"),
            styles: [__webpack_require__(/*! ./model-form.component.css */ "./src/app/features/article/models/model-form/model-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], ModelFormComponent);
    return ModelFormComponent;
}());



/***/ }),

/***/ "./src/app/features/article/models/models.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/article/models/models.component.ts ***!
  \*************************************************************/
/*! exports provided: ModelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelsComponent", function() { return ModelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_article_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/article/model */ "./src/app/features/store/article/model/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _model_form_model_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model-form/model-form.component */ "./src/app/features/article/models/model-form/model-form.component.ts");
/* harmony import */ var _articles_article_from_article_from_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../articles/article-from/article-from.component */ "./src/app/features/article/articles/article-from/article-from.component.ts");
/* harmony import */ var _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/dialogs/dialogs.service */ "./src/app/shared/dialogs/dialogs.service.ts");








var ModelsComponent = /** @class */ (function () {
    function ModelsComponent(store, modalService, dialogService) {
        this.store = store;
        this.modalService = modalService;
        this.dialogService = dialogService;
        this.deleteItemName = 'Model';
        this.deleteMessage = 'Do you wish to delete this';
        this.columns = [
            { title: 'Client', value: ['client', 'name'], sortable: true },
            { title: 'Model', value: 'name', sortable: true },
            { title: 'Status', value: 'status', bool: true, sortable: true },
        ];
    }
    ModelsComponent.prototype.ngOnInit = function () {
        this.store.dispatch(Object(_store_article_model__WEBPACK_IMPORTED_MODULE_1__["loadModels"])());
        this.models = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_1__["selectAllModels"]);
    };
    ModelsComponent.prototype.onCreate = function () {
        var initialState = {
            title: 'Add',
        };
        this.modalService.show(_model_form_model_form_component__WEBPACK_IMPORTED_MODULE_5__["ModelFormComponent"], { initialState: initialState, class: 'modal-lg' });
    };
    ModelsComponent.prototype.onEdit = function (models) {
        var initialState = {
            models: models,
            title: 'Update',
        };
        this.modalService.show(_model_form_model_form_component__WEBPACK_IMPORTED_MODULE_5__["ModelFormComponent"], { initialState: initialState, class: 'modal-lg' });
    };
    ModelsComponent.prototype.ondelete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialogService.confirm({
                            title: "<i class='fal fa-times-circle text-danger mr-2'></i>\n      " + this.deleteMessage + "  <span class='fw-500'>&nbsp;" + [this.deleteItemName] + "&nbsp;</span>?",
                            message: "<span><strong>Warning:</strong> This action cannot be undone!</span>",
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
                        }).toPromise()];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.store.dispatch(Object(_store_article_model__WEBPACK_IMPORTED_MODULE_1__["deleteModel"])({ data: id }));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ModelsComponent.prototype.oncreateMaterial = function (models) {
        var initialState = {
            models: models,
            title: 'Create',
        };
        this.modalService.show(_articles_article_from_article_from_component__WEBPACK_IMPORTED_MODULE_6__["ArticleFromComponent"], { initialState: initialState, class: 'modal-lg' });
    };
    ModelsComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__["DialogsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModelsComponent.prototype, "deleteItemName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModelsComponent.prototype, "deleteMessage", void 0);
    ModelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'smart-models',
            template: __webpack_require__(/*! raw-loader!./models.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/models/models.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__["DialogsService"]])
    ], ModelsComponent);
    return ModelsComponent;
}());



/***/ }),

/***/ "./src/app/features/article/productionlines/prdlines-form/prdlines-form.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/features/article/productionlines/prdlines-form/prdlines-form.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FydGljbGUvcHJvZHVjdGlvbmxpbmVzL3ByZGxpbmVzLWZvcm0vcHJkbGluZXMtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/article/productionlines/prdlines-form/prdlines-form.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/article/productionlines/prdlines-form/prdlines-form.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PrdlinesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrdlinesFormComponent", function() { return PrdlinesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_article_productionline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/article/productionline */ "./src/app/features/store/article/productionline/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_customer_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/customer/client */ "./src/app/features/store/customer/client/index.ts");
/* harmony import */ var _store_article_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/article/model */ "./src/app/features/store/article/model/index.ts");
/* harmony import */ var _store_article_article__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/article/article */ "./src/app/features/store/article/article/index.ts");
/* harmony import */ var _store_article_articlesize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/article/articlesize */ "./src/app/features/store/article/articlesize/index.ts");









var PrdlinesFormComponent = /** @class */ (function () {
    function PrdlinesFormComponent(fb, store) {
        this.fb = fb;
        this.store = store;
        this.title = "Add";
        this.submitted = false;
    }
    Object.defineProperty(PrdlinesFormComponent.prototype, "f", {
        get: function () { return this.fg.controls; },
        enumerable: true,
        configurable: true
    });
    PrdlinesFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.store.dispatch(Object(_store_customer_client__WEBPACK_IMPORTED_MODULE_5__["loadClients"])());
        this.clients = this.store.select(_store_customer_client__WEBPACK_IMPORTED_MODULE_5__["selectAllClients"]);
        if (this.productionline) {
            this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_6__["selectByClientID"], this.productionline.client.id);
            this.article = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_7__["selectByModelsID"], this.productionline.model.id);
            this.sizes = this.store.select(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_8__["selectByArticleID"], this.productionline.article.id);
        }
        if (this.articlesize) {
            this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_6__["selectByClientID"], this.articlesize.client.id);
            this.article = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_7__["selectByModelsID"], this.articlesize.model.id);
            this.sizes = this.store.select(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_8__["selectByArticleID"], this.articlesize.article.id);
        }
    };
    PrdlinesFormComponent.prototype.buildForm = function () {
        this.fg = this.fb.group({
            id: [this.productionline ? this.productionline.id : null],
            client: [this.articlesize ? this.articlesize.client.id : this.productionline ? this.productionline.client.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            model: [this.articlesize ? this.articlesize.model.id : this.productionline ? this.productionline.model.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            article: [this.articlesize ? this.articlesize.article.id : this.productionline ? this.productionline.article.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            size: [this.articlesize ? this.articlesize.id : this.productionline ? this.productionline.size.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: [this.productionline ? this.productionline.name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: [this.productionline ? this.productionline.status : '']
        });
    };
    PrdlinesFormComponent.prototype.onChangeClient = function (event) {
        this.model = this.store.select(_store_article_model__WEBPACK_IMPORTED_MODULE_6__["selectByClientID"], event);
    };
    PrdlinesFormComponent.prototype.onChangeModel = function (event) {
        this.article = this.store.select(_store_article_article__WEBPACK_IMPORTED_MODULE_7__["selectByModelsID"], event);
    };
    PrdlinesFormComponent.prototype.onChangeArticle = function (event) {
        this.sizes = this.store.select(_store_article_articlesize__WEBPACK_IMPORTED_MODULE_8__["selectByArticleID"], event);
    };
    PrdlinesFormComponent.prototype.onSubmit = function (event) {
        var _this = this;
        Object.keys(this.fg.controls).forEach(function (field) {
            var control = _this.fg.get(field);
            control.markAsTouched({ onlySelf: true });
            control.markAsDirty({ onlySelf: true });
        });
        if (this.fg.invalid)
            return;
        this.store.dispatch(Object(_store_article_productionline__WEBPACK_IMPORTED_MODULE_2__["addProductionline"])({ data: this.fg.value }));
    };
    PrdlinesFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    PrdlinesFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'smart-prdlines-form',
            template: __webpack_require__(/*! raw-loader!./prdlines-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/productionlines/prdlines-form/prdlines-form.component.html"),
            styles: [__webpack_require__(/*! ./prdlines-form.component.css */ "./src/app/features/article/productionlines/prdlines-form/prdlines-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], PrdlinesFormComponent);
    return PrdlinesFormComponent;
}());



/***/ }),

/***/ "./src/app/features/article/productionlines/productionlines.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/article/productionlines/productionlines.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductionlinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionlinesComponent", function() { return ProductionlinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_article_productionline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/article/productionline */ "./src/app/features/store/article/productionline/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _prdlines_form_prdlines_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prdlines-form/prdlines-form.component */ "./src/app/features/article/productionlines/prdlines-form/prdlines-form.component.ts");
/* harmony import */ var _articlematerials_material_form_material_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../articlematerials/material-form/material-form.component */ "./src/app/features/article/articlematerials/material-form/material-form.component.ts");
/* harmony import */ var _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/dialogs/dialogs.service */ "./src/app/shared/dialogs/dialogs.service.ts");








var ProductionlinesComponent = /** @class */ (function () {
    function ProductionlinesComponent(store, modalService, dialogService) {
        this.store = store;
        this.modalService = modalService;
        this.dialogService = dialogService;
        this.deleteItemName = 'Line';
        this.deleteMessage = 'Do you wish to delete this';
        this.columns = [
            { title: 'Client', value: ['client', 'name'], sortable: true },
            { title: 'Model', value: ['model', 'name'], sortable: true },
            { title: 'Article', value: ['article', 'name'], sortable: true },
            { title: 'Article Size', value: ['size', 'size'], sortable: true },
            { title: 'Production Line', value: 'name' },
            { title: 'Status', value: 'status', bool: true },
        ];
    }
    ProductionlinesComponent.prototype.ngOnInit = function () {
        this.store.dispatch(Object(_store_article_productionline__WEBPACK_IMPORTED_MODULE_1__["loadProductionlines"])());
        this.productionline = this.store.select(_store_article_productionline__WEBPACK_IMPORTED_MODULE_1__["selectAllProductionlines"]);
    };
    ProductionlinesComponent.prototype.onCreate = function () {
        var initialState = {
            title: 'Add',
        };
        this.modalService.show(_prdlines_form_prdlines_form_component__WEBPACK_IMPORTED_MODULE_5__["PrdlinesFormComponent"], { initialState: initialState, class: 'modal-mx' });
    };
    ProductionlinesComponent.prototype.onEdit = function (productionline) {
        var initialState = {
            productionline: productionline,
            title: 'Update',
        };
        this.modalService.show(_prdlines_form_prdlines_form_component__WEBPACK_IMPORTED_MODULE_5__["PrdlinesFormComponent"], { initialState: initialState, class: 'modal-mx' });
    };
    ProductionlinesComponent.prototype.ondelete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialogService.confirm({
                            title: "<i class='fal fa-times-circle text-danger mr-2'></i>\n      " + this.deleteMessage + " <span class='fw-500'>&nbsp;" + [this.deleteItemName] + " &nbsp;</span>?",
                            message: "<span><strong>Warning:</strong> This action cannot be undone!</span>",
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
                        }).toPromise()];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.store.dispatch(Object(_store_article_productionline__WEBPACK_IMPORTED_MODULE_1__["deleteProductionline"])({ data: id }));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductionlinesComponent.prototype.oncreateMaterial = function (productionline) {
        var initialState = {
            productionline: productionline,
            title: 'Create',
        };
        this.modalService.show(_articlematerials_material_form_material_form_component__WEBPACK_IMPORTED_MODULE_6__["MaterialFormComponent"], { initialState: initialState, class: 'modal-lg' });
    };
    ProductionlinesComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__["DialogsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductionlinesComponent.prototype, "deleteItemName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductionlinesComponent.prototype, "deleteMessage", void 0);
    ProductionlinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'smart-productionlines',
            template: __webpack_require__(/*! raw-loader!./productionlines.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/productionlines/productionlines.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_7__["DialogsService"]])
    ], ProductionlinesComponent);
    return ProductionlinesComponent;
}());



/***/ }),

/***/ "./src/app/features/article/ranges/ranges.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/article/ranges/ranges.component.ts ***!
  \*************************************************************/
/*! exports provided: RangesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangesComponent", function() { return RangesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_article_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/article/range */ "./src/app/features/store/article/range/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var RangesComponent = /** @class */ (function () {
    function RangesComponent() {
        this.form = [
            {
                row: [
                    { label: 'Range Name', name: 'name', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'Remarks', name: 'remarks', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
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
            { title: 'Range Name', value: 'name' },
            { title: 'Remarks', value: 'remarks' },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.selectAllSelector = _store_article_range__WEBPACK_IMPORTED_MODULE_1__["selectAllRanges"];
        this.selectCurrent = _store_article_range__WEBPACK_IMPORTED_MODULE_1__["selectCurrentRange"];
    }
    RangesComponent.prototype.ngOnInit = function () {
    };
    RangesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'smart-ranges',
            template: __webpack_require__(/*! raw-loader!./ranges.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/ranges/ranges.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RangesComponent);
    return RangesComponent;
}());



/***/ }),

/***/ "./src/app/features/article/seasons/seasons.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/article/seasons/seasons.component.ts ***!
  \***************************************************************/
/*! exports provided: SeasonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonsComponent", function() { return SeasonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_article_season__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/article/season */ "./src/app/features/store/article/season/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var SeasonsComponent = /** @class */ (function () {
    function SeasonsComponent() {
        this.form = [
            {
                row: [
                    { label: 'Season Name', name: 'name', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'Remarks', name: 'remarks', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
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
            { title: 'Season Name', value: 'name' },
            { title: 'Remarks', value: 'remarks' },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.selectAllSelector = _store_article_season__WEBPACK_IMPORTED_MODULE_1__["selectAllSeasons"];
        this.selectCurrent = _store_article_season__WEBPACK_IMPORTED_MODULE_1__["selectCurrentSeason"];
    }
    SeasonsComponent.prototype.ngOnInit = function () {
    };
    SeasonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'smart-seasons',
            template: __webpack_require__(/*! raw-loader!./seasons.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/article/seasons/seasons.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SeasonsComponent);
    return SeasonsComponent;
}());



/***/ }),

/***/ "./src/app/features/store/article/articlecatagory/articlecatagory.actions.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/store/article/articlecatagory/articlecatagory.actions.ts ***!
  \***********************************************************************************/
/*! exports provided: loadArticlecatagorys, loadArticlecatagorysSuccess, addArticlecatagory, addArticlecatagorySuccess, deleteArticlecatagory, deleteArticlecatagorySuccess, selectCurrentArticlecatagorySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticlecatagorys", function() { return loadArticlecatagorys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticlecatagorysSuccess", function() { return loadArticlecatagorysSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addArticlecatagory", function() { return addArticlecatagory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addArticlecatagorySuccess", function() { return addArticlecatagorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticlecatagory", function() { return deleteArticlecatagory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticlecatagorySuccess", function() { return deleteArticlecatagorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlecatagorySuccess", function() { return selectCurrentArticlecatagorySuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadArticlecatagorys = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlecatagory/API] Load Articlecatagorys');
var loadArticlecatagorysSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlecatagory/API] Load Articlecatagorys Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addArticlecatagory = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlecatagory/API] Add Articlecatagory', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addArticlecatagorySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlecatagory/API] Add Articlecatagory Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteArticlecatagory = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlecatagory/API] Delete Articlecatagory', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteArticlecatagorySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlecatagory/API] Delete Articlecatagory Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentArticlecatagorySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlecatagory/API] Select Current Articlecatagory', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/article/articlecatagory/articlecatagory.effects.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/store/article/articlecatagory/articlecatagory.effects.ts ***!
  \***********************************************************************************/
/*! exports provided: ArticlecatagoryEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlecatagoryEffects", function() { return ArticlecatagoryEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _articlecatagory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articlecatagory.service */ "./src/app/features/store/article/articlecatagory/articlecatagory.service.ts");
/* harmony import */ var _articlecatagory_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articlecatagory.actions */ "./src/app/features/store/article/articlecatagory/articlecatagory.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _articlecatagory_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./articlecatagory.selectors */ "./src/app/features/store/article/articlecatagory/articlecatagory.selectors.ts");








var ArticlecatagoryEffects = /** @class */ (function () {
    function ArticlecatagoryEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadArticlecatagorys$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_articlecatagory_actions__WEBPACK_IMPORTED_MODULE_5__["loadArticlecatagorys"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_articlecatagory_selectors__WEBPACK_IMPORTED_MODULE_7__["allArticlecatagoryLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_articlecatagory_actions__WEBPACK_IMPORTED_MODULE_5__["loadArticlecatagorysSuccess"])({ data: data }); })); })); });
        this.addArticlecatagory$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_articlecatagory_actions__WEBPACK_IMPORTED_MODULE_5__["addArticlecatagory"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_articlecatagory_actions__WEBPACK_IMPORTED_MODULE_5__["addArticlecatagorySuccess"])({ data: data }); })); })); });
        this.deleteArticlecatagory$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_articlecatagory_actions__WEBPACK_IMPORTED_MODULE_5__["deleteArticlecatagory"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_articlecatagory_actions__WEBPACK_IMPORTED_MODULE_5__["deleteArticlecatagorySuccess"])({ id: data.id }); }));
        })); });
    }
    ArticlecatagoryEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _articlecatagory_service__WEBPACK_IMPORTED_MODULE_4__["ArticlecatagoryService"] }
    ]; };
    ArticlecatagoryEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _articlecatagory_service__WEBPACK_IMPORTED_MODULE_4__["ArticlecatagoryService"]])
    ], ArticlecatagoryEffects);
    return ArticlecatagoryEffects;
}());



/***/ }),

/***/ "./src/app/features/store/article/articlecatagory/articlecatagory.reducer.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/store/article/articlecatagory/articlecatagory.reducer.ts ***!
  \***********************************************************************************/
/*! exports provided: articlecatagoryFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articlecatagoryFeatureKey", function() { return articlecatagoryFeatureKey; });
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
/* harmony import */ var _articlecatagory_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articlecatagory.actions */ "./src/app/features/store/article/articlecatagory/articlecatagory.actions.ts");

var _a;



var articlecatagoryFeatureKey = 'articlecatagorys';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allArticlecatagorysLoaded: false,
    currentArticlecatagory: null
});
var articlecatagoryReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articlecatagory_actions__WEBPACK_IMPORTED_MODULE_3__["addArticlecatagorySuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentArticlecatagory: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articlecatagory_actions__WEBPACK_IMPORTED_MODULE_3__["deleteArticlecatagorySuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articlecatagory_actions__WEBPACK_IMPORTED_MODULE_3__["loadArticlecatagorysSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articlecatagory_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentArticlecatagorySuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentArticlecatagory: action.data })); }));
function reducer(state, action) {
    return articlecatagoryReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/article/articlecatagory/articlecatagory.selectors.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/store/article/articlecatagory/articlecatagory.selectors.ts ***!
  \*************************************************************************************/
/*! exports provided: selectAllArticlecatagorys, allArticlecatagoryLoaded, selectCurrentArticlecatagory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllArticlecatagorys", function() { return selectAllArticlecatagorys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allArticlecatagoryLoaded", function() { return allArticlecatagoryLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlecatagory", function() { return selectCurrentArticlecatagory; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _articlecatagory_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articlecatagory.reducer */ "./src/app/features/store/article/articlecatagory/articlecatagory.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_articlecatagory_reducer__WEBPACK_IMPORTED_MODULE_1__["articlecatagoryFeatureKey"]);
var selectAllArticlecatagorys = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _articlecatagory_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allArticlecatagoryLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allArticlecatagorysLoaded; });
var selectCurrentArticlecatagory = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentArticlecatagory; });


/***/ }),

/***/ "./src/app/features/store/article/articlecatagory/articlecatagory.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/store/article/articlecatagory/articlecatagory.service.ts ***!
  \***********************************************************************************/
/*! exports provided: ArticlecatagoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlecatagoryService", function() { return ArticlecatagoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ArticlecatagoryService = /** @class */ (function () {
    function ArticlecatagoryService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/article-categories/";
    }
    ArticlecatagoryService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    ArticlecatagoryService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    ArticlecatagoryService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    ArticlecatagoryService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    ArticlecatagoryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ArticlecatagoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ArticlecatagoryService);
    return ArticlecatagoryService;
}());



/***/ }),

/***/ "./src/app/features/store/article/articlecatagory/index.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/store/article/articlecatagory/index.ts ***!
  \*****************************************************************/
/*! exports provided: ArticlecatagoryEffects, ArticlecatagoryService, selectAllArticlecatagorys, allArticlecatagoryLoaded, selectCurrentArticlecatagory, articlecatagoryFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadArticlecatagorys, loadArticlecatagorysSuccess, addArticlecatagory, addArticlecatagorySuccess, deleteArticlecatagory, deleteArticlecatagorySuccess, selectCurrentArticlecatagorySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _articlecatagory_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articlecatagory.effects */ "./src/app/features/store/article/articlecatagory/articlecatagory.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlecatagoryEffects", function() { return _articlecatagory_effects__WEBPACK_IMPORTED_MODULE_0__["ArticlecatagoryEffects"]; });

/* harmony import */ var _articlecatagory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articlecatagory.service */ "./src/app/features/store/article/articlecatagory/articlecatagory.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlecatagoryService", function() { return _articlecatagory_service__WEBPACK_IMPORTED_MODULE_1__["ArticlecatagoryService"]; });

/* harmony import */ var _articlecatagory_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articlecatagory.selectors */ "./src/app/features/store/article/articlecatagory/articlecatagory.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllArticlecatagorys", function() { return _articlecatagory_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllArticlecatagorys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allArticlecatagoryLoaded", function() { return _articlecatagory_selectors__WEBPACK_IMPORTED_MODULE_2__["allArticlecatagoryLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlecatagory", function() { return _articlecatagory_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentArticlecatagory"]; });

/* harmony import */ var _articlecatagory_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articlecatagory.reducer */ "./src/app/features/store/article/articlecatagory/articlecatagory.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "articlecatagoryFeatureKey", function() { return _articlecatagory_reducer__WEBPACK_IMPORTED_MODULE_3__["articlecatagoryFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _articlecatagory_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _articlecatagory_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _articlecatagory_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _articlecatagory_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _articlecatagory_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _articlecatagory_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _articlecatagory_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _articlecatagory_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articlecatagory.actions */ "./src/app/features/store/article/articlecatagory/articlecatagory.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadArticlecatagorys", function() { return _articlecatagory_actions__WEBPACK_IMPORTED_MODULE_4__["loadArticlecatagorys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadArticlecatagorysSuccess", function() { return _articlecatagory_actions__WEBPACK_IMPORTED_MODULE_4__["loadArticlecatagorysSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addArticlecatagory", function() { return _articlecatagory_actions__WEBPACK_IMPORTED_MODULE_4__["addArticlecatagory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addArticlecatagorySuccess", function() { return _articlecatagory_actions__WEBPACK_IMPORTED_MODULE_4__["addArticlecatagorySuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteArticlecatagory", function() { return _articlecatagory_actions__WEBPACK_IMPORTED_MODULE_4__["deleteArticlecatagory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteArticlecatagorySuccess", function() { return _articlecatagory_actions__WEBPACK_IMPORTED_MODULE_4__["deleteArticlecatagorySuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlecatagorySuccess", function() { return _articlecatagory_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentArticlecatagorySuccess"]; });








/***/ }),

/***/ "./src/app/features/store/article/articlematerial/articlematerial.actions.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/store/article/articlematerial/articlematerial.actions.ts ***!
  \***********************************************************************************/
/*! exports provided: loadArticlematerials, loadArticlematerialsSuccess, addArticlematerial, addArticlematerialSuccess, deleteArticlematerial, deleteArticlematerialSuccess, selectCurrentArticlematerialSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticlematerials", function() { return loadArticlematerials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticlematerialsSuccess", function() { return loadArticlematerialsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addArticlematerial", function() { return addArticlematerial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addArticlematerialSuccess", function() { return addArticlematerialSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticlematerial", function() { return deleteArticlematerial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticlematerialSuccess", function() { return deleteArticlematerialSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlematerialSuccess", function() { return selectCurrentArticlematerialSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadArticlematerials = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlematerial/API] Load Articlematerials');
var loadArticlematerialsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlematerial/API] Load Articlematerials Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addArticlematerial = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlematerial/API] Add Articlematerial', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addArticlematerialSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlematerial/API] Add Articlematerial Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteArticlematerial = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlematerial/API] Delete Articlematerial', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteArticlematerialSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlematerial/API] Delete Articlematerial Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentArticlematerialSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlematerial/API] Select Current Articlematerial', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/article/articlematerial/articlematerial.effects.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/store/article/articlematerial/articlematerial.effects.ts ***!
  \***********************************************************************************/
/*! exports provided: ArticlematerialEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlematerialEffects", function() { return ArticlematerialEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _articlematerial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articlematerial.service */ "./src/app/features/store/article/articlematerial/articlematerial.service.ts");
/* harmony import */ var _articlematerial_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articlematerial.actions */ "./src/app/features/store/article/articlematerial/articlematerial.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _articlematerial_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./articlematerial.selectors */ "./src/app/features/store/article/articlematerial/articlematerial.selectors.ts");








var ArticlematerialEffects = /** @class */ (function () {
    function ArticlematerialEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadArticlematerials$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_articlematerial_actions__WEBPACK_IMPORTED_MODULE_5__["loadArticlematerials"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_articlematerial_selectors__WEBPACK_IMPORTED_MODULE_7__["allArticlematerialLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_articlematerial_actions__WEBPACK_IMPORTED_MODULE_5__["loadArticlematerialsSuccess"])({ data: data }); })); })); });
        this.addArticlematerial$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_articlematerial_actions__WEBPACK_IMPORTED_MODULE_5__["addArticlematerial"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_articlematerial_actions__WEBPACK_IMPORTED_MODULE_5__["addArticlematerialSuccess"])({ data: data }); })); })); });
        this.deleteArticlematerial$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_articlematerial_actions__WEBPACK_IMPORTED_MODULE_5__["deleteArticlematerial"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_articlematerial_actions__WEBPACK_IMPORTED_MODULE_5__["deleteArticlematerialSuccess"])({ id: data.id }); }));
        })); });
    }
    ArticlematerialEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _articlematerial_service__WEBPACK_IMPORTED_MODULE_4__["ArticlematerialService"] }
    ]; };
    ArticlematerialEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _articlematerial_service__WEBPACK_IMPORTED_MODULE_4__["ArticlematerialService"]])
    ], ArticlematerialEffects);
    return ArticlematerialEffects;
}());



/***/ }),

/***/ "./src/app/features/store/article/articlematerial/articlematerial.reducer.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/store/article/articlematerial/articlematerial.reducer.ts ***!
  \***********************************************************************************/
/*! exports provided: articlematerialFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articlematerialFeatureKey", function() { return articlematerialFeatureKey; });
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
/* harmony import */ var _articlematerial_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articlematerial.actions */ "./src/app/features/store/article/articlematerial/articlematerial.actions.ts");

var _a;



var articlematerialFeatureKey = 'articlematerials';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allArticlematerialsLoaded: false,
    currentArticlematerial: null
});
var articlematerialReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articlematerial_actions__WEBPACK_IMPORTED_MODULE_3__["addArticlematerialSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentArticlematerial: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articlematerial_actions__WEBPACK_IMPORTED_MODULE_3__["deleteArticlematerialSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articlematerial_actions__WEBPACK_IMPORTED_MODULE_3__["loadArticlematerialsSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articlematerial_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentArticlematerialSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentArticlematerial: action.data })); }));
function reducer(state, action) {
    return articlematerialReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/article/articlematerial/articlematerial.selectors.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/store/article/articlematerial/articlematerial.selectors.ts ***!
  \*************************************************************************************/
/*! exports provided: selectAllArticlematerials, allArticlematerialLoaded, selectCurrentArticlematerial, selectByArticleMaterialID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllArticlematerials", function() { return selectAllArticlematerials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allArticlematerialLoaded", function() { return allArticlematerialLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlematerial", function() { return selectCurrentArticlematerial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectByArticleMaterialID", function() { return selectByArticleMaterialID; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _articlematerial_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articlematerial.reducer */ "./src/app/features/store/article/articlematerial/articlematerial.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_articlematerial_reducer__WEBPACK_IMPORTED_MODULE_1__["articlematerialFeatureKey"]);
var selectAllArticlematerials = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _articlematerial_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allArticlematerialLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allArticlematerialsLoaded; });
var selectCurrentArticlematerial = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentArticlematerial; });
var selectByArticleMaterialID = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAllArticlematerials, function (articlessizes, id) {
    var size = articlessizes.filter(function (s) { return s.material.id == id; });
    return size;
});


/***/ }),

/***/ "./src/app/features/store/article/articlematerial/articlematerial.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/store/article/articlematerial/articlematerial.service.ts ***!
  \***********************************************************************************/
/*! exports provided: ArticlematerialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlematerialService", function() { return ArticlematerialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ArticlematerialService = /** @class */ (function () {
    function ArticlematerialService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/article-materials/";
    }
    ArticlematerialService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    ArticlematerialService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    ArticlematerialService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    ArticlematerialService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    ArticlematerialService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ArticlematerialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ArticlematerialService);
    return ArticlematerialService;
}());



/***/ }),

/***/ "./src/app/features/store/article/articlematerial/index.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/store/article/articlematerial/index.ts ***!
  \*****************************************************************/
/*! exports provided: ArticlematerialEffects, ArticlematerialService, selectAllArticlematerials, allArticlematerialLoaded, selectCurrentArticlematerial, selectByArticleMaterialID, articlematerialFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadArticlematerials, loadArticlematerialsSuccess, addArticlematerial, addArticlematerialSuccess, deleteArticlematerial, deleteArticlematerialSuccess, selectCurrentArticlematerialSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _articlematerial_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articlematerial.effects */ "./src/app/features/store/article/articlematerial/articlematerial.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlematerialEffects", function() { return _articlematerial_effects__WEBPACK_IMPORTED_MODULE_0__["ArticlematerialEffects"]; });

/* harmony import */ var _articlematerial_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articlematerial.service */ "./src/app/features/store/article/articlematerial/articlematerial.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlematerialService", function() { return _articlematerial_service__WEBPACK_IMPORTED_MODULE_1__["ArticlematerialService"]; });

/* harmony import */ var _articlematerial_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articlematerial.selectors */ "./src/app/features/store/article/articlematerial/articlematerial.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllArticlematerials", function() { return _articlematerial_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllArticlematerials"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allArticlematerialLoaded", function() { return _articlematerial_selectors__WEBPACK_IMPORTED_MODULE_2__["allArticlematerialLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlematerial", function() { return _articlematerial_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentArticlematerial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectByArticleMaterialID", function() { return _articlematerial_selectors__WEBPACK_IMPORTED_MODULE_2__["selectByArticleMaterialID"]; });

/* harmony import */ var _articlematerial_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articlematerial.reducer */ "./src/app/features/store/article/articlematerial/articlematerial.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "articlematerialFeatureKey", function() { return _articlematerial_reducer__WEBPACK_IMPORTED_MODULE_3__["articlematerialFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _articlematerial_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _articlematerial_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _articlematerial_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _articlematerial_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _articlematerial_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _articlematerial_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _articlematerial_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _articlematerial_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articlematerial.actions */ "./src/app/features/store/article/articlematerial/articlematerial.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadArticlematerials", function() { return _articlematerial_actions__WEBPACK_IMPORTED_MODULE_4__["loadArticlematerials"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadArticlematerialsSuccess", function() { return _articlematerial_actions__WEBPACK_IMPORTED_MODULE_4__["loadArticlematerialsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addArticlematerial", function() { return _articlematerial_actions__WEBPACK_IMPORTED_MODULE_4__["addArticlematerial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addArticlematerialSuccess", function() { return _articlematerial_actions__WEBPACK_IMPORTED_MODULE_4__["addArticlematerialSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteArticlematerial", function() { return _articlematerial_actions__WEBPACK_IMPORTED_MODULE_4__["deleteArticlematerial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteArticlematerialSuccess", function() { return _articlematerial_actions__WEBPACK_IMPORTED_MODULE_4__["deleteArticlematerialSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlematerialSuccess", function() { return _articlematerial_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentArticlematerialSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/article/articlematerialsub/articlematerialsub.actions.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/store/article/articlematerialsub/articlematerialsub.actions.ts ***!
  \*****************************************************************************************/
/*! exports provided: loadArticlematerialsubs, loadArticlematerialsubsSuccess, addArticlematerialsub, addArticlematerialsubSuccess, deleteArticlematerialsub, deleteArticlematerialsubSuccess, selectCurrentArticlematerialsubSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticlematerialsubs", function() { return loadArticlematerialsubs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticlematerialsubsSuccess", function() { return loadArticlematerialsubsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addArticlematerialsub", function() { return addArticlematerialsub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addArticlematerialsubSuccess", function() { return addArticlematerialsubSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticlematerialsub", function() { return deleteArticlematerialsub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticlematerialsubSuccess", function() { return deleteArticlematerialsubSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlematerialsubSuccess", function() { return selectCurrentArticlematerialsubSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadArticlematerialsubs = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlematerialsub/API] Load Articlematerialsubs');
var loadArticlematerialsubsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlematerialsub/API] Load Articlematerialsubs Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addArticlematerialsub = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlematerialsub/API] Add Articlematerialsub', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addArticlematerialsubSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlematerialsub/API] Add Articlematerialsub Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteArticlematerialsub = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlematerialsub/API] Delete Articlematerialsub', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteArticlematerialsubSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlematerialsub/API] Delete Articlematerialsub Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentArticlematerialsubSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlematerialsub/API] Select Current Articlematerialsub', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/article/articlematerialsub/articlematerialsub.effects.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/store/article/articlematerialsub/articlematerialsub.effects.ts ***!
  \*****************************************************************************************/
/*! exports provided: ArticlematerialsubEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlematerialsubEffects", function() { return ArticlematerialsubEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _articlematerialsub_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articlematerialsub.service */ "./src/app/features/store/article/articlematerialsub/articlematerialsub.service.ts");
/* harmony import */ var _articlematerialsub_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articlematerialsub.actions */ "./src/app/features/store/article/articlematerialsub/articlematerialsub.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _articlematerialsub_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./articlematerialsub.selectors */ "./src/app/features/store/article/articlematerialsub/articlematerialsub.selectors.ts");








var ArticlematerialsubEffects = /** @class */ (function () {
    function ArticlematerialsubEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadArticlematerialsubs$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_articlematerialsub_actions__WEBPACK_IMPORTED_MODULE_5__["loadArticlematerialsubs"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_articlematerialsub_selectors__WEBPACK_IMPORTED_MODULE_7__["allArticlematerialsubLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_articlematerialsub_actions__WEBPACK_IMPORTED_MODULE_5__["loadArticlematerialsubsSuccess"])({ data: data }); })); })); });
        this.addArticlematerialsub$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_articlematerialsub_actions__WEBPACK_IMPORTED_MODULE_5__["addArticlematerialsub"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_articlematerialsub_actions__WEBPACK_IMPORTED_MODULE_5__["addArticlematerialsubSuccess"])({ data: data }); })); })); });
        this.deleteArticlematerialsub$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_articlematerialsub_actions__WEBPACK_IMPORTED_MODULE_5__["deleteArticlematerialsub"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_articlematerialsub_actions__WEBPACK_IMPORTED_MODULE_5__["deleteArticlematerialsubSuccess"])({ id: data.id }); }));
        })); });
    }
    ArticlematerialsubEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _articlematerialsub_service__WEBPACK_IMPORTED_MODULE_4__["ArticlematerialsubService"] }
    ]; };
    ArticlematerialsubEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _articlematerialsub_service__WEBPACK_IMPORTED_MODULE_4__["ArticlematerialsubService"]])
    ], ArticlematerialsubEffects);
    return ArticlematerialsubEffects;
}());



/***/ }),

/***/ "./src/app/features/store/article/articlematerialsub/articlematerialsub.reducer.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/store/article/articlematerialsub/articlematerialsub.reducer.ts ***!
  \*****************************************************************************************/
/*! exports provided: articlematerialsubFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articlematerialsubFeatureKey", function() { return articlematerialsubFeatureKey; });
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
/* harmony import */ var _articlematerialsub_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articlematerialsub.actions */ "./src/app/features/store/article/articlematerialsub/articlematerialsub.actions.ts");

var _a;



var articlematerialsubFeatureKey = 'articlematerialsubs';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allArticlematerialsubsLoaded: false,
    currentArticlematerialsub: null
});
var articlematerialsubReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articlematerialsub_actions__WEBPACK_IMPORTED_MODULE_3__["addArticlematerialsubSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentArticlematerialsub: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articlematerialsub_actions__WEBPACK_IMPORTED_MODULE_3__["deleteArticlematerialsubSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articlematerialsub_actions__WEBPACK_IMPORTED_MODULE_3__["loadArticlematerialsubsSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articlematerialsub_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentArticlematerialsubSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentArticlematerialsub: action.data })); }));
function reducer(state, action) {
    return articlematerialsubReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/article/articlematerialsub/articlematerialsub.selectors.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/store/article/articlematerialsub/articlematerialsub.selectors.ts ***!
  \*******************************************************************************************/
/*! exports provided: selectAllArticlematerialsubs, allArticlematerialsubLoaded, selectCurrentArticlematerialsub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllArticlematerialsubs", function() { return selectAllArticlematerialsubs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allArticlematerialsubLoaded", function() { return allArticlematerialsubLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlematerialsub", function() { return selectCurrentArticlematerialsub; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _articlematerialsub_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articlematerialsub.reducer */ "./src/app/features/store/article/articlematerialsub/articlematerialsub.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_articlematerialsub_reducer__WEBPACK_IMPORTED_MODULE_1__["articlematerialsubFeatureKey"]);
var selectAllArticlematerialsubs = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _articlematerialsub_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allArticlematerialsubLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allArticlematerialsubsLoaded; });
var selectCurrentArticlematerialsub = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentArticlematerialsub; });


/***/ }),

/***/ "./src/app/features/store/article/articlematerialsub/articlematerialsub.service.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/store/article/articlematerialsub/articlematerialsub.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: ArticlematerialsubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlematerialsubService", function() { return ArticlematerialsubService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ArticlematerialsubService = /** @class */ (function () {
    function ArticlematerialsubService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/article-material-descriptions/";
    }
    ArticlematerialsubService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    ArticlematerialsubService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    ArticlematerialsubService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    ArticlematerialsubService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    ArticlematerialsubService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ArticlematerialsubService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ArticlematerialsubService);
    return ArticlematerialsubService;
}());



/***/ }),

/***/ "./src/app/features/store/article/articlematerialsub/index.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/store/article/articlematerialsub/index.ts ***!
  \********************************************************************/
/*! exports provided: ArticlematerialsubEffects, ArticlematerialsubService, selectAllArticlematerialsubs, allArticlematerialsubLoaded, selectCurrentArticlematerialsub, articlematerialsubFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadArticlematerialsubs, loadArticlematerialsubsSuccess, addArticlematerialsub, addArticlematerialsubSuccess, deleteArticlematerialsub, deleteArticlematerialsubSuccess, selectCurrentArticlematerialsubSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _articlematerialsub_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articlematerialsub.effects */ "./src/app/features/store/article/articlematerialsub/articlematerialsub.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlematerialsubEffects", function() { return _articlematerialsub_effects__WEBPACK_IMPORTED_MODULE_0__["ArticlematerialsubEffects"]; });

/* harmony import */ var _articlematerialsub_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articlematerialsub.service */ "./src/app/features/store/article/articlematerialsub/articlematerialsub.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlematerialsubService", function() { return _articlematerialsub_service__WEBPACK_IMPORTED_MODULE_1__["ArticlematerialsubService"]; });

/* harmony import */ var _articlematerialsub_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articlematerialsub.selectors */ "./src/app/features/store/article/articlematerialsub/articlematerialsub.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllArticlematerialsubs", function() { return _articlematerialsub_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllArticlematerialsubs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allArticlematerialsubLoaded", function() { return _articlematerialsub_selectors__WEBPACK_IMPORTED_MODULE_2__["allArticlematerialsubLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlematerialsub", function() { return _articlematerialsub_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentArticlematerialsub"]; });

/* harmony import */ var _articlematerialsub_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articlematerialsub.reducer */ "./src/app/features/store/article/articlematerialsub/articlematerialsub.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "articlematerialsubFeatureKey", function() { return _articlematerialsub_reducer__WEBPACK_IMPORTED_MODULE_3__["articlematerialsubFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _articlematerialsub_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _articlematerialsub_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _articlematerialsub_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _articlematerialsub_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _articlematerialsub_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _articlematerialsub_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _articlematerialsub_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _articlematerialsub_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articlematerialsub.actions */ "./src/app/features/store/article/articlematerialsub/articlematerialsub.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadArticlematerialsubs", function() { return _articlematerialsub_actions__WEBPACK_IMPORTED_MODULE_4__["loadArticlematerialsubs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadArticlematerialsubsSuccess", function() { return _articlematerialsub_actions__WEBPACK_IMPORTED_MODULE_4__["loadArticlematerialsubsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addArticlematerialsub", function() { return _articlematerialsub_actions__WEBPACK_IMPORTED_MODULE_4__["addArticlematerialsub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addArticlematerialsubSuccess", function() { return _articlematerialsub_actions__WEBPACK_IMPORTED_MODULE_4__["addArticlematerialsubSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteArticlematerialsub", function() { return _articlematerialsub_actions__WEBPACK_IMPORTED_MODULE_4__["deleteArticlematerialsub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteArticlematerialsubSuccess", function() { return _articlematerialsub_actions__WEBPACK_IMPORTED_MODULE_4__["deleteArticlematerialsubSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlematerialsubSuccess", function() { return _articlematerialsub_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentArticlematerialsubSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/article/articleme/articleme.actions.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/store/article/articleme/articleme.actions.ts ***!
  \***********************************************************************/
/*! exports provided: loadArticlemes, loadArticlemesSuccess, addArticleme, addArticlemeSuccess, deleteArticleme, deleteArticlemeSuccess, selectCurrentArticlemeSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticlemes", function() { return loadArticlemes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticlemesSuccess", function() { return loadArticlemesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addArticleme", function() { return addArticleme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addArticlemeSuccess", function() { return addArticlemeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticleme", function() { return deleteArticleme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticlemeSuccess", function() { return deleteArticlemeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlemeSuccess", function() { return selectCurrentArticlemeSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadArticlemes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articleme/API] Load Articlemes');
var loadArticlemesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articleme/API] Load Articlemes Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addArticleme = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articleme/API] Add Articleme', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addArticlemeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articleme/API] Add Articleme Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteArticleme = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articleme/API] Delete Articleme', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteArticlemeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articleme/API] Delete Articleme Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentArticlemeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articleme/API] Select Current Articleme', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/article/articleme/articleme.effects.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/store/article/articleme/articleme.effects.ts ***!
  \***********************************************************************/
/*! exports provided: ArticlemeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlemeEffects", function() { return ArticlemeEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _articleme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articleme.service */ "./src/app/features/store/article/articleme/articleme.service.ts");
/* harmony import */ var _articleme_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articleme.actions */ "./src/app/features/store/article/articleme/articleme.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _articleme_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./articleme.selectors */ "./src/app/features/store/article/articleme/articleme.selectors.ts");








var ArticlemeEffects = /** @class */ (function () {
    function ArticlemeEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadArticlemes$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_articleme_actions__WEBPACK_IMPORTED_MODULE_5__["loadArticlemes"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_articleme_selectors__WEBPACK_IMPORTED_MODULE_7__["allArticlemeLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_articleme_actions__WEBPACK_IMPORTED_MODULE_5__["loadArticlemesSuccess"])({ data: data }); })); })); });
        this.addArticleme$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_articleme_actions__WEBPACK_IMPORTED_MODULE_5__["addArticleme"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_articleme_actions__WEBPACK_IMPORTED_MODULE_5__["addArticlemeSuccess"])({ data: data }); })); })); });
        this.deleteArticleme$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_articleme_actions__WEBPACK_IMPORTED_MODULE_5__["deleteArticleme"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_articleme_actions__WEBPACK_IMPORTED_MODULE_5__["deleteArticlemeSuccess"])({ id: data.id }); }));
        })); });
    }
    ArticlemeEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _articleme_service__WEBPACK_IMPORTED_MODULE_4__["ArticlemeService"] }
    ]; };
    ArticlemeEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _articleme_service__WEBPACK_IMPORTED_MODULE_4__["ArticlemeService"]])
    ], ArticlemeEffects);
    return ArticlemeEffects;
}());



/***/ }),

/***/ "./src/app/features/store/article/articleme/articleme.reducer.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/store/article/articleme/articleme.reducer.ts ***!
  \***********************************************************************/
/*! exports provided: articlemeFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articlemeFeatureKey", function() { return articlemeFeatureKey; });
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
/* harmony import */ var _articleme_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articleme.actions */ "./src/app/features/store/article/articleme/articleme.actions.ts");

var _a;



var articlemeFeatureKey = 'articlemes';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allArticlemesLoaded: false,
    currentArticleme: null
});
var articlemeReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articleme_actions__WEBPACK_IMPORTED_MODULE_3__["addArticlemeSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentArticleme: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articleme_actions__WEBPACK_IMPORTED_MODULE_3__["deleteArticlemeSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articleme_actions__WEBPACK_IMPORTED_MODULE_3__["loadArticlemesSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articleme_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentArticlemeSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentArticleme: action.data })); }));
function reducer(state, action) {
    return articlemeReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/article/articleme/articleme.selectors.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/article/articleme/articleme.selectors.ts ***!
  \*************************************************************************/
/*! exports provided: selectAllArticlemes, allArticlemeLoaded, selectCurrentArticleme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllArticlemes", function() { return selectAllArticlemes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allArticlemeLoaded", function() { return allArticlemeLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticleme", function() { return selectCurrentArticleme; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _articleme_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articleme.reducer */ "./src/app/features/store/article/articleme/articleme.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_articleme_reducer__WEBPACK_IMPORTED_MODULE_1__["articlemeFeatureKey"]);
var selectAllArticlemes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _articleme_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allArticlemeLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allArticlemesLoaded; });
var selectCurrentArticleme = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentArticleme; });


/***/ }),

/***/ "./src/app/features/store/article/articleme/articleme.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/store/article/articleme/articleme.service.ts ***!
  \***********************************************************************/
/*! exports provided: ArticlemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlemeService", function() { return ArticlemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ArticlemeService = /** @class */ (function () {
    function ArticlemeService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/article-me/";
    }
    ArticlemeService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    ArticlemeService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    ArticlemeService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    ArticlemeService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    ArticlemeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ArticlemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ArticlemeService);
    return ArticlemeService;
}());



/***/ }),

/***/ "./src/app/features/store/article/articleme/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/store/article/articleme/index.ts ***!
  \***********************************************************/
/*! exports provided: ArticlemeEffects, ArticlemeService, selectAllArticlemes, allArticlemeLoaded, selectCurrentArticleme, articlemeFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadArticlemes, loadArticlemesSuccess, addArticleme, addArticlemeSuccess, deleteArticleme, deleteArticlemeSuccess, selectCurrentArticlemeSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _articleme_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articleme.effects */ "./src/app/features/store/article/articleme/articleme.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlemeEffects", function() { return _articleme_effects__WEBPACK_IMPORTED_MODULE_0__["ArticlemeEffects"]; });

/* harmony import */ var _articleme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articleme.service */ "./src/app/features/store/article/articleme/articleme.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlemeService", function() { return _articleme_service__WEBPACK_IMPORTED_MODULE_1__["ArticlemeService"]; });

/* harmony import */ var _articleme_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articleme.selectors */ "./src/app/features/store/article/articleme/articleme.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllArticlemes", function() { return _articleme_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllArticlemes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allArticlemeLoaded", function() { return _articleme_selectors__WEBPACK_IMPORTED_MODULE_2__["allArticlemeLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticleme", function() { return _articleme_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentArticleme"]; });

/* harmony import */ var _articleme_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articleme.reducer */ "./src/app/features/store/article/articleme/articleme.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "articlemeFeatureKey", function() { return _articleme_reducer__WEBPACK_IMPORTED_MODULE_3__["articlemeFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _articleme_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _articleme_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _articleme_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _articleme_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _articleme_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _articleme_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _articleme_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _articleme_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articleme.actions */ "./src/app/features/store/article/articleme/articleme.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadArticlemes", function() { return _articleme_actions__WEBPACK_IMPORTED_MODULE_4__["loadArticlemes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadArticlemesSuccess", function() { return _articleme_actions__WEBPACK_IMPORTED_MODULE_4__["loadArticlemesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addArticleme", function() { return _articleme_actions__WEBPACK_IMPORTED_MODULE_4__["addArticleme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addArticlemeSuccess", function() { return _articleme_actions__WEBPACK_IMPORTED_MODULE_4__["addArticlemeSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteArticleme", function() { return _articleme_actions__WEBPACK_IMPORTED_MODULE_4__["deleteArticleme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteArticlemeSuccess", function() { return _articleme_actions__WEBPACK_IMPORTED_MODULE_4__["deleteArticlemeSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlemeSuccess", function() { return _articleme_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentArticlemeSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/article/articleqca/articleqca.actions.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/article/articleqca/articleqca.actions.ts ***!
  \*************************************************************************/
/*! exports provided: loadArticleqcas, loadArticleqcasSuccess, addArticleqca, addArticleqcaSuccess, deleteArticleqca, deleteArticleqcaSuccess, selectCurrentArticleqcaSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticleqcas", function() { return loadArticleqcas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticleqcasSuccess", function() { return loadArticleqcasSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addArticleqca", function() { return addArticleqca; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addArticleqcaSuccess", function() { return addArticleqcaSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticleqca", function() { return deleteArticleqca; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticleqcaSuccess", function() { return deleteArticleqcaSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticleqcaSuccess", function() { return selectCurrentArticleqcaSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadArticleqcas = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articleqca/API] Load Articleqcas');
var loadArticleqcasSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articleqca/API] Load Articleqcas Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addArticleqca = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articleqca/API] Add Articleqca', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addArticleqcaSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articleqca/API] Add Articleqca Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteArticleqca = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articleqca/API] Delete Articleqca', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteArticleqcaSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articleqca/API] Delete Articleqca Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentArticleqcaSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articleqca/API] Select Current Articleqca', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/article/articleqca/articleqca.effects.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/article/articleqca/articleqca.effects.ts ***!
  \*************************************************************************/
/*! exports provided: ArticleqcaEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleqcaEffects", function() { return ArticleqcaEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _articleqca_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articleqca.service */ "./src/app/features/store/article/articleqca/articleqca.service.ts");
/* harmony import */ var _articleqca_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articleqca.actions */ "./src/app/features/store/article/articleqca/articleqca.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _articleqca_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./articleqca.selectors */ "./src/app/features/store/article/articleqca/articleqca.selectors.ts");








var ArticleqcaEffects = /** @class */ (function () {
    function ArticleqcaEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadArticleqcas$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_articleqca_actions__WEBPACK_IMPORTED_MODULE_5__["loadArticleqcas"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_articleqca_selectors__WEBPACK_IMPORTED_MODULE_7__["allArticleqcaLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_articleqca_actions__WEBPACK_IMPORTED_MODULE_5__["loadArticleqcasSuccess"])({ data: data }); })); })); });
        this.addArticleqca$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_articleqca_actions__WEBPACK_IMPORTED_MODULE_5__["addArticleqca"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_articleqca_actions__WEBPACK_IMPORTED_MODULE_5__["addArticleqcaSuccess"])({ data: data }); })); })); });
        this.deleteArticleqca$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_articleqca_actions__WEBPACK_IMPORTED_MODULE_5__["deleteArticleqca"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_articleqca_actions__WEBPACK_IMPORTED_MODULE_5__["deleteArticleqcaSuccess"])({ id: data.id }); }));
        })); });
    }
    ArticleqcaEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _articleqca_service__WEBPACK_IMPORTED_MODULE_4__["ArticleqcaService"] }
    ]; };
    ArticleqcaEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _articleqca_service__WEBPACK_IMPORTED_MODULE_4__["ArticleqcaService"]])
    ], ArticleqcaEffects);
    return ArticleqcaEffects;
}());



/***/ }),

/***/ "./src/app/features/store/article/articleqca/articleqca.reducer.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/article/articleqca/articleqca.reducer.ts ***!
  \*************************************************************************/
/*! exports provided: articleqcaFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleqcaFeatureKey", function() { return articleqcaFeatureKey; });
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
/* harmony import */ var _articleqca_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articleqca.actions */ "./src/app/features/store/article/articleqca/articleqca.actions.ts");

var _a;



var articleqcaFeatureKey = 'articleqcas';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allArticleqcasLoaded: false,
    currentArticleqca: null
});
var articleqcaReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articleqca_actions__WEBPACK_IMPORTED_MODULE_3__["addArticleqcaSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentArticleqca: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articleqca_actions__WEBPACK_IMPORTED_MODULE_3__["deleteArticleqcaSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articleqca_actions__WEBPACK_IMPORTED_MODULE_3__["loadArticleqcasSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articleqca_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentArticleqcaSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentArticleqca: action.data })); }));
function reducer(state, action) {
    return articleqcaReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/article/articleqca/articleqca.selectors.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/store/article/articleqca/articleqca.selectors.ts ***!
  \***************************************************************************/
/*! exports provided: selectAllArticleqcas, allArticleqcaLoaded, selectCurrentArticleqca */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllArticleqcas", function() { return selectAllArticleqcas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allArticleqcaLoaded", function() { return allArticleqcaLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticleqca", function() { return selectCurrentArticleqca; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _articleqca_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articleqca.reducer */ "./src/app/features/store/article/articleqca/articleqca.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_articleqca_reducer__WEBPACK_IMPORTED_MODULE_1__["articleqcaFeatureKey"]);
var selectAllArticleqcas = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _articleqca_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allArticleqcaLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allArticleqcasLoaded; });
var selectCurrentArticleqca = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentArticleqca; });


/***/ }),

/***/ "./src/app/features/store/article/articleqca/articleqca.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/article/articleqca/articleqca.service.ts ***!
  \*************************************************************************/
/*! exports provided: ArticleqcaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleqcaService", function() { return ArticleqcaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ArticleqcaService = /** @class */ (function () {
    function ArticleqcaService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/article-qca/";
    }
    ArticleqcaService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    ArticleqcaService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    ArticleqcaService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    ArticleqcaService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    ArticleqcaService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ArticleqcaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ArticleqcaService);
    return ArticleqcaService;
}());



/***/ }),

/***/ "./src/app/features/store/article/articleqca/index.ts":
/*!************************************************************!*\
  !*** ./src/app/features/store/article/articleqca/index.ts ***!
  \************************************************************/
/*! exports provided: ArticleqcaEffects, ArticleqcaService, selectAllArticleqcas, allArticleqcaLoaded, selectCurrentArticleqca, articleqcaFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadArticleqcas, loadArticleqcasSuccess, addArticleqca, addArticleqcaSuccess, deleteArticleqca, deleteArticleqcaSuccess, selectCurrentArticleqcaSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _articleqca_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articleqca.effects */ "./src/app/features/store/article/articleqca/articleqca.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleqcaEffects", function() { return _articleqca_effects__WEBPACK_IMPORTED_MODULE_0__["ArticleqcaEffects"]; });

/* harmony import */ var _articleqca_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articleqca.service */ "./src/app/features/store/article/articleqca/articleqca.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleqcaService", function() { return _articleqca_service__WEBPACK_IMPORTED_MODULE_1__["ArticleqcaService"]; });

/* harmony import */ var _articleqca_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articleqca.selectors */ "./src/app/features/store/article/articleqca/articleqca.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllArticleqcas", function() { return _articleqca_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllArticleqcas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allArticleqcaLoaded", function() { return _articleqca_selectors__WEBPACK_IMPORTED_MODULE_2__["allArticleqcaLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticleqca", function() { return _articleqca_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentArticleqca"]; });

/* harmony import */ var _articleqca_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articleqca.reducer */ "./src/app/features/store/article/articleqca/articleqca.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "articleqcaFeatureKey", function() { return _articleqca_reducer__WEBPACK_IMPORTED_MODULE_3__["articleqcaFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _articleqca_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _articleqca_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _articleqca_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _articleqca_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _articleqca_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _articleqca_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _articleqca_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _articleqca_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articleqca.actions */ "./src/app/features/store/article/articleqca/articleqca.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadArticleqcas", function() { return _articleqca_actions__WEBPACK_IMPORTED_MODULE_4__["loadArticleqcas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadArticleqcasSuccess", function() { return _articleqca_actions__WEBPACK_IMPORTED_MODULE_4__["loadArticleqcasSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addArticleqca", function() { return _articleqca_actions__WEBPACK_IMPORTED_MODULE_4__["addArticleqca"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addArticleqcaSuccess", function() { return _articleqca_actions__WEBPACK_IMPORTED_MODULE_4__["addArticleqcaSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteArticleqca", function() { return _articleqca_actions__WEBPACK_IMPORTED_MODULE_4__["deleteArticleqca"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteArticleqcaSuccess", function() { return _articleqca_actions__WEBPACK_IMPORTED_MODULE_4__["deleteArticleqcaSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticleqcaSuccess", function() { return _articleqca_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentArticleqcaSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/article/articlerate/articlerate.actions.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/store/article/articlerate/articlerate.actions.ts ***!
  \***************************************************************************/
/*! exports provided: loadArticlerates, loadArticleratesSuccess, addArticlerate, addArticlerateSuccess, deleteArticlerate, deleteArticlerateSuccess, selectCurrentArticlerateSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticlerates", function() { return loadArticlerates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticleratesSuccess", function() { return loadArticleratesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addArticlerate", function() { return addArticlerate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addArticlerateSuccess", function() { return addArticlerateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticlerate", function() { return deleteArticlerate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticlerateSuccess", function() { return deleteArticlerateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlerateSuccess", function() { return selectCurrentArticlerateSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadArticlerates = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlerate/API] Load Articlerates');
var loadArticleratesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlerate/API] Load Articlerates Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addArticlerate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlerate/API] Add Articlerate', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addArticlerateSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlerate/API] Add Articlerate Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteArticlerate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlerate/API] Delete Articlerate', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteArticlerateSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlerate/API] Delete Articlerate Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentArticlerateSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlerate/API] Select Current Articlerate', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/article/articlerate/articlerate.effects.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/store/article/articlerate/articlerate.effects.ts ***!
  \***************************************************************************/
/*! exports provided: ArticlerateEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlerateEffects", function() { return ArticlerateEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _articlerate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articlerate.service */ "./src/app/features/store/article/articlerate/articlerate.service.ts");
/* harmony import */ var _articlerate_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articlerate.actions */ "./src/app/features/store/article/articlerate/articlerate.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _articlerate_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./articlerate.selectors */ "./src/app/features/store/article/articlerate/articlerate.selectors.ts");








var ArticlerateEffects = /** @class */ (function () {
    function ArticlerateEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadArticlerates$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_articlerate_actions__WEBPACK_IMPORTED_MODULE_5__["loadArticlerates"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_articlerate_selectors__WEBPACK_IMPORTED_MODULE_7__["allArticlerateLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_articlerate_actions__WEBPACK_IMPORTED_MODULE_5__["loadArticleratesSuccess"])({ data: data }); })); })); });
        this.addArticlerate$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_articlerate_actions__WEBPACK_IMPORTED_MODULE_5__["addArticlerate"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_articlerate_actions__WEBPACK_IMPORTED_MODULE_5__["addArticlerateSuccess"])({ data: data }); })); })); });
        this.deleteArticlerate$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_articlerate_actions__WEBPACK_IMPORTED_MODULE_5__["deleteArticlerate"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_articlerate_actions__WEBPACK_IMPORTED_MODULE_5__["deleteArticlerateSuccess"])({ id: data.id }); }));
        })); });
    }
    ArticlerateEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _articlerate_service__WEBPACK_IMPORTED_MODULE_4__["ArticlerateService"] }
    ]; };
    ArticlerateEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _articlerate_service__WEBPACK_IMPORTED_MODULE_4__["ArticlerateService"]])
    ], ArticlerateEffects);
    return ArticlerateEffects;
}());



/***/ }),

/***/ "./src/app/features/store/article/articlerate/articlerate.reducer.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/store/article/articlerate/articlerate.reducer.ts ***!
  \***************************************************************************/
/*! exports provided: articlerateFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articlerateFeatureKey", function() { return articlerateFeatureKey; });
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
/* harmony import */ var _articlerate_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articlerate.actions */ "./src/app/features/store/article/articlerate/articlerate.actions.ts");

var _a;



var articlerateFeatureKey = 'articlerates';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allArticleratesLoaded: false,
    currentArticlerate: null
});
var articlerateReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articlerate_actions__WEBPACK_IMPORTED_MODULE_3__["addArticlerateSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentArticlerate: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articlerate_actions__WEBPACK_IMPORTED_MODULE_3__["deleteArticlerateSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articlerate_actions__WEBPACK_IMPORTED_MODULE_3__["loadArticleratesSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articlerate_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentArticlerateSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentArticlerate: action.data })); }));
function reducer(state, action) {
    return articlerateReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/article/articlerate/articlerate.selectors.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/store/article/articlerate/articlerate.selectors.ts ***!
  \*****************************************************************************/
/*! exports provided: selectAllArticlerates, allArticlerateLoaded, selectCurrentArticlerate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllArticlerates", function() { return selectAllArticlerates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allArticlerateLoaded", function() { return allArticlerateLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlerate", function() { return selectCurrentArticlerate; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _articlerate_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articlerate.reducer */ "./src/app/features/store/article/articlerate/articlerate.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_articlerate_reducer__WEBPACK_IMPORTED_MODULE_1__["articlerateFeatureKey"]);
var selectAllArticlerates = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _articlerate_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allArticlerateLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allArticleratesLoaded; });
var selectCurrentArticlerate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentArticlerate; });


/***/ }),

/***/ "./src/app/features/store/article/articlerate/articlerate.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/store/article/articlerate/articlerate.service.ts ***!
  \***************************************************************************/
/*! exports provided: ArticlerateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlerateService", function() { return ArticlerateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ArticlerateService = /** @class */ (function () {
    function ArticlerateService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/article-size-rate/";
    }
    ArticlerateService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    ArticlerateService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    ArticlerateService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    ArticlerateService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    ArticlerateService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ArticlerateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ArticlerateService);
    return ArticlerateService;
}());



/***/ }),

/***/ "./src/app/features/store/article/articlerate/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/store/article/articlerate/index.ts ***!
  \*************************************************************/
/*! exports provided: ArticlerateEffects, ArticlerateService, selectAllArticlerates, allArticlerateLoaded, selectCurrentArticlerate, articlerateFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadArticlerates, loadArticleratesSuccess, addArticlerate, addArticlerateSuccess, deleteArticlerate, deleteArticlerateSuccess, selectCurrentArticlerateSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _articlerate_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articlerate.effects */ "./src/app/features/store/article/articlerate/articlerate.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlerateEffects", function() { return _articlerate_effects__WEBPACK_IMPORTED_MODULE_0__["ArticlerateEffects"]; });

/* harmony import */ var _articlerate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articlerate.service */ "./src/app/features/store/article/articlerate/articlerate.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlerateService", function() { return _articlerate_service__WEBPACK_IMPORTED_MODULE_1__["ArticlerateService"]; });

/* harmony import */ var _articlerate_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articlerate.selectors */ "./src/app/features/store/article/articlerate/articlerate.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllArticlerates", function() { return _articlerate_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllArticlerates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allArticlerateLoaded", function() { return _articlerate_selectors__WEBPACK_IMPORTED_MODULE_2__["allArticlerateLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlerate", function() { return _articlerate_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentArticlerate"]; });

/* harmony import */ var _articlerate_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articlerate.reducer */ "./src/app/features/store/article/articlerate/articlerate.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "articlerateFeatureKey", function() { return _articlerate_reducer__WEBPACK_IMPORTED_MODULE_3__["articlerateFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _articlerate_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _articlerate_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _articlerate_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _articlerate_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _articlerate_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _articlerate_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _articlerate_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _articlerate_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articlerate.actions */ "./src/app/features/store/article/articlerate/articlerate.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadArticlerates", function() { return _articlerate_actions__WEBPACK_IMPORTED_MODULE_4__["loadArticlerates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadArticleratesSuccess", function() { return _articlerate_actions__WEBPACK_IMPORTED_MODULE_4__["loadArticleratesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addArticlerate", function() { return _articlerate_actions__WEBPACK_IMPORTED_MODULE_4__["addArticlerate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addArticlerateSuccess", function() { return _articlerate_actions__WEBPACK_IMPORTED_MODULE_4__["addArticlerateSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteArticlerate", function() { return _articlerate_actions__WEBPACK_IMPORTED_MODULE_4__["deleteArticlerate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteArticlerateSuccess", function() { return _articlerate_actions__WEBPACK_IMPORTED_MODULE_4__["deleteArticlerateSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlerateSuccess", function() { return _articlerate_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentArticlerateSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/article/articlesize/articlesize.actions.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/store/article/articlesize/articlesize.actions.ts ***!
  \***************************************************************************/
/*! exports provided: loadArticlesizes, loadArticlesizesSuccess, addArticlesize, addArticlesizeSuccess, deleteArticlesize, deleteArticlesizeSuccess, selectCurrentArticlesizeSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticlesizes", function() { return loadArticlesizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticlesizesSuccess", function() { return loadArticlesizesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addArticlesize", function() { return addArticlesize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addArticlesizeSuccess", function() { return addArticlesizeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticlesize", function() { return deleteArticlesize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticlesizeSuccess", function() { return deleteArticlesizeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlesizeSuccess", function() { return selectCurrentArticlesizeSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadArticlesizes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlesize/API] Load Articlesizes');
var loadArticlesizesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlesize/API] Load Articlesizes Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addArticlesize = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlesize/API] Add Articlesize', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addArticlesizeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlesize/API] Add Articlesize Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteArticlesize = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlesize/API] Delete Articlesize', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteArticlesizeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlesize/API] Delete Articlesize Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentArticlesizeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Articlesize/API] Select Current Articlesize', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/article/articlesize/articlesize.effects.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/store/article/articlesize/articlesize.effects.ts ***!
  \***************************************************************************/
/*! exports provided: ArticlesizeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesizeEffects", function() { return ArticlesizeEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _articlesize_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articlesize.service */ "./src/app/features/store/article/articlesize/articlesize.service.ts");
/* harmony import */ var _articlesize_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articlesize.actions */ "./src/app/features/store/article/articlesize/articlesize.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _articlesize_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./articlesize.selectors */ "./src/app/features/store/article/articlesize/articlesize.selectors.ts");








var ArticlesizeEffects = /** @class */ (function () {
    function ArticlesizeEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadArticlesizes$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_articlesize_actions__WEBPACK_IMPORTED_MODULE_5__["loadArticlesizes"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_articlesize_selectors__WEBPACK_IMPORTED_MODULE_7__["allArticlesizeLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_articlesize_actions__WEBPACK_IMPORTED_MODULE_5__["loadArticlesizesSuccess"])({ data: data }); })); })); });
        this.addArticlesize$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_articlesize_actions__WEBPACK_IMPORTED_MODULE_5__["addArticlesize"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_articlesize_actions__WEBPACK_IMPORTED_MODULE_5__["addArticlesizeSuccess"])({ data: data }); })); })); });
        this.deleteArticlesize$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_articlesize_actions__WEBPACK_IMPORTED_MODULE_5__["deleteArticlesize"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_articlesize_actions__WEBPACK_IMPORTED_MODULE_5__["deleteArticlesizeSuccess"])({ id: data.id }); }));
        })); });
    }
    ArticlesizeEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _articlesize_service__WEBPACK_IMPORTED_MODULE_4__["ArticlesizeService"] }
    ]; };
    ArticlesizeEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _articlesize_service__WEBPACK_IMPORTED_MODULE_4__["ArticlesizeService"]])
    ], ArticlesizeEffects);
    return ArticlesizeEffects;
}());



/***/ }),

/***/ "./src/app/features/store/article/articlesize/articlesize.reducer.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/store/article/articlesize/articlesize.reducer.ts ***!
  \***************************************************************************/
/*! exports provided: articlesizeFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articlesizeFeatureKey", function() { return articlesizeFeatureKey; });
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
/* harmony import */ var _articlesize_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articlesize.actions */ "./src/app/features/store/article/articlesize/articlesize.actions.ts");

var _a;



var articlesizeFeatureKey = 'articlesizes';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allArticlesizesLoaded: false,
    currentArticlesize: null
});
var articlesizeReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articlesize_actions__WEBPACK_IMPORTED_MODULE_3__["addArticlesizeSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentArticlesize: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articlesize_actions__WEBPACK_IMPORTED_MODULE_3__["deleteArticlesizeSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articlesize_actions__WEBPACK_IMPORTED_MODULE_3__["loadArticlesizesSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_articlesize_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentArticlesizeSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentArticlesize: action.data })); }));
function reducer(state, action) {
    return articlesizeReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/article/articlesize/articlesize.selectors.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/store/article/articlesize/articlesize.selectors.ts ***!
  \*****************************************************************************/
/*! exports provided: selectAllArticlesizes, allArticlesizeLoaded, selectCurrentArticlesize, selectByArticleID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllArticlesizes", function() { return selectAllArticlesizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allArticlesizeLoaded", function() { return allArticlesizeLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlesize", function() { return selectCurrentArticlesize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectByArticleID", function() { return selectByArticleID; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _articlesize_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articlesize.reducer */ "./src/app/features/store/article/articlesize/articlesize.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_articlesize_reducer__WEBPACK_IMPORTED_MODULE_1__["articlesizeFeatureKey"]);
var selectAllArticlesizes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _articlesize_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allArticlesizeLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allArticlesizesLoaded; });
var selectCurrentArticlesize = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentArticlesize; });
var selectByArticleID = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAllArticlesizes, function (articlessizes, id) {
    var size = articlessizes.filter(function (s) { return s.article.id == id; });
    return size;
});


/***/ }),

/***/ "./src/app/features/store/article/articlesize/articlesize.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/store/article/articlesize/articlesize.service.ts ***!
  \***************************************************************************/
/*! exports provided: ArticlesizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesizeService", function() { return ArticlesizeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ArticlesizeService = /** @class */ (function () {
    function ArticlesizeService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/article-size/";
    }
    ArticlesizeService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    ArticlesizeService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    ArticlesizeService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    ArticlesizeService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    ArticlesizeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ArticlesizeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ArticlesizeService);
    return ArticlesizeService;
}());



/***/ }),

/***/ "./src/app/features/store/article/articlesize/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/store/article/articlesize/index.ts ***!
  \*************************************************************/
/*! exports provided: ArticlesizeEffects, ArticlesizeService, selectAllArticlesizes, allArticlesizeLoaded, selectCurrentArticlesize, selectByArticleID, articlesizeFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadArticlesizes, loadArticlesizesSuccess, addArticlesize, addArticlesizeSuccess, deleteArticlesize, deleteArticlesizeSuccess, selectCurrentArticlesizeSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _articlesize_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articlesize.effects */ "./src/app/features/store/article/articlesize/articlesize.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlesizeEffects", function() { return _articlesize_effects__WEBPACK_IMPORTED_MODULE_0__["ArticlesizeEffects"]; });

/* harmony import */ var _articlesize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articlesize.service */ "./src/app/features/store/article/articlesize/articlesize.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlesizeService", function() { return _articlesize_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesizeService"]; });

/* harmony import */ var _articlesize_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articlesize.selectors */ "./src/app/features/store/article/articlesize/articlesize.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllArticlesizes", function() { return _articlesize_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllArticlesizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allArticlesizeLoaded", function() { return _articlesize_selectors__WEBPACK_IMPORTED_MODULE_2__["allArticlesizeLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlesize", function() { return _articlesize_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentArticlesize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectByArticleID", function() { return _articlesize_selectors__WEBPACK_IMPORTED_MODULE_2__["selectByArticleID"]; });

/* harmony import */ var _articlesize_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articlesize.reducer */ "./src/app/features/store/article/articlesize/articlesize.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "articlesizeFeatureKey", function() { return _articlesize_reducer__WEBPACK_IMPORTED_MODULE_3__["articlesizeFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _articlesize_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _articlesize_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _articlesize_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _articlesize_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _articlesize_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _articlesize_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _articlesize_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _articlesize_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articlesize.actions */ "./src/app/features/store/article/articlesize/articlesize.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadArticlesizes", function() { return _articlesize_actions__WEBPACK_IMPORTED_MODULE_4__["loadArticlesizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadArticlesizesSuccess", function() { return _articlesize_actions__WEBPACK_IMPORTED_MODULE_4__["loadArticlesizesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addArticlesize", function() { return _articlesize_actions__WEBPACK_IMPORTED_MODULE_4__["addArticlesize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addArticlesizeSuccess", function() { return _articlesize_actions__WEBPACK_IMPORTED_MODULE_4__["addArticlesizeSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteArticlesize", function() { return _articlesize_actions__WEBPACK_IMPORTED_MODULE_4__["deleteArticlesize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteArticlesizeSuccess", function() { return _articlesize_actions__WEBPACK_IMPORTED_MODULE_4__["deleteArticlesizeSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentArticlesizeSuccess", function() { return _articlesize_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentArticlesizeSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/article/carton/carton.actions.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/store/article/carton/carton.actions.ts ***!
  \*****************************************************************/
/*! exports provided: loadCartons, loadCartonsSuccess, addCarton, addCartonSuccess, deleteCarton, deleteCartonSuccess, selectCurrentCartonSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCartons", function() { return loadCartons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCartonsSuccess", function() { return loadCartonsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCarton", function() { return addCarton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCartonSuccess", function() { return addCartonSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCarton", function() { return deleteCarton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCartonSuccess", function() { return deleteCartonSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCartonSuccess", function() { return selectCurrentCartonSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadCartons = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Carton/API] Load Cartons');
var loadCartonsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Carton/API] Load Cartons Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addCarton = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Carton/API] Add Carton', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addCartonSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Carton/API] Add Carton Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteCarton = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Carton/API] Delete Carton', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteCartonSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Carton/API] Delete Carton Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentCartonSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Carton/API] Select Current Carton', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/article/carton/carton.effects.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/store/article/carton/carton.effects.ts ***!
  \*****************************************************************/
/*! exports provided: CartonEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartonEffects", function() { return CartonEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _carton_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carton.service */ "./src/app/features/store/article/carton/carton.service.ts");
/* harmony import */ var _carton_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carton.actions */ "./src/app/features/store/article/carton/carton.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _carton_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carton.selectors */ "./src/app/features/store/article/carton/carton.selectors.ts");








var CartonEffects = /** @class */ (function () {
    function CartonEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadCartons$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_carton_actions__WEBPACK_IMPORTED_MODULE_5__["loadCartons"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_carton_selectors__WEBPACK_IMPORTED_MODULE_7__["allCartonLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_carton_actions__WEBPACK_IMPORTED_MODULE_5__["loadCartonsSuccess"])({ data: data }); })); })); });
        this.addCarton$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_carton_actions__WEBPACK_IMPORTED_MODULE_5__["addCarton"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_carton_actions__WEBPACK_IMPORTED_MODULE_5__["addCartonSuccess"])({ data: data }); })); })); });
        this.deleteCarton$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_carton_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCarton"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_carton_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCartonSuccess"])({ id: data.id }); }));
        })); });
    }
    CartonEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _carton_service__WEBPACK_IMPORTED_MODULE_4__["CartonService"] }
    ]; };
    CartonEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _carton_service__WEBPACK_IMPORTED_MODULE_4__["CartonService"]])
    ], CartonEffects);
    return CartonEffects;
}());



/***/ }),

/***/ "./src/app/features/store/article/carton/carton.reducer.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/store/article/carton/carton.reducer.ts ***!
  \*****************************************************************/
/*! exports provided: cartonFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartonFeatureKey", function() { return cartonFeatureKey; });
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
/* harmony import */ var _carton_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carton.actions */ "./src/app/features/store/article/carton/carton.actions.ts");

var _a;



var cartonFeatureKey = 'cartons';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allCartonsLoaded: false,
    currentCarton: null
});
var cartonReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_carton_actions__WEBPACK_IMPORTED_MODULE_3__["addCartonSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentCarton: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_carton_actions__WEBPACK_IMPORTED_MODULE_3__["deleteCartonSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_carton_actions__WEBPACK_IMPORTED_MODULE_3__["loadCartonsSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_carton_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentCartonSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentCarton: action.data })); }));
function reducer(state, action) {
    return cartonReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/article/carton/carton.selectors.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/store/article/carton/carton.selectors.ts ***!
  \*******************************************************************/
/*! exports provided: selectAllCartons, allCartonLoaded, selectCurrentCarton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllCartons", function() { return selectAllCartons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allCartonLoaded", function() { return allCartonLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCarton", function() { return selectCurrentCarton; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _carton_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carton.reducer */ "./src/app/features/store/article/carton/carton.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_carton_reducer__WEBPACK_IMPORTED_MODULE_1__["cartonFeatureKey"]);
var selectAllCartons = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _carton_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allCartonLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allCartonsLoaded; });
var selectCurrentCarton = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentCarton; });


/***/ }),

/***/ "./src/app/features/store/article/carton/carton.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/store/article/carton/carton.service.ts ***!
  \*****************************************************************/
/*! exports provided: CartonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartonService", function() { return CartonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var CartonService = /** @class */ (function () {
    function CartonService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/carton/";
    }
    CartonService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    CartonService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    CartonService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    CartonService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    CartonService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    CartonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CartonService);
    return CartonService;
}());



/***/ }),

/***/ "./src/app/features/store/article/carton/index.ts":
/*!********************************************************!*\
  !*** ./src/app/features/store/article/carton/index.ts ***!
  \********************************************************/
/*! exports provided: CartonEffects, CartonService, selectAllCartons, allCartonLoaded, selectCurrentCarton, cartonFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadCartons, loadCartonsSuccess, addCarton, addCartonSuccess, deleteCarton, deleteCartonSuccess, selectCurrentCartonSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carton_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carton.effects */ "./src/app/features/store/article/carton/carton.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CartonEffects", function() { return _carton_effects__WEBPACK_IMPORTED_MODULE_0__["CartonEffects"]; });

/* harmony import */ var _carton_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carton.service */ "./src/app/features/store/article/carton/carton.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CartonService", function() { return _carton_service__WEBPACK_IMPORTED_MODULE_1__["CartonService"]; });

/* harmony import */ var _carton_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carton.selectors */ "./src/app/features/store/article/carton/carton.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllCartons", function() { return _carton_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllCartons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allCartonLoaded", function() { return _carton_selectors__WEBPACK_IMPORTED_MODULE_2__["allCartonLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCarton", function() { return _carton_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentCarton"]; });

/* harmony import */ var _carton_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carton.reducer */ "./src/app/features/store/article/carton/carton.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cartonFeatureKey", function() { return _carton_reducer__WEBPACK_IMPORTED_MODULE_3__["cartonFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _carton_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _carton_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _carton_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _carton_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _carton_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _carton_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _carton_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _carton_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carton.actions */ "./src/app/features/store/article/carton/carton.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCartons", function() { return _carton_actions__WEBPACK_IMPORTED_MODULE_4__["loadCartons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCartonsSuccess", function() { return _carton_actions__WEBPACK_IMPORTED_MODULE_4__["loadCartonsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCarton", function() { return _carton_actions__WEBPACK_IMPORTED_MODULE_4__["addCarton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCartonSuccess", function() { return _carton_actions__WEBPACK_IMPORTED_MODULE_4__["addCartonSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCarton", function() { return _carton_actions__WEBPACK_IMPORTED_MODULE_4__["deleteCarton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCartonSuccess", function() { return _carton_actions__WEBPACK_IMPORTED_MODULE_4__["deleteCartonSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCartonSuccess", function() { return _carton_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentCartonSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/article/productionline/index.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/store/article/productionline/index.ts ***!
  \****************************************************************/
/*! exports provided: ProductionlineEffects, ProductionlineService, selectAllProductionlines, allProductionlineLoaded, selectCurrentProductionline, selectByArticlesizeID, productionlineFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadProductionlines, loadProductionlinesSuccess, addProductionline, addProductionlineSuccess, deleteProductionline, deleteProductionlineSuccess, selectCurrentProductionlineSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productionline_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productionline.effects */ "./src/app/features/store/article/productionline/productionline.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductionlineEffects", function() { return _productionline_effects__WEBPACK_IMPORTED_MODULE_0__["ProductionlineEffects"]; });

/* harmony import */ var _productionline_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productionline.service */ "./src/app/features/store/article/productionline/productionline.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductionlineService", function() { return _productionline_service__WEBPACK_IMPORTED_MODULE_1__["ProductionlineService"]; });

/* harmony import */ var _productionline_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productionline.selectors */ "./src/app/features/store/article/productionline/productionline.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllProductionlines", function() { return _productionline_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllProductionlines"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allProductionlineLoaded", function() { return _productionline_selectors__WEBPACK_IMPORTED_MODULE_2__["allProductionlineLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentProductionline", function() { return _productionline_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentProductionline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectByArticlesizeID", function() { return _productionline_selectors__WEBPACK_IMPORTED_MODULE_2__["selectByArticlesizeID"]; });

/* harmony import */ var _productionline_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productionline.reducer */ "./src/app/features/store/article/productionline/productionline.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "productionlineFeatureKey", function() { return _productionline_reducer__WEBPACK_IMPORTED_MODULE_3__["productionlineFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _productionline_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _productionline_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _productionline_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _productionline_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _productionline_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _productionline_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _productionline_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _productionline_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productionline.actions */ "./src/app/features/store/article/productionline/productionline.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadProductionlines", function() { return _productionline_actions__WEBPACK_IMPORTED_MODULE_4__["loadProductionlines"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadProductionlinesSuccess", function() { return _productionline_actions__WEBPACK_IMPORTED_MODULE_4__["loadProductionlinesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addProductionline", function() { return _productionline_actions__WEBPACK_IMPORTED_MODULE_4__["addProductionline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addProductionlineSuccess", function() { return _productionline_actions__WEBPACK_IMPORTED_MODULE_4__["addProductionlineSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteProductionline", function() { return _productionline_actions__WEBPACK_IMPORTED_MODULE_4__["deleteProductionline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteProductionlineSuccess", function() { return _productionline_actions__WEBPACK_IMPORTED_MODULE_4__["deleteProductionlineSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentProductionlineSuccess", function() { return _productionline_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentProductionlineSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/article/productionline/productionline.actions.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/store/article/productionline/productionline.actions.ts ***!
  \*********************************************************************************/
/*! exports provided: loadProductionlines, loadProductionlinesSuccess, addProductionline, addProductionlineSuccess, deleteProductionline, deleteProductionlineSuccess, selectCurrentProductionlineSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProductionlines", function() { return loadProductionlines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProductionlinesSuccess", function() { return loadProductionlinesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductionline", function() { return addProductionline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductionlineSuccess", function() { return addProductionlineSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProductionline", function() { return deleteProductionline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProductionlineSuccess", function() { return deleteProductionlineSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentProductionlineSuccess", function() { return selectCurrentProductionlineSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadProductionlines = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Productionline/API] Load Productionlines');
var loadProductionlinesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Productionline/API] Load Productionlines Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addProductionline = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Productionline/API] Add Productionline', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addProductionlineSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Productionline/API] Add Productionline Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteProductionline = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Productionline/API] Delete Productionline', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteProductionlineSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Productionline/API] Delete Productionline Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentProductionlineSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Productionline/API] Select Current Productionline', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/article/productionline/productionline.effects.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/store/article/productionline/productionline.effects.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductionlineEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionlineEffects", function() { return ProductionlineEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _productionline_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productionline.service */ "./src/app/features/store/article/productionline/productionline.service.ts");
/* harmony import */ var _productionline_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productionline.actions */ "./src/app/features/store/article/productionline/productionline.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _productionline_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./productionline.selectors */ "./src/app/features/store/article/productionline/productionline.selectors.ts");








var ProductionlineEffects = /** @class */ (function () {
    function ProductionlineEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadProductionlines$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_productionline_actions__WEBPACK_IMPORTED_MODULE_5__["loadProductionlines"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_productionline_selectors__WEBPACK_IMPORTED_MODULE_7__["allProductionlineLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_productionline_actions__WEBPACK_IMPORTED_MODULE_5__["loadProductionlinesSuccess"])({ data: data }); })); })); });
        this.addProductionline$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_productionline_actions__WEBPACK_IMPORTED_MODULE_5__["addProductionline"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_productionline_actions__WEBPACK_IMPORTED_MODULE_5__["addProductionlineSuccess"])({ data: data }); })); })); });
        this.deleteProductionline$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_productionline_actions__WEBPACK_IMPORTED_MODULE_5__["deleteProductionline"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_productionline_actions__WEBPACK_IMPORTED_MODULE_5__["deleteProductionlineSuccess"])({ id: data.id }); }));
        })); });
    }
    ProductionlineEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _productionline_service__WEBPACK_IMPORTED_MODULE_4__["ProductionlineService"] }
    ]; };
    ProductionlineEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _productionline_service__WEBPACK_IMPORTED_MODULE_4__["ProductionlineService"]])
    ], ProductionlineEffects);
    return ProductionlineEffects;
}());



/***/ }),

/***/ "./src/app/features/store/article/productionline/productionline.reducer.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/store/article/productionline/productionline.reducer.ts ***!
  \*********************************************************************************/
/*! exports provided: productionlineFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productionlineFeatureKey", function() { return productionlineFeatureKey; });
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
/* harmony import */ var _productionline_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productionline.actions */ "./src/app/features/store/article/productionline/productionline.actions.ts");

var _a;



var productionlineFeatureKey = 'productionlines';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allProductionlinesLoaded: false,
    currentProductionline: null
});
var productionlineReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_productionline_actions__WEBPACK_IMPORTED_MODULE_3__["addProductionlineSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentProductionline: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_productionline_actions__WEBPACK_IMPORTED_MODULE_3__["deleteProductionlineSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_productionline_actions__WEBPACK_IMPORTED_MODULE_3__["loadProductionlinesSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_productionline_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentProductionlineSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentProductionline: action.data })); }));
function reducer(state, action) {
    return productionlineReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/article/productionline/productionline.selectors.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/store/article/productionline/productionline.selectors.ts ***!
  \***********************************************************************************/
/*! exports provided: selectAllProductionlines, allProductionlineLoaded, selectCurrentProductionline, selectByArticlesizeID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllProductionlines", function() { return selectAllProductionlines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allProductionlineLoaded", function() { return allProductionlineLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentProductionline", function() { return selectCurrentProductionline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectByArticlesizeID", function() { return selectByArticlesizeID; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _productionline_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productionline.reducer */ "./src/app/features/store/article/productionline/productionline.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_productionline_reducer__WEBPACK_IMPORTED_MODULE_1__["productionlineFeatureKey"]);
var selectAllProductionlines = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _productionline_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allProductionlineLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allProductionlinesLoaded; });
var selectCurrentProductionline = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentProductionline; });
var selectByArticlesizeID = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAllProductionlines, function (prdlines, id) {
    var lines = prdlines.filter(function (pl) { return pl.size.id == id; });
    return lines;
});


/***/ }),

/***/ "./src/app/features/store/article/productionline/productionline.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/store/article/productionline/productionline.service.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductionlineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionlineService", function() { return ProductionlineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ProductionlineService = /** @class */ (function () {
    function ProductionlineService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/article-pl/";
    }
    ProductionlineService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    ProductionlineService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    ProductionlineService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    ProductionlineService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    ProductionlineService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ProductionlineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ProductionlineService);
    return ProductionlineService;
}());



/***/ }),

/***/ "./src/app/features/store/article/range/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/store/article/range/index.ts ***!
  \*******************************************************/
/*! exports provided: RangeEffects, RangeService, selectAllRanges, allRangeLoaded, selectCurrentRange, rangeFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadRanges, loadRangesSuccess, addRange, addRangeSuccess, deleteRange, deleteRangeSuccess, selectCurrentRangeSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _range_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./range.effects */ "./src/app/features/store/article/range/range.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RangeEffects", function() { return _range_effects__WEBPACK_IMPORTED_MODULE_0__["RangeEffects"]; });

/* harmony import */ var _range_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range.service */ "./src/app/features/store/article/range/range.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RangeService", function() { return _range_service__WEBPACK_IMPORTED_MODULE_1__["RangeService"]; });

/* harmony import */ var _range_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./range.selectors */ "./src/app/features/store/article/range/range.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllRanges", function() { return _range_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllRanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allRangeLoaded", function() { return _range_selectors__WEBPACK_IMPORTED_MODULE_2__["allRangeLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentRange", function() { return _range_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentRange"]; });

/* harmony import */ var _range_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./range.reducer */ "./src/app/features/store/article/range/range.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rangeFeatureKey", function() { return _range_reducer__WEBPACK_IMPORTED_MODULE_3__["rangeFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _range_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _range_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _range_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _range_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _range_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _range_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _range_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _range_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./range.actions */ "./src/app/features/store/article/range/range.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadRanges", function() { return _range_actions__WEBPACK_IMPORTED_MODULE_4__["loadRanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadRangesSuccess", function() { return _range_actions__WEBPACK_IMPORTED_MODULE_4__["loadRangesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRange", function() { return _range_actions__WEBPACK_IMPORTED_MODULE_4__["addRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRangeSuccess", function() { return _range_actions__WEBPACK_IMPORTED_MODULE_4__["addRangeSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteRange", function() { return _range_actions__WEBPACK_IMPORTED_MODULE_4__["deleteRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteRangeSuccess", function() { return _range_actions__WEBPACK_IMPORTED_MODULE_4__["deleteRangeSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentRangeSuccess", function() { return _range_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentRangeSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/article/range/range.actions.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/store/article/range/range.actions.ts ***!
  \***************************************************************/
/*! exports provided: loadRanges, loadRangesSuccess, addRange, addRangeSuccess, deleteRange, deleteRangeSuccess, selectCurrentRangeSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRanges", function() { return loadRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRangesSuccess", function() { return loadRangesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRange", function() { return addRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRangeSuccess", function() { return addRangeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRange", function() { return deleteRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRangeSuccess", function() { return deleteRangeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentRangeSuccess", function() { return selectCurrentRangeSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadRanges = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Range/API] Load Ranges');
var loadRangesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Range/API] Load Ranges Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addRange = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Range/API] Add Range', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addRangeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Range/API] Add Range Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteRange = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Range/API] Delete Range', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteRangeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Range/API] Delete Range Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentRangeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Range/API] Select Current Range', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/article/range/range.effects.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/store/article/range/range.effects.ts ***!
  \***************************************************************/
/*! exports provided: RangeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeEffects", function() { return RangeEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _range_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./range.service */ "./src/app/features/store/article/range/range.service.ts");
/* harmony import */ var _range_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./range.actions */ "./src/app/features/store/article/range/range.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _range_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./range.selectors */ "./src/app/features/store/article/range/range.selectors.ts");








var RangeEffects = /** @class */ (function () {
    function RangeEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadRanges$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_range_actions__WEBPACK_IMPORTED_MODULE_5__["loadRanges"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_range_selectors__WEBPACK_IMPORTED_MODULE_7__["allRangeLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_range_actions__WEBPACK_IMPORTED_MODULE_5__["loadRangesSuccess"])({ data: data }); })); })); });
        this.addRange$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_range_actions__WEBPACK_IMPORTED_MODULE_5__["addRange"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_range_actions__WEBPACK_IMPORTED_MODULE_5__["addRangeSuccess"])({ data: data }); })); })); });
        this.deleteRange$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_range_actions__WEBPACK_IMPORTED_MODULE_5__["deleteRange"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_range_actions__WEBPACK_IMPORTED_MODULE_5__["deleteRangeSuccess"])({ id: data.id }); }));
        })); });
    }
    RangeEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _range_service__WEBPACK_IMPORTED_MODULE_4__["RangeService"] }
    ]; };
    RangeEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _range_service__WEBPACK_IMPORTED_MODULE_4__["RangeService"]])
    ], RangeEffects);
    return RangeEffects;
}());



/***/ }),

/***/ "./src/app/features/store/article/range/range.reducer.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/store/article/range/range.reducer.ts ***!
  \***************************************************************/
/*! exports provided: rangeFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeFeatureKey", function() { return rangeFeatureKey; });
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
/* harmony import */ var _range_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./range.actions */ "./src/app/features/store/article/range/range.actions.ts");

var _a;



var rangeFeatureKey = 'ranges';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allRangesLoaded: false,
    currentRange: null
});
var rangeReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_range_actions__WEBPACK_IMPORTED_MODULE_3__["addRangeSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentRange: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_range_actions__WEBPACK_IMPORTED_MODULE_3__["deleteRangeSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_range_actions__WEBPACK_IMPORTED_MODULE_3__["loadRangesSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_range_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentRangeSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentRange: action.data })); }));
function reducer(state, action) {
    return rangeReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/features/store/article/range/range.selectors.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/store/article/range/range.selectors.ts ***!
  \*****************************************************************/
/*! exports provided: selectAllRanges, allRangeLoaded, selectCurrentRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllRanges", function() { return selectAllRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allRangeLoaded", function() { return allRangeLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentRange", function() { return selectCurrentRange; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _range_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range.reducer */ "./src/app/features/store/article/range/range.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_range_reducer__WEBPACK_IMPORTED_MODULE_1__["rangeFeatureKey"]);
var selectAllRanges = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _range_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allRangeLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allRangesLoaded; });
var selectCurrentRange = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentRange; });


/***/ }),

/***/ "./src/app/features/store/article/range/range.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/store/article/range/range.service.ts ***!
  \***************************************************************/
/*! exports provided: RangeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeService", function() { return RangeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var RangeService = /** @class */ (function () {
    function RangeService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/ranges/";
    }
    RangeService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    RangeService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    RangeService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    RangeService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    RangeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    RangeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], RangeService);
    return RangeService;
}());



/***/ }),

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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadUoms = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Uom/API] Load Uoms');
var loadUomsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Uom/API] Load Uoms Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addUom = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Uom/API] Add Uom', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addUomSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Uom/API] Add Uom Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteUom = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Uom/API] Delete Uom', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteUomSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Uom/API] Delete Uom Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var selectCurrentUomSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Uom/API] Select Current Uom', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _uom_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uom.service */ "./src/app/features/store/settings/uom/uom.service.ts");
/* harmony import */ var _uom_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uom.actions */ "./src/app/features/store/settings/uom/uom.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _uom_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uom.selectors */ "./src/app/features/store/settings/uom/uom.selectors.ts");








var UomEffects = /** @class */ (function () {
    function UomEffects(actions$, store, service) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadUoms$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_uom_actions__WEBPACK_IMPORTED_MODULE_5__["loadUoms"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(_this.store.select(_uom_selectors__WEBPACK_IMPORTED_MODULE_7__["allUomLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], allLoaded = _b[1];
            return !allLoaded;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_) { return _this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_uom_actions__WEBPACK_IMPORTED_MODULE_5__["loadUomsSuccess"])({ data: data }); })); })); });
        this.addUom$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_uom_actions__WEBPACK_IMPORTED_MODULE_5__["addUom"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return Object(_uom_actions__WEBPACK_IMPORTED_MODULE_5__["addUomSuccess"])({ data: data }); })); })); });
        this.deleteUom$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_uom_actions__WEBPACK_IMPORTED_MODULE_5__["deleteUom"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var data = _a.data;
            return _this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return Object(_uom_actions__WEBPACK_IMPORTED_MODULE_5__["deleteUomSuccess"])({ id: data.id }); }));
        })); });
    }
    UomEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _uom_service__WEBPACK_IMPORTED_MODULE_4__["UomService"] }
    ]; };
    UomEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _uom_service__WEBPACK_IMPORTED_MODULE_4__["UomService"]])
    ], UomEffects);
    return UomEffects;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _uom_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uom.actions */ "./src/app/features/store/settings/uom/uom.actions.ts");

var _a;



var uomFeatureKey = 'uoms';
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    allUomsLoaded: false,
    currentUom: null
});
var uomReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_uom_actions__WEBPACK_IMPORTED_MODULE_3__["addUomSuccess"], function (state, action) { return adapter.upsertOne(action.data, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentUom: action.data })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_uom_actions__WEBPACK_IMPORTED_MODULE_3__["deleteUomSuccess"], function (state, action) { return adapter.removeOne(action.id, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_uom_actions__WEBPACK_IMPORTED_MODULE_3__["loadUomsSuccess"], function (state, action) { return adapter.addAll(action.data, state); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_uom_actions__WEBPACK_IMPORTED_MODULE_3__["selectCurrentUomSuccess"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentUom: action.data })); }));
function reducer(state, action) {
    return uomReducer(state, action);
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _uom_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uom.reducer */ "./src/app/features/store/settings/uom/uom.reducer.ts");


var featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_uom_reducer__WEBPACK_IMPORTED_MODULE_1__["uomFeatureKey"]);
var selectAllUoms = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _uom_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var allUomLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.allUomsLoaded; });
var selectCurrentUom = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, function (state) { return state.currentUom; });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UomService = /** @class */ (function () {
    function UomService(http) {
        this.http = http;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL + "/uoms/";
    }
    UomService.prototype.findAll = function () {
        return this.http.get(this.url);
    };
    UomService.prototype.save = function (item) {
        if (!item.id) {
            return this.http.post(this.url, item);
        }
        else {
            return this.update(item);
        }
    };
    UomService.prototype.update = function (item) {
        return this.http.put("" + this.url + item.id + "/", item);
    };
    UomService.prototype.delete = function (item) {
        return this.http.delete("" + this.url + item.id + "/");
    };
    UomService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    UomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UomService);
    return UomService;
}());



/***/ })

}]);
//# sourceMappingURL=features-article-article-module-es5.js.map