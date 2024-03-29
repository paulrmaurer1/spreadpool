import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { TBracketService } from '../core/tbracket.service';
import { UserService } from '../core/user.service';
import { TBracketData } from '../shared/interfaces';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-standings-nav',
  templateUrl: './standings-nav.component.html',
  styleUrls: ['./standings-nav.component.css']
})
export class StandingsNavComponent implements OnInit {
	_tbracketList: TBracketData[];

  // fortawesome icons
  faRotate = faRotate;

	constructor(
		private _tbracketService: TBracketService,
		private _userService: UserService
		)	{ }

	ngOnInit() {

	// Retrieve list of brackets for bracket navbar
	this._tbracketService.getListWithPlayer(this._userService.id).subscribe(data => {
			this._tbracketList = data;
		});

	} //end ngOnInit

}
