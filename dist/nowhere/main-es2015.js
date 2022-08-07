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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _confess_confess_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confess/confess.component */ "./src/app/confess/confess.component.ts");
/* harmony import */ var _hear_hear_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hear/hear.component */ "./src/app/hear/hear.component.ts");






const routes = [
    { path: 'hear', component: _hear_hear_component__WEBPACK_IMPORTED_MODULE_3__["HearComponent"] },
    { path: 'confess', component: _confess_confess_component__WEBPACK_IMPORTED_MODULE_2__["ConfessComponent"] },
    { path: '', component: _hear_hear_component__WEBPACK_IMPORTED_MODULE_3__["HearComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _theming_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theming.service */ "./src/app/theming.service.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _audio_float_info_audio_float_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audio-float-info/audio-float-info.component */ "./src/app/audio-float-info/audio-float-info.component.ts");
/* harmony import */ var _audio_card_audio_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./audio-card/audio-card.component */ "./src/app/audio-card/audio-card.component.ts");









function AppComponent_app_audio_float_info_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-audio-float-info", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.data);
} }
function AppComponent_app_audio_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-audio-card", 2);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.data);
} }
class AppComponent {
    constructor(overlayContainer, themingService, elementRef) {
        this.overlayContainer = overlayContainer;
        this.themingService = themingService;
        this.elementRef = elementRef;
        this.title = 'nowhere';
        this.isSafari = false;
        this.data = {
            card: {
                unique_id: "1", show: false, type: "audio", userId: "@monkey504564", title: "Billie Eilish Contemplates Distraction, and 10 More New Songs. Listen one now!and don't judge me for my actions.",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat."
            }
        };
    }
    ngAfterViewChecked() {
        if (this.themingService.theme.value !== 'light-theme') {
            this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#0B0B0B";
        }
        else {
            this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#D6CCC1";
        }
    }
    ngOnDestroy() {
        this.themingSubscription.unsubscribe();
    }
    ngOnInit() {
        this.themingSubscription = this.themingService.theme.subscribe((theme) => {
            this.cssClass = theme;
            this.themingService.applyThemeOnOverlays(this.overlayContainer, this.themingService, this.cssClass);
        });
        if (this.getBrowserName() === 'safari') {
            this.isSafari = true;
        }
    }
    getBrowserName() {
        const agent = window.navigator.userAgent.toLowerCase();
        switch (true) {
            case agent.indexOf('edge') > -1:
                return 'edge';
            case agent.indexOf('opr') > -1 && !!window.opr:
                return 'opera';
            case agent.indexOf('chrome') > -1 && !!window.chrome:
                return 'chrome';
            case agent.indexOf('trident') > -1:
                return 'ie';
            case agent.indexOf('firefox') > -1:
                return 'firefox';
            case agent.indexOf('safari') > -1:
                return 'safari';
            default:
                return 'other';
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theming_service__WEBPACK_IMPORTED_MODULE_2__["ThemingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostVars: 2, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.cssClass);
    } }, decls: 6, vars: 2, consts: [[1, "content"], [3, "data", 4, "ngIf"], [3, "data"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_app_audio_float_info_4_Template, 1, 1, "app-audio-float-info", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_app_audio_card_5_Template, 1, 1, "app-audio-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSafari);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSafari);
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _audio_float_info_audio_float_info_component__WEBPACK_IMPORTED_MODULE_6__["AudioFloatInfoComponent"], _audio_card_audio_card_component__WEBPACK_IMPORTED_MODULE_7__["AudioCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"] }, { type: _theming_service__WEBPACK_IMPORTED_MODULE_2__["ThemingService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { cssClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _confess_confess_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./confess/confess.component */ "./src/app/confess/confess.component.ts");
/* harmony import */ var _hear_hear_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hear/hear.component */ "./src/app/hear/hear.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _cards_grid_cards_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cards-grid/cards-grid.component */ "./src/app/cards-grid/cards-grid.component.ts");
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-masonry */ "./node_modules/ngx-masonry/__ivy_ngcc__/fesm2015/ngx-masonry.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _theming_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./theming.service */ "./src/app/theming.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _card_audio_card_audio_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./card-audio/card-audio.component */ "./src/app/card-audio/card-audio.component.ts");
/* harmony import */ var _card_small_wave_card_small_wave_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./card-small-wave/card-small-wave.component */ "./src/app/card-small-wave/card-small-wave.component.ts");
/* harmony import */ var _audio_card_modal_audio_card_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./audio-card-modal/audio-card-modal.component */ "./src/app/audio-card-modal/audio-card-modal.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _audio_card_audio_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./audio-card/audio-card.component */ "./src/app/audio-card/audio-card.component.ts");
/* harmony import */ var _shared_communication_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/communication.service */ "./src/app/shared/communication.service.ts");
/* harmony import */ var _audio_float_info_audio_float_info_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./audio-float-info/audio-float-info.component */ "./src/app/audio-float-info/audio-float-info.component.ts");
/* harmony import */ var _custom_wave_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./custom-wave/module */ "./src/app/custom-wave/module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");




























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_15__["PathLocationStrategy"],
        }, { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { appearance: 'fill' } },
        { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: true } },
        _theming_service__WEBPACK_IMPORTED_MODULE_13__["ThemingService"],
        _shared_communication_service__WEBPACK_IMPORTED_MODULE_22__["CommunicationService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            ngx_masonry__WEBPACK_IMPORTED_MODULE_11__["NgxMasonryModule"],
            _custom_wave_module__WEBPACK_IMPORTED_MODULE_24__["CustWebAudioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_25__["PipesModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'nowhere' }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
        _confess_confess_component__WEBPACK_IMPORTED_MODULE_7__["ConfessComponent"],
        _hear_hear_component__WEBPACK_IMPORTED_MODULE_8__["HearComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"],
        _cards_grid_cards_grid_component__WEBPACK_IMPORTED_MODULE_10__["CardsGridComponent"],
        _card_audio_card_audio_component__WEBPACK_IMPORTED_MODULE_16__["CardAudioComponent"],
        _card_small_wave_card_small_wave_component__WEBPACK_IMPORTED_MODULE_17__["CardSmallWaveComponent"],
        _audio_card_modal_audio_card_modal_component__WEBPACK_IMPORTED_MODULE_18__["AudioCardModalComponent"],
        _audio_card_audio_card_component__WEBPACK_IMPORTED_MODULE_21__["AudioCardComponent"],
        _audio_float_info_audio_float_info_component__WEBPACK_IMPORTED_MODULE_23__["AudioFloatInfoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        ngx_masonry__WEBPACK_IMPORTED_MODULE_11__["NgxMasonryModule"],
        _custom_wave_module__WEBPACK_IMPORTED_MODULE_24__["CustWebAudioModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_25__["PipesModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
                    _confess_confess_component__WEBPACK_IMPORTED_MODULE_7__["ConfessComponent"],
                    _hear_hear_component__WEBPACK_IMPORTED_MODULE_8__["HearComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"],
                    _cards_grid_cards_grid_component__WEBPACK_IMPORTED_MODULE_10__["CardsGridComponent"],
                    _card_audio_card_audio_component__WEBPACK_IMPORTED_MODULE_16__["CardAudioComponent"],
                    _card_small_wave_card_small_wave_component__WEBPACK_IMPORTED_MODULE_17__["CardSmallWaveComponent"],
                    _audio_card_modal_audio_card_modal_component__WEBPACK_IMPORTED_MODULE_18__["AudioCardModalComponent"],
                    _audio_card_audio_card_component__WEBPACK_IMPORTED_MODULE_21__["AudioCardComponent"],
                    _audio_float_info_audio_float_info_component__WEBPACK_IMPORTED_MODULE_23__["AudioFloatInfoComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                    ngx_masonry__WEBPACK_IMPORTED_MODULE_11__["NgxMasonryModule"],
                    _custom_wave_module__WEBPACK_IMPORTED_MODULE_24__["CustWebAudioModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_25__["PipesModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'nowhere' }),
                ],
                providers: [{
                        provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__["LocationStrategy"],
                        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_15__["PathLocationStrategy"],
                    }, { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { appearance: 'fill' } },
                    { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: true } },
                    _theming_service__WEBPACK_IMPORTED_MODULE_13__["ThemingService"],
                    _shared_communication_service__WEBPACK_IMPORTED_MODULE_22__["CommunicationService"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/audio-card-modal/audio-card-modal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/audio-card-modal/audio-card-modal.component.ts ***!
  \****************************************************************/
/*! exports provided: AudioCardModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioCardModalComponent", function() { return AudioCardModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wavesurfer.js */ "./node_modules/wavesurfer.js/dist/wavesurfer.min.js");
/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wavesurfer_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");










function AudioCardModalComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioCardModalComponent_div_24_Template_mat_icon_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onPlayStopPressed($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.musicButton, "");
} }
function AudioCardModalComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AudioCardModalComponent {
    constructor(cdr, dialogRef, data, config) {
        this.cdr = cdr;
        this.dialogRef = dialogRef;
        this.data = data;
        this.config = config;
        this.wave = null;
        this.loading = true;
        this.loaded = false;
        this.url = "assets/mp3/sample.mp3";
        this.musicButton = "not_started";
        this.duration = "1:00";
    }
    ngOnInit() {
        this.card = this.data.card;
        this.loading = false;
        this.dialogRef.updatePosition({ top: '100px' });
        this.dialogRef.afterClosed().subscribe(result => {
            if (this.wave)
                this.onStopPressed();
        });
    }
    ngAfterViewChecked() {
        if (this.wave) {
            this.getDuration();
            this.cdr.detectChanges();
        }
    }
    generateWaveform() {
        this.loading = true;
        Promise.resolve(null).then(() => {
            this.wave = wavesurfer_js__WEBPACK_IMPORTED_MODULE_2___default.a.create({
                container: '#waveform',
                waveColor: '#f47037',
                hideScrollbar: true,
                height: 52,
                progressColor: 'gray',
            });
            this.wave.hideScrollbar = true;
            this.wave.on('ready', () => {
                this.dialogRef.disableClose = true;
                this.loading = false;
                this.loaded = true;
                this.wave.play();
                this.getDuration();
                this.cdr.detectChanges();
            });
        });
    }
    onPlayStopPressed(button) {
        if (button.textContent.trim() === 'not_started' && !this.loading) {
            this.musicButton = "pause_circle_filled";
            button.textContent = 'pause_circle_filled';
            this.onPlayPressed();
        }
        else if (button.textContent.trim() === 'play_circle_filled') {
            button.textContent = 'pause_circle_filled';
            this.wave.playPause();
        }
        else {
            button.textContent = 'play_circle_filled';
            this.onPausePressed();
        }
    }
    onPlayPressed() {
        if (!this.wave) {
            this.generateWaveform();
        }
        this.cdr.detectChanges();
        Promise.resolve().then(() => this.wave.load(this.url));
    }
    onStopPressed() {
        this.wave.stop();
    }
    onPausePressed() {
        this.wave.pause();
    }
    getDuration() {
        let secs = this.wave.getDuration();
        this.duration = Math.floor(secs / 60) + " : " + ("0" + Math.floor(secs - 60 * Math.floor(secs / 60))).slice(-2);
    }
    onClickDismiss() {
        this.dialogRef.close();
    }
}
AudioCardModalComponent.ɵfac = function AudioCardModalComponent_Factory(t) { return new (t || AudioCardModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DEFAULT_OPTIONS"])); };
AudioCardModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AudioCardModalComponent, selectors: [["app-audio-card-modal"]], decls: 26, vars: 7, consts: [[1, "theme-text-color-prim", "right", "pointer", 3, "click"], ["cdkDrag", "", "cdkDragRootElement", ".cdk-overlay-pane", "cdkDragHandle", "", 1, "grab"], [1, "font-36", "font-merri", "fw-600", "theme-text-color-prim", 2, "line-height", "1.2"], ["aria-label", "Fish selection"], [3, "selectable"], [1, "mb0"], [2, "padding-top", "20px"], [2, "width", "100%"], ["id", "waveform", 1, "pointer", 2, "padding-bottom", "10px"], ["class", "d-flex justify-content-between", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "justify-content-between"], [1, "font-36", "pointer", "color-orange", 3, "click"], ["mode", "buffer"]], template: function AudioCardModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioCardModalComponent_Template_mat_icon_click_2_listener() { return ctx.onClickDismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-chip-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-chip", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Netflix TV Series");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-chip", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Drama");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-chip", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "popcorn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-chip", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "university");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AudioCardModalComponent_div_24_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AudioCardModalComponent_div_25_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["CdkDragHandle"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChip"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1ZGlvLWNhcmQtbW9kYWwvYXVkaW8tY2FyZC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudioCardModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-audio-card-modal',
                templateUrl: './audio-card-modal.component.html',
                styleUrls: ['./audio-card-modal.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DEFAULT_OPTIONS"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/audio-card/audio-card.component.ts":
/*!****************************************************!*\
  !*** ./src/app/audio-card/audio-card.component.ts ***!
  \****************************************************/
/*! exports provided: AudioCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioCardComponent", function() { return AudioCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wavesurfer.js */ "./node_modules/wavesurfer.js/dist/wavesurfer.min.js");
/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wavesurfer_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/communication.service */ "./src/app/shared/communication.service.ts");
/* harmony import */ var _theming_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theming.service */ "./src/app/theming.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");









function AudioCardComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioCardComponent_div_0_div_1_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onClickClosed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AudioCardComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.card.title);
} }
function AudioCardComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-chip-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Netflix TV Series");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Drama");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "popcorn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "university");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", false);
} }
const _c0 = function (a0, a1) { return { "visible": a0, "invisible": a1 }; };
function AudioCardComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioCardComponent_div_0_div_8_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onClickMinimise(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, !ctx_r4.loading, ctx_r4.loading));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.expandMore);
} }
function AudioCardComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 19);
} }
function AudioCardComponent_div_0_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioCardComponent_div_0_mat_icon_10_Template_mat_icon_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.onPlayStopPressed($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.musicButton);
} }
function AudioCardComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1) { return { "w-310": a0, "w-54": a1 }; };
const _c2 = function (a0) { return { "p-13": a0 }; };
function AudioCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AudioCardComponent_div_0_div_1_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AudioCardComponent_div_0_div_5_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AudioCardComponent_div_0_div_6_Template, 14, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AudioCardComponent_div_0_div_8_Template, 3, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AudioCardComponent_div_0_div_9_Template, 1, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AudioCardComponent_div_0_mat_icon_10_Template, 2, 1, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AudioCardComponent_div_0_div_11_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c1, !ctx_r0.closed, ctx_r0.closed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, !ctx_r0.minimise));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.minimise && !ctx_r0.closed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.minimise && !ctx_r0.closed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.closed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.closed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);
} }
class AudioCardComponent {
    constructor(cdr, messageService, themingService) {
        this.cdr = cdr;
        this.messageService = messageService;
        this.themingService = themingService;
        this.wave = null;
        this.loading = true;
        this.minimise = true;
        this.played = false;
        this.closed = false;
        this.chevron = "chevron_left";
        this.url = "assets/mp3/sample.mp3";
        this.musicButton = "not_started";
        this.duration = "1:00";
        this.expandMore = "expand_less";
        this.progressColor = "#7e7e7e";
        this.waveColor = "#d6ccc1";
        this.init = true;
        this.updateTheme();
        this.subscription = this.messageService.getMessage().subscribe(message => {
            if (message.showFloatAudioPlayer === true) {
                if (this.played) {
                    this.destroyPlayer();
                }
                this.played = true;
                console.log(message);
                this.initialisePlayer();
            }
            else if (message.showFloatAudioPlayer === false) {
                this.destroyPlayer();
            }
        });
    }
    updateTheme() {
        if (this.themingService.theme.value === 'light-theme') {
            this.progressColor = "#d6ccc1";
            this.waveColor = "#706d69";
        }
        else {
            this.progressColor = "#0b0b0b";
            this.waveColor = "#929395";
        }
    }
    destroyPlayer() {
        if (this.wave) {
            this.wave.stop();
            this.wave.destroy();
        }
        this.onClickClosed();
        this.played = false;
    }
    ngOnInit() {
        this.minimise = true;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    initialisePlayer() {
        this.updateTheme();
        this.wave = null;
        this.minimise = true;
        this.loading = true;
        this.closed = false;
        this.chevron = "chevron_left";
        this.url = "assets/mp3/sample.mp3";
        this.musicButton = "not_started";
        this.duration = "1:00";
        this.expandMore = "expand_less";
        this.card = this.data.card;
        this.loading = false;
        if (!this.wave) {
            this.generateWaveform();
        }
        this.cdr.detectChanges();
        Promise.resolve().then(() => this.wave.load(this.url));
    }
    generateWaveform() {
        this.loading = true;
        Promise.resolve(null).then(() => {
            this.wave = wavesurfer_js__WEBPACK_IMPORTED_MODULE_1___default.a.create({
                container: '#waveform',
                waveColor: this.waveColor,
                hideScrollbar: true,
                height: 36,
                responsive: true,
                progressColor: this.progressColor,
            });
            this.wave.hideScrollbar = true;
            this.wave.on('ready', () => {
                this.loading = false;
                this.getDuration();
                this.wave.play();
                this.musicButton = "pause_circle_filled";
                this.cdr.detectChanges();
            });
        });
    }
    onPlayStopPressed(button) {
        if (button.textContent.trim() === 'not_started' && !this.loading) {
            this.musicButton = "pause_circle_filled";
            button.textContent = 'pause_circle_filled';
            this.onPlayPressed();
        }
        else if (button.textContent.trim() === 'play_circle_filled') {
            button.textContent = 'pause_circle_filled';
            this.wave.playPause();
        }
        else {
            button.textContent = 'play_circle_filled';
            this.onPausePressed();
        }
    }
    onPlayPressed() {
        this.wave.play();
    }
    onStopPressed() {
        this.wave.stop();
    }
    onPausePressed() {
        this.wave.pause();
    }
    getDuration() {
        let secs = this.wave.getDuration();
        this.duration = Math.floor(secs / 60) + " : " + ("0" + Math.floor(secs - 60 * Math.floor(secs / 60))).slice(-2);
    }
    onClickDismiss() {
    }
    onClickMinimise() {
        this.minimise = !this.minimise;
        this.expandMore = this.minimise ? "expand_less" : "expand_more";
    }
    onClickClosed() {
        this.minimise = true;
        this.expandMore = this.minimise ? "expand_less" : "expand_more";
        this.closed = !this.closed;
        this.chevron = this.closed ? "chevron_right" : "chevron_left";
    }
}
AudioCardComponent.ɵfac = function AudioCardComponent_Factory(t) { return new (t || AudioCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_communication_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theming_service__WEBPACK_IMPORTED_MODULE_3__["ThemingService"])); };
AudioCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AudioCardComponent, selectors: [["app-audio-card"]], inputs: { data: "data" }, decls: 1, vars: 1, consts: [["class", "fixed", 4, "ngIf"], [1, "fixed"], ["style", "display: inline-block;", 4, "ngIf"], [1, "card-bg", 2, "display", "inline-block", 3, "ngClass"], [3, "ngClass"], [4, "ngIf"], ["class", "mb2", 4, "ngIf"], ["style", "display: inline-block; padding-bottom: 7px; padding-left: 2px;", 3, "ngClass", 4, "ngIf"], ["id", "waveform", "class", "pointer", "style", "display: inline-block; width: 228px;", 4, "ngIf"], ["class", "font-36 pointer color-accent-play", "style", "display: inline-block", 3, "click", 4, "ngIf"], [2, "display", "inline-block"], [1, "theme-text-color-prim", "right", "pointer", "mb-6", "mr-1", "chevron", 3, "click"], [1, "font-24", "font-merri", "fw-600", "color-accent", "grab", 2, "line-height", "1.2"], [1, "mb2"], ["aria-label", "Fish selection"], [3, "selectable"], [1, "mb0"], [2, "display", "inline-block", "padding-bottom", "7px", "padding-left", "2px", 3, "ngClass"], [1, "color-accent", "right", "pointer", 3, "click"], ["id", "waveform", 1, "pointer", 2, "display", "inline-block", "width", "228px"], [1, "font-36", "pointer", "color-accent-play", 2, "display", "inline-block", 3, "click"], ["mode", "buffer", 1, "buffer-position-1"]], template: function AudioCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AudioCardComponent_div_0_Template, 12, 14, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.played);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChip"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1ZGlvLWNhcmQvYXVkaW8tY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudioCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-audio-card',
                templateUrl: './audio-card.component.html',
                styleUrls: ['./audio-card.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _shared_communication_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationService"] }, { type: _theming_service__WEBPACK_IMPORTED_MODULE_3__["ThemingService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/audio-float-info/audio-float-info.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/audio-float-info/audio-float-info.component.ts ***!
  \****************************************************************/
/*! exports provided: AudioFloatInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioFloatInfoComponent", function() { return AudioFloatInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_communication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/communication.service */ "./src/app/shared/communication.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");







function AudioFloatInfoComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.card.title);
} }
function AudioFloatInfoComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-chip-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Netflix TV Series");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Drama");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "popcorn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "university");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", false);
} }
const _c0 = function (a0, a1) { return { "visible": a0, "invisible": a1 }; };
function AudioFloatInfoComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioFloatInfoComponent_div_0_div_10_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onClickMinimise(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, !ctx_r3.loading, ctx_r3.loading));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.expandMore);
} }
function AudioFloatInfoComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioFloatInfoComponent_div_0_div_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.onClickMinimise(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r4.minimise, !ctx_r4.minimise));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.card.title);
} }
function AudioFloatInfoComponent_div_0_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioFloatInfoComponent_div_0_mat_icon_12_Template_mat_icon_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.onPlayStopPressed($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.musicButton);
} }
function AudioFloatInfoComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1) { return { "mb-12": a0, "mb0": a1 }; };
const _c2 = function (a0, a1) { return { "w-310": a0, "w-54": a1 }; };
const _c3 = function (a0, a1) { return { "p-13": a0, "p-0": a1 }; };
function AudioFloatInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioFloatInfoComponent_div_0_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onClickClosed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AudioFloatInfoComponent_div_0_div_7_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AudioFloatInfoComponent_div_0_div_8_Template, 14, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AudioFloatInfoComponent_div_0_div_10_Template, 3, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AudioFloatInfoComponent_div_0_div_11_Template, 3, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AudioFloatInfoComponent_div_0_mat_icon_12_Template, 2, 1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AudioFloatInfoComponent_div_0_div_13_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, !ctx_r0.closed, ctx_r0.closed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.chevron);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c2, !ctx_r0.closed, ctx_r0.closed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c3, !ctx_r0.minimise, ctx_r0.closed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.minimise && !ctx_r0.closed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.minimise && !ctx_r0.closed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.closed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.closed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);
} }
class AudioFloatInfoComponent {
    constructor(cdr, messageService) {
        this.cdr = cdr;
        this.messageService = messageService;
        this.loading = true;
        this.minimise = true;
        this.closed = false;
        this.chevron = "chevron_right";
        this.url = "assets/mp3/sample.mp3";
        this.musicButton = "not_started";
        this.duration = "1:00";
        this.expandMore = "expand_less";
        this.played = false;
        this.init = true;
        this.subscription = this.messageService.getMessage().subscribe(message => {
            if (message.loaded == true) {
                this.loading = false;
            }
            if (message.showFloatAudioPlayer === true) {
                this.played = true;
                this.initialisePlayer();
                console.log(message);
            }
            else if (message.showFloatAudioPlayer === false) {
                this.onClickClosed();
                this.played = false;
            }
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    initialisePlayer() {
        this.loading = true;
        this.closed = false;
        this.chevron = "chevron_right";
        this.url = "assets/mp3/sample.mp3";
        this.musicButton = "stop";
        this.duration = "1:00";
        this.expandMore = "expand_less";
        this.card = this.data.card;
        this.loading = false;
        this.cdr.detectChanges();
    }
    onPlayStopPressed(button) {
        if (button.textContent.trim() === 'not_started' && !this.loading) {
            this.musicButton = "pause_circle_filled";
            button.textContent = 'pause_circle_filled';
            this.onPlayPressed();
        }
        else if (button.textContent.trim() === 'play') {
            this.messageService.sendMessage({ play: true });
            button.textContent = 'stop';
        }
        else {
            this.played = false;
            button.textContent = 'play';
            this.messageService.sendMessage({ play: false });
            this.onPausePressed();
        }
    }
    onPlayPressed() {
    }
    onStopPressed() {
    }
    onPausePressed() {
    }
    getDuration() {
    }
    onClickMinimise() {
        this.minimise = !this.minimise;
        this.expandMore = this.minimise ? "expand_less" : "expand_more";
        this.cdr.detectChanges();
    }
    onClickClosed() {
        this.expandMore = this.minimise ? "expand_less" : "expand_more";
        this.closed = !this.closed;
        this.chevron = this.closed ? "chevron_left" : "chevron_right";
        this.cdr.detectChanges();
    }
}
AudioFloatInfoComponent.ɵfac = function AudioFloatInfoComponent_Factory(t) { return new (t || AudioFloatInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_communication_service__WEBPACK_IMPORTED_MODULE_1__["CommunicationService"])); };
AudioFloatInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AudioFloatInfoComponent, selectors: [["app-audio-float-info"]], inputs: { data: "data" }, decls: 1, vars: 1, consts: [["class", "fixed", 4, "ngIf"], [1, "fixed"], [2, "display", "inline-block", 3, "ngClass"], [1, "theme-text-color-prim", "right", "pointer", "mr-1", 3, "click"], [1, "card-bg", 2, "display", "inline-block", 3, "ngClass"], [3, "ngClass"], [4, "ngIf"], ["class", "mb2", 4, "ngIf"], [1, "d-flex", "justify-content-between"], ["style", "padding-left: 4px;  margin-top: 7px;", 3, "ngClass", 4, "ngIf"], ["class", "pointer color-accent", "style", "width: 228px; margin-top: 10px;\n                   margin-left: 9px;", 3, "ngClass", "click", 4, "ngIf"], ["class", "font-24 pointer color-accent music-padd", 3, "click", 4, "ngIf"], [1, "font-24", "font-merri", "fw-600", "color-accent", "grab", 2, "line-height", "1.2"], [1, "mb2"], ["aria-label", "Fish selection"], [3, "selectable"], [1, "mb0"], [2, "padding-left", "4px", "margin-top", "7px", 3, "ngClass"], [1, "color-accent", "right", "pointer", 3, "click"], [1, "pointer", "color-accent", 2, "width", "228px", "margin-top", "10px", "margin-left", "9px", 3, "ngClass", "click"], [1, "mb-2", "title-elpis"], [1, "font-24", "pointer", "color-accent", "music-padd", 3, "click"], ["mode", "buffer", 1, "buffer-position"]], template: function AudioFloatInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AudioFloatInfoComponent_div_0_Template, 14, 19, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.played);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChip"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1ZGlvLWZsb2F0LWluZm8vYXVkaW8tZmxvYXQtaW5mby5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudioFloatInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-audio-float-info',
                templateUrl: './audio-float-info.component.html',
                styleUrls: ['./audio-float-info.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _shared_communication_service__WEBPACK_IMPORTED_MODULE_1__["CommunicationService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/card-audio/card-audio.component.ts":
/*!****************************************************!*\
  !*** ./src/app/card-audio/card-audio.component.ts ***!
  \****************************************************/
/*! exports provided: CardAudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardAudioComponent", function() { return CardAudioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-masonry */ "./node_modules/ngx-masonry/__ivy_ngcc__/fesm2015/ngx-masonry.js");
/* harmony import */ var _audio_card_modal_audio_card_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio-card-modal/audio-card-modal.component */ "./src/app/audio-card-modal/audio-card-modal.component.ts");
/* harmony import */ var _custom_wave_tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-wave/tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _theming_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theming.service */ "./src/app/theming.service.ts");
/* harmony import */ var _shared_communication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/communication.service */ "./src/app/shared/communication.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _custom_wave_directives_destination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../custom-wave/directives/destination */ "./src/app/custom-wave/directives/destination.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _custom_wave_sources_buffer_source__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../custom-wave/sources/buffer-source */ "./src/app/custom-wave/sources/buffer-source.ts");
/* harmony import */ var _custom_wave_nodes_analyser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../custom-wave/nodes/analyser */ "./src/app/custom-wave/nodes/analyser.ts");
/* harmony import */ var _custom_wave_directives_output__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../custom-wave/directives/output */ "./src/app/custom-wave/directives/output.ts");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");















function CardAudioComponent_div_0_div_1_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start AudioContext");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardAudioComponent_div_0_div_1_ng_template_2_ng_container_2_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardAudioComponent_div_0_div_1_ng_template_2_ng_container_2_mat_icon_3_Template_mat_icon_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r13.onClick(_r12, $event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "not_started");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeByte$", function CardAudioComponent_div_0_div_1_ng_template_2_ng_container_2_mat_icon_3_Template_ng_container_timeByte__3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.onTimeDomain($event, _r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](4, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loop", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("waOutput", ctx_r10.chain || _r8);
} }
function CardAudioComponent_div_0_div_1_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " *user discretion is advised");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardAudioComponent_div_0_div_1_ng_template_2_ng_container_2_mat_icon_3_Template, 5, 2, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.buffers);
} }
function CardAudioComponent_div_0_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardAudioComponent_div_0_div_1_ng_template_2_ng_container_2_Template, 4, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "canvas", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardAudioComponent_div_0_div_1_ng_template_2_Template_canvas_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.onClickAudioCard1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r6.selectedSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "buffer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", ctx_r6.pulseWidth);
} }
function CardAudioComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardAudioComponent_div_0_div_1_button_1_Template, 2, 0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardAudioComponent_div_0_div_1_ng_template_2_Template, 6, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.started)("ngIfElse", _r5);
} }
const _c0 = function (a0) { return { "rotate": a0 }; };
function CardAudioComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardAudioComponent_div_0_div_2_Template_mat_icon_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.onClickPlayButton($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "not_started ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx_r3.stopped))("src", ctx_r3.discImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CardAudioComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardAudioComponent_div_0_div_1_Template, 4, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardAudioComponent_div_0_div_2_Template, 5, 4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isSafari);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSafari);
} }
function CardAudioComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardAudioComponent_div_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onClickAudioCard1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-chip-list", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Netflix TV Series");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Drama");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "popcorn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-chip", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "university");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardAudioComponent_div_1_Template_mat_icon_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.showPlay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "navigate_next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.card.title);
} }
class CardAudioComponent {
    constructor(context, themingService, cdRef, communicationService, dialog) {
        this.context = context;
        this.themingService = themingService;
        this.cdRef = cdRef;
        this.communicationService = communicationService;
        this.dialog = dialog;
        this.showAudioCard = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.buffers = [Date.now()];
        this.selectedChain = 'dry';
        this.selectedSource = 'buffer';
        this.gain = 1;
        this.pan = 0;
        this.delayTime = 1;
        this.delayGain = 0.5;
        this.distortion = 20;
        this.frequency = 350;
        this.detune = 0;
        this.filterGain = 0;
        this.Q = 1;
        this.show = false;
        this.type = 'lowpass';
        this.curve = makeDistortionCurve(this.distortion);
        this.started = true;
        this.real = [0, 0, 1, 0, 1];
        this.isSafari = false;
        this.pulseWidth = 158;
        this.stopped = false;
        this.subscription = communicationService.getMessage().subscribe(message => {
            if (this.source) {
                if (message.play === true) {
                    this.stopped = false;
                    this.source.start();
                }
                else if (message.play === false) {
                    // if(!this.stopped)
                    // this.source.stop(); 
                    this.show = false;
                    this.card.show = false;
                    this.buffers[0] = Date.now();
                    this.stopped = true;
                    cdRef.detectChanges();
                }
            }
        });
    }
    ngOnInit() {
        if (this.getBrowserName() === 'safari') {
            this.isSafari = true;
        }
        this.show = this.card.show;
        if (window.innerWidth > 380) {
            this.pulseWidth = 169;
        }
        this.updateTheme();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        //this.source.stop();
        this.communicationService.sendMessage({ showFloatAudioPlayer: false });
    }
    get distortionCompensation() {
        return 1.2 - this.distortion / 20;
    }
    onCurveChange(distortion) {
        this.distortion = distortion;
        this.curve = makeDistortionCurve(distortion);
    }
    onClickPlayButton(button) {
        if (button.textContent.trim() === 'not_started') {
            this.communicationService.sendMessage({ showFloatAudioPlayer: true });
            this.communicationService.sendMessage({ loaded: false });
            this.stopped = false;
            button.textContent = "highlight_off";
        }
        else {
            button.textContent = "not_started";
            this.stopped = true;
            this.communicationService.sendMessage({ showFloatAudioPlayer: false });
        }
    }
    onClick(source, button) {
        if (button.textContent.trim() === 'not_started') {
            this.stopped = false;
            button.textContent = 'highlight_off';
            source.start();
            this.source = source;
            this.communicationService.sendMessage({ showFloatAudioPlayer: true });
            this.communicationService.sendMessage({ loaded: false });
        }
        else {
            source.stop();
            this.show = false;
            this.card.show = false;
            this.buffers[0] = Date.now();
            this.communicationService.sendMessage({ showFloatAudioPlayer: false });
        }
    }
    ngAfterViewInit() {
        this.updateTheme();
        this.show = this.card.show;
        this.cdRef.detectChanges();
        this.context.resume();
    }
    ngAfterViewChecked() {
        this.show = this.card.show;
        this.updateTheme();
        this.cdRef.detectChanges();
    }
    updateTheme() {
        if (this.themingService.theme.value === 'light-theme') {
            this.discImage = "assets/images/disc-light-mode.svg";
            this.cdRef.detectChanges();
        }
        else {
            this.discImage = "assets/images/disc-dark-mode.svg";
            this.cdRef.detectChanges();
        }
    }
    onTimeDomain(array, canvas) {
        const canvasCtx = canvas.getContext('2d');
        if (!canvasCtx) {
            return;
        }
        canvasCtx.clearRect(0, 0, this.pulseWidth, 120);
        canvasCtx.fillStyle = "rgba(0, 0, 200, 0)";
        canvasCtx.fillRect(0, 0, this.pulseWidth + 1, 120);
        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = 'rgb(244, 112, 54)';
        canvasCtx.beginPath();
        const sliceWidth = (this.pulseWidth * 1.0) / array.length;
        let x = 0;
        for (let i = 0; i < array.length; i++) {
            const v = array[i] / 128.0;
            const y = (v * 120) / 2;
            if (i === 0) {
                canvasCtx.moveTo(x, y);
            }
            else {
                canvasCtx.lineTo(x, y);
            }
            x += sliceWidth;
        }
        canvasCtx.lineTo(this.pulseWidth, 120 / 2);
        canvasCtx.stroke();
    }
    showPlay() {
        this.show = true;
        this.card.show = true;
        this.stopped = true;
        this.showAudioCard.emit(this.card);
    }
    onClickAudioCard1() {
        this.show = false;
        this.card.show = false;
        this.openDailog();
    }
    openDailog() {
        return this.dialog.open(_audio_card_modal_audio_card_modal_component__WEBPACK_IMPORTED_MODULE_2__["AudioCardModalComponent"], {
            width: '380px',
            data: { "card": this.card }
        });
    }
    getBrowserName() {
        const agent = window.navigator.userAgent.toLowerCase();
        switch (true) {
            case agent.indexOf('edge') > -1:
                return 'edge';
            case agent.indexOf('opr') > -1 && !!window.opr:
                return 'opera';
            case agent.indexOf('chrome') > -1 && !!window.chrome:
                return 'chrome';
            case agent.indexOf('trident') > -1:
                return 'ie';
            case agent.indexOf('firefox') > -1:
                return 'firefox';
            case agent.indexOf('safari') > -1:
                return 'safari';
            default:
                return 'other';
        }
    }
}
CardAudioComponent.ɵfac = function CardAudioComponent_Factory(t) { return new (t || CardAudioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_custom_wave_tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theming_service__WEBPACK_IMPORTED_MODULE_4__["ThemingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_communication_service__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
CardAudioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardAudioComponent, selectors: [["app-card-audio"]], viewQuery: function CardAudioComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_masonry__WEBPACK_IMPORTED_MODULE_1__["NgxMasonryComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.masonry = _t.first);
    } }, inputs: { card: "card" }, outputs: { showAudioCard: "showAudioCard" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [4, "ngIf", "ngIfElse"], ["graph", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], ["waAudioDestinationNode", "", "height", "120", 1, "left", "pt-24", 3, "width", "click"], ["fallback", "AudioNode", "canvas", ""], [1, "center", "font-12", "theme-text-color-sec", "user-d"], ["class", "play mt1 mr1 theme-text-color-prim", "waAudioBufferSourceNode", "", "buffer", "assets/mp3/sample.mp3", 3, "loop", "click", 4, "ngFor", "ngForOf"], ["waAudioBufferSourceNode", "", "buffer", "assets/mp3/sample.mp3", 1, "play", "mt1", "mr1", "theme-text-color-prim", 3, "loop", "click"], ["source", "AudioNode"], ["waAnalyserNode", "", 3, "timeByte$"], [3, "waOutput"], ["alt", "disc", 1, "disc", 3, "ngClass", "src"], [1, "play", "mt1", "mr1", "theme-text-color-prim", 3, "click"], [1, "d-flex", "text-content", 2, "padding-left", "24px"], [2, "width", "80%", "height", "100%", 3, "click"], [1, "header-elpis", "theme-text-color-prim"], [1, "left", 2, "height", "100px", "padding-top", "5px"], ["aria-label", "Fish selection"], [1, "chip-elpis"], [1, "deskContent"], [1, "next", "theme-text-color-prim", 3, "click"]], template: function CardAudioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardAudioComponent_div_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardAudioComponent_div_1_Template, 21, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _custom_wave_directives_destination__WEBPACK_IMPORTED_MODULE_8__["WebAudioDestination"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _custom_wave_sources_buffer_source__WEBPACK_IMPORTED_MODULE_10__["WebAudioBufferSource"], _custom_wave_nodes_analyser__WEBPACK_IMPORTED_MODULE_11__["WebAudioAnalyser"], _custom_wave_directives_output__WEBPACK_IMPORTED_MODULE_12__["WebAudioOutput"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChip"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQtYXVkaW8vY2FyZC1hdWRpby5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardAudioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-audio',
                templateUrl: './card-audio.component.html',
                styleUrls: ['./card-audio.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: AudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_custom_wave_tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__["AUDIO_CONTEXT"]]
            }] }, { type: _theming_service__WEBPACK_IMPORTED_MODULE_4__["ThemingService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _shared_communication_service__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showAudioCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], masonry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_masonry__WEBPACK_IMPORTED_MODULE_1__["NgxMasonryComponent"]]
        }] }); })();
function makeDistortionCurve(amount) {
    const samples = 44100;
    const curve = new Float32Array(samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < samples; ++i) {
        const x = (i * 2) / samples - 1;
        curve[i] = ((3 + amount) * x * 20 * deg) / (Math.PI + amount * Math.abs(x));
    }
    return curve;
}


/***/ }),

/***/ "./src/app/card-small-wave/card-small-wave.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/card-small-wave/card-small-wave.component.ts ***!
  \**************************************************************/
/*! exports provided: CardSmallWaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSmallWaveComponent", function() { return CardSmallWaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CardSmallWaveComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardSmallWaveComponent.ɵfac = function CardSmallWaveComponent_Factory(t) { return new (t || CardSmallWaveComponent)(); };
CardSmallWaveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardSmallWaveComponent, selectors: [["app-card-small-wave"]], decls: 2, vars: 0, template: function CardSmallWaveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "card-small-wave works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQtc21hbGwtd2F2ZS9jYXJkLXNtYWxsLXdhdmUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardSmallWaveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-small-wave',
                templateUrl: './card-small-wave.component.html',
                styleUrls: ['./card-small-wave.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/communication.service */ "./src/app/shared/communication.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _card_audio_card_audio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card-audio/card-audio.component */ "./src/app/card-audio/card-audio.component.ts");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _pipes_obscenity_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/obscenity.pipe */ "./src/app/pipes/obscenity.pipe.ts");










function CardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-card-audio", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showAudioCard", function CardComponent_div_2_Template_app_card_audio_showAudioCard_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.updateCard($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-card-audio", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showAudioCard", function CardComponent_div_2_Template_app_card_audio_showAudioCard_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.updateCard($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r0.card1.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipShowDelay", 500)("matTooltipPosition", ctx_r0.position.value)("matTooltipHideDelay", 1000);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.card1.userId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx_r0.card1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r0.card2.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipShowDelay", 500)("matTooltipPosition", ctx_r0.position.value)("matTooltipHideDelay", 1000);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.card2.userId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx_r0.card2);
} }
function CardComponent_div_4_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "obscenity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r5.card.title));
} }
function CardComponent_div_4_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.card.title);
} }
const _c0 = function (a0) { return { "card-elps": a0 }; };
function CardComponent_div_4_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "obscenity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r7.readMore));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r7.card.desc));
} }
function CardComponent_div_4_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r8.readMore));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.card.desc);
} }
function CardComponent_div_4_p_21_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_4_p_21_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onClickReadMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "read more..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_div_4_h2_3_Template, 3, 3, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardComponent_div_4_h2_4_Template, 2, 1, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-chip-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Netflix TV Series");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Drama");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "university");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "popcorn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CardComponent_div_4_p_19_Template, 3, 6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CardComponent_div_4_p_20_Template, 2, 4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CardComponent_div_4_p_21_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " campaign");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r1.card.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipShowDelay", 500)("matTooltipPosition", ctx_r1.position.value)("matTooltipHideDelay", 1000);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.card.userId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.obscenity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.obscenity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.obscenity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.obscenity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.readMore);
} }
class CardComponent {
    constructor(messageService, cdRef) {
        this.messageService = messageService;
        this.cdRef = cdRef;
        this.readMore = true;
        this.obscenity = true;
        this.showAudioCard = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reloadCards = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("below");
        this.subscription = this.messageService.obscenetiy().subscribe(message => {
            console.log("ujjjn");
            this.obscenity = message;
            this.cdRef.detectChanges();
        });
    }
    ngOnInit() {
        if (this.card.type === "audio") {
            this.card1 = this.card.data[0];
            this.card2 = this.card.data[1];
        }
        if (this.card.type === "text" && this.card.desc.length < 600) {
            this.readMore = false;
        }
    }
    updateCard(input) {
        this.showAudioCard.emit(input);
    }
    onClickReadMore() {
        this.readMore = false;
        this.reloadCards.emit(this.readMore);
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_communication_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { type: "type", card: "card" }, outputs: { showAudioCard: "showAudioCard", reloadCards: "reloadCards" }, decls: 5, vars: 2, consts: [[1, "card2-content"], [1, "card2", "pointer"], ["class", "d-flex", 4, "ngIf"], [1, "rel"], ["class", "text-card2", 4, "ngIf"], [1, "d-flex"], [1, "audio-card-1"], [1, "float", "font-14", "fw-600", "theme-text-color-prim", "elps", "pointer", 3, "matTooltip", "matTooltipShowDelay", "matTooltipPosition", "matTooltipHideDelay"], [3, "card", "showAudioCard"], [1, "rel", "mar-left"], [1, "audio-card-2"], [1, "text-card2"], ["class", "font-merri  theme-text-color-prim pr2 fw-600", "style", "text-align: initial;padding-left: 20px; padding-top: 23px;", 4, "ngIf"], [1, "pr1", "pb1", 2, "padding-left", "25px"], ["aria-label", "Fish selection"], [3, "selectable"], [1, "mb0"], ["class", "font-merri theme-text-color-sec mb0 font-14", "style", "padding-right: 20px; padding-left: 25px; text-align: initial;", 3, "ngClass", 4, "ngIf"], ["class", "font-merri font-14 theme-text-color-prim underline", 3, "click", 4, "ngIf"], [1, "d-felx", "justify-content-end", "mr2", "pb1", 2, "text-align", "end"], [1, "theme-text-color-sec", "pointer", "mr1", "mat-reply"], [1, "theme-text-color-sec", "pointer", "mr1", "mat-campaign"], [1, "font-merri", "theme-text-color-prim", "pr2", "fw-600", 2, "text-align", "initial", "padding-left", "20px", "padding-top", "23px"], [1, "font-merri", "theme-text-color-sec", "mb0", "font-14", 2, "padding-right", "20px", "padding-left", "25px", "text-align", "initial", 3, "ngClass"], [1, "font-merri", "font-14", "theme-text-color-prim", "underline", 3, "click"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_div_2_Template, 13, 12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardComponent_div_4_Template, 27, 14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "audio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "text");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _card_audio_card_audio_component__WEBPACK_IMPORTED_MODULE_5__["CardAudioComponent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_pipes_obscenity_pipe__WEBPACK_IMPORTED_MODULE_8__["ObscenityPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _shared_communication_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showAudioCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], reloadCards: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/cards-grid/cards-grid.component.ts":
/*!****************************************************!*\
  !*** ./src/app/cards-grid/cards-grid.component.ts ***!
  \****************************************************/
/*! exports provided: CardsGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsGridComponent", function() { return CardsGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-masonry */ "./node_modules/ngx-masonry/__ivy_ngcc__/fesm2015/ngx-masonry.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/card.component */ "./src/app/card/card.component.ts");






function CardsGridComponent_app_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showAudioCard", function CardsGridComponent_app_card_2_Template_app_card_showAudioCard_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.updateCard($event); })("reloadCards", function CardsGridComponent_app_card_2_Template_app_card_reloadCards_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.reloadCards($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", card_r1.type)("card", card_r1);
} }
class CardsGridComponent {
    constructor() {
        this.count = 0;
        this.init = true;
        this.cards = [
            {
                unique_id: "1-2", show: false, type: "audio", userId: "@monkey504564",
                data: [{
                        unique_id: "1", show: false, type: "audio", userId: "@monkey504564", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat."
                    },
                    {
                        unique_id: "2", show: false, type: "audio", userId: "@user207", title: "Professor John Doe, explain the concept of the term “Lorem ipsum”",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat."
                    }]
            },
            { unique_id: "3", show: false, type: "text", userId: "@yourpop603", title: "Through sheer determination and willpower I’m where I am today, gradually reclaiming my life.", desc: "I think bringing a sense of realism to the writer in the dark trope might dilute some of the lasting toxicity that may be perpetuated by having unpopular young kids rise to fame by betraying their peers." },
            { unique_id: "4", show: false, type: "text", userId: "@crackhead603", title: "Marvel universe went fucking crazy with this movie", desc: "Everyone is familiar with the act of turning to a neighbor and whispering a coveted secret. It’s messy, fun, entertaining, and hurtful even. But alas, scandal makes the world go round. Maybe that is the reason shows like Bridgerton, which had a successful season 2 premiere on March 25, are so popular. The desire for gossip is fueled by having an underdog or wallflower hold a secret power over all the elite personnel in the story. It creates a sense of triumph that a beautifully flawed background character with an alluring voice stirs the pot in a way that keeps the audience engaged and their hands clean of the mess. This writer-in-the-dark theme is not a new one; many of today’s generation grew up with it ingrained in the most popular films and shows. The first time I recall seeing this narrative was in Radio Rebel, which made its debut on the Disney Channel 10 years ago. Debby Ryan played a mousy high schooler with an anonymous influential radio show under the name of Radio Rebel, which gets more attention once people start to question her identity. The movie was mainly based on authenticity and encouraged others to be themselves, but there are moments where Radio Rebel calls her classmates out by name, sparking gossip and speculation. While this is largely a lighthearted narrative, because it’s Disney after all, it still sets a precedent for how early kids were exposed to the idea that being an underdog is acceptable if you can get people talking about each other. The next writer in the dark I observed was (spoiler alert) Dan Humphrey as Gossip Girl. Gossip Girl was a nameless blogger who terrorized Manhattan’s elite and held them accountable for each scandal and misstep. I think this narrative spoke to Gen Z particularly because it centered around technology and how phones can be mass weapons of destruction in teenage lives. Each text that Gossip Girl sent out made the audience’s eyes captivated even more. While each person watching couldn’t be a famous upper Eastsider, they could be inspired to act as their town’s gossip girl. The level of relatability makes Gossip Girl and similar characters seem like icons as if actions don’t have consequences. I shamelessly binged the second season of Bridgerton shortly after its release, which brings us to the trifecta of undercover scandal reporters. Bridgerton is narrated by Lady Whistledown who is an unidentified scandal sheet writer that observes the ton in 19th century London as lords and ladies work to find their match. Season two was filled with the most amazing enemies to lovers, pining, and tension, but I particularly liked seeing the overarching plotline of Lady Whistledown be played out more. Her true identity as unsuspecting Penelope Featherington was revealed to the audience at the end of last season, so there is little mystery left to feed on. There does seem to be some consequences shown in this version of the trope, however. As the Queen is seen trying to uncover her identity, Lady Whistledown must betray her best friend to clear her name. I liked that this narrative was somewhat realistic with the plot of betrayal sinking into mystery and notoriety. It felt more fulfilling, maybe even dramatic, to see the conflict and betrayal presented clearly. I don’t think it is the intention of any one of these productions to glamorize scheming, but as a generation raised on these forms of media, it’s easy to internalize the message. I think bringing a sense of realism to the writer in the dark trope might dilute some of the lasting toxicity that may be perpetuated by having unpopular young kids rise to fame by betraying their peers." },
            {
                unique_id: "5-6", show: false, type: "audio", userId: "@punk207",
                data: [{
                        unique_id: "5", show: false, type: "audio", userId: "@punk207", title: "He woke up, rolled over, and reached for her",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat."
                    },
                    {
                        unique_id: "6", show: false, type: "audio", userId: "@user209", title: "They told me they could save either my wife or my son",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat."
                    }]
            },
            { unique_id: "7", show: false, type: "text", userId: "@victim108", title: "Why John Mayer Should Be Scared For Speak Now (Taylor’s Version)", desc: "Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velicillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
            { unique_id: "8", show: false, type: "text", userId: "@user504", title: "Cancel Culture: Does It Have A Positive Or Negative Effect On This Generation?", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate iscillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deseruntmollit anim id est laborum. Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua." },
            { unique_id: "9", show: false, type: "text", userId: "@user007-207", title: "This is my story. Don't judge!", desc: "On Feb 28, asine eimmn kin sad weadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. Duis aute irure dolor in first time in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis cocaineexercitation ullamco laboris nisi ut aliquip exea commodo LSD. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non  times, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute iruredolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Sunt in culpa qui officia deserunt." },
            {
                unique_id: "10-11", show: false, type: "audio", userId: "@user007-27",
                data: [{
                        unique_id: "10", show: false, type: "audio", userId: "@user007-27", title: "After months of waiting he finally saw his wife.",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat."
                    },
                    {
                        unique_id: "11", show: false, type: "audio", userId: "@user007-27", title: "He never wanted to leave his wife.",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat."
                    }]
            },
            { unique_id: "13", show: false, type: "text", userId: "@monkey507", title: "True story", desc: "When Ciarín passed away that was the deciding point in going to treatment for addiction. My decision changed my life for the better, I got help with that problem. That’s not to say that I am perfect. I do absolutely have problems. Being at Cedars helped me realize quickly that it wasn’t so much the drugs but my behaviours as well. I found out through my family history that I was wired an addict since the day I was born. But now I can deal with that. I have the tools to be alright with myself. I love myself today. I love who I can be and who I am. I learnt that it is okay to be who I was. I’m proud of who I am today. Thanks to a 12-Step program I can work through all of the behaviours and catch myself before I act out on them." },
            {
                unique_id: "14-19", show: false, type: "audio", userId: "@punk207",
                data: [{
                        unique_id: "14", show: false, type: "audio", userId: "@punk207", title: "The heart monitor chimed its final tune.",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat."
                    },
                    {
                        unique_id: "19", show: false, type: "audio", userId: "crack101", title: "I told her she would be okay.",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat."
                    }]
            },
            { unique_id: "15", show: false, type: "text", userId: "@user007-9", title: "Big Little Lie", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate iscillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deseruntmollit anim id est laborum. Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam." },
            { unique_id: "16", show: false, type: "text", userId: "@punk102", title: "Will The ‘Gossip Girl’ Reboot Survive In The Deuxmoi Era?", desc: "On Feb 28, asine eimmn kin sad weadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. Duis aute irure dolor in first time in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis cocaineexercitation ullamco laboris nisi ut aliquip exea commodo LSD. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non  times, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute iruredolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Sunt in culpa qui officia deserunt." },
            // {unique_id:"17",show:false,type:"audio",userId: "@user007-007",data:[{unique_id:"17",show:false,type:"audio",userId: "@user007-007"}]},
            { unique_id: "18", show: false, type: "text", userId: "@monkey54", title: "Child Abuse", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate iscillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deseruntmollit anim id est laborum. Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam." }
        ];
        this.myOptions = {
            gutter: 36,
            fitWidth: true,
        };
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        if (this.init) {
            const interval = window.setTimeout(() => {
                if (this.init) {
                    this.masonry.layout();
                    window.clearTimeout(interval);
                    this.init = false;
                    console.log("initial load");
                }
            }, 500);
        }
    }
    updateCard(input) {
        this.cards.filter(c => c.type === "audio").forEach(c => {
            if (c.data[0].unique_id !== input.unique_id)
                c.data[0].show = false;
            if (c.data[1].unique_id !== input.unique_id)
                c.data[1].show = false;
        });
    }
    reloadCards(input) {
        this.masonry.layout();
    }
}
CardsGridComponent.ɵfac = function CardsGridComponent_Factory(t) { return new (t || CardsGridComponent)(); };
CardsGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardsGridComponent, selectors: [["app-cards-grid"]], viewQuery: function CardsGridComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_masonry__WEBPACK_IMPORTED_MODULE_1__["NgxMasonryComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.masonry = _t.first);
    } }, decls: 3, vars: 2, consts: [[1, "main"], [1, "ngx-masonry", 3, "options"], ["ngxMasonryItem", "", "class", "masonry-item", 3, "type", "card", "showAudioCard", "reloadCards", 4, "ngFor", "ngForOf"], ["ngxMasonryItem", "", 1, "masonry-item", 3, "type", "card", "showAudioCard", "reloadCards"]], template: function CardsGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-masonry", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardsGridComponent_app_card_2_Template, 1, 2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.myOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [ngx_masonry__WEBPACK_IMPORTED_MODULE_1__["NgxMasonryComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], ngx_masonry__WEBPACK_IMPORTED_MODULE_1__["NgxMasonryDirective"]], styles: [".masonry-item[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n  width: 375px;\n}\n\n@media only screen and (max-width: 380px) {\n  \n  .masonry-item[_ngcontent-%COMP%] {\n    margin-bottom: 36px;\n    width: 332px;\n  }\n}\n\n.main[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  margin-top: 14px;\n  margin-right: auto;\n  margin-bottom: 0px;\n  margin-left: auto;\n}\n\n.links[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ngx-masonry[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZHMtZ3JpZC9jYXJkcy1ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0M7RUFDRyx1QkFBQTtFQUNBO0lBQ0ksbUJBQUE7SUFDQSxZQUFBO0VBRU47QUFDRjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUdBLGFBQUE7RUFHQSxtQkFBQTtFQUdBLHVCQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0FBSUoiLCJmaWxlIjoic3JjL2FwcC9jYXJkcy1ncmlkL2NhcmRzLWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFzb25yeS1pdGVtIHsgXG4gICAgbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgICB3aWR0aDogMzc1cHg7XG4gfVxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cbiAgICAubWFzb25yeS1pdGVtIHsgXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XG4gICAgICAgIHdpZHRoOiAzMzJweDtcbiAgICAgfVxuICB9XG4ubWFpbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5saW5rcyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubmd4LW1hc29ucnkge1xuICAgIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cards-grid',
                templateUrl: './cards-grid.component.html',
                styleUrls: ['./cards-grid.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, { masonry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_masonry__WEBPACK_IMPORTED_MODULE_1__["NgxMasonryComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/confess/confess.component.ts":
/*!**********************************************!*\
  !*** ./src/app/confess/confess.component.ts ***!
  \**********************************************/
/*! exports provided: ConfessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfessComponent", function() { return ConfessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ConfessComponent {
    constructor() { }
    ngOnInit() {
    }
}
ConfessComponent.ɵfac = function ConfessComponent_Factory(t) { return new (t || ConfessComponent)(); };
ConfessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfessComponent, selectors: [["app-confess"]], decls: 2, vars: 0, template: function ConfessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "confess works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZlc3MvY29uZmVzcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confess',
                templateUrl: './confess.component.html',
                styleUrls: ['./confess.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/custom-wave/constants/polling-time.ts":
/*!*******************************************************!*\
  !*** ./src/app/custom-wave/constants/polling-time.ts ***!
  \*******************************************************/
/*! exports provided: POLLING_TIME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POLLING_TIME", function() { return POLLING_TIME; });
const POLLING_TIME = 100;


/***/ }),

/***/ "./src/app/custom-wave/decorators/audio-param.ts":
/*!*******************************************************!*\
  !*** ./src/app/custom-wave/decorators/audio-param.ts ***!
  \*******************************************************/
/*! exports provided: audioParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioParam", function() { return audioParam; });
/* harmony import */ var _utils_process_audio_param__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/process-audio-param */ "./src/app/custom-wave/utils/process-audio-param.ts");

function audioParam(param = '') {
    const decorator = (target, propertyKey) => {
        Object.defineProperty(target, propertyKey, {
            set(value) {
                value = typeof value === 'string' ? Number.parseFloat(value) : value;
                const audioParam = this instanceof AudioWorkletNode
                    ? this.parameters.get(propertyKey)
                    : this[param];
                if (audioParam instanceof AudioParam) {
                    Object(_utils_process_audio_param__WEBPACK_IMPORTED_MODULE_0__["processAudioParam"])(audioParam, value, this.context.currentTime);
                }
                else {
                    // Fallback for older browsers
                    Object.defineProperty(target, propertyKey, { value });
                }
            },
        });
    };
    return decorator;
}


/***/ }),

/***/ "./src/app/custom-wave/directives/audio-context.ts":
/*!*********************************************************!*\
  !*** ./src/app/custom-wave/directives/audio-context.ts ***!
  \*********************************************************/
/*! exports provided: WebAudioContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioContext", function() { return WebAudioContext; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _utils_latency_hint_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/latency-hint-factory */ "./src/app/custom-wave/utils/latency-hint-factory.ts");




// @dynamic
class WebAudioContext extends AudioContext {
    constructor(latencyHint, sampleRate) {
        super({
            latencyHint: Object(_utils_latency_hint_factory__WEBPACK_IMPORTED_MODULE_2__["latencyHintFactory"])(latencyHint),
            sampleRate: parseInt(sampleRate || '', 10) || undefined,
        });
    }
    ngOnDestroy() {
        this.close();
    }
}
WebAudioContext.ɵfac = function WebAudioContext_Factory(t) { return new (t || WebAudioContext)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('latencyHint'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('sampleRate')); };
WebAudioContext.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WebAudioContext, selectors: [["", "waAudioContext", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioContext),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAudioContext, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[waAudioContext]',
                providers: [
                    {
                        provide: _tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioContext),
                    },
                ],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['latencyHint']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['sampleRate']
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/custom-wave/directives/channel.ts":
/*!***************************************************!*\
  !*** ./src/app/custom-wave/directives/channel.ts ***!
  \***************************************************/
/*! exports provided: WebAudioChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioChannel", function() { return WebAudioChannel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_constructor_support__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tokens/constructor-support */ "./src/app/custom-wave/tokens/constructor-support.ts");




// @dynamic
class WebAudioChannel extends GainNode {
    constructor(context, modern) {
        if (modern) {
            super(context);
        }
        else {
            const result = context.createGain();
            Object.setPrototypeOf(result, WebAudioChannel.prototype);
            return result;
        }
    }
    ngOnDestroy() {
        this.disconnect();
    }
}
WebAudioChannel.ɵfac = function WebAudioChannel_Factory(t) { return new (t || WebAudioChannel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_2__["CONSTRUCTOR_SUPPORT"])); };
WebAudioChannel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WebAudioChannel, selectors: [["", "waChannel", ""]], exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAudioChannel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[waChannel]',
                exportAs: 'AudioNode',
            }]
    }], function () { return [{ type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_2__["CONSTRUCTOR_SUPPORT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/custom-wave/directives/destination.ts":
/*!*******************************************************!*\
  !*** ./src/app/custom-wave/directives/destination.ts ***!
  \*******************************************************/
/*! exports provided: WebAudioDestination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioDestination", function() { return WebAudioDestination; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _constants_polling_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/polling-time */ "./src/app/custom-wave/constants/polling-time.ts");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _tokens_constructor_support__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tokens/constructor-support */ "./src/app/custom-wave/tokens/constructor-support.ts");
/* harmony import */ var _utils_connect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/connect */ "./src/app/custom-wave/utils/connect.ts");









// @dynamic
class WebAudioDestination extends AnalyserNode {
    constructor(context, node, modern) {
        if (modern) {
            super(context);
            WebAudioDestination.init(this, node);
        }
        else {
            const result = context.createAnalyser();
            Object.setPrototypeOf(result, WebAudioDestination.prototype);
            WebAudioDestination.init(result, node);
            return result;
        }
    }
    ngOnDestroy() {
        this.disconnect();
    }
    isSilent(array) {
        return Math.abs(array.reduce((acc, cur) => acc + cur, 0)) < 0.001;
    }
    static init(that, node) {
        Object(_utils_connect__WEBPACK_IMPORTED_MODULE_7__["connect"])(node, that);
        that.fftSize = 256;
        that.connect(that.context.destination);
        that.quiet = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(_constants_polling_time__WEBPACK_IMPORTED_MODULE_3__["POLLING_TIME"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(new Float32Array(that.fftSize)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(array => that.getFloatTimeDomainData(array)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(array => that.isSilent(array)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skipWhile"])(isSilent => isSilent), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(5000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(isSilent => isSilent));
    }
}
WebAudioDestination.ɵfac = function WebAudioDestination_Factory(t) { return new (t || WebAudioDestination)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_4__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_node__WEBPACK_IMPORTED_MODULE_5__["AUDIO_NODE"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_6__["CONSTRUCTOR_SUPPORT"])); };
WebAudioDestination.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WebAudioDestination, selectors: [["", "waAudioDestinationNode", ""]], outputs: { quiet: "quiet" }, exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAudioDestination, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[waAudioDestinationNode]',
                exportAs: 'AudioNode',
            }]
    }], function () { return [{ type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_4__["AUDIO_CONTEXT"]]
            }] }, { type: AudioNode, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_node__WEBPACK_IMPORTED_MODULE_5__["AUDIO_NODE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_6__["CONSTRUCTOR_SUPPORT"]]
            }] }]; }, { quiet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/custom-wave/directives/listener.ts":
/*!****************************************************!*\
  !*** ./src/app/custom-wave/directives/listener.ts ***!
  \****************************************************/
/*! exports provided: WebAudioListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioListener", function() { return WebAudioListener; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/audio-param */ "./src/app/custom-wave/decorators/audio-param.ts");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_constructor_support__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tokens/constructor-support */ "./src/app/custom-wave/tokens/constructor-support.ts");
/* harmony import */ var _utils_fallback_audio_param__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/fallback-audio-param */ "./src/app/custom-wave/utils/fallback-audio-param.ts");







// @dynamic
class WebAudioListener extends GainNode {
    constructor(context, modern) {
        if (modern) {
            super(context);
        }
        else {
            const result = context.createGain();
            Object.setPrototypeOf(result, WebAudioListener.prototype);
            return result;
        }
    }
    get forwardX() {
        return this.context.listener.forwardX;
    }
    get forwardY() {
        return this.context.listener.forwardY;
    }
    get forwardZ() {
        return this.context.listener.forwardZ;
    }
    get positionX() {
        return this.context.listener.positionX;
    }
    get positionY() {
        return this.context.listener.positionY;
    }
    get positionZ() {
        return this.context.listener.positionZ;
    }
    get upX() {
        return this.context.listener.upX;
    }
    get upY() {
        return this.context.listener.upY;
    }
    get upZ() {
        return this.context.listener.upZ;
    }
    ngOnChanges() {
        if (this.context.listener.positionX instanceof AudioParam) {
            return;
        }
        // Fallback for older browsers
        this.context.listener.setOrientation(Object(_utils_fallback_audio_param__WEBPACK_IMPORTED_MODULE_5__["fallbackAudioParam"])(this.forwardXParam), Object(_utils_fallback_audio_param__WEBPACK_IMPORTED_MODULE_5__["fallbackAudioParam"])(this.forwardYParam), Object(_utils_fallback_audio_param__WEBPACK_IMPORTED_MODULE_5__["fallbackAudioParam"])(this.forwardZParam), Object(_utils_fallback_audio_param__WEBPACK_IMPORTED_MODULE_5__["fallbackAudioParam"])(this.upXParam), Object(_utils_fallback_audio_param__WEBPACK_IMPORTED_MODULE_5__["fallbackAudioParam"])(this.upYParam), Object(_utils_fallback_audio_param__WEBPACK_IMPORTED_MODULE_5__["fallbackAudioParam"])(this.upZParam));
        this.context.listener.setPosition(Object(_utils_fallback_audio_param__WEBPACK_IMPORTED_MODULE_5__["fallbackAudioParam"])(this.positionXParam), Object(_utils_fallback_audio_param__WEBPACK_IMPORTED_MODULE_5__["fallbackAudioParam"])(this.positionYParam), Object(_utils_fallback_audio_param__WEBPACK_IMPORTED_MODULE_5__["fallbackAudioParam"])(this.positionZParam));
    }
}
WebAudioListener.ɵfac = function WebAudioListener_Factory(t) { return new (t || WebAudioListener)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__["AUDIO_CONTEXT"], 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_4__["CONSTRUCTOR_SUPPORT"])); };
WebAudioListener.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: WebAudioListener, selectors: [["", "waAudioContext", ""], ["", "waOfflineAudioContext", "", "length", "", "sampleRate", ""]], inputs: { forwardXParam: ["forwardX", "forwardXParam"], forwardYParam: ["forwardY", "forwardYParam"], forwardZParam: ["forwardZ", "forwardZParam"], positionXParam: ["positionX", "positionXParam"], positionYParam: ["positionY", "positionYParam"], positionZParam: ["positionZ", "positionZParam"], upXParam: ["upX", "upXParam"], upYParam: ["upY", "upYParam"], upZParam: ["upZ", "upZParam"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('forwardX')
], WebAudioListener.prototype, "forwardXParam", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('forwardY')
], WebAudioListener.prototype, "forwardYParam", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('forwardZ')
], WebAudioListener.prototype, "forwardZParam", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('positionX')
], WebAudioListener.prototype, "positionXParam", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('positionY')
], WebAudioListener.prototype, "positionYParam", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('positionZ')
], WebAudioListener.prototype, "positionZParam", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('upX')
], WebAudioListener.prototype, "upXParam", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('upY')
], WebAudioListener.prototype, "upYParam", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('upZ')
], WebAudioListener.prototype, "upZParam", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WebAudioListener, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[waAudioContext],[waOfflineAudioContext][length][sampleRate]',
            }]
    }], function () { return [{ type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__["AUDIO_CONTEXT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_4__["CONSTRUCTOR_SUPPORT"]]
            }] }]; }, { forwardXParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['forwardX']
        }], forwardYParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['forwardY']
        }], forwardZParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['forwardZ']
        }], positionXParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['positionX']
        }], positionYParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['positionY']
        }], positionZParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['positionZ']
        }], upXParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['upX']
        }], upYParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['upY']
        }], upZParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['upZ']
        }] }); })();


/***/ }),

/***/ "./src/app/custom-wave/directives/offline-audio-context.ts":
/*!*****************************************************************!*\
  !*** ./src/app/custom-wave/directives/offline-audio-context.ts ***!
  \*****************************************************************/
/*! exports provided: WebAudioOfflineContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioOfflineContext", function() { return WebAudioOfflineContext; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");



// @dynamic
class WebAudioOfflineContext extends OfflineAudioContext {
    constructor(length, sampleRate, numberOfChannels, autoplay) {
        super(parseInt(numberOfChannels || '', 10) || 1, parseInt(length, 10), parseInt(sampleRate, 10));
        this.complete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.oncomplete = ({ renderedBuffer }) => this.complete.emit(renderedBuffer);
        if (autoplay !== null) {
            this.startRendering();
        }
    }
}
WebAudioOfflineContext.ɵfac = function WebAudioOfflineContext_Factory(t) { return new (t || WebAudioOfflineContext)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('length'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('sampleRate'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('numberOfChannels'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('autoplay')); };
WebAudioOfflineContext.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WebAudioOfflineContext, selectors: [["", "waOfflineAudioContext", "", "length", "", "sampleRate", ""]], outputs: { complete: "complete" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioOfflineContext),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAudioOfflineContext, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[waOfflineAudioContext][length][sampleRate]',
                providers: [
                    {
                        provide: _tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioOfflineContext),
                    },
                ],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['length']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['sampleRate']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['numberOfChannels']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['autoplay']
            }] }]; }, { complete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/custom-wave/directives/output.ts":
/*!**************************************************!*\
  !*** ./src/app/custom-wave/directives/output.ts ***!
  \**************************************************/
/*! exports provided: WebAudioOutput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioOutput", function() { return WebAudioOutput; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _tokens_constructor_support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tokens/constructor-support */ "./src/app/custom-wave/tokens/constructor-support.ts");
/* harmony import */ var _utils_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/connect */ "./src/app/custom-wave/utils/connect.ts");






// @dynamic
class WebAudioOutput extends GainNode {
    constructor(context, node, modern) {
        if (modern) {
            super(context);
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_4__["connect"])(node, this);
        }
        else {
            const result = context.createGain();
            Object.setPrototypeOf(result, WebAudioOutput.prototype);
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_4__["connect"])(node, result);
            return result;
        }
    }
    set waOutput(destination) {
        this.disconnect();
        Object(_utils_connect__WEBPACK_IMPORTED_MODULE_4__["connect"])(this, destination);
    }
    ngOnDestroy() {
        this.disconnect();
    }
    static init(that, node) {
        Object(_utils_connect__WEBPACK_IMPORTED_MODULE_4__["connect"])(node, that);
    }
}
WebAudioOutput.ɵfac = function WebAudioOutput_Factory(t) { return new (t || WebAudioOutput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_3__["CONSTRUCTOR_SUPPORT"])); };
WebAudioOutput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WebAudioOutput, selectors: [["", "waOutput", ""]], inputs: { waOutput: "waOutput" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAudioOutput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[waOutput]',
            }]
    }], function () { return [{ type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]]
            }] }, { type: AudioNode, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_3__["CONSTRUCTOR_SUPPORT"]]
            }] }]; }, { waOutput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/custom-wave/directives/stream-destination.ts":
/*!**************************************************************!*\
  !*** ./src/app/custom-wave/directives/stream-destination.ts ***!
  \**************************************************************/
/*! exports provided: WebAudioMediaStreamDestination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioMediaStreamDestination", function() { return WebAudioMediaStreamDestination; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _tokens_constructor_support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tokens/constructor-support */ "./src/app/custom-wave/tokens/constructor-support.ts");
/* harmony import */ var _utils_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/connect */ "./src/app/custom-wave/utils/connect.ts");






// @dynamic
class WebAudioMediaStreamDestination extends MediaStreamAudioDestinationNode {
    constructor(context, node, modern) {
        if (modern) {
            super(context);
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_4__["connect"])(node, this);
        }
        else {
            const result = context.createMediaStreamDestination();
            Object.setPrototypeOf(result, WebAudioMediaStreamDestination.prototype);
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_4__["connect"])(node, result);
            return result;
        }
    }
}
WebAudioMediaStreamDestination.ɵfac = function WebAudioMediaStreamDestination_Factory(t) { return new (t || WebAudioMediaStreamDestination)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_3__["CONSTRUCTOR_SUPPORT"])); };
WebAudioMediaStreamDestination.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WebAudioMediaStreamDestination, selectors: [["", "waMediaStreamAudioDestinationNode", ""]], exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAudioMediaStreamDestination, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[waMediaStreamAudioDestinationNode]',
                exportAs: 'AudioNode',
            }]
    }], function () { return [{ type: AudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]]
            }] }, { type: AudioNode, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_3__["CONSTRUCTOR_SUPPORT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/custom-wave/module.ts":
/*!***************************************!*\
  !*** ./src/app/custom-wave/module.ts ***!
  \***************************************/
/*! exports provided: CustWebAudioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustWebAudioModule", function() { return CustWebAudioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _directives_audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/audio-context */ "./src/app/custom-wave/directives/audio-context.ts");
/* harmony import */ var _directives_channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/channel */ "./src/app/custom-wave/directives/channel.ts");
/* harmony import */ var _directives_destination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/destination */ "./src/app/custom-wave/directives/destination.ts");
/* harmony import */ var _directives_listener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/listener */ "./src/app/custom-wave/directives/listener.ts");
/* harmony import */ var _directives_offline_audio_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/offline-audio-context */ "./src/app/custom-wave/directives/offline-audio-context.ts");
/* harmony import */ var _directives_output__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/output */ "./src/app/custom-wave/directives/output.ts");
/* harmony import */ var _directives_stream_destination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/stream-destination */ "./src/app/custom-wave/directives/stream-destination.ts");
/* harmony import */ var _nodes_analyser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nodes/analyser */ "./src/app/custom-wave/nodes/analyser.ts");
/* harmony import */ var _nodes_biquad_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nodes/biquad-filter */ "./src/app/custom-wave/nodes/biquad-filter.ts");
/* harmony import */ var _nodes_channel_merger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nodes/channel-merger */ "./src/app/custom-wave/nodes/channel-merger.ts");
/* harmony import */ var _nodes_channel_splitter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nodes/channel-splitter */ "./src/app/custom-wave/nodes/channel-splitter.ts");
/* harmony import */ var _nodes_convolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nodes/convolver */ "./src/app/custom-wave/nodes/convolver.ts");
/* harmony import */ var _nodes_delay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nodes/delay */ "./src/app/custom-wave/nodes/delay.ts");
/* harmony import */ var _nodes_dynamics_compressor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nodes/dynamics-compressor */ "./src/app/custom-wave/nodes/dynamics-compressor.ts");
/* harmony import */ var _nodes_gain__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nodes/gain */ "./src/app/custom-wave/nodes/gain.ts");
/* harmony import */ var _nodes_iir_filter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nodes/iir-filter */ "./src/app/custom-wave/nodes/iir-filter.ts");
/* harmony import */ var _nodes_panner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nodes/panner */ "./src/app/custom-wave/nodes/panner.ts");
/* harmony import */ var _nodes_script_processor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./nodes/script-processor */ "./src/app/custom-wave/nodes/script-processor.ts");
/* harmony import */ var _nodes_stereo_panner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./nodes/stereo-panner */ "./src/app/custom-wave/nodes/stereo-panner.ts");
/* harmony import */ var _nodes_wave_shaper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./nodes/wave-shaper */ "./src/app/custom-wave/nodes/wave-shaper.ts");
/* harmony import */ var _nodes_worklet__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./nodes/worklet */ "./src/app/custom-wave/nodes/worklet.ts");
/* harmony import */ var _pipes_audio_param_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/audio-param.pipe */ "./src/app/custom-wave/pipes/audio-param.pipe.ts");
/* harmony import */ var _pipes_periodic_wave_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/periodic-wave.pipe */ "./src/app/custom-wave/pipes/periodic-wave.pipe.ts");
/* harmony import */ var _sources_buffer_source__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sources/buffer-source */ "./src/app/custom-wave/sources/buffer-source.ts");
/* harmony import */ var _sources_constant_source__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sources/constant-source */ "./src/app/custom-wave/sources/constant-source.ts");
/* harmony import */ var _sources_media_source__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./sources/media-source */ "./src/app/custom-wave/sources/media-source.ts");
/* harmony import */ var _sources_media_stream_source__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sources/media-stream-source */ "./src/app/custom-wave/sources/media-stream-source.ts");
/* harmony import */ var _sources_media_stream_track_source__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./sources/media-stream-track-source */ "./src/app/custom-wave/sources/media-stream-track-source.ts");






























class CustWebAudioModule {
}
CustWebAudioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustWebAudioModule });
CustWebAudioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustWebAudioModule_Factory(t) { return new (t || CustWebAudioModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustWebAudioModule, { declarations: [_directives_audio_context__WEBPACK_IMPORTED_MODULE_1__["WebAudioContext"],
        _directives_channel__WEBPACK_IMPORTED_MODULE_2__["WebAudioChannel"],
        _directives_destination__WEBPACK_IMPORTED_MODULE_3__["WebAudioDestination"],
        _directives_listener__WEBPACK_IMPORTED_MODULE_4__["WebAudioListener"],
        _directives_offline_audio_context__WEBPACK_IMPORTED_MODULE_5__["WebAudioOfflineContext"],
        _directives_output__WEBPACK_IMPORTED_MODULE_6__["WebAudioOutput"],
        _directives_stream_destination__WEBPACK_IMPORTED_MODULE_7__["WebAudioMediaStreamDestination"],
        _sources_buffer_source__WEBPACK_IMPORTED_MODULE_24__["WebAudioBufferSource"],
        _sources_constant_source__WEBPACK_IMPORTED_MODULE_25__["WebAudioConstantSource"],
        _sources_media_source__WEBPACK_IMPORTED_MODULE_26__["WebAudioMediaSource"],
        _sources_media_stream_source__WEBPACK_IMPORTED_MODULE_27__["WebAudioMediaStreamSource"],
        _sources_media_stream_track_source__WEBPACK_IMPORTED_MODULE_28__["WebAudioMediaStreamTrackSource"],
        _nodes_analyser__WEBPACK_IMPORTED_MODULE_8__["WebAudioAnalyser"],
        _nodes_biquad_filter__WEBPACK_IMPORTED_MODULE_9__["WebAudioBiquadFilter"],
        _nodes_channel_splitter__WEBPACK_IMPORTED_MODULE_11__["WebAudioChannelSplitter"],
        _nodes_channel_merger__WEBPACK_IMPORTED_MODULE_10__["WebAudioChannelMerger"],
        _nodes_convolver__WEBPACK_IMPORTED_MODULE_12__["WebAudioConvolver"],
        _nodes_delay__WEBPACK_IMPORTED_MODULE_13__["WebAudioDelay"],
        _nodes_dynamics_compressor__WEBPACK_IMPORTED_MODULE_14__["WebAudioDynamicsCompressor"],
        _nodes_gain__WEBPACK_IMPORTED_MODULE_15__["WebAudioGain"],
        _nodes_iir_filter__WEBPACK_IMPORTED_MODULE_16__["WebAudioIIRFilter"],
        _nodes_panner__WEBPACK_IMPORTED_MODULE_17__["WebAudioPanner"],
        _nodes_script_processor__WEBPACK_IMPORTED_MODULE_18__["WebAudioScriptProcessor"],
        _nodes_stereo_panner__WEBPACK_IMPORTED_MODULE_19__["WebAudioStereoPanner"],
        _nodes_wave_shaper__WEBPACK_IMPORTED_MODULE_20__["WebAudioWaveShaper"],
        _nodes_worklet__WEBPACK_IMPORTED_MODULE_21__["WebAudioWorklet"],
        _pipes_audio_param_pipe__WEBPACK_IMPORTED_MODULE_22__["WebAudioParamPipe"],
        _pipes_periodic_wave_pipe__WEBPACK_IMPORTED_MODULE_23__["WebAudioPeriodicWavePipe"]], exports: [_directives_audio_context__WEBPACK_IMPORTED_MODULE_1__["WebAudioContext"],
        _directives_channel__WEBPACK_IMPORTED_MODULE_2__["WebAudioChannel"],
        _directives_destination__WEBPACK_IMPORTED_MODULE_3__["WebAudioDestination"],
        _directives_listener__WEBPACK_IMPORTED_MODULE_4__["WebAudioListener"],
        _directives_offline_audio_context__WEBPACK_IMPORTED_MODULE_5__["WebAudioOfflineContext"],
        _directives_output__WEBPACK_IMPORTED_MODULE_6__["WebAudioOutput"],
        _directives_stream_destination__WEBPACK_IMPORTED_MODULE_7__["WebAudioMediaStreamDestination"],
        _sources_buffer_source__WEBPACK_IMPORTED_MODULE_24__["WebAudioBufferSource"],
        _sources_constant_source__WEBPACK_IMPORTED_MODULE_25__["WebAudioConstantSource"],
        _sources_media_source__WEBPACK_IMPORTED_MODULE_26__["WebAudioMediaSource"],
        _sources_media_stream_source__WEBPACK_IMPORTED_MODULE_27__["WebAudioMediaStreamSource"],
        _sources_media_stream_track_source__WEBPACK_IMPORTED_MODULE_28__["WebAudioMediaStreamTrackSource"],
        _nodes_analyser__WEBPACK_IMPORTED_MODULE_8__["WebAudioAnalyser"],
        _nodes_biquad_filter__WEBPACK_IMPORTED_MODULE_9__["WebAudioBiquadFilter"],
        _nodes_channel_splitter__WEBPACK_IMPORTED_MODULE_11__["WebAudioChannelSplitter"],
        _nodes_channel_merger__WEBPACK_IMPORTED_MODULE_10__["WebAudioChannelMerger"],
        _nodes_convolver__WEBPACK_IMPORTED_MODULE_12__["WebAudioConvolver"],
        _nodes_delay__WEBPACK_IMPORTED_MODULE_13__["WebAudioDelay"],
        _nodes_dynamics_compressor__WEBPACK_IMPORTED_MODULE_14__["WebAudioDynamicsCompressor"],
        _nodes_gain__WEBPACK_IMPORTED_MODULE_15__["WebAudioGain"],
        _nodes_iir_filter__WEBPACK_IMPORTED_MODULE_16__["WebAudioIIRFilter"],
        _nodes_panner__WEBPACK_IMPORTED_MODULE_17__["WebAudioPanner"],
        _nodes_script_processor__WEBPACK_IMPORTED_MODULE_18__["WebAudioScriptProcessor"],
        _nodes_stereo_panner__WEBPACK_IMPORTED_MODULE_19__["WebAudioStereoPanner"],
        _nodes_wave_shaper__WEBPACK_IMPORTED_MODULE_20__["WebAudioWaveShaper"],
        _nodes_worklet__WEBPACK_IMPORTED_MODULE_21__["WebAudioWorklet"],
        _pipes_audio_param_pipe__WEBPACK_IMPORTED_MODULE_22__["WebAudioParamPipe"],
        _pipes_periodic_wave_pipe__WEBPACK_IMPORTED_MODULE_23__["WebAudioPeriodicWavePipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustWebAudioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _directives_audio_context__WEBPACK_IMPORTED_MODULE_1__["WebAudioContext"],
                    _directives_channel__WEBPACK_IMPORTED_MODULE_2__["WebAudioChannel"],
                    _directives_destination__WEBPACK_IMPORTED_MODULE_3__["WebAudioDestination"],
                    _directives_listener__WEBPACK_IMPORTED_MODULE_4__["WebAudioListener"],
                    _directives_offline_audio_context__WEBPACK_IMPORTED_MODULE_5__["WebAudioOfflineContext"],
                    _directives_output__WEBPACK_IMPORTED_MODULE_6__["WebAudioOutput"],
                    _directives_stream_destination__WEBPACK_IMPORTED_MODULE_7__["WebAudioMediaStreamDestination"],
                    _sources_buffer_source__WEBPACK_IMPORTED_MODULE_24__["WebAudioBufferSource"],
                    _sources_constant_source__WEBPACK_IMPORTED_MODULE_25__["WebAudioConstantSource"],
                    _sources_media_source__WEBPACK_IMPORTED_MODULE_26__["WebAudioMediaSource"],
                    _sources_media_stream_source__WEBPACK_IMPORTED_MODULE_27__["WebAudioMediaStreamSource"],
                    _sources_media_stream_track_source__WEBPACK_IMPORTED_MODULE_28__["WebAudioMediaStreamTrackSource"],
                    _nodes_analyser__WEBPACK_IMPORTED_MODULE_8__["WebAudioAnalyser"],
                    _nodes_biquad_filter__WEBPACK_IMPORTED_MODULE_9__["WebAudioBiquadFilter"],
                    _nodes_channel_splitter__WEBPACK_IMPORTED_MODULE_11__["WebAudioChannelSplitter"],
                    _nodes_channel_merger__WEBPACK_IMPORTED_MODULE_10__["WebAudioChannelMerger"],
                    _nodes_convolver__WEBPACK_IMPORTED_MODULE_12__["WebAudioConvolver"],
                    _nodes_delay__WEBPACK_IMPORTED_MODULE_13__["WebAudioDelay"],
                    _nodes_dynamics_compressor__WEBPACK_IMPORTED_MODULE_14__["WebAudioDynamicsCompressor"],
                    _nodes_gain__WEBPACK_IMPORTED_MODULE_15__["WebAudioGain"],
                    _nodes_iir_filter__WEBPACK_IMPORTED_MODULE_16__["WebAudioIIRFilter"],
                    _nodes_panner__WEBPACK_IMPORTED_MODULE_17__["WebAudioPanner"],
                    _nodes_script_processor__WEBPACK_IMPORTED_MODULE_18__["WebAudioScriptProcessor"],
                    _nodes_stereo_panner__WEBPACK_IMPORTED_MODULE_19__["WebAudioStereoPanner"],
                    _nodes_wave_shaper__WEBPACK_IMPORTED_MODULE_20__["WebAudioWaveShaper"],
                    _nodes_worklet__WEBPACK_IMPORTED_MODULE_21__["WebAudioWorklet"],
                    _pipes_audio_param_pipe__WEBPACK_IMPORTED_MODULE_22__["WebAudioParamPipe"],
                    _pipes_periodic_wave_pipe__WEBPACK_IMPORTED_MODULE_23__["WebAudioPeriodicWavePipe"],
                ],
                exports: [
                    _directives_audio_context__WEBPACK_IMPORTED_MODULE_1__["WebAudioContext"],
                    _directives_channel__WEBPACK_IMPORTED_MODULE_2__["WebAudioChannel"],
                    _directives_destination__WEBPACK_IMPORTED_MODULE_3__["WebAudioDestination"],
                    _directives_listener__WEBPACK_IMPORTED_MODULE_4__["WebAudioListener"],
                    _directives_offline_audio_context__WEBPACK_IMPORTED_MODULE_5__["WebAudioOfflineContext"],
                    _directives_output__WEBPACK_IMPORTED_MODULE_6__["WebAudioOutput"],
                    _directives_stream_destination__WEBPACK_IMPORTED_MODULE_7__["WebAudioMediaStreamDestination"],
                    _sources_buffer_source__WEBPACK_IMPORTED_MODULE_24__["WebAudioBufferSource"],
                    _sources_constant_source__WEBPACK_IMPORTED_MODULE_25__["WebAudioConstantSource"],
                    _sources_media_source__WEBPACK_IMPORTED_MODULE_26__["WebAudioMediaSource"],
                    _sources_media_stream_source__WEBPACK_IMPORTED_MODULE_27__["WebAudioMediaStreamSource"],
                    _sources_media_stream_track_source__WEBPACK_IMPORTED_MODULE_28__["WebAudioMediaStreamTrackSource"],
                    _nodes_analyser__WEBPACK_IMPORTED_MODULE_8__["WebAudioAnalyser"],
                    _nodes_biquad_filter__WEBPACK_IMPORTED_MODULE_9__["WebAudioBiquadFilter"],
                    _nodes_channel_splitter__WEBPACK_IMPORTED_MODULE_11__["WebAudioChannelSplitter"],
                    _nodes_channel_merger__WEBPACK_IMPORTED_MODULE_10__["WebAudioChannelMerger"],
                    _nodes_convolver__WEBPACK_IMPORTED_MODULE_12__["WebAudioConvolver"],
                    _nodes_delay__WEBPACK_IMPORTED_MODULE_13__["WebAudioDelay"],
                    _nodes_dynamics_compressor__WEBPACK_IMPORTED_MODULE_14__["WebAudioDynamicsCompressor"],
                    _nodes_gain__WEBPACK_IMPORTED_MODULE_15__["WebAudioGain"],
                    _nodes_iir_filter__WEBPACK_IMPORTED_MODULE_16__["WebAudioIIRFilter"],
                    _nodes_panner__WEBPACK_IMPORTED_MODULE_17__["WebAudioPanner"],
                    _nodes_script_processor__WEBPACK_IMPORTED_MODULE_18__["WebAudioScriptProcessor"],
                    _nodes_stereo_panner__WEBPACK_IMPORTED_MODULE_19__["WebAudioStereoPanner"],
                    _nodes_wave_shaper__WEBPACK_IMPORTED_MODULE_20__["WebAudioWaveShaper"],
                    _nodes_worklet__WEBPACK_IMPORTED_MODULE_21__["WebAudioWorklet"],
                    _pipes_audio_param_pipe__WEBPACK_IMPORTED_MODULE_22__["WebAudioParamPipe"],
                    _pipes_periodic_wave_pipe__WEBPACK_IMPORTED_MODULE_23__["WebAudioPeriodicWavePipe"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/custom-wave/nodes/analyser.ts":
/*!***********************************************!*\
  !*** ./src/app/custom-wave/nodes/analyser.ts ***!
  \***********************************************/
/*! exports provided: WebAudioAnalyser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioAnalyser", function() { return WebAudioAnalyser; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _tokens_constructor_support__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tokens/constructor-support */ "./src/app/custom-wave/tokens/constructor-support.ts");
/* harmony import */ var _utils_connect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/connect */ "./src/app/custom-wave/utils/connect.ts");
/* harmony import */ var _utils_parse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/parse */ "./src/app/custom-wave/utils/parse.ts");









// @dynamic
class WebAudioAnalyser extends AnalyserNode {
    constructor(context, node, modern, fftSizeArg, maxDecibelsArg, minDecibelsArg, smoothingTimeConstantArg) {
        const fftSize = Object(_utils_parse__WEBPACK_IMPORTED_MODULE_7__["parse"])(fftSizeArg, 2048);
        const maxDecibels = Object(_utils_parse__WEBPACK_IMPORTED_MODULE_7__["parse"])(maxDecibelsArg, -30);
        const minDecibels = Object(_utils_parse__WEBPACK_IMPORTED_MODULE_7__["parse"])(minDecibelsArg, -100);
        const smoothingTimeConstant = Object(_utils_parse__WEBPACK_IMPORTED_MODULE_7__["parse"])(smoothingTimeConstantArg, 0.8);
        if (modern) {
            super(context, { fftSize, maxDecibels, minDecibels, smoothingTimeConstant });
            WebAudioAnalyser.init(this, node);
        }
        else {
            const result = context.createAnalyser();
            Object.setPrototypeOf(result, WebAudioAnalyser.prototype);
            WebAudioAnalyser.init(result, node);
            result.fftSize = fftSize;
            result.maxDecibels = maxDecibels;
            result.minDecibels = minDecibels;
            result.smoothingTimeConstant = smoothingTimeConstant;
            return result;
        }
    }
    ngOnDestroy() {
        this.disconnect();
    }
    static init(that, node) {
        Object(_utils_connect__WEBPACK_IMPORTED_MODULE_6__["connect"])(node, that);
        that.frequencyByte$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_1__["animationFrameScheduler"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(new Uint8Array(that.frequencyBinCount)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(array => array.length === that.frequencyBinCount
            ? array
            : new Uint8Array(that.frequencyBinCount)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(array => that.getByteFrequencyData(array)));
        that.frequencyFloat$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_1__["animationFrameScheduler"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(new Float32Array(that.frequencyBinCount)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(array => array.length === that.frequencyBinCount
            ? array
            : new Float32Array(that.frequencyBinCount)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(array => that.getFloatFrequencyData(array)));
        that.timeByte$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_1__["animationFrameScheduler"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(new Uint8Array(that.fftSize)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(array => array.length === that.fftSize ? array : new Uint8Array(that.fftSize)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(array => that.getByteTimeDomainData(array)));
        that.timeFloat$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_1__["animationFrameScheduler"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(new Float32Array(that.fftSize)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(array => array.length === that.fftSize ? array : new Float32Array(that.fftSize)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(array => that.getFloatTimeDomainData(array)));
    }
}
WebAudioAnalyser.ɵfac = function WebAudioAnalyser_Factory(t) { return new (t || WebAudioAnalyser)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"], 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_5__["CONSTRUCTOR_SUPPORT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('fftSize'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('maxDecibels'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('minDecibels'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('smoothingTimeConstant')); };
WebAudioAnalyser.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WebAudioAnalyser, selectors: [["", "waAnalyserNode", ""]], inputs: { fftSize: "fftSize", minDecibels: "minDecibels", maxDecibels: "maxDecibels", smoothingTimeConstant: "smoothingTimeConstant", channelCount: "channelCount", channelCountMode: "channelCountMode", channelInterpretation: "channelInterpretation" }, outputs: { frequencyByte$: "frequencyByte$", frequencyFloat$: "frequencyFloat$", timeByte$: "timeByte$", timeFloat$: "timeFloat$" }, exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioAnalyser),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAudioAnalyser, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[waAnalyserNode]',
                exportAs: 'AudioNode',
                inputs: [
                    'fftSize',
                    'minDecibels',
                    'maxDecibels',
                    'smoothingTimeConstant',
                    'channelCount',
                    'channelCountMode',
                    'channelInterpretation',
                ],
                providers: [
                    {
                        provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioAnalyser),
                    },
                ],
            }]
    }], function () { return [{ type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__["AUDIO_CONTEXT"]]
            }] }, { type: AudioNode, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_5__["CONSTRUCTOR_SUPPORT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['fftSize']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['maxDecibels']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['minDecibels']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['smoothingTimeConstant']
            }] }]; }, { frequencyByte$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], frequencyFloat$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], timeByte$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], timeFloat$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/custom-wave/nodes/biquad-filter.ts":
/*!****************************************************!*\
  !*** ./src/app/custom-wave/nodes/biquad-filter.ts ***!
  \****************************************************/
/*! exports provided: WebAudioBiquadFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioBiquadFilter", function() { return WebAudioBiquadFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/audio-param */ "./src/app/custom-wave/decorators/audio-param.ts");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _tokens_constructor_support__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tokens/constructor-support */ "./src/app/custom-wave/tokens/constructor-support.ts");
/* harmony import */ var _utils_connect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/connect */ "./src/app/custom-wave/utils/connect.ts");
/* harmony import */ var _utils_parse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/parse */ "./src/app/custom-wave/utils/parse.ts");









// @dynamic
class WebAudioBiquadFilter extends BiquadFilterNode {
    constructor(context, modern, node, detuneArg, frequencyArg, gainArg, QArg) {
        const detune = Object(_utils_parse__WEBPACK_IMPORTED_MODULE_7__["parse"])(detuneArg, 0);
        const frequency = Object(_utils_parse__WEBPACK_IMPORTED_MODULE_7__["parse"])(frequencyArg, 350);
        const gain = Object(_utils_parse__WEBPACK_IMPORTED_MODULE_7__["parse"])(gainArg, 0);
        const Q = Object(_utils_parse__WEBPACK_IMPORTED_MODULE_7__["parse"])(QArg, 1);
        if (modern) {
            super(context, { detune, frequency, gain, Q });
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_6__["connect"])(node, this);
        }
        else {
            const result = context.createBiquadFilter();
            Object.setPrototypeOf(result, WebAudioBiquadFilter.prototype);
            result.detune.value = detune;
            result.frequency.value = frequency;
            result.gain.value = gain;
            result.Q.value = Q;
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_6__["connect"])(node, result);
            return result;
        }
    }
    ngOnDestroy() {
        this.disconnect();
    }
    static init(that, node) {
        Object(_utils_connect__WEBPACK_IMPORTED_MODULE_6__["connect"])(node, that);
    }
}
WebAudioBiquadFilter.ɵfac = function WebAudioBiquadFilter_Factory(t) { return new (t || WebAudioBiquadFilter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_5__["CONSTRUCTOR_SUPPORT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"], 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('detune'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('frequency'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('gain'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('Q')); };
WebAudioBiquadFilter.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: WebAudioBiquadFilter, selectors: [["", "waBiquadFilterNode", ""]], inputs: { type: "type", channelCount: "channelCount", channelCountMode: "channelCountMode", channelInterpretation: "channelInterpretation", detuneParam: ["detune", "detuneParam"], frequencyParam: ["frequency", "frequencyParam"], gainParam: ["gain", "gainParam"], qParam: ["Q", "qParam"] }, exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => WebAudioBiquadFilter),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('detune')
], WebAudioBiquadFilter.prototype, "detuneParam", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('frequency')
], WebAudioBiquadFilter.prototype, "frequencyParam", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('gain')
], WebAudioBiquadFilter.prototype, "gainParam", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('Q')
], WebAudioBiquadFilter.prototype, "qParam", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WebAudioBiquadFilter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[waBiquadFilterNode]',
                exportAs: 'AudioNode',
                inputs: ['type', 'channelCount', 'channelCountMode', 'channelInterpretation'],
                providers: [
                    {
                        provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => WebAudioBiquadFilter),
                    },
                ],
            }]
    }], function () { return [{ type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__["AUDIO_CONTEXT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_5__["CONSTRUCTOR_SUPPORT"]]
            }] }, { type: AudioNode, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['detune']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['frequency']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['gain']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['Q']
            }] }]; }, { detuneParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['detune']
        }], frequencyParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['frequency']
        }], gainParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['gain']
        }], qParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['Q']
        }] }); })();


/***/ }),

/***/ "./src/app/custom-wave/nodes/channel-merger.ts":
/*!*****************************************************!*\
  !*** ./src/app/custom-wave/nodes/channel-merger.ts ***!
  \*****************************************************/
/*! exports provided: WebAudioChannelMerger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioChannelMerger", function() { return WebAudioChannelMerger; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _directives_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directives/channel */ "./src/app/custom-wave/directives/channel.ts");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _tokens_constructor_support__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tokens/constructor-support */ "./src/app/custom-wave/tokens/constructor-support.ts");






// @dynamic
class WebAudioChannelMerger extends ChannelMergerNode {
    constructor(inputs, context, modern) {
        const numberOfInputs = parseInt(inputs || '', 10) || 6;
        if (modern) {
            super(context, { numberOfInputs });
        }
        else {
            const result = context.createChannelMerger(numberOfInputs);
            Object.setPrototypeOf(result, WebAudioChannelMerger.prototype);
            return result;
        }
    }
    set channels(channels) {
        channels.forEach((node, index) => {
            node.connect(this, 0, index);
        });
    }
    ngOnDestroy() {
        this.disconnect();
    }
}
WebAudioChannelMerger.ɵfac = function WebAudioChannelMerger_Factory(t) { return new (t || WebAudioChannelMerger)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('numberOfInputs'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_2__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_4__["CONSTRUCTOR_SUPPORT"])); };
WebAudioChannelMerger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WebAudioChannelMerger, selectors: [["", "waChannelMergerNode", ""]], contentQueries: function WebAudioChannelMerger_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _directives_channel__WEBPACK_IMPORTED_MODULE_1__["WebAudioChannel"], false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.channels = _t);
    } }, inputs: { channelCount: "channelCount", channelCountMode: "channelCountMode", channelInterpretation: "channelInterpretation" }, exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_3__["AUDIO_NODE"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioChannelMerger),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAudioChannelMerger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[waChannelMergerNode]',
                exportAs: 'AudioNode',
                inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
                providers: [
                    {
                        provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_3__["AUDIO_NODE"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioChannelMerger),
                    },
                ],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['numberOfInputs']
            }] }, { type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_2__["AUDIO_CONTEXT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_4__["CONSTRUCTOR_SUPPORT"]]
            }] }]; }, { channels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_directives_channel__WEBPACK_IMPORTED_MODULE_1__["WebAudioChannel"], { descendants: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/custom-wave/nodes/channel-splitter.ts":
/*!*******************************************************!*\
  !*** ./src/app/custom-wave/nodes/channel-splitter.ts ***!
  \*******************************************************/
/*! exports provided: WebAudioChannelSplitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioChannelSplitter", function() { return WebAudioChannelSplitter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _tokens_constructor_support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tokens/constructor-support */ "./src/app/custom-wave/tokens/constructor-support.ts");
/* harmony import */ var _utils_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/connect */ "./src/app/custom-wave/utils/connect.ts");






// @dynamic
class WebAudioChannelSplitter extends ChannelSplitterNode {
    constructor(outputs, context, node, modern) {
        const numberOfOutputs = parseInt(outputs || '', 10) || 6;
        if (modern) {
            super(context, { numberOfOutputs });
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_4__["connect"])(node, this);
        }
        else {
            const result = context.createChannelSplitter(numberOfOutputs);
            Object.setPrototypeOf(result, WebAudioChannelSplitter.prototype);
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_4__["connect"])(node, result);
            return result;
        }
    }
    set channels(channels) {
        this.disconnect();
        channels
            .filter(node => !!node)
            .forEach((node, index) => {
            this.connect(node, index);
        });
    }
    ngOnDestroy() {
        this.disconnect();
    }
}
WebAudioChannelSplitter.ɵfac = function WebAudioChannelSplitter_Factory(t) { return new (t || WebAudioChannelSplitter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('numberOfOutputs'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"], 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_3__["CONSTRUCTOR_SUPPORT"])); };
WebAudioChannelSplitter.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WebAudioChannelSplitter, selectors: [["", "waChannelSplitterNode", ""]], contentQueries: function WebAudioChannelSplitter_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"], false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.channels = _t);
    } }, inputs: { channelCount: "channelCount", channelCountMode: "channelCountMode", channelInterpretation: "channelInterpretation" }, exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"],
                useValue: null,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAudioChannelSplitter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[waChannelSplitterNode]',
                exportAs: 'AudioNode',
                inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
                providers: [
                    {
                        provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"],
                        useValue: null,
                    },
                ],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['numberOfOutputs']
            }] }, { type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]]
            }] }, { type: AudioNode, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_3__["CONSTRUCTOR_SUPPORT"]]
            }] }]; }, { channels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"], { descendants: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/custom-wave/nodes/convolver.ts":
/*!************************************************!*\
  !*** ./src/app/custom-wave/nodes/convolver.ts ***!
  \************************************************/
/*! exports provided: WebAudioConvolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioConvolver", function() { return WebAudioConvolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_audio_buffer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/audio-buffer.service */ "./src/app/custom-wave/services/audio-buffer.service.ts");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _tokens_constructor_support__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tokens/constructor-support */ "./src/app/custom-wave/tokens/constructor-support.ts");
/* harmony import */ var _utils_connect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/connect */ "./src/app/custom-wave/utils/connect.ts");










// @dynamic
class WebAudioConvolver extends ConvolverNode {
    constructor(audioBufferService, context, node, modern) {
        if (modern) {
            super(context);
            WebAudioConvolver.init(this, node, audioBufferService);
        }
        else {
            const result = context.createConvolver();
            Object.setPrototypeOf(result, WebAudioConvolver.prototype);
            WebAudioConvolver.init(result, node, audioBufferService);
            return result;
        }
    }
    set bufferSetter(source) {
        this.buffer$.next(source);
    }
    ngOnDestroy() {
        this.buffer$.complete();
        this.disconnect();
    }
    static init(that, node, audioBufferService) {
        Object(_utils_connect__WEBPACK_IMPORTED_MODULE_7__["connect"])(node, that);
        that.buffer$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        that.buffer$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(source => typeof source === 'string'
            ? audioBufferService.fetch(source)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(source)))
            .subscribe(buffer => {
            that.buffer = buffer;
        });
    }
}
WebAudioConvolver.ɵfac = function WebAudioConvolver_Factory(t) { return new (t || WebAudioConvolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_audio_buffer_service__WEBPACK_IMPORTED_MODULE_3__["AudioBufferService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_4__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_node__WEBPACK_IMPORTED_MODULE_5__["AUDIO_NODE"], 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_6__["CONSTRUCTOR_SUPPORT"])); };
WebAudioConvolver.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WebAudioConvolver, selectors: [["", "waConvolverNode", ""]], inputs: { normalize: "normalize", channelCount: "channelCount", channelCountMode: "channelCountMode", channelInterpretation: "channelInterpretation", bufferSetter: ["buffer", "bufferSetter"] }, exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_5__["AUDIO_NODE"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioConvolver),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAudioConvolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[waConvolverNode]',
                exportAs: 'AudioNode',
                inputs: ['normalize', 'channelCount', 'channelCountMode', 'channelInterpretation'],
                providers: [
                    {
                        provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_5__["AUDIO_NODE"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioConvolver),
                    },
                ],
            }]
    }], function () { return [{ type: _services_audio_buffer_service__WEBPACK_IMPORTED_MODULE_3__["AudioBufferService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_services_audio_buffer_service__WEBPACK_IMPORTED_MODULE_3__["AudioBufferService"]]
            }] }, { type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_4__["AUDIO_CONTEXT"]]
            }] }, { type: AudioNode, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_node__WEBPACK_IMPORTED_MODULE_5__["AUDIO_NODE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_6__["CONSTRUCTOR_SUPPORT"]]
            }] }]; }, { bufferSetter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['buffer']
        }] }); })();


/***/ }),

/***/ "./src/app/custom-wave/nodes/delay.ts":
/*!********************************************!*\
  !*** ./src/app/custom-wave/nodes/delay.ts ***!
  \********************************************/
/*! exports provided: WebAudioDelay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioDelay", function() { return WebAudioDelay; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/audio-param */ "./src/app/custom-wave/decorators/audio-param.ts");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _tokens_constructor_support__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tokens/constructor-support */ "./src/app/custom-wave/tokens/constructor-support.ts");
/* harmony import */ var _utils_connect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/connect */ "./src/app/custom-wave/utils/connect.ts");
/* harmony import */ var _utils_parse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/parse */ "./src/app/custom-wave/utils/parse.ts");









// @dynamic
class WebAudioDelay extends DelayNode {
    constructor(context, node, modern, delayTimeArg, maxDelayTimeArg) {
        const delayTime = Object(_utils_parse__WEBPACK_IMPORTED_MODULE_7__["parse"])(delayTimeArg, 0);
        const maxDelayTime = Object(_utils_parse__WEBPACK_IMPORTED_MODULE_7__["parse"])(maxDelayTimeArg, 1);
        if (modern) {
            super(context, { delayTime, maxDelayTime });
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_6__["connect"])(node, this);
        }
        else {
            const result = context.createDelay(maxDelayTime);
            Object.setPrototypeOf(result, WebAudioDelay.prototype);
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_6__["connect"])(node, result);
            result.delayTime.value = delayTime;
            return result;
        }
    }
    ngOnDestroy() {
        this.disconnect();
    }
    static init(that, node) {
        Object(_utils_connect__WEBPACK_IMPORTED_MODULE_6__["connect"])(node, that);
    }
}
WebAudioDelay.ɵfac = function WebAudioDelay_Factory(t) { return new (t || WebAudioDelay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"], 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_5__["CONSTRUCTOR_SUPPORT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('delayTime'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('maxDelayTime')); };
WebAudioDelay.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: WebAudioDelay, selectors: [["", "waDelayNode", ""]], inputs: { channelCount: "channelCount", channelCountMode: "channelCountMode", channelInterpretation: "channelInterpretation", delayTimeParam: ["delayTime", "delayTimeParam"] }, exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => WebAudioDelay),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('delayTime')
], WebAudioDelay.prototype, "delayTimeParam", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WebAudioDelay, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[waDelayNode]',
                exportAs: 'AudioNode',
                inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
                providers: [
                    {
                        provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => WebAudioDelay),
                    },
                ],
            }]
    }], function () { return [{ type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__["AUDIO_CONTEXT"]]
            }] }, { type: AudioNode, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_5__["CONSTRUCTOR_SUPPORT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['delayTime']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['maxDelayTime']
            }] }]; }, { delayTimeParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['delayTime']
        }] }); })();


/***/ }),

/***/ "./src/app/custom-wave/nodes/dynamics-compressor.ts":
/*!**********************************************************!*\
  !*** ./src/app/custom-wave/nodes/dynamics-compressor.ts ***!
  \**********************************************************/
/*! exports provided: WebAudioDynamicsCompressor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioDynamicsCompressor", function() { return WebAudioDynamicsCompressor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/audio-param */ "./src/app/custom-wave/decorators/audio-param.ts");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _tokens_constructor_support__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tokens/constructor-support */ "./src/app/custom-wave/tokens/constructor-support.ts");
/* harmony import */ var _utils_connect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/connect */ "./src/app/custom-wave/utils/connect.ts");
/* harmony import */ var _utils_parse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/parse */ "./src/app/custom-wave/utils/parse.ts");









// @dynamic
class WebAudioDynamicsCompressor extends DynamicsCompressorNode {
    constructor(context, node, modern, attackArg, kneeArg, ratioArg, releaseArg, thresholdArg) {
        const attack = Object(_utils_parse__WEBPACK_IMPORTED_MODULE_7__["parse"])(attackArg, 0.003);
        const knee = Object(_utils_parse__WEBPACK_IMPORTED_MODULE_7__["parse"])(kneeArg, 30);
        const ratio = Object(_utils_parse__WEBPACK_IMPORTED_MODULE_7__["parse"])(ratioArg, 12);
        const release = Object(_utils_parse__WEBPACK_IMPORTED_MODULE_7__["parse"])(releaseArg, 0.25);
        const threshold = Object(_utils_parse__WEBPACK_IMPORTED_MODULE_7__["parse"])(thresholdArg, -24);
        if (modern) {
            super(context, { attack, knee, ratio, release, threshold });
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_6__["connect"])(node, this);
        }
        else {
            const result = context.createDynamicsCompressor();
            Object.setPrototypeOf(result, WebAudioDynamicsCompressor.prototype);
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_6__["connect"])(node, result);
            result.attack.value = attack;
            result.knee.value = knee;
            result.ratio.value = ratio;
            result.release.value = release;
            result.threshold.value = threshold;
            return result;
        }
    }
    ngOnDestroy() {
        this.disconnect();
    }
}
WebAudioDynamicsCompressor.ɵfac = function WebAudioDynamicsCompressor_Factory(t) { return new (t || WebAudioDynamicsCompressor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"], 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_5__["CONSTRUCTOR_SUPPORT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('attack'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('knee'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('ratio'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('release'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('threshold')); };
WebAudioDynamicsCompressor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: WebAudioDynamicsCompressor, selectors: [["", "waDynamicsCompressorNode", ""]], inputs: { channelCount: "channelCount", channelCountMode: "channelCountMode", channelInterpretation: "channelInterpretation", attackParam: ["attack", "attackParam"], kneeParam: ["knee", "kneeParam"], ratioParam: ["ratio", "ratioParam"], releaseParam: ["release", "releaseParam"], thresholdParam: ["threshold", "thresholdParam"] }, exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => WebAudioDynamicsCompressor),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('attack')
], WebAudioDynamicsCompressor.prototype, "attackParam", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('knee')
], WebAudioDynamicsCompressor.prototype, "kneeParam", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('ratio')
], WebAudioDynamicsCompressor.prototype, "ratioParam", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('release')
], WebAudioDynamicsCompressor.prototype, "releaseParam", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('threshold')
], WebAudioDynamicsCompressor.prototype, "thresholdParam", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WebAudioDynamicsCompressor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[waDynamicsCompressorNode]',
                exportAs: 'AudioNode',
                inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
                providers: [
                    {
                        provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => WebAudioDynamicsCompressor),
                    },
                ],
            }]
    }], function () { return [{ type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__["AUDIO_CONTEXT"]]
            }] }, { type: AudioNode, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_5__["CONSTRUCTOR_SUPPORT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['attack']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['knee']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['ratio']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['release']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['threshold']
            }] }]; }, { attackParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['attack']
        }], kneeParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['knee']
        }], ratioParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['ratio']
        }], releaseParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['release']
        }], thresholdParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['threshold']
        }] }); })();


/***/ }),

/***/ "./src/app/custom-wave/nodes/gain.ts":
/*!*******************************************!*\
  !*** ./src/app/custom-wave/nodes/gain.ts ***!
  \*******************************************/
/*! exports provided: WebAudioGain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioGain", function() { return WebAudioGain; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/audio-param */ "./src/app/custom-wave/decorators/audio-param.ts");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _tokens_constructor_support__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tokens/constructor-support */ "./src/app/custom-wave/tokens/constructor-support.ts");
/* harmony import */ var _utils_connect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/connect */ "./src/app/custom-wave/utils/connect.ts");
/* harmony import */ var _utils_parse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/parse */ "./src/app/custom-wave/utils/parse.ts");









// @dynamic
class WebAudioGain extends GainNode {
    constructor(context, node, modern, gainArg) {
        const gain = Object(_utils_parse__WEBPACK_IMPORTED_MODULE_7__["parse"])(gainArg, 1);
        if (modern) {
            super(context, { gain });
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_6__["connect"])(node, this);
        }
        else {
            const result = context.createGain();
            Object.setPrototypeOf(result, WebAudioGain.prototype);
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_6__["connect"])(node, result);
            result.gain.value = gain;
            return result;
        }
    }
    ngOnDestroy() {
        this.disconnect();
    }
}
WebAudioGain.ɵfac = function WebAudioGain_Factory(t) { return new (t || WebAudioGain)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"], 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_5__["CONSTRUCTOR_SUPPORT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('gain')); };
WebAudioGain.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: WebAudioGain, selectors: [["", "waGainNode", ""]], inputs: { channelCount: "channelCount", channelCountMode: "channelCountMode", channelInterpretation: "channelInterpretation", gainParam: ["gain", "gainParam"] }, exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => WebAudioGain),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('gain')
], WebAudioGain.prototype, "gainParam", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WebAudioGain, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[waGainNode]',
                exportAs: 'AudioNode',
                inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
                providers: [
                    {
                        provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => WebAudioGain),
                    },
                ],
            }]
    }], function () { return [{ type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__["AUDIO_CONTEXT"]]
            }] }, { type: AudioNode, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_5__["CONSTRUCTOR_SUPPORT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['gain']
            }] }]; }, { gainParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['gain']
        }] }); })();


/***/ }),

/***/ "./src/app/custom-wave/nodes/iir-filter.ts":
/*!*************************************************!*\
  !*** ./src/app/custom-wave/nodes/iir-filter.ts ***!
  \*************************************************/
/*! exports provided: WebAudioIIRFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioIIRFilter", function() { return WebAudioIIRFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _tokens_constructor_support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tokens/constructor-support */ "./src/app/custom-wave/tokens/constructor-support.ts");
/* harmony import */ var _tokens_feedback_coefficients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tokens/feedback-coefficients */ "./src/app/custom-wave/tokens/feedback-coefficients.ts");
/* harmony import */ var _tokens_feedforward_coefficients__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tokens/feedforward-coefficients */ "./src/app/custom-wave/tokens/feedforward-coefficients.ts");
/* harmony import */ var _utils_connect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/connect */ "./src/app/custom-wave/utils/connect.ts");








// @dynamic
class WebAudioIIRFilter extends IIRFilterNode {
    constructor(feedback, feedforward, context, modern, node) {
        if (modern) {
            super(context, { feedback, feedforward });
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_6__["connect"])(node, this);
        }
        else {
            const result = context.createIIRFilter(feedback, feedforward);
            Object.setPrototypeOf(result, WebAudioIIRFilter.prototype);
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_6__["connect"])(node, result);
            return result;
        }
    }
    ngOnDestroy() {
        this.disconnect();
    }
}
WebAudioIIRFilter.ɵfac = function WebAudioIIRFilter_Factory(t) { return new (t || WebAudioIIRFilter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_feedback_coefficients__WEBPACK_IMPORTED_MODULE_4__["FEEDBACK_COEFFICIENTS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_feedforward_coefficients__WEBPACK_IMPORTED_MODULE_5__["FEEDFORWARD_COEFFICIENTS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_3__["CONSTRUCTOR_SUPPORT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"], 4)); };
WebAudioIIRFilter.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WebAudioIIRFilter, selectors: [["", "waIIRFilterNode", ""]], inputs: { channelCount: "channelCount", channelCountMode: "channelCountMode", channelInterpretation: "channelInterpretation" }, exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioIIRFilter),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAudioIIRFilter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[waIIRFilterNode]',
                exportAs: 'AudioNode',
                inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
                providers: [
                    {
                        provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioIIRFilter),
                    },
                ],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_feedback_coefficients__WEBPACK_IMPORTED_MODULE_4__["FEEDBACK_COEFFICIENTS"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_feedforward_coefficients__WEBPACK_IMPORTED_MODULE_5__["FEEDFORWARD_COEFFICIENTS"]]
            }] }, { type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_3__["CONSTRUCTOR_SUPPORT"]]
            }] }, { type: AudioNode, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/custom-wave/nodes/panner.ts":
/*!*********************************************!*\
  !*** ./src/app/custom-wave/nodes/panner.ts ***!
  \*********************************************/
/*! exports provided: WebAudioPanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioPanner", function() { return WebAudioPanner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/audio-param */ "./src/app/custom-wave/decorators/audio-param.ts");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _tokens_constructor_support__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tokens/constructor-support */ "./src/app/custom-wave/tokens/constructor-support.ts");
/* harmony import */ var _utils_connect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/connect */ "./src/app/custom-wave/utils/connect.ts");
/* harmony import */ var _utils_fallback_audio_param__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/fallback-audio-param */ "./src/app/custom-wave/utils/fallback-audio-param.ts");









// @dynamic
class WebAudioPanner extends PannerNode {
    constructor(context, node, modern) {
        if (modern) {
            super(context);
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_6__["connect"])(node, this);
        }
        else {
            const result = context.createPanner();
            Object.setPrototypeOf(result, WebAudioPanner.prototype);
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_6__["connect"])(node, result);
            return result;
        }
    }
    ngOnChanges() {
        if (this.positionX instanceof AudioParam) {
            return;
        }
        // Fallback for older browsers
        this.setOrientation(Object(_utils_fallback_audio_param__WEBPACK_IMPORTED_MODULE_7__["fallbackAudioParam"])(this.orientationXParam), Object(_utils_fallback_audio_param__WEBPACK_IMPORTED_MODULE_7__["fallbackAudioParam"])(this.orientationYParam), Object(_utils_fallback_audio_param__WEBPACK_IMPORTED_MODULE_7__["fallbackAudioParam"])(this.orientationZParam));
        this.setPosition(Object(_utils_fallback_audio_param__WEBPACK_IMPORTED_MODULE_7__["fallbackAudioParam"])(this.positionXParam), Object(_utils_fallback_audio_param__WEBPACK_IMPORTED_MODULE_7__["fallbackAudioParam"])(this.positionYParam), Object(_utils_fallback_audio_param__WEBPACK_IMPORTED_MODULE_7__["fallbackAudioParam"])(this.positionZParam));
    }
    ngOnDestroy() {
        this.disconnect();
    }
}
WebAudioPanner.ɵfac = function WebAudioPanner_Factory(t) { return new (t || WebAudioPanner)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"], 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_5__["CONSTRUCTOR_SUPPORT"])); };
WebAudioPanner.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: WebAudioPanner, selectors: [["", "waPannerNode", ""]], inputs: { coneInnerAngle: "coneInnerAngle", coneOuterAngle: "coneOuterAngle", coneOuterGain: "coneOuterGain", distanceModel: "distanceModel", maxDistance: "maxDistance", panningModel: "panningModel", refDistance: "refDistance", rolloffFactor: "rolloffFactor", channelCount: "channelCount", channelCountMode: "channelCountMode", channelInterpretation: "channelInterpretation", orientationXParam: "orientationXParam", orientationYParam: "orientationYParam", orientationZParam: "orientationZParam", positionXParam: "positionXParam", positionYParam: "positionYParam", positionZParam: "positionZParam" }, exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => WebAudioPanner),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('orientationX')
], WebAudioPanner.prototype, "orientationXParam", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('orientationY')
], WebAudioPanner.prototype, "orientationYParam", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('orientationZ')
], WebAudioPanner.prototype, "orientationZParam", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('positionX')
], WebAudioPanner.prototype, "positionXParam", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('positionY')
], WebAudioPanner.prototype, "positionYParam", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('positionZ')
], WebAudioPanner.prototype, "positionZParam", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WebAudioPanner, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[waPannerNode]',
                exportAs: 'AudioNode',
                inputs: [
                    'coneInnerAngle',
                    'coneOuterAngle',
                    'coneOuterGain',
                    'distanceModel',
                    'maxDistance',
                    'panningModel',
                    'refDistance',
                    'rolloffFactor',
                    'channelCount',
                    'channelCountMode',
                    'channelInterpretation',
                ],
                providers: [
                    {
                        provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => WebAudioPanner),
                    },
                ],
            }]
    }], function () { return [{ type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__["AUDIO_CONTEXT"]]
            }] }, { type: AudioNode, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_5__["CONSTRUCTOR_SUPPORT"]]
            }] }]; }, { orientationXParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], orientationYParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], orientationZParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], positionXParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], positionYParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], positionZParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/custom-wave/nodes/script-processor.ts":
/*!*******************************************************!*\
  !*** ./src/app/custom-wave/nodes/script-processor.ts ***!
  \*******************************************************/
/*! exports provided: WebAudioScriptProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioScriptProcessor", function() { return WebAudioScriptProcessor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _utils_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/connect */ "./src/app/custom-wave/utils/connect.ts");





// @dynamic
class WebAudioScriptProcessor extends ScriptProcessorNode {
    constructor(bufferSize, numberOfInputChannels, numberOfOutputChannels, context, node) {
        try {
            const result = context.createScriptProcessor(parseInt(bufferSize || '', 10) || 0, parseInt(numberOfInputChannels || '', 10) || 2, parseInt(numberOfOutputChannels || '', 10) || 2);
            Object.setPrototypeOf(result, WebAudioScriptProcessor.prototype);
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_3__["connect"])(node, result);
            const audioprocess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            result.audioprocess = audioprocess;
            result.onaudioprocess = e => audioprocess.emit(e);
            return result;
        }
        catch (_) { }
        super();
    }
    ngOnDestroy() {
        this.disconnect();
    }
}
WebAudioScriptProcessor.ɵfac = function WebAudioScriptProcessor_Factory(t) { return new (t || WebAudioScriptProcessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('bufferSize'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('numberOfInputChannels'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('numberOfOutputChannels'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"], 4)); };
WebAudioScriptProcessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WebAudioScriptProcessor, selectors: [["", "waScriptProcessorNode", ""]], inputs: { channelCount: "channelCount", channelCountMode: "channelCountMode", channelInterpretation: "channelInterpretation" }, outputs: { audioprocess: "audioprocess" }, exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioScriptProcessor),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAudioScriptProcessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[waScriptProcessorNode]',
                exportAs: 'AudioNode',
                inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
                providers: [
                    {
                        provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioScriptProcessor),
                    },
                ],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['bufferSize']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['numberOfInputChannels']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['numberOfOutputChannels']
            }] }, { type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]]
            }] }, { type: AudioNode, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"]]
            }] }]; }, { audioprocess: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/custom-wave/nodes/stereo-panner.ts":
/*!****************************************************!*\
  !*** ./src/app/custom-wave/nodes/stereo-panner.ts ***!
  \****************************************************/
/*! exports provided: WebAudioStereoPanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioStereoPanner", function() { return WebAudioStereoPanner; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _utils_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/connect */ "./src/app/custom-wave/utils/connect.ts");
/* harmony import */ var _utils_fallback_audio_param__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/fallback-audio-param */ "./src/app/custom-wave/utils/fallback-audio-param.ts");
/* harmony import */ var _utils_parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/parse */ "./src/app/custom-wave/utils/parse.ts");
/* harmony import */ var _utils_process_audio_param__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/process-audio-param */ "./src/app/custom-wave/utils/process-audio-param.ts");








// @dynamic
class WebAudioStereoPanner extends StereoPannerNode {
    constructor(context, node, panArg) {
        const pan = Object(_utils_parse__WEBPACK_IMPORTED_MODULE_5__["parse"])(panArg, 0);
        try {
            // @ts-ignore
            const _test = new StereoPannerNode(context);
        }
        catch (_) {
            const result = context.createPanner();
            Object.setPrototypeOf(result, WebAudioStereoPanner.prototype);
            result.fallbackToPannerNode(Object(_utils_fallback_audio_param__WEBPACK_IMPORTED_MODULE_4__["fallbackAudioParam"])(pan));
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_3__["connect"])(node, result);
            return result;
        }
        super(context, { pan });
        Object(_utils_connect__WEBPACK_IMPORTED_MODULE_3__["connect"])(node, this);
    }
    set panParam(pan) {
        if ('setPosition' in this) {
            /** fallback for browsers not supporting {@link StereoPannerNode} */
            // @ts-ignore
            this.fallbackToPannerNode(Object(_utils_fallback_audio_param__WEBPACK_IMPORTED_MODULE_4__["fallbackAudioParam"])(pan));
        }
        else {
            Object(_utils_process_audio_param__WEBPACK_IMPORTED_MODULE_6__["processAudioParam"])(this.pan, pan, this.context.currentTime);
        }
    }
    ngOnDestroy() {
        this.disconnect();
    }
    // @ts-ignore
    fallbackToPannerNode(pan) {
        const xDeg = pan * 100;
        const zDeg = xDeg > 0 ? 270 - xDeg : xDeg + 90;
        const x = Math.sin(xDeg * (Math.PI / 180));
        const z = Math.sin(zDeg * (Math.PI / 180));
        // @ts-ignore
        this.setPosition(x, 0, z);
    }
}
WebAudioStereoPanner.ɵfac = function WebAudioStereoPanner_Factory(t) { return new (t || WebAudioStereoPanner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"], 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('pan')); };
WebAudioStereoPanner.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WebAudioStereoPanner, selectors: [["", "waStereoPannerNode", ""]], inputs: { channelCount: "channelCount", channelCountMode: "channelCountMode", channelInterpretation: "channelInterpretation", panParam: ["pan", "panParam"] }, exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioStereoPanner),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAudioStereoPanner, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[waStereoPannerNode]',
                exportAs: 'AudioNode',
                inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
                providers: [
                    {
                        provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioStereoPanner),
                    },
                ],
            }]
    }], function () { return [{ type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]]
            }] }, { type: AudioNode, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['pan']
            }] }]; }, { panParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['pan']
        }] }); })();


/***/ }),

/***/ "./src/app/custom-wave/nodes/wave-shaper.ts":
/*!**************************************************!*\
  !*** ./src/app/custom-wave/nodes/wave-shaper.ts ***!
  \**************************************************/
/*! exports provided: WebAudioWaveShaper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioWaveShaper", function() { return WebAudioWaveShaper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _tokens_constructor_support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tokens/constructor-support */ "./src/app/custom-wave/tokens/constructor-support.ts");
/* harmony import */ var _utils_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/connect */ "./src/app/custom-wave/utils/connect.ts");






// @dynamic
class WebAudioWaveShaper extends WaveShaperNode {
    constructor(context, node, modern) {
        if (modern) {
            super(context);
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_4__["connect"])(node, this);
        }
        else {
            const result = context.createWaveShaper();
            Object.setPrototypeOf(result, WebAudioWaveShaper.prototype);
            Object(_utils_connect__WEBPACK_IMPORTED_MODULE_4__["connect"])(node, result);
            return result;
        }
    }
    ngOnDestroy() {
        this.disconnect();
    }
}
WebAudioWaveShaper.ɵfac = function WebAudioWaveShaper_Factory(t) { return new (t || WebAudioWaveShaper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"], 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_3__["CONSTRUCTOR_SUPPORT"])); };
WebAudioWaveShaper.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WebAudioWaveShaper, selectors: [["", "waWaveShaperNode", ""]], inputs: { oversample: "oversample", curve: "curve", channelCount: "channelCount", channelCountMode: "channelCountMode", channelInterpretation: "channelInterpretation" }, exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioWaveShaper),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAudioWaveShaper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[waWaveShaperNode]',
                exportAs: 'AudioNode',
                inputs: [
                    'oversample',
                    'curve',
                    'channelCount',
                    'channelCountMode',
                    'channelInterpretation',
                ],
                providers: [
                    {
                        provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioWaveShaper),
                    },
                ],
            }]
    }], function () { return [{ type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]]
            }] }, { type: AudioNode, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_3__["CONSTRUCTOR_SUPPORT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/custom-wave/nodes/worklet.ts":
/*!**********************************************!*\
  !*** ./src/app/custom-wave/nodes/worklet.ts ***!
  \**********************************************/
/*! exports provided: WebAudioWorklet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioWorklet", function() { return WebAudioWorklet; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _utils_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/connect */ "./src/app/custom-wave/utils/connect.ts");





// @dynamic
class WebAudioWorklet extends AudioWorkletNode {
    constructor(context, node, name) {
        super(context, name);
        this.processorerror = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onprocessorerror = () => this.processorerror.emit();
        Object(_utils_connect__WEBPACK_IMPORTED_MODULE_3__["connect"])(node, this);
    }
    ngOnDestroy() {
        this.disconnect();
    }
}
WebAudioWorklet.ɵfac = function WebAudioWorklet_Factory(t) { return new (t || WebAudioWorklet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"], 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('name')); };
WebAudioWorklet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WebAudioWorklet, selectors: [["", "waAudioWorkletNode", "", "name", ""]], inputs: { channelCount: "channelCount", channelCountMode: "channelCountMode", channelInterpretation: "channelInterpretation" }, outputs: { processorerror: "processorerror" }, exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioWorklet),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAudioWorklet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[waAudioWorkletNode][name]',
                exportAs: 'AudioNode',
                inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
                providers: [
                    {
                        provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioWorklet),
                    },
                ],
            }]
    }], function () { return [{ type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]]
            }] }, { type: AudioNode, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['name']
            }] }]; }, { processorerror: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/custom-wave/pipes/audio-param.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/custom-wave/pipes/audio-param.pipe.ts ***!
  \*******************************************************/
/*! exports provided: WebAudioParamPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioParamPipe", function() { return WebAudioParamPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WebAudioParamPipe {
    /**
     * Creates {@link AudioParamAutomation} to use with {@link AudioParam} inputs
     *
     * @param value target value
     * @param duration duration of the automation
     * @param mode either instant for given duration or linear/exponential ramp
     */
    transform(value, duration, mode = 'exponential') {
        return value instanceof Array
            ? {
                value,
                duration,
            }
            : {
                value,
                duration,
                mode,
            };
    }
}
WebAudioParamPipe.ɵfac = function WebAudioParamPipe_Factory(t) { return new (t || WebAudioParamPipe)(); };
WebAudioParamPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "waAudioParam", type: WebAudioParamPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAudioParamPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'waAudioParam',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/custom-wave/pipes/periodic-wave.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/custom-wave/pipes/periodic-wave.pipe.ts ***!
  \*********************************************************/
/*! exports provided: WebAudioPeriodicWavePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioPeriodicWavePipe", function() { return WebAudioPeriodicWavePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");



// @dynamic
class WebAudioPeriodicWavePipe {
    constructor(context) {
        this.context = context;
    }
    /**
     * Creates {@link PeriodicWave} to use with {@link OscillatorNode}
     *
     * @param real cosine terms (traditionally the A terms)
     * @param imag sine terms (traditionally the B terms)
     * @param disableNormalization see {@lin PeriodicWaveConstraints}
     */
    transform(real, imag, disableNormalization) {
        return this.context.createPeriodicWave(new Float32Array(real), imag ? new Float32Array(imag) : new Float32Array(real.length), {
            disableNormalization: !!disableNormalization,
        });
    }
}
WebAudioPeriodicWavePipe.ɵfac = function WebAudioPeriodicWavePipe_Factory(t) { return new (t || WebAudioPeriodicWavePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"])); };
WebAudioPeriodicWavePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "waPeriodicWave", type: WebAudioPeriodicWavePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAudioPeriodicWavePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'waPeriodicWave',
            }]
    }], function () { return [{ type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/custom-wave/services/audio-buffer.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/custom-wave/services/audio-buffer.service.ts ***!
  \**************************************************************/
/*! exports provided: AudioBufferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioBufferService", function() { return AudioBufferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");



// @dynamic
class AudioBufferService {
    constructor(context) {
        this.context = context;
        this.cache = new Map();
    }
    fetch(url) {
        return new Promise((resolve, reject) => {
            if (this.cache.has(url)) {
                resolve(this.cache.get(url));
                return;
            }
            const request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.responseType = 'arraybuffer';
            request.onerror = reject;
            request.onabort = reject;
            request.onload = () => {
                this.context.decodeAudioData(request.response, buffer => {
                    this.cache.set(url, buffer);
                    resolve(buffer);
                }, reject);
            };
            request.send();
        });
    }
}
AudioBufferService.ɵfac = function AudioBufferService_Factory(t) { return new (t || AudioBufferService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"])); };
AudioBufferService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AudioBufferService, factory: AudioBufferService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudioBufferService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/custom-wave/sources/buffer-source.ts":
/*!******************************************************!*\
  !*** ./src/app/custom-wave/sources/buffer-source.ts ***!
  \******************************************************/
/*! exports provided: WebAudioBufferSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioBufferSource", function() { return WebAudioBufferSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _decorators_audio_param__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators/audio-param */ "./src/app/custom-wave/decorators/audio-param.ts");
/* harmony import */ var _services_audio_buffer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/audio-buffer.service */ "./src/app/custom-wave/services/audio-buffer.service.ts");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _tokens_constructor_support__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tokens/constructor-support */ "./src/app/custom-wave/tokens/constructor-support.ts");
/* harmony import */ var _utils_parse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/parse */ "./src/app/custom-wave/utils/parse.ts");












// @dynamic
class WebAudioBufferSource extends AudioBufferSourceNode {
    constructor(audioBufferService, context, modern, autoplay, detuneArg, playbackRateArg) {
        const detune = Object(_utils_parse__WEBPACK_IMPORTED_MODULE_9__["parse"])(detuneArg, 0);
        const playbackRate = Object(_utils_parse__WEBPACK_IMPORTED_MODULE_9__["parse"])(playbackRateArg, 1);
        if (modern) {
            super(context, { detune, playbackRate });
            WebAudioBufferSource.init(this, null, autoplay, audioBufferService);
        }
        else {
            const result = context.createBufferSource();
            Object.setPrototypeOf(result, WebAudioBufferSource.prototype);
            if (detune)
                result.detune.value = detune;
            result.playbackRate.value = playbackRate;
            WebAudioBufferSource.init(result, null, autoplay, audioBufferService);
            return result;
        }
    }
    set bufferSetter(source) {
        this.buffer$.next(source);
    }
    ngOnDestroy() {
        this.buffer$.complete();
        try {
            this.stop();
        }
        catch (_) { }
        this.disconnect();
    }
    static init(that, _node, autoplay, audioBufferService) {
        if (autoplay !== null) {
            that.start();
        }
        const ended = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        that.ended = ended;
        that.onended = () => ended.emit();
        that.buffer$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        that.buffer$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(source => typeof source === 'string'
            ? audioBufferService.fetch(source)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(source)))
            .subscribe(buffer => {
            that.buffer = buffer;
        });
    }
}
WebAudioBufferSource.ɵfac = function WebAudioBufferSource_Factory(t) { return new (t || WebAudioBufferSource)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_audio_buffer_service__WEBPACK_IMPORTED_MODULE_5__["AudioBufferService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_6__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_8__["CONSTRUCTOR_SUPPORT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('autoplay'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('detune'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('playbackRate')); };
WebAudioBufferSource.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: WebAudioBufferSource, selectors: [["", "waAudioBufferSourceNode", ""]], inputs: { loop: "loop", loopStart: "loopStart", loopEnd: "loopEnd", channelCount: "channelCount", channelCountMode: "channelCountMode", channelInterpretation: "channelInterpretation", bufferSetter: ["buffer", "bufferSetter"], detuneParam: ["detune", "detuneParam"], playbackRateParam: ["playbackRate", "playbackRateParam"] }, outputs: { ended: "ended" }, exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_7__["AUDIO_NODE"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => WebAudioBufferSource),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_4__["audioParam"])('detune')
], WebAudioBufferSource.prototype, "detuneParam", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_4__["audioParam"])('playbackRate')
], WebAudioBufferSource.prototype, "playbackRateParam", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WebAudioBufferSource, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[waAudioBufferSourceNode]',
                exportAs: 'AudioNode',
                inputs: [
                    'loop',
                    'loopStart',
                    'loopEnd',
                    'channelCount',
                    'channelCountMode',
                    'channelInterpretation',
                ],
                providers: [
                    {
                        provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_7__["AUDIO_NODE"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => WebAudioBufferSource),
                    },
                ],
            }]
    }], function () { return [{ type: _services_audio_buffer_service__WEBPACK_IMPORTED_MODULE_5__["AudioBufferService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_services_audio_buffer_service__WEBPACK_IMPORTED_MODULE_5__["AudioBufferService"]]
            }] }, { type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_6__["AUDIO_CONTEXT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_8__["CONSTRUCTOR_SUPPORT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['autoplay']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['detune']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['playbackRate']
            }] }]; }, { bufferSetter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['buffer']
        }], detuneParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['detune']
        }], playbackRateParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['playbackRate']
        }], ended: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/custom-wave/sources/constant-source.ts":
/*!********************************************************!*\
  !*** ./src/app/custom-wave/sources/constant-source.ts ***!
  \********************************************************/
/*! exports provided: WebAudioConstantSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioConstantSource", function() { return WebAudioConstantSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/audio-param */ "./src/app/custom-wave/decorators/audio-param.ts");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _utils_parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/parse */ "./src/app/custom-wave/utils/parse.ts");







// @dynamic
class WebAudioConstantSource extends ConstantSourceNode {
    constructor(context, autoplay, offset) {
        super(context, {
            offset: Object(_utils_parse__WEBPACK_IMPORTED_MODULE_5__["parse"])(offset, 0),
        });
        this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onended = () => this.ended.emit();
        if (autoplay !== null) {
            this.start();
        }
    }
    ngOnDestroy() {
        try {
            this.stop();
        }
        catch (_) { }
        this.disconnect();
    }
}
WebAudioConstantSource.ɵfac = function WebAudioConstantSource_Factory(t) { return new (t || WebAudioConstantSource)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('autoplay'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('offset')); };
WebAudioConstantSource.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: WebAudioConstantSource, selectors: [["", "waConstantSourceNode", ""]], inputs: { channelCount: "channelCount", channelCountMode: "channelCountMode", channelInterpretation: "channelInterpretation", offsetParam: ["offset", "offsetParam"] }, outputs: { ended: "ended" }, exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => WebAudioConstantSource),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_audio_param__WEBPACK_IMPORTED_MODULE_2__["audioParam"])('offset')
], WebAudioConstantSource.prototype, "offsetParam", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WebAudioConstantSource, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[waConstantSourceNode]',
                exportAs: 'AudioNode',
                inputs: ['channelCount', 'channelCountMode', 'channelInterpretation'],
                providers: [
                    {
                        provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_4__["AUDIO_NODE"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => WebAudioConstantSource),
                    },
                ],
            }]
    }], function () { return [{ type: BaseAudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_3__["AUDIO_CONTEXT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['autoplay']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['offset']
            }] }]; }, { offsetParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['offset']
        }], ended: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/custom-wave/sources/media-source.ts":
/*!*****************************************************!*\
  !*** ./src/app/custom-wave/sources/media-source.ts ***!
  \*****************************************************/
/*! exports provided: WebAudioMediaSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioMediaSource", function() { return WebAudioMediaSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _tokens_constructor_support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tokens/constructor-support */ "./src/app/custom-wave/tokens/constructor-support.ts");





// @dynamic
class WebAudioMediaSource extends MediaElementAudioSourceNode {
    constructor(context, modern, { nativeElement }) {
        if (modern) {
            super(context, { mediaElement: nativeElement });
        }
        else {
            const result = context.createMediaElementSource(nativeElement);
            Object.setPrototypeOf(result, WebAudioMediaSource.prototype);
            return result;
        }
    }
    ngOnDestroy() {
        this.disconnect();
    }
}
WebAudioMediaSource.ɵfac = function WebAudioMediaSource_Factory(t) { return new (t || WebAudioMediaSource)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_3__["CONSTRUCTOR_SUPPORT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
WebAudioMediaSource.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WebAudioMediaSource, selectors: [["audio", "waMediaElementAudioSourceNode", ""], ["video", "waMediaElementAudioSourceNode", ""]], exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioMediaSource),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAudioMediaSource, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'audio[waMediaElementAudioSourceNode], video[waMediaElementAudioSourceNode]',
                exportAs: 'AudioNode',
                providers: [
                    {
                        provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioMediaSource),
                    },
                ],
            }]
    }], function () { return [{ type: AudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_3__["CONSTRUCTOR_SUPPORT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/custom-wave/sources/media-stream-source.ts":
/*!************************************************************!*\
  !*** ./src/app/custom-wave/sources/media-stream-source.ts ***!
  \************************************************************/
/*! exports provided: WebAudioMediaStreamSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioMediaStreamSource", function() { return WebAudioMediaStreamSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _tokens_constructor_support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tokens/constructor-support */ "./src/app/custom-wave/tokens/constructor-support.ts");
/* harmony import */ var _tokens_media_stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tokens/media-stream */ "./src/app/custom-wave/tokens/media-stream.ts");






// @dynamic
class WebAudioMediaStreamSource extends MediaStreamAudioSourceNode {
    constructor(mediaStream, context, modern) {
        if (modern) {
            super(context, { mediaStream });
        }
        else {
            const result = context.createMediaStreamSource(mediaStream);
            Object.setPrototypeOf(result, WebAudioMediaStreamSource.prototype);
            return result;
        }
    }
    ngOnDestroy() {
        this.disconnect();
    }
}
WebAudioMediaStreamSource.ɵfac = function WebAudioMediaStreamSource_Factory(t) { return new (t || WebAudioMediaStreamSource)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_media_stream__WEBPACK_IMPORTED_MODULE_4__["MEDIA_STREAM"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_3__["CONSTRUCTOR_SUPPORT"])); };
WebAudioMediaStreamSource.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WebAudioMediaStreamSource, selectors: [["", "waMediaStreamAudioSourceNode", ""]], exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioMediaStreamSource),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAudioMediaStreamSource, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[waMediaStreamAudioSourceNode]',
                exportAs: 'AudioNode',
                providers: [
                    {
                        provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioMediaStreamSource),
                    },
                ],
            }]
    }], function () { return [{ type: MediaStream, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_media_stream__WEBPACK_IMPORTED_MODULE_4__["MEDIA_STREAM"]]
            }] }, { type: AudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_constructor_support__WEBPACK_IMPORTED_MODULE_3__["CONSTRUCTOR_SUPPORT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/custom-wave/sources/media-stream-track-source.ts":
/*!******************************************************************!*\
  !*** ./src/app/custom-wave/sources/media-stream-track-source.ts ***!
  \******************************************************************/
/*! exports provided: WebAudioMediaStreamTrackSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioMediaStreamTrackSource", function() { return WebAudioMediaStreamTrackSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");
/* harmony import */ var _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tokens/audio-node */ "./src/app/custom-wave/tokens/audio-node.ts");
/* harmony import */ var _tokens_media_stream_track__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tokens/media-stream-track */ "./src/app/custom-wave/tokens/media-stream-track.ts");





// @dynamic
class WebAudioMediaStreamTrackSource extends MediaStreamTrackAudioSourceNode {
    constructor(mediaStreamTrack, context) {
        super(context, { mediaStreamTrack });
    }
    ngOnDestroy() {
        this.disconnect();
    }
}
WebAudioMediaStreamTrackSource.ɵfac = function WebAudioMediaStreamTrackSource_Factory(t) { return new (t || WebAudioMediaStreamTrackSource)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_media_stream_track__WEBPACK_IMPORTED_MODULE_3__["MEDIA_STREAM_TRACK"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"])); };
WebAudioMediaStreamTrackSource.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WebAudioMediaStreamTrackSource, selectors: [["", "waMediaStreamTrackAudioSourceNode", ""]], exportAs: ["AudioNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioMediaStreamTrackSource),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAudioMediaStreamTrackSource, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[waMediaStreamTrackAudioSourceNode]',
                exportAs: 'AudioNode',
                providers: [
                    {
                        provide: _tokens_audio_node__WEBPACK_IMPORTED_MODULE_2__["AUDIO_NODE"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => WebAudioMediaStreamTrackSource),
                    },
                ],
            }]
    }], function () { return [{ type: MediaStreamTrack, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_media_stream_track__WEBPACK_IMPORTED_MODULE_3__["MEDIA_STREAM_TRACK"]]
            }] }, { type: AudioContext, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/custom-wave/tokens/audio-context.ts":
/*!*****************************************************!*\
  !*** ./src/app/custom-wave/tokens/audio-context.ts ***!
  \*****************************************************/
/*! exports provided: AUDIO_CONTEXT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUDIO_CONTEXT", function() { return AUDIO_CONTEXT; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const AUDIO_CONTEXT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Web Audio API context', {
    providedIn: 'root',
    factory: () => new AudioContext(),
});


/***/ }),

/***/ "./src/app/custom-wave/tokens/audio-node.ts":
/*!**************************************************!*\
  !*** ./src/app/custom-wave/tokens/audio-node.ts ***!
  \**************************************************/
/*! exports provided: AUDIO_NODE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUDIO_NODE", function() { return AUDIO_NODE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const AUDIO_NODE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Web Audio API audio node', {
    factory: () => null,
});


/***/ }),

/***/ "./src/app/custom-wave/tokens/constructor-support.ts":
/*!***********************************************************!*\
  !*** ./src/app/custom-wave/tokens/constructor-support.ts ***!
  \***********************************************************/
/*! exports provided: CONSTRUCTOR_SUPPORT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTRUCTOR_SUPPORT", function() { return CONSTRUCTOR_SUPPORT; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio-context */ "./src/app/custom-wave/tokens/audio-context.ts");


/**
 * This is mostly for internal use only
 */
const CONSTRUCTOR_SUPPORT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Tests if constructor mode of node creation is supported or a fallback to factory method is needed', {
    providedIn: 'root',
    factory: () => {
        try {
            return !!new GainNode(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_audio_context__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]));
        }
        catch (_) {
            return false;
        }
    },
});


/***/ }),

/***/ "./src/app/custom-wave/tokens/feedback-coefficients.ts":
/*!*************************************************************!*\
  !*** ./src/app/custom-wave/tokens/feedback-coefficients.ts ***!
  \*************************************************************/
/*! exports provided: FEEDBACK_COEFFICIENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_COEFFICIENTS", function() { return FEEDBACK_COEFFICIENTS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const FEEDBACK_COEFFICIENTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('A sequence of feedback coefficients for IIRFilterNode');


/***/ }),

/***/ "./src/app/custom-wave/tokens/feedforward-coefficients.ts":
/*!****************************************************************!*\
  !*** ./src/app/custom-wave/tokens/feedforward-coefficients.ts ***!
  \****************************************************************/
/*! exports provided: FEEDFORWARD_COEFFICIENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDFORWARD_COEFFICIENTS", function() { return FEEDFORWARD_COEFFICIENTS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const FEEDFORWARD_COEFFICIENTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('A sequence of feedforward coefficients for IIRFilterNode');


/***/ }),

/***/ "./src/app/custom-wave/tokens/media-stream-track.ts":
/*!**********************************************************!*\
  !*** ./src/app/custom-wave/tokens/media-stream-track.ts ***!
  \**********************************************************/
/*! exports provided: MEDIA_STREAM_TRACK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_STREAM_TRACK", function() { return MEDIA_STREAM_TRACK; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const MEDIA_STREAM_TRACK = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MediaStreamTrack for MediaStreamTrackAudioSourceNode');


/***/ }),

/***/ "./src/app/custom-wave/tokens/media-stream.ts":
/*!****************************************************!*\
  !*** ./src/app/custom-wave/tokens/media-stream.ts ***!
  \****************************************************/
/*! exports provided: MEDIA_STREAM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_STREAM", function() { return MEDIA_STREAM; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const MEDIA_STREAM = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MediaStream for MediaStreamAudioSourceNode');


/***/ }),

/***/ "./src/app/custom-wave/utils/connect.ts":
/*!**********************************************!*\
  !*** ./src/app/custom-wave/utils/connect.ts ***!
  \**********************************************/
/*! exports provided: connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
function connect(source, destination) {
    if (source && destination) {
        // @ts-ignore TS does not have a union override for connect method
        source.connect(destination);
    }
}


/***/ }),

/***/ "./src/app/custom-wave/utils/fallback-audio-param.ts":
/*!***********************************************************!*\
  !*** ./src/app/custom-wave/utils/fallback-audio-param.ts ***!
  \***********************************************************/
/*! exports provided: fallbackAudioParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallbackAudioParam", function() { return fallbackAudioParam; });
function fallbackAudioParam(value) {
    if (!value) {
        return 0;
    }
    if (typeof value === 'number') {
        return value;
    }
    if (value instanceof Array) {
        const last = value[value.length - 1].value;
        return typeof last === 'number' ? last : last[last.length - 1];
    }
    if (value.value instanceof Array) {
        return value.value[value.value.length - 1];
    }
    return value.value;
}


/***/ }),

/***/ "./src/app/custom-wave/utils/latency-hint-factory.ts":
/*!***********************************************************!*\
  !*** ./src/app/custom-wave/utils/latency-hint-factory.ts ***!
  \***********************************************************/
/*! exports provided: latencyHintFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latencyHintFactory", function() { return latencyHintFactory; });
function latencyHintFactory(latencyHint) {
    return latencyHint === null
        ? undefined
        : Number.parseFloat(latencyHint) || latencyHint;
}


/***/ }),

/***/ "./src/app/custom-wave/utils/parse.ts":
/*!********************************************!*\
  !*** ./src/app/custom-wave/utils/parse.ts ***!
  \********************************************/
/*! exports provided: parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
function parse(value, fallback) {
    const parsed = parseFloat(value || '');
    return isNaN(parsed) ? fallback : parsed;
}


/***/ }),

/***/ "./src/app/custom-wave/utils/process-audio-param.ts":
/*!**********************************************************!*\
  !*** ./src/app/custom-wave/utils/process-audio-param.ts ***!
  \**********************************************************/
/*! exports provided: processAudioParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processAudioParam", function() { return processAudioParam; });
function processAudioParam(param, value, currentTime = 0) {
    if (param.cancelAndHoldAtTime) {
        param.cancelAndHoldAtTime(currentTime);
    }
    else {
        param.cancelScheduledValues(currentTime);
        param.setValueAtTime(guard(param.value), currentTime);
    }
    if (typeof value === 'number') {
        param.setValueAtTime(guard(value), currentTime);
        return;
    }
    if (value instanceof Array) {
        processSchedule(param, value, currentTime);
        return;
    }
    if (!('mode' in value)) {
        param.setValueCurveAtTime(value.value, currentTime, value.duration);
        return;
    }
    param.setValueAtTime(guard(param.value), currentTime);
    processAutomation(param, value, currentTime);
}
function processSchedule(param, value, currentTime) {
    value.forEach(automation => {
        if ('mode' in automation) {
            processAutomation(param, automation, currentTime);
        }
        else {
            param.setValueCurveAtTime(automation.value, currentTime, automation.duration);
        }
        currentTime += automation.duration;
    });
}
function processAutomation(param, { value, mode = 'instant', duration }, currentTime) {
    switch (mode) {
        case 'instant':
            param.setValueAtTime(guard(value), currentTime);
            param.setValueAtTime(guard(value), currentTime + duration);
            break;
        case 'exponential':
            if (value < 0 || value * param.value < 0) {
                param.linearRampToValueAtTime(guard(value), currentTime + duration);
            }
            else {
                param.exponentialRampToValueAtTime(guard(value), currentTime + duration);
            }
            param.setValueAtTime(guard(value), currentTime + duration);
            break;
        case 'linear':
            param.linearRampToValueAtTime(guard(value), currentTime + duration);
            break;
    }
}
function guard(v) {
    return v || 0.00000001;
}


/***/ }),

/***/ "./src/app/hear/hear.component.ts":
/*!****************************************!*\
  !*** ./src/app/hear/hear.component.ts ***!
  \****************************************/
/*! exports provided: HearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HearComponent", function() { return HearComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cards_grid_cards_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cards-grid/cards-grid.component */ "./src/app/cards-grid/cards-grid.component.ts");



class HearComponent {
    constructor() { }
    ngOnInit() {
    }
}
HearComponent.ɵfac = function HearComponent_Factory(t) { return new (t || HearComponent)(); };
HearComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HearComponent, selectors: [["app-hear"]], decls: 1, vars: 0, template: function HearComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cards-grid");
    } }, directives: [_cards_grid_cards_grid_component__WEBPACK_IMPORTED_MODULE_1__["CardsGridComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYXIvaGVhci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HearComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hear',
                templateUrl: './hear.component.html',
                styleUrls: ['./hear.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");






































class MaterialModule {
    constructor(matIconRegistry) {
        this.matIconRegistry = matIconRegistry;
    }
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconRegistry"])); }, providers: [], imports: [[
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_32__["MatTreeModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_33__["MatChipsModule"]
        ], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_32__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_33__["MatChipsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_32__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_33__["MatChipsModule"]], exports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_32__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_33__["MatChipsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_32__["MatTreeModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_33__["MatChipsModule"]
                ],
                exports: [
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_32__["MatTreeModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_33__["MatChipsModule"]
                ],
                providers: []
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconRegistry"] }]; }, null); })();


/***/ }),

/***/ "./src/app/nativeJS/string-methods.ts":
/*!********************************************!*\
  !*** ./src/app/nativeJS/string-methods.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

String.prototype.replaceAll = function (str1, str2, ignore = false) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), (ignore ? "gi" : "g")), (typeof (str2) == "string") ? str2.replace(/\$/g, "$$$$") : str2);
};


/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _theming_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theming.service */ "./src/app/theming.service.ts");
/* harmony import */ var _shared_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/communication.service */ "./src/app/shared/communication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function NavBarComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.hearUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NavBarComponent_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.hearSelectedUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NavBarComponent_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.confessUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NavBarComponent_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.confessSelectedUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NavBarComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavBarComponent_div_20_Template_mat_slide_toggle_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.isDarkMode = $event; })("change", function NavBarComponent_div_20_Template_mat_slide_toggle_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.changed($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dark Mode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.isDarkMode);
} }
function NavBarComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavBarComponent_div_21_Template_mat_slide_toggle_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.obscenity = $event; })("change", function NavBarComponent_div_21_Template_mat_slide_toggle_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.changeObscenity($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Obscenity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.obscenity);
} }
const _c0 = function (a0) { return { selected: a0 }; };
const _c1 = function (a0, a1) { return { "mat-cust-dark-color": a0, "mat-cust-light-color": a1 }; };
const _c2 = function (a0, a1) { return { "nav-back-dark-grad": a0, "nav-back-light-grad": a1 }; };
class NavBarComponent {
    constructor(themingService, cdRef, communicationService) {
        this.themingService = themingService;
        this.cdRef = cdRef;
        this.communicationService = communicationService;
        this.hearUrl = 'assets/images/hear.svg';
        this.hearSelectedUrl = 'assets/images/hear-o.svg';
        this.logoUrl = 'assets/images/logo-dark.svg';
        this.navLogoUrl = 'assets/images/nav-logo.svg';
        this.confessUrl = 'assets/images/confess-icon.svg';
        this.confessDarkUrl = 'assets/images/confess-icon-dark.svg';
        this.confessSelectedUrl = 'assets/images/confess-o.svg';
        this.selection = "hear";
        this.expandIcon = "expand_more";
        this.isDarkMode = false;
        this.showMenu = false;
        this.obscenity = true;
        this.userLinks = [
            {
                name: "Change Password",
                iconCls: "fa fa-list-ol",
                click: "changePassword",
            },
            {
                iconCls: "fa fa-plus",
                name: "Log Out",
                click: "logout",
            },
        ];
    }
    ngOnInit() {
        this.updateTheme();
        this.showMenu = false;
    }
    hearOnClick() {
        this.selection = "hear";
    }
    onClickUserOption() {
        this.showMenu = !this.showMenu;
        this.expandIcon = this.showMenu ? "expand_less" : "expand_more";
    }
    changed($event) {
        this.changeTheme($event);
        this.showMenu = false;
        this.expandIcon = this.showMenu ? "expand_less" : "expand_more";
    }
    changeObscenity($event) {
        this.obscenity = $event.checked;
        this.communicationService.changeObscenetiy(this.obscenity);
        this.showMenu = false;
        this.expandIcon = this.showMenu ? "expand_less" : "expand_more";
    }
    changeTheme($event) {
        console.log($event);
        this.isDarkMode = $event.checked;
        if ($event.checked)
            this.themingService.theme.next("dark-theme");
        else
            this.themingService.theme.next("light-theme");
    }
    confessOnClick() {
        this.selection = "confess";
    }
    ngAfterViewInit() {
        this.cdRef.detectChanges();
    }
    ngAfterViewChecked() {
        this.updateTheme();
        this.cdRef.detectChanges();
    }
    updateTheme() {
        if (this.themingService.theme.value === 'light-theme') {
            this.isDarkMode = false;
            this.confessUrl = "assets/images/confess-icon.svg";
            this.hearUrl = "assets/images/hear.svg";
            this.logoUrl = "assets/images/logo-dark.svg";
        }
        else {
            this.isDarkMode = true;
            this.confessUrl = "assets/images/confess-icon-dark.svg";
            this.hearUrl = "assets/images/hear-dark.svg";
            this.logoUrl = "assets/images/logo-light.svg";
        }
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theming_service__WEBPACK_IMPORTED_MODULE_1__["ThemingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_communication_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationService"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 23, vars: 26, consts: [[1, "nav-content"], [1, "d-flex", "justify-content-between", "mt2", "mb1", 2, "z-index", "1001"], ["routerLink", "/hear", "routerLinkActive", "active", 1, "pointer"], [1, "pointer", "height-logo", "ml2", 3, "src"], [1, "d-flex", 2, "margin-right", "2%"], ["routerLink", "/hear", "routerLinkActive", "active", 1, "pointer", "listen", "mr-25", "mb-0", 3, "ngClass", "click"], [1, "fw-600"], ["class", "hear-image", 3, "src", 4, "ngIf"], ["routerLink", "/confess", "routerLinkActive", "active", 1, "pointer", "confess", "mr-25", "mb-0", 3, "ngClass", "click"], ["class", "confess-image", 3, "src", 4, "ngIf"], [1, "pointer", "user-op", 3, "click"], [1, "pointer", 3, "ngClass"], [1, "pointer", "mr1", 3, "ngClass"], ["class", "dropdown right mr2", 4, "ngIf"], [1, "bg-grad", 2, "z-index", "-1", 3, "ngClass"], [1, "hear-image", 3, "src"], [1, "confess-image", 3, "src"], [1, "dropdown", "right", "mr2"], [1, "dark-text", 3, "ngModel", "ngModelChange", "change"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_5_listener() { return ctx.hearOnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Listen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavBarComponent_img_8_Template, 1, 1, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavBarComponent_img_9_Template, 1, 1, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_10_listener() { return ctx.confessOnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Confess");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavBarComponent_img_13_Template, 1, 1, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavBarComponent_img_14_Template, 1, 1, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_div_click_15_listener() { return ctx.onClickUserOption(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavBarComponent_div_20_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NavBarComponent_div_21_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.selection === "hear"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selection !== "hear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selection === "hear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.selection === "confess"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selection !== "confess");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selection === "confess");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c1, ctx.isDarkMode, !ctx.isDarkMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c1, ctx.isDarkMode, !ctx.isDarkMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.expandIcon, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c2, ctx.isDarkMode, !ctx.isDarkMode));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _theming_service__WEBPACK_IMPORTED_MODULE_1__["ThemingService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _shared_communication_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pipes/obscenity.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/obscenity.pipe.ts ***!
  \*****************************************/
/*! exports provided: ObscenityPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObscenityPipe", function() { return ObscenityPipe; });
/* harmony import */ var _nativeJS_string_methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nativeJS/string-methods */ "./src/app/nativeJS/string-methods.ts");
/* harmony import */ var _nativeJS_string_methods__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nativeJS_string_methods__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class ObscenityPipe {
    constructor() {
        this.obscenities = __webpack_require__(/*! badwords-list */ "./node_modules/badwords-list/lib/index.js");
    }
    transform(value, ...args) {
        var newVal = value;
        var grawlix = '@#$%&!';
        this.obscenities.array.forEach(curse => {
            newVal = newVal.replaceAll(curse, grawlix);
        });
        return newVal;
    }
}
ObscenityPipe.ɵfac = function ObscenityPipe_Factory(t) { return new (t || ObscenityPipe)(); };
ObscenityPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "obscenity", type: ObscenityPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ObscenityPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'obscenity'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _obscenity_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obscenity.pipe */ "./src/app/pipes/obscenity.pipe.ts");




class PipesModule {
}
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_obscenity_pipe__WEBPACK_IMPORTED_MODULE_2__["ObscenityPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_obscenity_pipe__WEBPACK_IMPORTED_MODULE_2__["ObscenityPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_obscenity_pipe__WEBPACK_IMPORTED_MODULE_2__["ObscenityPipe"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [
                    _obscenity_pipe__WEBPACK_IMPORTED_MODULE_2__["ObscenityPipe"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/communication.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/communication.service.ts ***!
  \*************************************************/
/*! exports provided: CommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationService", function() { return CommunicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class CommunicationService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.obscene = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    sendMessage(message) {
        this.subject.next(message);
    }
    clearMessages() {
        this.subject.next();
    }
    getMessage() {
        return this.subject.asObservable();
    }
    obscenetiy() {
        return this.obscene.asObservable();
    }
    changeObscenetiy(message) {
        this.obscene.next(message);
    }
}
CommunicationService.ɵfac = function CommunicationService_Factory(t) { return new (t || CommunicationService)(); };
CommunicationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommunicationService, factory: CommunicationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommunicationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theming.service.ts":
/*!************************************!*\
  !*** ./src/app/theming.service.ts ***!
  \************************************/
/*! exports provided: ThemingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemingService", function() { return ThemingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class ThemingService {
    constructor(ref) {
        this.ref = ref;
        this.themes = ["dark-theme", "light-theme"];
        this.theme = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("light-theme");
        // initially trigger dark mode if preference is set to dark mode on system
        const darkModeOn = window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (darkModeOn) {
            this.theme.next("dark-theme");
        }
        // watch for changes of the preference
        window.matchMedia("(prefers-color-scheme: dark)").addListener(e => {
            const turnOn = e.matches;
            this.theme.next(turnOn ? "dark-theme" : "light-theme");
            // trigger refresh of UI
            this.ref.tick();
        });
    }
    applyThemeOnOverlays(overlayContainer, themingService, cssClass) {
        const overlayContainerClasses = overlayContainer.getContainerElement().classList;
        const themeClassesToRemove = Array.from(themingService.themes);
        if (themeClassesToRemove.length) {
            overlayContainerClasses.remove(...themeClassesToRemove);
        }
        overlayContainerClasses.add(cssClass);
    }
}
ThemingService.ɵfac = function ThemingService_Factory(t) { return new (t || ThemingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"])); };
ThemingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemingService, factory: ThemingService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }]; }, null); })();


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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bharathbandaru/Developer/nowhere/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map