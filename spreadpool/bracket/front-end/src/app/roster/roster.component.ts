import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from '../core/player.service';
import { IUserData } from '../shared/interfaces';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
	private roster : object[]; // to capture entire user list in array for iteration
	private rosterString : string[]; // to capture list of players (except for loggedInUser)
	private _loggedInUser: IUserData; // to capture loggedInUser object from parent component
	
	// Retrieve loggedInUser from parent component
	@Input() get loggedInUser(): IUserData {
		return this._loggedInUser;
	}

	set loggedInUser(value: IUserData) {
		if (value) {
			this._loggedInUser = value;
		}
	}
	
 	constructor(private _playerService: PlayerService) { 
 	}

	ngOnInit() {
		this.rosterString = [];
		this._playerService.getList().subscribe(data => {
			this.roster = data;
			this.roster.forEach(element => {
				if (element["email"] != this._loggedInUser.email) {
					this.rosterString.push(element["full_name"]);
				}
			})

		})
	}

}
