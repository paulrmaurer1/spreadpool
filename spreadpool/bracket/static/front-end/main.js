(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: routes, AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/picklist */ "./node_modules/primeng/picklist.js");
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_picklist__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _assign_brackets_assign_brackets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assign-brackets/assign-brackets.component */ "./src/app/admin/assign-brackets/assign-brackets.component.ts");
/* harmony import */ var _create_brackets_create_brackets_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-brackets/create-brackets.component */ "./src/app/admin/create-brackets/create-brackets.component.ts");
/* harmony import */ var _update_games_update_games_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./update-games/update-games.component */ "./src/app/admin/update-games/update-games.component.ts");
/* harmony import */ var _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./game-detail/game-detail.component */ "./src/app/admin/game-detail/game-detail.component.ts");
/* harmony import */ var _send_emails_send_emails_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./send-emails/send-emails.component */ "./src/app/admin/send-emails/send-emails.component.ts");
/* harmony import */ var _edit_roster_edit_roster_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-roster/edit-roster.component */ "./src/app/admin/edit-roster/edit-roster.component.ts");
/* harmony import */ var _edit_roster_edit_roster_textbox_edit_roster_textbox_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-roster/edit-roster-textbox/edit-roster-textbox.component */ "./src/app/admin/edit-roster/edit-roster-textbox/edit-roster-textbox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





 //Used on Assign Entries page, assign-brackets.component
 //Used on Update Game page, game-detail.component
 //Needed by CalendarModule







var routes = [
    { path: '', redirectTo: 'c-brackets', pathMatch: 'full' },
    { path: 'c-brackets', component: _create_brackets_create_brackets_component__WEBPACK_IMPORTED_MODULE_9__["CreateBracketsComponent"] },
    { path: 'a-brackets/:id', component: _assign_brackets_assign_brackets_component__WEBPACK_IMPORTED_MODULE_8__["AssignBracketsComponent"] },
    { path: 'u-games', component: _update_games_update_games_component__WEBPACK_IMPORTED_MODULE_10__["UpdateGamesComponent"] },
    { path: 's-emails', component: _send_emails_send_emails_component__WEBPACK_IMPORTED_MODULE_12__["SendEmailsComponent"] },
    { path: 'e-roster', component: _edit_roster_edit_roster_component__WEBPACK_IMPORTED_MODULE_13__["EditRosterComponent"] },
];
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _assign_brackets_assign_brackets_component__WEBPACK_IMPORTED_MODULE_8__["AssignBracketsComponent"],
                _create_brackets_create_brackets_component__WEBPACK_IMPORTED_MODULE_9__["CreateBracketsComponent"],
                _update_games_update_games_component__WEBPACK_IMPORTED_MODULE_10__["UpdateGamesComponent"],
                _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_11__["GameDetailComponent"],
                _send_emails_send_emails_component__WEBPACK_IMPORTED_MODULE_12__["SendEmailsComponent"],
                _edit_roster_edit_roster_component__WEBPACK_IMPORTED_MODULE_13__["EditRosterComponent"],
                _edit_roster_edit_roster_textbox_edit_roster_textbox_component__WEBPACK_IMPORTED_MODULE_14__["EditRosterTextboxComponent"],
            ],
            exports: [
                _assign_brackets_assign_brackets_component__WEBPACK_IMPORTED_MODULE_8__["AssignBracketsComponent"],
                _create_brackets_create_brackets_component__WEBPACK_IMPORTED_MODULE_9__["CreateBracketsComponent"],
                _update_games_update_games_component__WEBPACK_IMPORTED_MODULE_10__["UpdateGamesComponent"],
                _send_emails_send_emails_component__WEBPACK_IMPORTED_MODULE_12__["SendEmailsComponent"],
                _edit_roster_edit_roster_component__WEBPACK_IMPORTED_MODULE_13__["EditRosterComponent"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                primeng_picklist__WEBPACK_IMPORTED_MODULE_5__["PickListModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__["AngularFontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/assign-brackets/assign-brackets.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/assign-brackets/assign-brackets.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Fzc2lnbi1icmFja2V0cy9hc3NpZ24tYnJhY2tldHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/assign-brackets/assign-brackets.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/assign-brackets/assign-brackets.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--assign-brackets.component.html-->\r\n<br>\r\n<div class = \"container\">\r\n\t<div class = \"row justify-content-start\">\r\n\t\t<div class = \"col align-self-center\">\r\n\t\t\t<h6 *ngIf=\"_activeBracket\"><strong>Assign Entries to the \r\n\t\t\t<select class = \"select-option\" #tbracketSelect (change)=\"onBracketSelected(tbracketSelect.value)\">\r\n\t\t\t\t<option class = \"option\" *ngFor = \"let tbracket of _tbracketList\" \r\n\t\t\t\t[selected] = \"tbracket.id == _activeBracket.id\" [value]=\"tbracket.id\">{{tbracket.name}}</option>\r\n\t\t\t</select> Bracket</strong></h6>\r\n\r\n\r\n\t\t</div>\r\n\t\t<div class = \"col\">\r\n\t\t\t<button class=\"btn btn-secondary\" (click)=\"goBack()\">Go Back</button>\r\n\t\t\t&nbsp;\r\n\t\t\t<button class=\"btn btn-success\" (click)=\"saveAndGoBack()\">Save Assignments & Go Back</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<br>\r\n<div *ngIf=\"_unassignedEntries && _assignedEntries && _activeBracket\">\r\n\t<p-pickList [source] = \"_unassignedEntries\" [target] = \"_assignedEntries\" \r\n\t(onMoveToTarget)=\"recalculate()\" (onMoveToSource)=\"recalculate()\"\r\n\tsourceHeader=\"Unassigned Entries ({{ _unassignedEntries_len ? _unassignedEntries_len : '0' }})\" \r\n\ttargetHeader=\"{{_activeBracket.name}} Bracket Entries ({{ _assignEntries_len ? _assignEntries_len : '0'}})\" \r\n\t[responsive]=\"true\" filterBy=\"e_name\" dragdrop=\"true\" \r\n\tsourceFilterPlaceholder=\"Search by entry name\" targetFilterPlaceholder=\"Search by entry name\" \r\n\t[sourceStyle]=\"{'height':'500px'}\" [targetStyle]=\"{'height':'500px'}\">\r\n\t\t<ng-template let-entry pTemplate=\"item\">\r\n\t\t\t<div class=\"ui-helper-clearfix\">\r\n\t\t\t\t{{ entry.e_name }}\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t</p-pickList>\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/app/admin/assign-brackets/assign-brackets.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/assign-brackets/assign-brackets.component.ts ***!
  \********************************************************************/
/*! exports provided: AssignBracketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignBracketsComponent", function() { return AssignBracketsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_entry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/entry.service */ "./src/app/core/entry.service.ts");
/* harmony import */ var _core_tbracket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/tbracket.service */ "./src/app/core/tbracket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssignBracketsComponent = /** @class */ (function () {
    function AssignBracketsComponent(_entryService, route, _tbracketService, router) {
        this._entryService = _entryService;
        this.route = route;
        this._tbracketService = _tbracketService;
        this.router = router;
    }
    AssignBracketsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Find tbracket id from parameter of url and refresh data
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.refreshData(_this.id);
        });
        // Update bracket list to build drop-down menu contents
        this._tbracketService.getList().subscribe(function (data) {
            _this._tbracketList = data;
        });
    };
    AssignBracketsComponent.prototype.refreshData = function (tbracket_id) {
        // Update arrays to show in picklists as well as activeBracket for proper page display
        var _this = this;
        this._tbracketService.getTbracket(tbracket_id).subscribe(function (data) {
            _this._activeBracket = data;
        });
        this._entryService.getEntryListByBracket(tbracket_id).subscribe(function (data) {
            _this._assignedEntries = data;
            _this._assignEntries_len = _this._assignedEntries.length;
            // console.log("Entries that have bracket = ", this._activeBracket.name, " assigned: ", this._assignedEntries);
        });
        // source array = all entries without a tbracket assigned (_unassignedEntries)
        this._entryService.getEntryListbyNullBracket().subscribe(function (data) {
            _this._unassignedEntries = data;
            _this._unassignedEntries_len = _this._unassignedEntries.length;
            // console.log("Entries that don't have a bracket assigned: ", this._unassignedEntries);
        });
    };
    AssignBracketsComponent.prototype.saveAndGoBack = function () {
        var _this = this;
        //Update tbracket_id for all entries in target array isn't already assigned tbracket_id
        this._assignedEntries.forEach(function (entry) {
            if (entry.tbracket != _this._activeBracket.id) {
                entry.tbracket = _this._activeBracket.id;
                // console.log ("Updated entry is: ", entry);
                _this._entryService.updateEntry(entry).subscribe(function (data) {
                    // console.log ("Entry updated for...", entry, data);
                });
            }
        });
        //Update tbracket_id for all entries in source array whose tbracket isn't null
        this._unassignedEntries.forEach(function (entry) {
            if (entry.tbracket != null) {
                entry.tbracket = null;
                // console.log ("Updated entry is: ", entry);
                _this._entryService.updateEntry(entry).subscribe(function (data) {
                    // console.log ("Entry updated for...", entry, data);
                });
            }
        });
        this.router.navigate(['/admin/c-brackets']);
    }; //end saveAndGoBack()
    AssignBracketsComponent.prototype.goBack = function () {
        //Just go back to Admin->Create Brackets page without making changes
        this.router.navigate(['/admin/c-brackets']);
    }; //end goBack()
    // method to run each time an entry gets moved between lists, for updating title of each picklist
    AssignBracketsComponent.prototype.recalculate = function () {
        this._assignEntries_len = this._assignedEntries.length;
        this._unassignedEntries_len = this._unassignedEntries.length;
    };
    AssignBracketsComponent.prototype.onBracketSelected = function (tbracket_id) {
        this.refreshData(tbracket_id);
    };
    AssignBracketsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-brackets',
            template: __webpack_require__(/*! ./assign-brackets.component.html */ "./src/app/admin/assign-brackets/assign-brackets.component.html"),
            styles: [__webpack_require__(/*! ./assign-brackets.component.css */ "./src/app/admin/assign-brackets/assign-brackets.component.css")]
        }),
        __metadata("design:paramtypes", [_core_entry_service__WEBPACK_IMPORTED_MODULE_1__["EntryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_tbracket_service__WEBPACK_IMPORTED_MODULE_2__["TBracketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AssignBracketsComponent);
    return AssignBracketsComponent;
}());



/***/ }),

/***/ "./src/app/admin/create-brackets/create-brackets.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/create-brackets/create-brackets.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NyZWF0ZS1icmFja2V0cy9jcmVhdGUtYnJhY2tldHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/create-brackets/create-brackets.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/create-brackets/create-brackets.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--create-brackets.component.html-->\r\n<br>\r\n<h6><strong>Add Bracket</strong></h6>\r\n<div class=\"container\">\r\n\t<div class = \"row\">\r\n\t\t<div class = \"col\">\r\n\t\t\t<form [formGroup]=\"bracketAddForm\" (ngSubmit)=\"addBracket(bracketAddForm.value)\">\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t<div class=\"form-row\">\r\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t<!-- <label for=\"bracket_name\">Bracket</label> -->\r\n\t\t\t\t\t\t    <input type=\"text\" class=\"form-control\" placeholder=\"Type bracket name..\" \r\n\t\t\t\t\t\t    id=\"bracket_name\" [formControl] = \"bracket_name\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" id=\"submit\" class=\"btn btn-success\" \r\n\t\t\t\t\t\t\t[disabled]=\"!bracketAddForm.valid\">Add Bracket</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t\t<div class = \"col\">\r\n\t\t\t<span *ngIf=\"showEntriesMsg\" class=\"text-success\">{{ entriesMsg }}</span>\r\n\t\t\t<button class=\"btn btn-dark\" (click)=\"openEntriesModal(entries_template)\">Delete/Create All Entries</button>\r\n\t\t\t&nbsp;\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<br>\r\n<div class = \"d-flex flex-row\">\r\n\t<div class = \"p-2\">\r\n\t\t<h6><strong>Brackets</strong></h6>\r\n\t</div>\r\n\t<div class = \"p-2\">\r\n\t\t<a [routerLink]=\"\" (click)=\"resetList()\">refresh</a>\r\n\t</div>\r\n</div>\r\n\r\n<table class=\"table table-sm\">\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th scope=\"col\">#</th>\r\n\t\t\t<th scope=\"col\">Name</th>\r\n\t\t\t<th scope=\"col\" style=\"width: 10%\">Num Entries</th>\r\n\t\t\t<th scope=\"col\" style=\"width: 10%\">Id</th>\r\n\t\t\t<th scope=\"col\">Actions</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<tr *ngFor = \"let tbracket of _tbracketList; let i = index\">\r\n\t\t\t<th scope=\"row\" class=\"align-middle\">{{i + 1}}</th>\r\n\t\t\t<td class=\"align-middle\">{{ tbracket.name }}</td>\r\n\t\t\t<td class=\"align-middle\">{{ tbracket.entry_count}}</td>\r\n\t\t\t<td class=\"align-middle\">{{ tbracket.id }}</td>\r\n\t\t\t<td>\r\n\t\t\t\t<button class=\"btn btn-danger custom\" (click)=\"openDeleteModal(tbracket.id, tbracket.name)\">Delete</button>\r\n\t\t\t\t&nbsp;\r\n\t\t\t\t<button class=\"btn btn-warning\" (click)=\"openReassignModal(tbracket.id, tbracket.name)\">(Re)Assign</button>\r\n\t\t\t\t&nbsp;\r\n\t\t\t\t<button class=\"btn btn-info custom\" (click)=\"openResetModal(tbracket.id, tbracket.name)\">Reset</button>\r\n\t\t\t\t&nbsp;\r\n\t\t\t\t<button class=\"btn btn-success\" (click)=\"navToAssign(tbracket.id)\">Assign Entries</button>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<!-- Template modal that gets displayed when user clicks on Delete/Create All Entries -->\r\n<ng-template #entries_template>\r\n  <div class=\"modal-body text-center\">\r\n    <h6><small>You are about to delete all existing Bracket Entry assignments and create new Entries based on currently registered Users. This will unassign all Entries from Brackets. Would you like to proceed?</small></h6>\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"confirmDeleteEntries()\" >Yes, Proceed</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"declineDeleteEntries()\" >No, Go Back</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/admin/create-brackets/create-brackets.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/create-brackets/create-brackets.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateBracketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBracketsComponent", function() { return CreateBracketsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/tbracket.service */ "./src/app/core/tbracket.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_entry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/entry.service */ "./src/app/core/entry.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delete_bracket_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delete-bracket-modal.component */ "./src/app/admin/create-brackets/delete-bracket-modal.component.ts");
/* harmony import */ var _reassign_bracket_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reassign-bracket-modal.component */ "./src/app/admin/create-brackets/reassign-bracket-modal.component.ts");
/* harmony import */ var _reset_bracket_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reset-bracket-modal.component */ "./src/app/admin/create-brackets/reset-bracket-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CreateBracketsComponent = /** @class */ (function () {
    function CreateBracketsComponent(_tbracketService, _userService, fb, modalService, _entryService, router) {
        this._tbracketService = _tbracketService;
        this._userService = _userService;
        this.fb = fb;
        this.modalService = modalService;
        this._entryService = _entryService;
        this.router = router;
        this.entriesMsg = '';
        this.bracketAddForm = fb.group({
            'bracket_name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.bracket_name = this.bracketAddForm.controls['bracket_name']; // allows for other properties, e.g. error values
    }
    CreateBracketsComponent.prototype.ngOnInit = function () {
        this.new_bracket = { 'id': null, 'name': '', 'entry_count': null }; //initialize new_bracket
        this.resetList();
    };
    CreateBracketsComponent.prototype.ngOnChanges = function () {
        this.resetList();
        this.showEntriesMsg = false;
    };
    CreateBracketsComponent.prototype.addBracket = function (value) {
        var _this = this;
        this.new_bracket.name = this.bracket_name.value;
        // console.log ("New Bracket name is: ", this.new_bracket);
        this._tbracketService.createTbracket(this.new_bracket, this._userService.token).subscribe(function (data) {
            // console.log("Tbracket added:", value);
            _this.bracketAddForm.reset(); // clear out fields after form submit
            _this.resetList();
        });
    }; //end addBracket()
    CreateBracketsComponent.prototype.resetList = function () {
        var _this = this;
        //refresh Tbracket list
        this._tbracketService.getList().subscribe(function (data) {
            _this._tbracketList = data;
        });
        // console.log("Tbracket List has been reset")
    }; // end resetList()
    // function to invoke when click on 'Assign Entries' so navigates properly
    CreateBracketsComponent.prototype.navToAssign = function (tbracket_id) {
        this.router.navigate(['/admin/a-brackets', tbracket_id]);
    }; //end navToAssign
    // function to open confirmEntries template modal followed by button functions
    CreateBracketsComponent.prototype.openEntriesModal = function (template) {
        this.confirmEntriesModalRef = this.modalService.show(template, { class: 'modal-lg' });
    };
    CreateBracketsComponent.prototype.confirmDeleteEntries = function () {
        var _this = this;
        this._entryService.resetAllEntries().subscribe(function (data) {
            console.log("All Entries have been deleted, then re-created based on User data!");
            _this.confirmEntriesModalRef.hide();
            _this.entriesMsg = "All Entries have been deleted & re-created!";
            _this.showEntriesMsg = true;
            _this.resetList();
        });
    };
    CreateBracketsComponent.prototype.declineDeleteEntries = function () {
        this.confirmEntriesModalRef.hide();
    };
    // function to open delete-bracket-modal.component.ts component modal
    CreateBracketsComponent.prototype.openDeleteModal = function (bracket_id, bracket_name) {
        var _this = this;
        var initialState = {
            tbracket_id: bracket_id,
            tbracket_name: bracket_name
        };
        this.deleteModalRef = this.modalService.show(_delete_bracket_modal_component__WEBPACK_IMPORTED_MODULE_7__["DeleteModalComponent"], { initialState: initialState });
        this.modalService.onHidden.subscribe(function (reason) {
            // Upon modal being closed run these actions
            _this.resetList();
        });
    }; // end openDeleteModeal()
    // code for Bracket -> Reassign confirmation popup component modal
    CreateBracketsComponent.prototype.openReassignModal = function (bracket_id, bracket_name) {
        var _this = this;
        var initialState = {
            tbracket_id: bracket_id,
            tbracket_name: bracket_name
        };
        this.confirmReassignModalRef = this.modalService.show(_reassign_bracket_modal_component__WEBPACK_IMPORTED_MODULE_8__["ReassignModalComponent"], { initialState: initialState });
        this.modalService.onHidden.subscribe(function (reason) {
            // Upon modal being closed run these actions
            _this.resetList();
        });
    }; // end openReassignModal()
    // code for Bracket -> Reset confirmation popup component modal
    CreateBracketsComponent.prototype.openResetModal = function (bracket_id, bracket_name) {
        var _this = this;
        var initialState = {
            tbracket_id: bracket_id,
            tbracket_name: bracket_name
        };
        this.confirmResetModalRef = this.modalService.show(_reset_bracket_modal_component__WEBPACK_IMPORTED_MODULE_9__["ResetModalComponent"], { initialState: initialState });
        this.modalService.onHidden.subscribe(function (reason) {
            // Upon modal being closed run these actions
            _this.resetList();
        });
    }; // end openReassignModal()
    CreateBracketsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-brackets',
            template: __webpack_require__(/*! ./create-brackets.component.html */ "./src/app/admin/create-brackets/create-brackets.component.html"),
            styles: [__webpack_require__(/*! ./create-brackets.component.css */ "./src/app/admin/create-brackets/create-brackets.component.css")]
        }),
        __metadata("design:paramtypes", [_core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__["TBracketService"],
            _core_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _core_entry_service__WEBPACK_IMPORTED_MODULE_3__["EntryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], CreateBracketsComponent);
    return CreateBracketsComponent;
}()); // export class CreateBracketsComponent



/***/ }),

/***/ "./src/app/admin/create-brackets/delete-bracket-modal.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/create-brackets/delete-bracket-modal.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Confirm Bracket Deletion</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"deleteModalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <h6>Are you sure you want to delete the <strong>{{ tbracket_name }}</strong> bracket?</h6>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteModalRef.hide(); deleteBracket(tbracket_id)\">Delete</button>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/create-brackets/delete-bracket-modal.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/create-brackets/delete-bracket-modal.component.ts ***!
  \*************************************************************************/
/*! exports provided: DeleteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteModalComponent", function() { return DeleteModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _core_tbracket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/tbracket.service */ "./src/app/core/tbracket.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/user.service */ "./src/app/core/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeleteModalComponent = /** @class */ (function () {
    function DeleteModalComponent(deleteModalRef, _tbracketService, _userService) {
        this.deleteModalRef = deleteModalRef;
        this._tbracketService = _tbracketService;
        this._userService = _userService;
    }
    DeleteModalComponent.prototype.ngOnInit = function () {
    };
    DeleteModalComponent.prototype.deleteBracket = function (bracket_id) {
        // console.log("deleteBracket method invoked for Tbracket id:", bracket_id);
        this._tbracketService.deleteTbracket(bracket_id, this._userService.token).subscribe(function (data) {
            console.log("delete Tbracket successful");
        });
    };
    DeleteModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal-content',
            template: __webpack_require__(/*! ./delete-bracket-modal.component.html */ "./src/app/admin/create-brackets/delete-bracket-modal.component.html")
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _core_tbracket_service__WEBPACK_IMPORTED_MODULE_2__["TBracketService"],
            _core_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], DeleteModalComponent);
    return DeleteModalComponent;
}());



/***/ }),

/***/ "./src/app/admin/create-brackets/reassign-bracket-modal.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/create-brackets/reassign-bracket-modal.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Confirm Bracket Reassignment</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"confirmReassignModalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <h6>Are you sure you want to (Re)Assign the <strong>{{ tbracket_name }}</strong> bracket? This will randomly assign\r\n  new original & active teams to every entry, reset Round 1 matchups and clear out Round 2-6 matchups.</h6>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-warning\" (click)=\"confirmReassignModalRef.hide(); reassignBracket(tbracket_id)\">(Re)Assign</button>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/create-brackets/reassign-bracket-modal.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/create-brackets/reassign-bracket-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: ReassignModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReassignModalComponent", function() { return ReassignModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _core_tbracket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/tbracket.service */ "./src/app/core/tbracket.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/user.service */ "./src/app/core/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReassignModalComponent = /** @class */ (function () {
    function ReassignModalComponent(confirmReassignModalRef, _tbracketService, _userService) {
        this.confirmReassignModalRef = confirmReassignModalRef;
        this._tbracketService = _tbracketService;
        this._userService = _userService;
    }
    ReassignModalComponent.prototype.ngOnInit = function () {
    };
    ReassignModalComponent.prototype.reassignBracket = function (bracket_id) {
        // console.log("Tbracket id for re-assignment is", bracket_name);
        this._tbracketService.reassignTbracket(bracket_id, this._userService.token).subscribe(function (data) {
            console.log("Tbracket id:", bracket_id, " entries re-assigned!");
        });
    };
    ReassignModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal-content',
            template: __webpack_require__(/*! ./reassign-bracket-modal.component.html */ "./src/app/admin/create-brackets/reassign-bracket-modal.component.html")
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _core_tbracket_service__WEBPACK_IMPORTED_MODULE_2__["TBracketService"],
            _core_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ReassignModalComponent);
    return ReassignModalComponent;
}());



/***/ }),

/***/ "./src/app/admin/create-brackets/reset-bracket-modal.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin/create-brackets/reset-bracket-modal.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Confirm Bracket Reset</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"confirmResetModalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <h6>Are you sure you want to Reset the <strong>{{ tbracket_name }}</strong> bracket? This will set all active teams = original teams, reset all Round 1 matchups, and clear out Round 2-6 matchups for this bracket.</h6>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-info\" (click)=\"confirmResetModalRef.hide(); resetBracket(tbracket_id, tbracket_name)\">Reset</button>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/create-brackets/reset-bracket-modal.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/create-brackets/reset-bracket-modal.component.ts ***!
  \************************************************************************/
/*! exports provided: ResetModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetModalComponent", function() { return ResetModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _core_tbracket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/tbracket.service */ "./src/app/core/tbracket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResetModalComponent = /** @class */ (function () {
    function ResetModalComponent(confirmResetModalRef, _tbracketService) {
        this.confirmResetModalRef = confirmResetModalRef;
        this._tbracketService = _tbracketService;
    }
    ResetModalComponent.prototype.ngOnInit = function () {
    };
    ResetModalComponent.prototype.resetBracket = function (bracket_id, bracket_name) {
        this._tbracketService.resetTbracket(bracket_id).subscribe(function (data) {
            console.log(bracket_name, " Tbracket has been reset!");
        });
    };
    ResetModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal-content',
            template: __webpack_require__(/*! ./reset-bracket-modal.component.html */ "./src/app/admin/create-brackets/reset-bracket-modal.component.html")
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _core_tbracket_service__WEBPACK_IMPORTED_MODULE_2__["TBracketService"]])
    ], ResetModalComponent);
    return ResetModalComponent;
}());



/***/ }),

/***/ "./src/app/admin/edit-roster/edit-roster-textbox/edit-roster-textbox.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/edit-roster/edit-roster-textbox/edit-roster-textbox.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXQtcm9zdGVyL2VkaXQtcm9zdGVyLXRleHRib3gvZWRpdC1yb3N0ZXItdGV4dGJveC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/edit-roster/edit-roster-textbox/edit-roster-textbox.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/edit-roster/edit-roster-textbox/edit-roster-textbox.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EditRosterTextboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRosterTextboxComponent", function() { return EditRosterTextboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditRosterTextboxComponent = /** @class */ (function () {
    function EditRosterTextboxComponent() {
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(EditRosterTextboxComponent.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        set: function (val) {
            this._filter = val;
            this.changed.emit(this.filter); //Raise changed event
        },
        enumerable: true,
        configurable: true
    });
    EditRosterTextboxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], EditRosterTextboxComponent.prototype, "filter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EditRosterTextboxComponent.prototype, "changed", void 0);
    EditRosterTextboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-roster-textbox',
            // templateUrl: './edit-roster-textbox.component.html',
            template: "\n        Search by Name/Email: <input type=\"text\" [(ngModel)]=\"filter\" />\n    ",
            styles: [__webpack_require__(/*! ./edit-roster-textbox.component.css */ "./src/app/admin/edit-roster/edit-roster-textbox/edit-roster-textbox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditRosterTextboxComponent);
    return EditRosterTextboxComponent;
}());



/***/ }),

/***/ "./src/app/admin/edit-roster/edit-roster.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/edit-roster/edit-roster.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXQtcm9zdGVyL2VkaXQtcm9zdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/edit-roster/edit-roster.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/edit-roster/edit-roster.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--edit-roster.component.html-->\n<br>\n<h4>Players</h4>\n<!-- <div [class.loader] = \"loading\"> -->\n<div>\n<app-edit-roster-textbox (changed)=\"filter($event)\"></app-edit-roster-textbox>\n<br>\n<br>\n<table class=\"table table-sm\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th scope=\"col\">#</th>\n\t\t\t<th scope=\"col\" (click)=\"sort('last_name')\" class=\"cursor-pointer\">Name\n\t\t\t\t<fa *ngIf=\"_property=='last_name' && _direction==1\" name=\"caret-down\"></fa>\n\t\t\t\t<fa *ngIf=\"_property=='last_name' && _direction==-1\" name=\"caret-up\"></fa>\n\t\t\t</th>\n      <th scope=\"col\">Email</th>\n\t\t\t<th scope=\"col\" (click)=\"sort('num_entries')\" class=\"cursor-pointer\">Num Entries\n\t\t\t\t<fa *ngIf=\"_property=='num_entries' && _direction==1\" name=\"caret-down\"></fa>\n\t\t\t\t<fa *ngIf=\"_property=='num_entries' && _direction==-1\" name=\"caret-up\"></fa>\n\t\t\t</th>\n\t\t\t<th scope=\"col\">(S)ame/(D)iff</th>\n      <th scope=\"col\" (click)=\"sort('paid')\" class=\"cursor-pointer\">Paid?\n        <fa *ngIf=\"_property=='paid' && _direction==1\" name=\"check-square-o\"></fa>\n\t\t\t\t<fa *ngIf=\"_property=='paid' && _direction==-1\" name=\"square-o\"></fa>\n      </th>\n      <!-- <th scope=\"col\">Paid?</th> -->\n\t\t\t<th scope=\"col\" style=\"width: 5%\">Edit</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor = \"let player of _filteredRoster; let i = index\">\n\t\t\t<th scope=\"row\">{{i + 1}}</th>\n\t\t\t<td>{{ player.first_name }}&nbsp;{{ player.last_name }}</td>\n      <td>{{ player.email }}</td>\n\t\t\t<td>{{ player.num_entries }}</td>\n\t\t\t<td>{{ player.num_entries == 1 ? '-' : player.mult_entry_type }}</td>\n      <!-- <td>{{ player.paid }}</td> -->\n      <!-- <td><fa name = '{{ player.paid == true ? \"check-square-o\" : \"square-o\" }}'></fa></td> -->\n      <td>{{ player.paid == true ? 'YES' : 'NO' }}</td>\n      <td>\n           <fa name=\"edit\" class = \"cursor-pointer\" tooltip = \"Edit Profile\" (click)=\"openAdminProfileModal(player)\"></fa>\t\t\t\t\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\n<br>\n</div>"

/***/ }),

/***/ "./src/app/admin/edit-roster/edit-roster.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/edit-roster/edit-roster.component.ts ***!
  \************************************************************/
/*! exports provided: EditRosterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRosterComponent", function() { return EditRosterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/player.service */ "./src/app/core/player.service.ts");
/* harmony import */ var _core_sorter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sorter.service */ "./src/app/core/sorter.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _profile_form_modal_admin_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../profile-form-modal/admin-profile-form-modal.component */ "./src/app/profile-form-modal/admin-profile-form-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditRosterComponent = /** @class */ (function () {
    function EditRosterComponent(_playerService, _modalService, _sorterService) {
        this._playerService = _playerService;
        this._modalService = _modalService;
        this._sorterService = _sorterService;
        this._direction = 1;
    }
    EditRosterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._playerService.getList().subscribe(function (data) {
            _this._filteredRoster = _this._roster = data;
        });
    };
    EditRosterComponent.prototype.openAdminProfileModal = function (_player) {
        var initialState = {
            id: _player.id,
            profile_user: _player
        };
        this.bsModalRef = this._modalService.show(_profile_form_modal_admin_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_4__["AdminProfileFormModalComponent"], { initialState: initialState });
        this._modalService.onHidden.subscribe(function () {
            // Update and re-display roster so any changes are reflected in what the user sees on screen
            // this._playerService.getList().subscribe(data => {
            // 	this._filteredRoster = data;
            // 	if (this._property) {
            // 		this.sort(this._property);
            // 	}
            // });
            // console.log("_property = ", this._property, " _direction = ", this._direction)
        });
    };
    EditRosterComponent.prototype.filter = function (data) {
        // Function that filters the Roster list based on what a user types in the edit-roster-textbox component
        if (data) {
            this._filteredRoster = this._roster.filter(function (item) { return item.full_name.toLowerCase().indexOf(data.toLowerCase()) > -1
                || item.email.toLowerCase().indexOf(data.toLowerCase()) > -1; });
        }
        else {
            this._filteredRoster = this._roster;
        }
    };
    EditRosterComponent.prototype.sort = function (prop) {
        this._sorterService.sort(this._filteredRoster, prop);
        this._property = prop;
        this._direction = (this._property === prop) ? this._direction * -1 : 1;
        // console.log ("property = ", this._property, " & direction = ", this._direction);
    };
    EditRosterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-roster',
            template: __webpack_require__(/*! ./edit-roster.component.html */ "./src/app/admin/edit-roster/edit-roster.component.html"),
            styles: [__webpack_require__(/*! ./edit-roster.component.css */ "./src/app/admin/edit-roster/edit-roster.component.css")]
        }),
        __metadata("design:paramtypes", [_core_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _core_sorter_service__WEBPACK_IMPORTED_MODULE_2__["SorterService"]])
    ], EditRosterComponent);
    return EditRosterComponent;
}());



/***/ }),

/***/ "./src/app/admin/game-detail/game-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/game-detail/game-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2dhbWUtZGV0YWlsL2dhbWUtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/game-detail/game-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/game-detail/game-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--game-detail.component.html-->\r\n<form [formGroup]=\"gameUpdateForm\" (ngSubmit)=\"updateGame()\">\r\n\t<div class=\"container\">\r\n\t\t<span *ngIf = \"showMsg\" class=\"text-success\">{{msg}}</span>\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"col non-form-element\"><strong>Game id: </strong>{{ _game.id }}</div>\r\n\t\t\t<div class=\"col non-form-element\"><strong>Region: </strong>{{ _game.region }}</div>\r\n      <div class=\"form-group col\"></div>\r\n\t\t</div>\r\n\t\t\t\r\n\t\t<div class=\"form-row align-items-center\">\r\n\t\t\t<div class=\"col non-form-element\"><strong>Team 1: </strong>{{ _game.team1 }}</div>\r\n\t\t\t<div class=\"form-group col\">\r\n\t\t\t\t<label for=\"team1_score\">Team 1 Score:</label>\r\n\t\t\t    <input type=\"number\" class=\"form-control\"\r\n\t\t\t    id=\"team1_score\" [formControl] = \"team1_score\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col\">\r\n\t\t\t\t<label for=\"spread\">Game Spread:</label>\r\n\t\t\t    <input type=\"number\" class=\"form-control\"\r\n\t\t\t    id=\"spread\" [formControl] = \"spread\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-row align-items-center\">\r\n\t\t\t<div class=\"col non-form-element\"><strong>Team 2: </strong>{{ _game.team2 }}</div>\r\n\t\t\t<div class=\"form-group col\">\r\n\t\t\t\t<label for=\"team2_score\">Team 2 Score:</label>\r\n\t\t\t    <input type=\"number\" class=\"form-control\"\r\n\t\t\t    id=\"team2_score\" [formControl] = \"team2_score\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col\"></div>\r\n\t\t</div>\r\n    <div class=\"form-row align-items-center\">\r\n      <div class=\"col non-form-element\"><strong>Game Date/Time:</strong></div>\r\n      <div class=\"form-group col\">\r\n        <label for=\"game_date\">Date:&nbsp;</label>\r\n        <p-calendar \r\n          [formControl]=\"game_date\" \r\n          dateFormat=\"yy-mm-dd\" \r\n          dataType=\"string\"\r\n          id=\"game_date\"\r\n          >\r\n        </p-calendar>\r\n      </div>\r\n      <div class=\"form-group col\">\r\n        <label for=\"game_time\">Time (ET):&nbsp;</label>\r\n        <p-calendar \r\n          [formControl]=\"game_time\" \r\n          [timeOnly]=\"true\" \r\n          [hourFormat]=\"12\" \r\n          dataType=\"string\"\r\n          id=\"game_time\"\r\n          >\r\n        </p-calendar>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row align-items-center\">\r\n      <div class=\"col non-form-element\"><strong>Send Email?:</strong></div>\r\n      <div class=\"form-group col\">\r\n        <input type=\"checkbox\" [formControl]=\"send_email\"/>\r\n      </div>\r\n      <div class=\"form-group col\"></div>\r\n    </div>\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<button type=\"submit\" id=\"submit\" class=\"btn btn-success\" \r\n        [disabled]=\"!gameUpdateForm.valid\">Update Game</button>\r\n\t\t\t&nbsp;\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n<br>\r\n<br>\r\n<br>\r\n<div class = \"container\">\r\n\t<div class=\"row justify-content-start\">\r\n\t\t<div class = \"col\">\r\n\t\t\t<button class=\"btn btn-info\" (click)=\"resetGame()\">Reset Game</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/app/admin/game-detail/game-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/game-detail/game-detail.component.ts ***!
  \************************************************************/
/*! exports provided: GameDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameDetailComponent", function() { return GameDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/game.service */ "./src/app/core/game.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/functions */ "./src/app/shared/functions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameDetailComponent = /** @class */ (function () {
    function GameDetailComponent(_gameService, fb, router) {
        this._gameService = _gameService;
        this.fb = fb;
        this.router = router;
        this.msg = '';
        this._todayDate = new Date();
        // Update Game form setup
        this.gameUpdateForm = fb.group({
            // 'spread' : ['', Validators.required],
            'spread': ['',],
            'team1_score': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'team2_score': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'game_date': [this._todayDate.toISOString().substring(0, 10)],
            'game_time': ['12:00 PM'],
            'send_email': [true],
        });
        this.spread = this.gameUpdateForm.controls['spread'];
        this.team1_score = this.gameUpdateForm.controls['team1_score'];
        this.team2_score = this.gameUpdateForm.controls['team2_score'];
        this.game_date = this.gameUpdateForm.controls['game_date'];
        this.game_time = this.gameUpdateForm.controls['game_time'];
        this.send_email = this.gameUpdateForm.controls['send_email'];
    }
    Object.defineProperty(GameDetailComponent.prototype, "game", {
        get: function () {
            return this._game;
        },
        set: function (value) {
            if (value) {
                this._game = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    GameDetailComponent.prototype.ngOnInit = function () {
    };
    GameDetailComponent.prototype.ngOnChanges = function () {
        // console.log("game-detail component received _game update..", this._game);
        this.gameUpdateForm.patchValue(this._game);
        if (this._game.tipoff_date_time !== null) {
            // set form values from back-end tipoff_date_time if not null
            this.gameUpdateForm.controls['game_date'].patchValue(this._game.tipoff_date_time.substring(0, 10));
            this.gameUpdateForm.controls['game_time'].patchValue(Object(_shared_functions__WEBPACK_IMPORTED_MODULE_4__["convertTime24to12"])(this._game.tipoff_date_time.substring(11, 16)));
        }
        else { //otherwise set to today's date and 12:00PM
            this.gameUpdateForm.controls['game_date'].patchValue(this._todayDate.toISOString().substring(0, 10));
            this.gameUpdateForm.controls['game_time'].patchValue('12:00 PM');
        }
        this.gameUpdateForm.controls['send_email'].patchValue(true);
        this.showMsg = false;
    };
    GameDetailComponent.prototype.updateGame = function () {
        var _this = this;
        this.showMsg = false;
        this._game.team1_score = this.team1_score.value;
        this._game.spread = this.spread.value;
        this._game.team2_score = this.team2_score.value;
        if (this.game_date.value && this.game_time.value) {
            this._game.tipoff_date_time = this.game_date.value + " " + Object(_shared_functions__WEBPACK_IMPORTED_MODULE_4__["convertTime12to24"])(this.game_time.value);
        }
        else {
            this._game.tipoff_date_time = null;
        }
        // Depending on whether send_email checkbox is checked, send different request to backend
        if (this.send_email.value) {
            this._gameService.updateGame_sendEmail(this._game).subscribe(function (data) {
                _this.msg = "Game #: " + _this._game.id + " has been updated & email sent!";
            });
        }
        else {
            this._gameService.updateGame(this._game).subscribe(function (data) {
                _this.msg = "Game #: " + _this._game.id + " has been updated!";
            });
        }
        console.log("Game updated with:", this._game);
        this.showMsg = true;
    }; //end updateGame()
    GameDetailComponent.prototype.resetGame = function () {
        var _this = this;
        // console.log("Game id for reset is", this._game.id);
        this._gameService.resetGame(this._game.id).subscribe(function (data) {
            // console.log("Game #", this._game.id, "has been reset!");
            // navigate back to Retrieve Game page *** not working ***
            // this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
            // 	this.router.navigate(['/admin/u-games']));
            // retrieve newly updated game and update form
            _this._gameService.getGameDetails(_this._game.id).subscribe(function (data) {
                _this._game = data;
                _this.gameUpdateForm.reset();
                _this.gameUpdateForm.patchValue(_this._game);
                _this.msg = "Game #: " + _this._game.id + " has been reset!";
                _this.showMsg = true;
            });
        });
    }; //end resetGame()
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], GameDetailComponent.prototype, "game", null);
    GameDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-detail',
            template: __webpack_require__(/*! ./game-detail.component.html */ "./src/app/admin/game-detail/game-detail.component.html"),
            styles: [__webpack_require__(/*! ./game-detail.component.css */ "./src/app/admin/game-detail/game-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_core_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GameDetailComponent);
    return GameDetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/send-emails/send-emails.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/send-emails/send-emails.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NlbmQtZW1haWxzL3NlbmQtZW1haWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/send-emails/send-emails.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/send-emails/send-emails.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--send-emails.component.html-->\r\n\r\n<br>\r\n<h6><strong>Email Actions</strong></h6>\r\n<br>\r\n<table class=\"table table-sm\">\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th scope=\"col\">#</th>\r\n\t\t\t<th scope=\"col\">Name</th>\r\n\t\t\t<th scope=\"col\" style=\"width: 10%\">Num Entries</th>\r\n\t\t\t<th scope=\"col\" style=\"width: 10%\">Id</th>\r\n\t\t\t<th scope=\"col\">Email Actions</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<tr *ngFor = \"let tbracket of _tbracketList; let i = index\">\r\n\t\t\t<th scope=\"row\">{{i + 1}}</th>\r\n\t\t\t<td>{{ tbracket.name }}</td>\r\n\t\t\t<td>{{ tbracket.entry_count}}</td>\r\n\t\t\t<td>{{ tbracket.id }}</td>\r\n\t\t\t<td>\r\n\t\t\t\t<button class=\"btn btn-success\" (click)=\"openSendOrigModal(tbracket.id, tbracket.name)\">Send Orig Teams</button>\r\n\t\t\t\t&nbsp;\r\n\t\t\t\t<button class=\"btn btn-outline-success\" (click)=\"openSendGamesModal(tbracket.id, tbracket.name)\">Send Games</button>\r\n\t\t\t\t&nbsp;\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/admin/send-emails/send-emails.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/send-emails/send-emails.component.ts ***!
  \************************************************************/
/*! exports provided: SendEmailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendEmailsComponent", function() { return SendEmailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/tbracket.service */ "./src/app/core/tbracket.service.ts");
/* harmony import */ var _core_entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/entry.service */ "./src/app/core/entry.service.ts");
/* harmony import */ var _core_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/game.service */ "./src/app/core/game.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _send_orig_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send-orig-modal.component */ "./src/app/admin/send-emails/send-orig-modal.component.ts");
/* harmony import */ var _send_games_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-games-modal.component */ "./src/app/admin/send-emails/send-games-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SendEmailsComponent = /** @class */ (function () {
    function SendEmailsComponent(_tbracketService, _entryService, _gameService, modalService) {
        this._tbracketService = _tbracketService;
        this._entryService = _entryService;
        this._gameService = _gameService;
        this.modalService = modalService;
    }
    SendEmailsComponent.prototype.ngOnInit = function () {
        this.resetList();
    };
    SendEmailsComponent.prototype.resetList = function () {
        var _this = this;
        //refresh Tbracket list
        this._tbracketService.getList().subscribe(function (data) {
            _this._tbracketList = data;
        });
        // console.log("Tbracket List has been reset")
    }; // end resetList()
    SendEmailsComponent.prototype.openSendOrigModal = function (bracket_id, bracket_name) {
        var _this = this;
        this._entryService.getEntryListByBracket(bracket_id).subscribe(function (data) {
            var emailTargetList = data.map(function (target) {
                // Create an array of player names to display in modal
                return target.player;
            });
            // Create a unique list of targets users, eliminating duplicates of owner(s) having 2+ entries
            _this.emailTargetList = emailTargetList.filter(function (item, pos) {
                return emailTargetList.indexOf(item) == pos;
            });
            // console.log("List of players = ", this.emailTargetList);
            var initialState = {
                tbracket_id: bracket_id,
                tbracket_name: bracket_name,
                emailTargetList: _this.emailTargetList,
                num_targets: _this.emailTargetList.length
            };
            _this.sendOrigModalRef = _this.modalService.show(_send_orig_modal_component__WEBPACK_IMPORTED_MODULE_5__["SendOrigModalComponent"], { initialState: initialState });
        });
        this.modalService.onHidden.subscribe(function (reason) {
            // Upon modal being closed run these actions
            _this.resetList();
        });
        // console.log("Tbracket ", bracket_name, " with id: ", bracket_id, "will invoke send_emails API");
    };
    SendEmailsComponent.prototype.openSendGamesModal = function (bracket_id, bracket_name) {
        var _this = this;
        var initialState = {
            tbracket_id: bracket_id,
            tbracket_name: bracket_name,
        };
        this.sendGamesModalRef = this.modalService.show(_send_games_modal_component__WEBPACK_IMPORTED_MODULE_6__["SendGamesModalComponent"], { initialState: initialState });
        // })
        this.modalService.onHidden.subscribe(function (reason) {
            // Upon modal being closed run these actions
            _this.resetList();
        });
    };
    SendEmailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-emails',
            template: __webpack_require__(/*! ./send-emails.component.html */ "./src/app/admin/send-emails/send-emails.component.html"),
            styles: [__webpack_require__(/*! ./send-emails.component.css */ "./src/app/admin/send-emails/send-emails.component.css")]
        }),
        __metadata("design:paramtypes", [_core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__["TBracketService"],
            _core_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"],
            _core_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], SendEmailsComponent);
    return SendEmailsComponent;
}());



/***/ }),

/***/ "./src/app/admin/send-emails/send-games-modal.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/admin/send-emails/send-games-modal.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--send-games-modal.component.html-->\r\n\r\n<div *ngIf = \"gamesList\">\r\n\t<div class=\"modal-header\">\r\n\t\t<h4 class=\"modal-title pull-left\">Confirm Send Games Emails</h4>\r\n\t\t<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"sendGamesModalRef.hide()\">\r\n\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"modal-body\">\r\n\t\t<h6>Are you sure you want to send emails to players of <strong>{{ tbracket_name }}</strong></h6>\r\n\t\t<h6>bracket involved with games in Round #:\t\r\n\t\t<select class = \"select-option\" #troundSelect (change)=\"onOptionsSelected(troundSelect.value)\">\r\n\t\t\t<option class = \"option\" *ngFor = \"let value of tround_values\" [value]=\"value\">{{value}}</option>\r\n\t\t</select></h6>\r\n\t\t<br>\r\n\t\t<ol>\r\n\t\t\t<li *ngFor = \"let game of gamesList; let i = index\">{{ game }}</li>\r\n\t\t</ol>\r\n\t\t<p *ngIf = \"gamesList.length==0\" class=\"text-danger\">There aren't any new games with spreads posted that Round!</p>\r\n\t</div>\r\n\t<div class=\"modal-footer\">\r\n\t\t<button type=\"button\" class=\"btn btn-outline-success\" (click)=\"sendGamesModalRef.hide(); \r\n\t\tsendGamesEmail(tbracket_id, troundSelect.value)\">Send emails</button>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/send-emails/send-games-modal.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/send-emails/send-games-modal.component.ts ***!
  \*****************************************************************/
/*! exports provided: SendGamesModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendGamesModalComponent", function() { return SendGamesModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/game.service */ "./src/app/core/game.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SendGamesModalComponent = /** @class */ (function () {
    function SendGamesModalComponent(sendGamesModalRef, _gameService) {
        this.sendGamesModalRef = sendGamesModalRef;
        this._gameService = _gameService;
    }
    SendGamesModalComponent.prototype.ngOnInit = function () {
        this.tround_values = [1, 2, 3, 4, 5, 6]; // Tournament rounds possible from which to select games
        this.refreshGameListing(this.tround_values[0]); // Generate games listing based on Round 1 as default
    };
    SendGamesModalComponent.prototype.sendGamesEmail = function (bracket_id, round_id) {
        // console.log("Tbracket with id: ", bracket_id, "for tround", round_id, "will invoke emailGamesToOwners API");
        this._gameService.emailGamesToOwners(bracket_id, round_id).subscribe(function (data) {
            console.log("Tbracket with id: ", data['tbracketid'], " for Round", round_id, "owners have had today's games sent!");
        });
    };
    SendGamesModalComponent.prototype.onOptionsSelected = function (value) {
        // console.log("the selected value is " + value);
        this.refreshGameListing(value);
    };
    SendGamesModalComponent.prototype.refreshGameListing = function (value) {
        var _this = this;
        this._gameService.getGamesSpreadNoScore(value).subscribe(function (data) {
            _this.gamesList = data.map(function (target) {
                // Build an array of games to display in modal
                if (target.spread > 0) {
                    // return ' ' + target.team1 + ' [-' + target.spread + '.5] vs.' +target.team2;
                    _this.game_entry = ' ' + target.team1 + ' [-' + target.spread + '.5] vs.' + target.team2;
                }
                else if (target.spread == 0) {
                    // return ' ' + target.team1 + ' [PICK EM] vs. ' + target.team2;
                    _this.game_entry = ' ' + target.team1 + ' [PICK EM] vs. ' + target.team2;
                }
                else {
                    // return ' ' + target.team1 + ' vs. ' + target.team2 + ' [-' + -target.spread + '.5]';
                    _this.game_entry = ' ' + target.team1 + ' vs. ' + target.team2 + ' [-' + -target.spread + '.5]';
                }
                if (target.tipoff_date) {
                    _this.game_entry += ' at ' + target.tipoff_time + ' on ' + target.tipoff_date;
                }
                return _this.game_entry;
            });
        });
    };
    SendGamesModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal-content',
            template: __webpack_require__(/*! ./send-games-modal.component.html */ "./src/app/admin/send-emails/send-games-modal.component.html")
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _core_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]])
    ], SendGamesModalComponent);
    return SendGamesModalComponent;
}());



/***/ }),

/***/ "./src/app/admin/send-emails/send-orig-modal.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/send-emails/send-orig-modal.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--send-orig-modal.component.html-->\r\n\r\n<div class=\"modal-header\">\r\n\t<h4 class=\"modal-title pull-left\">Confirm Send Original Teams Email</h4>\r\n\t<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"sendOrigModalRef.hide()\">\r\n\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t</button>\r\n</div>\r\n<div class=\"modal-body\">\r\n\t<h6>Are you sure you want to send emails to these {{num_targets}} players of <strong>{{ tbracket_name }}</strong> bracket?</h6>\r\n\t<ol>\r\n\t\t<li *ngFor = \"let target of emailTargetList; let i = index\">{{ target }}</li>\r\n\t</ol>\r\n</div>\r\n<div class=\"modal-footer\">\r\n\t<button type=\"button\" class=\"btn btn-success\" (click)=\"sendOrigModalRef.hide(); \r\n\tsendOriginalTeamsEmail(tbracket_id)\">Send emails</button>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/send-emails/send-orig-modal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/send-emails/send-orig-modal.component.ts ***!
  \****************************************************************/
/*! exports provided: SendOrigModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendOrigModalComponent", function() { return SendOrigModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_entry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/entry.service */ "./src/app/core/entry.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SendOrigModalComponent = /** @class */ (function () {
    function SendOrigModalComponent(sendOrigModalRef, _entryService) {
        this.sendOrigModalRef = sendOrigModalRef;
        this._entryService = _entryService;
    }
    SendOrigModalComponent.prototype.ngOnInit = function () {
    };
    SendOrigModalComponent.prototype.sendOriginalTeamsEmail = function (bracket_id) {
        // console.log("Tbracket with id: ", bracket_id, "will invoke send_emails API");
        this._entryService.emailOrigTeamsToOwners(bracket_id).subscribe(function (data) {
            console.log("Tbracket with id: ", data['tbracketid'], " have had emails sent!");
        });
    };
    SendOrigModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal-content',
            template: __webpack_require__(/*! ./send-orig-modal.component.html */ "./src/app/admin/send-emails/send-orig-modal.component.html")
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _core_entry_service__WEBPACK_IMPORTED_MODULE_1__["EntryService"]])
    ], SendOrigModalComponent);
    return SendOrigModalComponent;
}());



/***/ }),

/***/ "./src/app/admin/update-games/update-games.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/update-games/update-games.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VwZGF0ZS1nYW1lcy91cGRhdGUtZ2FtZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/update-games/update-games.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/update-games/update-games.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--update-gamess.component.html-->\r\n<br>\r\n<h5><strong>Retrieve Game</strong></h5>\r\n<div class=\"container\">\r\n\t<div class = \"row\">\r\n\t\t<div class = \"col\">\r\n\t\t\t<form [formGroup]=\"gameRetrieveForm\" (ngSubmit)=\"retrieveGame()\">\r\n\t\t\t\t\t<div class=\"form-row\">\r\n\t\t\t\t\t\t<div class=\"form-group col-3\">\r\n\t\t\t\t\t\t    <input type=\"number\" min = \"1\" max = \"63\" class=\"form-control\" placeholder=\"Enter game id to Update..\"\r\n                id=\"game_id\" [formControl] = \"game_id\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" id=\"submit\" class=\"btn btn-success\" \r\n\t\t\t\t\t\t\t[disabled]=\"!gameRetrieveForm.valid\">Retrieve Game</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div> <!--row-->\r\n</div> <!--container-->\r\n<br>\r\n\r\n<h5><strong>Update Game</strong></h5>\r\n<app-game-detail *ngIf=\"_currentGame\" [game]=\"_currentGame\"></app-game-detail>\r\n<br>\r\n<h5><strong>Testing Features</strong></h5>\r\n<div class = \"col\">\r\n\t<button class=\"btn btn-dark\" (click)=\"replayAllGames()\">Replay All Games</button>\r\n\t&nbsp;\r\n\t<button class=\"btn btn-warning\" (click)=\"resetAllGames()\">Reset All Games (Testing Only)</button>\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/app/admin/update-games/update-games.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/update-games/update-games.component.ts ***!
  \**************************************************************/
/*! exports provided: UpdateGamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateGamesComponent", function() { return UpdateGamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/game.service */ "./src/app/core/game.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateGamesComponent = /** @class */ (function () {
    function UpdateGamesComponent(_gameService, fb) {
        this._gameService = _gameService;
        this.fb = fb;
        // Retrieve Game form setup
        this.gameRetrieveForm = fb.group({
            'game_id': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.game_id = this.gameRetrieveForm.controls['game_id']; // allows for other properties, e.g. error values
    }
    UpdateGamesComponent.prototype.ngOnInit = function () {
    };
    UpdateGamesComponent.prototype.retrieveGame = function () {
        var _this = this;
        this._gameService.getGameDetails(this.game_id.value).subscribe(function (data) {
            // console.log("Game retrieved is:", data);
            _this._currentGame = data;
            _this.gameRetrieveForm.reset(); // clear out fields after form submit
        });
    }; //end retrieveGame()
    UpdateGamesComponent.prototype.resetAllGames = function () {
        this._gameService.resetAllGames().subscribe(function (data) {
            console.log("All Games Reset!");
        });
    };
    UpdateGamesComponent.prototype.replayAllGames = function () {
        this._gameService.replayAllGames().subscribe(function (data) {
            console.log("All Games Replayed!");
        });
    };
    UpdateGamesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-games',
            template: __webpack_require__(/*! ./update-games.component.html */ "./src/app/admin/update-games/update-games.component.html"),
            styles: [__webpack_require__(/*! ./update-games.component.css */ "./src/app/admin/update-games/update-games.component.css")]
        }),
        __metadata("design:paramtypes", [_core_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], UpdateGamesComponent);
    return UpdateGamesComponent;
}());



/***/ }),

/***/ "./src/app/app-bootstrap.module.ts":
/*!*****************************************!*\
  !*** ./src/app/app-bootstrap.module.ts ***!
  \*****************************************/
/*! exports provided: AppBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBootstrapModule", function() { return AppBootstrapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
// ./src/app/app-bootstrap.module.ts
// This module is used to import 3rd party UI modules 
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// ngx-bootstrap modules





var AppBootstrapModule = /** @class */ (function () {
    function AppBootstrapModule() {
    }
    AppBootstrapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
            ],
            exports: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"]]
        })
    ], AppBootstrapModule);
    return AppBootstrapModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _core_user_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/user-resolver */ "./src/app/core/user-resolver.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _brackets_brackets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./brackets/brackets.component */ "./src/app/brackets/brackets.component.ts");
/* harmony import */ var _core_is_admin_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/is-admin.guard */ "./src/app/core/is-admin.guard.ts");
// ./src/app/app-routing.module.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        resolve: { loggedInUser: _core_user_resolver__WEBPACK_IMPORTED_MODULE_3__["UserResolver"] },
        runGuardsAndResolvers: 'always' },
    { path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
        resolve: { loggedInUser: _core_user_resolver__WEBPACK_IMPORTED_MODULE_3__["UserResolver"] } },
    { path: 'brackets/:id', component: _brackets_brackets_component__WEBPACK_IMPORTED_MODULE_7__["BracketsComponent"] },
    { path: 'logout',
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"],
        resolve: { url: 'externalUrlRedirectResolver' },
        data: { externalUrl: '/logout/' } },
    { path: 'admin',
        canActivate: [_core_is_admin_guard__WEBPACK_IMPORTED_MODULE_8__["IsAdminGuard"]],
        children: _admin_admin_module__WEBPACK_IMPORTED_MODULE_2__["routes"]
    },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [
                {
                    provide: 'externalUrlRedirectResolver',
                    useValue: function (route, state) { window.location.href = route.data.externalUrl; }
                },
                _core_user_resolver__WEBPACK_IMPORTED_MODULE_3__["UserResolver"],
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--src/app/app.component.html-->\r\n\r\n<app-layout>\r\n\r\n<router-outlet>\r\n<!-- Displays what is specified in path: '' to start, then whatever is clicked above -->\r\n</router-outlet>\r\n\r\n</app-layout>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/user.service */ "./src/app/core/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, _userService) {
        this.router = router;
        this._userService = _userService;
        this.title = 'front-end';
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
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
            }
            else {
                this._userService.beforeTourney = false;
            }
            ;
            this._userService.refreshToken();
            window.localStorage.clear();
        }
        // *** For testing purposes when launch Angular via 'ng serve --proxy-config proxyconfig.json' from project folder
        // Login via _userService to establish token with preset values ***
        else {
            this._userService.id = 1;
            this._userService.beforeTourney = false;
            this._userService.login({ 'email': 'paulrmaurer@yahoo.com', 'password': 'Quakers1!' });
            // this._userService.id = 2;
            // this._userService.login({'email': 'vcaratini@cubs.com', 'password': 'Maddon55'});
            // this._userService.id = 8;
            // this._userService.login({'email': 'bzobrist@cubs.com', 'password': 'Maddon55'});
            // this._userService.id = 29;
            // this._userService.login({'email': 'bzobrist@cubs.com', 'password': 'Maddon55'});
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.store */ "./src/app/app.store.ts");
/* harmony import */ var _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-bootstrap.module */ "./src/app/app-bootstrap.module.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _roster_roster_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./roster/roster.component */ "./src/app/roster/roster.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile-details/profile-details.component */ "./src/app/profile-details/profile-details.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _brackets_brackets_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./brackets/brackets.component */ "./src/app/brackets/brackets.component.ts");
/* harmony import */ var _profile_form_modal_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile-form-modal/profile-form-modal.component */ "./src/app/profile-form-modal/profile-form-modal.component.ts");
/* harmony import */ var _team_details_team_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./team-details/team-details.component */ "./src/app/team-details/team-details.component.ts");
/* harmony import */ var _admin_create_brackets_delete_bracket_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/create-brackets/delete-bracket-modal.component */ "./src/app/admin/create-brackets/delete-bracket-modal.component.ts");
/* harmony import */ var _admin_create_brackets_reassign_bracket_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/create-brackets/reassign-bracket-modal.component */ "./src/app/admin/create-brackets/reassign-bracket-modal.component.ts");
/* harmony import */ var _admin_create_brackets_reset_bracket_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/create-brackets/reset-bracket-modal.component */ "./src/app/admin/create-brackets/reset-bracket-modal.component.ts");
/* harmony import */ var _standings_standings_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./standings/standings.component */ "./src/app/standings/standings.component.ts");
/* harmony import */ var _standings_nav_standings_nav_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./standings-nav/standings-nav.component */ "./src/app/standings-nav/standings-nav.component.ts");
/* harmony import */ var _bracket_tab_bracket_tab_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./bracket-tab/bracket-tab.component */ "./src/app/bracket-tab/bracket-tab.component.ts");
/* harmony import */ var _roster_textbox_roster_textbox_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./roster-textbox/roster-textbox.component */ "./src/app/roster-textbox/roster-textbox.component.ts");
/* harmony import */ var _admin_send_emails_send_orig_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/send-emails/send-orig-modal.component */ "./src/app/admin/send-emails/send-orig-modal.component.ts");
/* harmony import */ var _admin_send_emails_send_games_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/send-emails/send-games-modal.component */ "./src/app/admin/send-emails/send-games-modal.component.ts");
/* harmony import */ var _profile_form_modal_partial_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./profile-form-modal/partial-profile-form-modal.component */ "./src/app/profile-form-modal/partial-profile-form-modal.component.ts");
/* harmony import */ var _profile_form_modal_admin_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./profile-form-modal/admin-profile-form-modal.component */ "./src/app/profile-form-modal/admin-profile-form-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _roster_roster_component__WEBPACK_IMPORTED_MODULE_12__["RosterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_14__["ProfileDetailsComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_15__["LogoutComponent"],
                _brackets_brackets_component__WEBPACK_IMPORTED_MODULE_16__["BracketsComponent"],
                _profile_form_modal_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_17__["ProfileFormModalComponent"],
                _team_details_team_details_component__WEBPACK_IMPORTED_MODULE_18__["TeamDetailsComponent"],
                _admin_create_brackets_delete_bracket_modal_component__WEBPACK_IMPORTED_MODULE_19__["DeleteModalComponent"],
                _admin_create_brackets_reassign_bracket_modal_component__WEBPACK_IMPORTED_MODULE_20__["ReassignModalComponent"],
                _admin_create_brackets_reset_bracket_modal_component__WEBPACK_IMPORTED_MODULE_21__["ResetModalComponent"],
                _standings_standings_component__WEBPACK_IMPORTED_MODULE_22__["StandingsComponent"],
                _standings_nav_standings_nav_component__WEBPACK_IMPORTED_MODULE_23__["StandingsNavComponent"],
                _bracket_tab_bracket_tab_component__WEBPACK_IMPORTED_MODULE_24__["BracketTabComponent"],
                _roster_textbox_roster_textbox_component__WEBPACK_IMPORTED_MODULE_25__["RosterTextboxComponent"],
                _admin_send_emails_send_orig_modal_component__WEBPACK_IMPORTED_MODULE_26__["SendOrigModalComponent"],
                _admin_send_emails_send_games_modal_component__WEBPACK_IMPORTED_MODULE_27__["SendGamesModalComponent"],
                _profile_form_modal_partial_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_28__["PartialProfileFormModalComponent"],
                _profile_form_modal_admin_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_29__["AdminProfileFormModalComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__["AppBootstrapModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_6__["UiModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__["AdminModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__["AngularFontAwesomeModule"],
            ],
            providers: [_app_store__WEBPACK_IMPORTED_MODULE_4__["appStoreProviders"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            entryComponents: [
                _profile_form_modal_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_17__["ProfileFormModalComponent"],
                _admin_create_brackets_delete_bracket_modal_component__WEBPACK_IMPORTED_MODULE_19__["DeleteModalComponent"],
                _admin_create_brackets_reassign_bracket_modal_component__WEBPACK_IMPORTED_MODULE_20__["ReassignModalComponent"],
                _admin_create_brackets_reset_bracket_modal_component__WEBPACK_IMPORTED_MODULE_21__["ResetModalComponent"],
                _admin_send_emails_send_orig_modal_component__WEBPACK_IMPORTED_MODULE_26__["SendOrigModalComponent"],
                _admin_send_emails_send_games_modal_component__WEBPACK_IMPORTED_MODULE_27__["SendGamesModalComponent"],
                _profile_form_modal_partial_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_28__["PartialProfileFormModalComponent"],
                _profile_form_modal_admin_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_29__["AdminProfileFormModalComponent"],
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.store.ts":
/*!******************************!*\
  !*** ./src/app/app.store.ts ***!
  \******************************/
/*! exports provided: AppStore, createAppStore, appStoreProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStore", function() { return AppStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAppStore", function() { return createAppStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appStoreProviders", function() { return appStoreProviders; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux-devtools/extension */ "./node_modules/@redux-devtools/extension/lib/esm/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _core_user_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/user.reducer */ "./src/app/core/user.reducer.ts");
// .src/app/app.store.ts

 //to work with Chrome redux devtools


var AppStore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('App.store');
function createAppStore() {
    return Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(_core_user_reducer__WEBPACK_IMPORTED_MODULE_3__["UserReducer"], Object(_redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["devToolsEnhancer"])());
}
var appStoreProviders = [
    { provide: AppStore, useFactory: createAppStore }
];


/***/ }),

/***/ "./src/app/bracket-tab/bracket-tab.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bracket-tab/bracket-tab.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYWNrZXQtdGFiL2JyYWNrZXQtdGFiLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bracket-tab/bracket-tab.component.html":
/*!********************************************************!*\
  !*** ./src/app/bracket-tab/bracket-tab.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- src/app/bracket-tab/bracket-tab.component.html -->\r\n<main>\r\n\t<ng-container *ngIf=\"_region_id <= 4\">\r\n\t\t<ul class=\"rnd-title\"  *ngFor=\"let number of [1,2,3,4]\">Round {{number}}</ul>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"_region_id == 5\">\r\n\t\t<ul class=\"rnd-title\">Final Four</ul>\r\n\t\t<ul class=\"rnd-title\">Finals</ul>\r\n\t\t<ul class=\"rnd-title\">Champion</ul>\r\n\t</ng-container>\r\n</main>\r\n\r\n<main *ngIf=\"_bracketGames && _bracketOwners\">\r\n\t<!-- First round games -->\r\n\t<ul class=\"round round-1\" *ngIf=\"_region_id <= 4\">\r\n\t\t<ng-template ngFor let-g [ngForOf]=\"_rnd_game_ids[1]\">\r\n\t\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-top\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team1_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team1}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team1_owner && _userService.id == _bracketOwners[g].team1_owner_id\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team1_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team1_owner && _userService.id != _bracketOwners[g].team1_owner_id\">\r\n\t\t\t\t\t<a [routerLink]=\"['/profile']\" [queryParams]=\"{id: _bracketOwners[g].team1_owner_id}\">\r\n\t\t\t\t\t\t({{ _bracketOwners[g].team1_owner }})\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam1Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-spacer\">\r\n        <ng-container *ngIf = \"_bracketGames[g].tipoff_date_time\">\r\n          {{ _bracketGames[g].tipoff_date }}&nbsp;\r\n          {{ _bracketGames[g].tipoff_time }}&nbsp;\r\n        </ng-container>\r\n      </li>\r\n\t\t\t<li class=\"game game-bottom\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team2_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team2}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team2_owner && _userService.id == _bracketOwners[g].team2_owner_id\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team2_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team2_owner && _userService.id != _bracketOwners[g].team2_owner_id\">\r\n\t\t\t\t\t<a [routerLink]=\"['/profile']\" [queryParams]=\"{id: _bracketOwners[g].team2_owner_id}\">\r\n\t\t\t\t\t\t({{ _bracketOwners[g].team2_owner }})\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam2Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t</ng-template>\r\n\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t</ul>\r\n\t<!-- Second round games -->\r\n\t<ul class=\"round round-2\" *ngIf=\"_region_id <= 4\">\r\n\t\t<ng-template ngFor let-g [ngForOf]=\"_rnd_game_ids[2]\">\r\n\t\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-top\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team1_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team1}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team1_owner && _userService.id == _bracketOwners[g].team1_owner_id\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team1_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team1_owner && _userService.id != _bracketOwners[g].team1_owner_id\">\r\n\t\t\t\t\t<a [routerLink]=\"['/profile']\" [queryParams]=\"{id: _bracketOwners[g].team1_owner_id}\">\r\n\t\t\t\t\t\t({{ _bracketOwners[g].team1_owner }})\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam1Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-spacer\">\r\n        <ng-container *ngIf = \"_bracketGames[g].tipoff_date_time\">\r\n          {{ _bracketGames[g].tipoff_date }}&nbsp;\r\n          {{ _bracketGames[g].tipoff_time }}&nbsp;\r\n        </ng-container>\r\n      </li>\r\n\t\t\t<li class=\"game game-bottom\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team2_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team2}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team2_owner && _userService.id == _bracketOwners[g].team2_owner_id\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team2_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team2_owner && _userService.id != _bracketOwners[g].team2_owner_id\">\r\n\t\t\t\t\t<a [routerLink]=\"['/profile']\" [queryParams]=\"{id: _bracketOwners[g].team2_owner_id}\">\r\n\t\t\t\t\t\t({{ _bracketOwners[g].team2_owner }})\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam2Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t</ng-template>\r\n\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t</ul>\r\n\t<!-- Third round games -->\r\n\t<ul class=\"round round-3\" *ngIf=\"_region_id <= 4\">\r\n\t\t<ng-template ngFor let-g [ngForOf]=\"_rnd_game_ids[3]\">\r\n\t\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-top\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team1_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team1}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team1_owner && _userService.id == _bracketOwners[g].team1_owner_id\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team1_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team1_owner && _userService.id != _bracketOwners[g].team1_owner_id\">\r\n\t\t\t\t\t<a [routerLink]=\"['/profile']\" [queryParams]=\"{id: _bracketOwners[g].team1_owner_id}\">\r\n\t\t\t\t\t\t({{ _bracketOwners[g].team1_owner }})\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam1Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-spacer\">\r\n        <ng-container *ngIf = \"_bracketGames[g].tipoff_date_time\">\r\n          {{ _bracketGames[g].tipoff_date }}&nbsp;\r\n          {{ _bracketGames[g].tipoff_time }}&nbsp;\r\n        </ng-container>\r\n      </li>\r\n\t\t\t<li class=\"game game-bottom\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team2_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team2}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team2_owner && _userService.id == _bracketOwners[g].team2_owner_id\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team2_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team2_owner && _userService.id != _bracketOwners[g].team2_owner_id\">\r\n\t\t\t\t\t<a [routerLink]=\"['/profile']\" [queryParams]=\"{id: _bracketOwners[g].team2_owner_id}\">\r\n\t\t\t\t\t\t({{ _bracketOwners[g].team2_owner }})\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam2Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t</ng-template>\r\n\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t</ul>\r\n\t<!-- Fourth round games -->\r\n\t<ul class=\"round round-4\" *ngIf=\"_region_id <= 4\">\r\n\t\t<ng-template ngFor let-g [ngForOf]=\"_rnd_game_ids[4]\">\r\n\t\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-top\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team1_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team1}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team1_owner && _userService.id == _bracketOwners[g].team1_owner_id\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team1_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team1_owner && _userService.id != _bracketOwners[g].team1_owner_id\">\r\n\t\t\t\t\t<a [routerLink]=\"['/profile']\" [queryParams]=\"{id: _bracketOwners[g].team1_owner_id}\">\r\n\t\t\t\t\t\t({{ _bracketOwners[g].team1_owner }})\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam1Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-spacer\">\r\n        <ng-container *ngIf = \"_bracketGames[g].tipoff_date_time\">\r\n          {{ _bracketGames[g].tipoff_date }}&nbsp;\r\n          {{ _bracketGames[g].tipoff_time }}&nbsp;\r\n        </ng-container>\r\n      </li>\r\n\t\t\t<li class=\"game game-bottom\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team2_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team2}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team2_owner && _userService.id == _bracketOwners[g].team2_owner_id\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team2_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team2_owner && _userService.id != _bracketOwners[g].team2_owner_id\">\r\n\t\t\t\t\t<a [routerLink]=\"['/profile']\" [queryParams]=\"{id: _bracketOwners[g].team2_owner_id}\">\r\n\t\t\t\t\t\t({{ _bracketOwners[g].team2_owner }})\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam2Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t</ng-template>\r\n\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t</ul>\r\n\t<!-- Fifth round games -->\r\n\t<ul class=\"round round-5\" *ngIf=\"_region_id == 5\">\r\n\t\t<ng-template ngFor let-g [ngForOf]=\"_rnd_game_ids[5]\">\r\n\t\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-title-top\" *ngIf=\"_regionList\">\r\n\t\t\t\t{{ g==61 ? _regionList[0].name : _regionList[2].name }} Region Champion\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-top\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team1_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team1}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team1_owner && _userService.id == _bracketOwners[g].team1_owner_id\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team1_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team1_owner && _userService.id != _bracketOwners[g].team1_owner_id\">\r\n\t\t\t\t\t<a [routerLink]=\"['/profile']\" [queryParams]=\"{id: _bracketOwners[g].team1_owner_id}\">\r\n\t\t\t\t\t\t({{ _bracketOwners[g].team1_owner }})\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam1Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-spacer\">\r\n        <ng-container *ngIf = \"_bracketGames[g].tipoff_date_time\">\r\n          {{ _bracketGames[g].tipoff_date }}&nbsp;\r\n          {{ _bracketGames[g].tipoff_time }}&nbsp;\r\n        </ng-container>\r\n      </li>\r\n\t\t\t<li class=\"game game-title-bottom\" *ngIf=\"_regionList\">\r\n\t\t\t\t{{ g==61 ? _regionList[1].name : _regionList[3].name }} Region Champion\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-bottom\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team2_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team2}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team2_owner && _userService.id == _bracketOwners[g].team2_owner_id\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team2_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team2_owner && _userService.id != _bracketOwners[g].team2_owner_id\">\r\n\t\t\t\t\t<a [routerLink]=\"['/profile']\" [queryParams]=\"{id: _bracketOwners[g].team2_owner_id}\">\r\n\t\t\t\t\t\t({{ _bracketOwners[g].team2_owner }})\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam2Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t</ng-template>\r\n\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t</ul>\r\n\t<!-- Sixth round games -->\r\n\t<ul class=\"round round-6\" *ngIf=\"_region_id == 5\">\r\n\t\t<ng-template ngFor let-g [ngForOf]=\"_rnd_game_ids[6]\">\r\n\t\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-title-top\"> </li>\r\n\t\t\t<li class=\"game game-top\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team1_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team1}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team1_owner && _userService.id == _bracketOwners[g].team1_owner_id\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team1_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team1_owner && _userService.id != _bracketOwners[g].team1_owner_id\">\r\n\t\t\t\t\t<a [routerLink]=\"['/profile']\" [queryParams]=\"{id: _bracketOwners[g].team1_owner_id}\">\r\n\t\t\t\t\t\t({{ _bracketOwners[g].team1_owner }})\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam1Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-spacer\">\r\n        <ng-container *ngIf = \"_bracketGames[g].tipoff_date_time\">\r\n          {{ _bracketGames[g].tipoff_date }}&nbsp;\r\n          {{ _bracketGames[g].tipoff_time }}&nbsp;\r\n        </ng-container>\r\n      </li>\r\n\t\t\t<li class=\"game game-bottom\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team2_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team2}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team2_owner && _userService.id == _bracketOwners[g].team2_owner_id\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team2_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team2_owner && _userService.id != _bracketOwners[g].team2_owner_id\">\r\n\t\t\t\t\t<a [routerLink]=\"['/profile']\" [queryParams]=\"{id: _bracketOwners[g].team2_owner_id}\">\r\n\t\t\t\t\t\t({{ _bracketOwners[g].team2_owner }})\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam2Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t</ng-template>\r\n\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t</ul>\r\n\t<!-- Champion -->\r\n\t<ul class=\"round\" *ngIf=\"getChampion() && _region_id==5\">\r\n\t\t<strong>&nbsp;&nbsp;***CHAMPION***</strong>\r\n\t\t<strong>&nbsp;{{_champion}} ({{_winningTeamOwner}})</strong>\r\n\t</ul>\r\n</main>"

/***/ }),

/***/ "./src/app/bracket-tab/bracket-tab.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bracket-tab/bracket-tab.component.ts ***!
  \******************************************************/
/*! exports provided: BracketTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BracketTabComponent", function() { return BracketTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_region_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/region.service */ "./src/app/core/region.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BracketTabComponent = /** @class */ (function () {
    function BracketTabComponent(_userService, _regionService) {
        this._userService = _userService;
        this._regionService = _regionService;
    }
    Object.defineProperty(BracketTabComponent.prototype, "bracketOwners", {
        //Inject this value from parent component and update team owners as parent bracket is clicked
        get: function () {
            return this._bracketOwners;
        },
        set: function (value) {
            if (value) {
                this._bracketOwners = value;
                // console.log ("Detail component bracketOwners for ", this._region_id, " Region", this._bracketOwners);
            }
        },
        enumerable: true,
        configurable: true
    });
    BracketTabComponent.prototype.ngOnInit = function () {
        // console.log ("Detail component bracketGames for ", this._region_id, " Region", this._bracketGames);
        var _this = this;
        //Create game id arrays for each Round with round # as index
        this._rnd_game_ids = {};
        this._rnd_game_ids[1] = Array.from({ length: 8 }, function (v, k) { return k + 1 + _this.getRdIncr(1); });
        this._rnd_game_ids[2] = Array.from({ length: 4 }, function (v, k) { return k + 33 + _this.getRdIncr(2); });
        this._rnd_game_ids[3] = Array.from({ length: 2 }, function (v, k) { return k + 49 + _this.getRdIncr(3); });
        this._rnd_game_ids[4] = Array.from({ length: 1 }, function (v, k) { return k + 57 + _this.getRdIncr(4); });
        this._rnd_game_ids[5] = [61, 62];
        this._rnd_game_ids[6] = [63];
        // console.log ("This region array of game numbers is", this._rnd_game_ids);
        // Retrieve list of regions to display in tabs, but only make this http call once for Final Four tab
        if (this._region_id == 5) {
            this._regionService.getRegionList().subscribe(function (data) {
                _this._regionList = data;
            });
        }
    };
    BracketTabComponent.prototype.getRdIncr = function (x) {
        //To identify proper increment to add to South Region game id arrays
        //to generate other regions' game ids
        switch (this._region_id) {
            case 1: {
                return 0;
                break;
            }
            case 2: {
                switch (x) {
                    case 1: {
                        return 8;
                        break;
                    }
                    case 2: {
                        return 4;
                        break;
                    }
                    case 3: {
                        return 2;
                        break;
                    }
                    case 4: {
                        return 1;
                        break;
                    }
                }
            }
            case 3: {
                switch (x) {
                    case 1: {
                        return 16;
                        break;
                    }
                    case 2: {
                        return 8;
                        break;
                    }
                    case 3: {
                        return 4;
                        break;
                    }
                    case 4: {
                        return 2;
                        break;
                    }
                }
            }
            case 4: {
                switch (x) {
                    case 1: {
                        return 24;
                        break;
                    }
                    case 2: {
                        return 12;
                        break;
                    }
                    case 3: {
                        return 6;
                        break;
                    }
                    case 4: {
                        return 3;
                        break;
                    }
                }
            }
        } // end outer switch
    }; //end getRdIncr(x)
    BracketTabComponent.prototype.getTeam1Result = function (game) {
        // To determine whether to show score (post-game) or spread (pre-game)
        if (game.team1_score > 0) {
            if (game.spread > 0) {
                return game.team1_score + '(' + (-game.spread - 0.5) + ')';
            }
            else if (game.spread == 0) {
                return game.team1_score + '(PK)';
            }
            else {
                return game.team1_score;
            }
        }
        else if (game.spread > 0) {
            return -game.spread - 0.5;
        }
        else if (game.spread == 0) {
            return 'PK';
        }
    }; // end getTeam1Result(game)
    BracketTabComponent.prototype.getTeam2Result = function (game) {
        // To determine whether to show score (post-game) or spread (pre-game)
        if (game.team2_score > 0) {
            if (game.spread < 0) {
                return game.team2_score + '(' + (game.spread - 0.5) + ')';
            }
            else {
                return game.team2_score;
            }
        }
        else if (game.spread < 0) {
            return game.spread - 0.5;
        }
    }; // end getTeam2Result(game)		
    BracketTabComponent.prototype.getChampion = function () {
        // To identify champion for display on bracket
        var isChampion = false;
        if (this._bracketGames[63] && this._bracketGames[63].team1_score && this._bracketGames[63].team2_score) {
            isChampion = true;
            // console.log("Determining championship info...", this._bracketGames[63], this._bracketOwners[63])
            if (this._bracketGames[63].team1_score > this._bracketGames[63].team2_score) {
                this._champion = this._bracketGames[63].team1;
            }
            else {
                this._champion = this._bracketGames[63].team2;
            }
            this._winningTeamOwner = this._bracketOwners[63].winner;
        }
        return isChampion;
    }; //end getChampion
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('region'),
        __metadata("design:type", Number)
    ], BracketTabComponent.prototype, "_region_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bracketGames'),
        __metadata("design:type", Array)
    ], BracketTabComponent.prototype, "_bracketGames", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], BracketTabComponent.prototype, "bracketOwners", null);
    BracketTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bracket-tab',
            template: __webpack_require__(/*! ./bracket-tab.component.html */ "./src/app/bracket-tab/bracket-tab.component.html"),
            styles: [__webpack_require__(/*! ./bracket-tab.component.css */ "./src/app/bracket-tab/bracket-tab.component.css")]
        }),
        __metadata("design:paramtypes", [_core_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _core_region_service__WEBPACK_IMPORTED_MODULE_2__["RegionService"]])
    ], BracketTabComponent);
    return BracketTabComponent;
}());



/***/ }),

/***/ "./src/app/brackets/brackets.component.css":
/*!*************************************************!*\
  !*** ./src/app/brackets/brackets.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYWNrZXRzL2JyYWNrZXRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/brackets/brackets.component.html":
/*!**************************************************!*\
  !*** ./src/app/brackets/brackets.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--brackets.component.html-->\r\n\r\n<small class=\"text-muted\">All times are Eastern Time (Click to see bracket)</small>\r\n<div class=\"brackets-nav\">\r\n    <nav class=\"navbar\">\r\n        <ul class=\"nav nav-pills\">\r\n    \t\t<li class = \"nav-item\" *ngFor = \"let tbracket of tbracketList\">\r\n    \t\t\t<a class = \"nav-link\" [routerLink]=\"['/brackets', tbracket.id]\"\r\n    \t\t\t[class.active]=\"isActive(tbracket.id)\"\r\n    \t\t\t>{{ tbracket.name }}</a>\r\n    \t\t</li>\r\n    \t</ul>\r\n    </nav>\r\n</div>\r\n<br>\r\n<div [class.loader] = \"loading\">\r\n  <tabset #staticTabs>\r\n    <tab heading={{regionList[0].name}} *ngIf=\"regionList\">\r\n        <app-bracket-tab *ngIf=\"region1Games && region1Owners\" \r\n            [region]=\"regionList[0].id\" [bracketGames]=\"region1Games\" [bracketOwners]=\"region1Owners\">\r\n    \t</app-bracket-tab>\r\n    </tab>\r\n    <tab heading={{regionList[1].name}} *ngIf=\"regionList\">\r\n    \t<app-bracket-tab *ngIf=\"region2Games && region2Owners\"  \r\n    \t\t[region]=\"regionList[1].id\" [bracketGames]=\"region2Games\" [bracketOwners]=\"region2Owners\">\r\n    \t</app-bracket-tab>\r\n    </tab>\r\n    <tab heading={{regionList[2].name}} *ngIf=\"regionList\">\r\n    \t<app-bracket-tab *ngIf=\"region3Games && region3Owners\"  \r\n    \t\t[region]=\"regionList[2].id\" [bracketGames]=\"region3Games\" [bracketOwners]=\"region3Owners\">\r\n    \t</app-bracket-tab>\r\n    </tab>\r\n    <tab heading={{regionList[3].name}} *ngIf=\"regionList\">\r\n    \t<app-bracket-tab *ngIf=\"region4Games && region4Owners\"  \r\n    \t\t[region]=\"regionList[3].id\" [bracketGames]=\"region4Games\" [bracketOwners]=\"region4Owners\">\r\n    \t</app-bracket-tab>\r\n    </tab>\r\n    <tab heading={{regionList[4].name}} *ngIf=\"regionList\">\r\n    \t<app-bracket-tab *ngIf=\"ffourOwners && ffourGames\"\r\n    \t\t[region]=\"regionList[4].id\" [bracketGames]=\"ffourGames\" [bracketOwners]=\"ffourOwners\">\r\n    \t</app-bracket-tab>\r\n    </tab>\r\n  </tabset>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/brackets/brackets.component.ts":
/*!************************************************!*\
  !*** ./src/app/brackets/brackets.component.ts ***!
  \************************************************/
/*! exports provided: BracketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BracketsComponent", function() { return BracketsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_tbracket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/tbracket.service */ "./src/app/core/tbracket.service.ts");
/* harmony import */ var _core_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/game.service */ "./src/app/core/game.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_region_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/region.service */ "./src/app/core/region.service.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BracketsComponent = /** @class */ (function () {
    function BracketsComponent(_tbracketService, _gameService, route, router, _userService, _regionService) {
        this._tbracketService = _tbracketService;
        this._gameService = _gameService;
        this.route = route;
        this.router = router;
        this._userService = _userService;
        this._regionService = _regionService;
    }
    BracketsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to activated route parameter and update activeBracket to pass to child components
        // Based on active bracket (in params), convert each Region's bracket owners (retrieved via Matchup table)
        // to indexed arrays for each Region
        // FYI - the following line would only work the first time the page is visited:
        // this.id = this.route.snapshot.params['id'];
        this.loading = true;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this._gameService.getNewGameWithMatchupDataList(_this.id).subscribe(function (data) {
                var region1Owners = Object.assign.apply(Object, [{}].concat(data
                    .filter(function (item) { return item.region_id == 1; })
                    .map(function (item) {
                    var _a;
                    return (_a = {}, _a[item['id']] = item, _a);
                })));
                _this.region1Owners = region1Owners;
                var region2Owners = Object.assign.apply(Object, [{}].concat(data
                    .filter(function (item) { return item.region_id == 2; })
                    .map(function (item) {
                    var _a;
                    return (_a = {}, _a[item['id']] = item, _a);
                })));
                _this.region2Owners = region2Owners;
                var region3Owners = Object.assign.apply(Object, [{}].concat(data
                    .filter(function (item) { return item.region_id == 3; })
                    .map(function (item) {
                    var _a;
                    return (_a = {}, _a[item['id']] = item, _a);
                })));
                _this.region3Owners = region3Owners;
                var region4Owners = Object.assign.apply(Object, [{}].concat(data
                    .filter(function (item) { return item.region_id == 4; })
                    .map(function (item) {
                    var _a;
                    return (_a = {}, _a[item['id']] = item, _a);
                })));
                _this.region4Owners = region4Owners;
                var ffourOwners = Object.assign.apply(Object, [{}].concat(data
                    .filter(function (item) { return item.region_id == 5; })
                    .map(function (item) {
                    var _a;
                    return (_a = {}, _a[item['id']] = item, _a);
                })));
                _this.ffourOwners = ffourOwners;
                _this.loading = false;
            });
        });
        // Retrieve game list & convert each Region's games into indexed arrays
        // for passing to child components for display
        // Only call this service 1x since game info doesn't change across brackets
        this._gameService.getGameList().subscribe(function (data) {
            var region1Games = Object.assign.apply(Object, [{}].concat(data
                .filter(function (item) { return item.region_id == 1; })
                .map(function (item) {
                var _a;
                return (_a = {}, _a[item['id']] = item, _a);
            })));
            _this.region1Games = region1Games;
            var region2Games = Object.assign.apply(Object, [{}].concat(data
                .filter(function (item) { return item.region_id == 2; })
                .map(function (item) {
                var _a;
                return (_a = {}, _a[item['id']] = item, _a);
            })));
            _this.region2Games = region2Games;
            var region3Games = Object.assign.apply(Object, [{}].concat(data
                .filter(function (item) { return item.region_id == 3; })
                .map(function (item) {
                var _a;
                return (_a = {}, _a[item['id']] = item, _a);
            })));
            _this.region3Games = region3Games;
            var region4Games = Object.assign.apply(Object, [{}].concat(data
                .filter(function (item) { return item.region_id == 4; })
                .map(function (item) {
                var _a;
                return (_a = {}, _a[item['id']] = item, _a);
            })));
            _this.region4Games = region4Games;
            var ffourGames = Object.assign.apply(Object, [{}].concat(data
                .filter(function (item) { return item.region_id == 5; })
                .map(function (item) {
                var _a;
                return (_a = {}, _a[item['id']] = item, _a);
            })));
            _this.ffourGames = ffourGames;
        });
        // Retrieve list of brackets for bracket navbar with brackets that player
        // belongs to sorted first
        this._tbracketService.getListWithPlayer(this._userService.id).subscribe(function (data) {
            _this.tbracketList = data;
        });
        // Retrieve list of regions to display in tabs
        this._regionService.getRegionList().subscribe(function (data) {
            _this.regionList = data;
            // Set active tab based on fragment contained in url, if it exists
            _this.route.fragment.subscribe(function (fragment) {
                if (fragment) {
                    var id = parseInt(fragment);
                    // console.log("Tab Id to navigate to is: ", id);
                    // Need the below delay in order for tabs to be rendered 
                    // (lengthy call to backend to retrieve data) increase if necessary
                    setTimeout(function () { _this.staticTabs.tabs[id].active = true; }, 200);
                }
            });
        });
    }; //end ngOnInit
    // Function to determine which bracket navbar to make 'active' in template based on route param
    BracketsComponent.prototype.isActive = function (navbarId) {
        // return true to highlight nav bar item that is = route paramter
        return navbarId == this.id;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('staticTabs'),
        __metadata("design:type", ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsetComponent"])
    ], BracketsComponent.prototype, "staticTabs", void 0);
    BracketsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brackets',
            template: __webpack_require__(/*! ./brackets.component.html */ "./src/app/brackets/brackets.component.html"),
            styles: [__webpack_require__(/*! ./brackets.component.css */ "./src/app/brackets/brackets.component.css")]
        }),
        __metadata("design:paramtypes", [_core_tbracket_service__WEBPACK_IMPORTED_MODULE_2__["TBracketService"],
            _core_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _core_region_service__WEBPACK_IMPORTED_MODULE_5__["RegionService"]])
    ], BracketsComponent);
    return BracketsComponent;
}()); //end class



/***/ }),

/***/ "./src/app/core/entry.service.ts":
/*!***************************************!*\
  !*** ./src/app/core/entry.service.ts ***!
  \***************************************/
/*! exports provided: EntryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryService", function() { return EntryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/core/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//entryUrl is base url for entries table end point
var entryUrl = '/api/entries/';
var entry_bracketsUrl = '/api/entry_brackets/';
var entry_namesUrl = '/api/entry_names/';
var entry_standingsURL = '/api/entry_standings/';
var entry_myteamsURL = 'api/entry_myteams/';
var EntryService = /** @class */ (function () {
    function EntryService(http, _userService) {
        this.http = http;
        this._userService = _userService;
    }
    //method to retrieve entry details list for a player
    EntryService.prototype.getEntryDetailsListByPlayer = function (id) {
        return this.http.get(entryUrl + '?playerid=' + id);
    };
    //method to retrieve entry bracket list for a player
    EntryService.prototype.getEntryBracketListByPlayer = function (id) {
        return this.http.get(entry_bracketsUrl + '?playerid=' + id);
    };
    //method to retrieve all entries matching ?tbracketid= value
    EntryService.prototype.getEntryListByBracket = function (tbracket_id) {
        return this.http.get(entry_namesUrl + '?tbracketid=' + tbracket_id);
    };
    //method to retrieve all entries whose tbracketid = null
    EntryService.prototype.getEntryListbyNullBracket = function () {
        return this.http.get(entry_namesUrl + '?no_bracket');
    };
    //method to retrieve Entry by tbracket_id & team_id (originally used for Bracket display of owners)
    EntryService.prototype.getEntryNameByTeamAndBracket = function (b_id, t_id) {
        return this.http.get(entry_namesUrl + '?tbracketid=' + b_id + '&teamid=' + t_id);
    };
    //method for updating Entry once assigned to a Bracket
    EntryService.prototype.updateEntry = function (entry) {
        return this.http.patch(entry_namesUrl + entry.id + '/', JSON.stringify(entry), this.getHttpOptions());
    };
    //method for creating all Entry data based on User info
    EntryService.prototype.resetAllEntries = function () {
        return this.http.get(entryUrl + 'reset_all/', this.getHttpOptions());
    };
    //method to retrieve all entries matching ?tbracketid= value
    EntryService.prototype.getEntryStandings = function (tbracket_id) {
        return this.http.get(entry_standingsURL + '?tbracketid=' + tbracket_id);
    };
    //method to generate emails to all Owners of entries within a particular bracket
    EntryService.prototype.emailOrigTeamsToOwners = function (tbracket_id) {
        return this.http.get(entryUrl + 'email_orig_teams_to_owners/' + '?tbracketid=' + tbracket_id);
    };
    //method to retrieve entry details list for a player
    EntryService.prototype.getEntryDetailsListMyTeamsByPlayer = function (id) {
        return this.http.get(entry_myteamsURL + '?playerid=' + id);
    };
    // helper function to build the HTTP headers
    EntryService.prototype.getHttpOptions = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this._userService.token,
            })
        };
    };
    EntryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], EntryService);
    return EntryService;
}());



/***/ }),

/***/ "./src/app/core/game.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/game.service.ts ***!
  \**************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/core/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//gameUrl is base url for users table end point
var gameUrl = '/api/games/';
var new_game_matchupURL = '/api/games_new_matchups/';
var GameService = /** @class */ (function () {
    function GameService(http, _userService) {
        this.http = http;
        this._userService = _userService;
    }
    //method to retrieve game details for a particular game
    GameService.prototype.getGameDetails = function (id) {
        return this.http.get(gameUrl + id + '/');
    };
    //method to retrieve list of games
    GameService.prototype.getGameList = function () {
        return this.http.get(gameUrl);
    };
    //method to retrieve all games in which a particular team is playing
    GameService.prototype.getGameListByTeam = function (team_id) {
        return this.http.get(gameUrl + '?teamid=' + team_id);
    };
    //method to retrieve all games from a particular region
    GameService.prototype.getGameListByRegion = function (region_id) {
        return this.http.get(gameUrl + '?regionid=' + region_id);
    };
    //endpoint to return all games with owner info for a particular bracket
    GameService.prototype.getNewGameWithMatchupDataList = function (tbracket_id) {
        return this.http.get(new_game_matchupURL + '?tbracketid=' + tbracket_id);
    };
    GameService.prototype.updateGame = function (game) {
        return this.http.patch(gameUrl + game.id + '/', JSON.stringify(game), this.getHttpOptions());
    };
    GameService.prototype.updateGame_sendEmail = function (game) {
        return this.http.patch(gameUrl + game.id + '/?send_email=true', JSON.stringify(game), this.getHttpOptions());
    };
    GameService.prototype.resetGame = function (id) {
        return this.http.get(gameUrl + id + '/reset/', this.getHttpOptions());
    };
    GameService.prototype.resetAllGames = function () {
        return this.http.get(gameUrl + 'reset_all/', this.getHttpOptions());
    };
    GameService.prototype.replayAllGames = function () {
        return this.http.get(gameUrl + 'replay_all/', this.getHttpOptions());
    };
    GameService.prototype.isFinalFour = function () {
        return this.http.get(gameUrl + 'final_four/');
    };
    GameService.prototype.getGamesSpreadNoScore = function (tround_id) {
        return this.http.get(gameUrl + '?tround=' + tround_id + '&spread_set_no_score');
    };
    GameService.prototype.emailGamesToOwners = function (tbracket_id, tround_id) {
        return this.http.get(gameUrl + 'email_spreads_to_owners/?tround=' + tround_id + '&tbracketid=' + tbracket_id);
    };
    // helper function to build the HTTP headers
    GameService.prototype.getHttpOptions = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this._userService.token,
            })
        };
    }; // end getHttpOptions()
    GameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/core/is-admin.guard.ts":
/*!****************************************!*\
  !*** ./src/app/core/is-admin.guard.ts ***!
  \****************************************/
/*! exports provided: IsAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAdminGuard", function() { return IsAdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.store */ "./src/app/app.store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var IsAdminGuard = /** @class */ (function () {
    function IsAdminGuard(store) {
        var _this = this;
        this.store = store;
        store.subscribe(function () { return _this.readState(); });
        this.readState(); //Need this twice?
    }
    IsAdminGuard.prototype.canActivate = function (next, state) {
        // Check to see if is_staff is equal to 1, if yes return True
        if (this.currentUser) {
            return (this.currentUser.is_staff == 1);
        }
        else
            return false;
    };
    // Redux store methods
    IsAdminGuard.prototype.readState = function () {
        var state = this.store.getState();
        this.currentUser = state.currentUser;
        console.log("readState being invoked by IsAdminGuard.");
    };
    IsAdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_app_store__WEBPACK_IMPORTED_MODULE_1__["AppStore"])),
        __metadata("design:paramtypes", [Object])
    ], IsAdminGuard);
    return IsAdminGuard;
}());



/***/ }),

/***/ "./src/app/core/player.service.ts":
/*!****************************************!*\
  !*** ./src/app/core/player.service.ts ***!
  \****************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/core/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//userUrl is base url for users table end point
var userUrl = '/api/users/';
var PlayerService = /** @class */ (function () {
    function PlayerService(http, _userService) {
        this.http = http;
        this._userService = _userService;
    }
    //method to retrieve entire user list
    PlayerService.prototype.getList = function () {
        return this.http.get(userUrl);
    };
    // method to retrieve entire user list except user with id = id parameter
    PlayerService.prototype.getListOtherThan = function (id) {
        return this.http.get(userUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (users) { return users.filter(function (user) { return user.id != id; }); }));
    };
    //method to retrieve individual user
    PlayerService.prototype.getPlayer = function (id) {
        return this.http.get(userUrl + id + '/');
    };
    PlayerService.prototype.deletePlayer = function (id, token) {
        return this.http.delete(userUrl + id + '/', this.getHttpOptions());
    };
    PlayerService.prototype.updatePlayer = function (player) {
        return this.http.patch(userUrl + player.id + '/', JSON.stringify(player), this.getHttpOptions());
    };
    // helper function to build the HTTP headers
    PlayerService.prototype.getHttpOptions = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this._userService.token,
            })
        };
    };
    PlayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/core/region.service.ts":
/*!****************************************!*\
  !*** ./src/app/core/region.service.ts ***!
  \****************************************/
/*! exports provided: RegionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionService", function() { return RegionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var regionUrl = '/api/regions/';
var RegionService = /** @class */ (function () {
    function RegionService(http) {
        this.http = http;
    }
    //method to retrieve game details for a particular game
    RegionService.prototype.getRegionDetails = function (id) {
        return this.http.get(regionUrl + id + '/');
    };
    //method to retrieve list of games
    RegionService.prototype.getRegionList = function () {
        return this.http.get(regionUrl);
    };
    RegionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegionService);
    return RegionService;
}());



/***/ }),

/***/ "./src/app/core/sorter.service.ts":
/*!****************************************!*\
  !*** ./src/app/core/sorter.service.ts ***!
  \****************************************/
/*! exports provided: SorterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorterService", function() { return SorterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SorterService = /** @class */ (function () {
    function SorterService() {
        this.property = null;
        this.direction = 1;
    }
    SorterService.prototype.sort = function (collection, prop) {
        var _this = this;
        this.property = prop;
        this.direction = (this.property === prop) ? this.direction * -1 : 1;
        collection.sort(function (a, b) {
            var aVal;
            var bVal;
            //Handle resolving complex properties such as 'state.name' for prop value
            if (prop && prop.indexOf('.') > -1) {
                aVal = _this.resolveProperty(prop, a);
                bVal = _this.resolveProperty(prop, b);
            }
            else {
                aVal = a[prop];
                bVal = b[prop];
            }
            //Fix issues that spaces before/after string value can cause such as ' San Francisco'
            if (_this.isString(aVal))
                aVal = aVal.trim().toUpperCase();
            if (_this.isString(bVal))
                bVal = bVal.trim().toUpperCase();
            if (aVal === bVal) {
                return 0;
            }
            else if (aVal > bVal) {
                return _this.direction * -1;
            }
            else {
                return _this.direction * 1;
            }
        });
    };
    SorterService.prototype.isString = function (val) {
        return (val && (typeof val === 'string' || val instanceof String));
    };
    SorterService.prototype.resolveProperty = function (path, obj) {
        return path.split('.').reduce(function (prev, curr) {
            return (prev ? prev[curr] : undefined);
        }, obj || self);
    };
    SorterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SorterService);
    return SorterService;
}());



/***/ }),

/***/ "./src/app/core/tbracket.service.ts":
/*!******************************************!*\
  !*** ./src/app/core/tbracket.service.ts ***!
  \******************************************/
/*! exports provided: TBracketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TBracketService", function() { return TBracketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/core/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//tbracketUrl is base url for users table end point
var tbracketUrl = '/api/tbrackets/';
var TBracketService = /** @class */ (function () {
    function TBracketService(http, _userService) {
        this.http = http;
        this._userService = _userService;
    }
    //method to retrieve entire bracket list
    TBracketService.prototype.getList = function () {
        return this.http.get(tbracketUrl);
    };
    //method to retrieve entire bracket list with player's assigned tbrackets first
    TBracketService.prototype.getListWithPlayer = function (playerid) {
        return this.http.get(tbracketUrl + '?playerid=' + playerid);
    };
    //method to retrieve individual bracket
    TBracketService.prototype.getTbracket = function (id) {
        return this.http.get(tbracketUrl + id + '/');
    };
    TBracketService.prototype.createTbracket = function (tbracket, token) {
        return this.http.post(tbracketUrl, JSON.stringify(tbracket), this.getHttpOptions());
    };
    TBracketService.prototype.deleteTbracket = function (id, token) {
        return this.http.delete(tbracketUrl + id + '/', this.getHttpOptions());
    };
    TBracketService.prototype.reassignTbracket = function (id, token) {
        return this.http.get(tbracketUrl + id + '/reassign/', this.getHttpOptions());
    };
    TBracketService.prototype.resetTbracket = function (id) {
        return this.http.get(tbracketUrl + id + '/reset/', this.getHttpOptions());
    };
    // helper function to build the HTTP headers
    TBracketService.prototype.getHttpOptions = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this._userService.token,
            })
        };
    };
    TBracketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], TBracketService);
    return TBracketService;
}());



/***/ }),

/***/ "./src/app/core/user-resolver.ts":
/*!***************************************!*\
  !*** ./src/app/core/user-resolver.ts ***!
  \***************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/core/user.service.ts");
//user-resolver.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// This class allows for the processing of the UserService method before the
// Home Component is rendered so that all information needed by the view is
// retrieved prior to display


var UserResolver = /** @class */ (function () {
    function UserResolver(_userService) {
        this._userService = _userService;
    }
    UserResolver.prototype.resolve = function () {
        //console.log("Resolver returning...");
        return this._userService.getLoggedInUser();
    };
    UserResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserResolver);
    return UserResolver;
}());



/***/ }),

/***/ "./src/app/core/user.actions.ts":
/*!**************************************!*\
  !*** ./src/app/core/user.actions.ts ***!
  \**************************************/
/*! exports provided: SET_CURRENT_USER, setCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_USER", function() { return SET_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
// user.actions.ts
/**
 * UserActions specifies action creators concerning Users
 */
var SET_CURRENT_USER = '[User] Set Current';
var setCurrentUser = function (user) { return ({
    type: SET_CURRENT_USER,
    user: user
}); };


/***/ }),

/***/ "./src/app/core/user.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/core/user.reducer.ts ***!
  \**************************************/
/*! exports provided: UserReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReducer", function() { return UserReducer; });
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.actions */ "./src/app/core/user.actions.ts");
// users.reducer.ts

var initialState = { currentUser: null };
var UserReducer = 
// (state: AppState = initialState, action: Action): AppState => {
function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _user_actions__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_USER"]:
            // const user: IUserData = (<UserActions.SetCurrentUserAction>action).user;
            var user = action.user;
            return {
                currentUser: user
            };
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/app/core/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//userUrl is base url for users table end point
var userUrl = '/api/users/';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        // error messages received from the login attempt
        this.errors = [];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
    UserService.prototype.login = function (user) {
        var _this = this;
        // this.http.post(baseUrl+'/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(
        this.http.post('/api/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(function (data) {
            _this.updateData(data['token']);
            // console.log("login method called");
        }, function (err) {
            _this.errors = err['error'];
        });
    };
    // Refreshes the JWT token, to extend the time the user is logged in
    UserService.prototype.refreshToken = function () {
        var _this = this;
        this.loading = true;
        this.http.post('/api/api-token-refresh/', JSON.stringify({ token: this.token }), this.httpOptions).subscribe(function (data) {
            _this.updateData(data['token']);
            // this.getLoggedInUser().subscribe(data => {
            //   this.loggedInUser = data});
            _this.loading = false;
        }, function (err) {
            _this.errors = err['error'];
        });
        console.log("refreshToken method called");
    };
    UserService.prototype.logout = function () {
        this.token = null;
        this.token_expires = null;
        this.username = null;
    };
    UserService.prototype.updateData = function (token) {
        this.token = token;
        this.errors = [];
        // decode the token to read the username and expiration timestamp
        var token_parts = this.token.split(/\./);
        var token_decoded = JSON.parse(window.atob(token_parts[1]));
        this.token_expires = new Date(token_decoded.exp * 1000);
        this.username = token_decoded.username;
        this.email = token_decoded.email;
        this.id = token_decoded.user_id;
        // console.log("This is the JWT token authenticated user:", token_decoded);
    };
    UserService.prototype.getLoggedInUser = function () {
        // this function returns an http obervable for user-resolver.ts
        return this.http.get(userUrl + this.id + '/');
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--home.component.html-->\r\n<br>\r\n\r\n<!-- <div *ngIf=\"_beforeTourney\"> -->\r\n<div *ngIf=\"_userService.beforeTourney\">\r\n\t<app-roster *ngIf=\"roster\" [loggedInUser] = \"loggedInUser\" [roster] = \"roster\"></app-roster>\r\n</div>\r\n\r\n<!-- <div *ngIf=\"!_beforeTourney\"> -->\r\n<div *ngIf=\"!_userService.beforeTourney\">\r\n\t<app-standings-nav></app-standings-nav>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/player.service */ "./src/app/core/player.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.store */ "./src/app/app.store.ts");
/* harmony import */ var _core_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/user.actions */ "./src/app/core/user.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(_userService, _playerService, route, 
    // Using Redux store to capture logged in user details
    store) {
        var _this = this;
        this._userService = _userService;
        this._playerService = _playerService;
        this.route = route;
        this.store = store;
        store.subscribe(function () { return _this.readState(); });
        // this.readState(); //Need this twice here?
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedInUser = this.route.snapshot.data.loggedInUser;
        this._userService.loggedInUser = this.loggedInUser;
        this.setCurrentUser(this.loggedInUser);
        // console.log("The current _userService user is", this._userService)
        // Retrieve roster for passing to child roster.component
        this._playerService.getListOtherThan(this.loggedInUser.id).subscribe(function (data) {
            _this.roster = data;
        });
        this._userService.refreshToken();
    };
    // Redux store methods
    HomeComponent.prototype.readState = function () {
        var state = this.store.getState();
        this.currentUser = state.currentUser;
        // console.log("readState called by home.component. The current Redux user is", state.currentUser)
    };
    HomeComponent.prototype.setCurrentUser = function (user) {
        this.store.dispatch(_core_user_actions__WEBPACK_IMPORTED_MODULE_5__["setCurrentUser"](user));
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_app_store__WEBPACK_IMPORTED_MODULE_4__["AppStore"])),
        __metadata("design:paramtypes", [_core_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _core_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], Object])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Logging Out!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/profile-details/profile-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/profile-details/profile-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtZGV0YWlscy9wcm9maWxlLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/profile-details/profile-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/profile-details/profile-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!--profile-details.component.html-->\r\n<div class=\"container-fluid\">\r\n\t<div class = \"row\">\r\n\t\t<div class = \"col-xs col-md-4\">\r\n\t\t\t<div class = \"row justify-content-start\">\r\n\t\t\t\t<div class = \"col-xs-auto\"><strong>Name:&nbsp;</strong></div>\r\n\t\t\t\t<div class = \"col\" class=\"text-muted\">{{ _player.full_name }}</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row justify-content-start\">\r\n\t\t\t\t<div class = \"col-xs-auto\"><strong>Email:&nbsp;</strong></div>\r\n\t\t\t\t<div class = \"col\" class=\"text-muted\">{{ _player.email }}</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row justify-content-start\">\r\n\t\t\t\t<div class = \"col-xs-auto\"><strong>Number of Entries:&nbsp;</strong></div>\r\n\t\t\t\t<div class = \"col\" class=\"text-muted\">{{ _player.num_entries }}</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row justify-content-start\">\r\n\t\t\t\t<div class = \"col-xs-auto\"><strong>(S)ame or (D)ifferent Brackets:&nbsp;</strong></div>\r\n\t\t\t\t<div class = \"col\" class=\"text-muted\" >{{ player.num_entries == 1 ? '-' : player.mult_entry_type }}</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row justify-content-start\">\r\n\t\t\t\t<div class = \"col-xs-auto\"><strong>Receive Game Result email updates?&nbsp;</strong></div>\r\n\t\t\t\t<div class = \"col\" class=\"text-muted\" >{{ player.gm_updates ? 'Yes' : 'No' }}</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row justify-content-start\">\r\n\t\t\t\t<div class = \"col-xs-auto\"><strong>Paid up?:</strong></div>\r\n\t\t\t\t<div class = \"col\" [ngClass] = \"{'text-muted': player.paid, 'text-danger': !player.paid}\">\r\n\t\t\t\t\t<!-- {{ player.paid ? 'YES - Thank you!' : 'Due($' + player.num_entries*20 + '.00)'  }} -->\r\n\t\t\t\t\t{{ player.paid ? \"YES - Thank you!\" : \"Due($\" + player.num_entries*20 + \".00)\"  }}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row top10\">\r\n\t\t\t\t<div *ngIf=\"_userService.beforeTourney && _showEditButton\" class = \"col-xs-auto\">\r\n\t\t\t\t\t<button class=\"btn btn-secondary custom m-2\" (click)=\"openModal(template)\">Delete</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"_showEditButton\" class = \"col-xs-auto\">\r\n\t\t\t\t\t<button class=\"btn btn-primary custom m-2\" (click)=\"openProfileModal()\">Edit</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\r\n\t\t<div *ngIf = \"!player.paid && _showEditButton\" \r\n\t\tclass = \"col-xs col-md-4 justify-content-start align-self-center rounded border border-danger text-muted pl-1 mt-2\">\r\n\t\t\t<p class=\"mb-2\"><strong>Payment Options:</strong></p>\r\n\t\t\t<p class=\"mb-2\">1) <i class=\"fa fa-paypal\"></i> via PayPal : <a target=\"_blank\" rel=\"noopener noreferrer\"\r\n\t\t\t\thref=\"https://www.paypal.me/PaulMaurer1\">www.paypal.me/PaulMaurer1</a></p>\r\n\t\t\t<p class=\"mb-2\">2) <i class=\"fa fa-vimeo-square\"></i> via Venmo: <strong>@Paul-Maurer1</strong></p>\r\n\t\t\t<p class=\"mb-2\">3) Send <i class=\"fa fa-usd\"></i> to:\r\n\t\t\tPaul Maurer, 3227 N. Seminary Avenue, Chicago, IL 60657</p>\r\n\t\t</div>\r\n\t\t<div class = \"col hidden-xs\"></div>\r\n\t</div>\r\n</div>\r\n\r\n<ng-template #template>\r\n\t<div class=\"modal-header\">\r\n\t\t<h4 class=\"modal-title pull-left\">Delete Profile</h4>\r\n\t\t<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"modal-body\">\r\n\t\tAre you sure you want to delete your Profile?\r\n\t</div>\r\n\t<div class=\"modal-footer\">\r\n\t\t\t<button class=\"btn btn-secondary custom\" \r\n\t\t\t(click)=\"modalRef.hide(); delete()\">Delete</button>\r\n\t</div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/profile-details/profile-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/profile-details/profile-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailsComponent", function() { return ProfileDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/player.service */ "./src/app/core/player.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _profile_form_modal_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profile-form-modal/profile-form-modal.component */ "./src/app/profile-form-modal/profile-form-modal.component.ts");
/* harmony import */ var _profile_form_modal_partial_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profile-form-modal/partial-profile-form-modal.component */ "./src/app/profile-form-modal/partial-profile-form-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileDetailsComponent = /** @class */ (function () {
    function ProfileDetailsComponent(_playerService, _userService, router, route, modalService, bsModalService) {
        this._playerService = _playerService;
        this._userService = _userService;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.bsModalService = bsModalService;
    }
    Object.defineProperty(ProfileDetailsComponent.prototype, "player", {
        get: function () {
            return this._player;
        },
        set: function (value) {
            if (value) {
                this._player = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    ProfileDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            // if profile page is called for other player, don't show edit button
            params.id === undefined ? _this._showEditButton = true : _this._showEditButton = false;
        });
    };
    ProfileDetailsComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    ProfileDetailsComponent.prototype.delete = function () {
        this._playerService.deletePlayer(this._player.id, this._userService.token).subscribe(function (data) {
            console.log("delete successful");
        });
        this.router.navigate(['/logout']);
    };
    ProfileDetailsComponent.prototype.openProfileModal = function () {
        var _this = this;
        var initialState = {
            id: this._player.id,
            profile_user: this._player
        };
        if (this._userService.beforeTourney) {
            this.bsModalRef = this.bsModalService.show(_profile_form_modal_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_5__["ProfileFormModalComponent"], { initialState: initialState });
        }
        else {
            this.bsModalRef = this.bsModalService.show(_profile_form_modal_partial_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_6__["PartialProfileFormModalComponent"], { initialState: initialState });
        }
        ;
        this.bsModalService.onHidden.subscribe(function (reason) {
            // Upon modal being closed run these actions
            // *** This isn't working ***
            // const _reason = reason ? `, dismissed by ${reason}` : '';
            // console.log ("Profile modal was closed ", _reason);
            // Update logged in User against database after modal closes
            _this._userService.getLoggedInUser().subscribe(function (data) {
                _this._player = data;
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ProfileDetailsComponent.prototype, "player", null);
    ProfileDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-details',
            template: __webpack_require__(/*! ./profile-details.component.html */ "./src/app/profile-details/profile-details.component.html"),
            styles: [__webpack_require__(/*! ./profile-details.component.css */ "./src/app/profile-details/profile-details.component.css")]
        }),
        __metadata("design:paramtypes", [_core_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"],
            _core_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], ProfileDetailsComponent);
    return ProfileDetailsComponent;
}());



/***/ }),

/***/ "./src/app/profile-form-modal/admin-profile-form-modal.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/profile-form-modal/admin-profile-form-modal.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtZm9ybS1tb2RhbC9hZG1pbi1wcm9maWxlLWZvcm0tbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/profile-form-modal/admin-profile-form-modal.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/profile-form-modal/admin-profile-form-modal.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- admin-profile-form-modal.component.html -->\n\n<div class=\"modal-header\">\n\t<h4 class=\"modal-title pull-left\">{{title}} {{profile_user.full_name}}</h4>\n\t<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n</div>\n<form [formGroup]=\"adminProfileForm\" (ngSubmit)=\"submitForm(adminProfileForm.value)\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"form-row\">\n\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t<label for=\"first_name\">First Name</label>\n\t\t\t\t    <input type=\"text\" class=\"form-control\"\n\t\t\t\t    id=\"first_name\" [formControl] = \"first_name\"\n\t\t\t\t    [class.is-invalid] = \"first_name.invalid\">\n\t\t\t\t    <span *ngIf=\"first_name.invalid\" class=\"text-danger\">\n    \t\t\t\t\tFirst Name is required\n  \t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t<label for=\"last_name\">Last Name</label>\n\t\t\t\t    <input type=\"text\" class=\"form-control\"\n\t\t\t\t    id=\"last_name\" [formControl] = \"last_name\"\n\t\t\t\t    [class.is-invalid] = \"last_name.invalid\">\n\t\t\t\t    <span *ngIf=\"last_name.invalid\" class=\"text-danger\">\n    \t\t\t\t\tLast Name is required\n  \t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class = \"form-group\">\n\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t    <input type=\"email\" class=\"form-control\"\n\t\t\t    id=\"email\" [formControl] = \"email\"\n\t\t\t    [class.is-invalid] = \"email.invalid\">\n\t\t\t    <span *ngIf=\"email.invalid && email.errors.required\" class=\"text-danger\">\n    \t\t\t\t\tEmail is required\n  \t\t\t\t</span>\n  \t\t\t\t<span *ngIf=\"email.invalid && email.errors.email\" class=\"text-danger\">\n    \t\t\t\t\tEmail must be a valid address\n  \t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class=\"form-row\">\n\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t<label for=\"num_entries\">Number of Entries</label>\n\t\t\t\t    <input type=\"number\" min = \"1\" max = \"4\" class=\"form-control\" #entries\n\t\t\t\t    id=\"num_entries\" [formControl] = \"num_entries\"\n\t\t\t\t    [class.is-invalid] = \"num_entries.invalid\">\n\t\t\t\t    <span *ngIf=\"num_entries.invalid && num_entries.errors.required\" class=\"text-danger\">\n    \t\t\t\t\tNumber of Entries is required\n  \t\t\t\t\t</span>\n  \t\t\t\t\t<span *ngIf=\"num_entries.invalid && (num_entries.errors.minlength || num_entries.errors.maxlength)\" class=\"text-danger\">\n    \t\t\t\t\tMust submit a number between 1-4\n  \t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group col-md-6\" *ngIf=\"entries.value>1\">\n\t\t\t\t\t<label for=\"mult_entry_type\">(S)ame or (D)ifferent</label>\n\t\t\t\t    <select class=\"form-control\"\n\t\t\t\t    id=\"mult_entry_type\" [formControl] = \"mult_entry_type\">\n\t\t\t\t    \t<option>S</option>\n\t\t\t\t    \t<option>D</option>\n\t\t\t\t    </select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<div class = \"custom-control custom-checkbox\">\n\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t    id=\"gm_updates\" [formControl] = \"gm_updates\">\n\t\t\t\t    <label class=\"custom-control-label\" for=\"gm_updates\">\n\t\t\t\t\t    Receive email for game updates?\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n      <div class=\"form-group\">\n\t\t\t\t<div class = \"custom-control custom-checkbox\">\n\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t    id=\"paid\" [formControl] = \"paid\">\n\t\t\t\t    <label class=\"custom-control-label\" for=\"paid\">\n\t\t\t\t\t    Paid?\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>  <!-- end container -->\n\t\t<div class=\"modal-footer\">\n\t\t\t<button type=\"submit\" id=\"submit\" class=\"btn btn-success\" \n\t\t\t[disabled]=\"!adminProfileForm.valid\"\n\t\t\t(click)=\"bsModalRef.hide()\">{{closeBtnName}}</button>\n\t\t</div>\n\t</div>  <!-- end modal-body -->\n</form>"

/***/ }),

/***/ "./src/app/profile-form-modal/admin-profile-form-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/profile-form-modal/admin-profile-form-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminProfileFormModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfileFormModalComponent", function() { return AdminProfileFormModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/player.service */ "./src/app/core/player.service.ts");
// admin-profile-form-modal.component.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminProfileFormModalComponent = /** @class */ (function () {
    function AdminProfileFormModalComponent(bsModalRef, fb, _playerService) {
        this.bsModalRef = bsModalRef;
        this._playerService = _playerService;
        this.title = "Update profile for ";
        this.closeBtnName = "Update";
        this.adminProfileForm = fb.group({
            'first_name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'last_name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            'num_entries': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)])],
            'mult_entry_type': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'gm_updates': [],
            'paid': [],
        });
        this.first_name = this.adminProfileForm.controls['first_name']; // allows for other properties, e.g. error values
        this.last_name = this.adminProfileForm.controls['last_name'];
        this.email = this.adminProfileForm.controls['email'];
        this.num_entries = this.adminProfileForm.controls['num_entries'];
        this.mult_entry_type = this.adminProfileForm.controls['mult_entry_type'];
        this.gm_updates = this.adminProfileForm.controls['gm_updates'];
        this.paid = this.adminProfileForm.controls['paid'];
    }
    AdminProfileFormModalComponent.prototype.ngOnInit = function () {
        // console.log ("AdminProfileForm's profile_user", this.profile_user);
        this.adminProfileForm.patchValue(this.profile_user);
    };
    AdminProfileFormModalComponent.prototype.submitForm = function (value) {
        this.profile_user.first_name = this.first_name.value;
        this.profile_user.last_name = this.last_name.value;
        this.profile_user.email = this.email.value.toLowerCase();
        this.profile_user.num_entries = this.num_entries.value;
        this.profile_user.mult_entry_type = this.mult_entry_type.value;
        this.profile_user.gm_updates = this.gm_updates.value;
        this.profile_user.paid = this.paid.value;
        this._playerService.updatePlayer(this.profile_user).subscribe(function (data) {
            console.log("Player updated:", data);
        });
    };
    AdminProfileFormModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-profile-form-modal',
            template: __webpack_require__(/*! ./admin-profile-form-modal.component.html */ "./src/app/profile-form-modal/admin-profile-form-modal.component.html"),
            styles: [__webpack_require__(/*! ./admin-profile-form-modal.component.css */ "./src/app/profile-form-modal/admin-profile-form-modal.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"]])
    ], AdminProfileFormModalComponent);
    return AdminProfileFormModalComponent;
}());



/***/ }),

/***/ "./src/app/profile-form-modal/partial-profile-form-modal.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/profile-form-modal/partial-profile-form-modal.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtZm9ybS1tb2RhbC9wYXJ0aWFsLXByb2ZpbGUtZm9ybS1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile-form-modal/partial-profile-form-modal.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/profile-form-modal/partial-profile-form-modal.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- profile-form-modal.component.html -->\n\n<div class=\"modal-header\">\n\t<h4 class=\"modal-title pull-left\">{{title}} {{profile_user.full_name}}</h4>\n\t<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n</div>\n<form [formGroup]=\"profileForm\" (ngSubmit)=\"submitForm(profileForm.value)\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"container\">\n\t\t\t<div class = \"row justify-content-start\">\n\t\t\t\t<div class = \"col-xs-auto\"><strong>Name:&nbsp;</strong></div>\n\t\t\t\t<div class = \"col\" class=\"text-muted\">{{ profile_user.full_name }}</div>\n\t\t\t</div>\n\t\t\t<div class = \"row justify-content-start\">\n\t\t\t\t<div class = \"col-xs-auto\"><strong>Email:&nbsp;</strong></div>\n\t\t\t\t<div class = \"col\" class=\"text-muted\">{{ profile_user.email }}</div>\n\t\t\t</div>\n\t\t\t<div class = \"row justify-content-start\">\n\t\t\t\t<div class = \"col-xs-auto\"><strong>Number of Entries:&nbsp;</strong></div>\n\t\t\t\t<div class = \"col\" class=\"text-muted\">{{ profile_user.num_entries }}</div>\n\t\t\t</div>\n\t\t\t<div class = \"row justify-content-start\">\n\t\t\t\t<div class = \"col-xs-auto\"><strong>(S)ame or (D)ifferent Brackets:&nbsp;</strong></div>\n\t\t\t\t<div class = \"col\" class=\"text-muted\" >{{ profile_user.num_entries == 1 ? '-' : profile_user.mult_entry_type }}</div>\n\t\t\t</div>\n\t\t\t<br>\n\t\t\t<div class = \"row justify-content-start\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div class = \"custom-control custom-checkbox\">\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t    id=\"gm_updates\" [formControl] = \"gm_updates\">\n\t\t\t\t\t    <label class=\"custom-control-label\" for=\"gm_updates\">\n\t\t\t\t\t\t    Receive email for game updates?\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div> <!-- end container-->\n\t\t<div class=\"modal-footer\">\n\t\t\t<button type=\"submit\" id=\"submit\" class=\"btn btn-success\" \n\t\t\t[disabled]=\"!profileForm.valid\"\n\t\t\t(click)=\"bsModalRef.hide()\">{{closeBtnName}}</button>\n\t\t</div>\n\t</div>  <!-- end modal-body-->\n</form>"

/***/ }),

/***/ "./src/app/profile-form-modal/partial-profile-form-modal.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/profile-form-modal/partial-profile-form-modal.component.ts ***!
  \****************************************************************************/
/*! exports provided: PartialProfileFormModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartialProfileFormModalComponent", function() { return PartialProfileFormModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/player.service */ "./src/app/core/player.service.ts");
// partial-profile-form-modal.component.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PartialProfileFormModalComponent = /** @class */ (function () {
    function PartialProfileFormModalComponent(bsModalRef, fb, _playerService) {
        this.bsModalRef = bsModalRef;
        this._playerService = _playerService;
        this.title = "Update profile for ";
        this.closeBtnName = "Update";
        this.profileForm = fb.group({
            'gm_updates': [],
        });
        this.gm_updates = this.profileForm.controls['gm_updates'];
    }
    PartialProfileFormModalComponent.prototype.ngOnInit = function () {
        this.profileForm.patchValue(this.profile_user);
    };
    PartialProfileFormModalComponent.prototype.submitForm = function (value) {
        this.profile_user.gm_updates = this.gm_updates.value;
        // console.log("gm_updates = ", this.profile_user.gm_updates);
        this._playerService.updatePlayer(this.profile_user).subscribe(function (data) {
            // console.log("Player updated:", this.profile_user);
        });
    };
    PartialProfileFormModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partial-profile-form-modal',
            template: __webpack_require__(/*! ./partial-profile-form-modal.component.html */ "./src/app/profile-form-modal/partial-profile-form-modal.component.html"),
            styles: [__webpack_require__(/*! ./partial-profile-form-modal.component.css */ "./src/app/profile-form-modal/partial-profile-form-modal.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"]])
    ], PartialProfileFormModalComponent);
    return PartialProfileFormModalComponent;
}());



/***/ }),

/***/ "./src/app/profile-form-modal/profile-form-modal.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/profile-form-modal/profile-form-modal.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtZm9ybS1tb2RhbC9wcm9maWxlLWZvcm0tbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/profile-form-modal/profile-form-modal.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/profile-form-modal/profile-form-modal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- profile-form-modal.component.html -->\r\n\r\n<div class=\"modal-header\">\r\n\t<h4 class=\"modal-title pull-left\">{{title}} {{profile_user.full_name}}</h4>\r\n\t<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t</button>\r\n</div>\r\n<form [formGroup]=\"profileForm\" (ngSubmit)=\"submitForm(profileForm.value)\">\r\n\t<div class=\"modal-body\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"form-row\">\r\n\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t<label for=\"first_name\">First Name</label>\r\n\t\t\t\t    <input type=\"text\" class=\"form-control\"\r\n\t\t\t\t    id=\"first_name\" [formControl] = \"first_name\"\r\n\t\t\t\t    [class.is-invalid] = \"first_name.invalid\">\r\n\t\t\t\t    <span *ngIf=\"first_name.invalid\" class=\"text-danger\">\r\n    \t\t\t\t\tFirst Name is required\r\n  \t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t<label for=\"last_name\">Last Name</label>\r\n\t\t\t\t    <input type=\"text\" class=\"form-control\"\r\n\t\t\t\t    id=\"last_name\" [formControl] = \"last_name\"\r\n\t\t\t\t    [class.is-invalid] = \"last_name.invalid\">\r\n\t\t\t\t    <span *ngIf=\"last_name.invalid\" class=\"text-danger\">\r\n    \t\t\t\t\tLast Name is required\r\n  \t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"form-group\">\r\n\t\t\t\t<label for=\"email\">Email</label>\r\n\t\t\t    <input type=\"email\" class=\"form-control\"\r\n\t\t\t    id=\"email\" [formControl] = \"email\"\r\n\t\t\t    [class.is-invalid] = \"email.invalid\">\r\n\t\t\t    <span *ngIf=\"email.invalid && email.errors.required\" class=\"text-danger\">\r\n    \t\t\t\t\tEmail is required\r\n  \t\t\t\t</span>\r\n  \t\t\t\t<span *ngIf=\"email.invalid && email.errors.email\" class=\"text-danger\">\r\n    \t\t\t\t\tEmail must be a valid address\r\n  \t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-row\">\r\n\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t<label for=\"num_entries\">Number of Entries</label>\r\n\t\t\t\t    <input type=\"number\" min = \"1\" max = \"4\" class=\"form-control\" #entries\r\n\t\t\t\t    id=\"num_entries\" [formControl] = \"num_entries\"\r\n\t\t\t\t    [class.is-invalid] = \"num_entries.invalid\">\r\n\t\t\t\t    <span *ngIf=\"num_entries.invalid && num_entries.errors.required\" class=\"text-danger\">\r\n    \t\t\t\t\tNumber of Entries is required\r\n  \t\t\t\t\t</span>\r\n  \t\t\t\t\t<span *ngIf=\"num_entries.invalid && (num_entries.errors.minlength || num_entries.errors.maxlength)\" class=\"text-danger\">\r\n    \t\t\t\t\tMust submit a number between 1-4\r\n  \t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group col-md-6\" *ngIf=\"entries.value>1\">\r\n\t\t\t\t\t<label for=\"mult_entry_type\">(S)ame or (D)ifferent</label>\r\n\t\t\t\t    <select class=\"form-control\"\r\n\t\t\t\t    id=\"mult_entry_type\" [formControl] = \"mult_entry_type\">\r\n\t\t\t\t    \t<option>S</option>\r\n\t\t\t\t    \t<option>D</option>\r\n\t\t\t\t    </select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<div class = \"custom-control custom-checkbox\">\r\n\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\r\n\t\t\t\t    id=\"gm_updates\" [formControl] = \"gm_updates\">\r\n\t\t\t\t    <label class=\"custom-control-label\" for=\"gm_updates\">\r\n\t\t\t\t\t    Receive email for game updates?\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>  <!-- end container -->\r\n\t\t<div class=\"modal-footer\">\r\n\t\t\t<button type=\"submit\" id=\"submit\" class=\"btn btn-success\" \r\n\t\t\t[disabled]=\"!profileForm.valid\"\r\n\t\t\t(click)=\"bsModalRef.hide()\">{{closeBtnName}}</button>\r\n\t\t</div>\r\n\t</div>  <!-- end modal-body -->\r\n</form>"

/***/ }),

/***/ "./src/app/profile-form-modal/profile-form-modal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/profile-form-modal/profile-form-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfileFormModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFormModalComponent", function() { return ProfileFormModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/player.service */ "./src/app/core/player.service.ts");
// profile-form-modal.component.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileFormModalComponent = /** @class */ (function () {
    function ProfileFormModalComponent(bsModalRef, fb, _playerService) {
        this.bsModalRef = bsModalRef;
        this._playerService = _playerService;
        this.title = "Update profile for ";
        this.closeBtnName = "Update";
        this.profileForm = fb.group({
            'first_name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'last_name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            'num_entries': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)])],
            'mult_entry_type': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'gm_updates': [],
        });
        this.first_name = this.profileForm.controls['first_name']; // allows for other properties, e.g. error values
        this.last_name = this.profileForm.controls['last_name'];
        this.email = this.profileForm.controls['email'];
        this.num_entries = this.profileForm.controls['num_entries'];
        this.mult_entry_type = this.profileForm.controls['mult_entry_type'];
        this.gm_updates = this.profileForm.controls['gm_updates'];
    }
    ProfileFormModalComponent.prototype.ngOnInit = function () {
        this.profileForm.patchValue(this.profile_user);
    };
    ProfileFormModalComponent.prototype.submitForm = function (value) {
        this.profile_user.first_name = this.first_name.value;
        this.profile_user.last_name = this.last_name.value;
        this.profile_user.email = this.email.value.toLowerCase();
        this.profile_user.num_entries = this.num_entries.value;
        this.profile_user.mult_entry_type = this.mult_entry_type.value;
        this.profile_user.gm_updates = this.gm_updates.value;
        // console.log("gm_updates = ", this.profile_user.gm_updates);
        this._playerService.updatePlayer(this.profile_user).subscribe(function (data) {
            // console.log("Player updated:", this.profile_user);
        });
    };
    ProfileFormModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-form-modal',
            template: __webpack_require__(/*! ./profile-form-modal.component.html */ "./src/app/profile-form-modal/profile-form-modal.component.html"),
            styles: [__webpack_require__(/*! ./profile-form-modal.component.css */ "./src/app/profile-form-modal/profile-form-modal.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"]])
    ], ProfileFormModalComponent);
    return ProfileFormModalComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--profile.component.html-->\r\n<div *ngIf=\"user\">\r\n\t<br>\r\n\t<h4>{{ _pageTitle }} Info</h4>\r\n\t<app-profile-details [player] = \"user\"></app-profile-details>\r\n\t<br>\r\n\t<h4>{{ _pageTitle }} Teams</h4>\r\n\t<app-team-details [player] = \"user\"></app-team-details>\r\n\t<br>\r\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/player.service */ "./src/app/core/player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route, _playerService) {
        this.route = route;
        this._playerService = _playerService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.user = this.route.snapshot.data.loggedInUser;
        this.route.queryParams.subscribe(function (params) {
            // if profile page is called for other Player (with query param), set user = Player
            if (params.id === undefined) {
                _this.user = _this.route.snapshot.data.loggedInUser;
                _this._pageTitle = "My";
            }
            else {
                _this._playerService.getPlayer(params.id).subscribe(function (data) {
                    _this.user = data;
                    _this._pageTitle = _this.user.first_name + "'s";
                });
            }
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _core_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/roster-textbox/roster-textbox.component.css":
/*!*************************************************************!*\
  !*** ./src/app/roster-textbox/roster-textbox.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvc3Rlci10ZXh0Ym94L3Jvc3Rlci10ZXh0Ym94LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/roster-textbox/roster-textbox.component.ts":
/*!************************************************************!*\
  !*** ./src/app/roster-textbox/roster-textbox.component.ts ***!
  \************************************************************/
/*! exports provided: RosterTextboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterTextboxComponent", function() { return RosterTextboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RosterTextboxComponent = /** @class */ (function () {
    function RosterTextboxComponent() {
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(RosterTextboxComponent.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        set: function (val) {
            this._filter = val;
            this.changed.emit(this.filter); //Raise changed event
        },
        enumerable: true,
        configurable: true
    });
    RosterTextboxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], RosterTextboxComponent.prototype, "filter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RosterTextboxComponent.prototype, "changed", void 0);
    RosterTextboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roster-textbox',
            // templateUrl: './roster-textbox.component.html',
            template: "\n        Search by Name: <input type=\"text\" [(ngModel)]=\"filter\" />\n    ",
            styles: [__webpack_require__(/*! ./roster-textbox.component.css */ "./src/app/roster-textbox/roster-textbox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RosterTextboxComponent);
    return RosterTextboxComponent;
}());



/***/ }),

/***/ "./src/app/roster/roster.component.css":
/*!*********************************************!*\
  !*** ./src/app/roster/roster.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvc3Rlci9yb3N0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/roster/roster.component.html":
/*!**********************************************!*\
  !*** ./src/app/roster/roster.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--roster.component.html-->\r\n<h4>Registrants</h4>\r\n<div [class.loader] = \"loading\">\r\n<div class = \"d-flex flex-row justify-content-around\">\r\n\t<div class = \"col d-none d-md-block\"></div>\r\n\t<div class = \"col col-3-md text-center bg-secondary text-white rounded py-2 mx-1\">\r\n\t\t<p class=\"mb-0\">People Registered</p>\r\n\t\t<h1 class=\"display-3 m-0\">{{_numRegistrants}}</h1>\r\n\t</div>\r\n\t<div class = \"col d-none d-md-block\"></div>\r\n\t<div class = \"col col-3-md text-center bg-secondary text-white rounded py-2 mx-1\">\r\n\t\t<p class=\"mb-0\">Number of Entries</p>\r\n\t\t<h1 class=\"display-3 m-0\">{{_numEntries}}</h1>\r\n\t</div>\r\n\t<div class = \"col d-none d-md-block\"></div>\r\n\t<div class = \"col col-2-md text-center bg-secondary text-white rounded py-2 mx-1\">\r\n\t\t<p class=\"mb-0\">Number of Brackets</p>\r\n\t\t<h1 class=\"display-4 m-0\">{{_numBrackets}}</h1>\r\n\t\t<small class=\"m-0\" *ngIf = \"_numNeededEntries > 1\">({{_numNeededEntries}} more entries for another!)</small>\r\n\t\t<small class=\"m-0\" *ngIf = \"_numNeededEntries == 1\">({{_numNeededEntries}} more entry for another!)</small>\r\n\t</div>\r\n\t<div class = \"col d-none d-md-block\"></div>\r\n</div>\r\n<br>\r\n<app-roster-textbox (changed)=\"filter($event)\"></app-roster-textbox>\r\n<br>\r\n<br>\r\n<table class=\"table table-sm\">\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th scope=\"col\">#</th>\r\n\t\t\t<th scope=\"col\" (click)=\"sort('last_name')\" class=\"cursor-pointer\">Name\r\n\t\t\t\t<fa *ngIf=\"_property=='last_name' && _direction==1\" name=\"caret-down\"></fa>\r\n\t\t\t\t<fa *ngIf=\"_property=='last_name' && _direction==-1\" name=\"caret-up\"></fa>\r\n\t\t\t</th>\r\n\t\t\t<th scope=\"col\" (click)=\"sort('num_entries')\" class=\"cursor-pointer\">Num Entries\r\n\t\t\t\t<fa *ngIf=\"_property=='num_entries' && _direction==1\" name=\"caret-down\"></fa>\r\n\t\t\t\t<fa *ngIf=\"_property=='num_entries' && _direction==-1\" name=\"caret-up\"></fa>\r\n\t\t\t</th>\r\n\t\t\t<th scope=\"col\">(S)ame/(D)iff</th>\r\n\t\t\t<th scope=\"col\" style=\"width: 5%\">Edit</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<tr on-mouseover=\"hoveredIndex=_loggedInUser.id\" on-mouseleave=\"hoveredIndex=null\">\r\n\t\t\t<th scope=\"row\">1</th>\r\n\t\t\t<td><strong>{{ _loggedInUser.first_name }}&nbsp;{{ _loggedInUser.last_name }}*</strong></td>\r\n\t\t\t<td><strong>{{ _loggedInUser.num_entries }}</strong></td>\r\n\t\t\t<td><strong>{{ _loggedInUser.num_entries == 1 ? '-' : _loggedInUser.mult_entry_type }}</strong></td>\r\n\t\t\t<td>\r\n\t\t\t\t<fa name=\"edit\" *ngIf=\"hoveredIndex==_loggedInUser.id\" class = \"cursor-pointer\" tooltip = \"Edit Profile\" (click)=\"openProfileModal()\"></fa>\t\t\t\t\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr *ngFor = \"let player of _filteredRoster; let i = index\">\r\n\t\t\t<th scope=\"row\">{{i + 2}}</th>\r\n\t\t\t<td>{{ player.full_name }}</td>\r\n\t\t\t<td>{{ player.num_entries }}</td>\r\n\t\t\t<td>{{ player.num_entries == 1 ? '-' : player.mult_entry_type }}</td>\r\n\t\t\t<td></td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n<br>\r\n</div>"

/***/ }),

/***/ "./src/app/roster/roster.component.ts":
/*!********************************************!*\
  !*** ./src/app/roster/roster.component.ts ***!
  \********************************************/
/*! exports provided: RosterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterComponent", function() { return RosterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/player.service */ "./src/app/core/player.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_sorter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/sorter.service */ "./src/app/core/sorter.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _profile_form_modal_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profile-form-modal/profile-form-modal.component */ "./src/app/profile-form-modal/profile-form-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RosterComponent = /** @class */ (function () {
    function RosterComponent(_playerService, _userService, _modalService, sorterService) {
        this._playerService = _playerService;
        this._userService = _userService;
        this._modalService = _modalService;
        this.sorterService = sorterService;
        this._direction = 1;
    }
    Object.defineProperty(RosterComponent.prototype, "loggedInUser", {
        // Retrieve loggedInUser from parent component
        get: function () {
            return this._loggedInUser;
        },
        set: function (value) {
            if (value) {
                this._loggedInUser = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RosterComponent.prototype, "roster", {
        // Retrieve roster from parent component
        get: function () {
            return this._roster;
        },
        set: function (value) {
            if (value) {
                this._filteredRoster = this._roster = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    RosterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        // Calculate registration stats needed at top of page
        this._numRegistrants = 1; // start at 1 since _loggedInUser counts as 1
        this._numBrackets = 0;
        this._numEntries = this._loggedInUser.num_entries; // start _numEntries counter at # that loggedInUser has
        this._roster.forEach(function (registrant) {
            _this._numRegistrants += 1;
            _this._numEntries += registrant.num_entries;
        });
        this._numBrackets = Math.floor(this._numEntries / 16);
        this._numNeededEntries = (this._numBrackets + 1) * 16 - this._numEntries;
        this.loading = false;
    };
    RosterComponent.prototype.openProfileModal = function () {
        var initialState = {
            id: this.hoveredIndex,
            profile_user: this._loggedInUser
        };
        this.bsModalRef = this._modalService.show(_profile_form_modal_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_5__["ProfileFormModalComponent"], { initialState: initialState });
        this._modalService.onHidden.subscribe(function (reason) {
            // Upon modal being closed run these actions
            // const _reason = reason ? `, dismissed by ${reason}` : '';
            // console.log ("Profile modal was closed ", reason);
            // Update logged in User against database after modal closes
            // This updates the affected (1st) row for any changes that was made on the Modal
            // this._userService.getLoggedInUser().subscribe(data => {
            // 	this._loggedInUser = data;
            // })
        });
    };
    RosterComponent.prototype.filter = function (data) {
        // Function that filters the Roster list based on what a user types in the roster-textbox component
        if (data) {
            this._filteredRoster = this._roster.filter(function (item) { return item.full_name.toLowerCase().indexOf(data.toLowerCase()) > -1; });
        }
        else {
            this._filteredRoster = this._roster;
        }
    };
    RosterComponent.prototype.sort = function (prop) {
        this.sorterService.sort(this._filteredRoster, prop);
        this._property = prop;
        this._direction = (this._property === prop) ? this._direction * -1 : 1;
        // console.log ("property = ", this._property, " & direction = ", this._direction);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RosterComponent.prototype, "loggedInUser", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], RosterComponent.prototype, "roster", null);
    RosterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roster',
            template: __webpack_require__(/*! ./roster.component.html */ "./src/app/roster/roster.component.html"),
            styles: [__webpack_require__(/*! ./roster.component.css */ "./src/app/roster/roster.component.css")]
        }),
        __metadata("design:paramtypes", [_core_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"],
            _core_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _core_sorter_service__WEBPACK_IMPORTED_MODULE_3__["SorterService"]])
    ], RosterComponent);
    return RosterComponent;
}());



/***/ }),

/***/ "./src/app/shared/functions.ts":
/*!*************************************!*\
  !*** ./src/app/shared/functions.ts ***!
  \*************************************/
/*! exports provided: convertTime12to24, convertTime24to12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertTime12to24", function() { return convertTime12to24; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertTime24to12", function() { return convertTime24to12; });
// Functions used by the app
var convertTime12to24 = function (time12h) {
    // This function converts a 12 hour time returned by the Calendar widget (hh:mm PM) to
    // a 24 hour time (hh:mm) that can be sent to, stored by the back-end
    var _a = time12h.split(" "), time = _a[0], modifier = _a[1];
    var _b = time.split(":"), hours = _b[0], minutes = _b[1];
    if (hours === "12") {
        hours = "00";
    }
    if (modifier === "PM") {
        hours = parseInt(hours, 10) + 12;
    }
    return hours + ":" + minutes;
};
var convertTime24to12 = function (time24h) {
    // This function converts a 24 hr time from the back-end (hh:mm) into a 
    // 12 hour time string (hh:mm PM) that can populate the calendar widget with the currently
    // set value
    // Check correct time format and split into components
    var time = time24h.match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time24h];
    if (time.length > 1) { // If time format correct
        time = time.slice(1); // Remove full string match value
        time[5] = " "; // add space between time & AM/PM
        time[6] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
};


/***/ }),

/***/ "./src/app/standings-nav/standings-nav.component.css":
/*!***********************************************************!*\
  !*** ./src/app/standings-nav/standings-nav.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YW5kaW5ncy1uYXYvc3RhbmRpbmdzLW5hdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/standings-nav/standings-nav.component.html":
/*!************************************************************!*\
  !*** ./src/app/standings-nav/standings-nav.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- dtandings-nav.component.html -->\r\n\r\n<h4>Standings</h4>\r\n<small class=\"text-muted\">(Click to see bracket)</small>\r\n<tabset type=\"pills\">\r\n\t<tab *ngFor = \"let tbracket of _tbracketList\" heading=\"{{ tbracket.name }}\">\r\n\t\t<app-standings [bracket]=\"tbracket.id\"></app-standings>\r\n\t</tab>\r\n</tabset>\r\n<br>"

/***/ }),

/***/ "./src/app/standings-nav/standings-nav.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/standings-nav/standings-nav.component.ts ***!
  \**********************************************************/
/*! exports provided: StandingsNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingsNavComponent", function() { return StandingsNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/tbracket.service */ "./src/app/core/tbracket.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StandingsNavComponent = /** @class */ (function () {
    function StandingsNavComponent(_tbracketService, _userService) {
        this._tbracketService = _tbracketService;
        this._userService = _userService;
    }
    StandingsNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve list of brackets for bracket navbar
        this._tbracketService.getListWithPlayer(this._userService.id).subscribe(function (data) {
            _this._tbracketList = data;
        });
    }; //end ngOnInit
    StandingsNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-standings-nav',
            template: __webpack_require__(/*! ./standings-nav.component.html */ "./src/app/standings-nav/standings-nav.component.html"),
            styles: [__webpack_require__(/*! ./standings-nav.component.css */ "./src/app/standings-nav/standings-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__["TBracketService"],
            _core_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], StandingsNavComponent);
    return StandingsNavComponent;
}());



/***/ }),

/***/ "./src/app/standings/standings.component.css":
/*!***************************************************!*\
  !*** ./src/app/standings/standings.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YW5kaW5ncy9zdGFuZGluZ3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/standings/standings.component.html":
/*!****************************************************!*\
  !*** ./src/app/standings/standings.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div [class.loader] = \"loading\">\r\n<table class=\"table table-sm\" *ngIf=\"_regionList\">\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th scope=\"col\">Name</th>\r\n\t\t\t<th scope=\"col\" class=\"text-center\" style=\"width: 15%\"># Active Teams</th>\r\n\t\t\t<th scope=\"col\">{{ _regionList[0].name }}</th>\r\n\t\t\t<th scope=\"col\">{{ _regionList[1].name }}</th>\r\n\t\t\t<th scope=\"col\">{{ _regionList[2].name }}</th>\r\n\t\t\t<th scope=\"col\">{{ _regionList[3].name }}</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t\r\n\t\t<tr *ngFor = \"let entry of _standingsList; let i = index\" \r\n\t\t[class.bg-success]=\"entry.player_id == _userService.id\" \r\n\t\t[class.text-white]=\"entry.player_id == _userService.id\">\r\n\t\t\t<td *ngIf=\"entry.player_id == _userService.id\">{{ entry.player }}</td>\r\n\t\t\t<td *ngIf=\"entry.player_id != _userService.id\">\r\n\t\t\t\t<a [routerLink]=\"['/profile']\" [queryParams]=\"{id: entry.player_id}\">{{ entry.player }}</a>\r\n\t\t\t</td>\r\n\t\t\t<td class=\"text-center\">{{ entry.team_count }}</td>\r\n\t\t\t<td><span [class.standings-out]=\"entry.team_a_status == '(OUT)'\">{{ entry.team_a }}\r\n\t\t\t\t<small> {{ entry.team_a_status }}</small></span>\r\n\t\t\t</td>\r\n\t\t\t<td><span [class.standings-out]=\"entry.team_b_status == '(OUT)'\">{{ entry.team_b }}\r\n\t\t\t\t<small> {{ entry.team_b_status }}</small></span>\r\n\t\t\t</td>\r\n\t\t\t<td><span [class.standings-out]=\"entry.team_c_status == '(OUT)'\">{{ entry.team_c }}\r\n\t\t\t\t<small> {{ entry.team_c_status }}</small></span>\r\n\t\t\t</td>\r\n\t\t\t<td><span [class.standings-out]=\"entry.team_d_status == '(OUT)'\">{{ entry.team_d }}\r\n\t\t\t\t<small> {{ entry.team_d_status }}</small></span>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n</div>"

/***/ }),

/***/ "./src/app/standings/standings.component.ts":
/*!**************************************************!*\
  !*** ./src/app/standings/standings.component.ts ***!
  \**************************************************/
/*! exports provided: StandingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingsComponent", function() { return StandingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_entry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/entry.service */ "./src/app/core/entry.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_region_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/region.service */ "./src/app/core/region.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StandingsComponent = /** @class */ (function () {
    function StandingsComponent(_entryService, _userService, _regionService) {
        this._entryService = _entryService;
        this._userService = _userService;
        this._regionService = _regionService;
    }
    Object.defineProperty(StandingsComponent.prototype, "bracket", {
        get: function () {
            return this._bracketId;
        },
        set: function (value) {
            if (value) {
                this._bracketId = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    StandingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        // Retrieve entries for players within bracket
        this._entryService.getEntryStandings(this._bracketId).subscribe(function (data) {
            _this._standingsList = data;
            // Sort the standings by descending team_count (they're pre-sorted by last name descending)
            // this._standingsList.sort((a,b) => (a.team_count > b.team_count) ? -1 : ((b.team_count > a.team_count) ? 1 : 0));
            _this._standingsList.sort(function (a, b) { return (a.standing_points > b.standing_points) ? -1 : ((b.standing_points > a.standing_points) ? 1 : 0); });
            _this.loading = false;
        });
        // Retrieve list of regions to display in column titles
        this._regionService.getRegionList().subscribe(function (data) {
            _this._regionList = data;
        });
    }; // end ngOnInit
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], StandingsComponent.prototype, "bracket", null);
    StandingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-standings',
            template: __webpack_require__(/*! ./standings.component.html */ "./src/app/standings/standings.component.html"),
            styles: [__webpack_require__(/*! ./standings.component.css */ "./src/app/standings/standings.component.css")]
        }),
        __metadata("design:paramtypes", [_core_entry_service__WEBPACK_IMPORTED_MODULE_1__["EntryService"],
            _core_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _core_region_service__WEBPACK_IMPORTED_MODULE_3__["RegionService"]])
    ], StandingsComponent);
    return StandingsComponent;
}());



/***/ }),

/***/ "./src/app/team-details/team-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/team-details/team-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYW0tZGV0YWlscy90ZWFtLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/team-details/team-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/team-details/team-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- team-details.component.html-->\r\n<div *ngIf=\"!_userService.beforeTourney\">\r\n<div [class.loader] = \"loading\">\r\n<div class=\"table-responsive\" *ngIf=\"_entryList && _entryList.length\">\r\n\t<div class = \"table table-borderless table-sm\" *ngFor = \"let entry of _entryList\" id=\"my-teams\">\r\n\t\t<thead>\r\n\t\t\t<tr class=\"table-active\">\r\n\t\t\t\t<th scope=\"col\">Bracket</th>\r\n\t\t\t\t<th scope=\"col\">Region</th>\r\n\t\t\t\t<th scope=\"col\">Original Teams</th>\r\n\t\t\t\t<th scope=\"col\">Active Team(s)</th>\r\n\t\t\t\t<th scope=\"col\">Next Game</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody *ngIf=\"_regionList\">\r\n\t\t\t<tr>\r\n\t\t\t\t<td class=\"text-primary text-pointer\" (click)=\"sendToBracket(entry.tbracket_id)\"><strong>{{ entry.tbracket }}</strong></td>\r\n\t\t\t\t<td>{{ _regionList[0].name }}</td>\r\n\t\t\t\t<td>{{ entry.orig_team_a }}</td>\r\n\t\t\t\t<td>{{ entry.team_a || '**OUT**'}}</td>\r\n\t\t\t\t<td><a [routerLink]=\"['/brackets', entry.tbracket_id]\" fragment={{entry.region_a-1}}>{{ entry.next_team_a }}</a></td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td>{{ _regionList[1].name }}</td>\r\n\t\t\t\t<td>{{ entry.orig_team_b }}</td>\r\n\t\t\t\t<td>{{ entry.team_b || '**OUT**'}}</td>\r\n\t\t\t\t<td><a [routerLink]=\"['/brackets', entry.tbracket_id]\" fragment={{entry.region_b-1}}>{{ entry.next_team_b }}</a></td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td>{{ _regionList[2].name }}</td>\r\n\t\t\t\t<td>{{ entry.orig_team_c }}</td>\r\n\t\t\t\t<td>{{ entry.team_c || '**OUT**'}}</td>\r\n\t\t\t\t<td><a [routerLink]=\"['/brackets', entry.tbracket_id]\" fragment={{entry.region_c-1}}>{{ entry.next_team_c }}</a></td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td>{{ _regionList[3].name }}</td>\r\n\t\t\t\t<td>{{ entry.orig_team_d }}</td>\r\n\t\t\t\t<td>{{ entry.team_d || '**OUT**'}}</td>\r\n\t\t\t\t<td><a [routerLink]=\"['/brackets', entry.tbracket_id]\" fragment={{entry.region_d-1}}>{{ entry.next_team_d }}</a></td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"_userService.beforeTourney\">\r\n\t<br>\r\n\t<div class=\"text-center\">\r\n\t\t<br>\r\n\t\t<h5 class=\"font-italic text-muted\">** Teams will be assigned by Thursday, March 17, 2022, at 10am CST **</h5>\r\n\t\t<small>Check back then to see which brackets your entries were assigned (4 teams, 1 per Region, assigned to each entry)</small>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/team-details/team-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/team-details/team-details.component.ts ***!
  \********************************************************/
/*! exports provided: TeamDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDetailsComponent", function() { return TeamDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/entry.service */ "./src/app/core/entry.service.ts");
/* harmony import */ var _core_region_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/region.service */ "./src/app/core/region.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeamDetailsComponent = /** @class */ (function () {
    function TeamDetailsComponent(_entryService, router, _regionService, _userService) {
        this._entryService = _entryService;
        this.router = router;
        this._regionService = _regionService;
        this._userService = _userService;
    }
    Object.defineProperty(TeamDetailsComponent.prototype, "player", {
        get: function () {
            return this._player;
        },
        set: function (value) {
            if (value) {
                this._player = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    TeamDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        //retrieve entries for user
        this._entryService.getEntryDetailsListMyTeamsByPlayer(this._player.id).subscribe(function (data) {
            _this._entryList = data;
            // Retrieve list of regions to display in tabs
            _this._regionService.getRegionList().subscribe(function (data) {
                _this._regionList = data;
                _this.loading = false;
            });
        });
    };
    // Function to create url that to which user is sent when click on Bracket name
    TeamDetailsComponent.prototype.sendToBracket = function (bracket) {
        this.router.navigate(['/brackets', bracket]);
    }; // end sendToBracket()
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TeamDetailsComponent.prototype, "player", null);
    TeamDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-details',
            template: __webpack_require__(/*! ./team-details.component.html */ "./src/app/team-details/team-details.component.html"),
            styles: [__webpack_require__(/*! ./team-details.component.css */ "./src/app/team-details/team-details.component.css")]
        }),
        __metadata("design:paramtypes", [_core_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_region_service__WEBPACK_IMPORTED_MODULE_3__["RegionService"],
            _core_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], TeamDetailsComponent);
    return TeamDetailsComponent;
}());



/***/ }),

/***/ "./src/app/ui/footer/footer.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/footer/footer.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--src/app/ui/header/footer.component.html-->\r\n\r\n<nav class=\"navbar navbar-dark bg-primary fixed-bottom footer\">\r\n  <div class=\"navbar-expand m-auto navbar-text footer\">\r\n  \t<i class = \"fa fa-ban\"></i>&nbsp;Exit Zero Technologies 2018-2022\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/ui/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ui/header/header.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/header/header.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--src/app/ui/header/header.component.html-->\r\n\r\n<!-- Navigation Menu for site -->\r\n<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<a class=\"navbar-brand p-2\" [routerLink]=\"['/home']\">\r\n\t\t\t<img src=\"../static/front-end/assets/spreadpool_white_no_background_48x114.png\" alt=\"Spreadpool\">\r\n\t\t</a>\r\n\t\t<div class=\"d-flex ml-auto p-2 flex-row order-2 order-md-3 align-middle\">\r\n\t\t\t<a *ngIf=\"currentUser\" class=\"navbar-text\" [routerLink]=\"['/profile']\">Hi, {{ currentUser.first_name }}!</a>\r\n\t        <form class=\"form-inline\">\r\n\t\t    \t<button type=\"button\" class=\"btn btn-outline-light\" (click)=\"logout()\">Log Out</button>\r\n\t\t  \t</form>\r\n\t\t</div>\r\n    <div class=\"p-2 order-3 order-md-2 mob-display\">\r\n      <ul class=\"navbar-nav d-flex flex-row justify-content-between\">\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/profile']\">My Teams</a>\r\n        </li>\r\n        <li class=\"nav-item\" [class.active]=\"isActive(['/brackets'])\" *ngIf = \"_bracketToShow\">\r\n          <a *ngIf=\"_bracketToShow\" class=\"nav-link\" [routerLink]=\"['/brackets', _bracketToShow]\" [fragment]=\"_region_id\">Brackets</a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\" dropdown *ngIf=\"isUserAdmin()\">\r\n          <a class=\"nav-link dropdown-toggle\" dropdownToggle (click)=\"false\" \r\n          href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Admin\r\n          </a>\r\n          <div class=\"dropdown-menu\" *dropdownMenu aria-labelledby=\"navbarDropdown\">\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/admin/c-brackets']\">Manage Brackets</a>\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/admin/a-brackets', _bracketToShow]\">Assign Entries</a>\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/admin/u-games']\">Update Games</a>\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/admin/s-emails']\">Send Emails</a>\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/admin/e-roster']\">Edit Roster</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div> <!--end container-fluid -->\r\n</nav>"

/***/ }),

/***/ "./src/app/ui/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_entry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/entry.service */ "./src/app/core/entry.service.ts");
/* harmony import */ var _core_tbracket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/tbracket.service */ "./src/app/core/tbracket.service.ts");
/* harmony import */ var _core_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/game.service */ "./src/app/core/game.service.ts");
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.store */ "./src/app/app.store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, _userService, _entryService, _tbracketService, _gameService, store) {
        var _this = this;
        this.router = router;
        this._userService = _userService;
        this._entryService = _entryService;
        this._tbracketService = _tbracketService;
        this._gameService = _gameService;
        this.store = store;
        this.isCollapsed = true;
        this._mobile = false;
        store.subscribe(function () { return _this.readState(); });
        this.readState();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // See if the tourney is at the Final Four and show Final Four tab if true
        this._gameService.isFinalFour().subscribe(function (data) {
            // console.log("The Final Four is happening now is: ", data['happening']);
            if (data['happening']) {
                _this._region_id = 4;
            }
            else {
                _this._region_id = 0;
            }
            // Attempted to use redux currentUser but doesn't render quick enough
            // Instead use _userService to get logged in user id, then tbracketService to get player's bracket id
            _this._tbracketService.getListWithPlayer(_this._userService.id).subscribe(function (data) {
                if (data.length > 0) {
                    _this._bracketToShow = data[0].id;
                }
                else {
                    _this._bracketToShow = null;
                }
                // console.log("The bracketToShow is ", this._bracketToShow)
                _this.tbracketList = data;
            });
        });
    }; //end ngOnInit()
    // This function is used to keep Brackets nav bar option 'active' regardless of parameter
    HeaderComponent.prototype.isActive = function (instruction) {
        // Set the second parameter to true if you want to require an exact match.
        return this.router.isActive(this.router.createUrlTree(instruction), false);
    };
    // Invoke logout() method on userService and re-direct user to "/logout/"
    HeaderComponent.prototype.logout = function () {
        this._userService.logout();
        this.router.navigate(['/logout']);
    };
    // Redux store methods
    HeaderComponent.prototype.readState = function () {
        var state = this.store.getState();
        this.currentUser = state.currentUser;
    };
    HeaderComponent.prototype.isUserAdmin = function () {
        if (this.currentUser) {
            return (this.currentUser.is_staff == 1);
        }
        else
            return false;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/ui/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/ui/header/header.component.css")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_app_store__WEBPACK_IMPORTED_MODULE_6__["AppStore"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _core_entry_service__WEBPACK_IMPORTED_MODULE_3__["EntryService"],
            _core_tbracket_service__WEBPACK_IMPORTED_MODULE_4__["TBracketService"],
            _core_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"], Object])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ui/layout/layout.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/layout/layout.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/layout/layout.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n\t<ng-content></ng-content>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/layout/layout.component.ts ***!
  \***********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/ui/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/ui/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/ui/layout/layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-bootstrap.module */ "./src/app/app-bootstrap.module.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__["AppBootstrapModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"],
            ],
            exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]]
        })
    ], UiModule);
    return UiModule;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\DjangoProjects\spreadpool_project\spreadpool\bracket\front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map