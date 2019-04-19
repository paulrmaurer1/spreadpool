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

module.exports = "<!--create-brackets.component.html-->\r\n<br>\r\n<h6><strong>Add Bracket</strong></h6>\r\n<div class=\"container\">\r\n\t<div class = \"row\">\r\n\t\t<div class = \"col\">\r\n\t\t\t<form [formGroup]=\"bracketAddForm\" (ngSubmit)=\"addBracket(bracketAddForm.value)\">\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t<div class=\"form-row\">\r\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t<!-- <label for=\"bracket_name\">Bracket</label> -->\r\n\t\t\t\t\t\t    <input type=\"text\" class=\"form-control\" placeholder=\"Type bracket name..\" \r\n\t\t\t\t\t\t    id=\"bracket_name\" [formControl] = \"bracket_name\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" id=\"submit\" class=\"btn btn-success\" \r\n\t\t\t\t\t\t\t[disabled]=\"!bracketAddForm.valid\">Add Bracket</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t\t<div class = \"col\">\r\n\t\t\t<!-- <button class=\"btn btn-dark\" >Delete/Create All Entries</button> -->\r\n\t\t\t<button class=\"btn btn-dark\" (click)=\"resetEntries()\">Delete/Create All Entries</button>\r\n\t\t\t&nbsp;\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<br>\r\n<h6><strong>Brackets</strong></h6>\r\n<br>\r\n<table class=\"table table-sm\">\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th scope=\"col\">#</th>\r\n\t\t\t<th scope=\"col\">Name</th>\r\n\t\t\t<th scope=\"col\" style=\"width: 10%\">Num Entries</th>\r\n\t\t\t<th scope=\"col\" style=\"width: 10%\">Id</th>\r\n\t\t\t<th scope=\"col\">Actions</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<tr *ngFor = \"let tbracket of _tbracketList; let i = index\">\r\n\t\t\t<th scope=\"row\">{{i + 1}}</th>\r\n\t\t\t<td>{{ tbracket.name }}</td>\r\n\t\t\t<td>{{ tbracket.entry_count}}</td>\r\n\t\t\t<td>{{ tbracket.id }}</td>\r\n\t\t\t<td>\r\n\t\t\t\t<button class=\"btn btn-danger custom\" (click)=\"openDeleteModal(tbracket.id, tbracket.name)\">Delete</button>\r\n\t\t\t\t&nbsp;\r\n\t\t\t\t<button class=\"btn btn-warning\" (click)=\"reassignBracket(tbracket.id, tbracket.name)\">(Re)Assign</button>\r\n\t\t\t\t&nbsp;\r\n\t\t\t\t<button class=\"btn btn-info custom\" (click)=\"resetBracket(tbracket.id, tbracket.name)\">Reset</button>\r\n\t\t\t\t&nbsp;\r\n\t\t\t\t<button class=\"btn btn-success\" (click)=\"navToAssign(tbracket.id)\">Assign Entries</button>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<!-- <ng-template #template>\r\n\t<div class=\"modal-header\">\r\n\t\t<h4 class=\"modal-title pull-left\">Delete Bracket</h4>\r\n\t\t<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"deleteModalRef.hide()\">\r\n\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"modal-body\">\r\n\t\tAre you sure you want to delete this Bracket?\r\n\t</div>\r\n\t<div class=\"modal-footer\">\r\n\t\t\t<button class=\"btn btn-danger custom\" \r\n\t\t\t(click)=\"deleteModalRef.hide(); deleteBracket()\">Delete</button>\r\n\t</div>\r\n</ng-template>  -->"

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

module.exports = "<!--game-detail.component.html-->\r\n<form [formGroup]=\"gameUpdateForm\" (ngSubmit)=\"updateGame()\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"col non-form-element\"><strong>Game id: </strong>{{ _game.id }}</div>\r\n\t\t\t<div class=\"col non-form-element\"><strong>Region: </strong>{{ _game.region }}</div>\r\n\t\t</div>\r\n\t\t\t\r\n\t\t<div class=\"form-row align-items-center\">\r\n\t\t\t<div class=\"col non-form-element\"><strong>Team 1: </strong>{{ _game.team1 }}</div>\r\n\t\t\t<div class=\"form-group col\">\r\n\t\t\t\t<label for=\"team1_score\">Team 1 Score:</label>\r\n\t\t\t    <input type=\"number\" class=\"form-control\"\r\n\t\t\t    id=\"team1_score\" [formControl] = \"team1_score\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col\">\r\n\t\t\t\t<label for=\"spread\">Game Spread:</label>\r\n\t\t\t    <input type=\"number\" class=\"form-control\"\r\n\t\t\t    id=\"spread\" [formControl] = \"spread\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-row align-items-center\">\r\n\t\t\t<div class=\"col non-form-element\"><strong>Team 2: </strong>{{ _game.team2 }}</div>\r\n\t\t\t<div class=\"form-group col\">\r\n\t\t\t\t<label for=\"team2_score\">Team 2 Score:</label>\r\n\t\t\t    <input type=\"number\" class=\"form-control\"\r\n\t\t\t    id=\"team2_score\" [formControl] = \"team2_score\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col\"></div>\r\n\t\t</div>\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<button type=\"submit\" id=\"submit\" class=\"btn btn-success\">Update Game</button>\r\n\t\t\t&nbsp;\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n<br>\r\n<br>\r\n<br>\r\n<div class = \"container\">\r\n\t<div class=\"row justify-content-start\">\r\n\t\t<div class = \"col\">\r\n\t\t\t<button class=\"btn btn-info\" (click)=\"resetGame()\">Reset Game</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<br>"

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

module.exports = "<!--update-gamess.component.html-->\r\n<br>\r\n<h5><strong>Retrieve Game</strong></h5>\r\n<div class=\"container\">\r\n\t<div class = \"row\">\r\n\t\t<div class = \"col\">\r\n\t\t\t<form [formGroup]=\"gameRetrieveForm\" (ngSubmit)=\"retrieveGame()\">\r\n\t\t\t\t<!-- <div class=\"container\"> -->\r\n\t\t\t\t\t<div class=\"form-row\">\r\n\t\t\t\t\t\t<div class=\"form-group col-3\">\r\n\t\t\t\t\t\t\t<!-- <label for=\"bracket_name\">Bracket</label> -->\r\n\t\t\t\t\t\t    <input type=\"number\" min = \"1\" max = \"63\" class=\"form-control\" placeholder=\"Enter game id to Update..\" \r\n\t\t\t\t\t\t    id=\"game_id\" [formControl] = \"game_id\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" id=\"submit\" class=\"btn btn-success\" \r\n\t\t\t\t\t\t\t[disabled]=\"!gameRetrieveForm.valid\">Retrieve Game</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t<!-- </div> -->\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div> <!--row-->\r\n</div> <!--container-->\r\n<br>\r\n<!-- <div class = \"container\">\r\n\t<div class=\"row justify-content-start\">\r\n\t\t<div class = \"col\">\r\n\t\t\t<button class=\"btn btn-info\" (click)=\"\">Reset Game</button>\r\n\t\t</div>\r\n\t</div>\r\n</div> -->\r\n<h5><strong>Update Game</strong></h5>\r\n<app-game-detail *ngIf=\"_currentGame\" [game]=\"_currentGame\"></app-game-detail>\r\n<br>\r\n<h5><strong>Testing Features</strong></h5>\r\n<div class = \"col\">\r\n\t<button class=\"btn btn-dark\" (click)=\"replayAllGames()\">Replay All Games</button>\r\n\t&nbsp;\r\n\t<!-- <button class=\"btn btn-warning\" (click)=\"resetAllGames()\">Reset All Games (Testing Only)</button> -->\r\n</div>\r\n<br>"

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
            // this._userService.id = 8;
            // this._userService.login({'email': 'bzobrist@cubs.com', 'password': 'Maddon55'});
            this._userService.id = 1;
            this._userService.login({ 'email': 'paulrmaurer@yahoo.com', 'password': 'Quakers1!' });
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
/* harmony import */ var _admin_create_brackets_create_brackets_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/create-brackets/create-brackets.component */ "./src/app/admin/create-brackets/create-brackets.component.ts");
/* harmony import */ var _team_nextup_team_nextup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./team-nextup/team-nextup.component */ "./src/app/team-nextup/team-nextup.component.ts");
/* harmony import */ var _standings_standings_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./standings/standings.component */ "./src/app/standings/standings.component.ts");
/* harmony import */ var _standings_nav_standings_nav_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./standings-nav/standings-nav.component */ "./src/app/standings-nav/standings-nav.component.ts");
/* harmony import */ var _bracket_tab_bracket_tab_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./bracket-tab/bracket-tab.component */ "./src/app/bracket-tab/bracket-tab.component.ts");
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
                _admin_create_brackets_create_brackets_component__WEBPACK_IMPORTED_MODULE_19__["DeleteModalComponent"],
                _team_nextup_team_nextup_component__WEBPACK_IMPORTED_MODULE_20__["TeamNextupComponent"],
                _standings_standings_component__WEBPACK_IMPORTED_MODULE_21__["StandingsComponent"],
                _standings_nav_standings_nav_component__WEBPACK_IMPORTED_MODULE_22__["StandingsNavComponent"],
                _bracket_tab_bracket_tab_component__WEBPACK_IMPORTED_MODULE_23__["BracketTabComponent"],
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
            entryComponents: [_profile_form_modal_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_17__["ProfileFormModalComponent"], _admin_create_brackets_create_brackets_component__WEBPACK_IMPORTED_MODULE_19__["DeleteModalComponent"]]
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

module.exports = "<!-- src/app/bracket-tab/bracket-tab.component.html -->\r\n<main>\r\n\t<ng-container *ngIf=\"_region_id <= 4\">\r\n\t\t<ul class=\"rnd-title\"  *ngFor=\"let number of [1,2,3,4]\">Round {{number}}</ul>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"_region_id == 5\">\r\n\t\t<ul class=\"rnd-title\">Final Four</ul>\r\n\t\t<ul class=\"rnd-title\">Finals</ul>\r\n\t\t<ul class=\"rnd-title\">Champion</ul>\r\n\t</ng-container>\r\n</main>\r\n\r\n<main *ngIf=\"_bracketGames && _bracketOwners\">\r\n\t<!-- First round games -->\r\n\t<ul class=\"round round-1\" *ngIf=\"_region_id <= 4\">\r\n\t\t<ng-template ngFor let-g [ngForOf]=\"_rnd_game_ids[1]\">\r\n\t\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-top\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team1_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team1}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team1_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team1_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam1Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-bottom\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team2_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team2}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team2_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team2_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam2Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t</ng-template>\r\n\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t</ul>\r\n\t<!-- Second round games -->\r\n\t<ul class=\"round round-2\" *ngIf=\"_region_id <= 4\">\r\n\t\t<ng-template ngFor let-g [ngForOf]=\"_rnd_game_ids[2]\">\r\n\t\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-top\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team1_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team1}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team1_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team1_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam1Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-bottom\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team2_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team2}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team2_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team2_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam2Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t</ng-template>\r\n\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t</ul>\r\n\t<!-- Third round games -->\r\n\t<ul class=\"round round-3\" *ngIf=\"_region_id <= 4\">\r\n\t\t<ng-template ngFor let-g [ngForOf]=\"_rnd_game_ids[3]\">\r\n\t\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-top\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team1_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team1}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team1_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team1_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam1Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-bottom\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team2_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team2}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team2_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team2_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam2Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t</ng-template>\r\n\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t</ul>\r\n\t<!-- Fourth round games -->\r\n\t<ul class=\"round round-4\" *ngIf=\"_region_id <= 4\">\r\n\t\t<ng-template ngFor let-g [ngForOf]=\"_rnd_game_ids[4]\">\r\n\t\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-top\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team1_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team1}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team1_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team1_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam1Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-bottom\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team2_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team2}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team2_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team2_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam2Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t</ng-template>\r\n\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t</ul>\r\n\t<!-- Fifth round games -->\r\n\t<ul class=\"round round-5\" *ngIf=\"_region_id == 5\">\r\n\t\t<ng-template ngFor let-g [ngForOf]=\"_rnd_game_ids[5]\">\r\n\t\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-title-top\" *ngIf=\"_regionList\">\r\n\t\t\t\t{{ g==61 ? _regionList[0].name : _regionList[2].name }} Region Champion\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-top\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team1_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team1}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team1_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team1_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam1Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-title-bottom\" *ngIf=\"_regionList\">\r\n\t\t\t\t{{ g==61 ? _regionList[1].name : _regionList[3].name }} Region Champion\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-bottom\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team2_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team2}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team2_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team2_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam2Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t</ng-template>\r\n\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t</ul>\r\n\t<!-- Sixth round games -->\r\n\t<ul class=\"round round-6\" *ngIf=\"_region_id == 5\">\r\n\t\t<ng-template ngFor let-g [ngForOf]=\"_rnd_game_ids[6]\">\r\n\t\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-title-top\"> </li>\r\n\t\t\t<li class=\"game game-top\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team1_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team1}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team1_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team1_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam1Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"game game-spacer\">&nbsp;</li>\r\n\t\t\t<li class=\"game game-bottom\"\r\n\t\t\t\t[ngClass]=\"{'text-light bg-success':_userService.id == _bracketOwners[g].team2_owner_id}\">\r\n\t\t\t\t{{ _bracketGames[g].team2}}\r\n\t\t\t\t<ng-container *ngIf=\"_bracketOwners[g].team2_owner\">\r\n\t\t\t\t\t({{ _bracketOwners[g].team2_owner }})\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span>{{ getTeam2Result(_bracketGames[g]) }}</span>\r\n\t\t\t</li>\r\n\t\t</ng-template>\r\n\t\t<li class=\"spacer\">&nbsp;</li>\r\n\t</ul>\r\n\t<!-- Champion -->\r\n\t<ul class=\"round\" *ngIf=\"getChampion() && _region_id==5\">\r\n\t\t<strong>&nbsp;&nbsp;***CHAMPION***</strong>\r\n\t\t<strong>&nbsp;{{_champion}} ({{_winningTeamOwner}})</strong>\r\n\t</ul>\r\n</main>"

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
            // console.log("Determining winning info...")
            if (this._bracketGames[63].team1_score > this._bracketGames[63].team2_score) {
                this._champion = this._bracketGames[63].team1;
                this._winningTeamOwner = this._bracketOwners[63].team1_owner;
            }
            else {
                this._champion = this._bracketGames[63].team2;
                this._winningTeamOwner = this._bracketOwners[63].team2_owner;
            }
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

module.exports = "<!--brackets.component.html-->\r\n\r\n<small class=\"text-muted\">(Click to see bracket)</small>\r\n<div class=\"brackets-nav\">\r\n    <nav class=\"navbar\">\r\n        <ul class=\"nav nav-pills\">\r\n    \t\t<li class = \"nav-item\" *ngFor = \"let tbracket of tbracketList\">\r\n    \t\t\t<a class = \"nav-link\" [routerLink]=\"['/brackets', tbracket.id]\"\r\n    \t\t\t[class.active]=\"isActive(tbracket.id)\"\r\n    \t\t\t>{{ tbracket.name }}</a>\r\n    \t\t</li>\r\n    \t</ul>\r\n    </nav>\r\n</div>\r\n<br>\r\n<div [class.loader] = \"loading\">\r\n  <tabset #staticTabs>\r\n    <tab heading={{regionList[0].name}} *ngIf=\"regionList\">\r\n        <app-bracket-tab *ngIf=\"region1Games && region1Owners\" \r\n            [region]=\"regionList[0].id\" [bracketGames]=\"region1Games\" [bracketOwners]=\"region1Owners\">\r\n    \t</app-bracket-tab>\r\n    </tab>\r\n    <tab heading={{regionList[1].name}} *ngIf=\"regionList\">\r\n    \t<app-bracket-tab *ngIf=\"region2Games && region2Owners\"  \r\n    \t\t[region]=\"regionList[1].id\" [bracketGames]=\"region2Games\" [bracketOwners]=\"region2Owners\">\r\n    \t</app-bracket-tab>\r\n    </tab>\r\n    <tab heading={{regionList[2].name}} *ngIf=\"regionList\">\r\n    \t<app-bracket-tab *ngIf=\"region3Games && region3Owners\"  \r\n    \t\t[region]=\"regionList[2].id\" [bracketGames]=\"region3Games\" [bracketOwners]=\"region3Owners\">\r\n    \t</app-bracket-tab>\r\n    </tab>\r\n    <tab heading={{regionList[3].name}} *ngIf=\"regionList\">\r\n    \t<app-bracket-tab *ngIf=\"region4Games && region4Owners\"  \r\n    \t\t[region]=\"regionList[3].id\" [bracketGames]=\"region4Games\" [bracketOwners]=\"region4Owners\">\r\n    \t</app-bracket-tab>\r\n    </tab>\r\n    <tab heading={{regionList[4].name}} *ngIf=\"regionList\">\r\n    \t<app-bracket-tab *ngIf=\"ffourOwners && ffourGames\"\r\n    \t\t[region]=\"regionList[4].id\" [bracketGames]=\"ffourGames\" [bracketOwners]=\"ffourOwners\">\r\n    \t</app-bracket-tab>\r\n    </tab>\r\n  </tabset>\r\n</div>\r\n"

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
                // Set active tab based on fragment contained in url, if it exists
                _this.route.fragment.subscribe(function (fragment) {
                    if (fragment) {
                        var id = parseInt(fragment);
                        // console.log("Tab Id to navigate to is: ", this.tabId);
                        _this.staticTabs.tabs[id].active = true;
                    }
                });
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
var game_matchupURL = '/api/games_matchups/';
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
    GameService.prototype.getGameWithOwnerList = function (tbracket_id) {
        return this.http.get(game_ownerURL + '?tbracketid=' + tbracket_id);
    };
    GameService.prototype.getGameWithMatchupDataList = function (tbracket_id) {
        return this.http.get(game_matchupURL + '?tbracketid=' + tbracket_id);
    };
    //method to return all games with owner info for a particular bracket
    GameService.prototype.getNewGameWithMatchupDataList = function (tbracket_id) {
        return this.http.get(new_game_matchupURL + '?tbracketid=' + tbracket_id);
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
var matchupLastGameUrl = '/api/matchups_last_game/';
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
    MatchupService.prototype.getMatchupLastGame = function (b_id, og_id) {
        return this.http.get(matchupLastGameUrl + '?tbracketid=' + b_id + '&orig_teamid=' + og_id);
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

module.exports = "<!--home.component.html-->\r\n<br>\r\n\r\n<!-- UNCOMMENT THIS TO SHOW ROSTER ON HOME PAGE -->\r\n<!-- <app-roster [loggedInUser] = \"loggedInUser\"></app-roster> -->\r\n\r\n\r\n<!-- UNCOMMENT THIS TO SHOW STANDINGS ON HOME PAGE -->\r\n<app-standings-nav></app-standings-nav>\r\n"

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

module.exports = "  <!--profile-details.component.html-->\r\n<div class=\"container-fluid\">\r\n\t<div class = \"row\">\r\n\t\t<div class = \"col-xs col-md-3\">\r\n\t\t\t<div class = \"row justify-content-start\">\r\n\t\t\t\t<div class = \"col-xs-auto\"><strong>Name:&nbsp;</strong></div>\r\n\t\t\t\t<div class = \"col\" class=\"text-muted\">{{ _player.full_name }}</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row justify-content-start\">\r\n\t\t\t\t<div class = \"col-xs-auto\"><strong>Email:&nbsp;</strong></div>\r\n\t\t\t\t<div class = \"col\" class=\"text-muted\">{{ _player.email }}</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row justify-content-start\">\r\n\t\t\t\t<div class = \"col-xs-auto\"><strong>Number of Entries:&nbsp;</strong></div>\r\n\t\t\t\t<div class = \"col\" class=\"text-muted\">{{ _player.num_entries }}</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row justify-content-start\">\r\n\t\t\t\t<div class = \"col-xs-auto\"><strong>(S)ame or (D)ifferent Brackets:&nbsp;</strong></div>\r\n\t\t\t\t<div class = \"col\" class=\"text-muted\" >{{ player.num_entries == 1 ? '-' : player.mult_entry_type }}</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row justify-content-start\">\r\n\t\t\t\t<div class = \"col-xs-auto\"><strong>Paid up?:</strong></div>\r\n\t\t\t\t<div class = \"col\" [ngClass] = \"{'text-muted': player.paid, 'text-danger': !player.paid}\">\r\n\t\t\t\t\t{{ player.paid ? 'YES - Thank you!' : 'Due($' + player.num_entries*20 + '.00)'  }}</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- UNCOMMENT BELOW DURING REGISTRATION SO USERS CAN DELETE/EDIT THEIR PROFILE INFO -->\r\n\t<!-- \t\t\t<div class = \"row top10\">\r\n\t\t\t\t<div class = \"col-xs-auto\">\r\n\t\t\t\t\t<button class=\"btn btn-secondary custom m-2\" (click)=\"openModal(template)\">Delete</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-xs-auto\">\r\n\t\t\t\t\t<button class=\"btn btn-primary custom m-2\" (click)=\"openProfileModal()\">Edit</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div> -->\r\n\t\t</div>\r\n\t\t<div *ngIf = \"!player.paid\" \r\n\t\tclass = \"col-xs col-md-4 justify-content-start align-self-center rounded border border-danger text-muted pl-1 mt-2\">\r\n\t\t\t\t<p class=\"mb-2\"><strong>Payment Options:</strong></p>\r\n\t\t\t\t<p class=\"mb-2\">1) <i class=\"fa fa-paypal\"></i> via PayPal : <a target=\"_blank\" rel=\"noopener noreferrer\"\r\n\t\t\t\t\thref=\"https://www.paypal.me/PaulMaurer1\">www.paypal.me/PaulMaurer1</a></p>\r\n\t\t\t\t<p class=\"mb-2\">2) <i class=\"fa fa-vimeo-square\"></i> via Venmo: <strong>@Paul-Maurer1</strong></p>\r\n\t\t\t\t<p class=\"mb-2\">3) Send <i class=\"fa fa-usd\"></i> to:\r\n\t\t\t\tPaul Maurer, 3260 N. Clark St., APT 506, Chicago, IL 60657</p>\r\n\t\t</div>\r\n\t\t<div class = \"col hidden-xs\"></div>\r\n\t</div>\r\n</div>\r\n\r\n<ng-template #template>\r\n\t<div class=\"modal-header\">\r\n\t\t<h4 class=\"modal-title pull-left\">Delete Profile</h4>\r\n\t\t<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"modal-body\">\r\n\t\tAre you sure you want to delete your Profile?\r\n\t</div>\r\n\t<div class=\"modal-footer\">\r\n\t\t\t<button class=\"btn btn-secondary custom\" \r\n\t\t\t(click)=\"modalRef.hide(); delete()\">Delete</button>\r\n\t</div>\r\n</ng-template>"

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

module.exports = "<!--roster.component.html-->\r\n<h4>Registrants</h4>\r\n<div [class.loader] = \"loading\">\r\n<div class = \"d-flex flex-row\">\r\n\t<div class = \"col d-none d-md-block\"></div>\r\n\t<div class = \"col-3 col-2-md text-center bg-secondary text-white rounded p-2\">\r\n\t\t<p class=\"mb-0\">People Registered</p>\r\n\t\t<h1 class=\"display-3 m-0\">{{_numRegistrants}}</h1>\r\n\t</div>\r\n\t<div class = \"col\"></div>\r\n\t<div class = \"col-3 col-2-md text-center bg-secondary text-white rounded p-2\">\r\n\t\t<p class=\"mb-0\">Number of Entries</p>\r\n\t\t<h1 class=\"display-3 m-0\">{{_numEntries}}</h1>\r\n\t</div>\r\n\t<div class = \"col\"></div>\r\n\t<div class = \"col-3 col-2-md text-center bg-secondary text-white rounded p-2\">\r\n\t\t<p class=\"mb-0\">Number of Brackets</p>\r\n\t\t<h1 class=\"display-4 m-0\">{{_numBrackets}}</h1>\r\n\t\t<small class=\"m-0\" *ngIf = \"_numNeededEntries > 1\">({{_numNeededEntries}} more entries for another!)</small>\r\n\t\t<small class=\"m-0\" *ngIf = \"_numNeededEntries == 1\">({{_numNeededEntries}} more entry for another!)</small>\r\n\t</div>\r\n\t<div class = \"col d-none d-md-block\"></div>\r\n</div>\r\n<br>\r\n\r\n<table class=\"table table-sm\">\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th scope=\"col\">#</th>\r\n\t\t\t<th scope=\"col\">Name</th>\r\n\t\t\t<th scope=\"col\">Num Entries</th>\r\n\t\t\t<th scope=\"col\">(S)ame/(D)iff</th>\r\n\t\t\t<th scope=\"col\" style=\"width: 5%\">Edit</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<tr on-mouseover=\"hoveredIndex=_loggedInUser.id\" on-mouseleave=\"hoveredIndex=null\">\r\n\t\t\t<th scope=\"row\">1</th>\r\n\t\t\t<td><strong>{{ _loggedInUser.full_name }}*</strong></td>\r\n\t\t\t<td><strong>{{ _loggedInUser.num_entries }}</strong></td>\r\n\t\t\t<td><strong>{{ _loggedInUser.num_entries == 1 ? '-' : _loggedInUser.mult_entry_type }}</strong></td>\r\n\t\t\t<td>\r\n\t\t\t\t<fa name=\"edit\" *ngIf=\"hoveredIndex==_loggedInUser.id\" class = \"cursor-pointer\" tooltip = \"Edit Profile\" (click)=\"openProfileModal()\"></fa>\t\t\t\t\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr *ngFor = \"let player of roster; let i = index\">\r\n\t\t\t<th scope=\"row\">{{i + 2}}</th>\r\n\t\t\t<td>{{ player.full_name }}</td>\r\n\t\t\t<td>{{ player.num_entries }}</td>\r\n\t\t\t<td>{{ player.num_entries == 1 ? '-' : player.mult_entry_type }}</td>\r\n\t\t\t<td></td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n<br>\r\n</div>"

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
        this.loading = true;
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
            _this.loading = false;
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

module.exports = "<br>\r\n<div [class.loader] = \"loading\">\r\n<table class=\"table table-sm\" *ngIf=\"_regionList\">\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th scope=\"col\">Name</th>\r\n\t\t\t<th scope=\"col\" class=\"text-center\" style=\"width: 15%\"># Active Teams</th>\r\n\t\t\t<th scope=\"col\">{{ _regionList[0].name }}</th>\r\n\t\t\t<th scope=\"col\">{{ _regionList[1].name }}</th>\r\n\t\t\t<th scope=\"col\">{{ _regionList[2].name }}</th>\r\n\t\t\t<th scope=\"col\">{{ _regionList[3].name }}</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<tr *ngFor = \"let entry of _standingsList; let i = index\" \r\n\t\t[class.bg-success]=\"entry.player_id == _userService.id\" \r\n\t\t[class.text-white]=\"entry.player_id == _userService.id\">\r\n\t\t\t<td >{{ entry.player }}</td>\r\n\t\t\t<td class=\"text-center\">{{ entry.team_count }}</td>\r\n\t\t\t<td>{{ entry.team_a }} <ng-container *ngIf=\"entry.team_a\">\r\n\t\t\t\t<small>{{ entry.team_a_status }}</small></ng-container></td>\r\n\t\t\t<td>{{ entry.team_b }} <ng-container *ngIf=\"entry.team_b\">\r\n\t\t\t\t<small>{{ entry.team_b_status }}</small></ng-container></td>\r\n\t\t\t<td>{{ entry.team_c }} <ng-container *ngIf=\"entry.team_c\">\r\n\t\t\t\t<small>{{ entry.team_c_status }}</small></ng-container></td>\r\n\t\t\t<td>{{ entry.team_d }} <ng-container *ngIf=\"entry.team_d\">\r\n\t\t\t\t<small>{{ entry.team_d_status }}</small></ng-container></td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n</div>"

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
            _this._standingsList.sort(function (a, b) { return (a.team_count > b.team_count) ? -1 : ((b.team_count > a.team_count) ? 1 : 0); });
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

module.exports = "<!--roster.component.html-->\r\n<h4>My Teams</h4>\r\n<div [class.loader] = \"loading\">\r\n<div class=\"table-responsive\" *ngIf=\"_entryList && _entryList.length; else assignment_announcement\">\r\n\t<div class = \"table table-borderless table-sm\" *ngFor = \"let entry of _entryList\" id=\"my-teams\">\r\n\t\t<thead>\r\n\t\t\t<tr class=\"table-active\">\r\n\t\t\t\t<th scope=\"col\">Bracket</th>\r\n\t\t\t\t<th scope=\"col\">Region</th>\r\n\t\t\t\t<th scope=\"col\">Original Teams</th>\r\n\t\t\t\t<th scope=\"col\">Active Team(s)</th>\r\n\t\t\t\t<th scope=\"col\">Next Game</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody *ngIf=\"_regionList\">\r\n\t\t\t<tr>\r\n\t\t\t\t<td class=\"text-primary text-pointer\" (click)=\"sendToBracket(entry.tbracket_id)\"><strong>{{ entry.tbracket }}</strong></td>\r\n\t\t\t\t<td>{{ _regionList[0].name }}</td>\r\n\t\t\t\t<td>{{ entry.orig_team_a }}</td>\r\n\t\t\t\t<td>{{ entry.team_a || '**OUT**'}}</td>\r\n\t\t\t\t<td><app-team-nextup [bracket]=\"entry.tbracket_id\" [team]=\"entry.team_a_id\" [region]=\"_regionList[0].id\" \r\n\t\t\t\t\t[orig_team]=\"entry.orig_team_a_id\"></app-team-nextup></td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td>{{ _regionList[1].name }}</td>\r\n\t\t\t\t<td>{{ entry.orig_team_b }}</td>\r\n\t\t\t\t<td>{{ entry.team_b || '**OUT**'}}</td>\r\n\t\t\t\t<td><app-team-nextup [bracket]=\"entry.tbracket_id\" [team]=\"entry.team_b_id\" [region]=\"_regionList[1].id\"\r\n\t\t\t\t\t[orig_team]=\"entry.orig_team_b_id\"></app-team-nextup></td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td>{{ _regionList[2].name }}</td>\r\n\t\t\t\t<td>{{ entry.orig_team_c }}</td>\r\n\t\t\t\t<td>{{ entry.team_c || '**OUT**'}}</td>\r\n\t\t\t\t<td><app-team-nextup [bracket]=\"entry.tbracket_id\" [team]=\"entry.team_c_id\" [region]=\"_regionList[2].id\"\r\n\t\t\t\t\t[orig_team]=\"entry.orig_team_c_id\"></app-team-nextup></td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td>{{ _regionList[3].name }}</td>\r\n\t\t\t\t<td>{{ entry.orig_team_d }}</td>\r\n\t\t\t\t<td>{{ entry.team_d || '**OUT**'}}</td>\r\n\t\t\t\t<td><app-team-nextup [bracket]=\"entry.tbracket_id\" [team]=\"entry.team_d_id\" [region]=\"_regionList[3].id\"\r\n\t\t\t\t\t[orig_team]=\"entry.orig_team_d_id\"></app-team-nextup></td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</div>\r\n</div>\r\n</div>\r\n\r\n<br>\r\n<ng-template #assignment_announcement>\r\n\t<div class=\"text-center\">\r\n\t\t<br>\r\n\t\t<h5 class=\"font-italic text-muted\">** Teams will be assigned by Thursday, March 21, at 10am CST **</h5>\r\n\t\t<small>Check back then to see which brackets your entries were assigned (4 teams, 1 per Region, assigned to each entry)</small>\r\n\t</div>\r\n</ng-template>"

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
/* harmony import */ var _core_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/game.service */ "./src/app/core/game.service.ts");
/* harmony import */ var _core_region_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/region.service */ "./src/app/core/region.service.ts");
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
    function TeamDetailsComponent(_entryService, router, _gameService, _regionService) {
        this._entryService = _entryService;
        this.router = router;
        this._gameService = _gameService;
        this._regionService = _regionService;
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
        this._entryService.getEntryDetailsListByPlayer(this._player.id).subscribe(function (data) {
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
            _core_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"],
            _core_region_service__WEBPACK_IMPORTED_MODULE_4__["RegionService"]])
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

module.exports = "<a [routerLink]=\"['/brackets', _bracket_id]\" [fragment]=\"_region_id-1\">{{ _nextup_game }}</a>"

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





var TeamNextupComponent = /** @class */ (function () {
    function TeamNextupComponent(router, _matchupService, _gameService, _userService) {
        this.router = router;
        this._matchupService = _matchupService;
        this._gameService = _gameService;
        this._userService = _userService;
    }
    TeamNextupComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get last matching game which will either be last game played or next game up
        this._matchupService.getMatchupLastGame(this._bracket_id, this._orig_team_id).subscribe(function (matchups) {
            _this._lastGame = matchups[0];
            //if owner's team is out
            if (_this._team_id == null) {
                // determine which team the user owns and select the other team as having lost
                if (_this._lastGame.team1_owner_id == _this._userService.id) {
                    _this._nextup_game = " Lost to: " + _this._lastGame.team2 + " (" + _this._lastGame.team2_owner + ") with " + _this._lastGame.team1;
                }
                if (_this._lastGame.team2_owner_id == _this._userService.id) {
                    _this._nextup_game = " Lost to: " + _this._lastGame.team1 + " (" + _this._lastGame.team1_owner + ") with " + _this._lastGame.team2;
                }
                // append proper Round within which last game was lost
                if (_this._lastGame.t_round <= 4) {
                    _this._nextup_game += " in Round " + _this._lastGame.t_round;
                }
                else if (_this._lastGame.t_round == 5) {
                    _this._nextup_game += " in the Semi-Finals";
                }
                else {
                    _this._nextup_game += " in the Championship";
                }
                //if last game played is in Final Four round, update _region_id for proper route navigation purposes
                _this._region_id = _this._lastGame.region_id;
            } //end if
            //if owner's team is still in it
            else {
                // append proper Round within which next game is being played
                if (_this._lastGame.t_round <= 4) {
                    _this._nextup_game = "Round " + _this._lastGame.t_round;
                }
                else if (_this._lastGame.t_round == 5) {
                    _this._nextup_game = "Semi-Final";
                }
                else {
                    _this._nextup_game = "Finals";
                }
                // determine proper spread based on whether Team1 or Team 2
                if (_this._lastGame.team1_owner_id == _this._userService.id && _this._lastGame.team2 != null) {
                    if (_this._lastGame.spread != null)
                        if (_this._lastGame.spread > 0)
                            _this._nextup_game += " Favored by " + _this._lastGame.spread + " 1/2";
                        else if (_this._lastGame.spread < 0)
                            _this._nextup_game += " Underdog by " + Math.abs(_this._lastGame.spread) + " 1/2";
                        else if (_this._lastGame.spread == 0)
                            _this._nextup_game += " Pick'em";
                    _this._nextup_game += " vs. " + _this._lastGame.team2 + " (" + _this._lastGame.team2_owner + ")";
                } //end if
                else if (_this._lastGame.team2_owner_id == _this._userService.id && _this._lastGame.team1 != null) {
                    if (_this._lastGame.spread != null)
                        if (_this._lastGame.spread < 0)
                            _this._nextup_game += " Favored by " + Math.abs(_this._lastGame.spread) + " 1/2";
                        else if (_this._lastGame.spread > 0)
                            _this._nextup_game += " Underdog by " + _this._lastGame.spread + " 1/2";
                        else if (_this._lastGame.spread == 0)
                            _this._nextup_game += " Pick'em";
                    _this._nextup_game += " vs. " + _this._lastGame.team1 + " (" + _this._lastGame.team1_owner + ")";
                }
                // Otherwise if no opponent yet, show vs. TBD
                else {
                    _this._nextup_game += " vs. TBD";
                }
                //if last game played is in Final Four round, update _region_id for proper route navigation purposes
                _this._region_id = _this._lastGame.region_id;
            } //end else
        }); // end this._gameService subscribe
    }; //end ngOnInit
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('orig_team'),
        __metadata("design:type", Number)
    ], TeamNextupComponent.prototype, "_orig_team_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bracket'),
        __metadata("design:type", Number)
    ], TeamNextupComponent.prototype, "_bracket_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('team'),
        __metadata("design:type", Number)
    ], TeamNextupComponent.prototype, "_team_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('region'),
        __metadata("design:type", Number)
    ], TeamNextupComponent.prototype, "_region_id", void 0);
    TeamNextupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-nextup',
            template: __webpack_require__(/*! ./team-nextup.component.html */ "./src/app/team-nextup/team-nextup.component.html"),
            styles: [__webpack_require__(/*! ./team-nextup.component.css */ "./src/app/team-nextup/team-nextup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_matchup_service__WEBPACK_IMPORTED_MODULE_2__["MatchupService"],
            _core_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"],
            _core_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], TeamNextupComponent);
    return TeamNextupComponent;
}()); //end export class



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

module.exports = "<!--src/app/ui/header/footer.component.html-->\r\n\r\n<nav class=\"navbar navbar-dark bg-primary fixed-bottom footer\">\r\n  <div class=\"navbar-expand m-auto navbar-text footer\">\r\n  \t<i class = \"fa fa-ban\"></i> Exit Zero Technologies 2018\r\n  </div>\r\n</nav>"

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

module.exports = "<!--src/app/ui/header/header.component.html-->\r\n\r\n<!-- Navigation Menu for site -->\r\n<nav class=\"navbar center navbar-expand-md navbar-dark bg-primary\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<a class=\"navbar-brand\" [routerLink]=\"['/home']\">\r\n\t\t\t<img src=\"../static/front-end/assets/spreadpool_white_no_background_48x114.png\" alt=\"Spreadpool\">\r\n\t\t</a>\r\n\t\t<div class=\"d-flex flex-row order-2 order-lg-3 align-middle\">\r\n\t\t\t<a *ngIf=\"currentUser\" class=\"navbar-text\" [routerLink]=\"['/profile']\">Hi, {{ currentUser.first_name }}!</a>\r\n\t        <form class=\"form-inline\">\r\n\t\t    \t<button type=\"button\" class=\"btn btn-outline-light\" (click)=\"logout()\">Log Out</button>\r\n\t\t  \t</form>\r\n\t\t\t<button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\"\r\n\t\t\t\tdata-target=\"#navbar\" aria-controls=\"navbar\" aria-expanded=\"false\"\r\n\t\t\t\taria-label=\"Toggle navigation\" (click)=\"isCollapsed = !isCollapsed\">\r\n\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class=\"collapse navbar-collapse order-3 order-lg-2\" id=\"navbar\" [collapse]=\"isCollapsed\">\r\n\t        <ul class=\"navbar-nav mr-auto\">\r\n\t        \t<li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n\t            \t<a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a>\r\n\t            </li>\r\n\t            <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n\t            \t<a class=\"nav-link\" [routerLink]=\"['/profile']\">My Teams</a>\r\n\t            </li>\r\n\t            <li class=\"nav-item\" [class.active]=\"isActive(['/brackets'])\" *ngIf = \"_bracketToShow\">\r\n\t            \t<a *ngIf=\"_bracketToShow\" class=\"nav-link\" [routerLink]=\"['/brackets', _bracketToShow]\">Brackets</a>\r\n\t            </li>\r\n\r\n\t            <li class=\"nav-item dropdown\" dropdown *ngIf=\"isUserAdmin()\">\r\n\t\t\t        <a class=\"nav-link dropdown-toggle\" dropdownToggle (click)=\"false\" \r\n\t\t\t        href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t          Admin\r\n\t\t\t        </a>\r\n\t\t\t        <div class=\"dropdown-menu\" *dropdownMenu aria-labelledby=\"navbarDropdown\">\r\n\t\t\t          <a class=\"dropdown-item\" [routerLink]=\"['/admin/c-brackets']\">Create Brackets</a>\r\n\t\t\t          <a class=\"dropdown-item\" [routerLink]=\"['/admin/a-brackets', _bracketToShow]\">Assign Entries</a>\r\n\t\t\t          <a class=\"dropdown-item\" [routerLink]=\"['/admin/u-games']\">Update Games</a>\r\n\t\t\t        </div>\r\n\t\t\t\t</li>\r\n\t        </ul>\r\n\t  \t</div> <!--end navbar-collapse -->\r\n  \t</div> <!--end container-fluid -->\r\n</nav>"

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
        // Attempted this approach to grab default bracket to show but redux currentUser doesn't render quick enough
        this._bracketToShow = null;
        this._tbracketService.getListWithPlayer(this._userService.id).subscribe(function (data) {
            if (data.length > 0) {
                _this._bracketToShow = data[0].id;
            }
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

module.exports = __webpack_require__(/*! C:\Django\spreadpool_project\spreadpool\bracket\front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map