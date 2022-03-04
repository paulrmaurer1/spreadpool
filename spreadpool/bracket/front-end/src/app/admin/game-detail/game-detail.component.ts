import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GameService } from '../../core/game.service';
import { GameData } from '../../shared/interfaces';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { convertTime12to24, convertTime24to12 } from '../../shared/functions';

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
  game_date: AbstractControl;
  game_time: AbstractControl;
  send_email: AbstractControl;
	_game: GameData;
	showMsg: boolean;
	msg: string = '';

  _todayDate: Date = new Date();
	
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
      'game_date' : [this._todayDate.toISOString().substring(0,10)],
      'game_time' : ['12:00 PM'],
      'send_email' : [true],
		});
		this.spread = this.gameUpdateForm.controls['spread'];
		this.team1_score = this.gameUpdateForm.controls['team1_score'];
		this.team2_score = this.gameUpdateForm.controls['team2_score'];
    this.game_date = this.gameUpdateForm.controls['game_date'];
    this.game_time = this.gameUpdateForm.controls['game_time'];
    this.send_email = this.gameUpdateForm.controls['send_email'];
		}

	ngOnInit() {
		
	}

	ngOnChanges() {
		// console.log("game-detail component received _game update..", this._game);
		this.gameUpdateForm.patchValue(this._game);
    if (this._game.tipoff_date_time !== null) {
      // set form values from back-end tipoff_date_time if not null
      this.gameUpdateForm.controls['game_date'].patchValue(this._game.tipoff_date_time.substring(0,10))
      this.gameUpdateForm.controls['game_time'].patchValue(convertTime24to12(this._game.tipoff_date_time.substring(11,16)))
    } else {  //otherwise set to today's date and 12:00PM
      this.gameUpdateForm.controls['game_date'].patchValue(this._todayDate.toISOString().substring(0,10));
      this.gameUpdateForm.controls['game_time'].patchValue('12:00 PM');
    }
    this.gameUpdateForm.controls['send_email'].patchValue(true);
		this.showMsg = false;
	}

	updateGame() {
		this._game.team1_score = this.team1_score.value;
		this._game.spread = this.spread.value;
		this._game.team2_score = this.team2_score.value;
    if (this.game_date.value && this.game_time.value) {
      this._game.tipoff_date_time = this.game_date.value + " " + convertTime12to24(this.game_time.value);
    } else {this._game.tipoff_date_time = null}

    // Depending on whether send_email checkbox is checked, send different request to backend
    if (this.send_email.value) {
      this._gameService.updateGame_sendEmail(this._game).subscribe((data) => {
        this.msg = "Game #: " + this._game.id + " has been updated & email sent!";
      });
    } else {
      this._gameService.updateGame(this._game).subscribe((data) => {
        this.msg = "Game #: " + this._game.id + " has been updated!";
      });
    }
    console.log("Game updated with:", this._game);
    this.showMsg = true;
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
