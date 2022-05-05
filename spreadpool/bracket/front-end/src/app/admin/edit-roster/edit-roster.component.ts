import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../../core/player.service';
import { UserService } from '../../core/user.service';
import { SorterService } from '../../core/sorter.service';
import { IUserData } from '../../shared/interfaces';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AdminProfileFormModalComponent } from '../../profile-form-modal/admin-profile-form-modal.component';

@Component({
	selector: 'app-edit-roster',
	templateUrl: './edit-roster.component.html',
	styleUrls: ['./edit-roster.component.css']
})
export class EditRosterComponent implements OnInit {
	_roster: IUserData[];
	_filteredRoster: IUserData[];
	_loggedInUser: IUserData; // to capture loggedInUser object from parent component
	hoveredIndex: number; // to user which row a user hovers on
	loading: boolean;
	// sort function variables
	_property: string;
	_direction: number=1;
	
		// Modal object to capture content
	bsModalRef: BsModalRef;
	
 	constructor(
		private _playerService: PlayerService,
 		private _modalService: BsModalService,
 		private _sorterService: SorterService,
	) { }

	ngOnInit() {
		this._playerService.getList().subscribe(data => {
			this._filteredRoster = this._roster = data;
		});
	}

	openAdminProfileModal(_player: IUserData) {
		const initialState = {
			id: _player.id,
			profile_user: _player
		};
		this.bsModalRef = this._modalService.show(AdminProfileFormModalComponent, {initialState});

		this._modalService.onHidden.subscribe(() => {
			// Update and re-display roster so any changes are reflected in what the user sees on screen
			// this._playerService.getList().subscribe(data => {
			// 	this._filteredRoster = data;
			// 	if (this._property) {
			// 		this.sort(this._property);
			// 	}
			// });
			// console.log("_property = ", this._property, " _direction = ", this._direction)
		})
	}

	filter(data: string) {
		// Function that filters the Roster list based on what a user types in the edit-roster-textbox component
		if (data) {
			this._filteredRoster = this._roster.filter(item => item.full_name.toLowerCase().indexOf(data.toLowerCase()) > -1
				|| item.email.toLowerCase().indexOf(data.toLowerCase()) > -1);
		} else {
			this._filteredRoster = this._roster;
		}
	}

	sort(prop: string) {
		this._sorterService.sort(this._filteredRoster, prop);
		this._property = prop;
		this._direction = (this._property === prop) ? this._direction * -1 : 1;
		// console.log ("property = ", this._property, " & direction = ", this._direction);
	}
}