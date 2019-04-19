import { Component, OnInit, Inject, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TBracketService } from '../core/tbracket.service';
import { GameService } from '../core/game.service';
import { UserService } from '../core/user.service';
import { RegionService } from '../core/region.service';
import { TBracketData, GameData, GameWithOwnerData, IUserData, RegionData, NewGameWithOwnerData } from '../shared/interfaces';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css']
})
export class BracketsComponent implements OnInit {
	@ViewChild('staticTabs') staticTabs: TabsetComponent;
	private id: number; //capture tbracket id url parameter
	tbracketList: TBracketData[];
	regionList: RegionData[];
	loading: boolean;
	
	// To capture each regions' games for passing to child component
	region1Games: object;
	region2Games: object;
	region3Games: object;
	region4Games: object;
	ffourGames: object;
	// To capture each regions' games' team1 & team2 owners for child component
	region1Owners: object;
	region2Owners: object;
	region3Owners: object;
	region4Owners: object;
	ffourOwners: object;

	constructor(private _tbracketService: TBracketService,
		private _gameService: GameService,
		private route: ActivatedRoute,
		private router: Router,
		private _userService: UserService,
		private _regionService: RegionService
		) { }

	ngOnInit() {
     	
		// Subscribe to activated route parameter and update activeBracket to pass to child components
  		// Based on active bracket (in params), convert each Region's bracket owners (retrieved via Matchup table)
  		// to indexed arrays for each Region
  		// FYI - the following line would only work the first time the page is visited:
		// this.id = this.route.snapshot.params['id'];
		this.loading = true;
		this.route.params.subscribe(params => {
			this.id = params['id'];
			this._gameService.getNewGameWithMatchupDataList(this.id).subscribe(data => {
				const region1Owners = Object.assign({}, ...data
					.filter(item => item.region_id == 1)
					.map(item => ({[item['id']]: item}))
					);
				this.region1Owners=region1Owners;
				const region2Owners = Object.assign({}, ...data
					.filter(item => item.region_id == 2)
					.map(item => ({[item['id']]: item}))
					);
				this.region2Owners=region2Owners;
				const region3Owners = Object.assign({}, ...data
					.filter(item => item.region_id == 3)
					.map(item => ({[item['id']]: item}))
					);
				this.region3Owners=region3Owners;
				const region4Owners = Object.assign({}, ...data
					.filter(item => item.region_id == 4)
					.map(item => ({[item['id']]: item}))
					);
				this.region4Owners=region4Owners;
				const ffourOwners = Object.assign({}, ...data
					.filter(item => item.region_id == 5)
					.map(item => ({[item['id']]: item}))
					);
				this.ffourOwners=ffourOwners;
				
				this.loading = false;

				// Set active tab based on fragment contained in url, if it exists
				this.route.fragment.subscribe(fragment => { 
					if (fragment) {
						var id = parseInt(fragment);
						// console.log("Tab Id to navigate to is: ", this.tabId);
						this.staticTabs.tabs[id].active = true;
					}
				});
			})
		})
		
		// Retrieve game list & convert each Region's games into indexed arrays
		// for passing to child components for display
		// Only call this service 1x since game info doesn't change across brackets
		this._gameService.getGameList().subscribe(data => {
			const region1Games = Object.assign({}, ...data
				.filter(item => item.region_id == 1)
				.map(item => ({[item['id']]: item}))
				);
			this.region1Games=region1Games;
			const region2Games = Object.assign({}, ...data
				.filter(item => item.region_id == 2)
				.map(item => ({[item['id']]: item}))
				);
			this.region2Games=region2Games;
			const region3Games = Object.assign({}, ...data
				.filter(item => item.region_id == 3)
				.map(item => ({[item['id']]: item}))
				);
			this.region3Games=region3Games;
			const region4Games = Object.assign({}, ...data
				.filter(item => item.region_id == 4)
				.map(item => ({[item['id']]: item}))
				);
			this.region4Games=region4Games;
			const ffourGames = Object.assign({}, ...data
				.filter(item => item.region_id == 5)
				.map(item => ({[item['id']]: item}))
				);
			this.ffourGames=ffourGames;
		})

		// Retrieve list of brackets for bracket navbar with brackets that player
		// belongs to sorted first
		this._tbracketService.getListWithPlayer(this._userService.id).subscribe(data => {
			this.tbracketList = data;
		});

		// Retrieve list of regions to display in tabs
		this._regionService.getRegionList().subscribe(data => {
			this.regionList = data;
		});
	
	} //end ngOnInit

	// Function to determine which bracket navbar to make 'active' in template based on route param
	isActive(navbarId: number): boolean {
		// return true to highlight nav bar item that is = route paramter
		return navbarId == this.id;
	}

} //end class
