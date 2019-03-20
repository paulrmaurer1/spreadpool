import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { TBracketService } from '../core/tbracket.service';
import { EntryService } from '../core/entry.service';
import { UserService } from '../core/user.service';
import { TBracketData, EntryBracketData, IUserData } from '../shared/interfaces';
import { TabsetComponent } from 'ngx-bootstrap';
// import { Store } from 'redux';
// import { AppStore } from '../app.store';
// import { AppState } from '../app.state';

@Component({
  selector: 'app-standings-nav',
  templateUrl: './standings-nav.component.html',
  styleUrls: ['./standings-nav.component.css']
})
export class StandingsNavComponent implements OnInit {
	tbracketList: TBracketData[];
	activeBracket: TBracketData;
	_bracketToShow: number;
	@ViewChild('staticTabs') staticTabs: TabsetComponent;

	private currentUser : IUserData;


	constructor(
		private _tbracketService: TBracketService,
		private _entryService: EntryService,
		private _userService: UserService,
		// @Inject(AppStore) private store: Store<AppState>
		)	{
			// store.subscribe(() => this.readState());
			// this.readState(); 
			}

	ngOnInit() {

	// Retrieve list of brackets for bracket navbar
	// this._tbracketService.getList().subscribe(data => {
	// 	this.tbracketList = data;
	// 	console.log("Bracket list of nav is: ", this.tbracketList)
	// });

	this._tbracketService.getListWithPlayer(this._userService.id).subscribe(data => {
			this.tbracketList = data;
		});


	} //end ngOnInit

	// Redux store methods
	// readState() {
	// 	const state: AppState = this.store.getState() as AppState;
	// 	this.currentUser = state.currentUser;
	// }

}
