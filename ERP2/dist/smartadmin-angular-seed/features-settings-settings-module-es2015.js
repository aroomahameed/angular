(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/features/settings/companys/company-form/company-form.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/settings/companys/company-form/company-form.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-modal title=\"{{title}} Company Info\">\n    <form [formGroup]=\"fg\" (ngSubmit)=\"onSubmit($event)\">\n        <div class=\"panel-content\">\n            <div class=\"row\">\n                <div class=\"col-md-9\">\n                    <div class=\"col-md-12\">\n                        <smart-input formControlName='name' label=\"Name\"></smart-input>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <smart-input formControlName='code' label=\"Code\"></smart-input>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <smart-input formControlName='address' label=\"Address\"></smart-input>\n                      \n                    </div>\n\n\n                </div>\n                <div class=\"col-md-3 mb-3 \">\n                    <label class=\"form-label\">Company Logo<span class=\"text-danger\">*</span> </label>\n                    <img [src]=\"imageurl\" style=\"height: 130px; width: 130px;\"><br>\n                    <div class=\"custom-file\">\n                        <input type=\"file\" class=\"custom-file-input\" name=\"Image\" id=\"logo\" required\n                            (change)=\"handlefileinput($event.target.files)\" required id=\"logo\">\n                        <label class=\"custom-file-label\" for=\"logo\">Choose file</label>\n                    </div>\n                </div>\n            </div>\n\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='legal_name' label=\"Legal Name\"></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='owner_name' label=\"Owner Name\"></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                <smart-input formControlName='reg_date' label=\"Registeration Date\" type='date'></smart-input>\n                </div>\n               \n                <div class=\"col-md-6\">\n                    <smart-input formControlName='email' label=\"Email\"></smart-input>\n                </div>\n                <div class=\"col-md-4\">\n                    <smart-select formControlName='country' [items]=\"countries\" label=\"Country \" ></smart-select>\n                </div>\n              \n                <div class=\"col-md-4\">\n                    <smart-input formControlName='phone' label=\"Phone \" type='number'></smart-input>\n                </div>\n                <div class=\"col-md-4\">\n                    <smart-input formControlName='fax' label=\"FAX \" type='number'></smart-input>\n                </div>\n                \n                <div class=\"col-md-4\">\n                    <smart-input formControlName='vat' label=\"VAT \" type='number'></smart-input>\n                </div>\n                \n                <div class=\"col-md-4\">\n                    <smart-input formControlName='gst' label=\"GST \" type='number'></smart-input>\n                </div>\n                <div class=\"col-md-4\">\n                    <smart-input formControlName='ntn' label=\"NTN \" type='number'></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='website' label=\"Website \" ></smart-input>\n                </div>\n                <div class=\"col-md-6\">\n                    <smart-input formControlName='invoice_email' label=\"Invoice Email\" ></smart-input>\n                </div>\n                <div class=\"col-md-4\">\n                    <smart-input formControlName='admin_name' label=\"Admin Name \" ></smart-input>\n                </div>\n                <div class=\"col-md-4\">\n                    <smart-input formControlName='admin_email' label=\"Admin Email\" ></smart-input>\n                </div>\n                <div class=\"col-md-4\">\n                    <smart-input formControlName='admin_phone' label=\"Admin Phone \" type='number' ></smart-input>\n                </div> \n                \n                <div class=\"col-md-12\">\n                    <smart-checkbox formControlName='status' label=\"Status\"></smart-checkbox>\n                </div>\n\n            </div>\n\n\n\n        </div>\n\n\n        <div class=\"border-faded border-left-0 border-right-0 border-bottom-0 d-flex flex-row align-items-center\">\n            <button type=\"submit\" class=\"btn btn-primary ml-auto waves-effect waves-themed mt-2\"\n                type=\"submit\">{{title === 'Add' ? 'Save' : 'Update'}}</button>\n        </div>\n\n    </form>\n</smart-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/settings/companys/companys.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/settings/companys/companys.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<smart-panel  [fullscreenable]=\"true\">\r\n    <h2 panelTitle></h2>\r\n    <button panelToolbar class=\"btn btn-primary\" (click)=\"onCreate()\"> <i class=\"fal fa-plus-circle\"></i> Create</button>\r\n\r\n    <div panelContent>\r\n        <smart-table \r\n        [items]=\"company\" \r\n        [columns]=\"columns\" \r\n        [selectable] = \"false\" \r\n        [editable]=\"true\" \r\n      \r\n        (editEvt)=\"onEdit($event)\"\r\n      \r\n        >\r\n        </smart-table>\r\n    </div>\r\n</smart-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/settings/countries/countries.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/settings/countries/countries.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-crud-panel \r\n    title=\"Countries\" \r\n    icon=\"fal fa-users\" \r\n    [columns]=\"columns\"\r\n    [selectAllSelector]=\"selectAllSelector\"\r\n    [selectCurrent]=\"selectCurrent\"\r\n    [form] =\"form\"\r\n  \r\n    [editable]=\"true\"\r\n    formTitle=\"Country\"\r\n    itemName=\"Country\"\r\n    >\r\n\r\n    <h2 title><i class=\"fal fa-list\"></i>&nbsp;Country</h2>\r\n    \r\n</smart-crud-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/settings/currencies/currencies.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/settings/currencies/currencies.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-crud-panel \n    title=\"Currencies\" \n    icon=\"fal fa-users\" \n    [columns]=\"columns\"\n    [selectAllSelector]=\"selectAllSelector\"\n    [selectCurrent]=\"selectCurrent\"\n    [form] =\"form\"\n  \n    [editable]=\"true\"\n    formTitle=\"Currency\"\n    itemName=\"Currency\"\n    >\n\n    <h2 title><i class=\"fal fa-list\"></i>&nbsp;Currency</h2>\n    \n</smart-crud-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/settings/departments/departments.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/settings/departments/departments.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-crud-panel \r\n    title=\"Departments\" \r\n    icon=\"fal fa-users\" \r\n    [columns]=\"columns\"\r\n    [selectAllSelector]=\"selectAllSelector\"\r\n    [selectCurrent]=\"selectCurrent\"\r\n    [form] =\"form\"\r\n  \r\n    [editable]=\"true\"\r\n    formTitle=\"Department\"\r\n    itemName=\"Department\"\r\n    >\r\n\r\n    <h2 title><i class=\"fal fa-list\"></i>&nbsp;Department</h2>\r\n    \r\n</smart-crud-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/settings/factorycodes/factorycodes.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/settings/factorycodes/factorycodes.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-crud-panel \r\n    title=\"Factory Codes\" \r\n    icon=\"fal fa-users\" \r\n    [columns]=\"columns\"\r\n    [selectAllSelector]=\"selectAllSelector\"\r\n    [selectCurrent]=\"selectCurrent\"\r\n    [form] =\"form\"\r\n  \r\n    [editable]=\"true\"\r\n    formTitle=\"Factorycode\"\r\n    itemName=\"Factorycode\"\r\n    >\r\n\r\n    <h2 title><i class=\"fal fa-list\"></i>&nbsp; Factory Code</h2>\r\n    \r\n</smart-crud-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/settings/paymentterms/paymentterms.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/settings/paymentterms/paymentterms.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-crud-panel \r\n    title=\"Paymentterms\" \r\n    icon=\"fal fa-users\" \r\n    [columns]=\"columns\"\r\n    [selectAllSelector]=\"selectAllSelector\"\r\n    [selectCurrent]=\"selectCurrent\"\r\n    [form] =\"form\"\r\n   \r\n    [editable]=\"true\"\r\n    formTitle=\"Paymentterm\"\r\n    itemName=\"Paymentterm\"\r\n    >\r\n\r\n    <h2 title><i class=\"fal fa-list\"></i>&nbsp;Payment Terms</h2>\r\n    \r\n</smart-crud-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/settings/regions/regions.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/settings/regions/regions.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-crud-panel \r\n    title=\"Regions\" \r\n    icon=\"fal fa-users\" \r\n    [columns]=\"columns\"\r\n    [selectAllSelector]=\"selectAllSelector\"\r\n    [selectCurrent]=\"selectCurrent\"\r\n    [form] =\"form\"\r\n  \r\n    [editable]=\"true\"\r\n    formTitle=\"Region\"\r\n    itemName=\"Region\"\r\n    >\r\n\r\n    <h2 title><i class=\"fal fa-list\"></i>&nbsp;Region</h2>\r\n    \r\n</smart-crud-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/settings/uoms/uoms.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/settings/uoms/uoms.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-crud-panel \r\n    title=\"Uoms\" \r\n    icon=\"fal fa-users\" \r\n    [columns]=\"columns\"\r\n    [selectAllSelector]=\"selectAllSelector\"\r\n    [selectCurrent]=\"selectCurrent\"\r\n    [form] =\"form\"\r\n\r\n    [editable]=\"true\"\r\n    formTitle=\"Uom\"\r\n    itemName=\"Uom\"\r\n    >\r\n\r\n    <h2 title>Uom <em class=\"text-muted\">List</em></h2>\r\n    \r\n</smart-crud-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/settings/vendorgroups/vendorgroups.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/settings/vendorgroups/vendorgroups.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-crud-panel \r\n    title=\"Vendorgroups\" \r\n    icon=\"fal fa-users\" \r\n    [columns]=\"columns\"\r\n    [selectAllSelector]=\"selectAllSelector\"\r\n    [selectCurrent]=\"selectCurrent\"\r\n    [form] =\"form\"\r\n  \r\n    [editable]=\"true\"\r\n    formTitle=\"Vendorgroup\"\r\n    itemName=\"Vendorgroup\"\r\n    >\r\n\r\n    <h2 title><i class=\"fal fa-list\"></i>&nbsp;Vendor Groups</h2>\r\n    \r\n</smart-crud-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/settings/vendors/vendors.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/settings/vendors/vendors.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-crud-panel \r\n    title=\"Vendors\" \r\n    icon=\"fal fa-users\" \r\n    [columns]=\"columns\"\r\n    [selectAllSelector]=\"selectAllSelector\"\r\n    [selectCurrent]=\"selectCurrent\"\r\n    [form] =\"form\"\r\n    [deleteable]=\"true\"\r\n    [editable]=\"true\"\r\n    formTitle=\"Vendor\"\r\n    itemName=\"Vendor\"\r\n    modalClass ='modal-lg'\r\n    >\r\n\r\n    <h2 title><i class=\"fal fa-list\"></i>&nbsp;Vendor</h2>\r\n    \r\n</smart-crud-panel>"

/***/ }),

/***/ "./src/app/features/settings/companys/company-form/company-form.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/features/settings/companys/company-form/company-form.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3NldHRpbmdzL2NvbXBhbnlzL2NvbXBhbnktZm9ybS9jb21wYW55LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/features/settings/companys/company-form/company-form.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/settings/companys/company-form/company-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CompanyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyFormComponent", function() { return CompanyFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_settings_company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/settings/company */ "./src/app/features/store/settings/company/index.ts");
/* harmony import */ var _store_settings_country__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/settings/country */ "./src/app/features/store/settings/country/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");






let CompanyFormComponent = class CompanyFormComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
        this.submitted = false;
        this.title = 'Add';
        this.imageurl = "assets/img/demo/upload.png";
        this.filetoupload = null;
    }
    get f() { return this.fg.controls; }
    ngOnInit() {
        this.buildForm();
        this.store.dispatch(Object(_store_settings_country__WEBPACK_IMPORTED_MODULE_3__["loadCountries"])());
        this.countries = this.store.select(_store_settings_country__WEBPACK_IMPORTED_MODULE_3__["selectAllCountries"]);
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
            id: [this.company ? this.company.id : null],
            name: [this.company ? this.company.name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            code: [this.company ? this.company.code : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            legal_name: [this.company ? this.company.legal_name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            owner_name: [this.company ? this.company.owner_name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            logo: [this.company ? this.company.logo : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            reg_date: [this.company ? this.company.reg_date : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: [this.company ? this.company.address : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            country: [this.company ? this.company.country : null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: [this.company ? this.company.email : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required && _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email],
            phone: [this.company ? this.company.phone : '',],
            fax: [this.company ? this.company.fax : '',],
            vat: [this.company ? this.company.vat : '',],
            gst: [this.company ? this.company.gst : '',],
            ntn: [this.company ? this.company.ntn : '',],
            website: [this.company ? this.company.website : '',],
            invoice_email: [this.company ? this.company.invoice_email : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email],
            admin_name: [this.company ? this.company.admin_name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            admin_email: [this.company ? this.company.admin_email : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required && _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email],
            admin_phone: [this.company ? this.company.admin_phone : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: [this.company ? this.company.status : ''],
        });
    }
    onSubmit(event) {
        // Object.keys(this.fg.controls).forEach(field => {
        //   const control = this.fg.get(field);
        //   control.markAsTouched({ onlySelf: true });
        //   control.markAsDirty({ onlySelf: true });
        // });
        // if (this.fg.invalid) return;
        let mat = Object.assign({}, this.fg.value);
        mat.logo = event.target.Image.files[0];
        if (mat.logo == undefined && (this.fg.value['id'] === 0 || this.fg.value['id'] === null)) {
            // this.toaster.error('Please select a valid image file');
        }
        else {
            let formData = new FormData();
            for (const key of Object.keys(mat)) {
                if (mat[key])
                    formData.append(key, mat[key]);
            }
            formData.append('update', 'true');
            this.store.dispatch(Object(_store_settings_company__WEBPACK_IMPORTED_MODULE_2__["addCompany"])({ data: formData }));
        }
    }
};
CompanyFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
];
CompanyFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-company-form',
        template: __webpack_require__(/*! raw-loader!./company-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/settings/companys/company-form/company-form.component.html"),
        styles: [__webpack_require__(/*! ./company-form.component.css */ "./src/app/features/settings/companys/company-form/company-form.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
], CompanyFormComponent);



/***/ }),

/***/ "./src/app/features/settings/companys/companys.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/settings/companys/companys.component.ts ***!
  \******************************************************************/
/*! exports provided: CompanysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanysComponent", function() { return CompanysComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_settings_company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/settings/company */ "./src/app/features/store/settings/company/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _company_form_company_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-form/company-form.component */ "./src/app/features/settings/companys/company-form/company-form.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/dialogs/dialogs.service */ "./src/app/shared/dialogs/dialogs.service.ts");







let CompanysComponent = class CompanysComponent {
    constructor(modalService, store, dialogService) {
        this.modalService = modalService;
        this.store = store;
        this.dialogService = dialogService;
        this.columns = [
            { title: 'Image', value: 'logo', image: true },
            { title: 'Name', value: 'name', sortable: true },
            { title: 'Status', value: 'status', bool: true, boolText: { yes: 'Active', no: 'In-Active' } },
        ];
        this.deleteMessage = 'Do you wish to delete this';
        this.deleteItemName = 'Row';
    }
    ngOnInit() {
        this.store.dispatch(Object(_store_settings_company__WEBPACK_IMPORTED_MODULE_1__["loadCompanys"])());
        this.company = this.store.select(_store_settings_company__WEBPACK_IMPORTED_MODULE_1__["selectAllCompanys"]);
    }
    onCreate() {
        const initialState = {
            title: 'Add',
            imageurl: 'assets/img/demo/upload.png'
        };
        this.modalService.show(_company_form_company_form_component__WEBPACK_IMPORTED_MODULE_4__["CompanyFormComponent"], { initialState, class: 'modal-lg' });
    }
    onEdit(company) {
        const initialState = {
            company,
            title: 'Update',
            imageurl: company.logo
        };
        this.modalService.show(_company_form_company_form_component__WEBPACK_IMPORTED_MODULE_4__["CompanyFormComponent"], { initialState, class: 'modal-lg' });
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
                this.store.dispatch(Object(_store_settings_company__WEBPACK_IMPORTED_MODULE_1__["deleteCompany"])({ data: id }));
            }
        });
    }
};
CompanysComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_6__["DialogsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CompanysComponent.prototype, "deleteMessage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CompanysComponent.prototype, "deleteItemName", void 0);
CompanysComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'smart-companys',
        template: __webpack_require__(/*! raw-loader!./companys.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/settings/companys/companys.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"], _shared_dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_6__["DialogsService"]])
], CompanysComponent);



/***/ }),

/***/ "./src/app/features/settings/countries/countries.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/settings/countries/countries.component.ts ***!
  \********************************************************************/
/*! exports provided: CountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_settings_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/settings/country */ "./src/app/features/store/settings/country/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let CountriesComponent = class CountriesComponent {
    constructor() {
        this.form = [
            {
                row: [
                    { label: 'Country Name', name: 'name', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'Code', name: 'code', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
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
            { title: 'Country Name', value: 'name' },
            { title: 'Code', value: 'code' },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.selectAllSelector = _store_settings_country__WEBPACK_IMPORTED_MODULE_1__["selectAllCountries"];
        this.selectCurrent = _store_settings_country__WEBPACK_IMPORTED_MODULE_1__["selectCurrentCountry"];
    }
    ngOnInit() {
    }
};
CountriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'smart-countries',
        template: __webpack_require__(/*! raw-loader!./countries.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/settings/countries/countries.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CountriesComponent);



/***/ }),

/***/ "./src/app/features/settings/currencies/currencies.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/settings/currencies/currencies.component.ts ***!
  \**********************************************************************/
/*! exports provided: CurrenciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrenciesComponent", function() { return CurrenciesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_settings_currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/settings/currency */ "./src/app/features/store/settings/currency/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let CurrenciesComponent = class CurrenciesComponent {
    constructor() {
        this.form = [
            {
                row: [
                    { label: 'Currency Name', name: 'name', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'Code', name: 'code', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
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
            { title: 'Currency Name', value: 'name' },
            { title: 'Code', value: 'code' },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.selectAllSelector = _store_settings_currency__WEBPACK_IMPORTED_MODULE_1__["selectAllCurrencies"];
        this.selectCurrent = _store_settings_currency__WEBPACK_IMPORTED_MODULE_1__["selectCurrentCurrency"];
    }
    ngOnInit() {
    }
};
CurrenciesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'smart-currencies',
        template: __webpack_require__(/*! raw-loader!./currencies.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/settings/currencies/currencies.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CurrenciesComponent);



/***/ }),

/***/ "./src/app/features/settings/departments/departments.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/settings/departments/departments.component.ts ***!
  \************************************************************************/
/*! exports provided: DepartmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsComponent", function() { return DepartmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_settings_department__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/settings/department */ "./src/app/features/store/settings/department/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let DepartmentsComponent = class DepartmentsComponent {
    constructor() {
        this.form = [
            {
                row: [
                    { label: 'Department Name', name: 'name', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'Code', name: 'code', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
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
            { title: 'Department Name', value: 'name' },
            { title: 'Code', value: 'code' },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.selectAllSelector = _store_settings_department__WEBPACK_IMPORTED_MODULE_1__["selectAllDepartments"];
        this.selectCurrent = _store_settings_department__WEBPACK_IMPORTED_MODULE_1__["selectCurrentDepartment"];
    }
    ngOnInit() {
    }
};
DepartmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'smart-departments',
        template: __webpack_require__(/*! raw-loader!./departments.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/settings/departments/departments.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DepartmentsComponent);



/***/ }),

/***/ "./src/app/features/settings/factorycodes/factorycodes.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/settings/factorycodes/factorycodes.component.ts ***!
  \**************************************************************************/
/*! exports provided: FactorycodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactorycodesComponent", function() { return FactorycodesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_settings_factorycode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/settings/factorycode */ "./src/app/features/store/settings/factorycode/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let FactorycodesComponent = class FactorycodesComponent {
    constructor() {
        this.form = [
            {
                row: [
                    { label: 'Factory Code Name', name: 'name', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'Code', name: 'code', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
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
            { title: 'Factory Code Name', value: 'name' },
            { title: 'Code', value: 'code' },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.selectAllSelector = _store_settings_factorycode__WEBPACK_IMPORTED_MODULE_1__["selectAllFactorycodes"];
        this.selectCurrent = _store_settings_factorycode__WEBPACK_IMPORTED_MODULE_1__["selectCurrentFactorycode"];
    }
    ngOnInit() {
    }
};
FactorycodesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'smart-factorycodes',
        template: __webpack_require__(/*! raw-loader!./factorycodes.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/settings/factorycodes/factorycodes.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FactorycodesComponent);



/***/ }),

/***/ "./src/app/features/settings/paymentterms/paymentterms.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/settings/paymentterms/paymentterms.component.ts ***!
  \**************************************************************************/
/*! exports provided: PaymenttermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymenttermsComponent", function() { return PaymenttermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_settings_paymentterm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/settings/paymentterm */ "./src/app/features/store/settings/paymentterm/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let PaymenttermsComponent = class PaymenttermsComponent {
    constructor() {
        this.form = [
            {
                row: [
                    { label: 'Payment Term Name', name: 'name', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'Code', name: 'code', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
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
            { title: 'Payment Term Name', value: 'name' },
            { title: 'Code', value: 'code' },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.selectAllSelector = _store_settings_paymentterm__WEBPACK_IMPORTED_MODULE_1__["selectAllPaymentterms"];
        this.selectCurrent = _store_settings_paymentterm__WEBPACK_IMPORTED_MODULE_1__["selectCurrentPaymentterm"];
    }
    ngOnInit() {
    }
};
PaymenttermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'smart-paymentterms',
        template: __webpack_require__(/*! raw-loader!./paymentterms.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/settings/paymentterms/paymentterms.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PaymenttermsComponent);



/***/ }),

/***/ "./src/app/features/settings/regions/regions.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/settings/regions/regions.component.ts ***!
  \****************************************************************/
/*! exports provided: RegionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionsComponent", function() { return RegionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_settings_region__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/settings/region */ "./src/app/features/store/settings/region/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let RegionsComponent = class RegionsComponent {
    constructor() {
        this.form = [
            {
                row: [
                    { label: 'Region Name', name: 'name', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ],
            }, {
                row: [
                    { label: 'Code', name: 'code', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            },
            {
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
            { title: 'Region Name', value: 'name' },
            { title: 'Code', value: 'code' },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.selectAllSelector = _store_settings_region__WEBPACK_IMPORTED_MODULE_1__["selectAllRegions"];
        this.selectCurrent = _store_settings_region__WEBPACK_IMPORTED_MODULE_1__["selectCurrentRegion"];
    }
    ngOnInit() {
    }
};
RegionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'smart-regions',
        template: __webpack_require__(/*! raw-loader!./regions.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/settings/regions/regions.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RegionsComponent);



/***/ }),

/***/ "./src/app/features/settings/settings.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/settings/settings.module.ts ***!
  \******************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ "./src/app/shared/ui/ui.module.ts");
/* harmony import */ var _shared_custom_tables_custom_tables_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/custom-tables/custom-tables.module */ "./src/app/shared/custom-tables/custom-tables.module.ts");
/* harmony import */ var _shared_dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/dialogs/dialogs.module */ "./src/app/shared/dialogs/dialogs.module.ts");
/* harmony import */ var _shared_forms_forms_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/forms/forms.module */ "./src/app/shared/forms/forms.module.ts");
/* harmony import */ var src_app_features_store_settings_company__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/features/store/settings/company */ "./src/app/features/store/settings/company/index.ts");
/* harmony import */ var src_app_features_store_settings_vendor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/features/store/settings/vendor */ "./src/app/features/store/settings/vendor/index.ts");
/* harmony import */ var src_app_features_store_settings_vendorgroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/features/store/settings/vendorgroup */ "./src/app/features/store/settings/vendorgroup/index.ts");
/* harmony import */ var src_app_features_store_settings_department__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/features/store/settings/department */ "./src/app/features/store/settings/department/index.ts");
/* harmony import */ var src_app_features_store_settings_paymentterm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/features/store/settings/paymentterm */ "./src/app/features/store/settings/paymentterm/index.ts");
/* harmony import */ var src_app_features_store_settings_factorycode__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/features/store/settings/factorycode */ "./src/app/features/store/settings/factorycode/index.ts");
/* harmony import */ var src_app_features_store_settings_region__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/features/store/settings/region */ "./src/app/features/store/settings/region/index.ts");
/* harmony import */ var src_app_features_store_settings_uom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/features/store/settings/uom */ "./src/app/features/store/settings/uom/index.ts");
/* harmony import */ var src_app_features_store_settings_country__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/features/store/settings/country */ "./src/app/features/store/settings/country/index.ts");
/* harmony import */ var _store_settings_currency__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../store/settings/currency */ "./src/app/features/store/settings/currency/index.ts");
/* harmony import */ var _companys_companys_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./companys/companys.component */ "./src/app/features/settings/companys/companys.component.ts");
/* harmony import */ var _vendors_vendors_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./vendors/vendors.component */ "./src/app/features/settings/vendors/vendors.component.ts");
/* harmony import */ var _vendorgroups_vendorgroups_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./vendorgroups/vendorgroups.component */ "./src/app/features/settings/vendorgroups/vendorgroups.component.ts");
/* harmony import */ var _departments_departments_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./departments/departments.component */ "./src/app/features/settings/departments/departments.component.ts");
/* harmony import */ var _paymentterms_paymentterms_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./paymentterms/paymentterms.component */ "./src/app/features/settings/paymentterms/paymentterms.component.ts");
/* harmony import */ var _factorycodes_factorycodes_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./factorycodes/factorycodes.component */ "./src/app/features/settings/factorycodes/factorycodes.component.ts");
/* harmony import */ var _regions_regions_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./regions/regions.component */ "./src/app/features/settings/regions/regions.component.ts");
/* harmony import */ var _uoms_uoms_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./uoms/uoms.component */ "./src/app/features/settings/uoms/uoms.component.ts");
/* harmony import */ var _countries_countries_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./countries/countries.component */ "./src/app/features/settings/countries/countries.component.ts");
/* harmony import */ var _currencies_currencies_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./currencies/currencies.component */ "./src/app/features/settings/currencies/currencies.component.ts");
/* harmony import */ var _companys_company_form_company_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./companys/company-form/company-form.component */ "./src/app/features/settings/companys/company-form/company-form.component.ts");












//store imports










//component imports











let SettingsModule = class SettingsModule {
};
SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [_currencies_currencies_component__WEBPACK_IMPORTED_MODULE_31__["CurrenciesComponent"], _countries_countries_component__WEBPACK_IMPORTED_MODULE_30__["CountriesComponent"], _uoms_uoms_component__WEBPACK_IMPORTED_MODULE_29__["UomsComponent"], _regions_regions_component__WEBPACK_IMPORTED_MODULE_28__["RegionsComponent"], _factorycodes_factorycodes_component__WEBPACK_IMPORTED_MODULE_27__["FactorycodesComponent"], _paymentterms_paymentterms_component__WEBPACK_IMPORTED_MODULE_26__["PaymenttermsComponent"], _departments_departments_component__WEBPACK_IMPORTED_MODULE_25__["DepartmentsComponent"], _vendorgroups_vendorgroups_component__WEBPACK_IMPORTED_MODULE_24__["VendorgroupsComponent"], _vendors_vendors_component__WEBPACK_IMPORTED_MODULE_23__["VendorsComponent"], _companys_companys_component__WEBPACK_IMPORTED_MODULE_22__["CompanysComponent"], _companys_company_form_company_form_component__WEBPACK_IMPORTED_MODULE_32__["CompanyFormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__["AlertModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_8__["UiModule"],
            _shared_custom_tables_custom_tables_module__WEBPACK_IMPORTED_MODULE_9__["CustomTablesModule"],
            _shared_dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_10__["DialogsModule"],
            _shared_forms_forms_module__WEBPACK_IMPORTED_MODULE_11__["CustomFormsModule"],
            //store for feature
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(src_app_features_store_settings_company__WEBPACK_IMPORTED_MODULE_12__["companyFeatureKey"], src_app_features_store_settings_company__WEBPACK_IMPORTED_MODULE_12__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(src_app_features_store_settings_vendor__WEBPACK_IMPORTED_MODULE_13__["vendorFeatureKey"], src_app_features_store_settings_vendor__WEBPACK_IMPORTED_MODULE_13__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(src_app_features_store_settings_vendorgroup__WEBPACK_IMPORTED_MODULE_14__["vendorgroupFeatureKey"], src_app_features_store_settings_vendorgroup__WEBPACK_IMPORTED_MODULE_14__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(src_app_features_store_settings_department__WEBPACK_IMPORTED_MODULE_15__["departmentFeatureKey"], src_app_features_store_settings_department__WEBPACK_IMPORTED_MODULE_15__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(src_app_features_store_settings_paymentterm__WEBPACK_IMPORTED_MODULE_16__["paymenttermFeatureKey"], src_app_features_store_settings_paymentterm__WEBPACK_IMPORTED_MODULE_16__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(src_app_features_store_settings_factorycode__WEBPACK_IMPORTED_MODULE_17__["factorycodeFeatureKey"], src_app_features_store_settings_factorycode__WEBPACK_IMPORTED_MODULE_17__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(src_app_features_store_settings_region__WEBPACK_IMPORTED_MODULE_18__["regionFeatureKey"], src_app_features_store_settings_region__WEBPACK_IMPORTED_MODULE_18__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(src_app_features_store_settings_uom__WEBPACK_IMPORTED_MODULE_19__["uomFeatureKey"], src_app_features_store_settings_uom__WEBPACK_IMPORTED_MODULE_19__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(src_app_features_store_settings_country__WEBPACK_IMPORTED_MODULE_20__["countryFeatureKey"], src_app_features_store_settings_country__WEBPACK_IMPORTED_MODULE_20__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(_store_settings_currency__WEBPACK_IMPORTED_MODULE_21__["currencyFeatureKey"], _store_settings_currency__WEBPACK_IMPORTED_MODULE_21__["reducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature([_store_settings_currency__WEBPACK_IMPORTED_MODULE_21__["CurrencyEffects"], src_app_features_store_settings_country__WEBPACK_IMPORTED_MODULE_20__["CountryEffects"], src_app_features_store_settings_uom__WEBPACK_IMPORTED_MODULE_19__["UomEffects"], src_app_features_store_settings_region__WEBPACK_IMPORTED_MODULE_18__["RegionEffects"], src_app_features_store_settings_factorycode__WEBPACK_IMPORTED_MODULE_17__["FactorycodeEffects"], src_app_features_store_settings_paymentterm__WEBPACK_IMPORTED_MODULE_16__["PaymenttermEffects"], src_app_features_store_settings_department__WEBPACK_IMPORTED_MODULE_15__["DepartmentEffects"], src_app_features_store_settings_vendorgroup__WEBPACK_IMPORTED_MODULE_14__["VendorgroupEffects"], src_app_features_store_settings_vendor__WEBPACK_IMPORTED_MODULE_13__["VendorEffects"], src_app_features_store_settings_company__WEBPACK_IMPORTED_MODULE_12__["CompanyEffects"]]),
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                { path: '', pathMatch: 'full', redirectTo: 'countries' },
                { path: 'companys', component: _companys_companys_component__WEBPACK_IMPORTED_MODULE_22__["CompanysComponent"] },
                { path: 'vendors', component: _vendors_vendors_component__WEBPACK_IMPORTED_MODULE_23__["VendorsComponent"] },
                { path: 'vendorgroups', component: _vendorgroups_vendorgroups_component__WEBPACK_IMPORTED_MODULE_24__["VendorgroupsComponent"] },
                { path: 'departments', component: _departments_departments_component__WEBPACK_IMPORTED_MODULE_25__["DepartmentsComponent"] },
                { path: 'paymentterms', component: _paymentterms_paymentterms_component__WEBPACK_IMPORTED_MODULE_26__["PaymenttermsComponent"] },
                { path: 'factorycodes', component: _factorycodes_factorycodes_component__WEBPACK_IMPORTED_MODULE_27__["FactorycodesComponent"] },
                { path: 'regions', component: _regions_regions_component__WEBPACK_IMPORTED_MODULE_28__["RegionsComponent"] },
                { path: 'uoms', component: _uoms_uoms_component__WEBPACK_IMPORTED_MODULE_29__["UomsComponent"] },
                { path: 'countries', component: _countries_countries_component__WEBPACK_IMPORTED_MODULE_30__["CountriesComponent"] },
                { path: 'currencies', component: _currencies_currencies_component__WEBPACK_IMPORTED_MODULE_31__["CurrenciesComponent"], data: { breadcrumbs: ['Settings', 'Currencies'] } },
            ])
        ],
        entryComponents: [_companys_company_form_company_form_component__WEBPACK_IMPORTED_MODULE_32__["CompanyFormComponent"]]
    })
], SettingsModule);



/***/ }),

/***/ "./src/app/features/settings/uoms/uoms.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/settings/uoms/uoms.component.ts ***!
  \**********************************************************/
/*! exports provided: UomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UomsComponent", function() { return UomsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_settings_uom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/settings/uom */ "./src/app/features/store/settings/uom/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let UomsComponent = class UomsComponent {
    constructor() {
        this.form = [
            {
                row: [
                    { label: 'Uom Name', name: 'name', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'Code', name: 'code', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
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
            { title: 'Uom Name', value: 'name' },
            { title: 'Code', value: 'code' },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.selectAllSelector = _store_settings_uom__WEBPACK_IMPORTED_MODULE_1__["selectAllUoms"];
        this.selectCurrent = _store_settings_uom__WEBPACK_IMPORTED_MODULE_1__["selectCurrentUom"];
    }
    ngOnInit() {
    }
};
UomsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'smart-uoms',
        template: __webpack_require__(/*! raw-loader!./uoms.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/settings/uoms/uoms.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UomsComponent);



/***/ }),

/***/ "./src/app/features/settings/vendorgroups/vendorgroups.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/settings/vendorgroups/vendorgroups.component.ts ***!
  \**************************************************************************/
/*! exports provided: VendorgroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorgroupsComponent", function() { return VendorgroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_settings_vendorgroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/settings/vendorgroup */ "./src/app/features/store/settings/vendorgroup/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let VendorgroupsComponent = class VendorgroupsComponent {
    constructor() {
        this.form = [
            {
                row: [
                    { label: 'Vendor Group Name', name: 'name', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'Code', name: 'code', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
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
            { title: 'Vendor Group Name', value: 'name' },
            { title: 'Code', value: 'code' },
            { title: 'Status', value: 'status', bool: true },
        ];
        this.selectAllSelector = _store_settings_vendorgroup__WEBPACK_IMPORTED_MODULE_1__["selectAllVendorgroups"];
        this.selectCurrent = _store_settings_vendorgroup__WEBPACK_IMPORTED_MODULE_1__["selectCurrentVendorgroup"];
    }
    ngOnInit() {
    }
};
VendorgroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'smart-vendorgroups',
        template: __webpack_require__(/*! raw-loader!./vendorgroups.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/settings/vendorgroups/vendorgroups.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VendorgroupsComponent);



/***/ }),

/***/ "./src/app/features/settings/vendors/vendors.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/settings/vendors/vendors.component.ts ***!
  \****************************************************************/
/*! exports provided: VendorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorsComponent", function() { return VendorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_settings_vendor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/settings/vendor */ "./src/app/features/store/settings/vendor/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_settings_vendorgroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/settings/vendorgroup */ "./src/app/features/store/settings/vendorgroup/index.ts");
/* harmony import */ var _store_settings_country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/settings/country */ "./src/app/features/store/settings/country/index.ts");
/* harmony import */ var _store_settings_currency__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/settings/currency */ "./src/app/features/store/settings/currency/index.ts");
/* harmony import */ var _store_settings_paymentterm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/settings/paymentterm */ "./src/app/features/store/settings/paymentterm/index.ts");
/* harmony import */ var _store_settings_region__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/settings/region */ "./src/app/features/store/settings/region/index.ts");










let VendorsComponent = class VendorsComponent {
    constructor(store) {
        this.store = store;
        this.selectAllSelector = _store_settings_vendor__WEBPACK_IMPORTED_MODULE_1__["selectAllVendors"];
        this.selectCurrent = _store_settings_vendor__WEBPACK_IMPORTED_MODULE_1__["selectCurrentVendor"];
        this.form = [];
        this.columns = [
            { title: 'Vendor Name', value: 'name' },
            { title: 'Code', value: 'code' },
            { title: 'Status', value: 'status', bool: true },
        ];
    }
    ngOnInit() {
        this.store.dispatch(Object(_store_settings_vendorgroup__WEBPACK_IMPORTED_MODULE_5__["loadVendorgroups"])());
        this.vendorgroup = this.store.select(_store_settings_vendorgroup__WEBPACK_IMPORTED_MODULE_5__["selectAllVendorgroups"]);
        this.store.dispatch(Object(_store_settings_country__WEBPACK_IMPORTED_MODULE_6__["loadCountries"])());
        this.country = this.store.select(_store_settings_country__WEBPACK_IMPORTED_MODULE_6__["selectAllCountries"]);
        this.store.dispatch(Object(_store_settings_currency__WEBPACK_IMPORTED_MODULE_7__["loadCurrencies"])());
        this.currency = this.store.select(_store_settings_currency__WEBPACK_IMPORTED_MODULE_7__["selectAllCurrencies"]);
        this.store.dispatch(Object(_store_settings_paymentterm__WEBPACK_IMPORTED_MODULE_8__["loadPaymentterms"])());
        this.paymenterm = this.store.select(_store_settings_paymentterm__WEBPACK_IMPORTED_MODULE_8__["selectAllPaymentterms"]);
        this.store.dispatch(Object(_store_settings_region__WEBPACK_IMPORTED_MODULE_9__["loadRegions"])());
        this.region = this.store.select(_store_settings_region__WEBPACK_IMPORTED_MODULE_9__["selectAllRegions"]);
        this.form = [
            {
                row: [
                    { label: 'Vendor Name', name: 'name', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                    { label: 'Vendor Grpup', name: 'vendor_group', items: this.vendorgroup, validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, type: 'select' },
                ]
            },
            {
                row: [
                    { label: 'Code', name: 'code', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                    { label: 'Title', name: 'title', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'Contact Person', name: 'contact_person', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                    { label: 'Address', name: 'address', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                ]
            },
            {
                row: [
                    { label: 'City', name: 'city', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required },
                    { label: 'Country', name: 'country', items: this.country, validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, type: 'select' },
                ]
            },
            {
                row: [
                    { label: 'Phone', name: 'phone' },
                    { label: 'Mobile', name: 'mobile' },
                    { label: 'Fax', name: 'fax' },
                ]
            },
            {
                row: [
                    { label: 'Email', name: 'email', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required && _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, type: "email" },
                    { label: 'NTN', name: 'ntn' },
                    { label: 'Sale Tax No', name: 'sale_tax_no' },
                ]
            },
            {
                row: [
                    { label: 'Customer No', name: 'customer_no' },
                    { label: 'Min Order', name: 'min_order', type: 'number', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, },
                    { label: 'Max Order', name: 'max_order', type: 'number', validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, },
                ]
            },
            {
                row: [
                    { label: 'Payment Term', name: 'payment_term', items: this.paymenterm, validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, type: "select" },
                    { label: 'Currency', name: 'currency', items: this.currency, validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, type: 'select' },
                ]
            },
            {
                row: [
                    { label: 'Region', name: 'region', items: this.region, validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, type: "select" },
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
VendorsComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
VendorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'smart-vendors',
        template: __webpack_require__(/*! raw-loader!./vendors.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/settings/vendors/vendors.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
], VendorsComponent);



/***/ }),

/***/ "./src/app/features/store/settings/company/company.actions.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/store/settings/company/company.actions.ts ***!
  \********************************************************************/
/*! exports provided: loadCompanys, loadCompanysSuccess, addCompany, addCompanySuccess, deleteCompany, deleteCompanySuccess, selectCurrentCompanySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCompanys", function() { return loadCompanys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCompanysSuccess", function() { return loadCompanysSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCompany", function() { return addCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCompanySuccess", function() { return addCompanySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCompany", function() { return deleteCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCompanySuccess", function() { return deleteCompanySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCompanySuccess", function() { return selectCurrentCompanySuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadCompanys = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Company/API] Load Companys');
const loadCompanysSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Company/API] Load Companys Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addCompany = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Company/API] Add Company', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addCompanySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Company/API] Add Company Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteCompany = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Company/API] Delete Company', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteCompanySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Company/API] Delete Company Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentCompanySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Company/API] Select Current Company', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/settings/company/company.effects.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/store/settings/company/company.effects.ts ***!
  \********************************************************************/
/*! exports provided: CompanyEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyEffects", function() { return CompanyEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company.service */ "./src/app/features/store/settings/company/company.service.ts");
/* harmony import */ var _company_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company.actions */ "./src/app/features/store/settings/company/company.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _company_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company.selectors */ "./src/app/features/store/settings/company/company.selectors.ts");








let CompanyEffects = class CompanyEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadCompanys$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_company_actions__WEBPACK_IMPORTED_MODULE_5__["loadCompanys"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_company_selectors__WEBPACK_IMPORTED_MODULE_7__["allCompanyLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_company_actions__WEBPACK_IMPORTED_MODULE_5__["loadCompanysSuccess"])({ data }))))));
        this.addCompany$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_company_actions__WEBPACK_IMPORTED_MODULE_5__["addCompany"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_company_actions__WEBPACK_IMPORTED_MODULE_5__["addCompanySuccess"])({ data }))))));
        this.deleteCompany$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_company_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCompany"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_company_actions__WEBPACK_IMPORTED_MODULE_5__["deleteCompanySuccess"])({ id: data.id }))))));
    }
};
CompanyEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"] }
];
CompanyEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"]])
], CompanyEffects);



/***/ }),

/***/ "./src/app/features/store/settings/company/company.reducer.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/store/settings/company/company.reducer.ts ***!
  \********************************************************************/
/*! exports provided: companyFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "companyFeatureKey", function() { return companyFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _company_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company.actions */ "./src/app/features/store/settings/company/company.actions.ts");



const companyFeatureKey = 'companys';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allCompanysLoaded: false,
    currentCompany: null
});
const companyReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_company_actions__WEBPACK_IMPORTED_MODULE_2__["addCompanySuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentCompany: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_company_actions__WEBPACK_IMPORTED_MODULE_2__["deleteCompanySuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_company_actions__WEBPACK_IMPORTED_MODULE_2__["loadCompanysSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_company_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentCompanySuccess"], (state, action) => (Object.assign({}, state, { currentCompany: action.data }))));
function reducer(state, action) {
    return companyReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/features/store/settings/company/company.selectors.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/store/settings/company/company.selectors.ts ***!
  \**********************************************************************/
/*! exports provided: selectAllCompanys, allCompanyLoaded, selectCurrentCompany */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllCompanys", function() { return selectAllCompanys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allCompanyLoaded", function() { return allCompanyLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCompany", function() { return selectCurrentCompany; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _company_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company.reducer */ "./src/app/features/store/settings/company/company.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_company_reducer__WEBPACK_IMPORTED_MODULE_1__["companyFeatureKey"]);
const selectAllCompanys = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _company_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allCompanyLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allCompanysLoaded);
const selectCurrentCompany = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentCompany);


/***/ }),

/***/ "./src/app/features/store/settings/company/company.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/store/settings/company/company.service.ts ***!
  \********************************************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let CompanyService = class CompanyService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/companies/`;
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
        return this.http.put(`${this.url}${item.id}/`, item);
    }
    delete(item) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
};
CompanyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], CompanyService);



/***/ }),

/***/ "./src/app/features/store/settings/company/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/store/settings/company/index.ts ***!
  \**********************************************************/
/*! exports provided: CompanyEffects, CompanyService, selectAllCompanys, allCompanyLoaded, selectCurrentCompany, companyFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadCompanys, loadCompanysSuccess, addCompany, addCompanySuccess, deleteCompany, deleteCompanySuccess, selectCurrentCompanySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _company_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company.effects */ "./src/app/features/store/settings/company/company.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyEffects", function() { return _company_effects__WEBPACK_IMPORTED_MODULE_0__["CompanyEffects"]; });

/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company.service */ "./src/app/features/store/settings/company/company.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return _company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]; });

/* harmony import */ var _company_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company.selectors */ "./src/app/features/store/settings/company/company.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllCompanys", function() { return _company_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllCompanys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allCompanyLoaded", function() { return _company_selectors__WEBPACK_IMPORTED_MODULE_2__["allCompanyLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCompany", function() { return _company_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentCompany"]; });

/* harmony import */ var _company_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company.reducer */ "./src/app/features/store/settings/company/company.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "companyFeatureKey", function() { return _company_reducer__WEBPACK_IMPORTED_MODULE_3__["companyFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _company_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _company_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _company_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _company_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _company_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _company_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _company_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _company_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company.actions */ "./src/app/features/store/settings/company/company.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCompanys", function() { return _company_actions__WEBPACK_IMPORTED_MODULE_4__["loadCompanys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCompanysSuccess", function() { return _company_actions__WEBPACK_IMPORTED_MODULE_4__["loadCompanysSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCompany", function() { return _company_actions__WEBPACK_IMPORTED_MODULE_4__["addCompany"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCompanySuccess", function() { return _company_actions__WEBPACK_IMPORTED_MODULE_4__["addCompanySuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCompany", function() { return _company_actions__WEBPACK_IMPORTED_MODULE_4__["deleteCompany"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCompanySuccess", function() { return _company_actions__WEBPACK_IMPORTED_MODULE_4__["deleteCompanySuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentCompanySuccess", function() { return _company_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentCompanySuccess"]; });








/***/ }),

/***/ "./src/app/features/store/settings/department/department.actions.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/store/settings/department/department.actions.ts ***!
  \**************************************************************************/
/*! exports provided: loadDepartments, loadDepartmentsSuccess, addDepartment, addDepartmentSuccess, deleteDepartment, deleteDepartmentSuccess, selectCurrentDepartmentSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDepartments", function() { return loadDepartments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDepartmentsSuccess", function() { return loadDepartmentsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDepartment", function() { return addDepartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDepartmentSuccess", function() { return addDepartmentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDepartment", function() { return deleteDepartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDepartmentSuccess", function() { return deleteDepartmentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentDepartmentSuccess", function() { return selectCurrentDepartmentSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadDepartments = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Department/API] Load Departments');
const loadDepartmentsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Department/API] Load Departments Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addDepartment = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Department/API] Add Department', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addDepartmentSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Department/API] Add Department Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteDepartment = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Department/API] Delete Department', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteDepartmentSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Department/API] Delete Department Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentDepartmentSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Department/API] Select Current Department', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/settings/department/department.effects.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/store/settings/department/department.effects.ts ***!
  \**************************************************************************/
/*! exports provided: DepartmentEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentEffects", function() { return DepartmentEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./department.service */ "./src/app/features/store/settings/department/department.service.ts");
/* harmony import */ var _department_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./department.actions */ "./src/app/features/store/settings/department/department.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _department_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./department.selectors */ "./src/app/features/store/settings/department/department.selectors.ts");








let DepartmentEffects = class DepartmentEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadDepartments$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_department_actions__WEBPACK_IMPORTED_MODULE_5__["loadDepartments"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_department_selectors__WEBPACK_IMPORTED_MODULE_7__["allDepartmentLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_department_actions__WEBPACK_IMPORTED_MODULE_5__["loadDepartmentsSuccess"])({ data }))))));
        this.addDepartment$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_department_actions__WEBPACK_IMPORTED_MODULE_5__["addDepartment"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_department_actions__WEBPACK_IMPORTED_MODULE_5__["addDepartmentSuccess"])({ data }))))));
        this.deleteDepartment$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_department_actions__WEBPACK_IMPORTED_MODULE_5__["deleteDepartment"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_department_actions__WEBPACK_IMPORTED_MODULE_5__["deleteDepartmentSuccess"])({ id: data.id }))))));
    }
};
DepartmentEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"] }
];
DepartmentEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"]])
], DepartmentEffects);



/***/ }),

/***/ "./src/app/features/store/settings/department/department.reducer.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/store/settings/department/department.reducer.ts ***!
  \**************************************************************************/
/*! exports provided: departmentFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "departmentFeatureKey", function() { return departmentFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _department_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./department.actions */ "./src/app/features/store/settings/department/department.actions.ts");



const departmentFeatureKey = 'departments';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allDepartmentsLoaded: false,
    currentDepartment: null
});
const departmentReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_department_actions__WEBPACK_IMPORTED_MODULE_2__["addDepartmentSuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentDepartment: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_department_actions__WEBPACK_IMPORTED_MODULE_2__["deleteDepartmentSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_department_actions__WEBPACK_IMPORTED_MODULE_2__["loadDepartmentsSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_department_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentDepartmentSuccess"], (state, action) => (Object.assign({}, state, { currentDepartment: action.data }))));
function reducer(state, action) {
    return departmentReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/features/store/settings/department/department.selectors.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/store/settings/department/department.selectors.ts ***!
  \****************************************************************************/
/*! exports provided: selectAllDepartments, allDepartmentLoaded, selectCurrentDepartment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllDepartments", function() { return selectAllDepartments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allDepartmentLoaded", function() { return allDepartmentLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentDepartment", function() { return selectCurrentDepartment; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _department_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./department.reducer */ "./src/app/features/store/settings/department/department.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_department_reducer__WEBPACK_IMPORTED_MODULE_1__["departmentFeatureKey"]);
const selectAllDepartments = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _department_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allDepartmentLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allDepartmentsLoaded);
const selectCurrentDepartment = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentDepartment);


/***/ }),

/***/ "./src/app/features/store/settings/department/department.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/store/settings/department/department.service.ts ***!
  \**************************************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let DepartmentService = class DepartmentService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/departments/`;
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
DepartmentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
DepartmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], DepartmentService);



/***/ }),

/***/ "./src/app/features/store/settings/department/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/store/settings/department/index.ts ***!
  \*************************************************************/
/*! exports provided: DepartmentEffects, DepartmentService, selectAllDepartments, allDepartmentLoaded, selectCurrentDepartment, departmentFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadDepartments, loadDepartmentsSuccess, addDepartment, addDepartmentSuccess, deleteDepartment, deleteDepartmentSuccess, selectCurrentDepartmentSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _department_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./department.effects */ "./src/app/features/store/settings/department/department.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DepartmentEffects", function() { return _department_effects__WEBPACK_IMPORTED_MODULE_0__["DepartmentEffects"]; });

/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./department.service */ "./src/app/features/store/settings/department/department.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return _department_service__WEBPACK_IMPORTED_MODULE_1__["DepartmentService"]; });

/* harmony import */ var _department_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./department.selectors */ "./src/app/features/store/settings/department/department.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllDepartments", function() { return _department_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllDepartments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allDepartmentLoaded", function() { return _department_selectors__WEBPACK_IMPORTED_MODULE_2__["allDepartmentLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentDepartment", function() { return _department_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentDepartment"]; });

/* harmony import */ var _department_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./department.reducer */ "./src/app/features/store/settings/department/department.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "departmentFeatureKey", function() { return _department_reducer__WEBPACK_IMPORTED_MODULE_3__["departmentFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _department_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _department_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _department_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _department_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _department_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _department_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _department_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _department_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./department.actions */ "./src/app/features/store/settings/department/department.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadDepartments", function() { return _department_actions__WEBPACK_IMPORTED_MODULE_4__["loadDepartments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadDepartmentsSuccess", function() { return _department_actions__WEBPACK_IMPORTED_MODULE_4__["loadDepartmentsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addDepartment", function() { return _department_actions__WEBPACK_IMPORTED_MODULE_4__["addDepartment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addDepartmentSuccess", function() { return _department_actions__WEBPACK_IMPORTED_MODULE_4__["addDepartmentSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteDepartment", function() { return _department_actions__WEBPACK_IMPORTED_MODULE_4__["deleteDepartment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteDepartmentSuccess", function() { return _department_actions__WEBPACK_IMPORTED_MODULE_4__["deleteDepartmentSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentDepartmentSuccess", function() { return _department_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentDepartmentSuccess"]; });








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



/***/ }),

/***/ "./src/app/features/store/settings/vendorgroup/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/store/settings/vendorgroup/index.ts ***!
  \**************************************************************/
/*! exports provided: VendorgroupEffects, VendorgroupService, selectAllVendorgroups, allVendorgroupLoaded, selectCurrentVendorgroup, vendorgroupFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadVendorgroups, loadVendorgroupsSuccess, addVendorgroup, addVendorgroupSuccess, deleteVendorgroup, deleteVendorgroupSuccess, selectCurrentVendorgroupSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendorgroup_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendorgroup.effects */ "./src/app/features/store/settings/vendorgroup/vendorgroup.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VendorgroupEffects", function() { return _vendorgroup_effects__WEBPACK_IMPORTED_MODULE_0__["VendorgroupEffects"]; });

/* harmony import */ var _vendorgroup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendorgroup.service */ "./src/app/features/store/settings/vendorgroup/vendorgroup.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VendorgroupService", function() { return _vendorgroup_service__WEBPACK_IMPORTED_MODULE_1__["VendorgroupService"]; });

/* harmony import */ var _vendorgroup_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendorgroup.selectors */ "./src/app/features/store/settings/vendorgroup/vendorgroup.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllVendorgroups", function() { return _vendorgroup_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllVendorgroups"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allVendorgroupLoaded", function() { return _vendorgroup_selectors__WEBPACK_IMPORTED_MODULE_2__["allVendorgroupLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentVendorgroup", function() { return _vendorgroup_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentVendorgroup"]; });

/* harmony import */ var _vendorgroup_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendorgroup.reducer */ "./src/app/features/store/settings/vendorgroup/vendorgroup.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vendorgroupFeatureKey", function() { return _vendorgroup_reducer__WEBPACK_IMPORTED_MODULE_3__["vendorgroupFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _vendorgroup_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _vendorgroup_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _vendorgroup_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _vendorgroup_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _vendorgroup_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _vendorgroup_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _vendorgroup_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _vendorgroup_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendorgroup.actions */ "./src/app/features/store/settings/vendorgroup/vendorgroup.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadVendorgroups", function() { return _vendorgroup_actions__WEBPACK_IMPORTED_MODULE_4__["loadVendorgroups"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadVendorgroupsSuccess", function() { return _vendorgroup_actions__WEBPACK_IMPORTED_MODULE_4__["loadVendorgroupsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addVendorgroup", function() { return _vendorgroup_actions__WEBPACK_IMPORTED_MODULE_4__["addVendorgroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addVendorgroupSuccess", function() { return _vendorgroup_actions__WEBPACK_IMPORTED_MODULE_4__["addVendorgroupSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteVendorgroup", function() { return _vendorgroup_actions__WEBPACK_IMPORTED_MODULE_4__["deleteVendorgroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteVendorgroupSuccess", function() { return _vendorgroup_actions__WEBPACK_IMPORTED_MODULE_4__["deleteVendorgroupSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentVendorgroupSuccess", function() { return _vendorgroup_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentVendorgroupSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/settings/vendorgroup/vendorgroup.actions.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/store/settings/vendorgroup/vendorgroup.actions.ts ***!
  \****************************************************************************/
/*! exports provided: loadVendorgroups, loadVendorgroupsSuccess, addVendorgroup, addVendorgroupSuccess, deleteVendorgroup, deleteVendorgroupSuccess, selectCurrentVendorgroupSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadVendorgroups", function() { return loadVendorgroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadVendorgroupsSuccess", function() { return loadVendorgroupsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVendorgroup", function() { return addVendorgroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVendorgroupSuccess", function() { return addVendorgroupSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteVendorgroup", function() { return deleteVendorgroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteVendorgroupSuccess", function() { return deleteVendorgroupSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentVendorgroupSuccess", function() { return selectCurrentVendorgroupSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadVendorgroups = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Vendorgroup/API] Load Vendorgroups');
const loadVendorgroupsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Vendorgroup/API] Load Vendorgroups Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addVendorgroup = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Vendorgroup/API] Add Vendorgroup', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addVendorgroupSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Vendorgroup/API] Add Vendorgroup Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteVendorgroup = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Vendorgroup/API] Delete Vendorgroup', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteVendorgroupSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Vendorgroup/API] Delete Vendorgroup Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentVendorgroupSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Vendorgroup/API] Select Current Vendorgroup', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/settings/vendorgroup/vendorgroup.effects.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/store/settings/vendorgroup/vendorgroup.effects.ts ***!
  \****************************************************************************/
/*! exports provided: VendorgroupEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorgroupEffects", function() { return VendorgroupEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _vendorgroup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendorgroup.service */ "./src/app/features/store/settings/vendorgroup/vendorgroup.service.ts");
/* harmony import */ var _vendorgroup_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendorgroup.actions */ "./src/app/features/store/settings/vendorgroup/vendorgroup.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _vendorgroup_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vendorgroup.selectors */ "./src/app/features/store/settings/vendorgroup/vendorgroup.selectors.ts");








let VendorgroupEffects = class VendorgroupEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadVendorgroups$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_vendorgroup_actions__WEBPACK_IMPORTED_MODULE_5__["loadVendorgroups"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_vendorgroup_selectors__WEBPACK_IMPORTED_MODULE_7__["allVendorgroupLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_vendorgroup_actions__WEBPACK_IMPORTED_MODULE_5__["loadVendorgroupsSuccess"])({ data }))))));
        this.addVendorgroup$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_vendorgroup_actions__WEBPACK_IMPORTED_MODULE_5__["addVendorgroup"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_vendorgroup_actions__WEBPACK_IMPORTED_MODULE_5__["addVendorgroupSuccess"])({ data }))))));
        this.deleteVendorgroup$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_vendorgroup_actions__WEBPACK_IMPORTED_MODULE_5__["deleteVendorgroup"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_vendorgroup_actions__WEBPACK_IMPORTED_MODULE_5__["deleteVendorgroupSuccess"])({ id: data.id }))))));
    }
};
VendorgroupEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _vendorgroup_service__WEBPACK_IMPORTED_MODULE_4__["VendorgroupService"] }
];
VendorgroupEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _vendorgroup_service__WEBPACK_IMPORTED_MODULE_4__["VendorgroupService"]])
], VendorgroupEffects);



/***/ }),

/***/ "./src/app/features/store/settings/vendorgroup/vendorgroup.reducer.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/store/settings/vendorgroup/vendorgroup.reducer.ts ***!
  \****************************************************************************/
/*! exports provided: vendorgroupFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vendorgroupFeatureKey", function() { return vendorgroupFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _vendorgroup_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendorgroup.actions */ "./src/app/features/store/settings/vendorgroup/vendorgroup.actions.ts");



const vendorgroupFeatureKey = 'vendorgroups';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allVendorgroupsLoaded: false,
    currentVendorgroup: null
});
const vendorgroupReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_vendorgroup_actions__WEBPACK_IMPORTED_MODULE_2__["addVendorgroupSuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentVendorgroup: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_vendorgroup_actions__WEBPACK_IMPORTED_MODULE_2__["deleteVendorgroupSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_vendorgroup_actions__WEBPACK_IMPORTED_MODULE_2__["loadVendorgroupsSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_vendorgroup_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentVendorgroupSuccess"], (state, action) => (Object.assign({}, state, { currentVendorgroup: action.data }))));
function reducer(state, action) {
    return vendorgroupReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/features/store/settings/vendorgroup/vendorgroup.selectors.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/store/settings/vendorgroup/vendorgroup.selectors.ts ***!
  \******************************************************************************/
/*! exports provided: selectAllVendorgroups, allVendorgroupLoaded, selectCurrentVendorgroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllVendorgroups", function() { return selectAllVendorgroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allVendorgroupLoaded", function() { return allVendorgroupLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentVendorgroup", function() { return selectCurrentVendorgroup; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _vendorgroup_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendorgroup.reducer */ "./src/app/features/store/settings/vendorgroup/vendorgroup.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_vendorgroup_reducer__WEBPACK_IMPORTED_MODULE_1__["vendorgroupFeatureKey"]);
const selectAllVendorgroups = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _vendorgroup_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allVendorgroupLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allVendorgroupsLoaded);
const selectCurrentVendorgroup = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentVendorgroup);


/***/ }),

/***/ "./src/app/features/store/settings/vendorgroup/vendorgroup.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/store/settings/vendorgroup/vendorgroup.service.ts ***!
  \****************************************************************************/
/*! exports provided: VendorgroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorgroupService", function() { return VendorgroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let VendorgroupService = class VendorgroupService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/vendor-groups/`;
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
VendorgroupService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
VendorgroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], VendorgroupService);



/***/ })

}]);
//# sourceMappingURL=features-settings-settings-module-es2015.js.map