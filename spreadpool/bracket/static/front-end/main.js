"use strict";
(self["webpackChunkfront_end"] = self["webpackChunkfront_end"] || []).push([["main"],{

/***/ 7095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/picklist */ 9238);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _assign_brackets_assign_brackets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assign-brackets/assign-brackets.component */ 7719);
/* harmony import */ var _create_brackets_create_brackets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-brackets/create-brackets.component */ 5458);
/* harmony import */ var _update_games_update_games_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-games/update-games.component */ 7874);
/* harmony import */ var _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-detail/game-detail.component */ 4820);
/* harmony import */ var _send_emails_send_emails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send-emails/send-emails.component */ 5704);
/* harmony import */ var _edit_roster_edit_roster_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-roster/edit-roster.component */ 3943);
/* harmony import */ var _edit_roster_edit_roster_textbox_edit_roster_textbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-roster/edit-roster-textbox/edit-roster-textbox.component */ 3471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);





 //Used on Assign Entries page, assign-brackets.component
 //Used on Update Game page, game-detail.component
 //Needed by CalendarModule








const routes = [{
  path: '',
  redirectTo: 'c-brackets',
  pathMatch: 'full'
}, {
  path: 'c-brackets',
  component: _create_brackets_create_brackets_component__WEBPACK_IMPORTED_MODULE_2__.CreateBracketsComponent
}, {
  path: 'a-brackets/:id',
  component: _assign_brackets_assign_brackets_component__WEBPACK_IMPORTED_MODULE_1__.AssignBracketsComponent
}, {
  path: 'u-games',
  component: _update_games_update_games_component__WEBPACK_IMPORTED_MODULE_3__.UpdateGamesComponent
}, {
  path: 's-emails',
  component: _send_emails_send_emails_component__WEBPACK_IMPORTED_MODULE_5__.SendEmailsComponent
}, {
  path: 'e-roster',
  component: _edit_roster_edit_roster_component__WEBPACK_IMPORTED_MODULE_6__.EditRosterComponent
}];
class AdminModule {}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AdminModule, "\u0275fac", function AdminModule_Factory(t) {
  return new (t || AdminModule)();
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AdminModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AdminModule
}));
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AdminModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, primeng_picklist__WEBPACK_IMPORTED_MODULE_11__.PickListModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_14__.CalendarModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
}));
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_assign_brackets_assign_brackets_component__WEBPACK_IMPORTED_MODULE_1__.AssignBracketsComponent, _create_brackets_create_brackets_component__WEBPACK_IMPORTED_MODULE_2__.CreateBracketsComponent, _update_games_update_games_component__WEBPACK_IMPORTED_MODULE_3__.UpdateGamesComponent, _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_4__.GameDetailComponent, _send_emails_send_emails_component__WEBPACK_IMPORTED_MODULE_5__.SendEmailsComponent, _edit_roster_edit_roster_component__WEBPACK_IMPORTED_MODULE_6__.EditRosterComponent, _edit_roster_edit_roster_textbox_edit_roster_textbox_component__WEBPACK_IMPORTED_MODULE_7__.EditRosterTextboxComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, primeng_picklist__WEBPACK_IMPORTED_MODULE_11__.PickListModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_14__.CalendarModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule],
    exports: [_assign_brackets_assign_brackets_component__WEBPACK_IMPORTED_MODULE_1__.AssignBracketsComponent, _create_brackets_create_brackets_component__WEBPACK_IMPORTED_MODULE_2__.CreateBracketsComponent, _update_games_update_games_component__WEBPACK_IMPORTED_MODULE_3__.UpdateGamesComponent, _send_emails_send_emails_component__WEBPACK_IMPORTED_MODULE_5__.SendEmailsComponent, _edit_roster_edit_roster_component__WEBPACK_IMPORTED_MODULE_6__.EditRosterComponent, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ }),

/***/ 7719:
/*!********************************************************************!*\
  !*** ./src/app/admin/assign-brackets/assign-brackets.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignBracketsComponent": () => (/* binding */ AssignBracketsComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_entry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/entry.service */ 9237);
/* harmony import */ var _core_tbracket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/tbracket.service */ 2953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/picklist */ 9238);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 2366);












function AssignBracketsComponent_h6_4_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tbracket_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selected", tbracket_r4.id == ctx_r3._activeBracket.id)("value", tbracket_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tbracket_r4.name);
  }
}
function AssignBracketsComponent_h6_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h6")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Assign Entries to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AssignBracketsComponent_h6_4_Template_select_change_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.onBracketSelected(_r2.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AssignBracketsComponent_h6_4_option_5_Template, 2, 3, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Bracket");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0._tbracketList);
  }
}
function AssignBracketsComponent_div_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entry_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", entry_r8.e_name, " ");
  }
}
const _c0 = function () {
  return {
    "height": "500px"
  };
};
function AssignBracketsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "p-pickList", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onMoveToTarget", function AssignBracketsComponent_div_12_Template_p_pickList_onMoveToTarget_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.recalculate());
    })("onMoveToSource", function AssignBracketsComponent_div_12_Template_p_pickList_onMoveToSource_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.recalculate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AssignBracketsComponent_div_12_ng_template_2_Template, 2, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("sourceHeader", "Unassigned Entries (", ctx_r1._unassignedEntries_len ? ctx_r1._unassignedEntries_len : "0", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("targetHeader", "", ctx_r1._activeBracket.name, " Bracket Entries (", ctx_r1._assignEntries_len ? ctx_r1._assignEntries_len : "0", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("source", ctx_r1._unassignedEntries)("target", ctx_r1._assignedEntries)("responsive", true)("filterBy", ctx_r1.e_name)("dragdrop", true)("sourceStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0))("targetStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c0));
  }
}
class AssignBracketsComponent {
  //capture tbracket id url parameter

  constructor(_entryService, route, _tbracketService, router) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_entryService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "route", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_tbracketService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_unassignedEntries", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_assignedEntries", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_activeBracket", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "id", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_assignEntries_len", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_unassignedEntries_len", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_tbracketList", void 0);
    this._entryService = _entryService;
    this.route = route;
    this._tbracketService = _tbracketService;
    this.router = router;
  }
  ngOnInit() {
    // Find tbracket id from parameter of url and refresh data
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.refreshData(this.id);
    });
    // Update bracket list to build drop-down menu contents
    this._tbracketService.getList().subscribe(data => {
      this._tbracketList = data;
    });
  }
  refreshData(tbracket_id) {
    // Update arrays to show in picklists as well as activeBracket for proper page display
    this._tbracketService.getTbracket(tbracket_id).subscribe(data => {
      this._activeBracket = data;
    });
    this._entryService.getEntryListByBracket(tbracket_id).subscribe(data => {
      this._assignedEntries = data;
      this._assignEntries_len = this._assignedEntries.length;
      // console.log("Entries that have bracket = ", this._activeBracket.name, " assigned: ", this._assignedEntries);
    });
    // source array = all entries without a tbracket assigned (_unassignedEntries)
    this._entryService.getEntryListbyNullBracket().subscribe(data => {
      this._unassignedEntries = data;
      this._unassignedEntries_len = this._unassignedEntries.length;
      // console.log("Entries that don't have a bracket assigned: ", this._unassignedEntries);
    });
  }

  saveAndGoBack() {
    //Update tbracket_id for all entries in target array isn't already assigned tbracket_id
    this._assignedEntries.forEach(entry => {
      if (entry.tbracket != this._activeBracket.id) {
        entry.tbracket = this._activeBracket.id;
        // console.log ("Updated entry is: ", entry);
        this._entryService.updateEntry(entry).subscribe(data => {
          // console.log ("Entry updated for...", entry, data);
        });
      }
    });
    //Update tbracket_id for all entries in source array whose tbracket isn't null
    this._unassignedEntries.forEach(entry => {
      if (entry.tbracket != null) {
        entry.tbracket = null;
        // console.log ("Updated entry is: ", entry);
        this._entryService.updateEntry(entry).subscribe(data => {
          // console.log ("Entry updated for...", entry, data);
        });
      }
    });
    this.router.navigate(['/admin/c-brackets']);
  } //end saveAndGoBack()
  goBack() {
    //Just go back to Admin->Create Brackets page without making changes
    this.router.navigate(['/admin/c-brackets']);
  } //end goBack()
  // method to run each time an entry gets moved between lists, for updating title of each picklist
  recalculate() {
    this._assignEntries_len = this._assignedEntries.length;
    this._unassignedEntries_len = this._unassignedEntries.length;
  }
  // onBracketSelected(tbracket_id: number) {
  onBracketSelected(tbracket_id) {
    var tbracket_id_num = Number(tbracket_id);
    this.refreshData(tbracket_id_num);
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AssignBracketsComponent, "\u0275fac", function AssignBracketsComponent_Factory(t) {
  return new (t || AssignBracketsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_entry_service__WEBPACK_IMPORTED_MODULE_1__.EntryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_tbracket_service__WEBPACK_IMPORTED_MODULE_2__.TBracketService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AssignBracketsComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AssignBracketsComponent,
  selectors: [["app-assign-brackets"]],
  decls: 14,
  vars: 2,
  consts: [[1, "container"], [1, "row", "justify-content-start"], [1, "col", "align-self-center"], [4, "ngIf"], [1, "col"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-success", 3, "click"], [1, "select-option", 3, "change"], ["tbracketSelect", ""], ["class", "option", 3, "selected", "value", 4, "ngFor", "ngForOf"], [1, "option", 3, "selected", "value"], ["sourceFilterPlaceholder", "Search by entry name", "targetFilterPlaceholder", "Search by entry name", 3, "source", "target", "sourceHeader", "targetHeader", "responsive", "filterBy", "dragdrop", "sourceStyle", "targetStyle", "onMoveToTarget", "onMoveToSource"], ["pTemplate", "item"], [1, "ui-helper-clearfix"]],
  template: function AssignBracketsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AssignBracketsComponent_h6_4_Template, 7, 1, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssignBracketsComponent_Template_button_click_6_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Go Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssignBracketsComponent_Template_button_click_9_listener() {
        return ctx.saveAndGoBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Save Assignments & Go Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AssignBracketsComponent_div_12_Template, 3, 12, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "br");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._activeBracket);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._unassignedEntries && ctx._assignedEntries && ctx._activeBracket);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], primeng_picklist__WEBPACK_IMPORTED_MODULE_7__.PickList, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 5458:
/*!********************************************************************!*\
  !*** ./src/app/admin/create-brackets/create-brackets.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateBracketsComponent": () => (/* binding */ CreateBracketsComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/tbracket.service */ 2953);
/* harmony import */ var _shared_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/interfaces */ 615);
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/user.service */ 5760);
/* harmony import */ var _core_entry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/entry.service */ 9237);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _delete_bracket_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete-bracket-modal.component */ 6251);
/* harmony import */ var _reassign_bracket_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reassign-bracket-modal.component */ 7626);
/* harmony import */ var _reset_bracket_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset-bracket-modal.component */ 180);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);




















function CreateBracketsComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.entriesMsg);
  }
}
function CreateBracketsComponent_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td")(10, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateBracketsComponent_tr_43_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const tbracket_r4 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.openDeleteModal(tbracket_r4.id, tbracket_r4.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateBracketsComponent_tr_43_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const tbracket_r4 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.openReassignModal(tbracket_r4.id, tbracket_r4.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "(Re)Assign");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateBracketsComponent_tr_43_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const tbracket_r4 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.openResetModal(tbracket_r4.id, tbracket_r4.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateBracketsComponent_tr_43_Template_button_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const tbracket_r4 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r10.navToAssign(tbracket_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Assign Entries");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tbracket_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](tbracket_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](tbracket_r4.entry_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](tbracket_r4.id);
  }
}
function CreateBracketsComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 26)(1, "h6")(2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "You are about to delete all existing Bracket Entry assignments and create new Entries based on currently registered Users. This will unassign all Entries from Brackets. Would you like to proceed?");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateBracketsComponent_ng_template_44_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.confirmDeleteEntries());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Yes, Proceed");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateBracketsComponent_ng_template_44_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.declineDeleteEntries());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "No, Go Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return [];
};
class CreateBracketsComponent {
  constructor(_tbracketService, _userService, fb, modalService, _entryService, router) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_tbracketService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_userService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "fb", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "modalService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_entryService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_tbracketList", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "bracketAddForm", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "bracket_name", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "new_bracket", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deleteModalRef", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "confirmEntriesModalRef", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showEntriesMsg", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "entriesMsg", '');
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "confirmReassignModalRef", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "confirmResetModalRef", void 0);
    this._tbracketService = _tbracketService;
    this._userService = _userService;
    this.fb = fb;
    this.modalService = modalService;
    this._entryService = _entryService;
    this.router = router;
    this.bracketAddForm = fb.group({
      'bracket_name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
    });
    this.bracket_name = this.bracketAddForm.controls['bracket_name']; // allows for other properties, e.g. error values
  }

  ngOnInit() {
    this.new_bracket = {
      'id': null,
      'name': '',
      'entry_count': null
    }; //initialize new_bracket
    this.resetList();
  }
  ngOnChanges() {
    this.resetList();
    this.showEntriesMsg = false;
  }
  addBracket(value) {
    this.new_bracket.name = this.bracket_name.value;
    // console.log ("New Bracket name is: ", this.new_bracket);
    this._tbracketService.createTbracket(this.new_bracket, this._userService.token).subscribe(data => {
      // console.log("Tbracket added:", value);
      this.bracketAddForm.reset(); // clear out fields after form submit
      this.resetList();
    });
  } //end addBracket()
  resetList() {
    //refresh Tbracket list
    this._tbracketService.getList().subscribe(data => {
      this._tbracketList = data;
    });
    // console.log("Tbracket List has been reset")
  } // end resetList()
  // function to invoke when click on 'Assign Entries' so navigates properly
  navToAssign(tbracket_id) {
    this.router.navigate(['/admin/a-brackets', tbracket_id]);
  } //end navToAssign
  // function to open confirmEntries template modal followed by button functions
  openEntriesModal(template) {
    this.confirmEntriesModalRef = this.modalService.show(template, {
      class: 'modal-lg'
    });
  }
  confirmDeleteEntries() {
    this._entryService.resetAllEntries().subscribe(data => {
      console.log("All Entries have been deleted, then re-created based on User data!");
      this.confirmEntriesModalRef.hide();
      this.entriesMsg = "All Entries have been deleted & re-created!";
      this.showEntriesMsg = true;
      this.resetList();
    });
  }
  declineDeleteEntries() {
    this.confirmEntriesModalRef.hide();
  }
  // function to open delete-bracket-modal.component.ts component modal
  openDeleteModal(bracket_id, bracket_name) {
    const initialState = {
      tbracket_id: bracket_id,
      tbracket_name: bracket_name
    };
    this.deleteModalRef = this.modalService.show(_delete_bracket_modal_component__WEBPACK_IMPORTED_MODULE_5__.DeleteModalComponent, {
      initialState
    });
    this.modalService.onHidden.subscribe(reason => {
      // Upon modal being closed run these actions
      this.resetList();
    });
  } // end openDeleteModeal()
  // code for Bracket -> Reassign confirmation popup component modal
  openReassignModal(bracket_id, bracket_name) {
    const initialState = {
      tbracket_id: bracket_id,
      tbracket_name: bracket_name
    };
    this.confirmReassignModalRef = this.modalService.show(_reassign_bracket_modal_component__WEBPACK_IMPORTED_MODULE_6__.ReassignModalComponent, {
      initialState
    });
    this.modalService.onHidden.subscribe(reason => {
      // Upon modal being closed run these actions
      this.resetList();
    });
  } // end openReassignModal()
  // code for Bracket -> Reset confirmation popup component modal
  openResetModal(bracket_id, bracket_name) {
    const initialState = {
      tbracket_id: bracket_id,
      tbracket_name: bracket_name
    };
    this.confirmResetModalRef = this.modalService.show(_reset_bracket_modal_component__WEBPACK_IMPORTED_MODULE_7__.ResetModalComponent, {
      initialState
    });
    this.modalService.onHidden.subscribe(reason => {
      // Upon modal being closed run these actions
      this.resetList();
    });
  } // end openReassignModal()
} // export class CreateBracketsComponent
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(CreateBracketsComponent, "\u0275fac", function CreateBracketsComponent_Factory(t) {
  return new (t || CreateBracketsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__.TBracketService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_entry_service__WEBPACK_IMPORTED_MODULE_4__.EntryService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(CreateBracketsComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: CreateBracketsComponent,
  selectors: [["app-create-brackets"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
  decls: 46,
  vars: 7,
  consts: [[1, "container"], [1, "row"], [1, "col"], [3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group", "col-md-6"], ["type", "text", "placeholder", "Type bracket name..", "id", "bracket_name", 1, "form-control", 3, "formControl"], [1, "col-md-6"], ["type", "submit", "id", "submit", 1, "btn", "btn-success", 3, "disabled"], ["class", "text-success", 4, "ngIf"], [1, "btn", "btn-dark", 3, "click"], [1, "d-flex", "flex-row"], [1, "p-2"], [3, "routerLink", "click"], [1, "table", "table-sm"], ["scope", "col"], ["scope", "col", 2, "width", "10%"], [4, "ngFor", "ngForOf"], ["entries_template", ""], [1, "text-success"], ["scope", "row", 1, "align-middle"], [1, "align-middle"], [1, "btn", "btn-danger", "custom", 3, "click"], [1, "btn", "btn-warning", 3, "click"], [1, "btn", "btn-info", "custom", 3, "click"], [1, "btn", "btn-success", 3, "click"], [1, "modal-body", "text-center"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
  template: function CreateBracketsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h6")(2, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Add Bracket");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 0)(5, "div", 1)(6, "div", 2)(7, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function CreateBracketsComponent_Template_form_ngSubmit_7_listener() {
        return ctx.addBracket(ctx.bracketAddForm.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 0)(9, "div", 4)(10, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 7)(13, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Add Bracket");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, CreateBracketsComponent_span_16_Template, 2, 1, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateBracketsComponent_Template_button_click_17_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](45);
        return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.openEntriesModal(_r2));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Delete/Create All Entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, " \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 11)(22, "div", 12)(23, "h6")(24, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Brackets");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 12)(27, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateBracketsComponent_Template_a_click_27_listener() {
        return ctx.resetList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "refresh");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "table", 14)(30, "thead")(31, "tr")(32, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Num Entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "Id");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, CreateBracketsComponent_tr_43_Template, 21, 4, "tr", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, CreateBracketsComponent_ng_template_44_Template, 8, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.bracketAddForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.bracket_name);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.bracketAddForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showEntriesMsg);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](6, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx._tbracketList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 6251:
/*!*************************************************************************!*\
  !*** ./src/app/admin/create-brackets/delete-bracket-modal.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteModalComponent": () => (/* binding */ DeleteModalComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/tbracket.service */ 2953);
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/user.service */ 5760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);








class DeleteModalComponent {
  constructor(deleteModalRef, _tbracketService, _userService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deleteModalRef", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_tbracketService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_userService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tbracket_id", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tbracket_name", void 0);
    this.deleteModalRef = deleteModalRef;
    this._tbracketService = _tbracketService;
    this._userService = _userService;
  }
  ngOnInit() {}
  deleteBracket(bracket_id) {
    // console.log("deleteBracket method invoked for Tbracket id:", bracket_id);
    this._tbracketService.deleteTbracket(bracket_id, this._userService.token).subscribe(data => {
      console.log("delete Tbracket successful");
    });
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(DeleteModalComponent, "\u0275fac", function DeleteModalComponent_Factory(t) {
  return new (t || DeleteModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__.TBracketService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(DeleteModalComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DeleteModalComponent,
  selectors: [["modal-content"]],
  decls: 15,
  vars: 1,
  consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
  template: function DeleteModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Confirm Bracket Deletion");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeleteModalComponent_Template_button_click_3_listener() {
        return ctx.deleteModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Are you sure you want to delete the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " bracket?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5)(13, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeleteModalComponent_Template_button_click_13_listener() {
        ctx.deleteModalRef.hide();
        return ctx.deleteBracket(ctx.tbracket_id);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.tbracket_name);
    }
  },
  encapsulation: 2
}));

/***/ }),

/***/ 7626:
/*!***************************************************************************!*\
  !*** ./src/app/admin/create-brackets/reassign-bracket-modal.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReassignModalComponent": () => (/* binding */ ReassignModalComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/tbracket.service */ 2953);
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/user.service */ 5760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);








class ReassignModalComponent {
  constructor(confirmReassignModalRef, _tbracketService, _userService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "confirmReassignModalRef", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_tbracketService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_userService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tbracket_id", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tbracket_name", void 0);
    this.confirmReassignModalRef = confirmReassignModalRef;
    this._tbracketService = _tbracketService;
    this._userService = _userService;
  }
  ngOnInit() {}
  reassignBracket(bracket_id) {
    // console.log("Tbracket id for re-assignment is", bracket_name);
    this._tbracketService.reassignTbracket(bracket_id, this._userService.token).subscribe(data => {
      console.log("Tbracket id:", bracket_id, " entries re-assigned!");
    });
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ReassignModalComponent, "\u0275fac", function ReassignModalComponent_Factory(t) {
  return new (t || ReassignModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__.TBracketService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ReassignModalComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ReassignModalComponent,
  selectors: [["modal-content"]],
  decls: 15,
  vars: 1,
  consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-warning", 3, "click"]],
  template: function ReassignModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Confirm Bracket Reassignment");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReassignModalComponent_Template_button_click_3_listener() {
        return ctx.confirmReassignModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Are you sure you want to (Re)Assign the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " bracket? This will randomly assign new original & active teams to every entry, reset Round 1 matchups and clear out Round 2-6 matchups.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5)(13, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReassignModalComponent_Template_button_click_13_listener() {
        ctx.confirmReassignModalRef.hide();
        return ctx.reassignBracket(ctx.tbracket_id);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "(Re)Assign");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.tbracket_name);
    }
  },
  encapsulation: 2
}));

/***/ }),

/***/ 180:
/*!************************************************************************!*\
  !*** ./src/app/admin/create-brackets/reset-bracket-modal.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetModalComponent": () => (/* binding */ ResetModalComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/tbracket.service */ 2953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);






class ResetModalComponent {
  constructor(confirmResetModalRef, _tbracketService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "confirmResetModalRef", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_tbracketService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tbracket_id", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tbracket_name", void 0);
    this.confirmResetModalRef = confirmResetModalRef;
    this._tbracketService = _tbracketService;
  }
  ngOnInit() {}
  resetBracket(bracket_id, bracket_name) {
    this._tbracketService.resetTbracket(bracket_id).subscribe(data => {
      console.log(bracket_name, " Tbracket has been reset!");
    });
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ResetModalComponent, "\u0275fac", function ResetModalComponent_Factory(t) {
  return new (t || ResetModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.BsModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__.TBracketService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ResetModalComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ResetModalComponent,
  selectors: [["modal-content"]],
  decls: 15,
  vars: 1,
  consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-info", 3, "click"]],
  template: function ResetModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Confirm Bracket Reset");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResetModalComponent_Template_button_click_3_listener() {
        return ctx.confirmResetModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Are you sure you want to Reset the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " bracket? This will set all active teams = original teams, reset all Round 1 matchups, and clear out Round 2-6 matchups for this bracket.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5)(13, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResetModalComponent_Template_button_click_13_listener() {
        ctx.confirmResetModalRef.hide();
        return ctx.resetBracket(ctx.tbracket_id, ctx.tbracket_name);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Reset");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.tbracket_name);
    }
  },
  encapsulation: 2
}));

/***/ }),

/***/ 3471:
/*!****************************************************************************************!*\
  !*** ./src/app/admin/edit-roster/edit-roster-textbox/edit-roster-textbox.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditRosterTextboxComponent": () => (/* binding */ EditRosterTextboxComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);




class EditRosterTextboxComponent {
  get filter() {
    return this._filter;
  }
  set filter(val) {
    this._filter = val;
    this.changed.emit(this.filter); //Raise changed event
  }

  constructor() {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_filter", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "changed", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
  }
  ngOnInit() {}
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(EditRosterTextboxComponent, "\u0275fac", function EditRosterTextboxComponent_Factory(t) {
  return new (t || EditRosterTextboxComponent)();
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(EditRosterTextboxComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: EditRosterTextboxComponent,
  selectors: [["app-edit-roster-textbox"]],
  inputs: {
    filter: "filter"
  },
  outputs: {
    changed: "changed"
  },
  decls: 2,
  vars: 1,
  consts: [["type", "text", 3, "ngModel", "ngModelChange"]],
  template: function EditRosterTextboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Search by Name/Email: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditRosterTextboxComponent_Template_input_ngModelChange_1_listener($event) {
        return ctx.filter = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filter);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 3943:
/*!************************************************************!*\
  !*** ./src/app/admin/edit-roster/edit-roster.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditRosterComponent": () => (/* binding */ EditRosterComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/player.service */ 8464);
/* harmony import */ var _core_sorter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sorter.service */ 797);
/* harmony import */ var _profile_form_modal_admin_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../profile-form-modal/admin-profile-form-modal.component */ 5337);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _edit_roster_textbox_edit_roster_textbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-roster-textbox/edit-roster-textbox.component */ 3471);













function EditRosterComponent_fa_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "fa-icon", 7);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r0.faCaretDown);
  }
}
function EditRosterComponent_fa_icon_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "fa-icon", 7);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r1.faCaretDown);
  }
}
function EditRosterComponent_fa_icon_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "fa-icon", 7);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r2.faCaretDown);
  }
}
function EditRosterComponent_fa_icon_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "fa-icon", 7);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r3.faCaretDown);
  }
}
function EditRosterComponent_fa_icon_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "fa-icon", 7);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r4.faCheckSquare);
  }
}
function EditRosterComponent_fa_icon_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "fa-icon", 7);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r5.faSquare);
  }
}
function EditRosterComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td")(14, "fa-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditRosterComponent_tr_31_Template_fa_icon_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const player_r7 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.openAdminProfileModal(player_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const player_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", player_r7.first_name, "\u00A0", player_r7.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](player_r7.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](player_r7.num_entries);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](player_r7.num_entries == 1 ? "-" : player_r7.mult_entry_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](player_r7.paid == true ? "YES" : "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r6.faEdit);
  }
}
class EditRosterComponent {
  // to capture loggedInUser object from parent component
  // to user which row a user hovers on

  // sort function variables

  // font-awesome icons

  // Modal object to capture content

  constructor(_playerService, _modalService, _sorterService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_playerService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_modalService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_sorterService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_roster", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_filteredRoster", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_loggedInUser", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "hoveredIndex", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loading", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_property", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_direction", 1);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "faCaretDown", _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCaretDown);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "faCaretUp", _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCaretUp);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "faCheckSquare", _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCheckSquare);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "faSquare", _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faSquare);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "faEdit", _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faEdit);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "bsModalRef", void 0);
    this._playerService = _playerService;
    this._modalService = _modalService;
    this._sorterService = _sorterService;
  }
  ngOnInit() {
    this._playerService.getList().subscribe(data => {
      this._filteredRoster = this._roster = data;
    });
  }
  openAdminProfileModal(_player) {
    const initialState = {
      id: _player.id,
      profile_user: _player
    };
    this.bsModalRef = this._modalService.show(_profile_form_modal_admin_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_3__.AdminProfileFormModalComponent, {
      initialState
    });
    this._modalService.onHidden.subscribe(() => {
      // Update and re-display roster so any changes are reflected in what the user sees on screen
      // this._playerService.getList().subscribe(data => {
      // 	this._filteredRoster = data;
      // 	if (this._property) {
      // 		this.sort(this._property);
      // 	}
      // });
      // console.log("_property = ", this._property, " _direction = ", this._direction)
    });
  }
  filter(data) {
    // Function that filters the Roster list based on what a user types in the edit-roster-textbox component
    if (data) {
      this._filteredRoster = this._roster.filter(item => item.full_name.toLowerCase().indexOf(data.toLowerCase()) > -1 || item.email.toLowerCase().indexOf(data.toLowerCase()) > -1);
    } else {
      this._filteredRoster = this._roster;
    }
  }
  sort(prop) {
    this._sorterService.sort(this._filteredRoster, prop);
    this._property = prop;
    this._direction = this._property === prop ? this._direction * -1 : 1;
    // console.log ("property = ", this._property, " & direction = ", this._direction);
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(EditRosterComponent, "\u0275fac", function EditRosterComponent_Factory(t) {
  return new (t || EditRosterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_player_service__WEBPACK_IMPORTED_MODULE_1__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_sorter_service__WEBPACK_IMPORTED_MODULE_2__.SorterService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(EditRosterComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: EditRosterComponent,
  selectors: [["app-edit-roster"]],
  decls: 33,
  vars: 7,
  consts: [[3, "changed"], [1, "table", "table-sm"], ["scope", "col"], ["scope", "col", 1, "cursor-pointer", 3, "click"], [3, "icon", 4, "ngIf"], ["scope", "col", 2, "width", "5%"], [4, "ngFor", "ngForOf"], [3, "icon"], ["scope", "row"], ["tooltip", "Edit Profile", 1, "cursor-pointer", 3, "icon", "click"]],
  template: function EditRosterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Players");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div")(4, "app-edit-roster-textbox", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("changed", function EditRosterComponent_Template_app_edit_roster_textbox_changed_4_listener($event) {
        return ctx.filter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br")(6, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "table", 1)(8, "thead")(9, "tr")(10, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditRosterComponent_Template_th_click_12_listener() {
        return ctx.sort("last_name");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, EditRosterComponent_fa_icon_14_Template, 1, 1, "fa-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, EditRosterComponent_fa_icon_15_Template, 1, 1, "fa-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditRosterComponent_Template_th_click_18_listener() {
        return ctx.sort("num_entries");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Num Entries ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, EditRosterComponent_fa_icon_20_Template, 1, 1, "fa-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, EditRosterComponent_fa_icon_21_Template, 1, 1, "fa-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "(S)ame/(D)iff");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditRosterComponent_Template_th_click_24_listener() {
        return ctx.sort("paid");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Paid? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, EditRosterComponent_fa_icon_26_Template, 1, 1, "fa-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, EditRosterComponent_fa_icon_27_Template, 1, 1, "fa-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, EditRosterComponent_tr_31_Template, 15, 8, "tr", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx._property == "last_name" && ctx._direction == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx._property == "last_name" && ctx._direction == -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx._property == "num_entries" && ctx._direction == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx._property == "num_entries" && ctx._direction == -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx._property == "paid" && ctx._direction == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx._property == "paid" && ctx._direction == -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx._filteredRoster);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconComponent, _edit_roster_textbox_edit_roster_textbox_component__WEBPACK_IMPORTED_MODULE_4__.EditRosterTextboxComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 4820:
/*!************************************************************!*\
  !*** ./src/app/admin/game-detail/game-detail.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameDetailComponent": () => (/* binding */ GameDetailComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/game.service */ 1110);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/functions */ 8629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/calendar */ 2547);











function GameDetailComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.msg);
  }
}
class GameDetailComponent {
  // Update Game form variables

  get game() {
    return this._game;
  }
  set game(value) {
    if (value) {
      this._game = value;
    }
  }
  constructor(_gameService, fb, router) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_gameService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "fb", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "gameUpdateForm", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "spread", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "team1_score", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "team2_score", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "game_date", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "game_time", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "send_email", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_game", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showMsg", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "msg", '');
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_todayDate", new Date());
    this._gameService = _gameService;
    this.fb = fb;
    this.router = router;
    // Update Game form setup
    this.gameUpdateForm = fb.group({
      // 'spread' : ['', Validators.required],
      'spread': [''],
      'team1_score': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      'team2_score': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      'game_date': [this._todayDate.toISOString().substring(0, 10)],
      'game_time': ['12:00 PM'],
      'send_email': [true]
    });
    this.spread = this.gameUpdateForm.controls['spread'];
    this.team1_score = this.gameUpdateForm.controls['team1_score'];
    this.team2_score = this.gameUpdateForm.controls['team2_score'];
    this.game_date = this.gameUpdateForm.controls['game_date'];
    this.game_time = this.gameUpdateForm.controls['game_time'];
    this.send_email = this.gameUpdateForm.controls['send_email'];
  }
  ngOnInit() {}
  ngOnChanges() {
    // console.log("game-detail component received _game update..", this._game);
    this.gameUpdateForm.patchValue(this._game);
    if (this._game.tipoff_date_time !== null) {
      // set form values from back-end tipoff_date_time if not null
      this.gameUpdateForm.controls['game_date'].patchValue(this._game.tipoff_date_time.substring(0, 10));
      this.gameUpdateForm.controls['game_time'].patchValue((0,_shared_functions__WEBPACK_IMPORTED_MODULE_2__.convertTime24to12)(this._game.tipoff_date_time.substring(11, 16)));
    } else {
      //otherwise set to today's date and 12:00PM
      this.gameUpdateForm.controls['game_date'].patchValue(this._todayDate.toISOString().substring(0, 10));
      this.gameUpdateForm.controls['game_time'].patchValue('12:00 PM');
    }
    this.gameUpdateForm.controls['send_email'].patchValue(true);
    this.showMsg = false;
  }
  updateGame() {
    this.showMsg = false;
    this.msg = "";
    this._game.team1_score = this.team1_score.value;
    this._game.spread = this.spread.value;
    this._game.team2_score = this.team2_score.value;
    if (this.game_date.value && this.game_time.value) {
      this._game.tipoff_date_time = this.game_date.value + " " + (0,_shared_functions__WEBPACK_IMPORTED_MODULE_2__.convertTime12to24)(this.game_time.value);
    } else {
      this._game.tipoff_date_time = null;
    }
    // Depending on whether send_email checkbox is checked, send different request to backend
    if (this.send_email.value) {
      this._gameService.updateGame_sendEmail(this._game).subscribe(data => {
        this.msg = "Game #: " + this._game.id + " has been updated & email sent!";
      });
    } else {
      this._gameService.updateGame(this._game).subscribe(data => {
        this.msg = "Game #: " + this._game.id + " has been updated!";
      });
    }
    console.log("Game updated with:", this._game);
    this.showMsg = true;
  } //end updateGame()
  resetGame() {
    // console.log("Game id for reset is", this._game.id);
    this._gameService.resetGame(this._game.id).subscribe(data => {
      // console.log("Game #", this._game.id, "has been reset!");
      // navigate back to Retrieve Game page *** not working ***
      // this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      // 	this.router.navigate(['/admin/u-games']));
      // retrieve newly updated game and update form
      this._gameService.getGameDetails(this._game.id).subscribe(data => {
        this._game = data;
        this.gameUpdateForm.reset();
        this.gameUpdateForm.patchValue(this._game);
        this.msg = "Game #: " + this._game.id + " has been reset!";
        this.showMsg = true;
      });
    });
  } //end resetGame()
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(GameDetailComponent, "\u0275fac", function GameDetailComponent_Factory(t) {
  return new (t || GameDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_game_service__WEBPACK_IMPORTED_MODULE_1__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(GameDetailComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: GameDetailComponent,
  selectors: [["app-game-detail"]],
  inputs: {
    game: "game"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  decls: 68,
  vars: 15,
  consts: [[3, "formGroup", "ngSubmit"], [1, "container"], ["class", "text-success", 4, "ngIf"], [1, "form-row"], [1, "col", "non-form-element"], [1, "form-group", "col"], [1, "form-row", "align-items-center"], ["for", "team1_score"], ["type", "number", "id", "team1_score", 1, "form-control", 3, "formControl"], ["for", "spread"], ["type", "number", "id", "spread", 1, "form-control", 3, "formControl"], ["for", "team2_score"], ["type", "number", "id", "team2_score", 1, "form-control", 3, "formControl"], ["for", "game_date"], ["dateFormat", "yy-mm-dd", "dataType", "string", "id", "game_date", 3, "formControl"], ["for", "game_time"], ["dataType", "string", "id", "game_time", 3, "formControl", "timeOnly", "hourFormat"], ["type", "checkbox", 3, "formControl"], ["type", "submit", "id", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "row", "justify-content-start"], [1, "col"], [1, "btn", "btn-info", 3, "click"], [1, "text-success"]],
  template: function GameDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function GameDetailComponent_Template_form_ngSubmit_0_listener() {
        return ctx.updateGame();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, GameDetailComponent_span_2_Template, 2, 1, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Game id: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4)(9, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Region: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6)(14, "div", 4)(15, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Team 1: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 5)(19, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Team 1 Score:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 5)(23, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Game Spread:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 6)(27, "div", 4)(28, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Team 2: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 5)(32, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Team 2 Score:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 6)(37, "div", 4)(38, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Game Date/Time:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 5)(41, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Date:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "p-calendar", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 5)(45, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Time (ET):\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "p-calendar", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 6)(49, "div", 4)(50, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Send Email?:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 3)(56, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Update Game");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, " \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "br")(60, "br")(61, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 1)(63, "div", 19)(64, "div", 20)(65, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameDetailComponent_Template_button_click_65_listener() {
        return ctx.resetGame();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Reset Game");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "br");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.gameUpdateForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showMsg);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx._game.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx._game.region);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx._game.team1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.team1_score);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.spread);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx._game.team2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.team2_score);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.game_date);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.game_time)("timeOnly", true)("hourFormat", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.send_email);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.gameUpdateForm.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, primeng_calendar__WEBPACK_IMPORTED_MODULE_7__.Calendar],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 5704:
/*!************************************************************!*\
  !*** ./src/app/admin/send-emails/send-emails.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendEmailsComponent": () => (/* binding */ SendEmailsComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/tbracket.service */ 2953);
/* harmony import */ var _core_entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/entry.service */ 9237);
/* harmony import */ var _core_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/game.service */ 1110);
/* harmony import */ var _shared_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/interfaces */ 615);
/* harmony import */ var _send_orig_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send-orig-modal.component */ 7516);
/* harmony import */ var _send_games_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-games-modal.component */ 1870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);














function SendEmailsComponent_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td")(10, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SendEmailsComponent_tr_19_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const tbracket_r1 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openSendOrigModal(tbracket_r1.id, tbracket_r1.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Send Orig Teams");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SendEmailsComponent_tr_19_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const tbracket_r1 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.openSendGamesModal(tbracket_r1.id, tbracket_r1.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Send Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tbracket_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](tbracket_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](tbracket_r1.entry_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](tbracket_r1.id);
  }
}
class SendEmailsComponent {
  constructor(_tbracketService, _entryService, _gameService, modalService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_tbracketService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_entryService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_gameService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "modalService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_tbracketList", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendOrigModalRef", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendGamesModalRef", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "emailTargetList", void 0);
    this._tbracketService = _tbracketService;
    this._entryService = _entryService;
    this._gameService = _gameService;
    this.modalService = modalService;
  }
  ngOnInit() {
    this.resetList();
  }
  resetList() {
    //refresh Tbracket list
    this._tbracketService.getList().subscribe(data => {
      this._tbracketList = data;
    });
    // console.log("Tbracket List has been reset")
  } // end resetList()
  openSendOrigModal(bracket_id, bracket_name) {
    this._entryService.getEntryListByBracket(bracket_id).subscribe(data => {
      const emailTargetList = data.map(target => {
        // Create an array of player names to display in modal
        return target.player;
      });
      // Create a unique list of targets users, eliminating duplicates of owner(s) having 2+ entries
      this.emailTargetList = emailTargetList.filter(function (item, pos) {
        return emailTargetList.indexOf(item) == pos;
      });
      // console.log("List of players = ", this.emailTargetList);
      const initialState = {
        tbracket_id: bracket_id,
        tbracket_name: bracket_name,
        emailTargetList: this.emailTargetList,
        num_targets: this.emailTargetList.length
      };
      this.sendOrigModalRef = this.modalService.show(_send_orig_modal_component__WEBPACK_IMPORTED_MODULE_5__.SendOrigModalComponent, {
        initialState
      });
    });
    this.modalService.onHidden.subscribe(reason => {
      // Upon modal being closed run these actions
      this.resetList();
    });
    // console.log("Tbracket ", bracket_name, " with id: ", bracket_id, "will invoke send_emails API");
  }

  openSendGamesModal(bracket_id, bracket_name) {
    const initialState = {
      tbracket_id: bracket_id,
      tbracket_name: bracket_name
    };
    this.sendGamesModalRef = this.modalService.show(_send_games_modal_component__WEBPACK_IMPORTED_MODULE_6__.SendGamesModalComponent, {
      initialState
    });
    // })
    this.modalService.onHidden.subscribe(reason => {
      // Upon modal being closed run these actions
      this.resetList();
    });
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SendEmailsComponent, "\u0275fac", function SendEmailsComponent_Factory(t) {
  return new (t || SendEmailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__.TBracketService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_entry_service__WEBPACK_IMPORTED_MODULE_2__.EntryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_game_service__WEBPACK_IMPORTED_MODULE_3__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__.BsModalService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SendEmailsComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: SendEmailsComponent,
  selectors: [["app-send-emails"]],
  decls: 20,
  vars: 1,
  consts: [[1, "table", "table-sm"], ["scope", "col"], ["scope", "col", 2, "width", "10%"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-outline-success", 3, "click"]],
  template: function SendEmailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h6")(2, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Email Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "table", 0)(6, "thead")(7, "tr")(8, "th", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Num Entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Id");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "th", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Email Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, SendEmailsComponent_tr_19_Template, 16, 4, "tr", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx._tbracketList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 1870:
/*!*****************************************************************!*\
  !*** ./src/app/admin/send-emails/send-games-modal.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendGamesModalComponent": () => (/* binding */ SendGamesModalComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/game.service */ 1110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);








function SendGamesModalComponent_div_0_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", value_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](value_r5);
  }
}
function SendGamesModalComponent_div_0_li_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const game_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](game_r6);
  }
}
function SendGamesModalComponent_div_0_p_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "There aren't any new games with spreads posted that Round!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SendGamesModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "h4", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Confirm Send Games Emails");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SendGamesModalComponent_div_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.sendGamesModalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Are you sure you want to send emails to players of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "bracket involved with games in Round #: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "select", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function SendGamesModalComponent_div_0_Template_select_change_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.onOptionsSelected(_r1.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, SendGamesModalComponent_div_0_option_16_Template, 2, 2, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, SendGamesModalComponent_div_0_li_19_Template, 2, 1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, SendGamesModalComponent_div_0_p_20_Template, 2, 0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 11)(22, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SendGamesModalComponent_div_0_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      ctx_r11.sendGamesModalRef.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.sendGamesEmail(ctx_r11.tbracket_id, _r1.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Send emails");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.tbracket_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.tround_values);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.gamesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.gamesList.length == 0);
  }
}
class SendGamesModalComponent {
  constructor(sendGamesModalRef, _gameService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendGamesModalRef", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_gameService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tbracket_id", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tbracket_name", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tround_values", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "gamesList", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "game_entry", void 0);
    this.sendGamesModalRef = sendGamesModalRef;
    this._gameService = _gameService;
  }
  ngOnInit() {
    this.tround_values = [1, 2, 3, 4, 5, 6]; // Tournament rounds possible from which to select games
    this.refreshGameListing(this.tround_values[0]); // Generate games listing based on Round 1 as default
  }

  sendGamesEmail(bracket_id, round_id) {
    // console.log("Tbracket with id: ", bracket_id, "for tround", round_id, "will invoke emailGamesToOwners API");
    this._gameService.emailGamesToOwners(bracket_id, round_id).subscribe(data => {
      console.log("Tbracket with id: ", data['tbracketid'], " for Round", round_id, "owners have had today's games sent!");
    });
  }
  onOptionsSelected(value) {
    // console.log("the selected value is " + value);
    this.refreshGameListing(value);
  }
  refreshGameListing(value) {
    this._gameService.getGamesSpreadNoScore(value).subscribe(data => {
      this.gamesList = data.map(target => {
        // Build an array of games to display in modal
        if (target.spread > 0) {
          // return ' ' + target.team1 + ' [-' + target.spread + '.5] vs.' +target.team2;
          this.game_entry = ' ' + target.team1 + ' [-' + target.spread + '.5] vs.' + target.team2;
        } else if (target.spread == 0) {
          // return ' ' + target.team1 + ' [PICK EM] vs. ' + target.team2;
          this.game_entry = ' ' + target.team1 + ' [PICK EM] vs. ' + target.team2;
        } else {
          // return ' ' + target.team1 + ' vs. ' + target.team2 + ' [-' + -target.spread + '.5]';
          this.game_entry = ' ' + target.team1 + ' vs. ' + target.team2 + ' [-' + -target.spread + '.5]';
        }
        if (target.tipoff_date) {
          this.game_entry += ' at ' + target.tipoff_time + ' on ' + target.tipoff_date;
        }
        return this.game_entry;
      });
    });
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SendGamesModalComponent, "\u0275fac", function SendGamesModalComponent_Factory(t) {
  return new (t || SendGamesModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.BsModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_game_service__WEBPACK_IMPORTED_MODULE_1__.GameService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SendGamesModalComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SendGamesModalComponent,
  selectors: [["modal-content"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "select-option", 3, "change"], ["troundSelect", ""], ["class", "option", 3, "value", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"], [1, "option", 3, "value"], [1, "text-danger"]],
  template: function SendGamesModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SendGamesModalComponent_div_0_Template, 24, 4, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gamesList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"]],
  encapsulation: 2
}));

/***/ }),

/***/ 7516:
/*!****************************************************************!*\
  !*** ./src/app/admin/send-emails/send-orig-modal.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendOrigModalComponent": () => (/* binding */ SendOrigModalComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_entry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/entry.service */ 9237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);







function SendOrigModalComponent_li_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const target_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](target_r1);
  }
}
class SendOrigModalComponent {
  constructor(sendOrigModalRef, _entryService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendOrigModalRef", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_entryService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tbracket_id", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tbracket_name", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "emailTargetList", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "num_targets", void 0);
    this.sendOrigModalRef = sendOrigModalRef;
    this._entryService = _entryService;
  }
  ngOnInit() {}
  sendOriginalTeamsEmail(bracket_id) {
    // console.log("Tbracket with id: ", bracket_id, "will invoke send_emails API");
    this._entryService.emailOrigTeamsToOwners(bracket_id).subscribe(data => {
      console.log("Tbracket with id: ", data['tbracketid'], " have had emails sent!");
    });
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SendOrigModalComponent, "\u0275fac", function SendOrigModalComponent_Factory(t) {
  return new (t || SendOrigModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.BsModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_entry_service__WEBPACK_IMPORTED_MODULE_1__.EntryService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SendOrigModalComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SendOrigModalComponent,
  selectors: [["modal-content"]],
  decls: 17,
  vars: 3,
  consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-success", 3, "click"]],
  template: function SendOrigModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Confirm Send Original Teams Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SendOrigModalComponent_Template_button_click_3_listener() {
        return ctx.sendOrigModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " bracket?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ol");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, SendOrigModalComponent_li_13_Template, 2, 1, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6)(15, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SendOrigModalComponent_Template_button_click_15_listener() {
        ctx.sendOrigModalRef.hide();
        return ctx.sendOriginalTeamsEmail(ctx.tbracket_id);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Send emails");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Are you sure you want to send emails to these ", ctx.num_targets, " players of ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.tbracket_name);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.emailTargetList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
  encapsulation: 2
}));

/***/ }),

/***/ 7874:
/*!**************************************************************!*\
  !*** ./src/app/admin/update-games/update-games.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateGamesComponent": () => (/* binding */ UpdateGamesComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/game.service */ 1110);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game-detail/game-detail.component */ 4820);








function UpdateGamesComponent_app_game_detail_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-game-detail", 11);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("game", ctx_r0._currentGame);
  }
}
class UpdateGamesComponent {
  // Retrieve Game form variables

  constructor(_gameService, fb) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_gameService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "fb", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "gameRetrieveForm", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "game_id", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_currentGame", void 0);
    this._gameService = _gameService;
    this.fb = fb;
    // Retrieve Game form setup
    this.gameRetrieveForm = fb.group({
      'game_id': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.game_id = this.gameRetrieveForm.controls['game_id']; // allows for other properties, e.g. error values
  }

  ngOnInit() {}
  retrieveGame() {
    this._gameService.getGameDetails(this.game_id.value).subscribe(data => {
      // console.log("Game retrieved is:", data);
      this._currentGame = data;
      this.gameRetrieveForm.reset(); // clear out fields after form submit
    });
  } //end retrieveGame()
  resetAllGames() {
    this._gameService.resetAllGames().subscribe(data => {
      console.log("All Games Reset!");
    });
  }
  replayAllGames() {
    this._gameService.replayAllGames().subscribe(data => {
      console.log("All Games Replayed!");
    });
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(UpdateGamesComponent, "\u0275fac", function UpdateGamesComponent_Factory(t) {
  return new (t || UpdateGamesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_game_service__WEBPACK_IMPORTED_MODULE_1__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(UpdateGamesComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: UpdateGamesComponent,
  selectors: [["app-update-games"]],
  decls: 30,
  vars: 4,
  consts: [[1, "container"], [1, "row"], [1, "col"], [3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group", "col-3"], ["type", "number", "min", "1", "max", "63", "placeholder", "Enter game id to Update..", "id", "game_id", 1, "form-control", 3, "formControl"], ["type", "submit", "id", "submit", 1, "btn", "btn-success", 3, "disabled"], [3, "game", 4, "ngIf"], [1, "btn", "btn-dark", 3, "click"], [1, "btn", "btn-warning", 3, "click"], [3, "game"]],
  template: function UpdateGamesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5")(2, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Retrieve Game");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 0)(5, "div", 1)(6, "div", 2)(7, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function UpdateGamesComponent_Template_form_ngSubmit_7_listener() {
        return ctx.retrieveGame();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4)(9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 2)(12, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Retrieve Game");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "h5")(16, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Update Game");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, UpdateGamesComponent_app_game_detail_18_Template, 1, 1, "app-game-detail", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "h5")(21, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Testing Features");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 2)(24, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateGamesComponent_Template_button_click_24_listener() {
        return ctx.replayAllGames();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Replay All Games");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateGamesComponent_Template_button_click_27_listener() {
        return ctx.resetAllGames();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Reset All Games (Testing Only)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "br");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.gameRetrieveForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.game_id);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.gameRetrieveForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._currentGame);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_2__.GameDetailComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 4356:
/*!*****************************************!*\
  !*** ./src/app/app-bootstrap.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppBootstrapModule": () => (/* binding */ AppBootstrapModule)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 2184);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 7618);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 82);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


// ngx-bootstrap modules











class AppBootstrapModule {}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppBootstrapModule, "\u0275fac", function AppBootstrapModule_Factory(t) {
  return new (t || AppBootstrapModule)();
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppBootstrapModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppBootstrapModule
}));
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppBootstrapModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__.BsDropdownModule.forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule.forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.ModalModule.forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__.CollapseModule.forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__.TabsModule.forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__.BsDropdownModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.ModalModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__.CollapseModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__.TabsModule]
}));
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppBootstrapModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__.BsDropdownModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.ModalModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__.CollapseModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__.TabsModule],
    exports: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__.BsDropdownModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.ModalModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__.CollapseModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__.TabsModule]
  });
})();

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/admin.module */ 7095);
/* harmony import */ var _core_user_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/user-resolver */ 7486);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ 6630);
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout/logout.component */ 4753);
/* harmony import */ var _brackets_brackets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brackets/brackets.component */ 2393);
/* harmony import */ var _core_is_admin_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/is-admin.guard */ 7027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);











const routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
  resolve: {
    loggedInUser: _core_user_resolver__WEBPACK_IMPORTED_MODULE_2__.UserResolver
  },
  runGuardsAndResolvers: 'always'
}, {
  path: 'profile',
  component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__.ProfileComponent,
  resolve: {
    loggedInUser: _core_user_resolver__WEBPACK_IMPORTED_MODULE_2__.UserResolver
  }
}, {
  path: 'brackets/:id',
  component: _brackets_brackets_component__WEBPACK_IMPORTED_MODULE_6__.BracketsComponent
}, {
  path: 'logout',
  component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__.LogoutComponent,
  resolve: {
    url: 'externalUrlRedirectResolver'
  },
  data: {
    externalUrl: '/logout/'
  }
}, {
  path: 'admin',
  canActivate: [_core_is_admin_guard__WEBPACK_IMPORTED_MODULE_7__.IsAdminGuard],
  children: _admin_admin_module__WEBPACK_IMPORTED_MODULE_1__.routes
}, {
  path: '**',
  redirectTo: '/home',
  pathMatch: 'full'
}];
class AppRoutingModule {}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppRoutingModule, "\u0275fac", function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppRoutingModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
}));
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppRoutingModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [{
    provide: 'externalUrlRedirectResolver',
    useValue: (route, state) => {
      window.location.href = route.data.externalUrl;
    }
  }, _core_user_resolver__WEBPACK_IMPORTED_MODULE_2__.UserResolver],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
}));
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/user.service */ 5760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ui_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/layout/layout.component */ 9951);







class AppComponent {
  constructor(router, _userService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_userService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "title", 'front-end');
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "token_id", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentUser", void 0);
    this.router = router;
    this._userService = _userService;
  }
  ngOnInit() {
    // Check to see if app is being intiatiated from Django shell or directly from terminal
    // By looking at localStorage for 'tokenid' that Django passes
    if (window.localStorage.getItem('tokenid')) {
      // Get token passed from Django view to localStorage and pass to UserService
      // refresh UserService token for subsequent use, removeItem from localStorage
      this.token_id = JSON.parse(window.localStorage.getItem('tokenid'));
      // console.log ("token is: ", this.token_id);
      this._userService.id = this.token_id['id'];
      this._userService.token = this.token_id['token'];
      if (this.token_id['before_tourney'] == "True") {
        this._userService.beforeTourney = true;
      } else {
        this._userService.beforeTourney = false;
      }
      ;
      this._userService.refreshToken();
      window.localStorage.clear();
    }
    // *** For testing purposes when launch Angular via 'ng serve --proxy-config proxyconfig.json' from project folder
    // Login via _userService to establish token with preset values ***
    else {
      this._userService.beforeTourney = true;
      // this._userService.id = 1;
      // this._userService.login({'email': 'paulrmaurer@yahoo.com', 'password': 'Quakers1!'});
      this._userService.id = 2;
      this._userService.login({
        'email': 'nhoerner@cubs.com',
        'password': 'DavidRoss3!'
      });
      // this._userService.id = 8;
      // this._userService.login({'email': 'bzobrist@cubs.com', 'password': 'Maddon55'});
      // this._userService.id = 29;
      // this._userService.login({'email': 'bzobrist@cubs.com', 'password': 'Maddon55'});
    }
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppComponent, "\u0275fac", function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-layout");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _ui_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.store */ 4827);
/* harmony import */ var _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-bootstrap.module */ 4356);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/ui.module */ 8086);
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin.module */ 7095);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _roster_roster_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./roster/roster.component */ 3659);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ 6630);
/* harmony import */ var _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile-details/profile-details.component */ 7911);
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logout/logout.component */ 4753);
/* harmony import */ var _brackets_brackets_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./brackets/brackets.component */ 2393);
/* harmony import */ var _profile_form_modal_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile-form-modal/profile-form-modal.component */ 9271);
/* harmony import */ var _team_details_team_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./team-details/team-details.component */ 2129);
/* harmony import */ var _admin_create_brackets_delete_bracket_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/create-brackets/delete-bracket-modal.component */ 6251);
/* harmony import */ var _admin_create_brackets_reassign_bracket_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/create-brackets/reassign-bracket-modal.component */ 7626);
/* harmony import */ var _admin_create_brackets_reset_bracket_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/create-brackets/reset-bracket-modal.component */ 180);
/* harmony import */ var _standings_standings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./standings/standings.component */ 9953);
/* harmony import */ var _standings_nav_standings_nav_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./standings-nav/standings-nav.component */ 9069);
/* harmony import */ var _bracket_tab_bracket_tab_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bracket-tab/bracket-tab.component */ 2209);
/* harmony import */ var _roster_textbox_roster_textbox_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./roster-textbox/roster-textbox.component */ 6167);
/* harmony import */ var _admin_send_emails_send_orig_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/send-emails/send-orig-modal.component */ 7516);
/* harmony import */ var _admin_send_emails_send_games_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/send-emails/send-games-modal.component */ 1870);
/* harmony import */ var _profile_form_modal_partial_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./profile-form-modal/partial-profile-form-modal.component */ 3673);
/* harmony import */ var _profile_form_modal_admin_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./profile-form-modal/admin-profile-form-modal.component */ 5337);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 2560);































class AppModule {}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppModule, "\u0275fac", function AppModule_Factory(t) {
  return new (t || AppModule)();
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent]
}));
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({
  providers: [_app_store__WEBPACK_IMPORTED_MODULE_1__.appStoreProviders],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule, _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_2__.AppBootstrapModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UiModule, _admin_admin_module__WEBPACK_IMPORTED_MODULE_4__.AdminModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_30__.FontAwesomeModule]
}));
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_7__.HomeComponent, _roster_roster_component__WEBPACK_IMPORTED_MODULE_8__.RosterComponent, _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__.ProfileComponent, _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_10__.ProfileDetailsComponent, _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__.LogoutComponent, _brackets_brackets_component__WEBPACK_IMPORTED_MODULE_12__.BracketsComponent, _profile_form_modal_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_13__.ProfileFormModalComponent, _team_details_team_details_component__WEBPACK_IMPORTED_MODULE_14__.TeamDetailsComponent, _admin_create_brackets_delete_bracket_modal_component__WEBPACK_IMPORTED_MODULE_15__.DeleteModalComponent, _admin_create_brackets_reassign_bracket_modal_component__WEBPACK_IMPORTED_MODULE_16__.ReassignModalComponent, _admin_create_brackets_reset_bracket_modal_component__WEBPACK_IMPORTED_MODULE_17__.ResetModalComponent, _standings_standings_component__WEBPACK_IMPORTED_MODULE_18__.StandingsComponent, _standings_nav_standings_nav_component__WEBPACK_IMPORTED_MODULE_19__.StandingsNavComponent, _bracket_tab_bracket_tab_component__WEBPACK_IMPORTED_MODULE_20__.BracketTabComponent, _roster_textbox_roster_textbox_component__WEBPACK_IMPORTED_MODULE_21__.RosterTextboxComponent, _admin_send_emails_send_orig_modal_component__WEBPACK_IMPORTED_MODULE_22__.SendOrigModalComponent, _admin_send_emails_send_games_modal_component__WEBPACK_IMPORTED_MODULE_23__.SendGamesModalComponent, _profile_form_modal_partial_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_24__.PartialProfileFormModalComponent, _profile_form_modal_admin_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_25__.AdminProfileFormModalComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule, _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_2__.AppBootstrapModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UiModule, _admin_admin_module__WEBPACK_IMPORTED_MODULE_4__.AdminModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_30__.FontAwesomeModule]
  });
})();

/***/ }),

/***/ 4827:
/*!******************************!*\
  !*** ./src/app/app.store.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppStore": () => (/* binding */ AppStore),
/* harmony export */   "appStoreProviders": () => (/* binding */ appStoreProviders),
/* harmony export */   "createAppStore": () => (/* binding */ createAppStore)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ 5693);
/* harmony import */ var _core_user_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/user.reducer */ 9847);
// .src/app/app.store.ts



const AppStore = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('App.store');
function createAppStore() {
  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
    reducer: _core_user_reducer__WEBPACK_IMPORTED_MODULE_0__.UserReducer
  });
}
const appStoreProviders = [{
  provide: AppStore,
  useFactory: createAppStore
}];

/***/ }),

/***/ 2209:
/*!******************************************************!*\
  !*** ./src/app/bracket-tab/bracket-tab.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BracketTabComponent": () => (/* binding */ BracketTabComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/user.service */ 5760);
/* harmony import */ var _core_region_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/region.service */ 4180);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);








function BracketTabComponent_ng_container_1_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const number_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Round ", number_r4, "");
  }
}
const _c0 = function () {
  return [1, 2, 3, 4];
};
function BracketTabComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BracketTabComponent_ng_container_1_ul_1_Template, 2, 1, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
  }
}
function BracketTabComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Final Four");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Finals");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Champion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function BracketTabComponent_main_3_ul_1_ng_template_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r14._bracketOwners[g_r13].team1_owner, ") ");
  }
}
const _c1 = function () {
  return ["/profile"];
};
const _c2 = function (a0) {
  return {
    id: a0
  };
};
function BracketTabComponent_main_3_ul_1_ng_template_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c2, ctx_r15._bracketOwners[g_r13].team1_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r15._bracketOwners[g_r13].team1_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_1_ng_template_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r16._bracketGames[g_r13].tipoff_date, "\u00A0 ", ctx_r16._bracketGames[g_r13].tipoff_time, "\u00A0 ");
  }
}
function BracketTabComponent_main_3_ul_1_ng_template_1_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r17._bracketOwners[g_r13].team2_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_1_ng_template_1_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c2, ctx_r18._bracketOwners[g_r13].team2_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r18._bracketOwners[g_r13].team2_owner, ") ");
  }
}
const _c3 = function (a0) {
  return {
    "text-light bg-success": a0
  };
};
function BracketTabComponent_main_3_ul_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BracketTabComponent_main_3_ul_1_ng_template_1_ng_container_4_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, BracketTabComponent_main_3_ul_1_ng_template_1_ng_container_5_Template, 3, 6, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, BracketTabComponent_main_3_ul_1_ng_template_1_ng_container_9_Template, 2, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, BracketTabComponent_main_3_ul_1_ng_template_1_ng_container_12_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, BracketTabComponent_main_3_ul_1_ng_template_1_ng_container_13_Template, 3, 6, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const g_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c3, ctx_r12._userService.id == ctx_r12._bracketOwners[g_r13].team1_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r12._bracketGames[g_r13].team1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12._bracketOwners[g_r13].team1_owner && ctx_r12._userService.id == ctx_r12._bracketOwners[g_r13].team1_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12._bracketOwners[g_r13].team1_owner && ctx_r12._userService.id != ctx_r12._bracketOwners[g_r13].team1_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r12.getTeam1Result(ctx_r12._bracketGames[g_r13]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12._bracketGames[g_r13].tipoff_date_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c3, ctx_r12._userService.id == ctx_r12._bracketOwners[g_r13].team2_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r12._bracketGames[g_r13].team2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12._bracketOwners[g_r13].team2_owner && ctx_r12._userService.id == ctx_r12._bracketOwners[g_r13].team2_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12._bracketOwners[g_r13].team2_owner && ctx_r12._userService.id != ctx_r12._bracketOwners[g_r13].team2_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r12.getTeam2Result(ctx_r12._bracketGames[g_r13]));
  }
}
function BracketTabComponent_main_3_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BracketTabComponent_main_3_ul_1_ng_template_1_Template, 16, 15, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5._rnd_game_ids[1]);
  }
}
function BracketTabComponent_main_3_ul_2_ng_template_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r26._bracketOwners[g_r25].team1_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_2_ng_template_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c2, ctx_r27._bracketOwners[g_r25].team1_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r27._bracketOwners[g_r25].team1_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_2_ng_template_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r28._bracketGames[g_r25].tipoff_date, "\u00A0 ", ctx_r28._bracketGames[g_r25].tipoff_time, "\u00A0 ");
  }
}
function BracketTabComponent_main_3_ul_2_ng_template_1_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r29._bracketOwners[g_r25].team2_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_2_ng_template_1_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c2, ctx_r30._bracketOwners[g_r25].team2_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r30._bracketOwners[g_r25].team2_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BracketTabComponent_main_3_ul_2_ng_template_1_ng_container_4_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, BracketTabComponent_main_3_ul_2_ng_template_1_ng_container_5_Template, 3, 6, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, BracketTabComponent_main_3_ul_2_ng_template_1_ng_container_9_Template, 2, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, BracketTabComponent_main_3_ul_2_ng_template_1_ng_container_12_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, BracketTabComponent_main_3_ul_2_ng_template_1_ng_container_13_Template, 3, 6, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const g_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c3, ctx_r24._userService.id == ctx_r24._bracketOwners[g_r25].team1_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r24._bracketGames[g_r25].team1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r24._bracketOwners[g_r25].team1_owner && ctx_r24._userService.id == ctx_r24._bracketOwners[g_r25].team1_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r24._bracketOwners[g_r25].team1_owner && ctx_r24._userService.id != ctx_r24._bracketOwners[g_r25].team1_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r24.getTeam1Result(ctx_r24._bracketGames[g_r25]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r24._bracketGames[g_r25].tipoff_date_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c3, ctx_r24._userService.id == ctx_r24._bracketOwners[g_r25].team2_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r24._bracketGames[g_r25].team2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r24._bracketOwners[g_r25].team2_owner && ctx_r24._userService.id == ctx_r24._bracketOwners[g_r25].team2_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r24._bracketOwners[g_r25].team2_owner && ctx_r24._userService.id != ctx_r24._bracketOwners[g_r25].team2_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r24.getTeam2Result(ctx_r24._bracketGames[g_r25]));
  }
}
function BracketTabComponent_main_3_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BracketTabComponent_main_3_ul_2_ng_template_1_Template, 16, 15, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6._rnd_game_ids[2]);
  }
}
function BracketTabComponent_main_3_ul_3_ng_template_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r38._bracketOwners[g_r37].team1_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_3_ng_template_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c2, ctx_r39._bracketOwners[g_r37].team1_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r39._bracketOwners[g_r37].team1_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_3_ng_template_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r40._bracketGames[g_r37].tipoff_date, "\u00A0 ", ctx_r40._bracketGames[g_r37].tipoff_time, "\u00A0 ");
  }
}
function BracketTabComponent_main_3_ul_3_ng_template_1_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r41._bracketOwners[g_r37].team2_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_3_ng_template_1_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c2, ctx_r42._bracketOwners[g_r37].team2_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r42._bracketOwners[g_r37].team2_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BracketTabComponent_main_3_ul_3_ng_template_1_ng_container_4_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, BracketTabComponent_main_3_ul_3_ng_template_1_ng_container_5_Template, 3, 6, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, BracketTabComponent_main_3_ul_3_ng_template_1_ng_container_9_Template, 2, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, BracketTabComponent_main_3_ul_3_ng_template_1_ng_container_12_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, BracketTabComponent_main_3_ul_3_ng_template_1_ng_container_13_Template, 3, 6, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const g_r37 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c3, ctx_r36._userService.id == ctx_r36._bracketOwners[g_r37].team1_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r36._bracketGames[g_r37].team1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r36._bracketOwners[g_r37].team1_owner && ctx_r36._userService.id == ctx_r36._bracketOwners[g_r37].team1_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r36._bracketOwners[g_r37].team1_owner && ctx_r36._userService.id != ctx_r36._bracketOwners[g_r37].team1_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r36.getTeam1Result(ctx_r36._bracketGames[g_r37]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r36._bracketGames[g_r37].tipoff_date_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c3, ctx_r36._userService.id == ctx_r36._bracketOwners[g_r37].team2_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r36._bracketGames[g_r37].team2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r36._bracketOwners[g_r37].team2_owner && ctx_r36._userService.id == ctx_r36._bracketOwners[g_r37].team2_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r36._bracketOwners[g_r37].team2_owner && ctx_r36._userService.id != ctx_r36._bracketOwners[g_r37].team2_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r36.getTeam2Result(ctx_r36._bracketGames[g_r37]));
  }
}
function BracketTabComponent_main_3_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BracketTabComponent_main_3_ul_3_ng_template_1_Template, 16, 15, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7._rnd_game_ids[3]);
  }
}
function BracketTabComponent_main_3_ul_4_ng_template_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r50._bracketOwners[g_r49].team1_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_4_ng_template_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c2, ctx_r51._bracketOwners[g_r49].team1_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r51._bracketOwners[g_r49].team1_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_4_ng_template_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r52._bracketGames[g_r49].tipoff_date, "\u00A0 ", ctx_r52._bracketGames[g_r49].tipoff_time, "\u00A0 ");
  }
}
function BracketTabComponent_main_3_ul_4_ng_template_1_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r53._bracketOwners[g_r49].team2_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_4_ng_template_1_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c2, ctx_r54._bracketOwners[g_r49].team2_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r54._bracketOwners[g_r49].team2_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BracketTabComponent_main_3_ul_4_ng_template_1_ng_container_4_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, BracketTabComponent_main_3_ul_4_ng_template_1_ng_container_5_Template, 3, 6, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, BracketTabComponent_main_3_ul_4_ng_template_1_ng_container_9_Template, 2, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, BracketTabComponent_main_3_ul_4_ng_template_1_ng_container_12_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, BracketTabComponent_main_3_ul_4_ng_template_1_ng_container_13_Template, 3, 6, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const g_r49 = ctx.$implicit;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c3, ctx_r48._userService.id == ctx_r48._bracketOwners[g_r49].team1_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r48._bracketGames[g_r49].team1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r48._bracketOwners[g_r49].team1_owner && ctx_r48._userService.id == ctx_r48._bracketOwners[g_r49].team1_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r48._bracketOwners[g_r49].team1_owner && ctx_r48._userService.id != ctx_r48._bracketOwners[g_r49].team1_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r48.getTeam1Result(ctx_r48._bracketGames[g_r49]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r48._bracketGames[g_r49].tipoff_date_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c3, ctx_r48._userService.id == ctx_r48._bracketOwners[g_r49].team2_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r48._bracketGames[g_r49].team2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r48._bracketOwners[g_r49].team2_owner && ctx_r48._userService.id == ctx_r48._bracketOwners[g_r49].team2_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r48._bracketOwners[g_r49].team2_owner && ctx_r48._userService.id != ctx_r48._bracketOwners[g_r49].team2_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r48.getTeam2Result(ctx_r48._bracketGames[g_r49]));
  }
}
function BracketTabComponent_main_3_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BracketTabComponent_main_3_ul_4_ng_template_1_Template, 16, 15, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8._rnd_game_ids[4]);
  }
}
function BracketTabComponent_main_3_ul_5_ng_template_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const g_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", g_r61 == 61 ? ctx_r62._regionList[0].name : ctx_r62._regionList[2].name, " Region Champion ");
  }
}
function BracketTabComponent_main_3_ul_5_ng_template_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r63._bracketOwners[g_r61].team1_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_5_ng_template_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c2, ctx_r64._bracketOwners[g_r61].team1_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r64._bracketOwners[g_r61].team1_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_5_ng_template_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r65._bracketGames[g_r61].tipoff_date, "\u00A0 ", ctx_r65._bracketGames[g_r61].tipoff_time, "\u00A0 ");
  }
}
function BracketTabComponent_main_3_ul_5_ng_template_1_li_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const g_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", g_r61 == 61 ? ctx_r66._regionList[1].name : ctx_r66._regionList[3].name, " Region Champion ");
  }
}
function BracketTabComponent_main_3_ul_5_ng_template_1_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r67._bracketOwners[g_r61].team2_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_5_ng_template_1_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c2, ctx_r68._bracketOwners[g_r61].team2_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r68._bracketOwners[g_r61].team2_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BracketTabComponent_main_3_ul_5_ng_template_1_li_2_Template, 2, 1, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, BracketTabComponent_main_3_ul_5_ng_template_1_ng_container_5_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BracketTabComponent_main_3_ul_5_ng_template_1_ng_container_6_Template, 3, 6, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, BracketTabComponent_main_3_ul_5_ng_template_1_ng_container_10_Template, 2, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, BracketTabComponent_main_3_ul_5_ng_template_1_li_11_Template, 2, 1, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, BracketTabComponent_main_3_ul_5_ng_template_1_ng_container_14_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, BracketTabComponent_main_3_ul_5_ng_template_1_ng_container_15_Template, 3, 6, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const g_r61 = ctx.$implicit;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r60._regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c3, ctx_r60._userService.id == ctx_r60._bracketOwners[g_r61].team1_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r60._bracketGames[g_r61].team1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r60._bracketOwners[g_r61].team1_owner && ctx_r60._userService.id == ctx_r60._bracketOwners[g_r61].team1_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r60._bracketOwners[g_r61].team1_owner && ctx_r60._userService.id != ctx_r60._bracketOwners[g_r61].team1_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r60.getTeam1Result(ctx_r60._bracketGames[g_r61]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r60._bracketGames[g_r61].tipoff_date_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r60._regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c3, ctx_r60._userService.id == ctx_r60._bracketOwners[g_r61].team2_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r60._bracketGames[g_r61].team2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r60._bracketOwners[g_r61].team2_owner && ctx_r60._userService.id == ctx_r60._bracketOwners[g_r61].team2_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r60._bracketOwners[g_r61].team2_owner && ctx_r60._userService.id != ctx_r60._bracketOwners[g_r61].team2_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r60.getTeam2Result(ctx_r60._bracketGames[g_r61]));
  }
}
function BracketTabComponent_main_3_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BracketTabComponent_main_3_ul_5_ng_template_1_Template, 18, 17, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r9._rnd_game_ids[5]);
  }
}
function BracketTabComponent_main_3_ul_6_ng_template_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r78._bracketOwners[g_r77].team1_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_6_ng_template_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c2, ctx_r79._bracketOwners[g_r77].team1_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r79._bracketOwners[g_r77].team1_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_6_ng_template_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r80._bracketGames[g_r77].tipoff_date, "\u00A0 ", ctx_r80._bracketGames[g_r77].tipoff_time, "\u00A0 ");
  }
}
function BracketTabComponent_main_3_ul_6_ng_template_1_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r81._bracketOwners[g_r77].team2_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_6_ng_template_1_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const g_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c2, ctx_r82._bracketOwners[g_r77].team2_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r82._bracketOwners[g_r77].team2_owner, ") ");
  }
}
function BracketTabComponent_main_3_ul_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, BracketTabComponent_main_3_ul_6_ng_template_1_ng_container_5_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BracketTabComponent_main_3_ul_6_ng_template_1_ng_container_6_Template, 3, 6, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, BracketTabComponent_main_3_ul_6_ng_template_1_ng_container_10_Template, 2, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, BracketTabComponent_main_3_ul_6_ng_template_1_ng_container_13_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, BracketTabComponent_main_3_ul_6_ng_template_1_ng_container_14_Template, 3, 6, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const g_r77 = ctx.$implicit;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c3, ctx_r76._userService.id == ctx_r76._bracketOwners[g_r77].team1_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r76._bracketGames[g_r77].team1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r76._bracketOwners[g_r77].team1_owner && ctx_r76._userService.id == ctx_r76._bracketOwners[g_r77].team1_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r76._bracketOwners[g_r77].team1_owner && ctx_r76._userService.id != ctx_r76._bracketOwners[g_r77].team1_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r76.getTeam1Result(ctx_r76._bracketGames[g_r77]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r76._bracketGames[g_r77].tipoff_date_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c3, ctx_r76._userService.id == ctx_r76._bracketOwners[g_r77].team2_owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r76._bracketGames[g_r77].team2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r76._bracketOwners[g_r77].team2_owner && ctx_r76._userService.id == ctx_r76._bracketOwners[g_r77].team2_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r76._bracketOwners[g_r77].team2_owner && ctx_r76._userService.id != ctx_r76._bracketOwners[g_r77].team2_owner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r76.getTeam2Result(ctx_r76._bracketGames[g_r77]));
  }
}
function BracketTabComponent_main_3_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BracketTabComponent_main_3_ul_6_ng_template_1_Template, 17, 15, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r10._rnd_game_ids[6]);
  }
}
function BracketTabComponent_main_3_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 26)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u00A0\u00A0***CHAMPION***");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("\u00A0", ctx_r11._champion, " (", ctx_r11._winningTeamOwner, ")");
  }
}
function BracketTabComponent_main_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BracketTabComponent_main_3_ul_1_Template, 4, 1, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BracketTabComponent_main_3_ul_2_Template, 4, 1, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BracketTabComponent_main_3_ul_3_Template, 4, 1, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BracketTabComponent_main_3_ul_4_Template, 4, 1, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, BracketTabComponent_main_3_ul_5_Template, 4, 1, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BracketTabComponent_main_3_ul_6_Template, 4, 1, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, BracketTabComponent_main_3_ul_7_Template, 5, 2, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2._region_id <= 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2._region_id <= 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2._region_id <= 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2._region_id <= 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2._region_id == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2._region_id == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.getChampion() && ctx_r2._region_id == 5);
  }
}
class BracketTabComponent {
  //array to capture game owner info
  //object containing region_id : game_id arrays to get proper game info for each bracket
  //string to capture champion of bracket
  //string to capture winning team owner

  //id of region passed to component
  //subset of games associated with each Region
  //Inject this value from parent component and update team owners as parent bracket is clicked
  get bracketOwners() {
    return this._bracketOwners;
  }
  set bracketOwners(value) {
    if (value) {
      this._bracketOwners = value;
      // console.log ("Detail component bracketOwners for ", this._region_id, " Region", this._bracketOwners);
    }
  }

  constructor(_userService, _regionService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_userService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_regionService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_bracketOwners", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_rnd_game_ids", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_champion", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_winningTeamOwner", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_regionList", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_region_id", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_bracketGames", void 0);
    this._userService = _userService;
    this._regionService = _regionService;
  }
  ngOnInit() {
    // console.log ("Detail component bracketGames for ", this._region_id, " Region", this._bracketGames);
    //Create game id arrays for each Round with round # as index
    this._rnd_game_ids = {};
    this._rnd_game_ids[1] = Array.from({
      length: 8
    }, (v, k) => k + 1 + this.getRdIncr(1));
    this._rnd_game_ids[2] = Array.from({
      length: 4
    }, (v, k) => k + 33 + this.getRdIncr(2));
    this._rnd_game_ids[3] = Array.from({
      length: 2
    }, (v, k) => k + 49 + this.getRdIncr(3));
    this._rnd_game_ids[4] = Array.from({
      length: 1
    }, (v, k) => k + 57 + this.getRdIncr(4));
    this._rnd_game_ids[5] = [61, 62];
    this._rnd_game_ids[6] = [63];
    // console.log ("This region array of game numbers is", this._rnd_game_ids);
    // Retrieve list of regions to display in tabs, but only make this http call once for Final Four tab
    if (this._region_id == 5) {
      this._regionService.getRegionList().subscribe(data => {
        this._regionList = data;
      });
    }
  }
  getRdIncr(x) {
    //To identify proper increment to add to South Region game id arrays
    //to generate other regions' game ids
    switch (this._region_id) {
      case 1:
        {
          return 0;
          break;
        }
      case 2:
        {
          switch (x) {
            case 1:
              {
                return 8;
                break;
              }
            case 2:
              {
                return 4;
                break;
              }
            case 3:
              {
                return 2;
                break;
              }
            case 4:
              {
                return 1;
                break;
              }
          }
        }
      case 3:
        {
          switch (x) {
            case 1:
              {
                return 16;
                break;
              }
            case 2:
              {
                return 8;
                break;
              }
            case 3:
              {
                return 4;
                break;
              }
            case 4:
              {
                return 2;
                break;
              }
          }
        }
      case 4:
        {
          switch (x) {
            case 1:
              {
                return 24;
                break;
              }
            case 2:
              {
                return 12;
                break;
              }
            case 3:
              {
                return 6;
                break;
              }
            case 4:
              {
                return 3;
                break;
              }
          }
        }
    } // end outer switch
  } //end getRdIncr(x)
  getTeam1Result(game) {
    // To determine whether to show score (post-game) or spread (pre-game)
    if (game.team1_score > 0) {
      if (game.spread > 0) {
        return game.team1_score + '(' + (-game.spread - 0.5) + ')';
      } else if (game.spread == 0) {
        return game.team1_score + '(PK)';
      } else {
        return game.team1_score;
      }
    } else if (game.spread > 0) {
      return -game.spread - 0.5;
    } else if (game.spread == 0) {
      return 'PK';
    }
  } // end getTeam1Result(game)
  getTeam2Result(game) {
    // To determine whether to show score (post-game) or spread (pre-game)
    if (game.team2_score > 0) {
      if (game.spread < 0) {
        return game.team2_score + '(' + (game.spread - 0.5) + ')';
      } else {
        return game.team2_score;
      }
    } else if (game.spread < 0) {
      return game.spread - 0.5;
    }
  } // end getTeam2Result(game)		
  getChampion() {
    // To identify champion for display on bracket
    var isChampion = false;
    if (this._bracketGames[63] && this._bracketGames[63].team1_score && this._bracketGames[63].team2_score) {
      isChampion = true;
      // console.log("Determining championship info...", this._bracketGames[63], this._bracketOwners[63])
      if (this._bracketGames[63].team1_score > this._bracketGames[63].team2_score) {
        this._champion = this._bracketGames[63].team1;
      } else {
        this._champion = this._bracketGames[63].team2;
      }
      this._winningTeamOwner = this._bracketOwners[63].winner;
    }
    return isChampion;
  } //end getChampion
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(BracketTabComponent, "\u0275fac", function BracketTabComponent_Factory(t) {
  return new (t || BracketTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_region_service__WEBPACK_IMPORTED_MODULE_2__.RegionService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(BracketTabComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: BracketTabComponent,
  selectors: [["app-bracket-tab"]],
  inputs: {
    _region_id: ["region", "_region_id"],
    _bracketGames: ["bracketGames", "_bracketGames"],
    bracketOwners: "bracketOwners"
  },
  decls: 4,
  vars: 3,
  consts: [[4, "ngIf"], ["class", "rnd-title", 4, "ngFor", "ngForOf"], [1, "rnd-title"], ["class", "round round-1", 4, "ngIf"], ["class", "round round-2", 4, "ngIf"], ["class", "round round-3", 4, "ngIf"], ["class", "round round-4", 4, "ngIf"], ["class", "round round-5", 4, "ngIf"], ["class", "round round-6", 4, "ngIf"], ["class", "round", 4, "ngIf"], [1, "round", "round-1"], ["ngFor", "", 3, "ngForOf"], [1, "spacer"], [1, "game", "game-top", 3, "ngClass"], [1, "game", "game-spacer"], [1, "game", "game-bottom", 3, "ngClass"], [3, "routerLink", "queryParams"], [1, "round", "round-2"], [1, "round", "round-3"], [1, "round", "round-4"], [1, "round", "round-5"], ["class", "game game-title-top", 4, "ngIf"], ["class", "game game-title-bottom", 4, "ngIf"], [1, "game", "game-title-top"], [1, "game", "game-title-bottom"], [1, "round", "round-6"], [1, "round"]],
  template: function BracketTabComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BracketTabComponent_ng_container_1_Template, 2, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BracketTabComponent_ng_container_2_Template, 7, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BracketTabComponent_main_3_Template, 8, 7, "main", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._region_id <= 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._region_id == 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._bracketGames && ctx._bracketOwners);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 2393:
/*!************************************************!*\
  !*** ./src/app/brackets/brackets.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BracketsComponent": () => (/* binding */ BracketsComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/tbracket.service */ 2953);
/* harmony import */ var _core_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/game.service */ 1110);
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/user.service */ 5760);
/* harmony import */ var _core_region_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/region.service */ 4180);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 82);
/* harmony import */ var _bracket_tab_bracket_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bracket-tab/bracket-tab.component */ 2209);
















const _c0 = ["staticTabs"];
const _c1 = function (a1) {
  return ["/brackets", a1];
};
function BracketsComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 7)(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tbracket_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.isActive(tbracket_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, tbracket_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](tbracket_r7.name);
  }
}
function BracketsComponent_tab_10_app_bracket_tab_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-bracket-tab", 11);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("region", ctx_r8.regionList[0].id)("bracketGames", ctx_r8.region1Games)("bracketOwners", ctx_r8.region1Owners);
  }
}
function BracketsComponent_tab_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tab", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BracketsComponent_tab_10_app_bracket_tab_1_Template, 1, 3, "app-bracket-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("heading", ctx_r2.regionList[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.region1Games && ctx_r2.region1Owners);
  }
}
function BracketsComponent_tab_11_app_bracket_tab_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-bracket-tab", 11);
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("region", ctx_r9.regionList[1].id)("bracketGames", ctx_r9.region2Games)("bracketOwners", ctx_r9.region2Owners);
  }
}
function BracketsComponent_tab_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tab", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BracketsComponent_tab_11_app_bracket_tab_1_Template, 1, 3, "app-bracket-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("heading", ctx_r3.regionList[1].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.region2Games && ctx_r3.region2Owners);
  }
}
function BracketsComponent_tab_12_app_bracket_tab_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-bracket-tab", 11);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("region", ctx_r10.regionList[2].id)("bracketGames", ctx_r10.region3Games)("bracketOwners", ctx_r10.region3Owners);
  }
}
function BracketsComponent_tab_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tab", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BracketsComponent_tab_12_app_bracket_tab_1_Template, 1, 3, "app-bracket-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("heading", ctx_r4.regionList[2].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.region3Games && ctx_r4.region3Owners);
  }
}
function BracketsComponent_tab_13_app_bracket_tab_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-bracket-tab", 11);
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("region", ctx_r11.regionList[3].id)("bracketGames", ctx_r11.region4Games)("bracketOwners", ctx_r11.region4Owners);
  }
}
function BracketsComponent_tab_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tab", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BracketsComponent_tab_13_app_bracket_tab_1_Template, 1, 3, "app-bracket-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("heading", ctx_r5.regionList[3].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.region4Games && ctx_r5.region4Owners);
  }
}
function BracketsComponent_tab_14_app_bracket_tab_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-bracket-tab", 11);
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("region", ctx_r12.regionList[4].id)("bracketGames", ctx_r12.ffourGames)("bracketOwners", ctx_r12.ffourOwners);
  }
}
function BracketsComponent_tab_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tab", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BracketsComponent_tab_14_app_bracket_tab_1_Template, 1, 3, "app-bracket-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("heading", ctx_r6.regionList[4].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.ffourOwners && ctx_r6.ffourGames);
  }
}
class BracketsComponent {
  //capture tbracket id url parameter

  // To capture each regions' games for passing to child component

  // To capture each regions' games' team1 & team2 owners for child component

  constructor(_tbracketService, _gameService, route, router, _userService, _regionService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_tbracketService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_gameService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "route", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_userService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_regionService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "staticTabs", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "id", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tbracketList", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "regionList", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loading", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "region1Games", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "region2Games", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "region3Games", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "region4Games", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ffourGames", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "region1Owners", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "region2Owners", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "region3Owners", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "region4Owners", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ffourOwners", void 0);
    this._tbracketService = _tbracketService;
    this._gameService = _gameService;
    this.route = route;
    this.router = router;
    this._userService = _userService;
    this._regionService = _regionService;
  }
  ngOnInit() {
    // Subscribe to activated route parameter and update activeBracket to pass to child components
    // Based on active bracket (in params), convert each Region's bracket owners (retrieved via Matchup table)
    // to indexed arrays for each Region
    // FYI - the following line would only work the first time the page is visited:
    // this.id = this.route.snapshot.params['id'];
    this.loading = true;
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this._gameService.getNewGameWithMatchupDataList(this.id).subscribe(data => {
        const region1Owners = Object.assign({}, ...data.filter(item => item.region_id == 1).map(item => ({
          [item['id']]: item
        })));
        this.region1Owners = region1Owners;
        const region2Owners = Object.assign({}, ...data.filter(item => item.region_id == 2).map(item => ({
          [item['id']]: item
        })));
        this.region2Owners = region2Owners;
        const region3Owners = Object.assign({}, ...data.filter(item => item.region_id == 3).map(item => ({
          [item['id']]: item
        })));
        this.region3Owners = region3Owners;
        const region4Owners = Object.assign({}, ...data.filter(item => item.region_id == 4).map(item => ({
          [item['id']]: item
        })));
        this.region4Owners = region4Owners;
        const ffourOwners = Object.assign({}, ...data.filter(item => item.region_id == 5).map(item => ({
          [item['id']]: item
        })));
        this.ffourOwners = ffourOwners;
        this.loading = false;
      });
    });
    // Retrieve game list & convert each Region's games into indexed arrays
    // for passing to child components for display
    // Only call this service 1x since game info doesn't change across brackets
    this._gameService.getGameList().subscribe(data => {
      const region1Games = Object.assign({}, ...data.filter(item => item.region_id == 1).map(item => ({
        [item['id']]: item
      })));
      this.region1Games = region1Games;
      const region2Games = Object.assign({}, ...data.filter(item => item.region_id == 2).map(item => ({
        [item['id']]: item
      })));
      this.region2Games = region2Games;
      const region3Games = Object.assign({}, ...data.filter(item => item.region_id == 3).map(item => ({
        [item['id']]: item
      })));
      this.region3Games = region3Games;
      const region4Games = Object.assign({}, ...data.filter(item => item.region_id == 4).map(item => ({
        [item['id']]: item
      })));
      this.region4Games = region4Games;
      const ffourGames = Object.assign({}, ...data.filter(item => item.region_id == 5).map(item => ({
        [item['id']]: item
      })));
      this.ffourGames = ffourGames;
    });
    // Retrieve list of brackets for bracket navbar with brackets that player
    // belongs to sorted first
    this._tbracketService.getListWithPlayer(this._userService.id).subscribe(data => {
      this.tbracketList = data;
    });
    // Retrieve list of regions to display in tabs
    this._regionService.getRegionList().subscribe(data => {
      this.regionList = data;
      // Set active tab based on fragment contained in url, if it exists
      this.route.fragment.subscribe(fragment => {
        if (fragment) {
          var id = parseInt(fragment);
          // console.log("Tab Id to navigate to is: ", id);
          // Need the below delay in order for tabs to be rendered 
          // (lengthy call to backend to retrieve data) increase if necessary
          setTimeout(() => {
            this.staticTabs.tabs[id].active = true;
          }, 200);
        }
      });
    });
  } //end ngOnInit
  // Function to determine which bracket navbar to make 'active' in template based on route param
  isActive(navbarId) {
    // return true to highlight nav bar item that is = route paramter
    return navbarId == this.id;
  }
} //end class
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(BracketsComponent, "\u0275fac", function BracketsComponent_Factory(t) {
  return new (t || BracketsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__.TBracketService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_game_service__WEBPACK_IMPORTED_MODULE_2__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_region_service__WEBPACK_IMPORTED_MODULE_4__.RegionService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(BracketsComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: BracketsComponent,
  selectors: [["app-brackets"]],
  viewQuery: function BracketsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.staticTabs = _t.first);
    }
  },
  decls: 15,
  vars: 8,
  consts: [[1, "text-muted"], [1, "brackets-nav"], [1, "navbar"], [1, "nav", "nav-pills"], ["class", "nav-item", 4, "ngFor", "ngForOf"], ["staticTabs", ""], [3, "heading", 4, "ngIf"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [3, "heading"], [3, "region", "bracketGames", "bracketOwners", 4, "ngIf"], [3, "region", "bracketGames", "bracketOwners"]],
  template: function BracketsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "All times are Eastern Time (Click to see bracket)");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1)(3, "nav", 2)(4, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, BracketsComponent_li_5_Template, 3, 6, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div")(8, "tabset", null, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, BracketsComponent_tab_10_Template, 2, 2, "tab", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, BracketsComponent_tab_11_Template, 2, 2, "tab", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, BracketsComponent_tab_12_Template, 2, 2, "tab", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, BracketsComponent_tab_13_Template, 2, 2, "tab", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, BracketsComponent_tab_14_Template, 2, 2, "tab", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.tbracketList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("loader", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.regionList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.regionList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.regionList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.regionList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.regionList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__.TabsetComponent, _bracket_tab_bracket_tab_component__WEBPACK_IMPORTED_MODULE_5__.BracketTabComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 9237:
/*!***************************************!*\
  !*** ./src/app/core/entry.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntryService": () => (/* binding */ EntryService)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 5760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






//entryUrl is base url for entries table end point
const entryUrl = '/api/entries/';
const entry_bracketsUrl = '/api/entry_brackets/';
const entry_namesUrl = '/api/entry_names/';
const entry_standingsURL = '/api/entry_standings/';
const entry_myteamsURL = 'api/entry_myteams/';
class EntryService {
  constructor(http, _userService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "http", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_userService", void 0);
    this.http = http;
    this._userService = _userService;
  }
  //method to retrieve entry details list for a player
  getEntryDetailsListByPlayer(id) {
    return this.http.get(entryUrl + '?playerid=' + id);
  }
  //method to retrieve entry bracket list for a player
  getEntryBracketListByPlayer(id) {
    return this.http.get(entry_bracketsUrl + '?playerid=' + id);
  }
  //method to retrieve all entries matching ?tbracketid= value
  getEntryListByBracket(tbracket_id) {
    return this.http.get(entry_namesUrl + '?tbracketid=' + tbracket_id);
  }
  //method to retrieve all entries whose tbracketid = null
  getEntryListbyNullBracket() {
    return this.http.get(entry_namesUrl + '?no_bracket');
  }
  //method to retrieve Entry by tbracket_id & team_id (originally used for Bracket display of owners)
  getEntryNameByTeamAndBracket(b_id, t_id) {
    return this.http.get(entry_namesUrl + '?tbracketid=' + b_id + '&teamid=' + t_id);
  }
  //method for updating Entry once assigned to a Bracket
  updateEntry(entry) {
    return this.http.patch(entry_namesUrl + entry.id + '/', JSON.stringify(entry), this.getHttpOptions());
  }
  //method for creating all Entry data based on User info
  resetAllEntries() {
    return this.http.get(entryUrl + 'reset_all/', this.getHttpOptions());
  }
  //method to retrieve all entries matching ?tbracketid= value
  getEntryStandings(tbracket_id) {
    return this.http.get(entry_standingsURL + '?tbracketid=' + tbracket_id);
  }
  //method to generate emails to all Owners of entries within a particular bracket
  emailOrigTeamsToOwners(tbracket_id) {
    return this.http.get(entryUrl + 'email_orig_teams_to_owners/' + '?tbracketid=' + tbracket_id);
  }
  //method to retrieve entry details list for a player
  getEntryDetailsListMyTeamsByPlayer(id) {
    return this.http.get(entry_myteamsURL + '?playerid=' + id);
  }
  // helper function to build the HTTP headers
  getHttpOptions() {
    return {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this._userService.token
      })
    };
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(EntryService, "\u0275fac", function EntryService_Factory(t) {
  return new (t || EntryService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(EntryService, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: EntryService,
  factory: EntryService.ɵfac,
  providedIn: 'root'
}));

/***/ }),

/***/ 1110:
/*!**************************************!*\
  !*** ./src/app/core/game.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameService": () => (/* binding */ GameService)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 5760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






//gameUrl is base url for users table end point
const gameUrl = '/api/games/';
const new_game_matchupURL = '/api/games_new_matchups/';
class GameService {
  constructor(http, _userService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "http", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_userService", void 0);
    this.http = http;
    this._userService = _userService;
  }
  //method to retrieve game details for a particular game
  getGameDetails(id) {
    return this.http.get(gameUrl + id + '/');
  }
  //method to retrieve list of games
  getGameList() {
    return this.http.get(gameUrl);
  }
  //method to retrieve all games in which a particular team is playing
  getGameListByTeam(team_id) {
    return this.http.get(gameUrl + '?teamid=' + team_id);
  }
  //method to retrieve all games from a particular region
  getGameListByRegion(region_id) {
    return this.http.get(gameUrl + '?regionid=' + region_id);
  }
  //endpoint to return all games with owner info for a particular bracket
  getNewGameWithMatchupDataList(tbracket_id) {
    return this.http.get(new_game_matchupURL + '?tbracketid=' + tbracket_id);
  }
  updateGame(game) {
    return this.http.patch(gameUrl + game.id + '/', JSON.stringify(game), this.getHttpOptions());
  }
  updateGame_sendEmail(game) {
    return this.http.patch(gameUrl + game.id + '/?send_email=true', JSON.stringify(game), this.getHttpOptions());
  }
  resetGame(id) {
    return this.http.get(gameUrl + id + '/reset/', this.getHttpOptions());
  }
  resetAllGames() {
    return this.http.get(gameUrl + 'reset_all/', this.getHttpOptions());
  }
  replayAllGames() {
    return this.http.get(gameUrl + 'replay_all/', this.getHttpOptions());
  }
  isFinalFour() {
    return this.http.get(gameUrl + 'final_four/');
  }
  getGamesSpreadNoScore(tround_id) {
    return this.http.get(gameUrl + '?tround=' + tround_id + '&spread_set_no_score');
  }
  emailGamesToOwners(tbracket_id, tround_id) {
    return this.http.get(gameUrl + 'email_spreads_to_owners/?tround=' + tround_id + '&tbracketid=' + tbracket_id);
  }
  // helper function to build the HTTP headers
  getHttpOptions() {
    return {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this._userService.token
      })
    };
  } // end getHttpOptions()
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(GameService, "\u0275fac", function GameService_Factory(t) {
  return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(GameService, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: GameService,
  factory: GameService.ɵfac,
  providedIn: 'root'
}));

/***/ }),

/***/ 7027:
/*!****************************************!*\
  !*** ./src/app/core/is-admin.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsAdminGuard": () => (/* binding */ IsAdminGuard)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.store */ 4827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class IsAdminGuard {
  constructor(store) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "store", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentUser", void 0);
    this.store = store;
    store.subscribe(() => this.readState());
    this.readState(); //Need this twice?
  }

  canActivate(next, state) {
    // Check to see if is_staff is equal to 1, if yes return True
    if (this.currentUser) {
      return this.currentUser.is_staff == 1;
    } else return false;
  }
  // Redux store methods
  readState() {
    const state = this.store.getState();
    this.currentUser = state.currentUser;
    console.log("readState being invoked by IsAdminGuard.");
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(IsAdminGuard, "\u0275fac", function IsAdminGuard_Factory(t) {
  return new (t || IsAdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_store__WEBPACK_IMPORTED_MODULE_1__.AppStore));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(IsAdminGuard, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: IsAdminGuard,
  factory: IsAdminGuard.ɵfac,
  providedIn: 'root'
}));

/***/ }),

/***/ 8464:
/*!****************************************!*\
  !*** ./src/app/core/player.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerService": () => (/* binding */ PlayerService)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 5760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







//userUrl is base url for users table end point
const userUrl = '/api/users/';
class PlayerService {
  constructor(http, _userService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "http", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_userService", void 0);
    this.http = http;
    this._userService = _userService;
  }
  //method to retrieve entire user list
  getList() {
    return this.http.get(userUrl);
  }
  // method to retrieve entire user list except user with id = id parameter
  getListOtherThan(id) {
    return this.http.get(userUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(users => users.filter(user => user.id != id)));
  }
  //method to retrieve individual user
  getPlayer(id) {
    return this.http.get(userUrl + id + '/');
  }
  deletePlayer(id, token) {
    return this.http.delete(userUrl + id + '/', this.getHttpOptions());
  }
  updatePlayer(player) {
    return this.http.patch(userUrl + player.id + '/', JSON.stringify(player), this.getHttpOptions());
  }
  // helper function to build the HTTP headers
  getHttpOptions() {
    return {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this._userService.token
      })
    };
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(PlayerService, "\u0275fac", function PlayerService_Factory(t) {
  return new (t || PlayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(PlayerService, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: PlayerService,
  factory: PlayerService.ɵfac,
  providedIn: 'root'
}));

/***/ }),

/***/ 4180:
/*!****************************************!*\
  !*** ./src/app/core/region.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegionService": () => (/* binding */ RegionService)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);




const regionUrl = '/api/regions/';
class RegionService {
  constructor(http) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "http", void 0);
    this.http = http;
  }
  //method to retrieve game details for a particular game
  getRegionDetails(id) {
    return this.http.get(regionUrl + id + '/');
  }
  //method to retrieve list of games
  getRegionList() {
    return this.http.get(regionUrl);
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(RegionService, "\u0275fac", function RegionService_Factory(t) {
  return new (t || RegionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(RegionService, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RegionService,
  factory: RegionService.ɵfac,
  providedIn: 'root'
}));

/***/ }),

/***/ 797:
/*!****************************************!*\
  !*** ./src/app/core/sorter.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SorterService": () => (/* binding */ SorterService)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class SorterService {
  constructor() {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "property", null);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "direction", 1);
  }
  sort(collection, prop) {
    this.property = prop;
    this.direction = this.property === prop ? this.direction * -1 : 1;
    collection.sort((a, b) => {
      let aVal;
      let bVal;
      //Handle resolving complex properties such as 'state.name' for prop value
      if (prop && prop.indexOf('.') > -1) {
        aVal = this.resolveProperty(prop, a);
        bVal = this.resolveProperty(prop, b);
      } else {
        aVal = a[prop];
        bVal = b[prop];
      }
      //Fix issues that spaces before/after string value can cause such as ' San Francisco'
      if (this.isString(aVal)) aVal = aVal.trim().toUpperCase();
      if (this.isString(bVal)) bVal = bVal.trim().toUpperCase();
      if (aVal === bVal) {
        return 0;
      } else if (aVal > bVal) {
        return this.direction * -1;
      } else {
        return this.direction * 1;
      }
    });
  }
  isString(val) {
    return val && (typeof val === 'string' || val instanceof String);
  }
  resolveProperty(path, obj) {
    return path.split('.').reduce(function (prev, curr) {
      return prev ? prev[curr] : undefined;
    }, obj || self);
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SorterService, "\u0275fac", function SorterService_Factory(t) {
  return new (t || SorterService)();
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SorterService, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SorterService,
  factory: SorterService.ɵfac,
  providedIn: 'root'
}));

/***/ }),

/***/ 2953:
/*!******************************************!*\
  !*** ./src/app/core/tbracket.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TBracketService": () => (/* binding */ TBracketService)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 5760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






//tbracketUrl is base url for users table end point
const tbracketUrl = '/api/tbrackets/';
class TBracketService {
  constructor(http, _userService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "http", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_userService", void 0);
    this.http = http;
    this._userService = _userService;
  }
  //method to retrieve entire bracket list
  getList() {
    return this.http.get(tbracketUrl);
  }
  //method to retrieve entire bracket list with player's assigned tbrackets first
  getListWithPlayer(playerid) {
    return this.http.get(tbracketUrl + '?playerid=' + playerid);
  }
  //method to retrieve individual bracket
  getTbracket(id) {
    return this.http.get(tbracketUrl + id + '/');
  }
  createTbracket(tbracket, token) {
    return this.http.post(tbracketUrl, JSON.stringify(tbracket), this.getHttpOptions());
  }
  deleteTbracket(id, token) {
    return this.http.delete(tbracketUrl + id + '/', this.getHttpOptions());
  }
  reassignTbracket(id, token) {
    return this.http.get(tbracketUrl + id + '/reassign/', this.getHttpOptions());
  }
  resetTbracket(id) {
    return this.http.get(tbracketUrl + id + '/reset/', this.getHttpOptions());
  }
  // helper function to build the HTTP headers
  getHttpOptions() {
    return {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this._userService.token
      })
    };
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TBracketService, "\u0275fac", function TBracketService_Factory(t) {
  return new (t || TBracketService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TBracketService, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: TBracketService,
  factory: TBracketService.ɵfac,
  providedIn: 'root'
}));

/***/ }),

/***/ 7486:
/*!***************************************!*\
  !*** ./src/app/core/user-resolver.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserResolver": () => (/* binding */ UserResolver)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 5760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class UserResolver {
  constructor(_userService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_userService", void 0);
    this._userService = _userService;
  }
  resolve() {
    //console.log("Resolver returning...");
    return this._userService.getLoggedInUser();
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(UserResolver, "\u0275fac", function UserResolver_Factory(t) {
  return new (t || UserResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(UserResolver, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: UserResolver,
  factory: UserResolver.ɵfac
}));

/***/ }),

/***/ 1804:
/*!**************************************!*\
  !*** ./src/app/core/user.actions.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SET_CURRENT_USER": () => (/* binding */ SET_CURRENT_USER),
/* harmony export */   "setCurrentUser": () => (/* binding */ setCurrentUser)
/* harmony export */ });
// user.actions.ts
/**
 * UserActions specifies action creators concerning Users
 */
const SET_CURRENT_USER = '[User] Set Current';
const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user: user
});

/***/ }),

/***/ 9847:
/*!**************************************!*\
  !*** ./src/app/core/user.reducer.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserReducer": () => (/* binding */ UserReducer)
/* harmony export */ });
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.actions */ 1804);
// users.reducer.ts

const initialState = {
  currentUser: null
};
const UserReducer =
// (state: AppState = initialState, action: Action): AppState => {
(state = initialState, action) => {
  switch (action.type) {
    case _user_actions__WEBPACK_IMPORTED_MODULE_0__.SET_CURRENT_USER:
      // const user: IUserData = (<UserActions.SetCurrentUserAction>action).user;
      const user = action.user;
      return {
        currentUser: user
      };
    default:
      return state;
  }
};

/***/ }),

/***/ 5760:
/*!**************************************!*\
  !*** ./src/app/core/user.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




//userUrl is base url for users table end point
const userUrl = '/api/users/';
class UserService {
  // http options used for making API calls

  // the actual JWT token

  // the token expiration date

  // the authenticated/logged in user variables

  // error messages received from the login attempt

  // use to communicate to components whethe API calls are being made

  // use to show the user certain components & features

  constructor(http) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "http", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "httpOptions", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "token", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "token_expires", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "id", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "username", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "email", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loggedInUser", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "errors", []);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loading", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "beforeTourney", void 0);
    this.http = http;
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
  login(user) {
    // this.http.post(baseUrl+'/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(
    this.http.post('/api/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(data => {
      this.updateData(data['token']);
      // console.log("login method called");
    }, err => {
      this.errors = err['error'];
    });
  }
  // Refreshes the JWT token, to extend the time the user is logged in
  refreshToken() {
    this.loading = true;
    this.http.post('/api/api-token-refresh/', JSON.stringify({
      token: this.token
    }), this.httpOptions).subscribe(data => {
      this.updateData(data['token']);
      // this.getLoggedInUser().subscribe(data => {
      //   this.loggedInUser = data});
      this.loading = false;
    }, err => {
      this.errors = err['error'];
    });
    console.log("refreshToken method called");
  }
  logout() {
    this.token = null;
    this.token_expires = null;
    this.username = null;
  }
  updateData(token) {
    this.token = token;
    this.errors = [];
    // decode the token to read the username and expiration timestamp
    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.username = token_decoded.username;
    this.email = token_decoded.email;
    this.id = token_decoded.user_id;
    // console.log("This is the JWT token authenticated user:", token_decoded);
  }

  getLoggedInUser() {
    // this function returns an http obervable for user-resolver.ts
    return this.http.get(userUrl + this.id + '/');
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(UserService, "\u0275fac", function UserService_Factory(t) {
  return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(UserService, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: UserService,
  factory: UserService.ɵfac,
  providedIn: 'root'
}));

/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/user.service */ 5760);
/* harmony import */ var _core_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/player.service */ 8464);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.store */ 4827);
/* harmony import */ var _core_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/user.actions */ 1804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _roster_roster_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../roster/roster.component */ 3659);
/* harmony import */ var _standings_nav_standings_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../standings-nav/standings-nav.component */ 9069);













function HomeComponent_div_1_app_roster_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-roster", 2);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("loggedInUser", ctx_r2.loggedInUser)("roster", ctx_r2.roster);
  }
}
function HomeComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, HomeComponent_div_1_app_roster_1_Template, 1, 2, "app-roster", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.roster);
  }
}
function HomeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-standings-nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
class HomeComponent {
  constructor(_userService, _playerService, route,
  // Using Redux store to capture logged in user details
  store) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_userService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_playerService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "route", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "store", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loggedInUser", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentUser", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "roster", void 0);
    this._userService = _userService;
    this._playerService = _playerService;
    this.route = route;
    this.store = store;
    store.subscribe(() => this.readState());
    // this.readState(); //Need this twice here?
  }

  ngOnInit() {
    this.loggedInUser = this.route.snapshot.data.loggedInUser;
    this._userService.loggedInUser = this.loggedInUser;
    this.setCurrentUser(this.loggedInUser);
    // console.log("The current _userService user is", this._userService)
    // Retrieve roster for passing to child roster.component
    this._playerService.getListOtherThan(this.loggedInUser.id).subscribe(data => {
      this.roster = data;
    });
    this._userService.refreshToken();
  }
  // Redux store methods
  readState() {
    const state = this.store.getState();
    this.currentUser = state.currentUser;
    // console.log("readState called by home.component. The current Redux user is", state.currentUser)
  }

  setCurrentUser(user) {
    this.store.dispatch(_core_user_actions__WEBPACK_IMPORTED_MODULE_4__.setCurrentUser(user));
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HomeComponent, "\u0275fac", function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_player_service__WEBPACK_IMPORTED_MODULE_2__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_store__WEBPACK_IMPORTED_MODULE_3__.AppStore));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HomeComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf"], [3, "loggedInUser", "roster", 4, "ngIf"], [3, "loggedInUser", "roster"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 2, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 2, 0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx._userService.beforeTourney);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx._userService.beforeTourney);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _roster_roster_component__WEBPACK_IMPORTED_MODULE_5__.RosterComponent, _standings_nav_standings_nav_component__WEBPACK_IMPORTED_MODULE_6__.StandingsNavComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 4753:
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutComponent": () => (/* binding */ LogoutComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class LogoutComponent {
  constructor() {}
  ngOnInit() {}
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(LogoutComponent, "\u0275fac", function LogoutComponent_Factory(t) {
  return new (t || LogoutComponent)();
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(LogoutComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LogoutComponent,
  selectors: [["app-logout"]],
  decls: 2,
  vars: 0,
  template: function LogoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Logging Out!\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 7911:
/*!**************************************************************!*\
  !*** ./src/app/profile-details/profile-details.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileDetailsComponent": () => (/* binding */ ProfileDetailsComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/user.service */ 5760);
/* harmony import */ var _core_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/player.service */ 8464);
/* harmony import */ var _profile_form_modal_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile-form-modal/profile-form-modal.component */ 9271);
/* harmony import */ var _profile_form_modal_partial_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile-form-modal/partial-profile-form-modal.component */ 3673);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 2257);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);

















function ProfileDetailsComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4)(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileDetailsComponent_div_40_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](44);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.openModal(_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ProfileDetailsComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileDetailsComponent_div_41_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.openProfileModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ProfileDetailsComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "p", 14)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Payment Options:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "1) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " via PayPal : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "www.paypal.me/PaulMaurer1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "2) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " via Venmo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "@Paul-Maurer1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "3) Mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " to: Paul Maurer, 3227 N. Seminary Avenue, Chicago, IL 60657");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r2.faPaypal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r2.faVimeoSquare);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r2.faUsd);
  }
}
function ProfileDetailsComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18)(1, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Delete Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileDetailsComponent_ng_template_43_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.modalRef.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Are you sure you want to delete your Profile? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 23)(9, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileDetailsComponent_ng_template_43_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r11.modalRef.hide();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.delete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a0, a1) {
  return {
    "text-muted": a0,
    "text-danger": a1
  };
};
class ProfileDetailsComponent {
  get player() {
    return this._player;
  }
  set player(value) {
    if (value) {
      this._player = value;
    }
  }
  constructor(_playerService, _userService, router, route, modalService, bsModalService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_playerService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_userService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "route", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "modalService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "bsModalService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_showEditButton", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_player", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "modalRef", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "bsModalRef", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "faPaypal", _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faPaypal);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "faVimeoSquare", _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faVimeoSquare);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "faUsd", _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faUsd);
    this._playerService = _playerService;
    this._userService = _userService;
    this.router = router;
    this.route = route;
    this.modalService = modalService;
    this.bsModalService = bsModalService;
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      // if profile page is called for other player, don't show edit button
      params.id === undefined ? this._showEditButton = true : this._showEditButton = false;
    });
  }
  openModal(template) {
    this.modalRef = this.modalService.show(template);
  }
  delete() {
    this._playerService.deletePlayer(this._player.id, this._userService.token).subscribe(data => {
      console.log("delete successful");
    });
    this.router.navigate(['/logout']);
  }
  openProfileModal() {
    const initialState = {
      id: this._player.id,
      profile_user: this._player
    };
    if (this._userService.beforeTourney) {
      this.bsModalRef = this.bsModalService.show(_profile_form_modal_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_3__.ProfileFormModalComponent, {
        initialState
      });
    } else {
      this.bsModalRef = this.bsModalService.show(_profile_form_modal_partial_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_4__.PartialProfileFormModalComponent, {
        initialState
      });
    }
    ;
    this.bsModalService.onHidden.subscribe(reason => {
      // Upon modal being closed run these actions
      // *** This isn't working ***
      // const _reason = reason ? `, dismissed by ${reason}` : '';
      // console.log ("Profile modal was closed ", _reason);
      // Update logged in User against database after modal closes
      this._userService.getLoggedInUser().subscribe(data => {
        this._player = data;
      });
    });
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfileDetailsComponent, "\u0275fac", function ProfileDetailsComponent_Factory(t) {
  return new (t || ProfileDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_player_service__WEBPACK_IMPORTED_MODULE_2__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__.BsModalService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfileDetailsComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ProfileDetailsComponent,
  selectors: [["app-profile-details"]],
  inputs: {
    player: "player"
  },
  decls: 45,
  vars: 13,
  consts: [[1, "container"], [1, "row", "align-items-start"], [1, "col-xs", "col-md-6"], [1, "row", "justify-content-start"], [1, "col-xs-auto"], [1, "text-muted"], [1, "col", 3, "ngClass"], [1, "row"], ["class", "col-xs-auto", 4, "ngIf"], ["class", "col-md-6 justify-content-start rounded border border-danger text-muted", 4, "ngIf"], ["template", ""], [1, "btn", "btn-secondary", "custom", "mt-2", "mb-2", "mr-2", 3, "click"], [1, "btn", "btn-primary", "custom", "mt-2", "mb-2", 3, "click"], [1, "col-md-6", "justify-content-start", "rounded", "border", "border-danger", "text-muted"], [1, "mb-2"], [3, "icon"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.paypal.me/PaulMaurer1"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://account.venmo.com/u/Paul-Maurer1"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], [1, "btn", "btn-secondary", "custom", 3, "click"]],
  template: function ProfileDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Name:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 3)(10, "div", 4)(11, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Email:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 3)(16, "div", 4)(17, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Number of Entries:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 3)(22, "div", 4)(23, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "(S)ame or (D)ifferent Brackets:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 3)(28, "div", 4)(29, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Receive Game Result email updates?\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 3)(34, "div", 4)(35, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Paid up?:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, ProfileDetailsComponent_div_40_Template, 3, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, ProfileDetailsComponent_div_41_Template, 3, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, ProfileDetailsComponent_div_42_Template, 20, 3, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, ProfileDetailsComponent_ng_template_43_Template, 11, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx._player.full_name);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx._player.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx._player.num_entries);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.player.num_entries == 1 ? "-" : ctx.player.mult_entry_type);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.player.gm_updates ? "Yes" : "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](10, _c0, ctx.player.paid, !ctx.player.paid));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.player.paid ? "YES - Thank you!" : "Due($" + ctx.player.num_entries * 20 + ".00)", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx._userService.beforeTourney && ctx._showEditButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx._showEditButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.player.paid && ctx._showEditButton);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 5337:
/*!**************************************************************************!*\
  !*** ./src/app/profile-form-modal/admin-profile-form-modal.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminProfileFormModalComponent": () => (/* binding */ AdminProfileFormModalComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/player.service */ 8464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);









function AdminProfileFormModalComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " First Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AdminProfileFormModalComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Last Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AdminProfileFormModalComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AdminProfileFormModalComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email must be a valid address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AdminProfileFormModalComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Number of Entries is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AdminProfileFormModalComponent_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Must submit a number between 1-4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AdminProfileFormModalComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "(S)ame or (D)ifferent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "select", 30)(4, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r7.mult_entry_type);
  }
}
class AdminProfileFormModalComponent {
  constructor(bsModalRef, fb, _playerService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "bsModalRef", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_playerService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "title", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "closeBtnName", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "profile_user", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "adminProfileForm", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "first_name", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "last_name", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "email", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "num_entries", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mult_entry_type", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "gm_updates", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "paid", void 0);
    this.bsModalRef = bsModalRef;
    this._playerService = _playerService;
    this.title = "Update profile for ";
    this.closeBtnName = "Update";
    this.adminProfileForm = fb.group({
      'first_name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      'last_name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email])],
      'num_entries': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(1)])],
      'mult_entry_type': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      'gm_updates': [],
      'paid': []
    });
    this.first_name = this.adminProfileForm.controls['first_name']; // allows for other properties, e.g. error values
    this.last_name = this.adminProfileForm.controls['last_name'];
    this.email = this.adminProfileForm.controls['email'];
    this.num_entries = this.adminProfileForm.controls['num_entries'];
    this.mult_entry_type = this.adminProfileForm.controls['mult_entry_type'];
    this.gm_updates = this.adminProfileForm.controls['gm_updates'];
    this.paid = this.adminProfileForm.controls['paid'];
  }
  ngOnInit() {
    // console.log ("AdminProfileForm's profile_user", this.profile_user);
    this.adminProfileForm.patchValue(this.profile_user);
  }
  submitForm(value) {
    this.profile_user.first_name = this.first_name.value;
    this.profile_user.last_name = this.last_name.value;
    this.profile_user.email = this.email.value.toLowerCase();
    this.profile_user.num_entries = this.num_entries.value;
    this.profile_user.mult_entry_type = this.mult_entry_type.value;
    this.profile_user.gm_updates = this.gm_updates.value;
    this.profile_user.paid = this.paid.value;
    this._playerService.updatePlayer(this.profile_user).subscribe(data => {
      console.log("Player updated:", data);
    });
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AdminProfileFormModalComponent, "\u0275fac", function AdminProfileFormModalComponent_Factory(t) {
  return new (t || AdminProfileFormModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_player_service__WEBPACK_IMPORTED_MODULE_1__.PlayerService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AdminProfileFormModalComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AdminProfileFormModalComponent,
  selectors: [["app-admin-profile-form-modal"]],
  decls: 48,
  vars: 26,
  consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [3, "formGroup", "ngSubmit"], [1, "modal-body"], [1, "container"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "first_name"], ["type", "text", "id", "first_name", 1, "form-control", 3, "formControl"], ["class", "text-danger", 4, "ngIf"], ["for", "last_name"], ["type", "text", "id", "last_name", 1, "form-control", 3, "formControl"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", 1, "form-control", 3, "formControl"], ["for", "num_entries"], ["type", "number", "min", "1", "max", "4", "id", "num_entries", 1, "form-control", 3, "formControl"], ["entries", ""], ["class", "form-group col-md-6", 4, "ngIf"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "gm_updates", 1, "custom-control-input", 3, "formControl"], ["for", "gm_updates", 1, "custom-control-label"], ["type", "checkbox", "id", "paid", 1, "custom-control-input", 3, "formControl"], ["for", "paid", 1, "custom-control-label"], [1, "modal-footer"], ["type", "submit", "id", "submit", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "text-danger"], ["for", "mult_entry_type"], ["id", "mult_entry_type", 1, "form-control", 3, "formControl"]],
  template: function AdminProfileFormModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProfileFormModalComponent_Template_button_click_3_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AdminProfileFormModalComponent_Template_form_ngSubmit_6_listener() {
        return ctx.submitForm(ctx.adminProfileForm.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "First Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AdminProfileFormModalComponent_span_14_Template, 2, 0, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8)(16, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Last Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AdminProfileFormModalComponent_span_19_Template, 2, 0, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 14)(21, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, AdminProfileFormModalComponent_span_24_Template, 2, 0, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, AdminProfileFormModalComponent_span_25_Template, 2, 0, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 7)(27, "div", 8)(28, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Number of Entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 18, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, AdminProfileFormModalComponent_span_32_Template, 2, 0, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, AdminProfileFormModalComponent_span_33_Template, 2, 0, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, AdminProfileFormModalComponent_div_34_Template, 8, 1, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 14)(36, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Receive email for game updates? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 14)(41, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Paid? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 26)(46, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProfileFormModalComponent_Template_button_click_46_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.title, " ", ctx.profile_user.full_name, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.adminProfileForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.first_name.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.first_name);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.first_name.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.last_name.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.last_name);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.last_name.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.email.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.email.invalid && ctx.email.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.email.invalid && ctx.email.errors.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.num_entries.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.num_entries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.num_entries.invalid && ctx.num_entries.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.num_entries.invalid && (ctx.num_entries.errors.minlength || ctx.num_entries.errors.maxlength));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.value > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.gm_updates);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.paid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.adminProfileForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.closeBtnName);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 3673:
/*!****************************************************************************!*\
  !*** ./src/app/profile-form-modal/partial-profile-form-modal.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartialProfileFormModalComponent": () => (/* binding */ PartialProfileFormModalComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/player.service */ 8464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);








class PartialProfileFormModalComponent {
  constructor(bsModalRef, fb, _playerService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "bsModalRef", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_playerService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "title", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "closeBtnName", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "profile_user", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "profileForm", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "gm_updates", void 0);
    this.bsModalRef = bsModalRef;
    this._playerService = _playerService;
    this.title = "Update profile for ";
    this.closeBtnName = "Update";
    this.profileForm = fb.group({
      'gm_updates': []
    });
    this.gm_updates = this.profileForm.controls['gm_updates'];
  }
  ngOnInit() {
    this.profileForm.patchValue(this.profile_user);
  }
  submitForm(value) {
    this.profile_user.gm_updates = this.gm_updates.value;
    // console.log("gm_updates = ", this.profile_user.gm_updates);
    this._playerService.updatePlayer(this.profile_user).subscribe(data => {
      // console.log("Player updated:", this.profile_user);
    });
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(PartialProfileFormModalComponent, "\u0275fac", function PartialProfileFormModalComponent_Factory(t) {
  return new (t || PartialProfileFormModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.BsModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_player_service__WEBPACK_IMPORTED_MODULE_1__.PlayerService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(PartialProfileFormModalComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PartialProfileFormModalComponent,
  selectors: [["app-partial-profile-form-modal"]],
  decls: 43,
  vars: 10,
  consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [3, "formGroup", "ngSubmit"], [1, "modal-body"], [1, "container"], [1, "row", "justify-content-start"], [1, "col-xs-auto"], [1, "text-muted"], [1, "form-group"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "gm_updates", 1, "custom-control-input", 3, "formControl"], ["for", "gm_updates", 1, "custom-control-label"], [1, "modal-footer"], ["type", "submit", "id", "submit", 1, "btn", "btn-success", 3, "disabled", "click"]],
  template: function PartialProfileFormModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PartialProfileFormModalComponent_Template_button_click_3_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function PartialProfileFormModalComponent_Template_form_ngSubmit_6_listener() {
        return ctx.submitForm(ctx.profileForm.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Name:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 7)(16, "div", 8)(17, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Email:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 7)(22, "div", 8)(23, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Number of Entries:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 7)(28, "div", 8)(29, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "(S)ame or (D)ifferent Brackets:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 7)(35, "div", 10)(36, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Receive email for game updates? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 14)(41, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PartialProfileFormModalComponent_Template_button_click_41_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.title, " ", ctx.profile_user.full_name, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.profileForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.profile_user.full_name);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.profile_user.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.profile_user.num_entries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.profile_user.num_entries == 1 ? "-" : ctx.profile_user.mult_entry_type);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.gm_updates);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.profileForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.closeBtnName);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 9271:
/*!********************************************************************!*\
  !*** ./src/app/profile-form-modal/profile-form-modal.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileFormModalComponent": () => (/* binding */ ProfileFormModalComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/player.service */ 8464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);









function ProfileFormModalComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " First Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileFormModalComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Last Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileFormModalComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileFormModalComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email must be a valid address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileFormModalComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Number of Entries is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileFormModalComponent_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Must submit a number between 1-4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileFormModalComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "(S)ame or (D)ifferent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "select", 28)(4, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r7.mult_entry_type);
  }
}
class ProfileFormModalComponent {
  constructor(bsModalRef, fb, _playerService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "bsModalRef", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_playerService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "title", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "closeBtnName", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "profile_user", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "profileForm", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "first_name", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "last_name", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "email", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "num_entries", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mult_entry_type", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "gm_updates", void 0);
    this.bsModalRef = bsModalRef;
    this._playerService = _playerService;
    this.title = "Update profile for ";
    this.closeBtnName = "Update";
    this.profileForm = fb.group({
      'first_name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      'last_name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email])],
      'num_entries': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(1)])],
      'mult_entry_type': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      'gm_updates': []
    });
    this.first_name = this.profileForm.controls['first_name']; // allows for other properties, e.g. error values
    this.last_name = this.profileForm.controls['last_name'];
    this.email = this.profileForm.controls['email'];
    this.num_entries = this.profileForm.controls['num_entries'];
    this.mult_entry_type = this.profileForm.controls['mult_entry_type'];
    this.gm_updates = this.profileForm.controls['gm_updates'];
  }
  ngOnInit() {
    this.profileForm.patchValue(this.profile_user);
  }
  submitForm(value) {
    this.profile_user.first_name = this.first_name.value;
    this.profile_user.last_name = this.last_name.value;
    this.profile_user.email = this.email.value.toLowerCase();
    this.profile_user.num_entries = this.num_entries.value;
    this.profile_user.mult_entry_type = this.mult_entry_type.value;
    this.profile_user.gm_updates = this.gm_updates.value;
    // console.log("gm_updates = ", this.profile_user.gm_updates);
    this._playerService.updatePlayer(this.profile_user).subscribe(data => {
      // console.log("Player updated:", this.profile_user);
    });
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfileFormModalComponent, "\u0275fac", function ProfileFormModalComponent_Factory(t) {
  return new (t || ProfileFormModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_player_service__WEBPACK_IMPORTED_MODULE_1__.PlayerService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfileFormModalComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProfileFormModalComponent,
  selectors: [["app-profile-form-modal"]],
  decls: 43,
  vars: 25,
  consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [3, "formGroup", "ngSubmit"], [1, "modal-body"], [1, "container"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "first_name"], ["type", "text", "id", "first_name", 1, "form-control", 3, "formControl"], ["class", "text-danger", 4, "ngIf"], ["for", "last_name"], ["type", "text", "id", "last_name", 1, "form-control", 3, "formControl"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", 1, "form-control", 3, "formControl"], ["for", "num_entries"], ["type", "number", "min", "1", "max", "4", "id", "num_entries", 1, "form-control", 3, "formControl"], ["entries", ""], ["class", "form-group col-md-6", 4, "ngIf"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "gm_updates", 1, "custom-control-input", 3, "formControl"], ["for", "gm_updates", 1, "custom-control-label"], [1, "modal-footer"], ["type", "submit", "id", "submit", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "text-danger"], ["for", "mult_entry_type"], ["id", "mult_entry_type", 1, "form-control", 3, "formControl"]],
  template: function ProfileFormModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileFormModalComponent_Template_button_click_3_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ProfileFormModalComponent_Template_form_ngSubmit_6_listener() {
        return ctx.submitForm(ctx.profileForm.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "First Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ProfileFormModalComponent_span_14_Template, 2, 0, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8)(16, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Last Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ProfileFormModalComponent_span_19_Template, 2, 0, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 14)(21, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ProfileFormModalComponent_span_24_Template, 2, 0, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ProfileFormModalComponent_span_25_Template, 2, 0, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 7)(27, "div", 8)(28, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Number of Entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 18, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, ProfileFormModalComponent_span_32_Template, 2, 0, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, ProfileFormModalComponent_span_33_Template, 2, 0, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ProfileFormModalComponent_div_34_Template, 8, 1, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 14)(36, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Receive email for game updates? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 24)(41, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileFormModalComponent_Template_button_click_41_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.title, " ", ctx.profile_user.full_name, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.profileForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.first_name.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.first_name);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.first_name.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.last_name.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.last_name);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.last_name.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.email.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.email.invalid && ctx.email.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.email.invalid && ctx.email.errors.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.num_entries.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.num_entries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.num_entries.invalid && ctx.num_entries.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.num_entries.invalid && (ctx.num_entries.errors.minlength || ctx.num_entries.errors.maxlength));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.value > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.gm_updates);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.profileForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.closeBtnName);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 6630:
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/player.service */ 8464);
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/user.service */ 5760);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile-details/profile-details.component */ 7911);
/* harmony import */ var _team_details_team_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../team-details/team-details.component */ 2129);













function ProfileComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u00A0Rotate to see Next Game(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r1.faRotate);
  }
}
function ProfileComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-profile-details", 1)(5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2)(7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ProfileComponent_div_0_div_9_Template, 4, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-team-details", 1)(11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0._pageTitle, " Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("player", ctx_r0.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0._pageTitle, " Teams");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0._userService.beforeTourney);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("player", ctx_r0.user);
  }
}
class ProfileComponent {
  // for passing player info to sub-components (profile-details & profile-edit)

  // fortawesome icons

  constructor(route, _playerService, _userService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "route", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_playerService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_userService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "user", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_pageTitle", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "faRotate", _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faRotate);
    this.route = route;
    this._playerService = _playerService;
    this._userService = _userService;
  }
  ngOnInit() {
    // this.user = this.route.snapshot.data.loggedInUser;
    this.route.queryParams.subscribe(params => {
      // if profile page is called for other Player (with query param), set user = Player
      if (params.id === undefined) {
        this.user = this.route.snapshot.data.loggedInUser;
        this._pageTitle = "My";
      } else {
        this._playerService.getPlayer(params.id).subscribe(data => {
          this.user = data;
          this._pageTitle = this.user.first_name + "'s";
        });
      }
    });
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfileComponent, "\u0275fac", function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_player_service__WEBPACK_IMPORTED_MODULE_1__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfileComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["app-profile"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [3, "player"], [1, "d-flex", "flex-row", "align-items-center"], [1, "h4"], ["class", "d-inline d-md-none pl-3", 4, "ngIf"], [1, "d-inline", "d-md-none", "pl-3"], [1, "rotate"], [3, "icon"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 12, 5, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.user);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconComponent, _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_3__.ProfileDetailsComponent, _team_details_team_details_component__WEBPACK_IMPORTED_MODULE_4__.TeamDetailsComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 6167:
/*!************************************************************!*\
  !*** ./src/app/roster-textbox/roster-textbox.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RosterTextboxComponent": () => (/* binding */ RosterTextboxComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);




class RosterTextboxComponent {
  get filter() {
    return this._filter;
  }
  set filter(val) {
    this._filter = val;
    this.changed.emit(this.filter); //Raise changed event
  }

  constructor() {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_filter", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "changed", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
  }
  ngOnInit() {}
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(RosterTextboxComponent, "\u0275fac", function RosterTextboxComponent_Factory(t) {
  return new (t || RosterTextboxComponent)();
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(RosterTextboxComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: RosterTextboxComponent,
  selectors: [["app-roster-textbox"]],
  inputs: {
    filter: "filter"
  },
  outputs: {
    changed: "changed"
  },
  decls: 2,
  vars: 1,
  consts: [["type", "text", 3, "ngModel", "ngModelChange"]],
  template: function RosterTextboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Search by Name: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RosterTextboxComponent_Template_input_ngModelChange_1_listener($event) {
        return ctx.filter = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filter);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 3659:
/*!********************************************!*\
  !*** ./src/app/roster/roster.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RosterComponent": () => (/* binding */ RosterComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/player.service */ 8464);
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/user.service */ 5760);
/* harmony import */ var _core_sorter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/sorter.service */ 797);
/* harmony import */ var _profile_form_modal_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile-form-modal/profile-form-modal.component */ 9271);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 7618);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _roster_textbox_roster_textbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../roster-textbox/roster-textbox.component */ 6167);
















function RosterComponent_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(", ctx_r0._numNeededEntries, " more entries for another!)");
  }
}
function RosterComponent_small_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(", ctx_r1._numNeededEntries, " more entry for another!)");
  }
}
function RosterComponent_fa_icon_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "fa-icon", 19);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r2.faCaretDown);
  }
}
function RosterComponent_fa_icon_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "fa-icon", 19);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r3.faCaretUp);
  }
}
function RosterComponent_fa_icon_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "fa-icon", 19);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r4.faCaretDown);
  }
}
function RosterComponent_fa_icon_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "fa-icon", 19);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r5.faCaretUp);
  }
}
function RosterComponent_fa_icon_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "fa-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RosterComponent_fa_icon_60_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.openProfileModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r6.faEdit);
  }
}
function RosterComponent_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r11 + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](player_r10.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](player_r10.num_entries);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](player_r10.num_entries == 1 ? "-" : player_r10.mult_entry_type);
  }
}
class RosterComponent {
  // to capture loggedInUser object from parent component
  // to user which row a user hovers on
  // tally up # of registrations for display at top
  //tally estimated # of brackets
  //tally up # of entries num bracket calculation
  //# entries needed to complete another bracket

  // fortawesome icons

  // Retrieve loggedInUser from parent component
  get loggedInUser() {
    return this._loggedInUser;
  }
  set loggedInUser(value) {
    if (value) {
      this._loggedInUser = value;
    }
  }
  // Retrieve roster from parent component
  get roster() {
    return this._roster;
  }
  set roster(value) {
    if (value) {
      this._filteredRoster = this._roster = value;
    }
  }
  // Modal object to capture content

  constructor(_playerService, _userService, _modalService, sorterService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_playerService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_userService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_modalService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sorterService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_roster", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_filteredRoster", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_loggedInUser", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "hoveredIndex", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_numRegistrants", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_numBrackets", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_numEntries", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_numNeededEntries", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loading", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_property", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_direction", 1);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "faCaretDown", _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faCaretDown);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "faCaretUp", _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faCaretUp);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "faEdit", _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faEdit);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "bsModalRef", void 0);
    this._playerService = _playerService;
    this._userService = _userService;
    this._modalService = _modalService;
    this.sorterService = sorterService;
  }
  ngOnInit() {
    this.loading = true;
    // Calculate registration stats needed at top of page
    this._numRegistrants = 1; // start at 1 since _loggedInUser counts as 1
    this._numBrackets = 0;
    this._numEntries = this._loggedInUser.num_entries; // start _numEntries counter at # that loggedInUser has
    this._roster.forEach(registrant => {
      this._numRegistrants += 1;
      this._numEntries += registrant.num_entries;
    });
    this._numBrackets = Math.floor(this._numEntries / 16);
    this._numNeededEntries = (this._numBrackets + 1) * 16 - this._numEntries;
    this.loading = false;
  }
  openProfileModal() {
    const initialState = {
      id: this.hoveredIndex,
      profile_user: this._loggedInUser
    };
    this.bsModalRef = this._modalService.show(_profile_form_modal_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_4__.ProfileFormModalComponent, {
      initialState
    });
    this._modalService.onHidden.subscribe(reason => {
      // Upon modal being closed run these actions
      // const _reason = reason ? `, dismissed by ${reason}` : '';
      // console.log ("Profile modal was closed ", reason);
      // Update logged in User against database after modal closes
      // This updates the affected (1st) row for any changes that was made on the Modal
      // this._userService.getLoggedInUser().subscribe(data => {
      // 	this._loggedInUser = data;
      // })
    });
  }
  filter(data) {
    // Function that filters the Roster list based on what a user types in the roster-textbox component
    if (data) {
      this._filteredRoster = this._roster.filter(item => item.full_name.toLowerCase().indexOf(data.toLowerCase()) > -1);
    } else {
      this._filteredRoster = this._roster;
    }
  }
  sort(prop) {
    this.sorterService.sort(this._filteredRoster, prop);
    this._property = prop;
    this._direction = this._property === prop ? this._direction * -1 : 1;
    // console.log ("property = ", this._property, " & direction = ", this._direction);
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(RosterComponent, "\u0275fac", function RosterComponent_Factory(t) {
  return new (t || RosterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_player_service__WEBPACK_IMPORTED_MODULE_1__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_sorter_service__WEBPACK_IMPORTED_MODULE_3__.SorterService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(RosterComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: RosterComponent,
  selectors: [["app-roster"]],
  inputs: {
    loggedInUser: "loggedInUser",
    roster: "roster"
  },
  decls: 63,
  vars: 17,
  consts: [[1, "d-flex", "flex-row", "justify-content-around"], [1, "col", "d-none", "d-md-block"], [1, "col", "col-3-md", "text-center", "bg-secondary", "text-white", "rounded", "py-2", "mx-1"], [1, "mb-0"], [1, "display-3", "m-0"], [1, "col", "col-2-md", "text-center", "bg-secondary", "text-white", "rounded", "py-2", "mx-1"], [1, "display-4", "m-0"], ["class", "m-0", 4, "ngIf"], [3, "changed"], [1, "table", "table-sm"], ["scope", "col"], ["scope", "col", 1, "cursor-pointer", 3, "click"], [3, "icon", 4, "ngIf"], ["scope", "col", 2, "width", "5%"], [3, "mouseover", "mouseleave"], ["scope", "row"], ["class", "cursor-pointer", "tooltip", "Edit Profile", 3, "icon", "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "m-0"], [3, "icon"], ["tooltip", "Edit Profile", 1, "cursor-pointer", 3, "icon", "click"]],
  template: function RosterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Registrants");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div")(3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 2)(6, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "People Registered");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 2)(12, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Number of Entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 5)(18, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Number of Brackets");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "h1", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, RosterComponent_small_22_Template, 2, 1, "small", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, RosterComponent_small_23_Template, 2, 1, "small", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "app-roster-textbox", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("changed", function RosterComponent_Template_app_roster_textbox_changed_26_listener($event) {
        return ctx.filter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "br")(28, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "table", 9)(30, "thead")(31, "tr")(32, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RosterComponent_Template_th_click_34_listener() {
        return ctx.sort("last_name");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, RosterComponent_fa_icon_36_Template, 1, 1, "fa-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, RosterComponent_fa_icon_37_Template, 1, 1, "fa-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RosterComponent_Template_th_click_38_listener() {
        return ctx.sort("num_entries");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Num Entries ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, RosterComponent_fa_icon_40_Template, 1, 1, "fa-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, RosterComponent_fa_icon_41_Template, 1, 1, "fa-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "(S)ame/(D)iff");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "tbody")(47, "tr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseover", function RosterComponent_Template_tr_mouseover_47_listener() {
        return ctx.hoveredIndex = ctx._loggedInUser.id;
      })("mouseleave", function RosterComponent_Template_tr_mouseleave_47_listener() {
        return ctx.hoveredIndex = null;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "td")(51, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "td")(54, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "td")(57, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, RosterComponent_fa_icon_60_Template, 1, 1, "fa-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, RosterComponent_tr_61_Template, 10, 4, "tr", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("loader", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx._numRegistrants);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx._numEntries);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx._numBrackets);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx._numNeededEntries > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx._numNeededEntries == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx._property == "last_name" && ctx._direction == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx._property == "last_name" && ctx._direction == -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx._property == "num_entries" && ctx._direction == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx._property == "num_entries" && ctx._direction == -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx._loggedInUser.first_name, "\u00A0", ctx._loggedInUser.last_name, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx._loggedInUser.num_entries);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx._loggedInUser.num_entries == 1 ? "-" : ctx._loggedInUser.mult_entry_type);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.hoveredIndex == ctx._loggedInUser.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx._filteredRoster);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__.TooltipDirective, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent, _roster_textbox_roster_textbox_component__WEBPACK_IMPORTED_MODULE_5__.RosterTextboxComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 8629:
/*!*************************************!*\
  !*** ./src/app/shared/functions.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertTime12to24": () => (/* binding */ convertTime12to24),
/* harmony export */   "convertTime24to12": () => (/* binding */ convertTime24to12)
/* harmony export */ });
// Functions used by the app
const convertTime12to24 = time12h => {
  // This function converts a 12 hour time returned by the Calendar widget (hh:mm PM) to
  // a 24 hour time (hh:mm) that can be sent to, stored by the back-end
  const [time, modifier] = time12h.split(" ");
  let [hours, minutes] = time.split(":");
  if (hours === "12") {
    hours = "00";
  }
  if (modifier === "PM") {
    hours = parseInt(hours, 10) + 12;
  }
  return `${hours}:${minutes}`;
};
const convertTime24to12 = time24h => {
  // This function converts a 24 hr time from the back-end (hh:mm) into a 
  // 12 hour time string (hh:mm PM) that can populate the calendar widget with the currently
  // set value
  // Check correct time format and split into components
  var time = time24h.match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time24h];
  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = " "; // add space between time & AM/PM
    time[6] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }

  return time.join(''); // return adjusted time or original string
};

/***/ }),

/***/ 615:
/*!**************************************!*\
  !*** ./src/app/shared/interfaces.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 9069:
/*!**********************************************************!*\
  !*** ./src/app/standings-nav/standings-nav.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StandingsNavComponent": () => (/* binding */ StandingsNavComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/tbracket.service */ 2953);
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/user.service */ 5760);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 82);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _standings_standings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../standings/standings.component */ 9953);











function StandingsNavComponent_tab_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tab", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-standings", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tbracket_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("heading", tbracket_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("bracket", tbracket_r1.id);
  }
}
class StandingsNavComponent {
  // fortawesome icons

  constructor(_tbracketService, _userService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_tbracketService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_userService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_tbracketList", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "faRotate", _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faRotate);
    this._tbracketService = _tbracketService;
    this._userService = _userService;
  }
  ngOnInit() {
    // Retrieve list of brackets for bracket navbar
    this._tbracketService.getListWithPlayer(this._userService.id).subscribe(data => {
      this._tbracketList = data;
    });
  } //end ngOnInit
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(StandingsNavComponent, "\u0275fac", function StandingsNavComponent_Factory(t) {
  return new (t || StandingsNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__.TBracketService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(StandingsNavComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: StandingsNavComponent,
  selectors: [["app-standings-nav"]],
  decls: 12,
  vars: 2,
  consts: [[1, "d-flex", "flex-row", "align-items-center"], [1, "h4"], [1, "d-inline", "d-md-none", "pl-3"], [1, "rotate"], [3, "icon"], [1, "text-muted"], ["type", "pills"], [3, "heading", 4, "ngFor", "ngForOf"], [3, "heading"], [3, "bracket"]],
  template: function StandingsNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Standings");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "fa-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u00A0Rotate to see Teams");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "small", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "(Click to see bracket)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "tabset", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, StandingsNavComponent_tab_10_Template, 2, 2, "tab", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "br");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faRotate);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._tbracketList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__.TabsetComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconComponent, _standings_standings_component__WEBPACK_IMPORTED_MODULE_3__.StandingsComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 9953:
/*!**************************************************!*\
  !*** ./src/app/standings/standings.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StandingsComponent": () => (/* binding */ StandingsComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_entry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/entry.service */ 9237);
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/user.service */ 5760);
/* harmony import */ var _core_region_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/region.service */ 4180);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);










function StandingsComponent_table_2_tr_16_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entry_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](entry_r2.player);
  }
}
const _c0 = function () {
  return ["/profile"];
};
const _c1 = function (a0) {
  return {
    id: a0
  };
};
function StandingsComponent_table_2_tr_16_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td")(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const entry_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c1, entry_r2.player_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](entry_r2.player);
  }
}
function StandingsComponent_table_2_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StandingsComponent_table_2_tr_16_td_1_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, StandingsComponent_table_2_tr_16_td_2_Template, 3, 6, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 9)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 9)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 9)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "td", 9)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const entry_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("bg-success", entry_r2.player_id == ctx_r1._userService.id)("text-white", entry_r2.player_id == ctx_r1._userService.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", entry_r2.player_id == ctx_r1._userService.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", entry_r2.player_id != ctx_r1._userService.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](entry_r2.team_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("standings-out", entry_r2.team_a_status == "(OUT)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", entry_r2.team_a, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", entry_r2.team_a_status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("standings-out", entry_r2.team_b_status == "(OUT)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", entry_r2.team_b, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", entry_r2.team_b_status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("standings-out", entry_r2.team_c_status == "(OUT)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", entry_r2.team_c, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", entry_r2.team_c_status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("standings-out", entry_r2.team_d_status == "(OUT)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", entry_r2.team_d, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", entry_r2.team_d_status, "");
  }
}
function StandingsComponent_table_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 2)(1, "thead")(2, "tr")(3, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "# Active Teams");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, StandingsComponent_table_2_tr_16_Template, 25, 23, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0._regionList[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0._regionList[1].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0._regionList[2].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0._regionList[3].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0._standingsList);
  }
}
class StandingsComponent {
  get bracket() {
    return this._bracketId;
  }
  set bracket(value) {
    if (value) {
      this._bracketId = value;
    }
  }
  constructor(_entryService, _userService, _regionService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_entryService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_userService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_regionService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_standingsList", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_regionList", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_bracketId", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loading", void 0);
    this._entryService = _entryService;
    this._userService = _userService;
    this._regionService = _regionService;
  }
  ngOnInit() {
    this.loading = true;
    // Retrieve entries for players within bracket
    this._entryService.getEntryStandings(this._bracketId).subscribe(data => {
      this._standingsList = data;
      // Sort the standings by descending team_count (they're pre-sorted by last name descending)
      // this._standingsList.sort((a,b) => (a.team_count > b.team_count) ? -1 : ((b.team_count > a.team_count) ? 1 : 0));
      this._standingsList.sort((a, b) => a.standing_points > b.standing_points ? -1 : b.standing_points > a.standing_points ? 1 : 0);
      this.loading = false;
    });
    // Retrieve list of regions to display in column titles
    this._regionService.getRegionList().subscribe(data => {
      this._regionList = data;
    });
  } // end ngOnInit
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(StandingsComponent, "\u0275fac", function StandingsComponent_Factory(t) {
  return new (t || StandingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_entry_service__WEBPACK_IMPORTED_MODULE_1__.EntryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_region_service__WEBPACK_IMPORTED_MODULE_3__.RegionService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(StandingsComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: StandingsComponent,
  selectors: [["app-standings"]],
  inputs: {
    bracket: "bracket"
  },
  decls: 3,
  vars: 3,
  consts: [[1, "table-responsive"], ["class", "table table-sm", 4, "ngIf"], [1, "table", "table-sm"], ["scope", "col"], ["scope", "col", 1, "text-center"], ["scope", "col", 1, "d-none", "d-md-table-cell"], [3, "bg-success", "text-white", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "text-center"], [1, "d-none", "d-md-table-cell"], [1, "d-none", "d-lg-table-cell"], [3, "routerLink", "queryParams"]],
  template: function StandingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, StandingsComponent_table_2_Template, 17, 5, "table", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("loader", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx._regionList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 2129:
/*!********************************************************!*\
  !*** ./src/app/team-details/team-details.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamDetailsComponent": () => (/* binding */ TeamDetailsComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _shared_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/interfaces */ 615);
/* harmony import */ var _core_entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/entry.service */ 9237);
/* harmony import */ var _core_region_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/region.service */ 4180);
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/user.service */ 5760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);












const _c0 = function (a1) {
  return ["/brackets", a1];
};
function TeamDetailsComponent_div_0_div_2_table_1_tbody_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody")(1, "tr")(2, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TeamDetailsComponent_div_0_div_2_table_1_tbody_13_Template_td_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const entry_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.sendToBracket(entry_r4.tbracket_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td", 7)(12, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "td", 7)(23, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "td", 7)(34, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "td", 7)(45, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const entry_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r4.tbracket);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r5._regionList[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r4.orig_team_a);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r4.team_a || "**OUT**");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("fragment", entry_r4.region_a - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](25, _c0, entry_r4.tbracket_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r4.next_team_a);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r5._regionList[1].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r4.orig_team_b);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r4.team_b || "**OUT**");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("fragment", entry_r4.region_b - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](27, _c0, entry_r4.tbracket_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r4.next_team_b);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r5._regionList[2].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r4.orig_team_c);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r4.team_c || "**OUT**");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("fragment", entry_r4.region_c - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](29, _c0, entry_r4.tbracket_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r4.next_team_c);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r5._regionList[3].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r4.orig_team_d);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r4.team_d || "**OUT**");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("fragment", entry_r4.region_d - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](31, _c0, entry_r4.tbracket_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r4.next_team_d);
  }
}
function TeamDetailsComponent_div_0_div_2_table_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 2)(1, "thead")(2, "tr", 3)(3, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Bracket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Region");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Original Teams");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Active Team(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Next Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, TeamDetailsComponent_div_0_div_2_table_1_tbody_13_Template, 47, 33, "tbody", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3._regionList);
  }
}
function TeamDetailsComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TeamDetailsComponent_div_0_div_2_table_1_Template, 14, 1, "table", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2._entryList);
  }
}
function TeamDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TeamDetailsComponent_div_0_div_2_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("loader", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0._entryList && ctx_r0._entryList.length);
  }
}
function TeamDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "** Teams will be assigned by Thursday, March 16, 2023, at 10am CST **");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Check back then to see which brackets your entries were assigned (4 teams, 1 per Region, assigned to each entry)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class TeamDetailsComponent {
  get player() {
    return this._player;
  }
  set player(value) {
    if (value) {
      this._player = value;
    }
  }
  constructor(_entryService, router, _regionService, _userService) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_entryService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_regionService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_userService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_player", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_entryList", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_regionList", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loading", void 0);
    this._entryService = _entryService;
    this.router = router;
    this._regionService = _regionService;
    this._userService = _userService;
  }
  ngOnInit() {
    this.loading = true;
    //retrieve entries for user
    this._entryService.getEntryDetailsListMyTeamsByPlayer(this._player.id).subscribe(data => {
      this._entryList = data;
      // Retrieve list of regions to display in tabs
      this._regionService.getRegionList().subscribe(data => {
        this._regionList = data;
        this.loading = false;
      });
    });
  }
  // Function to create url that to which user is sent when click on Bracket name
  sendToBracket(bracket) {
    this.router.navigate(['/brackets', bracket]);
  } // end sendToBracket()
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TeamDetailsComponent, "\u0275fac", function TeamDetailsComponent_Factory(t) {
  return new (t || TeamDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_entry_service__WEBPACK_IMPORTED_MODULE_2__.EntryService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_region_service__WEBPACK_IMPORTED_MODULE_3__.RegionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TeamDetailsComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: TeamDetailsComponent,
  selectors: [["app-team-details"]],
  inputs: {
    player: "player"
  },
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], ["class", "table table-borderless table-sm w-100", "id", "my-teams", 4, "ngFor", "ngForOf"], ["id", "my-teams", 1, "table", "table-borderless", "table-sm", "w-100"], [1, "table-active"], ["scope", "col"], ["scope", "col", 1, "d-none", "d-md-table-cell"], [1, "text-primary", "text-pointer", 3, "click"], [1, "d-none", "d-md-table-cell"], [3, "routerLink", "fragment"], [1, "text-center"], [1, "font-italic", "text-muted"]],
  template: function TeamDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TeamDetailsComponent_div_0_Template, 3, 3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TeamDetailsComponent_div_1_Template, 9, 0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx._userService.beforeTourney);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx._userService.beforeTourney);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 6675:
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class FooterComponent {
  constructor() {}
  ngOnInit() {}
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(FooterComponent, "\u0275fac", function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(FooterComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 4,
  vars: 0,
  consts: [[1, "navbar", "navbar-dark", "bg-primary", "fixed-bottom", "footer"], [1, "navbar-expand", "m-auto", "navbar-text", "footer"], [1, "fa", "fa-ban"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00A0Exit Zero Technologies 2018-2023 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 4444:
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/user.service */ 5760);
/* harmony import */ var _core_entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/entry.service */ 9237);
/* harmony import */ var _core_tbracket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/tbracket.service */ 2953);
/* harmony import */ var _core_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/game.service */ 1110);
/* harmony import */ var _shared_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/interfaces */ 615);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.store */ 4827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 2184);
















const _c0 = function () {
  return ["/profile"];
};
function HeaderComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Hi, ", ctx_r0.currentUser.first_name, "!");
  }
}
const _c1 = function (a1) {
  return ["/brackets", a1];
};
function HeaderComponent_li_17_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Brackets");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c1, ctx_r3._bracketToShow))("fragment", ctx_r3._region_id);
  }
}
const _c2 = function () {
  return ["/brackets"];
};
function HeaderComponent_li_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, HeaderComponent_li_17_a_1_Template, 2, 4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.isActive(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](3, _c2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1._bracketToShow);
  }
}
const _c3 = function () {
  return ["/admin/c-brackets"];
};
const _c4 = function (a1) {
  return ["/admin/a-brackets", a1];
};
const _c5 = function () {
  return ["/admin/u-games"];
};
const _c6 = function () {
  return ["/admin/s-emails"];
};
const _c7 = function () {
  return ["/admin/e-roster"];
};
function HeaderComponent_li_18_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21)(1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Manage Brackets");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Assign Entries");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Update Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Send Emails");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Edit Roster");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c4, ctx_r4._bracketToShow));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](8, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](10, _c7));
  }
}
function HeaderComponent_li_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 18)(1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_li_18_Template_a_click_1_listener() {
      return false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HeaderComponent_li_18_div_3_Template, 11, 11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
const _c8 = function () {
  return ["/home"];
};
const _c9 = function () {
  return ["active"];
};
class HeaderComponent {
  constructor(router, _userService, _entryService, _tbracketService, _gameService, store) {
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_userService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_entryService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_tbracketService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_gameService", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "store", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isCollapsed", true);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_bracketToShow", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentUser", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tbracketList", void 0);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_mobile", false);
    (0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_region_id", void 0);
    this.router = router;
    this._userService = _userService;
    this._entryService = _entryService;
    this._tbracketService = _tbracketService;
    this._gameService = _gameService;
    this.store = store;
    store.subscribe(() => this.readState());
    this.readState();
  }
  ngOnInit() {
    // See if the tourney is at the Final Four and show Final Four tab if true
    this._gameService.isFinalFour().subscribe(data => {
      // console.log("The Final Four is happening now is: ", data['happening']);
      if (data['happening']) {
        this._region_id = 4;
      } else {
        this._region_id = 0;
      }
      // Attempted to use redux currentUser but doesn't render quick enough
      // Instead use _userService to get logged in user id, then tbracketService to get player's bracket id
      this._tbracketService.getListWithPlayer(this._userService.id).subscribe(data => {
        if (data.length > 0) {
          this._bracketToShow = data[0].id;
        } else {
          this._bracketToShow = null;
        }
        // console.log("The bracketToShow is ", this._bracketToShow)
        this.tbracketList = data;
      });
    });
  } //end ngOnInit()
  // This function is used to keep Brackets nav bar option 'active' regardless of parameter
  isActive(instruction) {
    // Set the second parameter to true if you want to require an exact match.
    return this.router.isActive(this.router.createUrlTree(instruction), false);
  }
  // Invoke logout() method on userService and re-direct user to "/logout/"
  logout() {
    this._userService.logout();
    this.router.navigate(['/logout']);
  }
  // Redux store methods
  readState() {
    const state = this.store.getState();
    this.currentUser = state.currentUser;
  }
  isUserAdmin() {
    if (this.currentUser) {
      return this.currentUser.is_staff == 1;
    } else return false;
  }
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HeaderComponent, "\u0275fac", function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_entry_service__WEBPACK_IMPORTED_MODULE_2__.EntryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_tbracket_service__WEBPACK_IMPORTED_MODULE_3__.TBracketService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_game_service__WEBPACK_IMPORTED_MODULE_4__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_store__WEBPACK_IMPORTED_MODULE_6__.AppStore));
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HeaderComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 19,
  vars: 13,
  consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-primary"], [1, "container-fluid"], [1, "navbar-brand", "p-2", 3, "routerLink"], ["src", "../static/front-end/assets/spreadpool_white_no_background_48x114.png", "alt", "Spreadpool"], [1, "d-flex", "ml-auto", "p-2", "flex-row", "order-2", "order-md-3", "align-middle"], ["class", "navbar-text", 3, "routerLink", 4, "ngIf"], [1, "form-inline"], ["type", "button", 1, "btn", "btn-outline-light", 3, "click"], [1, "p-2", "order-3", "order-md-2", "mob-display"], [1, "navbar-nav", "d-flex", "flex-row", "justify-content-between"], [1, "nav-item", 3, "routerLinkActive"], [1, "nav-link", 3, "routerLink"], ["class", "nav-item", 3, "active", 4, "ngIf"], ["class", "nav-item dropdown", "dropdown", "", 4, "ngIf"], [1, "navbar-text", 3, "routerLink"], [1, "nav-item"], ["class", "nav-link", 3, "routerLink", "fragment", 4, "ngIf"], [1, "nav-link", 3, "routerLink", "fragment"], ["dropdown", "", 1, "nav-item", "dropdown"], ["dropdownToggle", "", "href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 3, "click"], ["class", "dropdown-menu", "aria-labelledby", "navbarDropdown", 4, "dropdownMenu"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, HeaderComponent_a_5_Template, 2, 3, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "form", 6)(7, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_7_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Log Out");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 8)(10, "ul", 9)(11, "li", 10)(12, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "li", 10)(15, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "My Teams");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, HeaderComponent_li_17_Template, 2, 4, "li", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, HeaderComponent_li_18_Template, 4, 0, "li", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](8, _c8));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.currentUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c9));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](10, _c8));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](11, _c9));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](12, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx._bracketToShow);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isUserAdmin());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__.BsDropdownDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 9951:
/*!***********************************************!*\
  !*** ./src/app/ui/layout/layout.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ 4444);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 6675);




const _c0 = ["*"];
class LayoutComponent {
  constructor() {}
  ngOnInit() {}
}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(LayoutComponent, "\u0275fac", function LayoutComponent_Factory(t) {
  return new (t || LayoutComponent)();
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(LayoutComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LayoutComponent,
  selectors: [["app-layout"]],
  ngContentSelectors: _c0,
  decls: 4,
  vars: 0,
  consts: [[1, "container", "mb-3"]],
  template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-footer");
    }
  },
  dependencies: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 8086:
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiModule": () => (/* binding */ UiModule)
/* harmony export */ });
/* harmony import */ var C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout.component */ 9951);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 4444);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ 6675);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-routing.module */ 158);
/* harmony import */ var _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-bootstrap.module */ 4356);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









class UiModule {}
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(UiModule, "\u0275fac", function UiModule_Factory(t) {
  return new (t || UiModule)();
});
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(UiModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: UiModule
}));
(0,C_DjangoProjects_spreadpool_project_spreadpool_bracket_front_end_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(UiModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__.AppBootstrapModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeModule]
}));
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](UiModule, {
    declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__.AppBootstrapModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeModule],
    exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent]
  });
})();

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map