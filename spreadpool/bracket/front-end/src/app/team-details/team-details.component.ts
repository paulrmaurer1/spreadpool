import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IUserData, EntryData, TBracketData, MatchupData, GameData } from '../shared/interfaces';
import { EntryService } from '../core/entry.service';
import { TBracketService } from '../core/tbracket.service';
import { MatchupService } from '../core/matchup.service';
import { GameService } from '../core/game.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

	private _player: IUserData;
	private _entryList: EntryData[];
	// private _bracketTeams: {[bracket: string] : EntryData}[];
	private _nextGame: GameData;
	private _nextMatchup: MatchupData;
	private _nextOpponent: string;
	private _nextTeam: string;

	@Input() get player(): IUserData {
		return this._player;
	}

	set player(value: IUserData) {
		if (value) {
			this._player = value;
		}
	}

	constructor(private _entryService: EntryService,
		private _tbracketService: TBracketService,
		private router: Router,
		private _matchupService: MatchupService,
		private _gameService: GameService) { }

	ngOnInit() {

		//retrieve entries for user
		this._entryService.getEntryDetailsListByPlayer(this._player.id).subscribe(data => {
			this._entryList = data;
			//console.log ("entryList is: ", this._entryList);
		});

		// Attempt to combine multiple entries from same bracket into a data structure
		// that'd be easy to show in tables
		// this._bracketTeams = [];
		// retrieve bracket names and build array to capture bracket name + entry array
		// this._tbracketService.getList().subscribe(data => {
		// 	data.forEach((bracket) => {
		// 		this._entryList.forEach((entry) => {
		// 			if (entry.tbracket == bracket.id) {
		// 				this._bracketTeams.push({[bracket.name] : entry})
		// 			}
		// 		})
		// 	});
		// 	console.log("List of Brackets: ", this._bracketTeams);
		// });

	}

	sendToBracket(bracket) {
		this._tbracketService.getList().subscribe(data => {
			data.forEach((tbracket) => {
				if (bracket == tbracket.name) {
					this.router.navigate(['/brackets', tbracket.id])
				}
			})
		});
	} // end sendToBracket()

}
