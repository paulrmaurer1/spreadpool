import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../core/player.service';
import { UserService } from '../core/user.service';
import { IUserData } from '../shared/interfaces';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProfileFormModalComponent } from '../profile-form-modal/profile-form-modal.component';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
	private roster: IUserData[];
	private _loggedInUser: IUserData; // to capture loggedInUser object from parent component
	private hoveredIndex: number; // to user which row a user hovers on
	
	// Retrieve loggedInUser from parent component
	@Input() get loggedInUser(): IUserData {
		return this._loggedInUser;
	}

	set loggedInUser(value: IUserData) {
		if (value) {
			this._loggedInUser = value;
		}
	}

	// Modal object to capture content
	bsModalRef: BsModalRef;
	
 	constructor(private _playerService: PlayerService,
 		private _userService: UserService, 
 		private _modalService: BsModalService,
 		private router: Router) { }

	ngOnInit() {
		// Retrieve roster list without logged in user
		this._playerService.getListOtherThan(this._loggedInUser.id).subscribe(data => {
			this.roster = data;
			//console.log(this.roster)
		})
	}

	openProfileModal() {
    const initialState = {
      id: this.hoveredIndex,
      profile_user: this._loggedInUser
    };
    // Attempts here to figure out how to extract specific user from this.roster based on hoveredIndex
    // console.log("Modal is opened for: ", this.roster.map(users => users.find(user => user.id == this.hoveredIndex)));
    // console.log("Modal is opened for: ", this.roster, this.roster.find(user => user.id == this.hoveredIndex));
    // console.log("Modal is opened for: ", this.roster.forEach(user => {if(user.id == this.hoveredIndex) return user}));
    this.bsModalRef = this._modalService.show(ProfileFormModalComponent, {initialState});

    this._modalService.onHidden.subscribe((reason: string) => {
    	// Upon modal being closed run these actions
        //const _reason = reason ? `, dismissed by ${reason}` : '';
        //console.log ("Profile modal was closed ", _reason);
        // Update logged in User against database after modal closes
        this._userService.getLoggedInUser().subscribe(data => {
        	this._loggedInUser = data;
        })

        // Tried to reload component after modal is closed here but none of the below worked...

        // this.router.navigate(['home']);

   		// this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
			// this.router.navigate(['home']));

		// location.reload();
    })
	}
}