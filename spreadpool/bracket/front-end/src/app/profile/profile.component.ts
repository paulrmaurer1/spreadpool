import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IUserData } from '../shared/interfaces';
import { PlayerService } from '../core/player.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	user: IUserData; // for passing player info to sub-components (profile-details & profile-edit)
	_pageTitle: string;
	
	constructor(private route: ActivatedRoute,
		private _playerService: PlayerService) { }

	ngOnInit() {
		// this.user = this.route.snapshot.data.loggedInUser;
		this.route.queryParams.subscribe(params => {
			// if profile page is called for other Player (with query param), set user = Player
			if (params.id === undefined) {
					this.user = this.route.snapshot.data.loggedInUser;
					this._pageTitle = "My";
				} else {
					this._playerService.getPlayer(params.id).subscribe((data) => {
						this.user = data;
						this._pageTitle = this.user.first_name + "'s";
					});
				}
		});
	}

}
