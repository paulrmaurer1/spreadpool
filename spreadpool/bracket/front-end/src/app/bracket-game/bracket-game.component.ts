import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { mergeMap, switchMap  } from 'rxjs/operators';
import { EntryService } from '../core/entry.service';
import { GameService } from '../core/game.service';
import { EntryData, GameData, EntryNameData } from '../shared/interfaces';

@Component({
  selector: 'app-bracket-game',
  templateUrl: './bracket-game.component.html',
  styleUrls: ['./bracket-game.component.css']
})
export class BracketGameComponent implements OnInit, OnChanges {

	private _bracket_id: number; //bracket id that gets passed from bracket-detail.component
	private _team_owner: string; //player name that belongs to team id sent from bracket-detail.component


	@Input() get bracket_id(): number {
		return this._bracket_id;
	}

	set bracket_id(value: number) {
		if (value) {
			this._bracket_id = value;
		}
	}

	@Input('team_id') _team_id: number; // team id that gets passed from bracket-detail.component
	// @Input('owner') _owner: string;

	constructor(private _entryService: EntryService) { }

	ngOnInit() {

	}

	ngOnChanges() {
		//The only value that changes in this component upon a bracket change is the player, i.e. team_owner
		//associated with each team.  Preferable to get from initial API call but haven't figured that out yet!!!
		this._team_owner=''
		if (this._team_id) {
			this._entryService.getEntryNameByTeamAndBracket(this._bracket_id, this._team_id).subscribe(entry => {
				if (entry[0]) {this._team_owner = '(' + entry[0].player + ')'};
			});
		}
		
		// if (this._owner) {
		// 	this._team_owner = this._owner
		// }

	} //end ngOnChanges
}
