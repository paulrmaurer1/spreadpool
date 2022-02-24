import { Component, OnInit, Input } from '@angular/core';
import { NewGameWithOwnerData, GameData, RegionData } from '../shared/interfaces';
import { UserService } from '../core/user.service';
import { RegionService } from '../core/region.service';

@Component({
  selector: 'app-bracket-tab',
  templateUrl: './bracket-tab.component.html',
  styleUrls: ['./bracket-tab.component.css']
})
export class BracketTabComponent implements OnInit {

	_bracketOwners: NewGameWithOwnerData[]; //array to capture game owner info
	_rnd_game_ids: object; //object containing region_id : game_id arrays to get proper game info for each bracket
	_champion: string; //string to capture champion of bracket
	_winningTeamOwner: string; //string to capture winning team owner
	_regionList: RegionData[];

	@Input('region') _region_id: number; //id of region passed to component
	@Input('bracketGames') _bracketGames: GameData[]; //subset of games associated with each Region

	//Inject this value from parent component and update team owners as parent bracket is clicked
	@Input() get bracketOwners(): NewGameWithOwnerData[] {
		return this._bracketOwners;
	}
	set bracketOwners(value: NewGameWithOwnerData[]) {
		if (value) {
			this._bracketOwners = value;
			// console.log ("Detail component bracketOwners for ", this._region_id, " Region", this._bracketOwners);
		}
	}

	constructor(
		private _userService: UserService,
		private _regionService: RegionService) { }

	ngOnInit() {
		// console.log ("Detail component bracketGames for ", this._region_id, " Region", this._bracketGames);

		//Create game id arrays for each Round with round # as index
		this._rnd_game_ids = {}
		this._rnd_game_ids[1] = Array.from({length: 8}, (v, k) => k+ 1 + this.getRdIncr(1));
		this._rnd_game_ids[2] = Array.from({length: 4}, (v, k) => k+33 + this.getRdIncr(2));
		this._rnd_game_ids[3] = Array.from({length: 2}, (v, k) => k+49 + this.getRdIncr(3));
		this._rnd_game_ids[4] = Array.from({length: 1}, (v, k) => k+57 + this.getRdIncr(4));
		this._rnd_game_ids[5] = [61, 62];
		this._rnd_game_ids[6] = [63];
		// console.log ("This region array of game numbers is", this._rnd_game_ids);

		// Retrieve list of regions to display in tabs, but only make this http call once for Final Four tab
		if (this._region_id==5) {
			this._regionService.getRegionList().subscribe(data => {
				this._regionList = data;
			})
		}
	}

	getRdIncr(x) { //x = round #
		//To identify proper increment to add to South Region game id arrays
		//to generate other regions' game ids
		switch(this._region_id) {
			case 1: { return 0; break; }
			case 2: {
				switch(x) {
					case 1: {return 8; break; }
					case 2: {return 4; break; }
					case 3: {return 2; break; }
					case 4: {return 1; break; }
				}}
			case 3: {
				switch(x) {
					case 1: {return 16; break; }
					case 2: {return 8; break; }
					case 3: {return 4; break; }
					case 4: {return 2; break; }
				}}
			case 4: {
				switch(x) {
					case 1: {return 24; break; }
					case 2: {return 12; break; }
					case 3: {return 6; break; }
					case 4: {return 3; break; }
				}}
		} // end outer switch
	} //end getRdIncr(x)

	getTeam1Result(game: GameData) {
		// To determine whether to show score (post-game) or spread (pre-game)
		if (game.team1_score > 0) {
			if (game.spread > 0) {
				return game.team1_score + '('+ (-game.spread - 0.5) + ')'
			}
			else if (game.spread == 0) {
				return game.team1_score + '(PK)'
			}
			else {return game.team1_score}
		}
		else if (game.spread > 0) {
			return -game.spread - 0.5
		}
		else if (game.spread == 0) {
			return 'PK'
		}
	} // end getTeam1Result(game)

	getTeam2Result(game: GameData) {
		// To determine whether to show score (post-game) or spread (pre-game)
		if (game.team2_score > 0) {
			if (game.spread < 0) {
				return game.team2_score + '('+ (game.spread - 0.5) + ')'
			}
			else {return game.team2_score}
			
		}
		else if (game.spread < 0) {
			return game.spread - 0.5
		}
	} // end getTeam2Result(game)		


	getChampion() {
		// To identify champion for display on bracket
		var isChampion = false
		if (this._bracketGames[63] && this._bracketGames[63].team1_score && this._bracketGames[63].team2_score) {
			isChampion = true
			// console.log("Determining winning info...")
			if (this._bracketGames[63].team1_score > this._bracketGames[63].team2_score ) {
				this._champion = this._bracketGames[63].team1
				this._winningTeamOwner = this._bracketOwners[63].team1_owner
			}
			else {
				this._champion = this._bracketGames[63].team2
				this._winningTeamOwner = this._bracketOwners[63].team2_owner
			}
		}
		return isChampion
	} //end getChampion

}
