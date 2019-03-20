import { Component, OnInit, Input } from '@angular/core';
import { EntryStandingsData } from '../shared/interfaces';
import { EntryService } from '../core/entry.service';
import { UserService } from '../core/user.service';


@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

	_standingsList: EntryStandingsData[];
	_bracketId: number;

	@Input() get bracket(): number {
		return this._bracketId;
	}

	set bracket(value: number) {
		if (value) {
			this._bracketId = value;
		}
	}

  constructor(
  	private _entryService: EntryService,
  	private _userService: UserService 
  	) { }

  ngOnInit() {
  	// this._bracketId = 1;

  	this._entryService.getEntryStandings(this._bracketId).subscribe(data => {
			this._standingsList = data;
			// Sort the standings by descending team_count (they're pre-sorted by last name descending)
			this._standingsList.sort((a,b) => (a.team_count > b.team_count) ? -1 : ((b.team_count > a.team_count) ? 1 : 0));
		});

  }

}
