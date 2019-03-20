import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatchupData, GameData } from '../shared/interfaces';
import { MatchupService } from '../core/matchup.service';
import { GameService } from '../core/game.service';

@Component({
  selector: 'app-team-nextup',
  templateUrl: './team-nextup.component.html',
  styleUrls: ['./team-nextup.component.css']
})
export class TeamNextupComponent implements OnInit {

	@Input('bracket') _bracket_id: number;
	@Input('team') _team_id: number;
	_nextup_game: string;
	_nextGame: GameData;

	constructor(
	  	private router: Router,
		private _matchupService: MatchupService,
		private _gameService: GameService) { }

	ngOnInit() {
		// console.log ("team_id is ", this._team_id, " bracket_id is ", this._bracket_id)
		this._nextup_game = "default";
		this._gameService.getGameListByTeam(this._team_id).subscribe(games => {
			this._nextGame = games[0];  // game in latest round is next game up, sorted in descending sequence
			// console.log ("The Next Game is: ", this._nextGame);
			// If player's team is the Team 1 of next game and an opponent is scheduled then construct string
			if (this._team_id == this._nextGame.team1_id && this._nextGame.team2 != null) {
				this._matchupService.getMatchupsDetailsByBracketAndGame(this._bracket_id, this._nextGame.id).subscribe(matchup => {
					var _nextOpponent = matchup[0].team2_owner;
					var _nextTeam = this._nextGame.team2
					this._nextup_game = "Round "+this._nextGame.t_round
					if (this._nextGame.spread != null)
						if (this._nextGame.spread > 0)
							this._nextup_game += " Favored by " + this._nextGame.spread
						else if (this._nextGame.spread < 0)
							this._nextup_game += " Underdog by " + Math.abs(this._nextGame.spread)
						else if (this._nextGame.spread == 0)
							this._nextup_game += " Pick'em"
					this._nextup_game += " vs. "+_nextTeam+" ("+_nextOpponent+")"
				})
			}
			// If player's team is the Team 2 of next game and an opponent is scheduled then construct string
			else if (this._team_id == this._nextGame.team2_id && this._nextGame.team1 != null) {
				this._matchupService.getMatchupsDetailsByBracketAndGame(this._bracket_id, this._nextGame.id).subscribe(matchup => {
					// this._nextMatchup = matchup;
					// // console.log("The next matchup is:", this._nextMatchup)
					// this._nextOpponent = this._nextMatchup[0].team1_owner;
					var _nextOpponent = matchup[0].team1_owner;
					var _nextTeam = this._nextGame.team1
					this._nextup_game = "Round "+this._nextGame.t_round
					if (this._nextGame.spread != null)
						if (this._nextGame.spread < 0)
							this._nextup_game += " Favored by " + Math.abs(this._nextGame.spread)
						else if (this._nextGame.spread > 0)
							this._nextup_game += " Underdog by " + this._nextGame.spread
						else if (this._nextGame.spread == 0)
							this._nextup_game += " Pick'em"
					this._nextup_game += " vs. "+_nextTeam+" ("+_nextOpponent+")"
				})
			}
			else {this._nextup_game="Round "+this._nextGame.t_round+" vs. TBD"}
		}) // end this._gameService subscribe
		
	}

}
