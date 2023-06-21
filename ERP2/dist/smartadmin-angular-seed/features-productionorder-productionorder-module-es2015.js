(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-productionorder-productionorder-module"],{

/***/ "./node_modules/ng-wizard/fesm2015/ng-wizard.js":
/*!******************************************************!*\
  !*** ./node_modules/ng-wizard/fesm2015/ng-wizard.js ***!
  \******************************************************/
/*! exports provided: NgWizardComponent, NgWizardModule, NgWizardService, NgWizardStep, NgWizardStepComponent, STEP_DIRECTIN, STEP_POSITION, STEP_STATE, THEME, TOOLBAR_BUTTON_POSITION, TOOLBAR_POSITION, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgWizardComponent", function() { return NgWizardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgWizardModule", function() { return NgWizardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgWizardService", function() { return NgWizardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgWizardStep", function() { return NgWizardStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgWizardStepComponent", function() { return NgWizardStepComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_DIRECTIN", function() { return STEP_DIRECTIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_POSITION", function() { return STEP_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_STATE", function() { return STEP_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME", function() { return THEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLBAR_BUTTON_POSITION", function() { return TOOLBAR_BUTTON_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLBAR_POSITION", function() { return TOOLBAR_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgWizardDataService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NG_WIZARD_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NgWizardStepContentDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





var TOOLBAR_POSITION;
(function (TOOLBAR_POSITION) {
    TOOLBAR_POSITION["none"] = "none";
    TOOLBAR_POSITION["top"] = "top";
    TOOLBAR_POSITION["bottom"] = "bottom";
    TOOLBAR_POSITION["both"] = "both";
})(TOOLBAR_POSITION || (TOOLBAR_POSITION = {}));
var TOOLBAR_BUTTON_POSITION;
(function (TOOLBAR_BUTTON_POSITION) {
    TOOLBAR_BUTTON_POSITION["start"] = "start";
    TOOLBAR_BUTTON_POSITION["end"] = "end";
})(TOOLBAR_BUTTON_POSITION || (TOOLBAR_BUTTON_POSITION = {}));
// export enum TRANSITION_EFFECT {
//     none = 'none',
//     slide = 'slide',
//     fade = 'fade'
// }
var THEME;
(function (THEME) {
    THEME["default"] = "default";
    THEME["arrows"] = "arrows";
    THEME["circles"] = "circles";
    THEME["dots"] = "dots";
})(THEME || (THEME = {}));
var STEP_STATE;
(function (STEP_STATE) {
    STEP_STATE["normal"] = "normal";
    STEP_STATE["disabled"] = "disabled";
    STEP_STATE["error"] = "error";
    STEP_STATE["hidden"] = "hidden";
})(STEP_STATE || (STEP_STATE = {}));
var STEP_STATUS;
(function (STEP_STATUS) {
    STEP_STATUS["untouched"] = "untouched";
    STEP_STATUS["done"] = "done";
    STEP_STATUS["active"] = "active";
})(STEP_STATUS || (STEP_STATUS = {}));
var STEP_DIRECTIN;
(function (STEP_DIRECTIN) {
    STEP_DIRECTIN["forward"] = "forward";
    STEP_DIRECTIN["backward"] = "backward";
})(STEP_DIRECTIN || (STEP_DIRECTIN = {}));
var STEP_POSITION;
(function (STEP_POSITION) {
    STEP_POSITION["first"] = "first";
    STEP_POSITION["final"] = "final";
    STEP_POSITION["middle"] = "middle";
})(STEP_POSITION || (STEP_POSITION = {}));

const DEFAULT_CONFIG = {
    selected: 0,
    keyNavigation: true,
    cycleSteps: false,
    lang: {
        next: 'Next',
        previous: 'Previous'
    },
    toolbarSettings: {
        toolbarPosition: TOOLBAR_POSITION.bottom,
        toolbarButtonPosition: TOOLBAR_BUTTON_POSITION.end,
        showNextButton: true,
        showPreviousButton: true,
        toolbarExtraButtons: []
    },
    anchorSettings: {
        anchorClickable: true,
        enableAllAnchors: false,
        markDoneStep: true,
        markAllPreviousStepsAsDone: true,
        removeDoneStepOnNavigateBack: false,
        enableAnchorOnDoneStep: true
    },
    theme: THEME.default,
};

const NG_WIZARD_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('ngWizardCustom.config');

// https://gist.github.com/ahtcx/0cd94e62691f539160b32ecda18af3d6
// Merge a `source` object to a `target` recursively
function merge(target, source) {
    // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
    for (let key of Object.keys(source)) {
        if (source[key] instanceof Object && key in target) {
            Object.assign(source[key], merge(target[key], source[key]));
        }
    }
    // Join `target` and modified `source`
    Object.assign(target || {}, source);
    return target;
}

let NgWizardDataService = class NgWizardDataService {
    constructor(config) {
        this.config = config;
        this._defaultConfig = Object.assign({}, DEFAULT_CONFIG);
        if (this.config) {
            this._defaultConfig = merge(this._defaultConfig, this.config);
        }
        // Observable sources
        this._resetWizard = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._showNextStep = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._showPreviousStep = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._showStep = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._setTheme = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._stepChangedArgs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // Observable streams
        this.resetWizard$ = this._resetWizard.asObservable();
        this.showNextStep$ = this._showNextStep.asObservable();
        this.showPreviousStep$ = this._showPreviousStep.asObservable();
        this.showStep$ = this._showStep.asObservable();
        this.setTheme$ = this._setTheme.asObservable();
        this.stepChangedArgs$ = this._stepChangedArgs.asObservable();
    }
    getDefaultConfig() {
        return Object.assign({}, this._defaultConfig);
    }
    resetWizard() {
        this._resetWizard.next();
    }
    showNextStep() {
        this._showNextStep.next();
    }
    showPreviousStep() {
        this._showPreviousStep.next();
    }
    showStep(index) {
        this._showStep.next(index);
    }
    setTheme(theme) {
        this._setTheme.next(theme);
    }
    stepChanged(args) {
        this._stepChangedArgs.next(args);
    }
};
NgWizardDataService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_WIZARD_CONFIG_TOKEN,] }] }
];
NgWizardDataService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function NgWizardDataService_Factory() { return new NgWizardDataService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(NG_WIZARD_CONFIG_TOKEN, 8)); }, token: NgWizardDataService, providedIn: "root" });
NgWizardDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_WIZARD_CONFIG_TOKEN)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], NgWizardDataService);

let NgWizardService = class NgWizardService {
    constructor(ngWizardDataService) {
        this.ngWizardDataService = ngWizardDataService;
    }
    reset() {
        this.ngWizardDataService.resetWizard();
    }
    next() {
        this.ngWizardDataService.showNextStep();
    }
    previous() {
        this.ngWizardDataService.showPreviousStep();
    }
    show(index) {
        this.ngWizardDataService.showStep(index);
    }
    theme(theme) {
        this.ngWizardDataService.setTheme(theme);
    }
    stepChanged() {
        return this.ngWizardDataService.stepChangedArgs$;
    }
};
NgWizardService.ctorParameters = () => [
    { type: NgWizardDataService }
];
NgWizardService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function NgWizardService_Factory() { return new NgWizardService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(NgWizardDataService)); }, token: NgWizardService, providedIn: "root" });
NgWizardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [NgWizardDataService])
], NgWizardService);

let NgWizardStep = class NgWizardStep {
    get hidden() {
        return this.status != STEP_STATUS.active;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], NgWizardStep.prototype, "title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], NgWizardStep.prototype, "description", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], NgWizardStep.prototype, "state", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["Type"])
], NgWizardStep.prototype, "component", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgWizardStep.prototype, "canEnter", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgWizardStep.prototype, "canExit", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('hidden'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], NgWizardStep.prototype, "hidden", null);
NgWizardStep = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])()
], NgWizardStep);

let NgWizardStepContentDirective = class NgWizardStepContentDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
};
NgWizardStepContentDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
NgWizardStepContentDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ngWizardStepContent]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
], NgWizardStepContentDirective);

var NgWizardStepComponent_1;
let NgWizardStepComponent = NgWizardStepComponent_1 = class NgWizardStepComponent extends NgWizardStep {
    constructor(componentFactoryResolver) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
    }
    ngOnInit() {
        this.loadComponent();
    }
    loadComponent() {
        if (!this.component) {
            return;
        }
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
        this.stepContent.viewContainerRef.clear();
        this.componentRef = this.stepContent.viewContainerRef.createComponent(componentFactory);
    }
    get isHidden() {
        return this.state == STEP_STATE.hidden;
    }
};
NgWizardStepComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(NgWizardStepContentDirective, { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", NgWizardStepContentDirective)
], NgWizardStepComponent.prototype, "stepContent", void 0);
NgWizardStepComponent = NgWizardStepComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ng-wizard-step',
        template: "<div class=\"tab-pane step-content\" style=\"display: block\">\r\n    <ng-content></ng-content>\r\n    <ng-template ngWizardStepContent></ng-template>\r\n</div>",
        providers: [
            { provide: NgWizardStep, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => NgWizardStepComponent_1) }
        ],
        styles: [""]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
], NgWizardStepComponent);

let NgWizardComponent = class NgWizardComponent {
    constructor(ngWizardDataService) {
        this.ngWizardDataService = ngWizardDataService;
        this.stepChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.themeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reseted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.styles = {};
        this.showToolbarTop = false;
        this.showPreviousButton = false;
        this.showNextButton = false;
        this.showToolbarBottom = false;
        this.showExtraButtons = false;
        this.currentStepIndex = null; // Active step index
    }
    get pConfig() {
        return this._pConfig || {};
    }
    set pConfig(config) {
        this._pConfig = config;
    }
    ngAfterContentInit() {
        this._backupStepStates();
        this._init();
        // Set toolbar
        this._setToolbar();
        // Assign plugin events
        this._setEvents();
        this.resetWizardWatcher = this.ngWizardDataService.resetWizard$.subscribe(() => this._reset());
        this.showNextStepWatcher = this.ngWizardDataService.showNextStep$.subscribe(() => this._showNextStep());
        this.showPreviousStepWatcher = this.ngWizardDataService.showPreviousStep$.subscribe(() => this._showPreviousStep());
        this.showStepWatcher = this.ngWizardDataService.showStep$.subscribe(index => this._showStep(index));
        this.setThemeWatcher = this.ngWizardDataService.setTheme$.subscribe(theme => this._setTheme(theme));
    }
    _init() {
        // set config
        let defaultConfig = this.ngWizardDataService.getDefaultConfig();
        this.config = merge(defaultConfig, this.pConfig);
        // set step states
        this._initSteps();
        // Set the elements
        this._initStyles();
        // Show the initial step
        this._showStep(this.config.selected);
    }
    _initSteps() {
        this.steps.forEach((step, index) => {
            step.index = index;
            step.status = step.status || STEP_STATUS.untouched;
            step.state = step.state || STEP_STATE.normal;
        });
        // Mark previous steps of the active step as done
        if (this.config.selected > 0
            && this.config.anchorSettings.markDoneStep
            && this.config.anchorSettings.markAllPreviousStepsAsDone) {
            this.steps.forEach(step => {
                if (step.state != STEP_STATE.disabled && step.state != STEP_STATE.hidden) {
                    step.status = step.index < this.config.selected ? STEP_STATUS.done : step.status;
                }
            });
        }
    }
    _backupStepStates() {
        this.steps.forEach(step => {
            step.initialStatus = step.status;
            step.initialState = step.state;
        });
    }
    _restoreStepStates() {
        this.steps.forEach(step => {
            step.status = step.initialStatus;
            step.state = step.initialState;
        });
    }
    // PRIVATE FUNCTIONS
    _initStyles() {
        // Set the main element
        this.styles.main = 'ng-wizard-main ng-wizard-theme-' + this.config.theme;
        // Set anchor elements
        this.styles.step = 'nav-item'; // li
        // Make the anchor clickable
        if (this.config.anchorSettings.enableAllAnchors && this.config.anchorSettings.anchorClickable) {
            this.styles.step += ' clickable';
        }
        // Set the toolbar styles
        this.styles.toolbarTop = 'btn-toolbar ng-wizard-toolbar ng-wizard-toolbar-top justify-content-' + this.config.toolbarSettings.toolbarButtonPosition;
        this.styles.toolbarBottom = 'btn-toolbar ng-wizard-toolbar ng-wizard-toolbar-bottom justify-content-' + this.config.toolbarSettings.toolbarButtonPosition;
        // Set previous&next buttons 
        this.styles.previousButton = 'btn btn-secondary ng-wizard-btn-prev';
        this.styles.nextButton = 'btn btn-secondary ng-wizard-btn-next';
    }
    _setToolbar() {
        this.showToolbarTop = this.config.toolbarSettings.toolbarPosition == TOOLBAR_POSITION.top ||
            this.config.toolbarSettings.toolbarPosition == TOOLBAR_POSITION.both;
        this.showToolbarBottom = this.config.toolbarSettings.toolbarPosition == TOOLBAR_POSITION.bottom ||
            this.config.toolbarSettings.toolbarPosition == TOOLBAR_POSITION.both;
        this.showPreviousButton = this.config.toolbarSettings.showPreviousButton;
        this.showNextButton = this.config.toolbarSettings.showNextButton;
        this.showExtraButtons = this.config.toolbarSettings.toolbarExtraButtons && this.config.toolbarSettings.toolbarExtraButtons.length > 0;
    }
    _setEvents() {
        //TODO: keyNavigation
        // Keyboard navigation event
        if (this.config.keyNavigation) {
            // $(document).keyup(function (e) {
            //   mi._keyNav(e);
            // });
        }
    }
    _getStepCssClass(selectedStep) {
        let stepClass = this.styles.step;
        switch (selectedStep.state) {
            case STEP_STATE.disabled:
                stepClass += ' disabled';
                break;
            case STEP_STATE.error:
                stepClass += ' danger';
                break;
            case STEP_STATE.hidden:
                stepClass += ' hidden';
                break;
        }
        switch (selectedStep.status) {
            case STEP_STATUS.done:
                stepClass += ' done';
                break;
            case STEP_STATUS.active:
                stepClass += ' active';
                break;
        }
        return stepClass;
    }
    _showSelectedStep(event, selectedStep) {
        event.preventDefault();
        if (!this.config.anchorSettings.anchorClickable) {
            return;
        }
        if (!this.config.anchorSettings.enableAnchorOnDoneStep && selectedStep.status == STEP_STATUS.done) {
            return true;
        }
        if (selectedStep.index != this.currentStepIndex) {
            if (this.config.anchorSettings.enableAllAnchors && this.config.anchorSettings.anchorClickable) {
                this._showStep(selectedStep.index);
            }
            else {
                if (selectedStep.status == STEP_STATUS.done) {
                    this._showStep(selectedStep.index);
                }
            }
        }
    }
    _showNextStep(event) {
        if (event) {
            event.preventDefault();
        }
        // Find the next not disabled & hidden step
        let filteredSteps = this.steps.filter(step => {
            return step.index > (this.currentStepIndex == null ? -1 : this.currentStepIndex)
                && step.state != STEP_STATE.disabled
                && step.state != STEP_STATE.hidden;
        });
        if (filteredSteps.length == 0) {
            if (!this.config.cycleSteps) {
                return;
            }
            this._showStep(0);
        }
        else {
            this._showStep(filteredSteps.shift().index);
        }
    }
    _showPreviousStep(event) {
        if (event) {
            event.preventDefault();
        }
        // Find the previous not disabled & hidden step
        let filteredSteps = this.steps.filter(step => {
            return step.index < (this.currentStepIndex == null && this.config.cycleSteps ? this.steps.length : this.currentStepIndex)
                && step.state != STEP_STATE.disabled
                && step.state != STEP_STATE.hidden;
        });
        if (filteredSteps.length == 0) {
            if (!this.config.cycleSteps) {
                return;
            }
            this._showStep(this.steps.length - 1);
        }
        else {
            this._showStep(filteredSteps.pop().index);
        }
    }
    _showStep(selectedStepIndex) {
        // If step not found, skip
        if (selectedStepIndex >= this.steps.length || selectedStepIndex < 0) {
            return;
        }
        // If current step is requested again, skip
        if (selectedStepIndex == this.currentStepIndex) {
            return;
        }
        let selectedStep = this.steps.toArray()[selectedStepIndex];
        // If it is a disabled or hidden step, skip
        if (selectedStep.state == STEP_STATE.disabled || selectedStep.state == STEP_STATE.hidden) {
            return;
        }
        this._showLoader();
        return this._isStepChangeValid(selectedStep, this.currentStep && this.currentStep.canExit).toPromise()
            .then(isValid => {
            if (isValid) {
                return this._isStepChangeValid(selectedStep, selectedStep.canEnter).toPromise();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(isValid).toPromise();
        })
            .then(isValid => {
            if (isValid) {
                // Load step content
                this._loadStepContent(selectedStep);
            }
        })
            .finally(() => this._hideLoader());
    }
    _isStepChangeValid(selectedStep, condition) {
        if (typeof condition === typeof true) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(condition);
        }
        else if (condition instanceof Function) {
            let direction = this._getStepDirection(selectedStep.index);
            let result = condition({ direction: direction, fromStep: this.currentStep, toStep: selectedStep });
            if (Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(result)) {
                return result;
            }
            else if (typeof result === typeof true) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
    _loadStepContent(selectedStep) {
        // Update controls
        this._setAnchor(selectedStep);
        // Set the buttons based on the step
        this._setButtons(selectedStep.index);
        // Trigger "stepChanged" event
        const args = {
            step: selectedStep,
            previousStep: this.currentStep,
            direction: this._getStepDirection(selectedStep.index),
            position: this._getStepPosition(selectedStep.index)
        };
        this.stepChanged.emit(args);
        this.ngWizardDataService.stepChanged(args);
        // Update the current index
        this.currentStepIndex = selectedStep.index;
        this.currentStep = selectedStep;
    }
    _setAnchor(selectedStep) {
        // Current step anchor > Remove other classes and add done class
        if (this.currentStep) {
            this.currentStep.status = STEP_STATUS.untouched;
            if (this.config.anchorSettings.markDoneStep) {
                this.currentStep.status = STEP_STATUS.done;
                if (this.config.anchorSettings.removeDoneStepOnNavigateBack) {
                    this.steps.forEach(step => {
                        if (step.index > selectedStep.index) {
                            step.status = STEP_STATUS.untouched;
                        }
                    });
                }
            }
        }
        // Next step anchor > Remove other classes and add active class
        selectedStep.status = STEP_STATUS.active;
    }
    _setButtons(index) {
        // Previous/Next Button enable/disable based on step
        if (!this.config.cycleSteps) {
            if (0 >= index) {
                this.styles.previousButton = 'btn btn-secondary ng-wizard-btn-prev disabled';
            }
            else {
                this.styles.previousButton = 'btn btn-secondary ng-wizard-btn-prev';
            }
            if (this.steps.length - 1 <= index) {
                this.styles.nextButton = 'btn btn-secondary ng-wizard-btn-next disabled';
            }
            else {
                this.styles.nextButton = 'btn btn-secondary ng-wizard-btn-next';
            }
        }
    }
    _extraButtonClicked(button) {
        if (button.event) {
            button.event();
        }
    }
    // HELPER FUNCTIONS
    _keyNav(event) {
        // Keyboard navigation
        switch (event.which) {
            case 37:
                // left
                this._showPreviousStep(event);
                event.preventDefault();
                break;
            case 39:
                // right
                this._showNextStep(event);
                event.preventDefault();
                break;
            default:
                return; // exit this handler for other keys
        }
    }
    _showLoader() {
        this.styles.main = 'ng-wizard-main ng-wizard-theme-' + this.config.theme + ' ng-wizard-loading';
    }
    _hideLoader() {
        this.styles.main = 'ng-wizard-main ng-wizard-theme-' + this.config.theme;
    }
    _getStepDirection(selectedStepIndex) {
        return (this.currentStepIndex != null && this.currentStepIndex != selectedStepIndex) ?
            (this.currentStepIndex < selectedStepIndex ? STEP_DIRECTIN.forward : STEP_DIRECTIN.backward) : null;
    }
    _getStepPosition(selectedStepIndex) {
        return (selectedStepIndex == 0) ? STEP_POSITION.first : (selectedStepIndex == this.steps.length - 1 ? STEP_POSITION.final : STEP_POSITION.middle);
    }
    // PUBLIC FUNCTIONS
    _setTheme(theme) {
        if (this.config.theme == theme) {
            return false;
        }
        this.config.theme = theme;
        this.styles.main = 'ng-wizard-main ng-wizard-theme-' + this.config.theme;
        // Trigger "themeChanged" event
        this.themeChanged.emit(this.config.theme);
    }
    _reset() {
        // Reset all elements and classes
        this.currentStepIndex = null;
        this.currentStep = null;
        this._restoreStepStates();
        this._init();
        // Trigger "reseted" event
        this.reseted.emit();
    }
    ngOnDestroy() {
        if (this.resetWizardWatcher) {
            this.resetWizardWatcher.unsubscribe();
        }
        if (this.showNextStepWatcher) {
            this.showNextStepWatcher.unsubscribe();
        }
        if (this.showPreviousStepWatcher) {
            this.showPreviousStepWatcher.unsubscribe();
        }
        if (this.showStepWatcher) {
            this.showStepWatcher.unsubscribe();
        }
        if (this.setThemeWatcher) {
            this.setThemeWatcher.unsubscribe();
        }
    }
};
NgWizardComponent.ctorParameters = () => [
    { type: NgWizardDataService }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(NgWizardStep),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], NgWizardComponent.prototype, "steps", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('config'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], NgWizardComponent.prototype, "pConfig", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgWizardComponent.prototype, "stepChanged", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgWizardComponent.prototype, "themeChanged", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgWizardComponent.prototype, "reseted", void 0);
NgWizardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ng-wizard',
        template: "<div id=\"ngwizard\" [ngClass]=\"styles.main\">\r\n    <ul class=\"nav nav-tabs step-anchor\">\r\n        <li *ngFor=\"let step of steps; let i = index\" [ngClass]=\"_getStepCssClass(step)\">\r\n            <a href=\"#step-{{ i }}\" (click)=\"_showSelectedStep($event, step)\" *ngIf=\"!step.isHidden\"\r\n                class=\"nav-link\">{{ step.title }}<br /><small>{{ step.description }}</small></a>\r\n        </li>\r\n    </ul>\r\n\r\n    <div *ngIf=\"showToolbarTop\" [ngClass]=\"styles.toolbarTop\">\r\n        <div class=\"btn-group mr-2 ng-wizard-btn-group\" role=\"group\">\r\n            <button *ngIf=\"showPreviousButton\" [ngClass]=\"styles.previousButton\" type=\"button\"\r\n                (click)=\"_showPreviousStep($event)\">{{ config!.lang!.previous }}</button>\r\n            <button *ngIf=\"showNextButton\" [ngClass]=\"styles.nextButton\" type=\"button\"\r\n                (click)=\"_showNextStep($event)\">{{ config!.lang!.next }}</button>\r\n        </div>\r\n\r\n        <div *ngIf=\"showExtraButtons\" class=\"btn-group mr-2 ng-wizard-btn-group-extra\" role=\"group\">\r\n            <button *ngFor=\"let button of config!.toolbarSettings!.toolbarExtraButtons; let j = index\"\r\n                [ngClass]=\"button.class\" type=\"button\" (click)=\"_extraButtonClicked(button)\">{{ button.text }}</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ng-wizard-container tab-content\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n\r\n    <div *ngIf=\"showToolbarBottom\" [ngClass]=\"styles.toolbarBottom\">\r\n        <div class=\"btn-group mr-2 ng-wizard-btn-group\" role=\"group\">\r\n            <button *ngIf=\"showPreviousButton\" [ngClass]=\"styles.previousButton\" type=\"button\"\r\n                (click)=\"_showPreviousStep($event)\">{{ config!.lang!.previous }}</button>\r\n            <button *ngIf=\"showNextButton\" [ngClass]=\"styles.nextButton\" type=\"button\"\r\n                (click)=\"_showNextStep($event)\">{{ config!.lang!.next }}</button>\r\n        </div>\r\n\r\n        <div *ngIf=\"showExtraButtons\" class=\"btn-group mr-2 ng-wizard-btn-group-extra\" role=\"group\">\r\n            <button *ngFor=\"let button of config!.toolbarSettings!.toolbarExtraButtons; let j = index\"\r\n                [ngClass]=\"button.class\" type=\"button\" (click)=\"_extraButtonClicked(button)\">{{ button.text }}</button>\r\n        </div>\r\n    </div>\r\n</div>",
        styles: [""]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [NgWizardDataService])
], NgWizardComponent);

var NgWizardModule_1;
let NgWizardModule = NgWizardModule_1 = class NgWizardModule {
    /**
     * forRoot
     * @returns A module with its provider dependencies
     */
    static forRoot(ngWizardConfig) {
        return {
            ngModule: NgWizardModule_1,
            providers: [
                {
                    provide: NG_WIZARD_CONFIG_TOKEN,
                    useValue: ngWizardConfig
                }
            ]
        };
    }
};
NgWizardModule = NgWizardModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        declarations: [NgWizardComponent, NgWizardStepComponent, NgWizardStepContentDirective],
        exports: [NgWizardComponent, NgWizardStepComponent]
    })
], NgWizardModule);

/*
 * Public API Surface of ng-wizard
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-wizard.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/productionorder/poheads/poheads.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/productionorder/poheads/poheads.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-wizard [config]=\"config\" (stepChanged)=\"stepChanged($event)\">\r\n  \r\n    <ng-wizard-step [title]=\"'Step 1'\" [description]=\"'Step 1 description'\"\r\n      [canEnter]=\"isValidTypeBoolean\" [canExit]=\"isValidFunctionReturnsBoolean.bind(this)\">\r\n      <span>Step 1 content</span>\r\n    </ng-wizard-step>\r\n    \r\n    <ng-wizard-step [title]=\"'Step 2'\" [description]=\"'Step 2 description'\" [state]=\"stepStates.disabled\">\r\n      <span>Step 2 content</span>\r\n    </ng-wizard-step>\r\n    \r\n    <ng-wizard-step [title]=\"'Step 3'\" [description]=\"'Step 3 description'\"\r\n      [canEnter]=\"isValidFunctionReturnsObservable.bind(this)\" [canExit]=\"isValidFunctionReturnsBoolean.bind(this)\">\r\n      <span>Step 3 content</span>\r\n    </ng-wizard-step>\r\n   \r\n  <ng-wizard-step [title]=\"'Step 4'\" [description]=\"'Step 4 description'\">\r\n      <span>Step 4 content</span>\r\n    </ng-wizard-step>\r\n   \r\n    <ng-wizard-step [title]=\"'Step 5'\" [description]=\"'Step 5 description'\" [state]=\"stepStates.hidden\">\r\n      <span>Step 5 content</span>\r\n    </ng-wizard-step>\r\n    \r\n    <ng-wizard-step [title]=\"'Step 6'\" [description]=\"'Step 6 description'\" [state]=\"stepStates.error\">\r\n      <span>Step 6 content</span>\r\n    </ng-wizard-step>\r\n    \r\n    <ng-wizard-step [title]=\"'Step 7'\" [description]=\"'Step 7 description'\">\r\n      <span>Step 7 content</span>\r\n    </ng-wizard-step>\r\n  </ng-wizard>\r\n<!-- <smart-crud-panel \r\n    title=\"Poheads\" \r\n    icon=\"fal fa-users\" \r\n    [columns]=\"columns\"\r\n    [selectAllSelector]=\"selectAllSelector\"\r\n    [selectCurrent]=\"selectCurrent\"\r\n    [form] =\"form\"\r\n    [deleteable]=\"true\"\r\n    [editable]=\"true\"\r\n    formTitle=\"Pohead\"\r\n    itemName=\"Pohead\"\r\n    modalClass ='modal-lg'\r\n    >\r\n\r\n    <h2 title><i class=\"fal fa-list\"></i>&nbsp;Po Head</h2>\r\n    \r\n</smart-crud-panel> -->\r\n"

/***/ }),

/***/ "./src/app/features/productionorder/poheads/poheads.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/productionorder/poheads/poheads.component.ts ***!
  \***********************************************************************/
/*! exports provided: PoheadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoheadsComponent", function() { return PoheadsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ng_wizard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-wizard */ "./node_modules/ng-wizard/fesm2015/ng-wizard.js");




let PoheadsComponent = class PoheadsComponent {
    constructor(ngWizardService) {
        this.ngWizardService = ngWizardService;
        this.stepStates = {
            normal: ng_wizard__WEBPACK_IMPORTED_MODULE_3__["STEP_STATE"].normal,
            disabled: ng_wizard__WEBPACK_IMPORTED_MODULE_3__["STEP_STATE"].disabled,
            error: ng_wizard__WEBPACK_IMPORTED_MODULE_3__["STEP_STATE"].error,
            hidden: ng_wizard__WEBPACK_IMPORTED_MODULE_3__["STEP_STATE"].hidden
        };
        this.config = {
            selected: 0,
            theme: ng_wizard__WEBPACK_IMPORTED_MODULE_3__["THEME"].arrows,
            toolbarSettings: {
                toolbarExtraButtons: [
                    { text: 'Finish', class: 'btn btn-info', event: () => { alert("Finished!!!"); } }
                ],
            }
        };
        this.isValidTypeBoolean = true;
    }
    ngOnInit() {
    }
    showPreviousStep(event) {
        this.ngWizardService.previous();
    }
    showNextStep(event) {
        this.ngWizardService.next();
    }
    resetWizard(event) {
        this.ngWizardService.reset();
    }
    setTheme(theme) {
        this.ngWizardService.theme(theme);
    }
    stepChanged(args) {
        console.log(args.step);
    }
    isValidFunctionReturnsBoolean(args) {
        return true;
    }
    isValidFunctionReturnsObservable(args) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
};
PoheadsComponent.ctorParameters = () => [
    { type: ng_wizard__WEBPACK_IMPORTED_MODULE_3__["NgWizardService"] }
];
PoheadsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-poheads',
        template: __webpack_require__(/*! raw-loader!./poheads.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/productionorder/poheads/poheads.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_wizard__WEBPACK_IMPORTED_MODULE_3__["NgWizardService"]])
], PoheadsComponent);



/***/ }),

/***/ "./src/app/features/productionorder/productionorder.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/productionorder/productionorder.module.ts ***!
  \********************************************************************/
/*! exports provided: ProductionorderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionorderModule", function() { return ProductionorderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_custom_tables_custom_tables_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/custom-tables/custom-tables.module */ "./src/app/shared/custom-tables/custom-tables.module.ts");
/* harmony import */ var _shared_dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/dialogs/dialogs.module */ "./src/app/shared/dialogs/dialogs.module.ts");
/* harmony import */ var _shared_forms_forms_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/forms/forms.module */ "./src/app/shared/forms/forms.module.ts");
/* harmony import */ var ng_wizard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-wizard */ "./node_modules/ng-wizard/fesm2015/ng-wizard.js");
/* harmony import */ var _poheads_poheads_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./poheads/poheads.component */ "./src/app/features/productionorder/poheads/poheads.component.ts");
/* harmony import */ var src_app_features_store_productionorder_pohead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/features/store/productionorder/pohead */ "./src/app/features/store/productionorder/pohead/index.ts");
/* harmony import */ var src_app_features_store_customer_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/features/store/customer/client */ "./src/app/features/store/customer/client/index.ts");
/* harmony import */ var src_app_features_store_customer_customer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/features/store/customer/customer */ "./src/app/features/store/customer/customer/index.ts");
/* harmony import */ var src_app_features_store_settings_factorycode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/features/store/settings/factorycode */ "./src/app/features/store/settings/factorycode/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");










const ngWizardConfig = {
    theme: ng_wizard__WEBPACK_IMPORTED_MODULE_9__["THEME"].default
};
//component imports

//store imports





let ProductionorderModule = class ProductionorderModule {
};
ProductionorderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [_poheads_poheads_component__WEBPACK_IMPORTED_MODULE_10__["PoheadsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _shared_custom_tables_custom_tables_module__WEBPACK_IMPORTED_MODULE_6__["CustomTablesModule"],
            _shared_dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_7__["DialogsModule"],
            _shared_forms_forms_module__WEBPACK_IMPORTED_MODULE_8__["CustomFormsModule"],
            ng_wizard__WEBPACK_IMPORTED_MODULE_9__["NgWizardModule"].forRoot(ngWizardConfig),
            //store for feature
            _ngrx_store__WEBPACK_IMPORTED_MODULE_15__["StoreModule"].forFeature(src_app_features_store_productionorder_pohead__WEBPACK_IMPORTED_MODULE_11__["poheadFeatureKey"], src_app_features_store_productionorder_pohead__WEBPACK_IMPORTED_MODULE_11__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_15__["StoreModule"].forFeature(src_app_features_store_customer_client__WEBPACK_IMPORTED_MODULE_12__["clientFeatureKey"], src_app_features_store_customer_client__WEBPACK_IMPORTED_MODULE_12__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_15__["StoreModule"].forFeature(src_app_features_store_customer_customer__WEBPACK_IMPORTED_MODULE_13__["customerFeatureKey"], src_app_features_store_customer_customer__WEBPACK_IMPORTED_MODULE_13__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_15__["StoreModule"].forFeature(src_app_features_store_settings_factorycode__WEBPACK_IMPORTED_MODULE_14__["factorycodeFeatureKey"], src_app_features_store_settings_factorycode__WEBPACK_IMPORTED_MODULE_14__["reducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature([src_app_features_store_productionorder_pohead__WEBPACK_IMPORTED_MODULE_11__["PoheadEffects"], src_app_features_store_customer_client__WEBPACK_IMPORTED_MODULE_12__["ClientEffects"], src_app_features_store_customer_customer__WEBPACK_IMPORTED_MODULE_13__["CustomerEffects"], src_app_features_store_settings_factorycode__WEBPACK_IMPORTED_MODULE_14__["FactorycodeEffects"]]),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                { path: '', pathMatch: 'full', redirectTo: 'poheads' },
                { path: 'poheads', component: _poheads_poheads_component__WEBPACK_IMPORTED_MODULE_10__["PoheadsComponent"] },
            ])
        ],
        entryComponents: []
    })
], ProductionorderModule);



/***/ }),

/***/ "./src/app/features/store/productionorder/pohead/index.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/store/productionorder/pohead/index.ts ***!
  \****************************************************************/
/*! exports provided: PoheadEffects, PoheadService, selectAllPoheads, allPoheadLoaded, selectCurrentPohead, poheadFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, loadPoheads, loadPoheadsSuccess, addPohead, addPoheadSuccess, deletePohead, deletePoheadSuccess, selectCurrentPoheadSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pohead_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pohead.effects */ "./src/app/features/store/productionorder/pohead/pohead.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PoheadEffects", function() { return _pohead_effects__WEBPACK_IMPORTED_MODULE_0__["PoheadEffects"]; });

/* harmony import */ var _pohead_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pohead.service */ "./src/app/features/store/productionorder/pohead/pohead.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PoheadService", function() { return _pohead_service__WEBPACK_IMPORTED_MODULE_1__["PoheadService"]; });

/* harmony import */ var _pohead_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pohead.selectors */ "./src/app/features/store/productionorder/pohead/pohead.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllPoheads", function() { return _pohead_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllPoheads"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allPoheadLoaded", function() { return _pohead_selectors__WEBPACK_IMPORTED_MODULE_2__["allPoheadLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentPohead", function() { return _pohead_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCurrentPohead"]; });

/* harmony import */ var _pohead_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pohead.reducer */ "./src/app/features/store/productionorder/pohead/pohead.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "poheadFeatureKey", function() { return _pohead_reducer__WEBPACK_IMPORTED_MODULE_3__["poheadFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _pohead_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _pohead_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _pohead_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return _pohead_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return _pohead_reducer__WEBPACK_IMPORTED_MODULE_3__["selectEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _pohead_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return _pohead_reducer__WEBPACK_IMPORTED_MODULE_3__["selectTotal"]; });

/* harmony import */ var _pohead_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pohead.actions */ "./src/app/features/store/productionorder/pohead/pohead.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadPoheads", function() { return _pohead_actions__WEBPACK_IMPORTED_MODULE_4__["loadPoheads"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadPoheadsSuccess", function() { return _pohead_actions__WEBPACK_IMPORTED_MODULE_4__["loadPoheadsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPohead", function() { return _pohead_actions__WEBPACK_IMPORTED_MODULE_4__["addPohead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPoheadSuccess", function() { return _pohead_actions__WEBPACK_IMPORTED_MODULE_4__["addPoheadSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deletePohead", function() { return _pohead_actions__WEBPACK_IMPORTED_MODULE_4__["deletePohead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deletePoheadSuccess", function() { return _pohead_actions__WEBPACK_IMPORTED_MODULE_4__["deletePoheadSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentPoheadSuccess", function() { return _pohead_actions__WEBPACK_IMPORTED_MODULE_4__["selectCurrentPoheadSuccess"]; });








/***/ }),

/***/ "./src/app/features/store/productionorder/pohead/pohead.actions.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/productionorder/pohead/pohead.actions.ts ***!
  \*************************************************************************/
/*! exports provided: loadPoheads, loadPoheadsSuccess, addPohead, addPoheadSuccess, deletePohead, deletePoheadSuccess, selectCurrentPoheadSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPoheads", function() { return loadPoheads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPoheadsSuccess", function() { return loadPoheadsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPohead", function() { return addPohead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPoheadSuccess", function() { return addPoheadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePohead", function() { return deletePohead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePoheadSuccess", function() { return deletePoheadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentPoheadSuccess", function() { return selectCurrentPoheadSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const loadPoheads = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Pohead/API] Load Poheads');
const loadPoheadsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Pohead/API] Load Poheads Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addPohead = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Pohead/API] Add Pohead', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addPoheadSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Pohead/API] Add Pohead Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deletePohead = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Pohead/API] Delete Pohead', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deletePoheadSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Pohead/API] Delete Pohead Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectCurrentPoheadSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Pohead/API] Select Current Pohead', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/features/store/productionorder/pohead/pohead.effects.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/productionorder/pohead/pohead.effects.ts ***!
  \*************************************************************************/
/*! exports provided: PoheadEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoheadEffects", function() { return PoheadEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _pohead_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pohead.service */ "./src/app/features/store/productionorder/pohead/pohead.service.ts");
/* harmony import */ var _pohead_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pohead.actions */ "./src/app/features/store/productionorder/pohead/pohead.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _pohead_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pohead.selectors */ "./src/app/features/store/productionorder/pohead/pohead.selectors.ts");








let PoheadEffects = class PoheadEffects {
    constructor(actions$, store, service) {
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.loadPoheads$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_pohead_actions__WEBPACK_IMPORTED_MODULE_5__["loadPoheads"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_pohead_selectors__WEBPACK_IMPORTED_MODULE_7__["allPoheadLoaded"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(([_, allLoaded]) => !allLoaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(_ => this.service.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_pohead_actions__WEBPACK_IMPORTED_MODULE_5__["loadPoheadsSuccess"])({ data }))))));
        this.addPohead$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_pohead_actions__WEBPACK_IMPORTED_MODULE_5__["addPohead"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(action => this.service.save(action.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => Object(_pohead_actions__WEBPACK_IMPORTED_MODULE_5__["addPoheadSuccess"])({ data }))))));
        this.deletePohead$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_pohead_actions__WEBPACK_IMPORTED_MODULE_5__["deletePohead"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(({ data }) => this.service.delete(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_ => Object(_pohead_actions__WEBPACK_IMPORTED_MODULE_5__["deletePoheadSuccess"])({ id: data.id }))))));
    }
};
PoheadEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _pohead_service__WEBPACK_IMPORTED_MODULE_4__["PoheadService"] }
];
PoheadEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _pohead_service__WEBPACK_IMPORTED_MODULE_4__["PoheadService"]])
], PoheadEffects);



/***/ }),

/***/ "./src/app/features/store/productionorder/pohead/pohead.reducer.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/productionorder/pohead/pohead.reducer.ts ***!
  \*************************************************************************/
/*! exports provided: poheadFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poheadFeatureKey", function() { return poheadFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _pohead_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pohead.actions */ "./src/app/features/store/productionorder/pohead/pohead.actions.ts");



const poheadFeatureKey = 'poheads';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    allPoheadsLoaded: false,
    currentPohead: null
});
const poheadReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_pohead_actions__WEBPACK_IMPORTED_MODULE_2__["addPoheadSuccess"], (state, action) => adapter.upsertOne(action.data, Object.assign({}, state, { currentPohead: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_pohead_actions__WEBPACK_IMPORTED_MODULE_2__["deletePoheadSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_pohead_actions__WEBPACK_IMPORTED_MODULE_2__["loadPoheadsSuccess"], (state, action) => adapter.addAll(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_pohead_actions__WEBPACK_IMPORTED_MODULE_2__["selectCurrentPoheadSuccess"], (state, action) => (Object.assign({}, state, { currentPohead: action.data }))));
function reducer(state, action) {
    return poheadReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/features/store/productionorder/pohead/pohead.selectors.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/store/productionorder/pohead/pohead.selectors.ts ***!
  \***************************************************************************/
/*! exports provided: selectAllPoheads, allPoheadLoaded, selectCurrentPohead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllPoheads", function() { return selectAllPoheads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPoheadLoaded", function() { return allPoheadLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentPohead", function() { return selectCurrentPohead; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _pohead_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pohead.reducer */ "./src/app/features/store/productionorder/pohead/pohead.reducer.ts");


const featureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_pohead_reducer__WEBPACK_IMPORTED_MODULE_1__["poheadFeatureKey"]);
const selectAllPoheads = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, _pohead_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allPoheadLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.allPoheadsLoaded);
const selectCurrentPohead = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureState, state => state.currentPohead);


/***/ }),

/***/ "./src/app/features/store/productionorder/pohead/pohead.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/store/productionorder/pohead/pohead.service.ts ***!
  \*************************************************************************/
/*! exports provided: PoheadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoheadService", function() { return PoheadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let PoheadService = class PoheadService {
    constructor(http) {
        this.http = http;
        this.url = `${_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].BASE_URL}/production-order-heads/`;
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
PoheadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PoheadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], PoheadService);



/***/ })

}]);
//# sourceMappingURL=features-productionorder-productionorder-module-es2015.js.map