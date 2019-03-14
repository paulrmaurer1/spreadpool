import { Component, OnInit, ViewChild } from '@angular/core';
import { TBracketService } from '../core/tbracket.service';
import { EntryService } from '../core/entry.service';
import { TBracketData, EntryBracketData } from '../shared/interfaces';
import { TabsetComponent } from 'ngx-bootstrap';

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


	constructor(
		private _tbracketService: TBracketService,
		private _entryService: EntryService) { }

	ngOnInit() {

	// Retrieve list of brackets for bracket navbar
	this._tbracketService.getList().subscribe(data => {
		this.tbracketList = data;
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

		

	} //end ngOnInit

}
