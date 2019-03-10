import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../core/user.service';
import { EntryService } from '../../core/entry.service';
import { TBracketService } from '../../core/tbracket.service';
import { EntryBracketData, TBracketData, IUserData } from '../../shared/interfaces';

import { Store } from 'redux';
import { AppStore } from '../../app.store';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	isCollapsed = true;
	_bracketToShow: number;
	currentUser : IUserData;

	constructor(
		private router: Router,
		private _userService: UserService,
		private _entryService: EntryService,
		private _tbracketService: TBracketService,
		@Inject(AppStore) private store: Store<AppState>
		) {

		store.subscribe(() => this.readState());
		this.readState(); 

		}

	ngOnInit() {
		this._bracketToShow = null;
		// Retrieve the logged in player's entries to set default bracket to show
		// when click on Bracket navbar option
		this._entryService.getEntryBracketListByPlayer(this._userService.id).subscribe(data => {
			// Check to see if User is assigned an entry yet, if so, show the first bracket
			// console.log ("player brackets: ", data)
			if (data.length > 0 && data[0].tbracket != null) {
				this._bracketToShow = data[0].tbracket;
			}
			else {
			// Otherwise, pull the first bracket that has been setup (there should always be at least 1 bracket setup)
				this._tbracketService.getList().subscribe(data => {
					// console.log ("system brackets: ", data)
					if (data.length > 0) {
						this._bracketToShow = data[0].id;
					}
				})
			}
		}); //end subscribe
	} //end ngOnInit()

  	// This function is used to keep Brackets nav bar option 'active' regardless of parameter
	isActive(instruction: any[]): boolean {
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
		const state: AppState = this.store.getState() as AppState;
		this.currentUser = state.currentUser;
	}

	isUserAdmin() {
		if (this.currentUser) {
			return (this.currentUser.is_staff==1);
		}
		else return false;
	}
}
