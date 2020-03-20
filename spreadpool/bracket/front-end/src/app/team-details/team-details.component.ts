import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IUserData, EntryData, GameData, RegionData, EntryMyTeamsData } from '../shared/interfaces';
import { EntryService } from '../core/entry.service';
import { GameService } from '../core/game.service';
import { RegionService } from '../core/region.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

	_player: IUserData;
	_entryList: EntryMyTeamsData[];
	_regionList: RegionData[];
	loading: boolean;

	@Input() get player(): IUserData {
		return this._player;
	}
	set player(value: IUserData) {
		if (value) {
			this._player = value;
		}
	}

	constructor(private _entryService: EntryService,
		private router: Router,
		private _gameService: GameService,
		private _regionService: RegionService) { }

	ngOnInit() {
		this.loading=true;
		//retrieve entries for user
		
		// this._entryService.getEntryDetailsListByPlayer(this._player.id).subscribe(data => {
		// 	this._entryList = data;

		this._entryService.getEntryDetailsListMyTeamsByPlayer(this._player.id).subscribe(data => {
			this._entryList = data;

			// Retrieve list of regions to display in tabs
			this._regionService.getRegionList().subscribe(data => {
				this._regionList = data;
				this.loading=false;
			});
		});
	}

	// Function to create url that to which user is sent when click on Bracket name
	sendToBracket(bracket) {
		this.router.navigate(['/brackets', bracket])
	} // end sendToBracket()

}
