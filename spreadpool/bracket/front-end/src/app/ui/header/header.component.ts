import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../core/user.service';
import { EntryService } from '../../core/entry.service';
import { TBracketService } from '../../core/tbracket.service';
import { GameService } from '../../core/game.service';
import { EntryBracketData, TBracketData, IUserData, GameData } from '../../shared/interfaces';

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
	tbracketList: TBracketData[];
	_mobile: boolean = false;
	_region_id: number;

	constructor(
		private router: Router,
		private _userService: UserService,
		private _entryService: EntryService,
		private _tbracketService: TBracketService,
		private _gameService: GameService,
		@Inject(AppStore) private store: Store<AppState>
		) {

		store.subscribe(() => this.readState());
		this.readState(); 

		}

	ngOnInit() {
		// See if the tourney is at the Final Four and show Final Four tab if true
		this._gameService.isFinalFour().subscribe(data => {
			// console.log("The Final Four is happening now is: ", data['happening']);
			if (data['happening']) {
				this._region_id = 4;
			}
			else {
				this._region_id = 0
			}
			// Attempted to use redux currentUser but doesn't render quick enough
			// Instead use _userService to get logged in user id, then tbracketService to get player's bracket id
			this._tbracketService.getListWithPlayer(this._userService.id).subscribe(data => {
				if (data.length > 0) {
					this._bracketToShow = data[0].id;
				}
				else {
					this._bracketToShow = null;
				}
				// console.log("The bracketToShow is ", this._bracketToShow)
				this.tbracketList = data;
			});
		})
		
		
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
