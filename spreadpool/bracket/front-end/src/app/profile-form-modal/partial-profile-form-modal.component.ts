// partial-profile-form-modal.component.ts

import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UntypedFormBuilder, UntypedFormGroup, AbstractControl, Validators } from '@angular/forms';
import { IUserData } from '../shared/interfaces';
import { PlayerService } from '../core/player.service';

@Component({
  selector: 'app-partial-profile-form-modal',
  templateUrl: './partial-profile-form-modal.component.html',
  styleUrls: ['./partial-profile-form-modal.component.css']
})
export class PartialProfileFormModalComponent implements OnInit {
	title: string;
	closeBtnName: string;
	profile_user: IUserData;
	profileForm: UntypedFormGroup;
  gm_updates : AbstractControl;

  constructor(
  	public bsModalRef: BsModalRef,
  	fb: UntypedFormBuilder, 
  	private _playerService: PlayerService
  	) {
  	this.title = "Update profile for "
  	this.closeBtnName = "Update";

  	this.profileForm = fb.group({
      'gm_updates' : [],
		});

    this.gm_updates = this.profileForm.controls['gm_updates'];
    }

  ngOnInit() {
  	this.profileForm.patchValue(this.profile_user);
  }

  submitForm(value: string) {
    this.profile_user.gm_updates = this.gm_updates.value;
    // console.log("gm_updates = ", this.profile_user.gm_updates);

  	this._playerService.updatePlayer(this.profile_user).subscribe((data) => {
		// console.log("Player updated:", this.profile_user);
	});

  }
}
