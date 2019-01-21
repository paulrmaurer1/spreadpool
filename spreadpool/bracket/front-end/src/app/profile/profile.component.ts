import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';
import { PlayerService } from '../core/player.service';
import { Router } from '@angular/router';
import { IUserData } from '../shared/interfaces';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	private user: IUserData; // for passing player info to sub-components (profile-details & profile-edit)
	
	constructor(private _playerService: PlayerService, private _userService: UserService, private router: Router) { }

	ngOnInit() {
		this.user = this._userService.loggedInUser;
	}

	delete() {
		this._playerService.deletePlayer(this._userService.id, this._userService.token).subscribe((data) => {
			console.log("delete successful");
		});
		this.router.navigate(['/logout']);
	}

}
