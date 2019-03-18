import { Component, OnInit, Input } from '@angular/core';
import { TBracketData, GameData, GameWithOwnerData } from '../shared/interfaces';

@Component({
  selector: 'app-bracketff-detail',
  templateUrl: './bracketff-detail.component.html',
  styleUrls: ['./bracketff-detail.component.css']
})
export class BracketffDetailComponent implements OnInit {

	_bracket: TBracketData; //bracket object that gets passed from parent
	_bracketOwners: GameWithOwnerData[]; //array to capture game owners
	_r5_game_numbers: number[]; //array to capture game numbers on bracket
	_r6_game_numbers: number[]; //array to capture game numbers on bracket
	_champion: string; //string to capture champion of bracket
	_winningTeamOwner: object; //string to capture winning team owner

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
			// console.log ("Detail component bracketOwners: ", this._bracketOwners);
		}
	}

	@Input('bracketGames') _bracketGames: GameData[]; //subset of games associated with each Region

	constructor() {
		//Creates Final Four game id arrays for each Round
		this._r5_game_numbers = [61, 62];
		this._r6_game_numbers = [63];
	}

	ngOnInit() {
		// console.log ("Detail component bracketGames: ", this._bracketGames);
		this._champion = ''
		this._winningTeamOwner = {}
	}

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
	} // end getTeam2Result(game)			

	getChampion() {
		var isChampion = false
		if (this._bracketGames[63].team1_score && this._bracketGames[63].team2_score) {
			isChampion = true
			// console.log("Determining winning info...")
			if (this._bracketGames[63].team1_score > this._bracketGames[63].team2_score ) {
				// this._champion = this._bracketGames[63].team1 + "(" + this._bracketOwners[63].team1_owner[0].team1_owner + ")"
				this._champion = this._bracketGames[63].team1
				this._winningTeamOwner = this._bracketOwners[63].team1_owner[0]
				// console.log("Champion is: ", this._champion, "Winning object is:", this._winningTeamOwner)
			}
			else {
				// this._champion = this._bracketGames[63].team2 + "(" + this._bracketOwners[63].team2_owner[0].team2_owner + ")"
				this._champion = this._bracketGames[63].team2
				this._winningTeamOwner = this._bracketOwners[63].team2_owner[0]
				// console.log("Champion is: ", this._champion, "Winning object is:", this._winningTeamOwner)
			}
		}
		return isChampion
	}

}
