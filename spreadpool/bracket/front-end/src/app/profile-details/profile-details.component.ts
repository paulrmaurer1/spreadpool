import { Component, OnInit, Input } from '@angular/core';
import { IUserData } from '../shared/interfaces';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
	private _player: IUserData;
	@Input() get player(): IUserData {
		return this._player;
	}

	set player(value: IUserData) {
		if (value) {
			this._player = value;
		}
	}

  constructor() { }

  ngOnInit() {
  }

}
