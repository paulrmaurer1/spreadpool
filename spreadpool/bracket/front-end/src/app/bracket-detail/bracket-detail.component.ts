import { Component, OnInit, Input } from '@angular/core';
import { TBracketData, GameData, GameWithOwnerData } from '../shared/interfaces';


@Component({
  selector: 'app-bracket-detail',
  templateUrl: './bracket-detail.component.html',
  styleUrls: ['./bracket-detail.component.css']
})
export class BracketDetailComponent implements OnInit {

	_bracket: TBracketData; //bracket object that gets passed from parent
	_bracketOwners: GameWithOwnerData[]; //array to capture game owners
	_r1_game_numbers: number[]; //array to capture game numbers on bracket
	_r2_game_numbers: number[]; //array to capture game numbers on bracket
	_r3_game_numbers: number[]; //array to capture game numbers on bracket
	_r4_game_numbers: number[]; //array to capture game numbers on bracket

	
	@Input() get bracket(): TBracketData {
		return this._bracket;
	}

	set bracket(value: TBracketData) {
		if (value) {
			this._bracket = value;
		}
	}

	@Input() get bracketOwners(): GameWithOwnerData[] {
		return this._bracketOwners;
	}

	set bracketOwners(value: GameWithOwnerData[]) {
		if (value) {
			this._bracketOwners = value;
			console.log ("Detail component bracketOwners: ", this._bracketOwners);
		}
	}

	@Input('region') _region: string;
	@Input('bracketGames') _bracketGames: GameData[]; //subset of games associated with each Region

	constructor() {
		//Creates South Region game id arrays for each Round
		this._r1_game_numbers = Array.from({length: 8}, (v, k) => k+1);
		this._r2_game_numbers = Array.from({length: 4}, (v, k) => k+33);
		this._r3_game_numbers = Array.from({length: 2}, (v, k) => k+49);
		this._r4_game_numbers = Array.from({length: 1}, (v, k) => k+57);
		
	}

	ngOnInit() {
		console.log ("Detail component bracketGames: ", this._bracketGames);

	}

	getRgRdIncr(x) { //x = round #
		//To identify proper increment to add to South Region game id arrays
		//to generate other regions' game ids
		switch(this._region) {
			case 'South': { return 0; break; }
			case 'West': {
				switch(x) {
					case 1: {return 8; break; }
					case 2: {return 4; break; }
					case 3: {return 2; break; }
					case 4: {return 1; break; }
				}}
			case 'East': {
				switch(x) {
					case 1: {return 16; break; }
					case 2: {return 8; break; }
					case 3: {return 4; break; }
					case 4: {return 2; break; }
				}}
			case 'Midwest': {
				switch(x) {
					case 1: {return 24; break; }
					case 2: {return 12; break; }
					case 3: {return 6; break; }
					case 4: {return 3; break; }
				}}
		} // end outer switch
	} //end getRdMult(x)

	getTeam1Result(game: GameData) {
		// Determine whether to show score (post-game) or spread (pre-game)
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
		// Determine whether to show score (post-game) or spread (pre-game)
		if (game.team2_score > 0) {
			if (game.spread < 0) {
				return game.team2_score + '('+ (game.spread - 0.5) + ')'
			}
			else {return game.team2_score}
			
		}
		else if (game.spread < 0) {
			return game.spread - 0.5
		}
	} // end getTeam1Result(game)		
}
