import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GameService } from '../../core/game.service';
import { GameData } from '../../shared/interfaces';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

	// Update Game form variables
	gameUpdateForm: FormGroup;
	spread : AbstractControl;
	team1_score : AbstractControl;
	team2_score : AbstractControl;
	_game: GameData;
	showMsg: boolean;
	msg: string = '';
	
	@Input() get game(): GameData {
		return this._game;
	}

	set game(value: GameData) {
		if (value) {
			this._game = value;
		}
	}

	constructor(
		private _gameService: GameService,
		private fb: FormBuilder,
		private router: Router
		) { 
		// Update Game form setup
		this.gameUpdateForm = fb.group({
			'spread' : ['', Validators.required],
			'team1_score' : ['', Validators.required],
			'team2_score' : ['', Validators.required],
		});
		this.spread = this.gameUpdateForm.controls['spread'];
		this.team1_score = this.gameUpdateForm.controls['team1_score'];
		this.team2_score = this.gameUpdateForm.controls['team2_score'];
		}

	ngOnInit() {
		
	}

	ngOnChanges() {
		// console.log("game-detail component received _game update..", this._game);
		this.gameUpdateForm.patchValue(this._game);
		this.showMsg = false;
	}

	updateGame() {
		this._game.team1_score = this.team1_score.value;
		this._game.spread = this.spread.value;
		this._game.team2_score = this.team2_score.value;
		
		this._gameService.updateGame(this._game).subscribe((data) => {
			// console.log("Game updated with:", this._game);
			this.msg = "Game #: " + this._game.id + " has been updated!";
			this.showMsg = true;
		});
	} //end updateGame()

	resetGame() {
		// console.log("Game id for reset is", this._game.id);
		this._gameService.resetGame(this._game.id).subscribe((data) => {
			// console.log("Game #", this._game.id, "has been reset!");

			// navigate back to Retrieve Game page *** not working ***
			// this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
			// 	this.router.navigate(['/admin/u-games']));

			// retrieve newly updated game and update form
			this._gameService.getGameDetails(this._game.id).subscribe((data) => {
				this._game = data;
				this.gameUpdateForm.reset();
				this.gameUpdateForm.patchValue(this._game);
				this.msg = "Game #: " + this._game.id + " has been reset!"
				this.showMsg = true
			})
		});
	} //end resetGame()

}
