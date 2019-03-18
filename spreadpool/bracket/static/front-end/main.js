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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/picklist */ "./node_modules/primeng/picklist.js");
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_picklist__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assign_brackets_assign_brackets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assign-brackets/assign-brackets.component */ "./src/app/admin/assign-brackets/assign-brackets.component.ts");
/* harmony import */ var _create_brackets_create_brackets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-brackets/create-brackets.component */ "./src/app/admin/create-brackets/create-brackets.component.ts");
/* harmony import */ var _update_games_update_games_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update-games/update-games.component */ "./src/app/admin/update-games/update-games.component.ts");
/* harmony import */ var _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game-detail/game-detail.component */ "./src/app/admin/game-detail/game-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 //Needed for Assign Entries page, assign-brackets.component




var routes = [
    { path: '', redirectTo: 'c-brackets', pathMatch: 'full' },
    { path: 'c-brackets', component: _create_brackets_create_brackets_component__WEBPACK_IMPORTED_MODULE_6__["CreateBracketsComponent"] },
    { path: 'a-brackets/:id', component: _assign_brackets_assign_brackets_component__WEBPACK_IMPORTED_MODULE_5__["AssignBracketsComponent"] },
    { path: 'u-games', component: _update_games_update_games_component__WEBPACK_IMPORTED_MODULE_7__["UpdateGamesComponent"] },
];
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _assign_brackets_assign_brackets_component__WEBPACK_IMPORTED_MODULE_5__["AssignBracketsComponent"],
                _create_brackets_create_brackets_component__WEBPACK_IMPORTED_MODULE_6__["CreateBracketsComponent"],
                _update_games_update_games_component__WEBPACK_IMPORTED_MODULE_7__["UpdateGamesComponent"],
                _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_8__["GameDetailComponent"]
            ],
            exports: [
                _assign_brackets_assign_brackets_component__WEBPACK_IMPORTED_MODULE_5__["AssignBracketsComponent"],
                _create_brackets_create_brackets_component__WEBPACK_IMPORTED_MODULE_6__["CreateBracketsComponent"],
                _update_games_update_games_component__WEBPACK_IMPORTED_MODULE_7__["UpdateGamesComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                primeng_picklist__WEBPACK_IMPORTED_MODULE_4__["PickListModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"]
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

module.exports = "<!--assign-brackets.component.html-->\r\n<br>\r\n<div class = \"container\">\r\n\t<div class = \"row justify-content-start\">\r\n\t\t<div class = \"col align-self-center\">\r\n\t\t\t<h6 *ngIf=\"_activeBracket\"><strong>Assign Entries to the {{ _activeBracket.name }} Bracket</strong></h6>\r\n\t\t</div>\r\n\t\t<div class = \"col\">\r\n\t\t\t<button class=\"btn btn-secondary\" (click)=\"goBack()\">Go Back</button>\r\n\t\t\t&nbsp;\r\n\t\t\t<button class=\"btn btn-success\" (click)=\"saveAndGoBack()\">Save Assignments & Go Back</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<br>\r\n<div *ngIf=\"_unassignedEntries && _assignedEntries && _activeBracket\">\r\n\t<p-pickList [source] = \"_unassignedEntries\" [target] = \"_assignedEntries\" sourceHeader=\"Unassigned Entries\" \r\n\ttargetHeader=\"{{_activeBracket.name}} Bracket Entries\" [responsive]=\"true\" filterBy=\"e_name\" dragdrop=\"true\" \r\n\tsourceFilterPlaceholder=\"Search by entry name\" targetFilterPlaceholder=\"Search by entry name\" \r\n\t[sourceStyle]=\"{'height':'500px'}\" [targetStyle]=\"{'height':'500px'}\">\r\n\t\t<ng-template let-entry pTemplate=\"item\">\r\n\t\t\t<div class=\"ui-helper-clearfix\">\r\n\t\t\t\t{{ entry.e_name }}\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t</p-pickList>\r\n</div>\r\n<br>"

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
        // Find tbracket id from parameter of url and update target array (_assignedEntries)
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this._tbracketService.getTbracket(_this.id).subscribe(function (data) {
                _this._activeBracket = data;
            });
            _this._entryService.getEntryListByBracket(_this.id).subscribe(function (data) {
                _this._assignedEntries = data;
                // console.log("Entries that have bracket = ", this._activeBracket.name, " assigned: ", this._assignedEntries);
            });
        });
        // this._thisBracket = 1;
        // source array = all entries without a tbracket assigned (_unassignedEntries)
        this._entryService.getEntryListbyNullBracket().subscribe(function (data) {
            _this._unassignedEntries = data;
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

module.exports = "<!--create-brackets.component.html-->\r\n<br>\r\n<h6><strong>Add Bracket</strong></h6>\r\n<div class=\"container\">\r\n\t<div class = \"row\">\r\n\t\t<div class = \"col\">\r\n\t\t\t<form [formGroup]=\"bracketAddForm\" (ngSubmit)=\"addBracket(bracketAddForm.value)\">\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t<div class=\"form-row\">\r\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t<!-- <label for=\"bracket_name\">Bracket</label> -->\r\n\t\t\t\t\t\t    <input type=\"text\" class=\"form-control\" placeholder=\"Type bracket name..\" \r\n\t\t\t\t\t\t    id=\"bracket_name\" [formControl] = \"bracket_name\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" id=\"submit\" class=\"btn btn-success\" \r\n\t\t\t\t\t\t\t[disabled]=\"!bracketAddForm.valid\">Add Bracket</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t\t<div class = \"col\">\r\n\t\t\t<!-- <button class=\"btn btn-dark\" >Delete/Create All Entries</button> -->\r\n\t\t\t<button class=\"btn btn-dark\" (click)=\"resetEntries()\">Delete/Create All Entries</button>\r\n\t\t\t&nbsp;\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<br>\r\n<h6><strong>Brackets</strong></h6>\r\n<br>\r\n<table class=\"table table-sm\">\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th scope=\"col\">#</th>\r\n\t\t\t<th scope=\"col\">Name</th>\r\n\t\t\t<th scope=\"col\" style=\"width: 10%\">Num Entries</th>\r\n\t\t\t<th scope=\"col\" style=\"width: 10%\">Id</th>\r\n\t\t\t<th scope=\"col\">Actions</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<tr *ngFor = \"let tbracket of _tbracketList; let i = index\">\r\n\t\t\t<th scope=\"row\">{{i + 1}}</th>\r\n\t\t\t<td>{{ tbracket.name }}</td>\r\n\t\t\t<td>{{ tbracket.entry_count}}</td>\r\n\t\t\t<td>{{ tbracket.id }}</td>\r\n\t\t\t<td>\r\n\t\t\t\t<button class=\"btn btn-danger custom\" (click)=\"openDeleteModal(tbracket.id, tbracket.name)\">Delete</button>\r\n\t\t\t\t&nbsp;\r\n\t\t\t\t<button class=\"btn btn-warning\" (click)=\"reassignBracket(tbracket.id, tbracket.name)\">Re-assign</button>\r\n\t\t\t\t&nbsp;\r\n\t\t\t\t<button class=\"btn btn-info custom\" (click)=\"resetBracket(tbracket.id, tbracket.name)\">Reset</button>\r\n\t\t\t\t&nbsp;\r\n\t\t\t\t<button class=\"btn btn-success\" (click)=\"navToAssign(tbracket.id)\">Assign Entries</button>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<!-- <ng-template #template>\r\n\t<div class=\"modal-header\">\r\n\t\t<h4 class=\"modal-title pull-left\">Delete Bracket</h4>\r\n\t\t<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"deleteModalRef.hide()\">\r\n\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"modal-body\">\r\n\t\tAre you sure you want to delete this Bracket?\r\n\t</div>\r\n\t<div class=\"modal-footer\">\r\n\t\t\t<button class=\"btn btn-danger custom\" \r\n\t\t\t(click)=\"deleteModalRef.hide(); deleteBracket()\">Delete</button>\r\n\t</div>\r\n</ng-template>  -->"

/***/ }),

/***/ "./src/app/admin/create-brackets/create-brackets.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/create-brackets/create-brackets.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateBracketsComponent, DeleteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBracketsComponent", function() { return CreateBracketsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteModalComponent", function() { return DeleteModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/tbracket.service */ "./src/app/core/tbracket.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_entry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/entry.service */ "./src/app/core/entry.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
        this.bracketAddForm = fb.group({
            'bracket_name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.bracket_name = this.bracketAddForm.controls['bracket_name']; // allows for other properties, e.g. error values
    }
    CreateBracketsComponent.prototype.ngOnInit = function () {
        this.new_bracket = { 'id': null, 'name': '', 'entry_count': null }; //initialize new_bracket
        this.resetList();
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
    CreateBracketsComponent.prototype.reassignBracket = function (bracket_id, bracket_name) {
        // console.log("Tbracket id for re-assignment is", bracket_name);
        this._tbracketService.reassignTbracket(bracket_id, this._userService.token).subscribe(function (data) {
            console.log(bracket_name, " Tbracket entries re-assigned!");
        });
    };
    CreateBracketsComponent.prototype.resetBracket = function (bracket_id, bracket_name) {
        this._tbracketService.resetTbracket(bracket_id).subscribe(function (data) {
            console.log(bracket_name, " Tbracket has been reset!");
        });
    };
    CreateBracketsComponent.prototype.resetList = function () {
        var _this = this;
        //refresh Tbracket list
        this._tbracketService.getList().subscribe(function (data) {
            _this._tbracketList = data;
        });
        // console.log("Tbracket List has been reset")
    }; // end resetList()
    CreateBracketsComponent.prototype.openDeleteModal = function (bracket_id, bracket_name) {
        var _this = this;
        var initialState = {
            tbracket_id: bracket_id,
            tbracket_name: bracket_name
        };
        this.deleteModalRef = this.modalService.show(DeleteModalComponent, { initialState: initialState });
        this.modalService.onHidden.subscribe(function (reason) {
            // Upon modal being closed run these actions
            _this.resetList();
        });
    }; // end openDeleteModeal()
    CreateBracketsComponent.prototype.resetEntries = function () {
        // Delete all entries, then create all new Entries based on User registration data
        this._entryService.resetAllEntries().subscribe(function (data) {
            console.log("All Entries have been deleted, then re-created based on User data!");
        });
    }; //end resetEntries()
    CreateBracketsComponent.prototype.navToAssign = function (tbracket_id) {
        this.router.navigate(['/admin/a-brackets', tbracket_id]);
    }; //end navToAssign
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
}());

/* This is the component which we pass in openDeleteModal */
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
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Confirm Bracket Deletion</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"deleteModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <h6>Are you sure you want to delete the <strong>{{ tbracket_name }}</strong> bracket?</h6>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteModalRef.hide(); deleteBracket(tbracket_id)\">Delete</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"],
            _core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__["TBracketService"],
            _core_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], DeleteModalComponent);
    return DeleteModalComponent;
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

module.exports = "<!--game-detail.component.html-->\r\n<form [formGroup]=\"gameUpdateForm\" (ngSubmit)=\"updateGame()\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"col-md-6 non-form-element\"><strong>Game id: </strong>{{ _game.id }}</div>\r\n\t\t\t<div class=\"col-md-6 non-form-element\"><strong>Region: </strong>{{ _game.region }}</div>\r\n\t\t</div>\r\n\t\t\t\r\n\t\t<div class=\"form-row align-items-center\">\r\n\t\t\t<div class=\"col-md-4 non-form-element\"><strong>Team 1: </strong>{{ _game.team1 }}</div>\r\n\t\t\t<div class=\"form-group col-md-4\">\r\n\t\t\t\t<label for=\"team1_score\">Team 1 Score:</label>\r\n\t\t\t    <input type=\"number\" class=\"form-control\"\r\n\t\t\t    id=\"team1_score\" [formControl] = \"team1_score\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col-md-4\">\r\n\t\t\t\t<label for=\"spread\">Game Spread:</label>\r\n\t\t\t    <input type=\"number\" class=\"form-control\"\r\n\t\t\t    id=\"spread\" [formControl] = \"spread\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-row align-items-center\">\r\n\t\t\t<div class=\"col-md-4 non-form-element\"><strong>Team 2: </strong>{{ _game.team2 }}</div>\r\n\t\t\t<div class=\"form-group col-md-4\">\r\n\t\t\t\t<label for=\"team2_score\">Team 2 Score:</label>\r\n\t\t\t    <input type=\"number\" class=\"form-control\"\r\n\t\t\t    id=\"team2_score\" [formControl] = \"team2_score\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col-md-4\"></div>\r\n\t\t</div>\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<button type=\"submit\" id=\"submit\" class=\"btn btn-success\">Update Game</button>\r\n\t\t\t&nbsp;\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n<br>\r\n<div class = \"container\">\r\n\t<div class=\"row justify-content-start\">\r\n\t\t<div class = \"col\">\r\n\t\t\t<button class=\"btn btn-info\" (click)=\"resetGame()\">Reset Game</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<br>"

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
        // Update Game form setup
        this.gameUpdateForm = fb.group({
            'spread': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'team1_score': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'team2_score': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.spread = this.gameUpdateForm.controls['spread'];
        this.team1_score = this.gameUpdateForm.controls['team1_score'];
        this.team2_score = this.gameUpdateForm.controls['team2_score'];
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
    };
    GameDetailComponent.prototype.updateGame = function () {
        var _this = this;
        this._game.team1_score = this.team1_score.value;
        this._game.spread = this.spread.value;
        this._game.team2_score = this.team2_score.value;
        this._gameService.updateGame(this._game).subscribe(function (data) {
            console.log("Game updated with:", _this._game);
        });
        // console.log("Game Update method called...updated this object", this._game);
    }; //end updateGame()
    GameDetailComponent.prototype.resetGame = function () {
        var _this = this;
        // console.log("Game id for reset is", this._game.id);
        this._gameService.resetGame(this._game.id).subscribe(function (data) {
            console.log("Game #", _this._game.id, "has been reset!");
            // navigate back to Retrieve Game page
            // this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
            // 	this.router.navigate(['/admin/u-games']));
            // **not working** attempt to reset form with new _game data
            // this.gameUpdateForm.reset();
            // this.gameUpdateForm.patchValue(this._game);
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

module.exports = "<!--update-gamess.component.html-->\r\n<br>\r\n<h5><strong>Retrieve Game</strong></h5>\r\n<div class=\"container\">\r\n\t<div class = \"row\">\r\n\t\t<div class = \"col\">\r\n\t\t\t<form [formGroup]=\"gameRetrieveForm\" (ngSubmit)=\"retrieveGame()\">\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t<div class=\"form-row\">\r\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t<!-- <label for=\"bracket_name\">Bracket</label> -->\r\n\t\t\t\t\t\t    <input type=\"number\" min = \"1\" max = \"63\" class=\"form-control\" placeholder=\"Enter game id to Update..\" \r\n\t\t\t\t\t\t    id=\"game_id\" [formControl] = \"game_id\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" id=\"submit\" class=\"btn btn-success\" \r\n\t\t\t\t\t\t\t[disabled]=\"!gameRetrieveForm.valid\">Retrieve Game</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div> <!--Update Game Form column-->\r\n\t\t<div class = \"col\">\r\n\t\t\t<button class=\"btn btn-dark\" (click)=\"replayAllGames()\">Replay All Games</button>\r\n\t\t\t&nbsp;\r\n\t\t\t<button class=\"btn btn-warning\" (click)=\"resetAllGames()\">Reset All Games (Testing Only)</button>\r\n\t\t</div> <!--Other Game Actions column-->\r\n\t</div> <!--row-->\r\n</div> <!--container-->\r\n<br>\r\n<!-- <div class = \"container\">\r\n\t<div class=\"row justify-content-start\">\r\n\t\t<div class = \"col\">\r\n\t\t\t<button class=\"btn btn-info\" (click)=\"\">Reset Game</button>\r\n\t\t</div>\r\n\t</div>\r\n</div> -->\r\n<h5><strong>Update Game</strong></h5>\r\n<br>\r\n<app-game-detail *ngIf=\"_currentGame\" [game]=\"_currentGame\"></app-game-detail>\r\n"

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
    // isCollapsed = true;
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
            this._userService.id = this.token_id['id'];
            this._userService.token = this.token_id['token'];
            this._userService.refreshToken();
            window.localStorage.clear();
        }
        // *** For testing purposes when launch Angular via 'ng serve --proxy-config proxyconfig.json' from project folder
        // Login via _userService to establish token with preset values 
        else {
            // this._userService.id = 2;
            // this._userService.login({'email': 'vcaratini@cubs.com', 'password': 'Maddon55'});
            this._userService.id = 10;
            this._userService.login({ 'email': 'bzobrist@cubs.com', 'password': 'Maddon55' });
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
/* harmony import */ var _bracket_detail_bracket_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bracket-detail/bracket-detail.component */ "./src/app/bracket-detail/bracket-detail.component.ts");
/* harmony import */ var _team_details_team_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./team-details/team-details.component */ "./src/app/team-details/team-details.component.ts");
/* harmony import */ var _bracket_game_bracket_game_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bracket-game/bracket-game.component */ "./src/app/bracket-game/bracket-game.component.ts");
/* harmony import */ var _bracketff_detail_bracketff_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bracketff-detail/bracketff-detail.component */ "./src/app/bracketff-detail/bracketff-detail.component.ts");
/* harmony import */ var _admin_create_brackets_create_brackets_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/create-brackets/create-brackets.component */ "./src/app/admin/create-brackets/create-brackets.component.ts");
/* harmony import */ var _team_nextup_team_nextup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./team-nextup/team-nextup.component */ "./src/app/team-nextup/team-nextup.component.ts");
/* harmony import */ var _standings_standings_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./standings/standings.component */ "./src/app/standings/standings.component.ts");
/* harmony import */ var _standings_nav_standings_nav_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./standings-nav/standings-nav.component */ "./src/app/standings-nav/standings-nav.component.ts");
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
                _bracket_detail_bracket_detail_component__WEBPACK_IMPORTED_MODULE_18__["BracketDetailComponent"],
                _team_details_team_details_component__WEBPACK_IMPORTED_MODULE_19__["TeamDetailsComponent"],
                _bracket_game_bracket_game_component__WEBPACK_IMPORTED_MODULE_20__["BracketGameComponent"],
                _bracketff_detail_bracketff_detail_component__WEBPACK_IMPORTED_MODULE_21__["BracketffDetailComponent"],
                _admin_create_brackets_create_brackets_component__WEBPACK_IMPORTED_MODULE_22__["DeleteModalComponent"],
                _team_nextup_team_nextup_component__WEBPACK_IMPORTED_MODULE_23__["TeamNextupComponent"],
                _standings_standings_component__WEBPACK_IMPORTED_MODULE_24__["StandingsComponent"],
                _standings_nav_standings_nav_component__WEBPACK_IMPORTED_MODULE_25__["StandingsNavComponent"],
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
            entryComponents: [_profile_form_modal_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_17__["ProfileFormModalComponent"], _admin_create_brackets_create_brackets_component__WEBPACK_IMPORTED_MODULE_22__["DeleteModalComponent"]]
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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _core_user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/user.reducer */ "./src/app/core/user.reducer.ts");
// .src/app/app.store.ts



var AppStore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('App.store');
var devtools = window['devToolsExtension'] ?
    window['devToolsExtension']() : function (f) { return f; };
function createAppStore() {
    return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_core_user_reducer__WEBPACK_IMPORTED_MODULE_2__["UserReducer"], Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(devtools));
}
var appStoreProviders = [
    { provide: AppStore, useFactory: createAppStore }
];


/***/ }),

/***/ "./src/app/bracket-detail/bracket-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/bracket-detail/bracket-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYWNrZXQtZGV0YWlsL2JyYWNrZXQtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bracket-detail/bracket-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/bracket-detail/bracket-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--bracket-detail.component.html-->\r\n<!-- <br>\r\n<h6 class=\"text-muted text-center\">{{ _region }} Region Bracket</h6> -->\r\n\r\n<main id=\"tournament\" *ngIf=\"_bracketGames && _bracketOwners\">\r\n\t<!-- First round games -->\r\n\t<ul class=\"round round-1\">\r\n\t\t<ng-template ngFor let-game [ngForOf]=\"_r1_game_numbers\">\r\n\t\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-top\">{{ _bracketGames[game+getRgRdIncr(1)].team1}}\r\n\t\t\t\t\r\n\t\t\t\t<!-- <app-bracket-game [bracket_id]=\"_bracket.id\" [team_id] = \"_bracketGames[game+getRgRdIncr(1)].team1_id\">\r\n\t\t\t\t</app-bracket-game> -->\r\n\t\t\t\t\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners && _bracketOwners[game+getRgRdIncr(1)].team1_owner[0].team1_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[game+getRgRdIncr(1)].team1_owner[0].team1_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t\r\n\t\t\t\t<span>{{ getTeam1Result(_bracketGames[game+getRgRdIncr(1)]) }}</span>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-bottom \">{{ _bracketGames[game+getRgRdIncr(1)].team2}}\r\n\t\t\t\t<!-- <app-bracket-game [bracket_id]=\"_bracket.id\" [team_id] = \"_bracketGames[game+getRgRdIncr(1)].team2_id\">\r\n\t\t\t\t</app-bracket-game> -->\r\n\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners && _bracketOwners[game+getRgRdIncr(1)].team2_owner[0].team2_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[game+getRgRdIncr(1)].team2_owner[0].team2_owner }})\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<span>{{ getTeam2Result(_bracketGames[game+getRgRdIncr(1)]) }}</span>\r\n\t\t\t</li>\r\n\t\t</ng-template>\r\n\t\t\r\n\t\t<!-- <app-bracket-game *ngFor=\"let game_num of _r1_game_numbers\" \r\n\t\t[game]=\"_bracketGames[game_num+getRgRdIncr(1)]\" [bracket_id]=\"_bracket.id\">\r\n\t\t</app-bracket-game> -->\r\n\t\t\r\n\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t</ul>\r\n\t<!-- Second round games -->\r\n\t<ul class=\"round round-2\">\r\n\t\t<ng-template ngFor let-game [ngForOf]=\"_r2_game_numbers\">\r\n\t\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-top\">{{ _bracketGames[game+getRgRdIncr(2)].team1}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners && _bracketOwners[game+getRgRdIncr(2)].team1_owner[0].team1_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[game+getRgRdIncr(2)].team1_owner[0].team1_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span [class.filler]=\"!getTeam1Result(_bracketGames[game+getRgRdIncr(2)])\">\r\n\t\t\t\t\t{{ getTeam1Result(_bracketGames[game+getRgRdIncr(2)])}}\r\n\t\t\t\t</span>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-bottom \">{{ _bracketGames[game+getRgRdIncr(2)].team2}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners && _bracketOwners[game+getRgRdIncr(2)].team2_owner[0].team2_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[game+getRgRdIncr(2)].team2_owner[0].team2_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span [class.filler]=\"!getTeam2Result(_bracketGames[game+getRgRdIncr(2)])\">\r\n\t\t\t\t\t{{ getTeam2Result(_bracketGames[game+getRgRdIncr(2)])}}\r\n\t\t\t\t</span>\r\n\t\t\t</li>\r\n\t\t</ng-template>\r\n\r\n\t\t<!-- <app-bracket-game *ngFor=\"let game_num of _r2_game_numbers\" \r\n\t\t[game]=\"_bracketGames[game_num+getRgRdIncr(2)]\" [bracket_id]=\"_bracket.id\">\r\n\t\t</app-bracket-game> -->\r\n\r\n\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t</ul>\r\n\t<!-- Third round games -->\r\n\t<ul class=\"round round-3\">\r\n\t\t<ng-template ngFor let-game [ngForOf]=\"_r3_game_numbers\">\r\n\t\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-top\">{{ _bracketGames[game+getRgRdIncr(3)].team1}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners && _bracketOwners[game+getRgRdIncr(3)].team1_owner[0].team1_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[game+getRgRdIncr(3)].team1_owner[0].team1_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span [class.filler]=\"!getTeam1Result(_bracketGames[game+getRgRdIncr(3)])\">\r\n\t\t\t\t\t{{ getTeam1Result(_bracketGames[game+getRgRdIncr(3)])}}\r\n\t\t\t\t</span>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-bottom \">{{ _bracketGames[game+getRgRdIncr(3)].team2}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners && _bracketOwners[game+getRgRdIncr(3)].team2_owner[0].team2_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[game+getRgRdIncr(3)].team2_owner[0].team2_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span [class.filler]=\"!getTeam2Result(_bracketGames[game+getRgRdIncr(3)])\">\r\n\t\t\t\t\t{{ getTeam2Result(_bracketGames[game+getRgRdIncr(3)])}}\r\n\t\t\t\t</span>\r\n\t\t\t</li>\r\n\t\t</ng-template>\r\n\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t</ul>\r\n\t<!-- Fourth round games -->\r\n\t<ul class=\"round round-4\">\r\n\t\t<ng-template ngFor let-game [ngForOf]=\"_r4_game_numbers\">\r\n\t\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-top\">{{ _bracketGames[game+getRgRdIncr(4)].team1}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners && _bracketOwners[game+getRgRdIncr(4)].team1_owner[0].team1_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[game+getRgRdIncr(4)].team1_owner[0].team1_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span [class.filler]=\"!getTeam1Result(_bracketGames[game+getRgRdIncr(4)])\">\r\n\t\t\t\t\t{{ getTeam1Result(_bracketGames[game+getRgRdIncr(4)])}}\r\n\t\t\t\t</span>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-bottom \">{{ _bracketGames[game+getRgRdIncr(4)].team2}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners && _bracketOwners[game+getRgRdIncr(4)].team2_owner[0].team2_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[game+getRgRdIncr(4)].team2_owner[0].team2_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span [class.filler]=\"!getTeam2Result(_bracketGames[game+getRgRdIncr(4)])\">\r\n\t\t\t\t\t{{ getTeam2Result(_bracketGames[game+getRgRdIncr(4)])}}\r\n\t\t\t\t</span>\r\n\t\t\t</li>\r\n\t\t</ng-template>\r\n\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t</ul>\t\t\r\n</main>"

/***/ }),

/***/ "./src/app/bracket-detail/bracket-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/bracket-detail/bracket-detail.component.ts ***!
  \************************************************************/
/*! exports provided: BracketDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BracketDetailComponent", function() { return BracketDetailComponent; });
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

var BracketDetailComponent = /** @class */ (function () {
    function BracketDetailComponent() {
        //Creates South Region game id arrays for each Round
        this._r1_game_numbers = Array.from({ length: 8 }, function (v, k) { return k + 1; });
        this._r2_game_numbers = Array.from({ length: 4 }, function (v, k) { return k + 33; });
        this._r3_game_numbers = Array.from({ length: 2 }, function (v, k) { return k + 49; });
        this._r4_game_numbers = Array.from({ length: 1 }, function (v, k) { return k + 57; });
    }
    Object.defineProperty(BracketDetailComponent.prototype, "bracket", {
        get: function () {
            return this._bracket;
        },
        set: function (value) {
            if (value) {
                this._bracket = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BracketDetailComponent.prototype, "bracketOwners", {
        get: function () {
            return this._bracketOwners;
        },
        set: function (value) {
            if (value) {
                this._bracketOwners = value;
                // console.log ("Detail component bracketOwners: ", this._bracketOwners);
            }
        },
        enumerable: true,
        configurable: true
    });
    BracketDetailComponent.prototype.ngOnInit = function () {
        // console.log ("Detail component bracketGames: ", this._bracketGames);
    };
    BracketDetailComponent.prototype.getRgRdIncr = function (x) {
        //To identify proper increment to add to South Region game id arrays
        //to generate other regions' game ids
        switch (this._region) {
            case 'South': {
                return 0;
                break;
            }
            case 'West': {
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
            case 'East': {
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
            case 'Midwest': {
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
    }; //end getRdMult(x)
    BracketDetailComponent.prototype.getTeam1Result = function (game) {
        // Determine whether to show score (post-game) or spread (pre-game)
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
    BracketDetailComponent.prototype.getTeam2Result = function (game) {
        // Determine whether to show score (post-game) or spread (pre-game)
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
    }; // end getTeam1Result(game)		
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], BracketDetailComponent.prototype, "bracket", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], BracketDetailComponent.prototype, "bracketOwners", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('region'),
        __metadata("design:type", String)
    ], BracketDetailComponent.prototype, "_region", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bracketGames'),
        __metadata("design:type", Array)
    ], BracketDetailComponent.prototype, "_bracketGames", void 0);
    BracketDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bracket-detail',
            template: __webpack_require__(/*! ./bracket-detail.component.html */ "./src/app/bracket-detail/bracket-detail.component.html"),
            styles: [__webpack_require__(/*! ./bracket-detail.component.css */ "./src/app/bracket-detail/bracket-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BracketDetailComponent);
    return BracketDetailComponent;
}());



/***/ }),

/***/ "./src/app/bracket-game/bracket-game.component.css":
/*!*********************************************************!*\
  !*** ./src/app/bracket-game/bracket-game.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYWNrZXQtZ2FtZS9icmFja2V0LWdhbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/bracket-game/bracket-game.component.html":
/*!**********************************************************!*\
  !*** ./src/app/bracket-game/bracket-game.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- bracket-game.component.html -->\r\n\r\n<!-- <li class=\"spacer\">&nbsp;</li>\r\n<li class=\"game game-top\">{{ _game.team1 || ' '}} {{ _team1_owner || ' '}}<span>{{ getTeam1Result(_game) || '22' }}\r\n</span></li>\r\n<li class=\"game game-spacer\">&nbsp;</li>\r\n<li class=\"game game-bottom \">{{ _game.team2 || ' '}} {{ _team2_owner || ' '}}<span>{{ getTeam2Result(_game) || '33'}}\r\n</span></li> -->\r\n\r\n{{ _team_owner }}"

/***/ }),

/***/ "./src/app/bracket-game/bracket-game.component.ts":
/*!********************************************************!*\
  !*** ./src/app/bracket-game/bracket-game.component.ts ***!
  \********************************************************/
/*! exports provided: BracketGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BracketGameComponent", function() { return BracketGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_entry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/entry.service */ "./src/app/core/entry.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BracketGameComponent = /** @class */ (function () {
    // @Input('owner') _owner: string;
    function BracketGameComponent(_entryService) {
        this._entryService = _entryService;
    }
    Object.defineProperty(BracketGameComponent.prototype, "bracket_id", {
        get: function () {
            return this._bracket_id;
        },
        set: function (value) {
            if (value) {
                this._bracket_id = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    BracketGameComponent.prototype.ngOnInit = function () {
    };
    BracketGameComponent.prototype.ngOnChanges = function () {
        var _this = this;
        //The only value that changes in this component upon a bracket change is the player, i.e. team_owner
        //associated with each team.  Preferable to get from initial API call but haven't figured that out yet!!!
        this._team_owner = '';
        if (this._team_id) {
            this._entryService.getEntryNameByTeamAndBracket(this._bracket_id, this._team_id).subscribe(function (entry) {
                if (entry[0]) {
                    _this._team_owner = '(' + entry[0].player + ')';
                }
                ;
            });
        }
        // if (this._owner) {
        // 	this._team_owner = this._owner
        // }
    }; //end ngOnChanges
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], BracketGameComponent.prototype, "bracket_id", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('team_id'),
        __metadata("design:type", Number)
    ], BracketGameComponent.prototype, "_team_id", void 0);
    BracketGameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bracket-game',
            template: __webpack_require__(/*! ./bracket-game.component.html */ "./src/app/bracket-game/bracket-game.component.html"),
            styles: [__webpack_require__(/*! ./bracket-game.component.css */ "./src/app/bracket-game/bracket-game.component.css")]
        }),
        __metadata("design:paramtypes", [_core_entry_service__WEBPACK_IMPORTED_MODULE_1__["EntryService"]])
    ], BracketGameComponent);
    return BracketGameComponent;
}());



/***/ }),

/***/ "./src/app/bracketff-detail/bracketff-detail.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/bracketff-detail/bracketff-detail.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYWNrZXRmZi1kZXRhaWwvYnJhY2tldGZmLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/bracketff-detail/bracketff-detail.component.html":
/*!******************************************************************!*\
  !*** ./src/app/bracketff-detail/bracketff-detail.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--bracketff-detail.component.html-->\r\n<!-- <br>\r\n<h6 class=\"text-muted text-center\">Final Four Bracket</h6> -->\r\n\r\n<main id=\"tournament\" *ngIf=\"_bracketGames  && _bracketOwners\">\r\n\t<!-- First round games -->\r\n\t<ul class=\"round round-5\">\r\n\t\t<ng-template ngFor let-game [ngForOf]=\"_r5_game_numbers\">\r\n\t\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-top\">{{ _bracketGames[game].team1 || ' '}}\r\n\t\t\t\t<!-- <app-bracket-game [bracket_id]=\"_bracket.id\" [team_id] = \"_bracketGames[game].team1_id\">\r\n\t\t\t\t</app-bracket-game> -->\r\n\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners && _bracketOwners[game].team1_owner[0].team1_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[game].team1_owner[0].team1_owner }})\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<span [class.filler]=\"!getTeam1Result(_bracketGames[game])\">\r\n\t\t\t\t\t{{ getTeam1Result(_bracketGames[game]) }}\r\n\t\t\t\t</span>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-bottom \">{{ _bracketGames[game].team2 || ' '}}\r\n\t\t\t\t<!-- <app-bracket-game [bracket_id]=\"_bracket.id\" [team_id] = \"_bracketGames[game].team2_id\">\r\n\t\t\t\t</app-bracket-game> -->\r\n\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners && _bracketOwners[game].team2_owner[0].team2_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[game].team2_owner[0].team2_owner }})\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<span [class.filler]=\"!getTeam2Result(_bracketGames[game])\">\r\n\t\t\t\t\t{{ getTeam2Result(_bracketGames[game]) }}\r\n\t\t\t\t</span>\r\n\t\t\t</li>\r\n\t\t</ng-template>\r\n\t\t\r\n\t\t<!-- <app-bracket-game *ngFor=\"let game_num of _r1_game_numbers\" \r\n\t\t[game]=\"_bracketGames[game_num+getRgRdIncr(1)]\" [bracket_id]=\"_bracket.id\">\r\n\t\t</app-bracket-game> -->\r\n\t\t\r\n\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t</ul>\r\n\t<!-- Second round games -->\r\n\t<ul class=\"round round-6\">\r\n\t\t<ng-template ngFor let-game [ngForOf]=\"_r6_game_numbers\">\r\n\t\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-top\">{{ _bracketGames[game].team1 || ' '}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners && _bracketOwners[game].team1_owner[0].team1_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[game].team1_owner[0].team1_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span [class.filler]=\"!getTeam1Result(_bracketGames[game])\">\r\n\t\t\t\t\t{{ getTeam1Result(_bracketGames[game]) }}\r\n\t\t\t\t</span>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-bottom \">{{ _bracketGames[game].team2 || ' '}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners && _bracketOwners[game].team2_owner[0].team2_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[game].team2_owner[0].team2_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span [class.filler]=\"!getTeam2Result(_bracketGames[game])\">\r\n\t\t\t\t\t{{ getTeam2Result(_bracketGames[game]) }}\r\n\t\t\t\t</span>\r\n\t\t\t</li>\r\n\t\t</ng-template>\r\n\r\n\t\t<!-- <app-bracket-game *ngFor=\"let game_num of _r2_game_numbers\" \r\n\t\t[game]=\"_bracketGames[game_num+getRgRdIncr(2)]\" [bracket_id]=\"_bracket.id\">\r\n\t\t</app-bracket-game> -->\r\n\r\n\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t</ul>\r\n"

/***/ }),

/***/ "./src/app/bracketff-detail/bracketff-detail.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/bracketff-detail/bracketff-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: BracketffDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BracketffDetailComponent", function() { return BracketffDetailComponent; });
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

var BracketffDetailComponent = /** @class */ (function () {
    function BracketffDetailComponent() {
        //Creates Final Four game id arrays for each Round
        this._r5_game_numbers = [61, 62];
        this._r6_game_numbers = [63];
    }
    Object.defineProperty(BracketffDetailComponent.prototype, "bracket", {
        get: function () {
            return this._bracket;
        },
        set: function (value) {
            if (value) {
                this._bracket = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BracketffDetailComponent.prototype, "bracketOwners", {
        get: function () {
            return this._bracketOwners;
        },
        set: function (value) {
            if (value) {
                this._bracketOwners = value;
                // console.log ("Detail component bracketOwners: ", this._bracketOwners);
            }
        },
        enumerable: true,
        configurable: true
    });
    BracketffDetailComponent.prototype.ngOnInit = function () {
        //console.log ("Detail component bracketGames: ", this._bracketGames);
    };
    BracketffDetailComponent.prototype.getTeam1Result = function (game) {
        // Determine whether to show score (post-game) or spread (pre-game)
        if (game.team1_score > 0) {
            return game.team1_score;
        }
        else if (game.spread > 0) {
            return -game.spread - 0.5;
        }
    }; // end getTeam1Result(game)
    BracketffDetailComponent.prototype.getTeam2Result = function (game) {
        // Determine whether to show score (post-game) or spread (pre-game)
        if (game.team2_score > 0) {
            return game.team2_score;
        }
        else if (game.spread < 0) {
            return game.spread - 0.5;
        }
    }; // end getTeam1Result(game)		
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], BracketffDetailComponent.prototype, "bracket", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], BracketffDetailComponent.prototype, "bracketOwners", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bracketGames'),
        __metadata("design:type", Array)
    ], BracketffDetailComponent.prototype, "_bracketGames", void 0);
    BracketffDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bracketff-detail',
            template: __webpack_require__(/*! ./bracketff-detail.component.html */ "./src/app/bracketff-detail/bracketff-detail.component.html"),
            styles: [__webpack_require__(/*! ./bracketff-detail.component.css */ "./src/app/bracketff-detail/bracketff-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BracketffDetailComponent);
    return BracketffDetailComponent;
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

module.exports = "<!--brackets.component.html-->\r\n\r\n<div class=\"container\">\r\n    <small class=\"text-muted\">(Click to see bracket)</small>\r\n    <nav class=\"navbar\">\r\n\t   <ul class=\"nav nav-pills\">\r\n\t\t\t<li class = \"nav-item\" *ngFor = \"let tbracket of tbracketList\">\r\n\t\t\t\t<a class = \"nav-link\" [routerLink]=\"['/brackets', tbracket.id]\"\r\n\t\t\t\t[class.active]=\"isActive(tbracket.id)\"\r\n\t\t\t\t>{{ tbracket.name }}</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</nav>\r\n</div>\r\n<br>\r\n<div>\r\n  <tabset>\r\n    <tab heading=\"East\">\r\n    \t<app-bracket-detail *ngIf=\"activeBracket && eastGames\" [bracket]=\"activeBracket\" \r\n    \t\t[region]=\"'East'\" [bracketGames]=\"eastGames\" [bracketOwners]=\"eastOwners\">\r\n    \t</app-bracket-detail>\r\n    </tab>\r\n    <tab heading=\"West\">\r\n    \t<app-bracket-detail *ngIf=\"activeBracket && westGames\" [bracket]=\"activeBracket\" \r\n    \t\t[region]=\"'West'\" [bracketGames]=\"westGames\" [bracketOwners]=\"westOwners\">\r\n    \t</app-bracket-detail>\r\n    </tab>\r\n    <tab heading=\"South\">\r\n    \t<app-bracket-detail *ngIf=\"activeBracket && southGames\" [bracket]=\"activeBracket\" \r\n    \t\t[region]=\"'South'\" [bracketGames]=\"southGames\" [bracketOwners]=\"southOwners\">\r\n    \t</app-bracket-detail>\r\n    </tab>\r\n    <tab heading=\"Midwest\">\r\n    \t<app-bracket-detail *ngIf=\"activeBracket && midwestGames\" [bracket]=\"activeBracket\" \r\n    \t\t[region]=\"'Midwest'\" [bracketGames]=\"midwestGames\" [bracketOwners]=\"midwestOwners\">\r\n    \t</app-bracket-detail>\r\n    </tab>\r\n    <tab heading=\"Final Four\">\r\n    \t<app-bracketff-detail *ngIf=\"activeBracket && ffourGames\" [bracket]=\"activeBracket\"\r\n    \t\t[bracketGames]=\"ffourGames\" [bracketOwners]=\"ffourOwners\">\r\n    \t</app-bracketff-detail>\r\n    </tab>\r\n  </tabset>\r\n</div>\r\n\r\n"

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
    function BracketsComponent(_tbracketService, _gameService, route, router) {
        this._tbracketService = _tbracketService;
        this._gameService = _gameService;
        this.route = route;
        this.router = router;
    }
    BracketsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to activated route parameter and update activeBracket to pass to child components
        // Based on active bracket (in params), convert each Region's bracket owners (retrieved via Matchup table)
        // to indexed arrays for each Region
        // FYI - the following line would only work the first time the page is visitied:
        // this.id = this.route.snapshot.params['id'];
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this._tbracketService.getTbracket(_this.id).subscribe(function (data) {
                _this.activeBracket = data;
                _this._gameService.getGameWithMatchupDataList(_this.id).subscribe(function (data) {
                    var eastOwners = Object.assign.apply(Object, [{}].concat(data
                        .filter(function (item) { return item.region == 'East'; })
                        .map(function (item) {
                        var _a;
                        return (_a = {}, _a[item['id']] = item, _a);
                    })));
                    _this.eastOwners = eastOwners;
                    var westOwners = Object.assign.apply(Object, [{}].concat(data
                        .filter(function (item) { return item.region == 'West'; })
                        .map(function (item) {
                        var _a;
                        return (_a = {}, _a[item['id']] = item, _a);
                    })));
                    _this.westOwners = westOwners;
                    var southOwners = Object.assign.apply(Object, [{}].concat(data
                        .filter(function (item) { return item.region == 'South'; })
                        .map(function (item) {
                        var _a;
                        return (_a = {}, _a[item['id']] = item, _a);
                    })));
                    _this.southOwners = southOwners;
                    var midwestOwners = Object.assign.apply(Object, [{}].concat(data
                        .filter(function (item) { return item.region == 'Midwest'; })
                        .map(function (item) {
                        var _a;
                        return (_a = {}, _a[item['id']] = item, _a);
                    })));
                    _this.midwestOwners = midwestOwners;
                    var ffourOwners = Object.assign.apply(Object, [{}].concat(data
                        .filter(function (item) { return item.region == 'Final Four'; })
                        .map(function (item) {
                        var _a;
                        return (_a = {}, _a[item['id']] = item, _a);
                    })));
                    _this.ffourOwners = ffourOwners;
                });
            });
        });
        // Retrieve list of brackets for bracket navbar
        this._tbracketService.getList().subscribe(function (data) {
            _this.tbracketList = data;
        });
        // Retrieve game list & convert each Region's games into indexed arrays
        // for passing to child components for display
        this._gameService.getGameList().subscribe(function (data) {
            var eastGames = Object.assign.apply(Object, [{}].concat(data
                .filter(function (item) { return item.region == 'East'; })
                .map(function (item) {
                var _a;
                return (_a = {}, _a[item['id']] = item, _a);
            })));
            _this.eastGames = eastGames;
            var westGames = Object.assign.apply(Object, [{}].concat(data
                .filter(function (item) { return item.region == 'West'; })
                .map(function (item) {
                var _a;
                return (_a = {}, _a[item['id']] = item, _a);
            })));
            _this.westGames = westGames;
            var southGames = Object.assign.apply(Object, [{}].concat(data
                .filter(function (item) { return item.region == 'South'; })
                .map(function (item) {
                var _a;
                return (_a = {}, _a[item['id']] = item, _a);
            })));
            _this.southGames = southGames;
            var midwestGames = Object.assign.apply(Object, [{}].concat(data
                .filter(function (item) { return item.region == 'Midwest'; })
                .map(function (item) {
                var _a;
                return (_a = {}, _a[item['id']] = item, _a);
            })));
            _this.midwestGames = midwestGames;
            var ffourGames = Object.assign.apply(Object, [{}].concat(data
                .filter(function (item) { return item.region == 'Final Four'; })
                .map(function (item) {
                var _a;
                return (_a = {}, _a[item['id']] = item, _a);
            })));
            _this.ffourGames = ffourGames;
        });
    }; //end ngOnInit
    // This function was attempted to keep brackets side nav bar option 'active' when clicked
    // isActive(instruction: any[]): boolean {
    // Set the second parameter to true if you want to require an exact match.
    // return this.router.isActive(this.router.createUrlTree(instruction), true);
    // }
    // This was easier to implement
    BracketsComponent.prototype.isActive = function (navbarId) {
        // return true to highlight nav bar item that is = route paramter
        return navbarId == this.id;
    };
    BracketsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brackets',
            template: __webpack_require__(/*! ./brackets.component.html */ "./src/app/brackets/brackets.component.html"),
            styles: [__webpack_require__(/*! ./brackets.component.css */ "./src/app/brackets/brackets.component.css")]
        }),
        __metadata("design:paramtypes", [_core_tbracket_service__WEBPACK_IMPORTED_MODULE_2__["TBracketService"],
            _core_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
var game_ownerURL = '/api/games_owners/';
var game_matchupURL = 'api/games_matchups/';
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
    GameService.prototype.getGameWithOwnerList = function (tbracket_id) {
        return this.http.get(game_ownerURL + '?tbracketid=' + tbracket_id);
    };
    GameService.prototype.getGameWithMatchupDataList = function (tbracket_id) {
        return this.http.get(game_matchupURL + '?tbracketid=' + tbracket_id);
    };
    GameService.prototype.updateGame = function (game) {
        return this.http.patch(gameUrl + game.id + '/', JSON.stringify(game), this.getHttpOptions());
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
        this.readState();
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

/***/ "./src/app/core/matchup.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/matchup.service.ts ***!
  \*****************************************/
/*! exports provided: MatchupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchupService", function() { return MatchupService; });
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


//entryUrl is base url for matchups table end point
var matchupUrl = '/api/matchups/';
var MatchupService = /** @class */ (function () {
    function MatchupService(http) {
        this.http = http;
    }
    //method to retrieve entry details list for a player
    MatchupService.prototype.getMatchupDetailsListByGame = function (id) {
        return this.http.get(matchupUrl + '?gameid=' + id);
    };
    MatchupService.prototype.getMatchupsDetailsByBracketAndGame = function (b_id, g_id) {
        return this.http.get(matchupUrl + '?tbracketid=' + b_id + '&gameid=' + g_id);
    };
    MatchupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MatchupService);
    return MatchupService;
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
var UserReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _user_actions__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_USER"]:
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
        // console.log("refreshToken method called");
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

module.exports = "<!--home.component.html-->\r\n<br>\r\n\r\n<!-- UNCOMMENT THIS TO SHOW ROSTER ON HOME PAGE -->\r\n<app-roster [loggedInUser] = \"loggedInUser\"></app-roster>\r\n\r\n\r\n<!-- UNCOMMENT THIS TO SHOW STANDINGS ON HOME PAGE -->\r\n<!-- <app-standings-nav></app-standings-nav> -->\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.store */ "./src/app/app.store.ts");
/* harmony import */ var _core_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/user.actions */ "./src/app/core/user.actions.ts");
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
    function HomeComponent(_userService, route, 
    // Using Redux store to capture logged in user details
    store) {
        var _this = this;
        this._userService = _userService;
        this.route = route;
        this.store = store;
        store.subscribe(function () { return _this.readState(); });
        this.readState();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loggedInUser = this.route.snapshot.data.loggedInUser;
        this._userService.loggedInUser = this.loggedInUser;
        this.setCurrentUser(this.loggedInUser);
        // console.log("The current Redux user is", this.currentUser)
    };
    // Redux store methods
    HomeComponent.prototype.readState = function () {
        var state = this.store.getState();
        this.currentUser = state.currentUser;
    };
    HomeComponent.prototype.setCurrentUser = function (user) {
        this.store.dispatch(_core_user_actions__WEBPACK_IMPORTED_MODULE_4__["setCurrentUser"](user));
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_app_store__WEBPACK_IMPORTED_MODULE_3__["AppStore"])),
        __metadata("design:paramtypes", [_core_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], Object])
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

module.exports = "  <!--profile-details.component.html-->\r\n\r\n<div class = \"container\">\r\n\t<div class = \"row justify-content-start\">\r\n\t\t<div class = \"col-sm-auto\"><strong>Name:</strong></div>\r\n\t\t<div class = \"col\" class=\"text-muted\">{{ _player.full_name }}</div>\r\n\t</div>\r\n\t<div class = \"row justify-content-start\">\r\n\t\t<div class = \"col-sm-auto\"><strong>Email:</strong></div>\r\n\t\t<div class = \"col\" class=\"text-muted\">{{ _player.email }}</div>\r\n\t</div>\r\n\t<div class = \"row justify-content-start\">\r\n\t\t<div class = \"col-sm-auto\"><strong>Number of Entries:</strong></div>\r\n\t\t<div class = \"col\" class=\"text-muted\">{{ _player.num_entries }}</div>\r\n\t</div>\r\n\t<div class = \"row justify-content-start\">\r\n\t\t<div class = \"col-sm-auto\"><strong>(S)ame or (D)ifferent Brackets:</strong></div>\r\n\t\t<div class = \"col\" class=\"text-muted\" >{{ player.num_entries == 1 ? '-' : player.mult_entry_type }}</div>\r\n\t</div>\r\n\t<div class = \"row justify-content-start\">\r\n\t\t<div class = \"col-sm-auto\"><strong>Paid up?:</strong></div>\r\n\t\t<div class = \"col\" [ngClass] = \"{'text-muted': player.paid, 'text-danger': !player.paid}\">\r\n\t\t\t{{ player.paid ? 'YES - Thank you!' : 'Due($' + player.num_entries*20 + '.00)'  }}</div>\r\n\t</div>\r\n\t<div class = \"row justify-content-start top10\">\r\n\t\t<div class = \"col-sm-auto\">\r\n\t\t\t<button class=\"btn btn-secondary custom\" (click)=\"openModal(template)\">Delete</button>\r\n\t\t</div>\r\n\t\t<div class = \"col-sm-auto\">\r\n\t\t\t<button class=\"btn btn-primary custom\" (click)=\"openProfileModal()\">Edit</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<ng-template #template>\r\n\t<div class=\"modal-header\">\r\n\t\t<h4 class=\"modal-title pull-left\">Delete Profile</h4>\r\n\t\t<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"modal-body\">\r\n\t\tAre you sure you want to delete your Profile?\r\n\t</div>\r\n\t<div class=\"modal-footer\">\r\n\t\t\t<button class=\"btn btn-secondary custom\" \r\n\t\t\t(click)=\"modalRef.hide(); delete()\">Delete</button>\r\n\t</div>\r\n</ng-template>"

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
    function ProfileDetailsComponent(_playerService, _userService, router, modalService, bsModalService) {
        this._playerService = _playerService;
        this._userService = _userService;
        this.router = router;
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
        this.bsModalRef = this.bsModalService.show(_profile_form_modal_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_5__["ProfileFormModalComponent"], { initialState: initialState });
        this.bsModalService.onHidden.subscribe(function (reason) {
            // Upon modal being closed run these actions
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
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], ProfileDetailsComponent);
    return ProfileDetailsComponent;
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

module.exports = "<!-- profile-form-modal.component.html -->\r\n\r\n<div class=\"modal-header\">\r\n\t<h4 class=\"modal-title pull-left\">{{title}} {{profile_user.full_name}}</h4>\r\n\t<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t</button>\r\n</div>\r\n<form [formGroup]=\"profileForm\" (ngSubmit)=\"submitForm(profileForm.value)\">\r\n\t<div class=\"modal-body\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"form-row\">\r\n\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t<label for=\"first_name\">First Name</label>\r\n\t\t\t\t    <input type=\"text\" class=\"form-control\"\r\n\t\t\t\t    id=\"first_name\" [formControl] = \"first_name\"\r\n\t\t\t\t    [class.is-invalid] = \"first_name.invalid\">\r\n\t\t\t\t    <span *ngIf=\"first_name.invalid\" class=\"text-danger\">\r\n    \t\t\t\t\tFirst Name is required\r\n  \t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t<label for=\"last_name\">Last Name</label>\r\n\t\t\t\t    <input type=\"text\" class=\"form-control\"\r\n\t\t\t\t    id=\"last_name\" [formControl] = \"last_name\"\r\n\t\t\t\t    [class.is-invalid] = \"last_name.invalid\">\r\n\t\t\t\t    <span *ngIf=\"last_name.invalid\" class=\"text-danger\">\r\n    \t\t\t\t\tLast Name is required\r\n  \t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"form-group\">\r\n\t\t\t\t<label for=\"email\">Email</label>\r\n\t\t\t    <input type=\"email\" class=\"form-control\"\r\n\t\t\t    id=\"email\" [formControl] = \"email\"\r\n\t\t\t    [class.is-invalid] = \"email.invalid\">\r\n\t\t\t    <span *ngIf=\"email.invalid && email.errors.required\" class=\"text-danger\">\r\n    \t\t\t\t\tEmail is required\r\n  \t\t\t\t</span>\r\n  \t\t\t\t<span *ngIf=\"email.invalid && email.errors.email\" class=\"text-danger\">\r\n    \t\t\t\t\tEmail must be a valid address\r\n  \t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-row\">\r\n\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t<label for=\"num_entries\">Number of Entries</label>\r\n\t\t\t\t    <input type=\"number\" min = \"1\" max = \"4\" class=\"form-control\" #entries\r\n\t\t\t\t    id=\"num_entries\" [formControl] = \"num_entries\"\r\n\t\t\t\t    [class.is-invalid] = \"num_entries.invalid\">\r\n\t\t\t\t    <span *ngIf=\"num_entries.invalid && num_entries.errors.required\" class=\"text-danger\">\r\n    \t\t\t\t\tNumber of Entries is required\r\n  \t\t\t\t\t</span>\r\n  \t\t\t\t\t<span *ngIf=\"num_entries.invalid && (num_entries.errors.minlength || num_entries.errors.maxlength)\" class=\"text-danger\">\r\n    \t\t\t\t\tMust submit a number between 1-4\r\n  \t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group col-md-6\" *ngIf=\"entries.value>1\">\r\n\t\t\t\t\t<label for=\"mult_entry_type\">(S)ame or (D)ifferent</label>\r\n\t\t\t\t    <select class=\"form-control\"\r\n\t\t\t\t    id=\"mult_entry_type\" [formControl] = \"mult_entry_type\">\r\n\t\t\t\t    \t<option>S</option>\r\n\t\t\t\t    \t<option>D</option>\r\n\t\t\t\t    </select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t\t<div class=\"modal-footer\">\r\n\t\t\t<button type=\"submit\" id=\"submit\" class=\"btn btn-success\" \r\n\t\t\t[disabled]=\"!profileForm.valid\"\r\n\t\t\t(click)=\"bsModalRef.hide()\">{{closeBtnName}}</button>\r\n\t\t</div>\r\n\t</div>  <!-- end modal-body-->\r\n</form>"

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
        this.closeBtnName = "Submit";
        this.profileForm = fb.group({
            'first_name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'last_name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            'num_entries': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)])],
            'mult_entry_type': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.first_name = this.profileForm.controls['first_name']; // allows for other properties, e.g. error values
        this.last_name = this.profileForm.controls['last_name'];
        this.email = this.profileForm.controls['email'];
        this.num_entries = this.profileForm.controls['num_entries'];
        this.mult_entry_type = this.profileForm.controls['mult_entry_type'];
    }
    ProfileFormModalComponent.prototype.ngOnInit = function () {
        this.profileForm.patchValue(this.profile_user);
    };
    ProfileFormModalComponent.prototype.submitForm = function (value) {
        this.profile_user.first_name = this.first_name.value;
        this.profile_user.last_name = this.last_name.value;
        this.profile_user.email = this.email.value;
        this.profile_user.num_entries = this.num_entries.value;
        this.profile_user.mult_entry_type = this.mult_entry_type.value;
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

module.exports = "<!--profile.component.html-->\r\n<br>\r\n<h4>My Info</h4>\r\n<app-profile-details [player] = \"user\"></app-profile-details>\r\n<br>\r\n<app-team-details [player] = \"user\"></app-team-details>\r\n<br>"

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
    function ProfileComponent(route) {
        this.route = route;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        // this.user = this._userService.loggedInUser;
        this.user = this.route.snapshot.data.loggedInUser;
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
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

module.exports = "<!--roster.component.html-->\r\n<h4>Registrants</h4>\r\n<div class = \"container\">\r\n\t<div class = \"row\">\r\n\t\t<div class = \"col\"></div>\r\n\t\t<div class = \"col-2 text-center bg-secondary text-white rounded p-2\">\r\n\t\t\t<p class=\"mb-0\">People Registered</p>\r\n\t\t\t<h1 class=\"display-3 m-0\">{{_numRegistrants}}</h1>\r\n\t\t</div>\r\n\t\t<div class = \"col\"></div>\r\n\t\t<div class = \"col-2 text-center bg-secondary text-white rounded p-2\">\r\n\t\t\t<p class=\"mb-0\">Number of Entries</p>\r\n\t\t\t<h1 class=\"display-3 m-0\">{{_numEntries}}</h1>\r\n\t\t</div>\r\n\t\t<div class = \"col\"></div>\r\n\t\t<div class = \"col-2 text-center bg-secondary text-white rounded p-2\">\r\n\t\t\t<p class=\"mb-0\">Number of Brackets</p>\r\n\t\t\t<h1 class=\"display-4 m-0\">{{_numBrackets}}</h1>\r\n\t\t\t<small class=\"m-0\">({{_numNeededEntries}} more entries for another!)</small>\r\n\t\t</div>\r\n\t\t<div class = \"col\"></div>\r\n\t</div>\r\n</div>\r\n<br>\r\n\r\n<table class=\"table table-sm\">\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th scope=\"col\">#</th>\r\n\t\t\t<th scope=\"col\">Name</th>\r\n\t\t\t<th scope=\"col\">Num Entries</th>\r\n\t\t\t<th scope=\"col\">(S)ame/(D)iff</th>\r\n\t\t\t<th scope=\"col\" style=\"width: 5%\">Edit</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<tr on-mouseover=\"hoveredIndex=_loggedInUser.id\" on-mouseleave=\"hoveredIndex=null\">\r\n\t\t\t<th scope=\"row\">1</th>\r\n\t\t\t<td><strong>{{ _loggedInUser.full_name }}*</strong></td>\r\n\t\t\t<td><strong>{{ _loggedInUser.num_entries }}</strong></td>\r\n\t\t\t<td><strong>{{ _loggedInUser.num_entries == 1 ? '-' : _loggedInUser.mult_entry_type }}</strong></td>\r\n\t\t\t<td>\r\n\t\t\t\t<fa name=\"edit\" *ngIf=\"hoveredIndex==_loggedInUser.id\" class = \"cursor-pointer\" tooltip = \"Edit Profile\" (click)=\"openProfileModal()\"></fa>\t\t\t\t\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr *ngFor = \"let player of roster; let i = index\">\r\n\t\t\t<th scope=\"row\">{{i + 2}}</th>\r\n\t\t\t<td>{{ player.full_name }}</td>\r\n\t\t\t<td>{{ player.num_entries }}</td>\r\n\t\t\t<td>{{ player.num_entries == 1 ? '-' : player.mult_entry_type }}</td>\r\n\t\t\t<td></td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n<br>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/player.service */ "./src/app/core/player.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
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
    function RosterComponent(_playerService, _userService, _modalService, router) {
        this._playerService = _playerService;
        this._userService = _userService;
        this._modalService = _modalService;
        this.router = router;
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
    RosterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._numRegistrants = 1; // start at 1 since _loggedInUser counts as 1
        this._numBrackets = 0;
        this._numEntries = this._loggedInUser.num_entries;
        // Retrieve roster list without logged in user
        this._playerService.getListOtherThan(this._loggedInUser.id).subscribe(function (data) {
            _this.roster = data;
            _this.roster.forEach(function (registrant) {
                _this._numRegistrants += 1;
                _this._numEntries += registrant.num_entries;
            });
            _this._numBrackets = Math.floor(_this._numEntries / 16);
            _this._numNeededEntries = (_this._numBrackets + 1) * 16 - _this._numEntries;
            //console.log(this.roster)
        });
    };
    RosterComponent.prototype.openProfileModal = function () {
        var _this = this;
        var initialState = {
            id: this.hoveredIndex,
            profile_user: this._loggedInUser
        };
        // Attempts here to figure out how to extract specific user from this.roster based on hoveredIndex
        // console.log("Modal is opened for: ", this.roster.map(users => users.find(user => user.id == this.hoveredIndex)));
        // console.log("Modal is opened for: ", this.roster, this.roster.find(user => user.id == this.hoveredIndex));
        // console.log("Modal is opened for: ", this.roster.forEach(user => {if(user.id == this.hoveredIndex) return user}));
        this.bsModalRef = this._modalService.show(_profile_form_modal_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_5__["ProfileFormModalComponent"], { initialState: initialState });
        this._modalService.onHidden.subscribe(function (reason) {
            // Upon modal being closed run these actions
            //const _reason = reason ? `, dismissed by ${reason}` : '';
            //console.log ("Profile modal was closed ", _reason);
            // Update logged in User against database after modal closes
            _this._userService.getLoggedInUser().subscribe(function (data) {
                _this._loggedInUser = data;
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RosterComponent.prototype, "loggedInUser", null);
    RosterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roster',
            template: __webpack_require__(/*! ./roster.component.html */ "./src/app/roster/roster.component.html"),
            styles: [__webpack_require__(/*! ./roster.component.css */ "./src/app/roster/roster.component.css")]
        }),
        __metadata("design:paramtypes", [_core_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"],
            _core_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RosterComponent);
    return RosterComponent;
}());



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

module.exports = "<h4>Standings</h4>\n\n<div class = \"container\">\n  <small class=\"text-muted\">(Click to see bracket)</small>\n  <tabset type=\"pills\">\n    <tab *ngFor = \"let tbracket of tbracketList\" heading=\"{{ tbracket.name }}\">\n    \t<app-standings [bracket]=\"tbracket.id\"></app-standings>\n    </tab>\n  </tabset>\n</div>\n"

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
/* harmony import */ var _core_entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/entry.service */ "./src/app/core/entry.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
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
    function StandingsNavComponent(_tbracketService, _entryService) {
        this._tbracketService = _tbracketService;
        this._entryService = _entryService;
    }
    StandingsNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve list of brackets for bracket navbar
        this._tbracketService.getList().subscribe(function (data) {
            _this.tbracketList = data;
            // console.log("Bracket list of nav is: ", this.tbracketList)
        });
        // Attempt to default show tab that Player is assigned
        // this.staticTabs.tabs[1].active = true;
        // this._bracketToShow = null;
        // Retrieve the logged in player's entries to set default bracket to show
        // when click on Bracket navbar option
        // this._entryService.getEntryBracketListByPlayer(this._userService.id).subscribe(data => {
        // 	// Check to see if User is assigned an entry yet, if so, show the first bracket
        // 	// console.log ("player brackets: ", data)
        // 	if (data.length > 0 && data[0].tbracket != null) {
        // 		this._bracketToShow = data[0].tbracket;
        // 	}
        // 	else {
        // 	// Otherwise, pull the first bracket that has been setup (there should always be at least 1 bracket setup)
        // 		this._tbracketService.getList().subscribe(data => {
        // 			// console.log ("system brackets: ", data)
        // 			if (data.length > 0) {
        // 				this._bracketToShow = data[0].id;
        // 			}
        // 		})
        // 	}
        // }); //end subscribe
    }; //end ngOnInit
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('staticTabs'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TabsetComponent"])
    ], StandingsNavComponent.prototype, "staticTabs", void 0);
    StandingsNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-standings-nav',
            template: __webpack_require__(/*! ./standings-nav.component.html */ "./src/app/standings-nav/standings-nav.component.html"),
            styles: [__webpack_require__(/*! ./standings-nav.component.css */ "./src/app/standings-nav/standings-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_core_tbracket_service__WEBPACK_IMPORTED_MODULE_1__["TBracketService"],
            _core_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"]])
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

module.exports = "<br>\r\n<table class=\"table table-sm\">\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<!-- <th scope=\"col\">#</th> -->\r\n\t\t\t<th scope=\"col\">Name</th>\r\n\t\t\t<th scope=\"col\" class=\"text-center\" style=\"width: 15%\"># Active Teams</th>\r\n\t\t\t<th scope=\"col\">South</th>\r\n\t\t\t<th scope=\"col\">West</th>\r\n\t\t\t<th scope=\"col\">East</th>\r\n\t\t\t<th scope=\"col\">Midwest</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<tr *ngFor = \"let player of _standingsList; let i = index\">\r\n\t\t\t<!-- <th scope=\"row\">{{i + 1}}</th> -->\r\n\t\t\t<td>{{ player.player }}</td>\r\n\t\t\t<td class=\"text-center\">{{ player.team_count }}</td>\r\n\t\t\t<td>{{ player.team_a }}</td>\r\n\t\t\t<td>{{ player.team_b }}</td>\r\n\t\t\t<td>{{ player.team_c }}</td>\r\n\t\t\t<td>{{ player.team_d }}</td>\r\n\t\t\t<td></td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>"

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
    function StandingsComponent(_entryService) {
        this._entryService = _entryService;
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
        // this._bracketId = 1;
        var _this = this;
        this._entryService.getEntryStandings(this._bracketId).subscribe(function (data) {
            _this._standingsList = data;
            // Sort the standings by descending team_count (they're pre-sorted by last name descending)
            _this._standingsList.sort(function (a, b) { return (a.team_count > b.team_count) ? -1 : ((b.team_count > a.team_count) ? 1 : 0); });
        });
    };
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
        __metadata("design:paramtypes", [_core_entry_service__WEBPACK_IMPORTED_MODULE_1__["EntryService"]])
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

module.exports = "<!--roster.component.html-->\r\n<h4>My Teams</h4>\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row border-bottom border-top\">\r\n\t\t<div class=\"col col-sm-1\"><strong>Bracket</strong></div>\r\n\t\t<div class=\"col col-sm-2\"><strong>Region</strong></div>\r\n\t\t<div class=\"col col-sm-2\"><strong>Original Teams</strong></div>\r\n\t\t<div class=\"col col-sm-2\"><strong>Active Team(s)</strong></div>\r\n\t\t<div class=\"col col-sm-4\"><strong>Next Game</strong></div>\r\n\t</div>\r\n\t<div *ngIf=\"_entryList && _entryList.length; else assignment_announcement\">\r\n\t\t<div class = \"row border-bottom\" *ngFor = \"let entry of _entryList\">\r\n\t\t\t<div class=\"col align-self-center col-sm-1\">\r\n\t\t\t\t<div class=\"col text-primary text-pointer\" (click)=\"sendToBracket(entry.tbracket)\">\r\n\t\t\t\t\t<strong>{{ entry.tbracket }}</strong>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col col-sm-2\">\r\n\t\t\t\t<div class=\"col\">East</div>\r\n\t\t\t\t<div class=\"col\">West</div>\r\n\t\t\t\t<div class=\"col\">South</div>\r\n\t\t\t\t<div class=\"col\">Midwest</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col col-sm-2\">\r\n\t\t\t\t<div class=\"col\">{{ entry.orig_team_a }}</div>\r\n\t\t\t\t<div class=\"col\">{{ entry.orig_team_b }}</div>\r\n\t\t\t\t<div class=\"col\">{{ entry.orig_team_c }}</div>\r\n\t\t\t\t<div class=\"col\">{{ entry.orig_team_d }}</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col col-sm-2\">\r\n\t\t\t\t<div class=\"col\">{{ entry.team_a || '**OUT**'}}</div>\r\n\t\t\t\t<div class=\"col\">{{ entry.team_b || '**OUT**'}}</div>\r\n\t\t\t\t<div class=\"col\">{{ entry.team_c || '**OUT**'}}</div>\r\n\t\t\t\t<div class=\"col\">{{ entry.team_d || '**OUT**'}}</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col col-sm-4\">\r\n\t\t\t\t<div class=\"col\"><app-team-nextup *ngIf = \"entry.team_a; else not_applicable\" \r\n\t\t\t\t\t[bracket]=\"entry.tbracket_id\" [team]=\"entry.team_a_id\"></app-team-nextup></div>\r\n\t\t\t\t<div class=\"col\"><app-team-nextup *ngIf = \"entry.team_b; else not_applicable\" \r\n\t\t\t\t\t[bracket]=\"entry.tbracket_id\" [team]=\"entry.team_b_id\"></app-team-nextup></div>\r\n\t\t\t\t<div class=\"col\"><app-team-nextup *ngIf = \"entry.team_c; else not_applicable\" \r\n\t\t\t\t\t[bracket]=\"entry.tbracket_id\" [team]=\"entry.team_c_id\"></app-team-nextup></div>\r\n\t\t\t\t<div class=\"col\"><app-team-nextup *ngIf = \"entry.team_d; else not_applicable\" \r\n\t\t\t\t\t[bracket]=\"entry.tbracket_id\" [team]=\"entry.team_d_id\"></app-team-nextup></div>\r\n\t\t\t\t<ng-template #not_applicable>N/A</ng-template>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<ng-template #assignment_announcement>\r\n\t\t<div class=\"text-center\">\r\n\t\t\t<br>\r\n\t\t\t<h5 class=\"font-italic text-muted\">** Teams will be assigned by Thursday, March 21, at 10am CST **</h5>\r\n\t\t\t<small>Check back then to see which brackets your entries were assigned (4 teams, 1 per Region, assigned to each entry)</small>\r\n\t\t</div>\r\n\t</ng-template>\r\n</div>\r\n"

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
/* harmony import */ var _core_tbracket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/tbracket.service */ "./src/app/core/tbracket.service.ts");
/* harmony import */ var _core_matchup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/matchup.service */ "./src/app/core/matchup.service.ts");
/* harmony import */ var _core_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/game.service */ "./src/app/core/game.service.ts");
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
    function TeamDetailsComponent(_entryService, _tbracketService, router, _matchupService, _gameService) {
        this._entryService = _entryService;
        this._tbracketService = _tbracketService;
        this.router = router;
        this._matchupService = _matchupService;
        this._gameService = _gameService;
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
        //retrieve entries for user
        this._entryService.getEntryDetailsListByPlayer(this._player.id).subscribe(function (data) {
            _this._entryList = data;
            //console.log ("entryList is: ", this._entryList);
        });
        // Attempt to combine multiple entries from same bracket into a data structure
        // that'd be easy to show in tables
        // this._bracketTeams = [];
        // retrieve bracket names and build array to capture bracket name + entry array
        // this._tbracketService.getList().subscribe(data => {
        // 	data.forEach((bracket) => {
        // 		this._entryList.forEach((entry) => {
        // 			if (entry.tbracket == bracket.id) {
        // 				this._bracketTeams.push({[bracket.name] : entry})
        // 			}
        // 		})
        // 	});
        // 	console.log("List of Brackets: ", this._bracketTeams);
        // });
    };
    TeamDetailsComponent.prototype.sendToBracket = function (bracket) {
        var _this = this;
        this._tbracketService.getList().subscribe(function (data) {
            data.forEach(function (tbracket) {
                if (bracket == tbracket.name) {
                    _this.router.navigate(['/brackets', tbracket.id]);
                }
            });
        });
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
            _core_tbracket_service__WEBPACK_IMPORTED_MODULE_3__["TBracketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_matchup_service__WEBPACK_IMPORTED_MODULE_4__["MatchupService"],
            _core_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]])
    ], TeamDetailsComponent);
    return TeamDetailsComponent;
}());



/***/ }),

/***/ "./src/app/team-nextup/team-nextup.component.css":
/*!*******************************************************!*\
  !*** ./src/app/team-nextup/team-nextup.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYW0tbmV4dHVwL3RlYW0tbmV4dHVwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/team-nextup/team-nextup.component.html":
/*!********************************************************!*\
  !*** ./src/app/team-nextup/team-nextup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{ _nextup_game }}"

/***/ }),

/***/ "./src/app/team-nextup/team-nextup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/team-nextup/team-nextup.component.ts ***!
  \******************************************************/
/*! exports provided: TeamNextupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamNextupComponent", function() { return TeamNextupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_matchup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/matchup.service */ "./src/app/core/matchup.service.ts");
/* harmony import */ var _core_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/game.service */ "./src/app/core/game.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamNextupComponent = /** @class */ (function () {
    function TeamNextupComponent(router, _matchupService, _gameService) {
        this.router = router;
        this._matchupService = _matchupService;
        this._gameService = _gameService;
    }
    TeamNextupComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log ("team_id is ", this._team_id, " bracket_id is ", this._bracket_id)
        this._nextup_game = "default";
        this._gameService.getGameListByTeam(this._team_id).subscribe(function (games) {
            _this._nextGame = games[0]; // game in latest round is next game up
            // console.log ("The Next Game is: ", this._nextGame);
            if (_this._team_id == _this._nextGame.team1_id && _this._nextGame.team2 != null) {
                _this._matchupService.getMatchupsDetailsByBracketAndGame(_this._bracket_id, _this._nextGame.id).subscribe(function (matchup) {
                    var _nextOpponent = matchup[0].team2_owner;
                    var _nextTeam = _this._nextGame.team2;
                    _this._nextup_game = "Round " + _this._nextGame.t_round + " vs. " + _nextTeam + " (" + _nextOpponent + ")";
                });
            }
            else if (_this._team_id == _this._nextGame.team2_id && _this._nextGame.team1 != null) {
                _this._matchupService.getMatchupsDetailsByBracketAndGame(_this._bracket_id, _this._nextGame.id).subscribe(function (matchup) {
                    // this._nextMatchup = matchup;
                    // // console.log("The next matchup is:", this._nextMatchup)
                    // this._nextOpponent = this._nextMatchup[0].team1_owner;
                    var _nextOpponent = matchup[0].team1_owner;
                    var _nextTeam = _this._nextGame.team1;
                    _this._nextup_game = "Round " + _this._nextGame.t_round + " vs. " + _nextTeam + " (" + _nextOpponent + ")";
                });
            }
            else {
                _this._nextup_game = "Round " + _this._nextGame.t_round + " vs. TBD";
            }
        }); // end this._gameService subscribe
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bracket'),
        __metadata("design:type", Number)
    ], TeamNextupComponent.prototype, "_bracket_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('team'),
        __metadata("design:type", Number)
    ], TeamNextupComponent.prototype, "_team_id", void 0);
    TeamNextupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-nextup',
            template: __webpack_require__(/*! ./team-nextup.component.html */ "./src/app/team-nextup/team-nextup.component.html"),
            styles: [__webpack_require__(/*! ./team-nextup.component.css */ "./src/app/team-nextup/team-nextup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_matchup_service__WEBPACK_IMPORTED_MODULE_2__["MatchupService"],
            _core_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]])
    ], TeamNextupComponent);
    return TeamNextupComponent;
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

module.exports = "\r\n<nav class=\"navbar navbar-dark bg-primary fixed-bottom footer\">\r\n  <div class=\"navbar-expand m-auto navbar-text footer\">\r\n  \t<i class = \"fa fa-ban\"></i> Exit Zero Technologies 2018\r\n  </div>\r\n</nav>"

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

module.exports = "<!--src/app/ui/header/header.component.html-->\r\n\r\n<!-- Navigation Menu for site -->\r\n\r\n<nav class=\"navbar center navbar-expand-md navbar-dark bg-primary\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<!-- <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Spreadpool</a> -->\r\n\t\t<a class=\"navbar-brand\" [routerLink]=\"['/home']\">\r\n\t\t\t<img src=\"../static/front-end/assets/spreadpool_white_no_background_48x114.png\" alt=\"Spreadpool\">\r\n\t\t</a>\r\n\t\t\t<button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\"\r\n\t\t\tdata-target=\"#navbar\" aria-controls=\"navbar\" aria-expanded=\"false\"\r\n\t\t\taria-label=\"Toggle navigation\" (click)=\"isCollapsed = !isCollapsed\">\r\n\t\t\t<span class=\"navbar-toggler-icon\"></span>\r\n\t\t\t</button>\r\n\t\t<div class=\"collapse navbar-collapse\" id=\"navbar\" [collapse]=\"isCollapsed\">\r\n\t        <ul class=\"navbar-nav mr-auto\">\r\n\t        \t<li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n\t            \t<a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a>\r\n\t            </li>\r\n\t            <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n\t            \t<a class=\"nav-link\" [routerLink]=\"['/profile']\">My Teams</a>\r\n\t            </li>\r\n\t            <li class=\"nav-item\" [class.active]=\"isActive(['/brackets'])\" *ngIf = \"_bracketToShow\">\r\n\t            \t<a *ngIf=\"_bracketToShow\" class=\"nav-link\" [routerLink]=\"['/brackets', _bracketToShow]\">Brackets</a>\r\n\t            </li>\r\n\r\n\t            <li class=\"nav-item dropdown\" dropdown *ngIf=\"isUserAdmin()\">\r\n<!-- \t            \t<span dropdown (onShown)=\"onShown()\" (onHidden)=\"onHidden()\" \r\n\t            \t(isOpenChange)=\"isOpenChange()\"> -->\r\n\t\t\t\t        <a class=\"nav-link dropdown-toggle\" dropdownToggle (click)=\"false\" \r\n\t\t\t\t        href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t          Admin\r\n\t\t\t\t        </a>\r\n\t\t\t        <div class=\"dropdown-menu\" *dropdownMenu aria-labelledby=\"navbarDropdown\">\r\n\t\t\t          <a class=\"dropdown-item\" [routerLink]=\"['/admin/c-brackets']\">Create Brackets</a>\r\n\t\t\t          <a class=\"dropdown-item\" [routerLink]=\"['/admin/a-brackets', _bracketToShow]\">Assign Entries</a>\r\n\t\t\t          <a class=\"dropdown-item\" [routerLink]=\"['/admin/u-games']\">Update Games</a>\r\n\t\t\t        </div>\r\n\t\t\t\t</li>\r\n\t        </ul>\r\n\t        <a *ngIf=\"currentUser\" class=\"navbar-text\" [routerLink]=\"['/profile']\">{{ currentUser.email }}</a>\r\n\t        <form class=\"form-inline\">\r\n\t\t    \t<button type=\"button\" class=\"btn btn-outline-light\" (click)=\"logout()\">Log Out</button>\r\n\t\t  \t</form>\r\n\t  \t</div> <!--/.navbar-collapse -->\r\n  \t</div> <!-- /.container-fluid -->\r\n</nav>\r\n"

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
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.store */ "./src/app/app.store.ts");
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
    function HeaderComponent(router, _userService, _entryService, _tbracketService, store) {
        var _this = this;
        this.router = router;
        this._userService = _userService;
        this._entryService = _entryService;
        this._tbracketService = _tbracketService;
        this.store = store;
        this.isCollapsed = true;
        store.subscribe(function () { return _this.readState(); });
        this.readState();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bracketToShow = null;
        // Retrieve the logged in player's entries to set default bracket to show
        // when click on Bracket navbar option
        this._entryService.getEntryBracketListByPlayer(this._userService.id).subscribe(function (data) {
            // Check to see if User is assigned an entry yet, if so, show the first bracket
            // console.log ("player brackets: ", data)
            if (data.length > 0 && data[0].tbracket != null) {
                _this._bracketToShow = data[0].tbracket;
            }
            else {
                // Otherwise, pull the first bracket that has been setup (there should always be at least 1 bracket setup)
                _this._tbracketService.getList().subscribe(function (data) {
                    // console.log ("system brackets: ", data)
                    if (data.length > 0) {
                        _this._bracketToShow = data[0].id;
                    }
                });
            }
        }); //end subscribe
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
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_app_store__WEBPACK_IMPORTED_MODULE_5__["AppStore"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _core_entry_service__WEBPACK_IMPORTED_MODULE_3__["EntryService"],
            _core_tbracket_service__WEBPACK_IMPORTED_MODULE_4__["TBracketService"], Object])
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

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <ng-content></ng-content>\r\n</div>\r\n<app-footer></app-footer>"

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

module.exports = __webpack_require__(/*! C:\Django\spreadpool_project\spreadpool\bracket\front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map