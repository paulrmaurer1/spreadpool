import { Component, OnInit } from '@angular/core';
import { GameService } from '../../core/game.service';
import { GameData } from '../../shared/interfaces';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-games',
  templateUrl: './update-games.component.html',
  styleUrls: ['./update-games.component.css']
})
export class UpdateGamesComponent implements OnInit {

	// Retrieve Game form variables
	gameRetrieveForm: FormGroup;
	game_id : AbstractControl;
	_currentGame : GameData;
	

	constructor(
		private _gameService: GameService,
		private fb: FormBuilder,
		) {
		// Retrieve Game form setup
		this.gameRetrieveForm = fb.group({
			'game_id' : ['', Validators.required],
		});
		this.game_id = this.gameRetrieveForm.controls['game_id']; // allows for other properties, e.g. error values

		}

	ngOnInit() {
	}

	retrieveGame() {
		this._gameService.getGameDetails(this.game_id.value).subscribe((data) => {
			// console.log("Game retrieved is:", data);
			this._currentGame = data;
			this.gameRetrieveForm.reset(); // clear out fields after form submit
		});
		
	} //end retrieveGame()

	resetAllGames() {
		this._gameService.resetAllGames().subscribe((data) => {
			console.log("All Games Reset!");
		});
	}

	replayAllGames() {
		this._gameService.replayAllGames().subscribe((data) => {
			console.log("All Games Replayed!");
		});
	}

}
