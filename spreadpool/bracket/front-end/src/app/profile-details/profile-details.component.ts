import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { IUserData } from '../shared/interfaces';
import { UserService } from '../core/user.service';
import { PlayerService } from '../core/player.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProfileFormModalComponent } from '../profile-form-modal/profile-form-modal.component';
import { PartialProfileFormModalComponent } from '../profile-form-modal/partial-profile-form-modal.component';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
	_showEditButton: boolean;
	_player: IUserData;
	@Input() get player(): IUserData {
		return this._player;
	}

	set player(value: IUserData) {
		if (value) {
			this._player = value;
		}
	}
	modalRef: BsModalRef;
	bsModalRef: BsModalRef;

	constructor(private _playerService: PlayerService,
	  public _userService: UserService, 
	  private router: Router,
	  private route: ActivatedRoute,
	  private modalService: BsModalService,
	  private bsModalService: BsModalService,) { }

	ngOnInit() {
		this.route.queryParams.subscribe(params => {
			// if profile page is called for other player, don't show edit button
			params.id === undefined ? this._showEditButton = true : this._showEditButton = false
		});
	}

	openModal(template: TemplateRef<any>) {
	this.modalRef = this.modalService.show(template);
	}

	delete() {
		this._playerService.deletePlayer(this._player.id, this._userService.token).subscribe((data) => {
			console.log("delete successful");
		});
		this.router.navigate(['/logout']);
	}

	openProfileModal() {
	    const initialState = {
	      id: this._player.id,
	      profile_user: this._player
	    };
	    if (this._userService.beforeTourney) {
		    this.bsModalRef = this.bsModalService.show(ProfileFormModalComponent, {initialState});
		  } else {
		  	this.bsModalRef = this.bsModalService.show(PartialProfileFormModalComponent, {initialState});
		  };

	    this.bsModalService.onHidden.subscribe((reason: string) => {
	    	// Upon modal being closed run these actions
        
        // *** This isn't working ***
        // const _reason = reason ? `, dismissed by ${reason}` : '';
        // console.log ("Profile modal was closed ", _reason);
        
        // Update logged in User against database after modal closes
        this._userService.getLoggedInUser().subscribe(data => {
        	this._player = data;
        })
	    })
	
	}

}
