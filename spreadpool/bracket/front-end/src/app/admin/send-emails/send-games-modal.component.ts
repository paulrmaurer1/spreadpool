import { Component, OnInit, TemplateRef } from '@angular/core';
import { GameService } from '../../core/game.service';

import { TBracketData, EntryData } from '../../shared/interfaces';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'modal-content',
  templateUrl: './send-games-modal.component.html'
})
 
export class SendGamesModalComponent implements OnInit {
	tbracket_id: number;
	tbracket_name: string;
	tround_values: number[];
	gamesList: string[];
  game_entry: string;
 
	constructor(
		public sendGamesModalRef: BsModalRef,
		private _gameService: GameService,
	) {}

	ngOnInit() {
		this.tround_values = [1, 2, 3, 4, 5, 6]; // Tournament rounds possible from which to select games
		this.refreshGameListing(this.tround_values[0]); // Generate games listing based on Round 1 as default
	}

	sendGamesEmail(bracket_id: number, round_id: number) {
		// console.log("Tbracket with id: ", bracket_id, "for tround", round_id, "will invoke emailGamesToOwners API");
		
		this._gameService.emailGamesToOwners(bracket_id, round_id).subscribe((data) => {
			console.log("Tbracket with id: ", data['tbracketid'] ," for Round", round_id, "owners have had today's games sent!");
		});
	}

	onOptionsSelected(value:number){
	     // console.log("the selected value is " + value);
	     this.refreshGameListing(value);

     }

  refreshGameListing(value: number){
    this._gameService.getGamesSpreadNoScore(value).subscribe(data => {
      this.gamesList = data.map(target => {
        // Build an array of games to display in modal
        if (target.spread > 0) {
          // return ' ' + target.team1 + ' [-' + target.spread + '.5] vs.' +target.team2;
          this.game_entry = ' ' + target.team1 + ' [-' + target.spread + '.5] vs.' +target.team2;
        }
        else if (target.spread == 0) {
          // return ' ' + target.team1 + ' [PICK EM] vs. ' + target.team2;
          this.game_entry = ' ' + target.team1 + ' [PICK EM] vs. ' + target.team2;
        }
        else {
          // return ' ' + target.team1 + ' vs. ' + target.team2 + ' [-' + -target.spread + '.5]';
          this.game_entry = ' ' + target.team1 + ' vs. ' + target.team2 + ' [-' + -target.spread + '.5]';
        }
        if (target.tipoff_date) {
          this.game_entry += ' at ' + target.tipoff_time + ' on ' + target.tipoff_date;
        }
        return this.game_entry;
      })
    })
  }
}