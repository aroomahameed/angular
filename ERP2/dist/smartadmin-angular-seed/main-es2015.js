(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/dialogs/modal/modal.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/dialogs/modal/modal.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header panel-hdr bg-primary-700 bg-success-gradient\">\r\n  <h4 class=\"modal-title\">\r\n    {{ title }}\r\n    <small class=\"m-0 text-white-50\">\r\n      {{ description }}\r\n    </small>\r\n  </h4>\r\n  <button type=\"button\" class=\"close\" (click)=\"modalRef.hide()\" tabindex=\"-1\">\r\n    <span aria-hidden=\"true\"><i class=\"fal fa-times text-white-50\"></i></span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <ng-content></ng-content>\r\n</div>\r\n<!-- <div class=\"modal-footer border-faded border-left-0 border-right-0 border-bottom-0\">\r\n  <ng-content select=\"[footer]\"></ng-content>\r\n</div> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layout/auth/auth.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layout/auth/auth.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>auth works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layout/dropdown-apps/dropdown-apps.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layout/dropdown-apps/dropdown-apps.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div dropdown class=\"position-relative\">\r\n  <a\r\n    id=\"button-basic\"\r\n    dropdownToggle\r\n    class=\"header-icon\"\r\n    data-toggle=\"dropdown\"\r\n    aria-controls=\"dropdown-basic\"\r\n  >\r\n    <i class=\"fal fa-cube\"></i>\r\n  </a>\r\n  <div\r\n    id=\"dropdown-basic\"\r\n    *dropdownMenu\r\n    class=\"dropdown-menu dropdown-menu-animated-center w-auto h-auto\"\r\n    role=\"menu\"\r\n    aria-labelledby=\"button-basic\"\r\n  >\r\n  <div class=\"dropdown-header bg-trans-gradient d-flex justify-content-center align-items-center rounded-top\">\r\n      <h4 class=\"m-0 text-center color-white\">\r\n        Quick Shortcut\r\n        <small class=\"mb-0 opacity-80\">User Applications & Addons</small>\r\n      </h4>\r\n    </div>\r\n    <div class=\"custom-scroll h-100\">\r\n      <ul class=\"app-list\">\r\n        <li>\r\n          <a href=\"#\" class=\"app-list-item hover-white\">\r\n    \r\n            <span class=\"icon-stack\">\r\n              <i class=\"base-2 icon-stack-3x color-primary-600\"></i>\r\n              <i class=\"base-3 icon-stack-2x color-primary-700\"></i>\r\n              <i class=\"ni ni-settings icon-stack-1x text-white fs-lg\"></i>\r\n            </span>\r\n    \r\n            <span class=\"app-list-name\">\r\n              Services\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"app-list-item hover-white\">\r\n    \r\n            <span class=\"icon-stack\">\r\n              <i class=\"base-2 icon-stack-3x color-primary-400\"></i>\r\n              <i class=\"base-10 text-white icon-stack-1x\"></i>\r\n              <i class=\"ni md-profile color-primary-800 icon-stack-2x\"></i>\r\n            </span>\r\n    \r\n            <span class=\"app-list-name\">\r\n              Account\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"app-list-item hover-white\">\r\n    \r\n            <span class=\"icon-stack\">\r\n              <i class=\"base-9 icon-stack-3x color-success-400\"></i>\r\n              <i class=\"base-2 icon-stack-2x color-success-500\"></i>\r\n              <i class=\"ni ni-shield icon-stack-1x text-white\"></i>\r\n            </span>\r\n    \r\n            <span class=\"app-list-name\">\r\n              Security\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"app-list-item hover-white\">\r\n    \r\n            <span class=\"icon-stack\">\r\n              <i class=\"base-18 icon-stack-3x color-info-700\"></i>\r\n              <span class=\"position-absolute pos-top pos-left pos-right color-white fs-md mt-2 fw-400\">28</span>\r\n            </span>\r\n    \r\n            <span class=\"app-list-name\">\r\n              Calendar\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"app-list-item hover-white\">\r\n            \r\n            <span class=\"icon-stack\">\r\n              <i class=\"base-7 icon-stack-3x color-info-500\"></i>\r\n              <i class=\"base-7 icon-stack-2x color-info-700\"></i>\r\n              <i class=\"ni ni-graph icon-stack-1x text-white\"></i>\r\n            </span>\r\n            <span class=\"app-list-name\">\r\n              Stats\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"app-list-item hover-white\">\r\n            <span class=\"icon-stack\">\r\n              <i class=\"base-4 icon-stack-3x color-danger-500\"></i>\r\n              <i class=\"base-4 icon-stack-1x color-danger-400\"></i>\r\n              <i class=\"ni ni-envelope icon-stack-1x text-white\"></i>\r\n            </span>\r\n            <span class=\"app-list-name\">\r\n              Messages\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"app-list-item hover-white\">\r\n            <span class=\"icon-stack\">\r\n              <i class=\"base-4 icon-stack-3x color-fusion-400\"></i>\r\n              <i class=\"base-5 icon-stack-2x color-fusion-200\"></i>\r\n              <i class=\"base-5 icon-stack-1x color-fusion-100\"></i>\r\n              <i class=\"fal fa-keyboard icon-stack-1x color-info-50\"></i>\r\n            </span>\r\n            <span class=\"app-list-name\">\r\n              Notes\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"app-list-item hover-white\">\r\n            <span class=\"icon-stack\">\r\n              <i class=\"base-16 icon-stack-3x color-fusion-500\"></i>\r\n              <i class=\"base-10 icon-stack-1x color-primary-50 opacity-30\"></i>\r\n              <i class=\"base-10 icon-stack-1x fs-xl color-primary-50 opacity-20\"></i>\r\n              <i class=\"fal fa-dot-circle icon-stack-1x text-white opacity-85\"></i>\r\n            </span>\r\n            <span class=\"app-list-name\">\r\n              Photos\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"app-list-item hover-white\">\r\n            <span class=\"icon-stack\">\r\n              <i class=\"base-19 icon-stack-3x color-primary-400\"></i>\r\n              <i class=\"base-7 icon-stack-2x color-primary-300\"></i>\r\n              <i class=\"base-7 icon-stack-1x fs-xxl color-primary-200\"></i>\r\n              <i class=\"base-7 icon-stack-1x color-primary-500\"></i>\r\n              <i class=\"fal fa-globe icon-stack-1x text-white opacity-85\"></i>\r\n            </span>\r\n            <span class=\"app-list-name\">\r\n              Maps\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"app-list-item hover-white\">\r\n            <span class=\"icon-stack\">\r\n              <i class=\"base-5 icon-stack-3x color-success-700 opacity-80\"></i>\r\n              <i class=\"base-12 icon-stack-2x color-success-700 opacity-30\"></i>\r\n              <i class=\"fal fa-comment-alt icon-stack-1x text-white\"></i>\r\n            </span>\r\n            <span class=\"app-list-name\">\r\n              Chat\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"app-list-item hover-white\">\r\n            <span class=\"icon-stack\">\r\n              <i class=\"base-5 icon-stack-3x color-warning-600\"></i>\r\n              <i class=\"base-7 icon-stack-2x color-warning-800 opacity-50\"></i>\r\n              <i class=\"fal fa-phone icon-stack-1x text-white\"></i>\r\n            </span>\r\n            <span class=\"app-list-name\">\r\n              Phone\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"app-list-item hover-white\">\r\n            <span class=\"icon-stack\">\r\n              <i class=\"base-6 icon-stack-3x color-danger-600\"></i>\r\n              <i class=\"fal fa-chart-line icon-stack-1x text-white\"></i>\r\n            </span>\r\n            <span class=\"app-list-name\">\r\n              Projects\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li class=\"w-100\">\r\n          <a href=\"#\" class=\"btn btn-default mt-4 mb-2 pr-5 pl-5\"> Add more apps </a>\r\n        </li>\t\r\n      </ul>\t\r\n    </div>\r\n    \r\n  </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layout/dropdown-user/dropdown-user.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layout/dropdown-user/dropdown-user.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div dropdown>\r\n  <a dropdownToggle data-toggle=\"dropdown\" title=\"{{user.email}}\" class=\"header-icon d-flex align-items-center justify-content-center ml-2\">\r\n    <img src=\"assets/img/demo/avatars/{{user.avatar}}\" class=\"profile-image rounded-circle\" alt=\"{{user.name}}\"> \r\n    <!-- you can also add username next to the avatar with the codes below:\r\n    <span class=\"ml-1 mr-1 text-truncate text-truncate-header hidden-xs-down\">Me</span>\r\n    <i class=\"ni ni-chevron-down hidden-xs-down\"></i> -->\r\n  </a>\r\n  <div *dropdownMenu class=\"dropdown-menu dropdown-menu-animated-right dropdown-lg\">\r\n    <div class=\"dropdown-header bg-trans-gradient d-flex flex-row py-4 rounded-top\">\r\n      <div class=\"d-flex flex-row align-items-center mt-1 mb-1 color-white\">\r\n        <span class=\"mr-2\">\r\n          <img src=\"assets/img/demo/avatars/{{user.avatar}}\" class=\"rounded-circle profile-image\" alt=\"{{user.user}}\">\r\n        </span>\r\n        <div class=\"info-card-text\">\r\n          <div class=\"fs-lg text-truncate text-truncate-lg\">{{user.user}}</div>\r\n          <span class=\"text-truncate text-truncate-md opacity-80\">{{user.email}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"dropdown-divider m-0\"></div>\r\n    <a href=\"#\" class=\"dropdown-item\" data-action=\"app-reset\">\r\n      <span >Reset Layout</span>\r\n    </a>\r\n    <a href=\"#\" class=\"dropdown-item\" data-toggle=\"modal\" data-target=\".js-modal-settings\">\r\n      <span >Settings</span>\r\n    </a>\r\n    <div class=\"dropdown-divider m-0\"></div>\r\n    \r\n    <a href=\"#\" class=\"dropdown-item\" data-action=\"app-fullscreen\">\r\n      <span >Fullscreen</span> \r\n      <i class=\"float-right text-muted fw-n\">F11</i>\r\n    </a>\r\n    <a href=\"#\" class=\"dropdown-item\" data-action=\"app-print\">\r\n      <span >Print</span> \r\n      <i class=\"float-right text-muted fw-n\">Ctrl + P</i>\r\n    </a>\r\n    <!-- <div class=\"dropdown-multilevel dropdown-multilevel-left\">\r\n      <div class=\"dropdown-item\">\r\n        Language\r\n      </div>\r\n      <div class=\"dropdown-menu\">\r\n        <a href=\"#?lang=fr\" class=\"dropdown-item\" data-action=\"lang\" data-lang=\"fr\">Français</a>\r\n        <a href=\"#?lang=en\" class=\"dropdown-item active\" data-action=\"lang\" data-lang=\"en\">English (US)</a>\r\n        <a href=\"#?lang=es\" class=\"dropdown-item\" data-action=\"lang\" data-lang=\"es\">Español</a>\r\n        <a href=\"#?lang=ru\" class=\"dropdown-item\" data-action=\"lang\" data-lang=\"ru\">Русский язык</a>\r\n        <a href=\"#?lang=jp\" class=\"dropdown-item\" data-action=\"lang\" data-lang=\"jp\">日本語</a>\r\n        <a href=\"#?lang=ch\" class=\"dropdown-item\" data-action=\"lang\" data-lang=\"ch\">中文</a>\r\n      </div>\r\n    </div> -->\r\n    <div class=\"dropdown-divider m-0\"></div>\r\n    <a class=\"dropdown-item fw-500 pt-3 pb-3\" href=\"page_login-alt.html\">\r\n      <span >Logout</span> \r\n      <span class=\"float-right fw-n\">{{user.twitter}}</span>\r\n    </a>\r\n    \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layout/fab-shortcut/fab-shortcut.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layout/fab-shortcut/fab-shortcut.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"shortcut-menu hidden-sm-down\">\r\n  <input type=\"checkbox\" class=\"menu-open\" name=\"menu-open\" id=\"menu_open\"/>\r\n  <label for=\"menu_open\" class=\"menu-open-button \">\r\n    <span class=\"app-shortcut-icon d-block\"></span>\r\n  </label>\r\n  <a href=\"#\" class=\"menu-item btn\" placement=\"left\" (click)=\"scrollTop($event)\" tooltip=\"Scroll Top\">\r\n    <i class=\"fal fa-arrow-up\"></i>\r\n  </a>\r\n  <a href=\"page_login-alt.html\" class=\"menu-item btn\" placement=\"left\" (click)=\"logout($event)\" tooltip=\"Logout\">\r\n    <i class=\"fal fa-sign-out\"></i>\r\n  </a>\r\n  <a href=\"#\" class=\"menu-item btn\" data-action=\"app-fullscreen\" placement=\"left\" (click)=\"fullScreen($event)\" tooltip=\"Full Screen\">\r\n    <i class=\"fal fa-expand\"></i>\r\n  </a>\r\n  <a href=\"#\" class=\"menu-item btn\" data-action=\"app-print\" placement=\"left\" (click)=\"printPage($event)\" tooltip=\"Print page\">\r\n    <i class=\"fal fa-print\"></i>\r\n  </a>\r\n</nav>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layout/logo/logo.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layout/logo/logo.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-logo\">\r\n  <a\r\n    href=\"#\"\r\n    class=\"page-logo-link press-scale-down d-flex align-items-center\"\r\n    data-toggle=\"modal\"\r\n    (click)=\"openShortcut($event)\"\r\n  >\r\n    <img\r\n      src=\"/assets/img/{{ logo }}\"\r\n      alt=\"{{ appName }}\"\r\n      aria-roledescription=\"logo\"\r\n    />\r\n    <span class=\"page-logo-text mr-1\">{{ appName }}</span>\r\n    <i\r\n      class=\"fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300\"\r\n    ></i>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layout/main/main.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layout/main/main.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\r\n  <div class=\"page-inner\">\r\n    <smart-sidebar class=\"d-flex flex-column flex-fill \"></smart-sidebar>\r\n\r\n    <div class=\"page-content-wrapper\">\r\n      <smart-page-header></smart-page-header>\r\n\r\n      <main id=\"js-page-content\" role=\"main\" class=\"page-content\">\r\n        <smart-page-breadcrumb></smart-page-breadcrumb>\r\n        <router-outlet></router-outlet>\r\n      </main>\r\n\r\n      <smart-page-footer class=\"d-flex w-100 order-4 \"></smart-page-footer>\r\n    </div>\r\n\r\n    <smart-fab-shortcut></smart-fab-shortcut>\r\n\r\n    <!-- this overlay is activated only when mobile menu is triggered -->\r\n    <div class=\"page-content-overlay\" (click)=\"closeMobileNav($event)\" data-class=\"mobile-nav-on\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layout/page-breadcrumb/page-breadcrumb.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layout/page-breadcrumb/page-breadcrumb.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ol class=\"breadcrumb page-breadcrumb\" *ngIf=\"vm$ | async as vm\">\r\n  <li class=\"breadcrumb-item\"><a href=\"#\" smartStubClick>ERP</a></li>\r\n\r\n  <ng-container *ngIf=\"vm.state && vm.state.data && vm.state.data.breadcrumbs\">\r\n    <li class=\"breadcrumb-item\" *ngFor=\"let crumb of vm.state.data.breadcrumbs; let i = index\" [class.active]=\"vm.state.data.breadcrumbs.length === (i + 1)\">\r\n      {{crumb}}\r\n    </li>\r\n    \r\n  </ng-container>\r\n\r\n  <li class=\"position-absolute pos-top pos-right d-none d-sm-block\">\r\n    <span>{{ date | date }}</span>\r\n  </li>\r\n</ol> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layout/page-footer/page-footer.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layout/page-footer/page-footer.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <footer class=\"page-footer w-100\" role=\"contentinfo\">\r\n\t<div class=\"d-flex align-items-center flex-1 text-muted\">\r\n\t\t<span class=\"hidden-md-down fw-700\" [innerHTML]=\"copyright\"></span>\r\n\t</div>\r\n\t<div>\r\n\t\t<ul class=\"list-table m-0\">\r\n\t\t\t<li><a href=\"#\" class=\"text-secondary fw-700\">About</a></li>\r\n\t\t\t<li class=\"pl-3\"><a href=\"#\" class=\"text-secondary fw-700\">License</a></li>\r\n\t\t\t<li class=\"pl-3\"><a href=\"#\" class=\"text-secondary fw-700\">Documentation</a></li>\r\n\t\t\t<li class=\"pl-3 fs-xl\"><a href=\"#\" class=\"text-secondary\"><i class=\"fal fa-question-circle\" aria-hidden=\"true\"></i></a></li>\r\n\t\t</ul>\r\n\t</div>\r\n</footer> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layout/page-header/page-header.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layout/page-header/page-header.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"page-header\" role=\"banner\">\r\n\r\n    <!-- we need this logo when user switches to nav-function-top -->\r\n    <smart-logo></smart-logo>\r\n  \r\n\r\n    <smart-settings-shortcut></smart-settings-shortcut>\r\n      \r\n    <!-- DOC: mobile button appears during mobile width -->\r\n    <div class=\"hidden-lg-up\">\r\n      <a href=\"#\" (click)=\"openMobileNav($event)\" class=\"header-btn btn press-scale-down\" data-action=\"toggle\" data-class=\"mobile-nav-on\">\r\n        <i class=\"ni ni-menu\"></i>\r\n      </a>\r\n    </div>\r\n  \r\n    <div class=\"search\">\r\n      <form class=\"app-forms hidden-xs-down\" role=\"search\" action=\"search-results.html\" autocomplete=\"off\">\r\n         <!-- <i class=\"fal fa-search position-absolute fs-xl m-2 p-1 text-muted pos-left\"></i>  -->\r\n        <input type=\"text\" id=\"search-field\" placeholder=\"Search for anything\" class=\"form-control\" tabindex=\"1\">\r\n        <a href=\"#\" onclick=\"return false;\" class=\"btn-danger btn-search-close js-waves-off d-none\" data-action=\"toggle\" data-class=\"mobile-search-on\">\r\n          <i class=\"fal fa-times\"></i>\r\n        </a>\r\n      </form>\r\n    </div>\r\n  \r\n    <div class=\"ml-auto d-flex\">\r\n      \r\n      <!-- activate app search icon (mobile) -->\r\n      <div class=\"hidden-sm-up\">\r\n        <a href=\"#\" class=\"header-icon\" data-action=\"toggle\" data-class=\"mobile-search-on\" data-focus=\"search-field\" title=\"Search\">\r\n          <i class=\"fal fa-search\"></i>\r\n        </a>\r\n      </div>\r\n  \r\n      <!-- app settings -->\r\n      <smart-settings-modal></smart-settings-modal>\r\n  \r\n      <!-- app shortcuts -->      \r\n      <smart-dropdown-apps></smart-dropdown-apps>\r\n      \r\n      <!-- app message -->\r\n      <!-- <a href=\"#\" class=\"header-icon\" data-toggle=\"modal\" data-target=\".js-modal-messenger\">\r\n        <i class=\"fal fa-globe\"></i>\r\n        <span class=\"badge badge-icon\">!</span>\r\n      </a>\r\n         -->\r\n      <!-- app notification -->\r\n      <!-- <div>\r\n        <a href=\"#\" class=\"header-icon\" data-toggle=\"dropdown\" title=\"You got 11 notifications\">\r\n          <i class=\"fal fa-bell\"></i>\r\n          <span class=\"badge badge-icon\">11</span>\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-menu-animated dropdown-xl\">\r\n          {{> include/_dropdown-notification}} \r\n        </div>\r\n      </div> -->\r\n  \r\n      <!-- app user menu -->\r\n      <smart-dropdown-user></smart-dropdown-user>\r\n    </div>\r\n  \r\n  </header>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layout/page-heading/page-heading.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layout/page-heading/page-heading.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"subheader\">\r\n\r\n    \r\n  \r\n    <h1 class=\"subheader-title\">\r\n        <i class={{icon}}></i> {{title}}\r\n      <small>\r\n          {{description}}\r\n      </small>\r\n    </h1>\t\r\n  \r\n    \r\n  \r\n  </div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layout/settings-modal/settings-modal.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layout/settings-modal/settings-modal.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hidden-md-down\">\r\n  <a\r\n    class=\"header-icon\"\r\n    data-toggle=\"modal\"\r\n    (click)=\"openModal($event)\"\r\n  >\r\n    <i class=\"fal fa-cog\"></i>\r\n  </a>\r\n</div>\r\n\r\n<ng-template #template>\r\n  <div\r\n    class=\"dropdown-header bg-trans-gradient d-flex justify-content-center align-items-center w-100\"\r\n  >\r\n    <h4 class=\"m-0 text-center color-white\">\r\n      Layout Settings\r\n      <small class=\"mb-0 opacity-80\">User Interface Settings</small>\r\n    </h4>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close text-white position-absolute pos-top pos-right p-2 m-1 mr-2\"\r\n      data-dismiss=\"modal\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modalRef.hide()\"\r\n    >\r\n      <span aria-hidden=\"true\"><i class=\"fal fa-times\"></i></span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body p-0\">\r\n    <smart-settings></smart-settings>\r\n  </div>\r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layout/settings-shortcut/settings-shortcut.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layout/settings-shortcut/settings-shortcut.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- DOC: nav menu layout change shortcut -->\r\n<!-- <div class=\"hidden-md-down dropdown-icon-menu position-relative\">\r\n  <a\r\n    href=\"#\"\r\n    class=\"header-btn btn js-waves-off\"\r\n    (click)=\"toggleHideNavigation($event)\"\r\n    title=\"Hide Navigation\"\r\n    data-class=\"nav-function-hidden\"\r\n  >\r\n    <i class=\"ni ni-menu\"></i>\r\n  </a>\r\n  <ul>\r\n    <li>\r\n      <a\r\n        href=\"#\"\r\n        class=\"btn js-waves-off\"\r\n        (click)=\"toggleMinifyNavigation($event)\"\r\n        title=\"Minify Navigation\"\r\n        data-class=\"nav-function-minify\"\r\n      >\r\n        <i class=\"ni ni-minify-nav\"></i>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a\r\n        href=\"#\"\r\n        class=\"btn js-waves-off\"\r\n        (click)=\"toggleFixedNavigation($event)\"\r\n        title=\"Lock Navigation\"\r\n        data-class=\"nav-function-fixed\"\r\n      >\r\n        <i class=\"ni ni-lock-nav\"></i>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layout/settings/settings.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layout/settings/settings.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"settings-panel\" *ngIf=\"vm$ | async as vm\">\r\n  <div class=\"mt-4 d-table w-100 px-5\">\r\n    <div class=\"d-table-cell align-middle\">\r\n      <h5 class=\"p-0\">\r\n        App Layout\r\n      </h5>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"list\" id=\"fh\">\r\n    <smart-on-off\r\n      [checked]=\"vm.fixedHeader\"\r\n      (checkedChange)=\"toggleFixedHedaer($event)\"\r\n    ></smart-on-off>\r\n    <span class=\"onoffswitch-title\">Fixed Header</span>\r\n    <span class=\"onoffswitch-title-desc\"\r\n      >header is in a fixed at all times</span\r\n    >\r\n  </div>\r\n\r\n  <div class=\"list\" id=\"nff\">\r\n    <smart-on-off\r\n      [checked]=\"vm.fixedNavigation\"\r\n      (checkedChange)=\"toggleFixedNavigation($event)\"\r\n    ></smart-on-off>\r\n    <span class=\"onoffswitch-title\">Fixed Navigation</span>\r\n    <span class=\"onoffswitch-title-desc\">left panel is fixed</span>\r\n  </div>\r\n\r\n  <div class=\"list\" id=\"nfm\">\r\n    <smart-on-off\r\n      [checked]=\"vm.minifyNavigation\"\r\n      (checkedChange)=\"toggleMinifyNavigation($event)\"\r\n    ></smart-on-off>\r\n    <span class=\"onoffswitch-title\">Minify Navigation</span>\r\n    <span class=\"onoffswitch-title-desc\">Skew nav to maximize space</span>\r\n  </div>\r\n\r\n  <div class=\"list\" id=\"nfh\">\r\n    <smart-on-off\r\n      [checked]=\"vm.hideNavigation\"\r\n      (checkedChange)=\"toggleHideNavigation($event)\"\r\n    ></smart-on-off>\r\n\r\n    <span class=\"onoffswitch-title\">Hide Navigation</span>\r\n    <span class=\"onoffswitch-title-desc\">roll mouse on edge to reveal</span>\r\n  </div>\r\n\r\n  <div class=\"list\" id=\"nft\">\r\n    <smart-on-off\r\n      [checked]=\"vm.topNavigation\"\r\n      (checkedChange)=\"toggleTopNavigation($event)\"\r\n    ></smart-on-off>\r\n\r\n    <span class=\"onoffswitch-title\">Top Navigation</span>\r\n    <span class=\"onoffswitch-title-desc\">Relocate left pane to top</span>\r\n  </div>\r\n\r\n  <div class=\"list\" id=\"mmb\">\r\n    <smart-on-off\r\n      [checked]=\"vm.boxedLayout\"\r\n      (checkedChange)=\"toggleBoxedLayout($event)\"\r\n    ></smart-on-off>\r\n    <span class=\"onoffswitch-title\">Boxed Layout</span>\r\n    <span class=\"onoffswitch-title-desc\">Encapsulates to a container</span>\r\n  </div>\r\n\r\n  <!-- <div class=\"expanded\">\r\n\t\t<ul class=\"\">\r\n\t\t\t<li><div class=\"bg-fusion-50\" data-action=\"toggle\" data-class=\"mod-bg-1\"></div></li>\r\n\t\t\t<li><div class=\"bg-warning-200\" data-action=\"toggle\" data-class=\"mod-bg-2\"></div></li>\r\n\t\t\t<li><div class=\"bg-primary-200\" data-action=\"toggle\" data-class=\"mod-bg-3\"></div></li>\r\n\t\t\t<li><div class=\"bg-success-300\" data-action=\"toggle\" data-class=\"mod-bg-4\"></div></li>\r\n\t\t</ul>\r\n\t\t<div class=\"list\" id=\"mbgf\">\r\n\t\t\t<a href=\"#\" onclick=\"return false;\" class=\"btn btn-switch\" data-action=\"toggle\" data-class=\"mod-fixed-bg\"></a>\r\n\t\t\t<span class=\"onoffswitch-title\">Fixed Background</span>\r\n\t\t</div>\r\n\t</div> -->\r\n\r\n  <div class=\"mt-4 d-table w-100 px-5\">\r\n    <div class=\"d-table-cell align-middle\">\r\n      <h5 class=\"p-0\">\r\n        Mobile Menu\r\n      </h5>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"list\" id=\"nmp\">\r\n    <smart-on-off\r\n      [checked]=\"vm.pushContent\"\r\n      (checkedChange)=\"togglePushContent($event)\"\r\n    ></smart-on-off>\r\n    <span class=\"onoffswitch-title\">Push Content</span>\r\n    <span class=\"onoffswitch-title-desc\">Content pushed on menu reveal</span>\r\n  </div>\r\n\r\n  <div class=\"list\" id=\"nmno\">\r\n    <smart-on-off\r\n      [checked]=\"vm.noOverlay\"\r\n      (checkedChange)=\"toggleNoOverlay($event)\"\r\n    ></smart-on-off>\r\n    <span class=\"onoffswitch-title\">No Overlay</span>\r\n    <span class=\"onoffswitch-title-desc\">Removes mesh on menu reveal</span>\r\n  </div>\r\n\r\n  <div class=\"list\" id=\"sldo\">\r\n    <smart-on-off\r\n      [checked]=\"vm.offCanvas\"\r\n      (checkedChange)=\"toggleOffCanvas($event)\"\r\n    ></smart-on-off>\r\n    <span class=\"onoffswitch-title\">Off-Canvas <sup>(beta)</sup></span>\r\n    <span class=\"onoffswitch-title-desc\">Content overlaps menu</span>\r\n  </div>\r\n\r\n  <div class=\"mt-4 d-table w-100 px-5\">\r\n    <div class=\"d-table-cell align-middle\">\r\n      <h5 class=\"p-0\">\r\n        Accessibility\r\n      </h5>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"list\" id=\"mbf\">\r\n    <smart-on-off\r\n      [checked]=\"vm.biggerContentFont\"\r\n      (checkedChange)=\"toggleBiggerContentFont($event)\"\r\n    ></smart-on-off>\r\n    <span class=\"onoffswitch-title\">Bigger Content Font</span>\r\n    <span class=\"onoffswitch-title-desc\"\r\n      >content fonts are bigger for readability</span\r\n    >\r\n  </div>\r\n  <div class=\"list\" id=\"mhc\">\r\n    <smart-on-off\r\n      [checked]=\"vm.highContrastText\"\r\n      (checkedChange)=\"toggleHighContrastText($event)\"\r\n    ></smart-on-off>\r\n    <span class=\"onoffswitch-title\">High Contrast Text (WCAG 2 AA)</span>\r\n    <span class=\"onoffswitch-title-desc\">4.5:1 text contrast ratio</span>\r\n  </div>\r\n  <div class=\"list\" id=\"mcb\">\r\n    <smart-on-off\r\n      [checked]=\"vm.daltonism\"\r\n      (checkedChange)=\"toggleDaltonism($event)\"\r\n    ></smart-on-off>\r\n    <span class=\"onoffswitch-title\">Daltonism <sup>(beta)</sup> </span>\r\n    <span class=\"onoffswitch-title-desc\">color vision deficiency</span>\r\n  </div>\r\n  <div class=\"list\" id=\"mpc\">\r\n    <smart-on-off\r\n      [checked]=\"vm.preloaderInside\"\r\n      (checkedChange)=\"togglePreloaderInsise($event)\"\r\n    ></smart-on-off>\r\n    <span class=\"onoffswitch-title\">Preloader Inside</span>\r\n    <span class=\"onoffswitch-title-desc\">preloader will be inside content</span>\r\n  </div>\r\n\r\n  <div class=\"mt-4 d-table w-100 px-5\">\r\n    <div class=\"d-table-cell align-middle\">\r\n      <h5 class=\"p-0\">\r\n        Global Modifications\r\n      </h5>\r\n    </div>\r\n  </div>\r\n  <div class=\"list\" id=\"mcbg\">\r\n    <smart-on-off\r\n      [checked]=\"vm.cleanPageBackground\"\r\n      (checkedChange)=\"toggleCleanPageBackground($event)\"\r\n    ></smart-on-off>\r\n    <span class=\"onoffswitch-title\">Clean Page Background</span>\r\n    <span class=\"onoffswitch-title-desc\">adds more whitespace</span>\r\n  </div>\r\n  <div class=\"list\" id=\"mhni\">\r\n    <smart-on-off\r\n      [checked]=\"vm.hideNavigationIcons\"\r\n      (checkedChange)=\"toggleHideNavigationIcons($event)\"\r\n    ></smart-on-off>\r\n    <span class=\"onoffswitch-title\">Hide Navigation Icons</span>\r\n    <span class=\"onoffswitch-title-desc\">invisible navigation icons</span>\r\n  </div>\r\n  <div class=\"list\" id=\"dan\">\r\n    <smart-on-off\r\n      [checked]=\"vm.disableCSSAnimation\"\r\n      (checkedChange)=\"toggleDisableCSSAnimation($event)\"\r\n    ></smart-on-off>\r\n    <span class=\"onoffswitch-title\">Disable CSS Animation</span>\r\n    <span class=\"onoffswitch-title-desc\">Disables CSS based animations</span>\r\n  </div>\r\n  <div class=\"list\" id=\"mhic\">\r\n    <smart-on-off\r\n      [checked]=\"vm.hideInfoCard\"\r\n      (checkedChange)=\"toggleHideInfoCard($event)\"\r\n    ></smart-on-off>\r\n    <span class=\"onoffswitch-title\">Hide Info Card</span>\r\n    <span class=\"onoffswitch-title-desc\">Hides info card from left panel</span>\r\n  </div>\r\n  <div class=\"list\" id=\"mlph\">\r\n    <smart-on-off\r\n      [checked]=\"vm.leanSubheader\"\r\n      (checkedChange)=\"toggleLeanSubheader($event)\"\r\n    ></smart-on-off>\r\n    <span class=\"onoffswitch-title\">Lean Subheader</span>\r\n    <span class=\"onoffswitch-title-desc\">distinguished page header</span>\r\n  </div>\r\n  <div class=\"list\" id=\"mnl\">\r\n    <smart-on-off\r\n      [checked]=\"vm.hierarchicalNavigation\"\r\n      (checkedChange)=\"toggleHierarchicalNavigation($event)\"\r\n    ></smart-on-off>\r\n    <span class=\"onoffswitch-title\">Hierarchical Navigation</span>\r\n    <span class=\"onoffswitch-title-desc\">Clear breakdown of nav links</span>\r\n  </div>\r\n\r\n  <div class=\"list mt-3\">\r\n    <span class=\"onoffswitch-title\"\r\n      >Global Font Size <small>(RESETS ON REFRESH)</small>\r\n    </span>\r\n    <div\r\n      class=\"btn-group btn-group-sm btn-group-toggle my-2\"\r\n      data-toggle=\"buttons\"\r\n    >\r\n      <label\r\n        [class.active]=\"vm.globalFontSize === 'sm'\" \r\n        class=\"btn btn-default btn-sm\"\r\n        (click)=\"setGlobalFontSize('sm')\"\r\n      >\r\n        <input type=\"radio\" name=\"changeFrontSize\" /> SM\r\n      </label>\r\n      <label\r\n        [class.active]=\"vm.globalFontSize === 'md'\" \r\n        class=\"btn btn-default btn-sm\"\r\n        (click)=\"setGlobalFontSize('md')\"\r\n      >\r\n        <input type=\"radio\" name=\"changeFrontSize\" /> MD\r\n      </label>\r\n      <label\r\n        [class.active]=\"vm.globalFontSize === 'lg'\" \r\n        class=\"btn btn-default btn-sm\"\r\n        (click)=\"setGlobalFontSize('lg')\"\r\n      >\r\n        <input type=\"radio\" name=\"changeFrontSize\" /> LG\r\n      </label>\r\n      <label\r\n        [class.active]=\"vm.globalFontSize === 'xl'\" \r\n        class=\"btn btn-default btn-sm\"\r\n        (click)=\"setGlobalFontSize('xl')\"\r\n      >\r\n        <input type=\"radio\" name=\"changeFrontSize\" /> XL\r\n      </label>\r\n    </div>\r\n\r\n\r\n    <span class=\"onoffswitch-title-desc d-block mb-g\"\r\n      >Change <strong>root</strong> font size to effect rem values</span\r\n    >\r\n  </div>\r\n\r\n  <hr class=\"m-0\">\r\n\t<div class=\"p-3 d-flex align-items-center justify-content-center bg-faded\">\r\n\t\t\r\n\t\t<button class=\"btn btn-outline-danger fw-500 mr-2\" (click)=\"appReset($event)\">Reset Settings</button>\r\n\t\t<button class=\"btn btn-danger fw-500\" (click)=\"factoryReset($event)\">Factory Reset</button>\r\n\t</div>\r\n</div>\r\n<span id=\"saving\"></span>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layout/shortcut-modal/shortcut-modal.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layout/shortcut-modal/shortcut-modal.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"modal-content\">\r\n  <div class=\"modal-body\">\r\n    <ul class=\"app-list w-auto h-auto p-0 text-left\">\r\n      <li>\r\n        <a\r\n          routerLink=\"/intel/introduction\"\r\n          (mouseup)=\"closeShortcut($event)\"\r\n          class=\"app-list-item text-white border-0 m-0\"\r\n        >\r\n          <div class=\"icon-stack\">\r\n            <i\r\n              class=\"base base-7 icon-stack-3x opacity-100 color-primary-500 \"\r\n            ></i>\r\n            <i\r\n              class=\"base base-7 icon-stack-2x opacity-100 color-primary-300 \"\r\n            ></i>\r\n            <i class=\"fal fa-home icon-stack-1x opacity-100 color-white\"></i>\r\n          </div>\r\n          <span class=\"app-list-name\">\r\n            Home\r\n          </span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a \r\n        routerLink=\"/inbox\"\r\n        (mouseup)=\"closeShortcut($event)\"\r\n        class=\"app-list-item text-white border-0 m-0\">\r\n          <div class=\"icon-stack\">\r\n            <i\r\n              class=\"base base-7 icon-stack-3x opacity-100 color-success-500 \"\r\n            ></i>\r\n            <i\r\n              class=\"base base-7 icon-stack-2x opacity-100 color-success-300 \"\r\n            ></i>\r\n            <i class=\"ni ni-envelope icon-stack-1x text-white\"></i>\r\n          </div>\r\n          <span class=\"app-list-name\">\r\n            Inbox\r\n          </span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a\r\n        routerLink=\"/intel/introduction\"\r\n        (mouseup)=\"closeShortcut($event)\"\r\n          class=\"app-list-item text-white border-0 m-0\"\r\n        >\r\n          <div class=\"icon-stack\">\r\n            <i\r\n              class=\"base base-7 icon-stack-2x opacity-100 color-primary-300 \"\r\n            ></i>\r\n            <i class=\"fal fa-plus icon-stack-1x opacity-100 color-white\"></i>\r\n          </div>\r\n          <span class=\"app-list-name\">\r\n            Add More\r\n          </span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layout/sidebar/sidebar.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layout/sidebar/sidebar.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside *ngIf=\"vm$ | async as vm\" class=\"page-sidebar\" [class.list-filter-active]=\"vm.active\">\r\n  <smart-logo></smart-logo>\r\n\r\n  <smart-navigation  class=\"d-flex flex-column flex-fill \"></smart-navigation>\r\n</aside>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/navigation/nav-filter-msg/nav-filter-msg.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/navigation/nav-filter-msg/nav-filter-msg.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"vm$ | async as vm\">\r\n  <div\r\n    *ngIf=\"vm.active\"\r\n    class=\"filter-message js-filter-message bg-success-600\"\r\n  >\r\n    showing {{ vm.matched }} from {{ vm.total }} total\r\n  </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/navigation/nav-filter/nav-filter.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/navigation/nav-filter/nav-filter.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-filter\" *ngIf=\"vm$ | async as vm\">\r\n  <div class=\"position-relative\">\r\n    <input\r\n      type=\"text\"\r\n      id=\"nav_filter_input\"\r\n      placeholder=\"Filter menu\"\r\n      class=\"form-control\"\r\n      #input\r\n      (keyup)=\"handleKeyup($event, input.value)\"\r\n      value=\"{{vm.text}}\"\r\n      tabindex=\"0\"\r\n    />\r\n    <a\r\n      href=\"#\"\r\n      class=\"btn-primary btn-search-close js-waves-off\"\r\n      data-class=\"list-filter-active\"\r\n      (click)=\"toggleFilter($event)\"\r\n    >\r\n      <i class=\"fal fa-chevron-up\"></i>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/navigation/nav-footer/nav-footer.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/navigation/nav-footer/nav-footer.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"nav-footer shadow-top\">\r\n  <a\r\n    href=\"#\"\r\n    (click)=\"toggleMinifyNavigation($event)\"\r\n    data-class=\"nav-function-minify\"\r\n    class=\"hidden-md-down\"\r\n  >\r\n    <i class=\"ni ni-chevron-right\"></i>\r\n    <i class=\"ni ni-chevron-right\"></i>\r\n  </a>\r\n  <ul class=\"list-table m-auto nav-footer-buttons\">\r\n    <li>\r\n      <a smartStubClick href=\"#\" container=\"body\" tooltip=\"Chat logs\">\r\n        <i class=\"fal fa-comments\"></i>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a smartStubClick href=\"#\" container=\"body\" tooltip=\"Support Chat\">\r\n        <i class=\"fal fa-life-ring\"></i>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a smartStubClick href=\"#\" container=\"body\" tooltip=\"Make a call\">\r\n        <i class=\"fal fa-phone\"></i>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/navigation/nav-info-card/nav-info-card.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/navigation/nav-info-card/nav-info-card.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-card\">\r\n  <img\r\n    src=\"assets/img/demo/avatars/{{ avatar }}\"\r\n    class=\"profile-image rounded-circle\"\r\n    alt=\"{{ user }}\"\r\n  />\r\n  <div class=\"info-card-text\">\r\n    <a href=\"#\" class=\"d-flex align-items-center text-white\">\r\n      <span class=\"text-truncate text-truncate-sm d-inline-block\">\r\n        {{ user }}\r\n      </span>\r\n    </a>\r\n    <!-- <span class=\"d-inline-block text-truncate text-truncate-sm\"\r\n      >Toronto, Canada</span\r\n    > -->\r\n  </div>\r\n  <img\r\n    src=\"assets/img/card-backgrounds/cover-2-lg.png\"\r\n    class=\"cover\"\r\n    alt=\"cover\"\r\n  />\r\n  <a\r\n    href=\"#\"\r\n\t\t(click)=\"toggleFilter($event)\"\r\n    class=\"pull-trigger-btn\"\r\n    data-class=\"list-filter-active\"\r\n  >\r\n    <i class=\"fal fa-angle-down\"></i>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/navigation/nav-item/nav-item.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/navigation/nav-item/nav-item.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"item.items\">\r\n  <a (click)=\"toggleSection($event)\" title=\"{{ item.title }}\" href=\"#\">\r\n    <i *ngIf=\"item.icon\" class=\"{{ item.icon }}\"></i>\r\n    <span class=\"nav-link-text\">{{ item.title }}</span>\r\n    <span *ngIf=\"item.badge\" class=\"{{item.badge.class}}\">{{item.badge.label}}</span>\r\n    <b class=\"collapse-sign\"\r\n      ><em\r\n        class=\"{{ item.open ? 'fal fa-angle-up' : 'fal fa-angle-down' }}\"\r\n      ></em\r\n    ></b>\r\n  </a>\r\n  <ul\r\n    *ngIf=\"item.open || minified || item.matched !== null\"\r\n    class=\"d-block ov-h\"\r\n    [@slideInOut]\r\n  >\r\n    <li\r\n      smart-nav-item\r\n      *ngFor=\"let child of item.items; trackBy: trackByFn\"\r\n      [item]=\"child\"\r\n      [minified]=\"minified\"\r\n    ></li>\r\n  </ul>\r\n</ng-container>\r\n<ng-container *ngIf=\"!item.items && item.routerLink\">\r\n  <a routerLink=\"{{ item.routerLink }}\" title=\"{{ item.title }}\">\r\n    <span class=\"nav-link-text\">{{ item.title }}</span>\r\n    <span *ngIf=\"item.badge\" class=\"{{item.badge.class}}\">{{item.badge.label}}</span>\r\n  </a>\r\n</ng-container>\r\n<ng-container *ngIf=\"item.navTitle\">\r\n  {{ item.title }}\r\n</ng-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/navigation/nav/nav.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/navigation/nav/nav.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"js-nav-menu\" class=\"nav-menu\" *ngIf=\"vm$ | async as vm\">\r\n  <li\r\n    smart-nav-item\r\n    *ngFor=\"let item of vm.items; trackBy: trackByFn\"\r\n    [item]=\"item\"\r\n    [minified]=\"vm.minified\"\r\n  ></li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_layout_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/layout/main/main.component */ "./src/app/shared/layout/main/main.component.ts");
/* harmony import */ var _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/layout/layout.module */ "./src/app/shared/layout/layout.module.ts");





const routes = [
    {
        path: '',
        component: _shared_layout_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        children: [
            { path: '', redirectTo: 'settings', pathMatch: 'full' },
            { path: 'intel', loadChildren: () => Promise.all(/*! import() | features-about-about-module */[__webpack_require__.e("default~features-about-about-module~features-article-article-module~features-customer-customer-modul~ebf54026"), __webpack_require__.e("features-about-about-module")]).then(__webpack_require__.bind(null, /*! ./features/about/about.module */ "./src/app/features/about/about.module.ts")).then(m => m.AboutModule) },
            { path: 'settings', loadChildren: () => Promise.all(/*! import() | features-settings-settings-module */[__webpack_require__.e("default~features-about-about-module~features-article-article-module~features-customer-customer-modul~ebf54026"), __webpack_require__.e("default~features-customer-customer-module~features-settings-settings-module"), __webpack_require__.e("common"), __webpack_require__.e("features-settings-settings-module")]).then(__webpack_require__.bind(null, /*! ./features/settings/settings.module */ "./src/app/features/settings/settings.module.ts")).then(m => m.SettingsModule) },
            { path: 'merchandise', loadChildren: () => Promise.all(/*! import() | features-merchandise-merchandise-module */[__webpack_require__.e("default~features-about-about-module~features-article-article-module~features-customer-customer-modul~ebf54026"), __webpack_require__.e("default~features-article-article-module~features-merchandise-merchandise-module"), __webpack_require__.e("common"), __webpack_require__.e("features-merchandise-merchandise-module")]).then(__webpack_require__.bind(null, /*! ./features/merchandise/merchandise.module */ "./src/app/features/merchandise/merchandise.module.ts")).then(m => m.MerchandiseModule) },
            { path: 'purchaseorder', loadChildren: () => Promise.all(/*! import() | features-purchaseorder-purchaseorder-module */[__webpack_require__.e("default~features-about-about-module~features-article-article-module~features-customer-customer-modul~ebf54026"), __webpack_require__.e("common"), __webpack_require__.e("features-purchaseorder-purchaseorder-module")]).then(__webpack_require__.bind(null, /*! ./features/purchaseorder/purchaseorder.module */ "./src/app/features/purchaseorder/purchaseorder.module.ts")).then(m => m.PurchaseorderModule) },
            { path: 'warehouse', loadChildren: () => Promise.all(/*! import() | features-warehouse-warehouse-module */[__webpack_require__.e("default~features-about-about-module~features-article-article-module~features-customer-customer-modul~ebf54026"), __webpack_require__.e("features-warehouse-warehouse-module")]).then(__webpack_require__.bind(null, /*! ./features/warehouse/warehouse.module */ "./src/app/features/warehouse/warehouse.module.ts")).then(m => m.WarehouseModule) },
            { path: 'customer', loadChildren: () => Promise.all(/*! import() | features-customer-customer-module */[__webpack_require__.e("default~features-about-about-module~features-article-article-module~features-customer-customer-modul~ebf54026"), __webpack_require__.e("default~features-customer-customer-module~features-settings-settings-module"), __webpack_require__.e("default~features-customer-customer-module~features-productionorder-productionorder-module"), __webpack_require__.e("features-customer-customer-module")]).then(__webpack_require__.bind(null, /*! ./features/customer/customer.module */ "./src/app/features/customer/customer.module.ts")).then(m => m.CustomerModule) },
            { path: 'article', loadChildren: () => Promise.all(/*! import() | features-article-article-module */[__webpack_require__.e("default~features-about-about-module~features-article-article-module~features-customer-customer-modul~ebf54026"), __webpack_require__.e("default~features-article-article-module~features-merchandise-merchandise-module"), __webpack_require__.e("common"), __webpack_require__.e("features-article-article-module")]).then(__webpack_require__.bind(null, /*! ./features/article/article.module */ "./src/app/features/article/article.module.ts")).then(m => m.ArticleModule) },
            { path: 'fit', loadChildren: () => Promise.all(/*! import() | features-fit-fit-module */[__webpack_require__.e("default~features-about-about-module~features-article-article-module~features-customer-customer-modul~ebf54026"), __webpack_require__.e("common"), __webpack_require__.e("features-fit-fit-module")]).then(__webpack_require__.bind(null, /*! ./features/fit/fit.module */ "./src/app/features/fit/fit.module.ts")).then(m => m.FitModule) },
            { path: 'lab', loadChildren: () => Promise.all(/*! import() | features-lab-lab-module */[__webpack_require__.e("default~features-about-about-module~features-article-article-module~features-customer-customer-modul~ebf54026"), __webpack_require__.e("common"), __webpack_require__.e("features-lab-lab-module")]).then(__webpack_require__.bind(null, /*! ./features/lab/lab.module */ "./src/app/features/lab/lab.module.ts")).then(m => m.LabModule) },
            { path: 'productionorder', loadChildren: () => Promise.all(/*! import() | features-productionorder-productionorder-module */[__webpack_require__.e("default~features-about-about-module~features-article-article-module~features-customer-customer-modul~ebf54026"), __webpack_require__.e("default~features-customer-customer-module~features-productionorder-productionorder-module"), __webpack_require__.e("common"), __webpack_require__.e("features-productionorder-productionorder-module")]).then(__webpack_require__.bind(null, /*! ./features/productionorder/productionorder.module */ "./src/app/features/productionorder/productionorder.module.ts")).then(m => m.ProductionorderModule) },
        ]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'smartadmin-angular-seed';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-root',
        template: '<router-outlet></router-outlet>'
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: APP_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function() { return APP_CONFIG; });
const APP_CONFIG = {
    app: 'SmartAdmin',
    appName: 'SmartAdmin WebApp',
    user: 'Dr. Codex Lantern',
    email: 'drlantern@gotbootstrap.com',
    twitter: 'codexlantern',
    avatar: 'avatar-admin.png',
    version: '4.0.0',
    bs4v: '4.3',
    logo: 'logo.png',
    logoM: 'logo.png',
    // tslint:disable-next-line:max-line-length
    copyright: '2019 © SmartAdmin by&nbsp;<a href="https://www.gotbootstrap.com" class="text-primary fw-500" title="gotbootstrap.com" target="_blank">gotbootstrap.com</a>',
    BASE_URL: 'http://127.0.0.1:8000/api'
    // tslint:disable-next-line:max-line-length
    // copyrightInverse: '2019 © SmartAdmin by&nbsp;<a href="https://www.gotbootstrap.com" class="text-white opacity-40 fw-500" title="gotbootstrap.com" target="_blank">gotbootstrap.com</a>'
};


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.navigation.ts":
/*!***********************************!*\
  !*** ./src/app/app.navigation.ts ***!
  \***********************************/
/*! exports provided: NavigationItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationItems", function() { return NavigationItems; });
const NavigationItems = [
    {
        title: 'ERP Master Data',
        tags: 'Settings',
        icon: 'fal fa-list',
        items: [
            {
                title: 'Company Info',
                tags: 'Company Infor',
                routerLink: '/settings/companys'
            },
            {
                title: 'Countries',
                tags: 'Countries',
                routerLink: '/settings/countries'
            },
            {
                title: 'Currencies',
                tags: ' Currencies ',
                routerLink: '/settings/currencies'
            },
            {
                title: 'Regions',
                tags: 'Regions ',
                routerLink: '/settings/regions'
            },
            {
                title: 'Factory Code',
                tags: 'Factory Code ',
                routerLink: '/settings/factorycodes'
            },
            {
                title: 'Payment Terms',
                tags: 'Payment Terms ',
                routerLink: '/settings/paymentterms'
            },
            {
                title: 'Departments',
                tags: 'Departments ',
                routerLink: '/settings/departments'
            },
            {
                title: 'Vendors Groups',
                tags: 'Vendor Groups ',
                routerLink: '/settings/vendorgroups'
            },
            {
                title: 'Vendors',
                tags: 'Vendors ',
                routerLink: '/settings/vendors'
            },
        ]
    },
    {
        title: 'Materials',
        tags: 'Materials',
        icon: 'fal fa-flask',
        items: [
            {
                title: 'Materials',
                tags: 'Materials',
                routerLink: '/merchandise/main'
            },
            {
                title: 'UOM',
                tags: 'Unit of Measurement ',
                routerLink: '/settings/uoms'
            },
        ]
    },
    {
        title: 'Warehouse',
        tags: 'Warehouse',
        icon: 'fal fa-warehouse',
        items: [
            {
                title: 'Warehouse',
                tags: 'Warehouse',
                routerLink: '/warehouse/warehouses'
            },
            {
                title: 'Section',
                tags: 'Section',
                routerLink: '/warehouse/sections'
            },
            {
                title: 'Lines',
                tags: 'Lines',
                routerLink: '/warehouse/lines'
            },
            {
                title: 'Racks',
                tags: 'Racks',
                routerLink: '/warehouse/racks'
            },
        ]
    },
    {
        title: 'Customers',
        tags: 'Customers',
        icon: 'fal fa-users',
        items: [
            {
                title: 'Clients',
                tags: 'Client',
                routerLink: '/customer/clients'
            },
            {
                title: 'Customers',
                tags: 'Customers',
                routerLink: '/customer/customers'
            }, {
                title: 'Customer Account Group',
                tags: 'Customers',
                routerLink: '/customer/customeraccgroups'
            },
            {
                title: 'Customers Account Data',
                tags: 'Customers Account Data',
                routerLink: '/customer/customeraccdatas'
            },
            {
                title: 'Forwarder',
                tags: 'Forwarder',
                routerLink: '/customer/forwarders'
            },
            {
                title: 'Customer Export Data',
                tags: 'Customer Export Data',
                routerLink: '/customer/customerexportdatas'
            },
            {
                title: 'Customer Labelling Data',
                tags: 'Customer Labelling Data',
                routerLink: '/customer/customerlabelingdatas'
            }
        ]
    },
    {
        title: 'Purchase Order',
        tags: 'Purchase Order',
        icon: 'fal fa-tags',
        items: [
            {
                title: 'Tax',
                tags: 'Tax',
                routerLink: '/purchaseorder/taxes'
            },
            {
                title: 'PO Other Charges',
                tags: 'PO Other Charges',
                routerLink: '/purchaseorder/poothercharges'
            },
            {
                title: 'Transport Mode',
                tags: 'Transport Mode',
                routerLink: '/purchaseorder/transportmodes'
            },
            {
                title: 'Quotations',
                tags: 'Quotations',
                routerLink: '/purchaseorder/quotations'
            },
            {
                title: 'Purchase Orders',
                tags: 'Purchase Orders',
                routerLink: '/purchaseorder/purchaseorders'
            },
        ]
    },
    {
        title: 'Article',
        tags: 'Article',
        icon: 'fal fa-futbol',
        items: [
            {
                title: 'Categories',
                tags: 'Categories',
                routerLink: '/article/articlecatagorys'
            },
            {
                title: 'Ranges',
                tags: 'Ranges',
                routerLink: '/article/ranges'
            },
            {
                title: 'Seasons',
                tags: 'Seasons',
                routerLink: '/article/seasons'
            },
            {
                title: 'Cartons',
                tags: 'Cartons',
                routerLink: '/article/cartons'
            },
            {
                title: 'Article  Library',
                tags: 'Article Library',
                routerLink: '/article/article-library'
            },
            {
                title: 'Article ME',
                tags: 'Article ME',
                routerLink: '/article/articlemes'
            },
            {
                title: 'Article Size Rates',
                tags: 'Article Size Rates',
                routerLink: '/article/articlerates'
            },
            {
                title: 'Article QC Attributes',
                tags: 'Article QC Attributes',
                routerLink: '/article/articleqcas'
            },
        ]
    },
    {
        title: 'PO Upload',
        tags: 'PO Upload',
        icon: 'fal fa-upload',
        items: [
            {
                title: 'PO Head',
                tags: 'PO Head',
                routerLink: '/productionorder/poheads'
            }
        ]
    },
    {
        title: 'FIT',
        tags: 'FIT',
        icon: 'fal fa-flask',
        items: [
            {
                title: 'Materials',
                tags: 'Materials',
                routerLink: '/merchandise/materials'
            },
            {
                title: 'Test Types',
                tags: 'Test',
                routerLink: '/fit/test'
            },
            {
                title: 'Project',
                tags: 'Project',
                routerLink: '/fit/projects'
            },
        ]
    },
    {
        title: 'Lab',
        tags: 'Lab',
        icon: 'fal fa-vial',
        items: [
            {
                title: 'Lab Ball',
                tags: 'Lab Ball',
                routerLink: '/lab/labballs'
            },
        ]
    },
];


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule, throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm2015/router-store.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm2015/ngx-bootstrap-buttons.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../store */ "./src/app/store/index.ts");
/* harmony import */ var _store_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../store/router */ "./src/app/store/router/index.ts");
/* harmony import */ var _shared_dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/dialogs/dialogs.module */ "./src/app/shared/dialogs/dialogs.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm2015/ngx-bootstrap-popover.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
























/**
 * Module for global imports
 */
let CoreModule = class CoreModule {
    // thi module can be load only once
    constructor(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
};
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            // ngrx modules
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_16__["reducers"], {
                metaReducers: _store__WEBPACK_IMPORTED_MODULE_16__["metaReducers"],
                runtimeChecks: {
                    strictStateImmutability: false,
                    strictActionImmutability: false,
                    strictStateSerializability: false,
                    strictActionSerializability: false,
                },
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([..._store__WEBPACK_IMPORTED_MODULE_16__["effects"]]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({
                maxAge: 25, logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].production,
                actionsBlocklist: ['@ngrx/router*'],
            }),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["StoreRouterConnectingModule"].forRoot(),
            // import ngx-bootstrap services here
            ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"].forRoot(),
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_9__["AlertModule"].forRoot(),
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_11__["ButtonsModule"].forRoot(),
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_12__["CollapseModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_20__["TabsModule"].forRoot(),
            ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_21__["PopoverModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_22__["PaginationModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__["NgSelectModule"],
            _shared_dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_18__["DialogsModule"],
        ],
        providers: [
            // use custom serializer to strip redundant router data
            { provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["RouterStateSerializer"], useClass: _store_router__WEBPACK_IMPORTED_MODULE_17__["CustomSerializer"] },
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["BsModalService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["BsModalRef"]
        ],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
], CoreModule);

function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import ${moduleName} modules in the AppModule only.`);
    }
}


/***/ }),

/***/ "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let ConfirmDialogComponent = class ConfirmDialogComponent {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    confirm($event) {
        this.onClose.next(true);
        this.onClose.complete();
        this.bsModalRef.hide();
    }
    cancel($event) {
        this.onClose.next(false);
        this.onClose.complete();
        this.bsModalRef.hide();
    }
};
ConfirmDialogComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] }
];
ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-confirm-dialog',
        template: `
    <div class="modal-header">
      <div class="modal-title" [innerHTML]="title">
      </div>
    </div>
    <div class="modal-body" [innerHTML]="message"></div>
    <div class="modal-footer" *ngIf="buttons">
      <button (click)="confirm($event)" type="button" class="btn bootbox-accept {{buttons.confirm.className}}">
      {{buttons.confirm.label}}</button>
      <button (click)="cancel($event)" type="button" class="btn bootbox-cancel {{buttons.cancel.className}}">
      {{buttons.cancel.label}}</button>
    </div>
  `,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]])
], ConfirmDialogComponent);



/***/ }),

/***/ "./src/app/shared/dialogs/dialogs.module.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/dialogs/dialogs.module.ts ***!
  \**************************************************/
/*! exports provided: DialogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsModule", function() { return DialogsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _dialogs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialogs.service */ "./src/app/shared/dialogs/dialogs.service.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/shared/dialogs/modal/modal.component.ts");







let DialogsModule = class DialogsModule {
};
DialogsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"]],
        entryComponents: [_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"],
        ],
        providers: [_dialogs_service__WEBPACK_IMPORTED_MODULE_5__["DialogsService"]],
        exports: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"]],
    })
], DialogsModule);



/***/ }),

/***/ "./src/app/shared/dialogs/dialogs.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/dialogs/dialogs.service.ts ***!
  \***************************************************/
/*! exports provided: DialogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsService", function() { return DialogsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");




let DialogsService = class DialogsService {
    constructor(rendererFactory, modalService) {
        this.modalService = modalService;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    confirm(initialState) {
        this.playSound('messagebox');
        this.bsModalRef = this.modalService.show(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
            initialState,
            backdrop: 'static',
            keyboard: false,
            class: 'modal-dialog-centered'
        });
        this.renderer.addClass(document.querySelector('.modal'), 'modal-alert');
        return this.bsModalRef.content.onClose;
    }
    playSound(sound, path = 'assets/media/sound') {
        const audioElement = document.createElement('audio');
        if (navigator.userAgent.match('Firefox/')) {
            audioElement.setAttribute('src', path + '/' + sound + '.ogg');
        }
        else {
            audioElement.setAttribute('src', path + '/' + sound + '.mp3');
        }
        audioElement.addEventListener('load', () => {
            audioElement.play();
        }, true);
        audioElement.pause();
        audioElement.play();
    }
};
DialogsService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] }
];
DialogsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
], DialogsService);



/***/ }),

/***/ "./src/app/shared/dialogs/modal/modal.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/dialogs/modal/modal.component.ts ***!
  \*********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");



let ModalComponent = class ModalComponent {
    constructor(modalRef) {
        this.modalRef = modalRef;
    }
    ngOnInit() { }
};
ModalComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ModalComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ModalComponent.prototype, "description", void 0);
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-modal',
        template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/dialogs/modal/modal.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]])
], ModalComponent);



/***/ }),

/***/ "./src/app/shared/layout/auth/auth.component.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/layout/auth/auth.component.ts ***!
  \******************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthComponent = class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-auth',
        template: __webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layout/auth/auth.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AuthComponent);



/***/ }),

/***/ "./src/app/shared/layout/dropdown-apps/dropdown-apps.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/layout/dropdown-apps/dropdown-apps.component.ts ***!
  \************************************************************************/
/*! exports provided: DropdownAppsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownAppsComponent", function() { return DropdownAppsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DropdownAppsComponent = class DropdownAppsComponent {
    constructor() { }
    ngOnInit() {
    }
};
DropdownAppsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-dropdown-apps',
        template: __webpack_require__(/*! raw-loader!./dropdown-apps.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layout/dropdown-apps/dropdown-apps.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DropdownAppsComponent);



/***/ }),

/***/ "./src/app/shared/layout/dropdown-user/dropdown-user.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/layout/dropdown-user/dropdown-user.component.ts ***!
  \************************************************************************/
/*! exports provided: DropdownUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownUserComponent", function() { return DropdownUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DropdownUserComponent = class DropdownUserComponent {
    constructor() {
        this.user = {
            app: 'SmartAdmin',
            name: 'Dr. Codex Lantern',
            email: 'drlantern@gotbootstrap.com',
            avatar: 'avatar-admin.png',
        };
    }
};
DropdownUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-dropdown-user',
        template: __webpack_require__(/*! raw-loader!./dropdown-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layout/dropdown-user/dropdown-user.component.html"),
    })
], DropdownUserComponent);



/***/ }),

/***/ "./src/app/shared/layout/fab-shortcut/fab-shortcut.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/layout/fab-shortcut/fab-shortcut.component.ts ***!
  \**********************************************************************/
/*! exports provided: FabShortcutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabShortcutComponent", function() { return FabShortcutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils.functions */ "./src/app/shared/utils/utils.functions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_store_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/router */ "./src/app/store/router/index.ts");





let FabShortcutComponent = class FabShortcutComponent {
    constructor(store) {
        this.store = store;
    }
    scrollTop($event) {
        $event.preventDefault();
        Object(_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["scrollToTop"])(150);
    }
    logout($event) {
        $event.preventDefault();
        this.store.dispatch(new src_app_store_router__WEBPACK_IMPORTED_MODULE_4__["Go"]({ path: ['/logout'] }));
    }
    fullScreen($event) {
        $event.preventDefault();
        Object(_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["toggleFullscreen"])();
    }
    printPage($event) {
        $event.preventDefault();
        window.print();
    }
};
FabShortcutComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
FabShortcutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-fab-shortcut',
        template: __webpack_require__(/*! raw-loader!./fab-shortcut.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layout/fab-shortcut/fab-shortcut.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
], FabShortcutComponent);



/***/ }),

/***/ "./src/app/shared/layout/layout.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/layout/layout.module.ts ***!
  \************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm2015/ngx-bootstrap-buttons.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/shared/layout/main/main.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/shared/layout/auth/auth.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/shared/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logo/logo.component */ "./src/app/shared/layout/logo/logo.component.ts");
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-header/page-header.component */ "./src/app/shared/layout/page-header/page-header.component.ts");
/* harmony import */ var _page_breadcrumb_page_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-breadcrumb/page-breadcrumb.component */ "./src/app/shared/layout/page-breadcrumb/page-breadcrumb.component.ts");
/* harmony import */ var _page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page-heading/page-heading.component */ "./src/app/shared/layout/page-heading/page-heading.component.ts");
/* harmony import */ var _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-footer/page-footer.component */ "./src/app/shared/layout/page-footer/page-footer.component.ts");
/* harmony import */ var _dropdown_apps_dropdown_apps_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dropdown-apps/dropdown-apps.component */ "./src/app/shared/layout/dropdown-apps/dropdown-apps.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/shared/layout/settings/settings.component.ts");
/* harmony import */ var _settings_modal_settings_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./settings-modal/settings-modal.component */ "./src/app/shared/layout/settings-modal/settings-modal.component.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ui/ui.module */ "./src/app/shared/ui/ui.module.ts");
/* harmony import */ var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../navigation/navigation.module */ "./src/app/shared/navigation/navigation.module.ts");
/* harmony import */ var _settings_shortcut_settings_shortcut_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./settings-shortcut/settings-shortcut.component */ "./src/app/shared/layout/settings-shortcut/settings-shortcut.component.ts");
/* harmony import */ var _shortcut_modal_shortcut_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shortcut-modal/shortcut-modal.component */ "./src/app/shared/layout/shortcut-modal/shortcut-modal.component.ts");
/* harmony import */ var _fab_shortcut_fab_shortcut_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./fab-shortcut/fab-shortcut.component */ "./src/app/shared/layout/fab-shortcut/fab-shortcut.component.ts");
/* harmony import */ var _dropdown_user_dropdown_user_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dropdown-user/dropdown-user.component */ "./src/app/shared/layout/dropdown-user/dropdown-user.component.ts");
























let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
            _logo_logo_component__WEBPACK_IMPORTED_MODULE_10__["LogoComponent"],
            _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_11__["PageHeaderComponent"], _page_breadcrumb_page_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__["PageBreadcrumbComponent"], _page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_13__["PageHeadingComponent"],
            _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_14__["PageFooterComponent"], _dropdown_apps_dropdown_apps_component__WEBPACK_IMPORTED_MODULE_15__["DropdownAppsComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_16__["SettingsComponent"],
            _settings_modal_settings_modal_component__WEBPACK_IMPORTED_MODULE_17__["SettingsModalComponent"],
            _settings_shortcut_settings_shortcut_component__WEBPACK_IMPORTED_MODULE_20__["SettingsShortcutComponent"],
            _shortcut_modal_shortcut_modal_component__WEBPACK_IMPORTED_MODULE_21__["ShortcutModalComponent"],
            _fab_shortcut_fab_shortcut_component__WEBPACK_IMPORTED_MODULE_22__["FabShortcutComponent"],
            _dropdown_user_dropdown_user_component__WEBPACK_IMPORTED_MODULE_23__["DropdownUserComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"],
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"],
            _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_19__["NavigationModule"],
            _ui_ui_module__WEBPACK_IMPORTED_MODULE_18__["UiModule"]
        ],
        exports: [_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"], _page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_13__["PageHeadingComponent"]],
        entryComponents: [_shortcut_modal_shortcut_modal_component__WEBPACK_IMPORTED_MODULE_21__["ShortcutModalComponent"]]
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/shared/layout/logo/logo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/layout/logo/logo.component.ts ***!
  \******************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shortcut_modal_shortcut_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shortcut-modal/shortcut-modal.service */ "./src/app/shared/layout/shortcut-modal/shortcut-modal.service.ts");
/* harmony import */ var src_app_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.config */ "./src/app/app.config.ts");




let LogoComponent = class LogoComponent {
    constructor(shortcut) {
        this.shortcut = shortcut;
        this.logo = src_app_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"].logo;
        this.appName = src_app_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"].appName;
    }
    openShortcut($event) {
        $event.preventDefault();
        this.shortcut.openModal();
    }
};
LogoComponent.ctorParameters = () => [
    { type: _shortcut_modal_shortcut_modal_service__WEBPACK_IMPORTED_MODULE_2__["ShortcutModalService"] }
];
LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-logo',
        template: __webpack_require__(/*! raw-loader!./logo.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layout/logo/logo.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shortcut_modal_shortcut_modal_service__WEBPACK_IMPORTED_MODULE_2__["ShortcutModalService"]])
], LogoComponent);



/***/ }),

/***/ "./src/app/shared/layout/main/main.component.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/layout/main/main.component.ts ***!
  \******************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/navigation */ "./src/app/store/navigation/index.ts");
/* harmony import */ var src_app_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.config */ "./src/app/app.config.ts");





let MainComponent = class MainComponent {
    constructor(store) {
        this.store = store;
        this.app = src_app_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"].app;
    }
    closeMobileNav($event) {
        $event.preventDefault();
        this.store.dispatch(Object(src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__["mobileNavigation"])({ open: false }));
    }
};
MainComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layout/main/main.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], MainComponent);



/***/ }),

/***/ "./src/app/shared/layout/page-breadcrumb/page-breadcrumb.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/layout/page-breadcrumb/page-breadcrumb.component.ts ***!
  \****************************************************************************/
/*! exports provided: PageBreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageBreadcrumbComponent", function() { return PageBreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_store_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/router */ "./src/app/store/router/index.ts");




let PageBreadcrumbComponent = class PageBreadcrumbComponent {
    constructor(store) {
        this.store = store;
        this.date = Date.now();
        this.vm$ = this.store.select(src_app_store_router__WEBPACK_IMPORTED_MODULE_3__["getRouterState"]);
    }
};
PageBreadcrumbComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
PageBreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-page-breadcrumb',
        template: __webpack_require__(/*! raw-loader!./page-breadcrumb.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layout/page-breadcrumb/page-breadcrumb.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], PageBreadcrumbComponent);



/***/ }),

/***/ "./src/app/shared/layout/page-footer/page-footer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/layout/page-footer/page-footer.component.ts ***!
  \********************************************************************/
/*! exports provided: PageFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFooterComponent", function() { return PageFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.config */ "./src/app/app.config.ts");



let PageFooterComponent = class PageFooterComponent {
    constructor() {
        this.copyright = src_app_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].copyright;
    }
    ngOnInit() {
    }
};
PageFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-page-footer',
        template: __webpack_require__(/*! raw-loader!./page-footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layout/page-footer/page-footer.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageFooterComponent);



/***/ }),

/***/ "./src/app/shared/layout/page-header/page-header.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/layout/page-header/page-header.component.ts ***!
  \********************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/navigation */ "./src/app/store/navigation/index.ts");
/* harmony import */ var src_app_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.config */ "./src/app/app.config.ts");





let PageHeaderComponent = class PageHeaderComponent {
    constructor(store) {
        this.store = store;
        this.avatar = src_app_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"].avatar;
        this.email = src_app_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"].email;
        this.user = src_app_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"].user;
    }
    openMobileNav($event) {
        $event.preventDefault();
        this.store.dispatch(Object(src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__["mobileNavigation"])({ open: true }));
    }
};
PageHeaderComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-page-header',
        template: __webpack_require__(/*! raw-loader!./page-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layout/page-header/page-header.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], PageHeaderComponent);



/***/ }),

/***/ "./src/app/shared/layout/page-heading/page-heading.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/layout/page-heading/page-heading.component.ts ***!
  \**********************************************************************/
/*! exports provided: PageHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeadingComponent", function() { return PageHeadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageHeadingComponent = class PageHeadingComponent {
    constructor() {
        this.icon = 'fal fa-info-circle';
        this.title = 'Title of Page';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PageHeadingComponent.prototype, "icon", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PageHeadingComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PageHeadingComponent.prototype, "description", void 0);
PageHeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-page-heading',
        template: __webpack_require__(/*! raw-loader!./page-heading.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layout/page-heading/page-heading.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageHeadingComponent);



/***/ }),

/***/ "./src/app/shared/layout/settings-modal/settings-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/layout/settings-modal/settings-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: SettingsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModalComponent", function() { return SettingsModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(subsink__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _settings_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-modal.service */ "./src/app/shared/layout/settings-modal/settings-modal.service.ts");





let SettingsModalComponent = class SettingsModalComponent {
    constructor(modalService, sms) {
        this.modalService = modalService;
        this.sub = new subsink__WEBPACK_IMPORTED_MODULE_3__["SubSink"]();
        this.sub.sink = sms.openSettings$.subscribe(() => {
            this.showModal();
        });
    }
    openModal($event) {
        $event.preventDefault();
        this.showModal();
    }
    showModal() {
        this.modalRef = this.modalService.show(this.template, {
            class: 'modal-dialog-right modal-md'
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
SettingsModalComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: _settings_modal_service__WEBPACK_IMPORTED_MODULE_4__["SettingsModalService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('template', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SettingsModalComponent.prototype, "template", void 0);
SettingsModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-settings-modal',
        template: __webpack_require__(/*! raw-loader!./settings-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layout/settings-modal/settings-modal.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _settings_modal_service__WEBPACK_IMPORTED_MODULE_4__["SettingsModalService"]])
], SettingsModalComponent);



/***/ }),

/***/ "./src/app/shared/layout/settings-modal/settings-modal.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/layout/settings-modal/settings-modal.service.ts ***!
  \************************************************************************/
/*! exports provided: SettingsModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModalService", function() { return SettingsModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let SettingsModalService = class SettingsModalService {
    constructor() {
        this.openSettings$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    openModal() {
        this.openSettings$.next(true);
    }
};
SettingsModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SettingsModalService);



/***/ }),

/***/ "./src/app/shared/layout/settings-shortcut/settings-shortcut.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/layout/settings-shortcut/settings-shortcut.component.ts ***!
  \********************************************************************************/
/*! exports provided: SettingsShortcutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsShortcutComponent", function() { return SettingsShortcutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/settings */ "./src/app/store/settings/index.ts");




let SettingsShortcutComponent = class SettingsShortcutComponent {
    constructor(store) {
        this.store = store;
    }
    toggleHideNavigation($event) {
        $event.preventDefault();
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleHideNavigation"]());
    }
    toggleMinifyNavigation($event) {
        $event.preventDefault();
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleMinifyNavigation"]());
    }
    toggleFixedNavigation($event) {
        $event.preventDefault();
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleFixedNavigation"]());
    }
};
SettingsShortcutComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
SettingsShortcutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-settings-shortcut',
        template: __webpack_require__(/*! raw-loader!./settings-shortcut.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layout/settings-shortcut/settings-shortcut.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], SettingsShortcutComponent);



/***/ }),

/***/ "./src/app/shared/layout/settings/settings.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/layout/settings/settings.component.ts ***!
  \**************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/settings */ "./src/app/store/settings/index.ts");




let SettingsComponent = class SettingsComponent {
    constructor(store) {
        this.store = store;
        this.vm$ = this.store.select(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["selectSettingsState"]);
    }
    toggleFixedHedaer($event) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleFixedHeader"]());
    }
    toggleFixedNavigation($event) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleFixedNavigation"]());
    }
    toggleMinifyNavigation($event) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleMinifyNavigation"]());
    }
    toggleHideNavigation($event) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleHideNavigation"]());
    }
    toggleTopNavigation($event) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleTopNavigation"]());
    }
    toggleBoxedLayout($event) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleBoxedLayout"]());
    }
    togglePushContent($event) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["togglePushContent"]());
    }
    toggleNoOverlay($event) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleNoOverlay"]());
    }
    toggleOffCanvas($event) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleOffCanvas"]());
    }
    toggleBiggerContentFont($event) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleBiggerContentFont"]());
    }
    toggleHighContrastText($event) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleHighContrastText"]());
    }
    toggleDaltonism($event) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleDaltonism"]());
    }
    togglePreloaderInsise($event) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["togglePreloaderInsise"]());
    }
    toggleCleanPageBackground($event) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleCleanPageBackground"]());
    }
    toggleHideNavigationIcons($event) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleHideNavigationIcons"]());
    }
    toggleDisableCSSAnimation($event) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleDisableCSSAnimation"]());
    }
    toggleHideInfoCard($event) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleHideInfoCard"]());
    }
    toggleLeanSubheader($event) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleLeanSubheader"]());
    }
    toggleHierarchicalNavigation($event) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleHierarchicalNavigation"]());
    }
    setGlobalFontSize(size) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["setGlobalFontSize"]({ size }));
    }
    appReset($event) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["appReset"]());
    }
    factoryReset($event) {
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["factoryReset"]());
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-settings',
        template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layout/settings/settings.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], SettingsComponent);



/***/ }),

/***/ "./src/app/shared/layout/shortcut-modal/shortcut-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/layout/shortcut-modal/shortcut-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: ShortcutModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortcutModalComponent", function() { return ShortcutModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");



let ShortcutModalComponent = class ShortcutModalComponent {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    closeShortcut($event) {
        this.bsModalRef.hide();
    }
};
ShortcutModalComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] }
];
ShortcutModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-shortcut-modal',
        template: __webpack_require__(/*! raw-loader!./shortcut-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layout/shortcut-modal/shortcut-modal.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]])
], ShortcutModalComponent);



/***/ }),

/***/ "./src/app/shared/layout/shortcut-modal/shortcut-modal.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/layout/shortcut-modal/shortcut-modal.service.ts ***!
  \************************************************************************/
/*! exports provided: ShortcutModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortcutModalService", function() { return ShortcutModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _shortcut_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shortcut-modal.component */ "./src/app/shared/layout/shortcut-modal/shortcut-modal.component.ts");




let ShortcutModalService = class ShortcutModalService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openModal() {
        this.bsModalRef = this.modalService.show(_shortcut_modal_component__WEBPACK_IMPORTED_MODULE_3__["ShortcutModalComponent"], {
            class: 'modal-dialog-top modal-transparent'
        });
    }
};
ShortcutModalService.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
];
ShortcutModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
], ShortcutModalService);



/***/ }),

/***/ "./src/app/shared/layout/sidebar/sidebar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/sidebar/sidebar.component.ts ***!
  \************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_store_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/navigation */ "./src/app/store/navigation/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");




let SidebarComponent = class SidebarComponent {
    constructor(store) {
        this.store = store;
        this.vm$ = this.store.select(src_app_store_navigation__WEBPACK_IMPORTED_MODULE_2__["selectFilter"]);
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layout/sidebar/sidebar.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
], SidebarComponent);



/***/ }),

/***/ "./src/app/shared/navigation/nav-filter-msg/nav-filter-msg.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/navigation/nav-filter-msg/nav-filter-msg.component.ts ***!
  \******************************************************************************/
/*! exports provided: NavFilterMsgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavFilterMsgComponent", function() { return NavFilterMsgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/navigation */ "./src/app/store/navigation/index.ts");




let NavFilterMsgComponent = class NavFilterMsgComponent {
    constructor(store) {
        this.store = store;
        this.vm$ = this.store.select(src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__["selectResult"]);
    }
};
NavFilterMsgComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
NavFilterMsgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-nav-filter-msg',
        template: __webpack_require__(/*! raw-loader!./nav-filter-msg.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/navigation/nav-filter-msg/nav-filter-msg.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], NavFilterMsgComponent);



/***/ }),

/***/ "./src/app/shared/navigation/nav-filter/nav-filter.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/navigation/nav-filter/nav-filter.component.ts ***!
  \**********************************************************************/
/*! exports provided: NavFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavFilterComponent", function() { return NavFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/navigation */ "./src/app/store/navigation/index.ts");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(subsink__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let NavFilterComponent = class NavFilterComponent {
    constructor(store) {
        this.store = store;
        this.vm$ = this.store.select(src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__["selectFilter"]);
        this.sub = new subsink__WEBPACK_IMPORTED_MODULE_4__["SubSink"]();
        this.textThrhottle$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.sub.sink = this.textThrhottle$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["throttleTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(text => {
            this.store.dispatch(Object(src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__["navigationFilter"])({ text }));
        })).subscribe();
    }
    toggleFilter($event) {
        $event.preventDefault();
        this.store.dispatch(Object(src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__["toggleFilter"])());
    }
    handleKeyup($event, value) {
        this.textThrhottle$.next(value.trim());
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
NavFilterComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
NavFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-nav-filter',
        template: __webpack_require__(/*! raw-loader!./nav-filter.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/navigation/nav-filter/nav-filter.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], NavFilterComponent);



/***/ }),

/***/ "./src/app/shared/navigation/nav-footer/nav-footer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/navigation/nav-footer/nav-footer.component.ts ***!
  \**********************************************************************/
/*! exports provided: NavFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavFooterComponent", function() { return NavFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/settings */ "./src/app/store/settings/index.ts");




let NavFooterComponent = class NavFooterComponent {
    constructor(store) {
        this.store = store;
    }
    toggleMinifyNavigation($event) {
        $event.preventDefault();
        this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleMinifyNavigation"]());
    }
};
NavFooterComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
NavFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-nav-footer',
        template: __webpack_require__(/*! raw-loader!./nav-footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/navigation/nav-footer/nav-footer.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], NavFooterComponent);



/***/ }),

/***/ "./src/app/shared/navigation/nav-info-card/nav-info-card.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/navigation/nav-info-card/nav-info-card.component.ts ***!
  \****************************************************************************/
/*! exports provided: NavInfoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavInfoCardComponent", function() { return NavInfoCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/navigation */ "./src/app/store/navigation/index.ts");
/* harmony import */ var src_app_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.config */ "./src/app/app.config.ts");





let NavInfoCardComponent = class NavInfoCardComponent {
    constructor(store) {
        this.store = store;
        this.user = src_app_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"].user;
        this.avatar = src_app_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"].avatar;
    }
    toggleFilter($event) {
        $event.preventDefault();
        this.store.dispatch(Object(src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__["toggleFilter"])());
    }
};
NavInfoCardComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
NavInfoCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-nav-info-card',
        template: __webpack_require__(/*! raw-loader!./nav-info-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/navigation/nav-info-card/nav-info-card.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], NavInfoCardComponent);



/***/ }),

/***/ "./src/app/shared/navigation/nav-item/nav-item.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/navigation/nav-item/nav-item.component.ts ***!
  \******************************************************************/
/*! exports provided: NavItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemComponent", function() { return NavItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_store_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/navigation */ "./src/app/store/navigation/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/animations */ "./src/app/shared/utils/animations.ts");





let NavItemComponent = class NavItemComponent {
    constructor(store) {
        this.store = store;
    }
    get active() { return this.item.active; }
    get open() { return this.item.open; }
    get hidden() { return this.item.matched !== null && !this.item.matched; }
    get shown() { return this.item.matched !== null && this.item.matched; }
    get navTitle() { return this.item.navTitle; }
    toggleSection($event) {
        $event.preventDefault();
        this.store.dispatch(Object(src_app_store_navigation__WEBPACK_IMPORTED_MODULE_2__["toggleNavSection"])({ item: this.item }));
    }
    trackByFn(idx, item) {
        return item.title + '_' + idx;
    }
};
NavItemComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NavItemComponent.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], NavItemComponent.prototype, "minified", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.active'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavItemComponent.prototype, "active", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavItemComponent.prototype, "open", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.js-filter-hide]'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavItemComponent.prototype, "hidden", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.js-filter-show]'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavItemComponent.prototype, "shown", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.nav-title]'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavItemComponent.prototype, "navTitle", null);
NavItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: '[smart-nav-item]',
        template: __webpack_require__(/*! raw-loader!./nav-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/navigation/nav-item/nav-item.component.html"),
        animations: [Object(_utils_animations__WEBPACK_IMPORTED_MODULE_4__["makeSlideInOut"])()],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
], NavItemComponent);



/***/ }),

/***/ "./src/app/shared/navigation/nav/nav.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/navigation/nav/nav.component.ts ***!
  \********************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/navigation */ "./src/app/store/navigation/index.ts");
/* harmony import */ var src_app_store_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/settings */ "./src/app/store/settings/index.ts");





let NavComponent = class NavComponent {
    constructor(store) {
        this.store = store;
        this.vm$ = this.store.select(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__["selectNavigationItems"], src_app_store_settings__WEBPACK_IMPORTED_MODULE_4__["selectSettingsState"], (items, settings) => ({ items, minified: settings.minifyNavigation })));
    }
    trackByFn(idx, item) {
        return item.title + '_' + idx;
    }
};
NavComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-nav',
        template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/navigation/nav/nav.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], NavComponent);



/***/ }),

/***/ "./src/app/shared/navigation/navigation.module.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/navigation/navigation.module.ts ***!
  \********************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var _nav_filter_nav_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-filter/nav-filter.component */ "./src/app/shared/navigation/nav-filter/nav-filter.component.ts");
/* harmony import */ var _nav_info_card_nav_info_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-info-card/nav-info-card.component */ "./src/app/shared/navigation/nav-info-card/nav-info-card.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/shared/navigation/nav/nav.component.ts");
/* harmony import */ var _nav_filter_msg_nav_filter_msg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-filter-msg/nav-filter-msg.component */ "./src/app/shared/navigation/nav-filter-msg/nav-filter-msg.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/shared/navigation/navigation/navigation.component.ts");
/* harmony import */ var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav-item/nav-item.component */ "./src/app/shared/navigation/nav-item/nav-item.component.ts");
/* harmony import */ var _nav_footer_nav_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nav-footer/nav-footer.component */ "./src/app/shared/navigation/nav-footer/nav-footer.component.ts");
/* harmony import */ var _utils_utils_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/utils.module */ "./src/app/shared/utils/utils.module.ts");













let NavigationModule = class NavigationModule {
};
NavigationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _nav_filter_nav_filter_component__WEBPACK_IMPORTED_MODULE_4__["NavFilterComponent"], _nav_info_card_nav_info_card_component__WEBPACK_IMPORTED_MODULE_5__["NavInfoCardComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _nav_filter_msg_nav_filter_msg_component__WEBPACK_IMPORTED_MODULE_7__["NavFilterMsgComponent"],
            _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_10__["NavItemComponent"], _nav_footer_nav_footer_component__WEBPACK_IMPORTED_MODULE_11__["NavFooterComponent"],
        ],
        exports: [
            _nav_filter_nav_filter_component__WEBPACK_IMPORTED_MODULE_4__["NavFilterComponent"], _nav_info_card_nav_info_card_component__WEBPACK_IMPORTED_MODULE_5__["NavInfoCardComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _nav_filter_msg_nav_filter_msg_component__WEBPACK_IMPORTED_MODULE_7__["NavFilterMsgComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"],
            _utils_utils_module__WEBPACK_IMPORTED_MODULE_12__["UtilsModule"]
        ]
    })
], NavigationModule);



/***/ }),

/***/ "./src/app/shared/navigation/navigation/navigation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/navigation/navigation/navigation.component.ts ***!
  \**********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/settings */ "./src/app/store/settings/index.ts");




let NavigationComponent = class NavigationComponent {
    constructor(store) {
        this.store = store;
        this.vm$ = this.store.select(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["selectSettingsState"]);
    }
};
NavigationComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-navigation',
        template: `
    <!-- BEGIN PRIMARY NAVIGATION -->
	  <nav *ngIf="vm$ | async as vm" id="js-primary-nav" class="primary-nav" [class.h-100]="vm.fixedNavigation" role="navigation">
      <smart-nav-filter></smart-nav-filter>
      <smart-nav-info-card></smart-nav-info-card>
      <smart-nav></smart-nav>
      <smart-nav-filter-msg></smart-nav-filter-msg>
    </nav>
    <!-- END PRIMARY NAVIGATION -->
    <smart-nav-footer></smart-nav-footer>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], NavigationComponent);



/***/ }),

/***/ "./src/app/shared/ui/on-off/on-off.component.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/ui/on-off/on-off.component.ts ***!
  \******************************************************/
/*! exports provided: OnOffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnOffComponent", function() { return OnOffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OnOffComponent = class OnOffComponent {
    constructor() {
        this.checked = false;
        this.checkedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        if (!changes.checked || changes.checked.currentValue === this.checked) {
            return;
        }
    }
    onCheck($event) {
        $event.preventDefault();
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], OnOffComponent.prototype, "checked", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], OnOffComponent.prototype, "class", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], OnOffComponent.prototype, "checkedChange", void 0);
OnOffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-on-off',
        template: `
  <a
    href="#"
    (click)="onCheck($event)"
    class="btn btn-switch {{class}}"
    [class.active]="checked"></a>
  `,
        host: {
            class: 'd-inline-block'
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })
], OnOffComponent);



/***/ }),

/***/ "./src/app/shared/ui/ui.module.ts":
/*!****************************************!*\
  !*** ./src/app/shared/ui/ui.module.ts ***!
  \****************************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _on_off_on_off_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./on-off/on-off.component */ "./src/app/shared/ui/on-off/on-off.component.ts");




let UiModule = class UiModule {
};
UiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_on_off_on_off_component__WEBPACK_IMPORTED_MODULE_3__["OnOffComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_on_off_on_off_component__WEBPACK_IMPORTED_MODULE_3__["OnOffComponent"]]
    })
], UiModule);



/***/ }),

/***/ "./src/app/shared/utils/animations.ts":
/*!********************************************!*\
  !*** ./src/app/shared/utils/animations.ts ***!
  \********************************************/
/*! exports provided: makeSlideInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSlideInOut", function() { return makeSlideInOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

function makeSlideInOut() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1' }))
            ])
        ])
    ]);
}


/***/ }),

/***/ "./src/app/shared/utils/directives/stub-click.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/utils/directives/stub-click.directive.ts ***!
  \*****************************************************************/
/*! exports provided: StubClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StubClickDirective", function() { return StubClickDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StubClickDirective = class StubClickDirective {
    onMouseDown(event) {
        event.preventDefault();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], StubClickDirective.prototype, "onMouseDown", null);
StubClickDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[smartStubClick]'
    })
], StubClickDirective);



/***/ }),

/***/ "./src/app/shared/utils/utils.functions.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/utils/utils.functions.ts ***!
  \*************************************************/
/*! exports provided: scrollToTop, toggleFullscreen, handleClassCondition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToTop", function() { return scrollToTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleFullscreen", function() { return toggleFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleClassCondition", function() { return handleClassCondition; });
function scrollToTop(scrollDuration) {
    const cosParameter = window.scrollY / 2;
    let scrollCount = 0;
    let oldTimestamp = performance.now();
    function step(newTimestamp) {
        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
        if (scrollCount >= Math.PI) {
            window.scrollTo(0, 0);
        }
        if (window.scrollY === 0) {
            return;
        }
        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}
/* tslint:disable */
function toggleFullscreen() {
    if (!document.fullscreenElement /* Standard browsers */
        && !document['msFullscreenElement'] /* Internet Explorer */
        && !document['mozFullScreenElement'] /* Firefox */
        && !document['webkitFullscreenElement'] /* Chrome */) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        }
        else if (document.documentElement['msRequestFullscreen']) {
            document.documentElement['msRequestFullscreen']();
        }
        else if (document.documentElement['mozRequestFullScreen']) {
            document.documentElement['mozRequestFullScreen']();
        }
        else if (document.documentElement['webkitRequestFullscreen']) {
            document.documentElement['webkitRequestFullscreen'](Element['ALLOW_KEYBOARD_INPUT']);
        }
    }
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document['msExitFullscreen']) {
            document['msExitFullscreen']();
        }
        else if (document['mozCancelFullScreen']) {
            document['mozCancelFullScreen']();
        }
        else if (document['webkitExitFullscreen']) {
            document['webkitExitFullscreen']();
        }
    }
}
/* tslint:enable */
// conditionaly apply css class to target
function handleClassCondition(condition, className, el) {
    if (!condition && el.classList.contains(className)) {
        el.classList.remove(className);
    }
    if (condition && !el.classList.contains(className)) {
        el.classList.add(className);
    }
}


/***/ }),

/***/ "./src/app/shared/utils/utils.module.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/utils/utils.module.ts ***!
  \**********************************************/
/*! exports provided: UtilsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsModule", function() { return UtilsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _directives_stub_click_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/stub-click.directive */ "./src/app/shared/utils/directives/stub-click.directive.ts");




let UtilsModule = class UtilsModule {
};
UtilsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_directives_stub_click_directive__WEBPACK_IMPORTED_MODULE_3__["StubClickDirective"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_directives_stub_click_directive__WEBPACK_IMPORTED_MODULE_3__["StubClickDirective"]]
    })
], UtilsModule);



/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: reducers, localStorageSyncReducer, metaReducers, effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageSyncReducer", function() { return localStorageSyncReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngrx-store-localstorage */ "./node_modules/ngrx-store-localstorage/dist/index.js");
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./src/app/store/settings/index.ts");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation */ "./src/app/store/navigation/index.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./src/app/store/router/index.ts");





const reducers = {
    settings: _settings__WEBPACK_IMPORTED_MODULE_2__["reducer"],
    navigation: _navigation__WEBPACK_IMPORTED_MODULE_3__["reducer"],
    router: _router__WEBPACK_IMPORTED_MODULE_4__["reducer"]
};
// this will save part of redux store into localstorage
// and restore this part on app init
function localStorageSyncReducer(reducer) {
    return Object(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_1__["localStorageSync"])({
        keys: ['settings'],
        rehydrate: true,
    })(reducer);
}
const metaReducers = [
    localStorageSyncReducer,
    _settings__WEBPACK_IMPORTED_MODULE_2__["settingsMetaReducer"]
].concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ?
    [] : // production only meta reducers
    [] // dev only meta reducers
);
const effects = [
    _navigation__WEBPACK_IMPORTED_MODULE_3__["NavigationEffects"]
];


/***/ }),

/***/ "./src/app/store/navigation/index.ts":
/*!*******************************************!*\
  !*** ./src/app/store/navigation/index.ts ***!
  \*******************************************/
/*! exports provided: toggleNavSection, activeUrl, toggleFilter, navigationFilter, mobileNavigation, NavigationEffects, initialState, reducer, selectNavigationState, selectNavigationItems, selectFilter, selectResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.actions */ "./src/app/store/navigation/navigation.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleNavSection", function() { return _navigation_actions__WEBPACK_IMPORTED_MODULE_0__["toggleNavSection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activeUrl", function() { return _navigation_actions__WEBPACK_IMPORTED_MODULE_0__["activeUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleFilter", function() { return _navigation_actions__WEBPACK_IMPORTED_MODULE_0__["toggleFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigationFilter", function() { return _navigation_actions__WEBPACK_IMPORTED_MODULE_0__["navigationFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mobileNavigation", function() { return _navigation_actions__WEBPACK_IMPORTED_MODULE_0__["mobileNavigation"]; });

/* harmony import */ var _navigation_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.effects */ "./src/app/store/navigation/navigation.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationEffects", function() { return _navigation_effects__WEBPACK_IMPORTED_MODULE_1__["NavigationEffects"]; });

/* harmony import */ var _navigation_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.reducer */ "./src/app/store/navigation/navigation.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _navigation_reducer__WEBPACK_IMPORTED_MODULE_2__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _navigation_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"]; });

/* harmony import */ var _navigation_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.selectors */ "./src/app/store/navigation/navigation.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectNavigationState", function() { return _navigation_selectors__WEBPACK_IMPORTED_MODULE_3__["selectNavigationState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectNavigationItems", function() { return _navigation_selectors__WEBPACK_IMPORTED_MODULE_3__["selectNavigationItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFilter", function() { return _navigation_selectors__WEBPACK_IMPORTED_MODULE_3__["selectFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectResult", function() { return _navigation_selectors__WEBPACK_IMPORTED_MODULE_3__["selectResult"]; });







/***/ }),

/***/ "./src/app/store/navigation/navigation.actions.ts":
/*!********************************************************!*\
  !*** ./src/app/store/navigation/navigation.actions.ts ***!
  \********************************************************/
/*! exports provided: toggleNavSection, activeUrl, toggleFilter, navigationFilter, mobileNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleNavSection", function() { return toggleNavSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeUrl", function() { return activeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleFilter", function() { return toggleFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationFilter", function() { return navigationFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileNavigation", function() { return mobileNavigation; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const toggleNavSection = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Navigation] Toggle Nav Section', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const activeUrl = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Navigation] Active Url', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const toggleFilter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Navigation] Toggle Filter');
const navigationFilter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Navigation] Navigation Filter', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const mobileNavigation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Navigation] Mobile Navigation', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/store/navigation/navigation.effects.ts":
/*!********************************************************!*\
  !*** ./src/app/store/navigation/navigation.effects.ts ***!
  \********************************************************/
/*! exports provided: NavigationEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationEffects", function() { return NavigationEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm2015/router-store.js");
/* harmony import */ var _navigation_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation.actions */ "./src/app/store/navigation/navigation.actions.ts");
/* harmony import */ var src_app_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/utils/utils.functions */ "./src/app/shared/utils/utils.functions.ts");








let NavigationEffects = class NavigationEffects {
    constructor(actions$, breakpointObserver) {
        this.actions$ = actions$;
        this.mapToActiveUrl$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__["ROUTER_NAVIGATED"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((action) => Object(_navigation_actions__WEBPACK_IMPORTED_MODULE_6__["activeUrl"])({ url: action.payload.event.url })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(action => Object(src_app_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_7__["handleClassCondition"])(false, 'mobile-nav-on', document.querySelector('body')))));
        this.mobileNavigation$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_navigation_actions__WEBPACK_IMPORTED_MODULE_6__["mobileNavigation"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(action => Object(src_app_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_7__["handleClassCondition"])(action.open, 'mobile-nav-on', document.querySelector('body')))), { dispatch: false });
        breakpointObserver.observe('(max-width: 600px)').subscribe(result => {
            Object(src_app_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_7__["handleClassCondition"])(result.matches, 'mobile-view-activated', document.querySelector('body'));
        });
    }
};
NavigationEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"] }
];
NavigationEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]])
], NavigationEffects);



/***/ }),

/***/ "./src/app/store/navigation/navigation.reducer.ts":
/*!********************************************************!*\
  !*** ./src/app/store/navigation/navigation.reducer.ts ***!
  \********************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _navigation_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.actions */ "./src/app/store/navigation/navigation.actions.ts");
/* harmony import */ var _app_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.navigation */ "./src/app/app.navigation.ts");



const initialState = {
    items: decorateItems(_app_navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItems"]),
    total: countTotal(_app_navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItems"]),
    filterActive: false,
    filterText: '',
    matched: 0
};
const navigationReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_navigation_actions__WEBPACK_IMPORTED_MODULE_1__["activeUrl"], (state, action) => (Object.assign({}, state, { items: detectActiveItems(state.items, action.url) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_navigation_actions__WEBPACK_IMPORTED_MODULE_1__["toggleNavSection"], (state, action) => (Object.assign({}, state, { items: toggleItems(state.items, action.item) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_navigation_actions__WEBPACK_IMPORTED_MODULE_1__["toggleFilter"], state => {
    if (state.filterActive) {
        return Object.assign({}, state, { filterActive: false, matched: 0, items: state.items.map(_ => (Object.assign({}, _, { matched: null }))) });
    }
    else {
        const items = filterItems(state.items, state.filterText);
        return Object.assign({}, state, { filterActive: true, items, matched: countMatched(items) });
    }
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_navigation_actions__WEBPACK_IMPORTED_MODULE_1__["navigationFilter"], (state, action) => {
    const items = filterItems(state.items, action.text);
    return Object.assign({}, state, { filterText: action.text, items, matched: countMatched(items) });
}));
function reducer(state, action) {
    return navigationReducer(state, action);
}
// utils
// recursevly add `open` and `active` fields to items
function decorateItems(navItems) {
    return navItems.map(navItem => {
        const item = Object.assign({}, navItem, { active: false, matched: null });
        if (navItem.items) {
            item.open = false;
            item.items = decorateItems(navItem.items);
        }
        item.navTitle = !navItem.items && !navItem.routerLink && !!navItem.title;
        return item;
    });
}
// recursevly count total of all items
function countTotal(navItems) {
    let total = navItems.length;
    navItems.filter(_ => !!_.items).forEach(_ => {
        total += countTotal(_.items);
    });
    return total;
}
// recursevly count total of filter matched items
function countMatched(navItems) {
    let matched = navItems.filter(_ => !!_.matched).length;
    navItems.filter(_ => !!_.items).forEach(_ => {
        matched += countMatched(_.items);
    });
    return matched;
}
// recursevly check if item is active by url when navigation ends
// if active item has parent it's `open` field becomes true
function detectActiveItems(navItems, activeUrl) {
    return navItems.map(navItem => {
        const isActive = itemIsActive(navItem, activeUrl);
        const item = Object.assign({}, navItem, { active: isActive });
        if (navItem.items) {
            item.open = isActive;
            item.items = detectActiveItems(navItem.items, activeUrl);
        }
        return item;
    });
}
// recursevly check if item is active by url
// if any of item children is active item considered as active
function itemIsActive(item, activeUrl) {
    if (item.routerLink === activeUrl) {
        return true;
    }
    else if (item.items) {
        return item.items.some(_ => itemIsActive(_, activeUrl));
    }
    else {
        return false;
    }
}
function toggleItems(navItems, toggledItem) {
    const isToggledItemLevel = navItems.some(_ => _ === toggledItem);
    return navItems.map(navItem => {
        const item = Object.assign({}, navItem);
        if (isToggledItemLevel && item.items && navItem !== toggledItem) {
            item.open = false;
        }
        if (navItem === toggledItem) {
            item.open = !navItem.open;
        }
        if (navItem.items) {
            item.items = toggleItems(navItem.items, toggledItem);
        }
        return item;
    });
}
function filterItems(navItems, text) {
    return navItems.map(navItem => {
        const item = Object.assign({}, navItem);
        if (navItem.items) {
            item.matched = navItemMatch(navItem, text) || navItem.items.some(_ => navItemMatch(_, text));
            item.items = filterItems(navItem.items, text);
        }
        else {
            item.matched = navItemMatch(navItem, text);
        }
        return item;
    });
}
function navItemMatch(item, text) {
    return (!text.trim() || (item.tags && !!item.tags.match(new RegExp(`.*${text.trim()}.*`, 'gi'))));
}


/***/ }),

/***/ "./src/app/store/navigation/navigation.selectors.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/navigation/navigation.selectors.ts ***!
  \**********************************************************/
/*! exports provided: selectNavigationState, selectNavigationItems, selectFilter, selectResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNavigationState", function() { return selectNavigationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNavigationItems", function() { return selectNavigationItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilter", function() { return selectFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectResult", function() { return selectResult; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const selectNavigationState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('navigation');
const selectNavigationItems = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectNavigationState, state => state.items);
const selectFilter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectNavigationState, state => ({
    active: state.filterActive,
    text: state.filterText
}));
const selectResult = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectNavigationState, state => ({
    active: state.filterActive && !!state.filterText.trim(),
    total: state.total,
    matched: state.matched
}));


/***/ }),

/***/ "./src/app/store/router/index.ts":
/*!***************************************!*\
  !*** ./src/app/store/router/index.ts ***!
  \***************************************/
/*! exports provided: reducer, CustomSerializer, GO, UPDATE, BACK, FORWARD, Go, UpdateLocation, Back, Forward, getRouterState, RouterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.reducer */ "./src/app/store/router/router.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _router_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return _router_reducer__WEBPACK_IMPORTED_MODULE_0__["CustomSerializer"]; });

/* harmony import */ var _router_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.actions */ "./src/app/store/router/router.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GO", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_1__["GO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BACK", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_1__["BACK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORWARD", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_1__["FORWARD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Go", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_1__["Go"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateLocation", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_1__["Back"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_1__["Forward"]; });

/* harmony import */ var _router_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router.selectors */ "./src/app/store/router/router.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRouterState", function() { return _router_selectors__WEBPACK_IMPORTED_MODULE_2__["getRouterState"]; });

/* harmony import */ var _router_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router.effects */ "./src/app/store/router/router.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return _router_effects__WEBPACK_IMPORTED_MODULE_3__["RouterEffects"]; });







/***/ }),

/***/ "./src/app/store/router/router.actions.ts":
/*!************************************************!*\
  !*** ./src/app/store/router/router.actions.ts ***!
  \************************************************/
/*! exports provided: GO, UPDATE, BACK, FORWARD, Go, UpdateLocation, Back, Forward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GO", function() { return GO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACK", function() { return BACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORWARD", function() { return FORWARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Go", function() { return Go; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateLocation", function() { return UpdateLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return Back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return Forward; });
const GO = '[Router] Go';
const UPDATE = '[Router] Update url';
const BACK = '[Router] Back';
const FORWARD = '[Router] Forward';
class Go {
    constructor(payload) {
        this.payload = payload;
        this.type = GO;
    }
}
Go.ctorParameters = () => [
    { type: undefined }
];
class UpdateLocation {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE;
    }
}
UpdateLocation.ctorParameters = () => [
    { type: String }
];
class Back {
    constructor() {
        this.type = BACK;
    }
}
class Forward {
    constructor() {
        this.type = FORWARD;
    }
}


/***/ }),

/***/ "./src/app/store/router/router.effects.ts":
/*!************************************************!*\
  !*** ./src/app/store/router/router.effects.ts ***!
  \************************************************/
/*! exports provided: RouterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return RouterEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _router_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router.actions */ "./src/app/store/router/router.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let RouterEffects = class RouterEffects {
    constructor(actions$, router, location) {
        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        this.navigate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_router_actions__WEBPACK_IMPORTED_MODULE_5__["GO"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(({ path, query: queryParams, extras }) => {
            this.router.navigate(path, Object.assign({ queryParams }, extras));
        }));
        this.location$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_router_actions__WEBPACK_IMPORTED_MODULE_5__["UPDATE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(path => {
            this.location.go(path);
        }));
        this.navigateBack$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_router_actions__WEBPACK_IMPORTED_MODULE_5__["BACK"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => this.location.back()));
        this.navigateForward$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_router_actions__WEBPACK_IMPORTED_MODULE_5__["FORWARD"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => this.location.forward()));
    }
};
RouterEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({ dispatch: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RouterEffects.prototype, "navigate$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({ dispatch: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RouterEffects.prototype, "location$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({ dispatch: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RouterEffects.prototype, "navigateBack$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({ dispatch: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RouterEffects.prototype, "navigateForward$", void 0);
RouterEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
], RouterEffects);



/***/ }),

/***/ "./src/app/store/router/router.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/store/router/router.reducer.ts ***!
  \************************************************/
/*! exports provided: reducer, CustomSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return CustomSerializer; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm2015/router-store.js");

const reducer = _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerReducer"];
class CustomSerializer {
    serialize(routerState) {
        const { url } = routerState;
        const { queryParams } = routerState.root;
        let state = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        const { params, data } = state;
        return { url, queryParams, params, data };
    }
}


/***/ }),

/***/ "./src/app/store/router/router.selectors.ts":
/*!**************************************************!*\
  !*** ./src/app/store/router/router.selectors.ts ***!
  \**************************************************/
/*! exports provided: getRouterState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouterState", function() { return getRouterState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const getRouterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('router');


/***/ }),

/***/ "./src/app/store/settings/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/settings/index.ts ***!
  \*****************************************/
/*! exports provided: toggleFixedHeader, toggleFixedNavigation, toggleMinifyNavigation, toggleHideNavigation, toggleTopNavigation, toggleBoxedLayout, togglePushContent, toggleNoOverlay, toggleOffCanvas, toggleBiggerContentFont, toggleHighContrastText, toggleDaltonism, toggleRtl, togglePreloaderInsise, toggleCleanPageBackground, toggleHideNavigationIcons, toggleDisableCSSAnimation, toggleHideInfoCard, toggleLeanSubheader, toggleHierarchicalNavigation, setGlobalFontSize, appReset, factoryReset, SettingsActionTypes, settingsMetaReducer, initialState, reducer, selectSettingsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.actions */ "./src/app/store/settings/settings.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleFixedHeader", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["toggleFixedHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleFixedNavigation", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["toggleFixedNavigation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleMinifyNavigation", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["toggleMinifyNavigation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleHideNavigation", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["toggleHideNavigation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleTopNavigation", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["toggleTopNavigation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleBoxedLayout", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["toggleBoxedLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "togglePushContent", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["togglePushContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleNoOverlay", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["toggleNoOverlay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleOffCanvas", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["toggleOffCanvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleBiggerContentFont", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["toggleBiggerContentFont"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleHighContrastText", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["toggleHighContrastText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleDaltonism", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["toggleDaltonism"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleRtl", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["toggleRtl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "togglePreloaderInsise", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["togglePreloaderInsise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleCleanPageBackground", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["toggleCleanPageBackground"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleHideNavigationIcons", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["toggleHideNavigationIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleDisableCSSAnimation", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["toggleDisableCSSAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleHideInfoCard", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["toggleHideInfoCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleLeanSubheader", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["toggleLeanSubheader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleHierarchicalNavigation", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["toggleHierarchicalNavigation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setGlobalFontSize", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["setGlobalFontSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appReset", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["appReset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "factoryReset", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["factoryReset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsActionTypes", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_0__["SettingsActionTypes"]; });

/* harmony import */ var _settings_meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.meta */ "./src/app/store/settings/settings.meta.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "settingsMetaReducer", function() { return _settings_meta__WEBPACK_IMPORTED_MODULE_1__["settingsMetaReducer"]; });

/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.reducer */ "./src/app/store/settings/settings.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_2__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"]; });

/* harmony import */ var _settings_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.selectors */ "./src/app/store/settings/settings.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSettingsState", function() { return _settings_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSettingsState"]; });







/***/ }),

/***/ "./src/app/store/settings/settings.actions.ts":
/*!****************************************************!*\
  !*** ./src/app/store/settings/settings.actions.ts ***!
  \****************************************************/
/*! exports provided: toggleFixedHeader, toggleFixedNavigation, toggleMinifyNavigation, toggleHideNavigation, toggleTopNavigation, toggleBoxedLayout, togglePushContent, toggleNoOverlay, toggleOffCanvas, toggleBiggerContentFont, toggleHighContrastText, toggleDaltonism, toggleRtl, togglePreloaderInsise, toggleCleanPageBackground, toggleHideNavigationIcons, toggleDisableCSSAnimation, toggleHideInfoCard, toggleLeanSubheader, toggleHierarchicalNavigation, setGlobalFontSize, appReset, factoryReset, SettingsActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleFixedHeader", function() { return toggleFixedHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleFixedNavigation", function() { return toggleFixedNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMinifyNavigation", function() { return toggleMinifyNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleHideNavigation", function() { return toggleHideNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleTopNavigation", function() { return toggleTopNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleBoxedLayout", function() { return toggleBoxedLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "togglePushContent", function() { return togglePushContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleNoOverlay", function() { return toggleNoOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleOffCanvas", function() { return toggleOffCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleBiggerContentFont", function() { return toggleBiggerContentFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleHighContrastText", function() { return toggleHighContrastText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleDaltonism", function() { return toggleDaltonism; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleRtl", function() { return toggleRtl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "togglePreloaderInsise", function() { return togglePreloaderInsise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleCleanPageBackground", function() { return toggleCleanPageBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleHideNavigationIcons", function() { return toggleHideNavigationIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleDisableCSSAnimation", function() { return toggleDisableCSSAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleHideInfoCard", function() { return toggleHideInfoCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleLeanSubheader", function() { return toggleLeanSubheader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleHierarchicalNavigation", function() { return toggleHierarchicalNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalFontSize", function() { return setGlobalFontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReset", function() { return appReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factoryReset", function() { return factoryReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsActionTypes", function() { return SettingsActionTypes; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const toggleFixedHeader = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Toggle Fixed Header');
const toggleFixedNavigation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Toggle Fixed Navigation');
const toggleMinifyNavigation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Toggle Minify Navigation');
const toggleHideNavigation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Toggle Hide Navigation');
const toggleTopNavigation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Toggle Top Navigation');
const toggleBoxedLayout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Toggle Boxed Layout');
const togglePushContent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Toggle Push Content');
const toggleNoOverlay = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Toggle No Overlay');
const toggleOffCanvas = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Toggle Off Canvas');
const toggleBiggerContentFont = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Toggle Bigger Content Font');
const toggleHighContrastText = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Toggle High Contrast Text');
const toggleDaltonism = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Toggle Daltonism');
const toggleRtl = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Toggle RTL');
const togglePreloaderInsise = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Toggle Preloader Insise');
const toggleCleanPageBackground = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Toggle Clean Page Background');
const toggleHideNavigationIcons = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Toggle Hide Navigation Icons');
const toggleDisableCSSAnimation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Toggle Disable CSS Animation');
const toggleHideInfoCard = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Toggle Hide Info Card');
const toggleLeanSubheader = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Toggle Lean Subheader');
const toggleHierarchicalNavigation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Toggle Hierarchical Navigation');
const setGlobalFontSize = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Set Global Font Size', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const appReset = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] App Reset');
const factoryReset = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Settings] Factory Reset');
const SettingsActionTypes = [
    toggleFixedHeader.type,
    toggleFixedNavigation.type,
    toggleMinifyNavigation.type,
    toggleHideNavigation.type,
    toggleTopNavigation.type,
    toggleBoxedLayout.type,
    togglePushContent.type,
    toggleNoOverlay.type,
    toggleOffCanvas.type,
    toggleBiggerContentFont.type,
    toggleHighContrastText.type,
    toggleDaltonism.type,
    toggleRtl.type,
    togglePreloaderInsise.type,
    toggleCleanPageBackground.type,
    toggleHideNavigationIcons.type,
    toggleDisableCSSAnimation.type,
    toggleHideInfoCard.type,
    toggleLeanSubheader.type,
    toggleHierarchicalNavigation.type,
    setGlobalFontSize.type,
    appReset.type,
    factoryReset.type,
];


/***/ }),

/***/ "./src/app/store/settings/settings.meta.ts":
/*!*************************************************!*\
  !*** ./src/app/store/settings/settings.meta.ts ***!
  \*************************************************/
/*! exports provided: settingsMetaReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsMetaReducer", function() { return settingsMetaReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _settings_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.actions */ "./src/app/store/settings/settings.actions.ts");
/* harmony import */ var _shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/utils.functions */ "./src/app/shared/utils/utils.functions.ts");



const html = document.querySelector('html');
const body = document.querySelector('body');
// meta reducer that applies layout classes based on settings reducer
function settingsMetaReducer(reducer) {
    return (state, action) => {
        // build new state
        const result = reducer(state, action);
        // use our middleware only for INIT action and for Settings actions
        if (action.type === _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["INIT"] || _settings_actions__WEBPACK_IMPORTED_MODULE_1__["SettingsActionTypes"].includes(action.type)) {
            handleCssClasses(result.settings, action);
        }
        // pass state into next chain
        return result;
    };
}
function handleCssClasses(state, action) {
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.fixedHeader, 'header-function-fixed', body);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.fixedNavigation, 'nav-function-fixed', body);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.minifyNavigation, 'nav-function-minify', body);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.hideNavigation, 'nav-function-hidden', body);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.topNavigation, 'nav-function-top', body);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.boxedLayout, 'mod-main-boxed', body);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.pushContent, 'nav-mobile-push', body);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.noOverlay, 'nav-mobile-no-overlay', body);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.offCanvas, 'nav-mobile-slide-out', body);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.biggerContentFont, 'mod-bigger-font', body);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.highContrastText, 'mod-high-contrast', body);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.daltonism, 'mod-color-blind', body);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.preloaderInside, 'mod-pace-custom', body);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.cleanPageBackground, 'mod-clean-page-bg', body);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.hideNavigationIcons, 'mod-hide-nav-icons', body);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.disableCSSAnimation, 'mod-disable-animation', body);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.hideInfoCard, 'mod-hide-info-card', body);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.leanSubheader, 'mod-lean-subheader', body);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.hierarchicalNavigation, 'mod-nav-link', body);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.globalFontSize === 'sm', 'root-text-sm', html);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.globalFontSize === 'md', 'root-text', html);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.globalFontSize === 'lg', 'root-text-lg', html);
    Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["handleClassCondition"])(state.globalFontSize === 'xl', 'root-text-xl', html);
}


/***/ }),

/***/ "./src/app/store/settings/settings.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/store/settings/settings.reducer.ts ***!
  \****************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _settings_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.actions */ "./src/app/store/settings/settings.actions.ts");


// here you can configure initial state of your app
// for all your users
const initialState = {
    // app layout
    fixedHeader: false,
    fixedNavigation: false,
    minifyNavigation: false,
    hideNavigation: false,
    topNavigation: false,
    boxedLayout: false,
    // mobile menu
    pushContent: false,
    noOverlay: false,
    offCanvas: false,
    // accessibility
    biggerContentFont: false,
    highContrastText: false,
    daltonism: false,
    preloaderInside: false,
    rtl: false,
    // global modifications
    cleanPageBackground: false,
    hideNavigationIcons: false,
    disableCSSAnimation: false,
    hideInfoCard: false,
    leanSubheader: false,
    hierarchicalNavigation: false,
    // global font size
    globalFontSize: 'md',
};
const settingsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleFixedHeader"], state => (Object.assign({}, state, { fixedHeader: !state.fixedHeader }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleFixedNavigation"], state => (Object.assign({}, state, { fixedNavigation: !state.fixedNavigation }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleMinifyNavigation"], state => (Object.assign({}, state, { minifyNavigation: !state.minifyNavigation }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleHideNavigation"], state => (Object.assign({}, state, { hideNavigation: !state.hideNavigation }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleTopNavigation"], state => (Object.assign({}, state, { topNavigation: !state.topNavigation }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleBoxedLayout"], state => (Object.assign({}, state, { boxedLayout: !state.boxedLayout }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["togglePushContent"], state => (Object.assign({}, state, { pushContent: !state.pushContent }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleNoOverlay"], state => (Object.assign({}, state, { noOverlay: !state.noOverlay }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleOffCanvas"], state => (Object.assign({}, state, { offCanvas: !state.offCanvas }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleBiggerContentFont"], state => (Object.assign({}, state, { biggerContentFont: !state.biggerContentFont }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleHighContrastText"], state => (Object.assign({}, state, { highContrastText: !state.highContrastText }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleDaltonism"], state => (Object.assign({}, state, { daltonism: !state.daltonism }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleRtl"], state => (Object.assign({}, state, { rtl: !state.rtl }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["togglePreloaderInsise"], state => (Object.assign({}, state, { preloaderInside: !state.preloaderInside }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleCleanPageBackground"], state => (Object.assign({}, state, { cleanPageBackground: !state.cleanPageBackground }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleHideNavigationIcons"], state => (Object.assign({}, state, { hideNavigationIcons: !state.hideNavigationIcons }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleDisableCSSAnimation"], state => (Object.assign({}, state, { disableCSSAnimation: !state.disableCSSAnimation }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleHideInfoCard"], state => (Object.assign({}, state, { hideInfoCard: !state.hideInfoCard }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleLeanSubheader"], state => (Object.assign({}, state, { leanSubheader: !state.leanSubheader }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleHierarchicalNavigation"], state => (Object.assign({}, state, { hierarchicalNavigation: !state.hierarchicalNavigation }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["setGlobalFontSize"], (state, action) => (Object.assign({}, state, { globalFontSize: action.size }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_1__["appReset"], () => (Object.assign({}, initialState))));
function reducer(state, action) {
    return settingsReducer(state, action);
}


/***/ }),

/***/ "./src/app/store/settings/settings.selectors.ts":
/*!******************************************************!*\
  !*** ./src/app/store/settings/settings.selectors.ts ***!
  \******************************************************/
/*! exports provided: selectSettingsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSettingsState", function() { return selectSettingsState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const selectSettingsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('settings');


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ITS-5\Desktop\ERP2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map