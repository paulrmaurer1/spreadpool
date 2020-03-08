import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatchupData, GameData, IUserData, NewGameWithOwnerData, MatchupLastGameData } from '../shared/interfaces';
import { MatchupService } from '../core/matchup.service';
import { GameService } from '../core/game.service';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-team-nextup',
  templateUrl: './team-nextup.component.html',
  styleUrls: ['./team-nextup.component.css']
})
export class TeamNextupComponent implements OnInit {
	@Input('orig_team') _orig_team_id: number;
	@Input('bracket') _bracket_id: number;
	@Input('team') _team_id: number;
	@Input('region') _region_id: number;
	
	_nextup_game: string;
	_lastGame: MatchupLastGameData;

	constructor(
	  	private router: Router,
		private _matchupService: MatchupService,
		private _userService: UserService) { }

	ngOnInit() {
		// Get last matching game which will either be last game played or next game up
		this._matchupService.getMatchupLastGame(this._bracket_id, this._orig_team_id).subscribe(matchups => {
			this._lastGame = matchups[0];  
			
			//if owner's team is out
			if (this._team_id == null) { 

				// determine which team the user owns and select the other team as having lost
				if (this._lastGame.team1_owner_id == this._userService.id) {
					this._nextup_game = " Lost to: " + this._lastGame.team2 + " (" + this._lastGame.team2_owner + ") with " + this._lastGame.team1;
				}
				if (this._lastGame.team2_owner_id == this._userService.id) {
					this._nextup_game = " Lost to: " + this._lastGame.team1 + " (" + this._lastGame.team1_owner + ") with " + this._lastGame.team2;
				}

				// append proper Round within which last game was lost
				if (this._lastGame.t_round <= 4) {
					this._nextup_game += " in Round " + this._lastGame.t_round;
				}
				else if (this._lastGame.t_round == 5) {
					this._nextup_game += " in the Semi-Finals";
				}
				else { this._nextup_game += " in the Championship"; }

				//if last game played is in Final Four round, update _region_id for proper route navigation purposes
				this._region_id = this._lastGame.region_id;
			} //end if

			//if owner's team is still in it
			else { 

				// append proper Round within which next game is being played
				if (this._lastGame.t_round <= 4) {
					this._nextup_game = "Round " + this._lastGame.t_round;
				}
				else if (this._lastGame.t_round == 5) {
					this._nextup_game = "Semi-Final";
				}
				else { this._nextup_game = "Finals"; }


				// determine proper spread based on whether Team1 or Team 2
				if (this._lastGame.team1_owner_id == this._userService.id && this._lastGame.team2 != null) {
					if (this._lastGame.spread != null)
						if (this._lastGame.spread > 0)
							this._nextup_game += " Favored by " + this._lastGame.spread + " 1/2"
						else if (this._lastGame.spread < 0)
							this._nextup_game += " Underdog by " + Math.abs(this._lastGame.spread) + " 1/2"
						else if (this._lastGame.spread == 0)
							this._nextup_game += " Pick'em"
					this._nextup_game += " vs. "+this._lastGame.team2+" ("+this._lastGame.team2_owner+")";
				} //end if
				else if (this._lastGame.team2_owner_id == this._userService.id && this._lastGame.team1 != null) {
					if (this._lastGame.spread != null)
						if (this._lastGame.spread < 0)
							this._nextup_game += " Favored by " + Math.abs(this._lastGame.spread) + " 1/2"
						else if (this._lastGame.spread > 0)
							this._nextup_game += " Underdog by " + this._lastGame.spread + " 1/2"
						else if (this._lastGame.spread == 0)
							this._nextup_game += " Pick'em"
					this._nextup_game += " vs. "+this._lastGame.team1+" ("+this._lastGame.team1_owner+")";
				}
				// Otherwise if no opponent yet, show vs. TBD
				else {this._nextup_game += " vs. TBD"}

				//if last game played is in Final Four round, update _region_id for proper route navigation purposes
				this._region_id = this._lastGame.region_id; 

			} //end else
		}) // end this._matchupService.getMatchupLastGame subscribe
	} //end ngOnInit
} //end export class