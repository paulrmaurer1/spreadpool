import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { IUserData } from '../shared/interfaces';
import { UserService } from '../core/user.service';
import { PlayerService } from '../core/player.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
	profileForm : FormGroup; //form to capture updates to profile
	first_name : AbstractControl;
	last_name : AbstractControl;
	email : AbstractControl;
	num_entries : AbstractControl;
	mult_entry_type : AbstractControl;
	player : Observable<IUserData>;


  constructor(
  		private formBuilder: FormBuilder, 
  		private _userService: UserService, 
  		private _playerService: PlayerService) {
	  		this.profileForm = formBuilder.group({
	  			'first_name' : ['', Validators.required],
	  			'last_name' : ['', Validators.required],
	  			'email' : ['', Validators.required],
	  			'num_entries' : ['', Validators.required],
	  			'mult_entry_type' : ['', Validators.required],
	  		}) }

  ngOnInit() {

  }

}
