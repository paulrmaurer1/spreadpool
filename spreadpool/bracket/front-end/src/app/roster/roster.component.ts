import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../core/player.service';
import { UserService } from '../core/user.service';
import { SorterService } from '../core/sorter.service';
import { IUserData } from '../shared/interfaces';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProfileFormModalComponent } from '../profile-form-modal/profile-form-modal.component';
import { AdminProfileFormModalComponent } from '../profile-form-modal/admin-profile-form-modal.component';
import { faCaretDown, faCaretUp, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-roster',
	templateUrl: './roster.component.html',
	styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
	_roster: IUserData[];
	_filteredRoster: IUserData[];
	_loggedInUser: IUserData; // to capture loggedInUser object from parent component
	hoveredIndex: number; // to user which row a user hovers on
	_numRegistrants: number; // tally up # of registrations for display at top
	_numBrackets: number; //tally estimated # of brackets
	_numEntries: number; //tally up # of entries num bracket calculation
	_numNeededEntries: number; //# entries needed to complete another bracket
	loading: boolean;
	_property: string;
	_direction: number=1;

  // fortawesome icons
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  faEdit = faEdit;
	
	// Retrieve loggedInUser from parent component
	@Input() get loggedInUser(): IUserData {
		return this._loggedInUser;
	}

	set loggedInUser(value: IUserData) {
		if (value) {
			this._loggedInUser = value;
		}
	}

	// Retrieve roster from parent component
	@Input() get roster(): IUserData[] {
		return this._roster;
	}

	set roster(value: IUserData[]) {
		if (value) {
			this._filteredRoster = this._roster = value;
		}
	}

	// Modal object to capture content
	bsModalRef: BsModalRef;
	
 	constructor(
		private _playerService: PlayerService,
 		private _userService: UserService, 
 		private _modalService: BsModalService,
 		private sorterService: SorterService,
	) { }

	ngOnInit() {
		this.loading = true;
		// Calculate registration stats needed at top of page
		this._numRegistrants = 1; // start at 1 since _loggedInUser counts as 1
		this._numBrackets = 0;
		this._numEntries = this._loggedInUser.num_entries; // start _numEntries counter at # that loggedInUser has
		this._roster.forEach(registrant => {
			this._numRegistrants += 1;
			this._numEntries += registrant.num_entries;
		})
		this._numBrackets = Math.floor(this._numEntries/16);
		this._numNeededEntries = (this._numBrackets+1)*16 - this._numEntries
		this.loading=false;
	}

	openProfileModal() {
			const initialState = {
				id: this.hoveredIndex,
				profile_user: this._loggedInUser
			};
			this.bsModalRef = this._modalService.show(ProfileFormModalComponent, {initialState});

			this._modalService.onHidden.subscribe((reason: string) => {
				// Upon modal being closed run these actions
				// const _reason = reason ? `, dismissed by ${reason}` : '';
				// console.log ("Profile modal was closed ", reason);
				// Update logged in User against database after modal closes
				// This updates the affected (1st) row for any changes that was made on the Modal
				// this._userService.getLoggedInUser().subscribe(data => {
				// 	this._loggedInUser = data;
				// })
			})
	}

	filter(data: string) {
		// Function that filters the Roster list based on what a user types in the roster-textbox component
		if (data) {
			this._filteredRoster = this._roster.filter(item => item.full_name.toLowerCase().indexOf(data.toLowerCase()) > -1);
		} else {
			this._filteredRoster = this._roster;
		}
	}

	sort(prop: string) {
		this.sorterService.sort(this._filteredRoster, prop);
		this._property = prop;
		this._direction = (this._property === prop) ? this._direction * -1 : 1;
		// console.log ("property = ", this._property, " & direction = ", this._direction);
	}
}