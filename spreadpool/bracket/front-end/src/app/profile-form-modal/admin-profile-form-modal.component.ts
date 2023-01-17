// admin-profile-form-modal.component.ts

import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UntypedFormBuilder, UntypedFormGroup, AbstractControl, Validators } from '@angular/forms';
import { IUserData } from '../shared/interfaces';
import { PlayerService } from '../core/player.service';

@Component({
  selector: 'app-admin-profile-form-modal',
  templateUrl: './admin-profile-form-modal.component.html',
  styleUrls: ['./admin-profile-form-modal.component.css']
})
export class AdminProfileFormModalComponent implements OnInit {
  title: string;
	closeBtnName: string;
	profile_user: IUserData;
	adminProfileForm: UntypedFormGroup;
	first_name : AbstractControl;
	last_name : AbstractControl;
	email : AbstractControl;
	num_entries : AbstractControl;
	mult_entry_type : AbstractControl;
  gm_updates : AbstractControl;
  paid: AbstractControl;

  constructor(
    public bsModalRef: BsModalRef,
  	fb: UntypedFormBuilder, 
  	private _playerService: PlayerService
  	) {
    this.title = "Update profile for "
  	this.closeBtnName = "Update";
  	this.adminProfileForm = fb.group({
			'first_name' : ['', Validators.required],
			'last_name' : ['', Validators.required],
			'email' : ['', Validators.compose([Validators.required, Validators.email])],
			'num_entries' : ['', Validators.compose([Validators.required, Validators.maxLength(4), Validators.minLength(1)])],
			'mult_entry_type' : ['', Validators.required],
      'gm_updates' : [],
      'paid' : [],
    });

    this.first_name = this.adminProfileForm.controls['first_name']; // allows for other properties, e.g. error values
  	this.last_name  = this.adminProfileForm.controls['last_name'];
  	this.email      = this.adminProfileForm.controls['email'];
  	this.num_entries = this.adminProfileForm.controls['num_entries'];
  	this.mult_entry_type = this.adminProfileForm.controls['mult_entry_type'];
    this.gm_updates = this.adminProfileForm.controls['gm_updates'];
    this.paid = this.adminProfileForm.controls['paid'];
  }

  ngOnInit() {
    // console.log ("AdminProfileForm's profile_user", this.profile_user);
    this.adminProfileForm.patchValue(this.profile_user);
  }

  submitForm(value: string) {
  	this.profile_user.first_name = this.first_name.value;
  	this.profile_user.last_name = this.last_name.value;
  	this.profile_user.email = this.email.value.toLowerCase();
  	this.profile_user.num_entries = this.num_entries.value;
  	this.profile_user.mult_entry_type = this.mult_entry_type.value;
    this.profile_user.gm_updates = this.gm_updates.value;
    this.profile_user.paid = this.paid.value;

  	this._playerService.updatePlayer(this.profile_user).subscribe((data) => {
      console.log("Player updated:", data);
	});

  }

}
