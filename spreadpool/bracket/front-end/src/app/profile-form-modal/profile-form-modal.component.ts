// profile-form-modal.component.ts

import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UntypedFormBuilder, UntypedFormGroup, AbstractControl, Validators } from '@angular/forms';
import { IUserData } from '../shared/interfaces';
import { PlayerService } from '../core/player.service';

@Component({
  selector: 'app-profile-form-modal',
  templateUrl: './profile-form-modal.component.html',
  styleUrls: ['./profile-form-modal.component.css']
})
export class ProfileFormModalComponent implements OnInit {
	title: string;
	closeBtnName: string;
	profile_user: IUserData;
	profileForm: UntypedFormGroup;
	first_name : AbstractControl;
	last_name : AbstractControl;
	email : AbstractControl;
	num_entries : AbstractControl;
	mult_entry_type : AbstractControl;
  gm_updates : AbstractControl;

  constructor(
  	public bsModalRef: BsModalRef,
  	fb: UntypedFormBuilder, 
  	private _playerService: PlayerService
  	) {
  	
  	this.title = "Update profile for "
  	this.closeBtnName = "Update";

  	this.profileForm = fb.group({
			'first_name' : ['', Validators.required],
			'last_name' : ['', Validators.required],
			'email' : ['', Validators.compose([Validators.required, Validators.email])],
			'num_entries' : ['', Validators.compose([Validators.required, Validators.maxLength(4), Validators.minLength(1)])],
			'mult_entry_type' : ['', Validators.required],
      'gm_updates' : [],
		});
    
  	this.first_name = this.profileForm.controls['first_name']; // allows for other properties, e.g. error values
  	this.last_name  = this.profileForm.controls['last_name'];
  	this.email      = this.profileForm.controls['email'];
  	this.num_entries = this.profileForm.controls['num_entries'];
  	this.mult_entry_type = this.profileForm.controls['mult_entry_type'];
    this.gm_updates = this.profileForm.controls['gm_updates'];
    }

  ngOnInit() {
  	this.profileForm.patchValue(this.profile_user);
  }

  submitForm(value: string) {
  	this.profile_user.first_name = this.first_name.value;
  	this.profile_user.last_name = this.last_name.value;
  	this.profile_user.email = this.email.value.toLowerCase();
  	this.profile_user.num_entries = this.num_entries.value;
  	this.profile_user.mult_entry_type = this.mult_entry_type.value;
    this.profile_user.gm_updates = this.gm_updates.value;
    // console.log("gm_updates = ", this.profile_user.gm_updates);

  	this._playerService.updatePlayer(this.profile_user).subscribe((data) => {
		// console.log("Player updated:", this.profile_user);
	});

  }
}
