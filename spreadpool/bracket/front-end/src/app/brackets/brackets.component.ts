import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TBracketService } from '../core/tbracket.service';
import { GameService } from '../core/game.service';
import { TBracketData, GameData, GameWithOwnerData } from '../shared/interfaces';

@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css']
})
export class BracketsComponent implements OnInit {
	tbracketList: TBracketData[];
	private id: number; //capture tbracket id url parameter
	activeBracket: TBracketData;
	// To capture each regions' games for passing to child component
	southGames: object;
	westGames: object;
	eastGames: object;
	midwestGames: object;
	ffourGames: object;
	// To capture each regions' games' team1 & team2 owners for child component
	southOwners: object;
	westOwners: object;
	eastOwners: object;
	midwestOwners: object;
	ffourOwners: object;
	
	
	constructor(private _tbracketService: TBracketService,
		private _gameService: GameService,
		private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit() {
     	
  		// Subscribe to activated route parameter and update activeBracket to pass to child components
  		// Based on active bracket (in params), convert each Region's bracket owners (retrieved via Matchup table)
  		// to indexed arrays for each Region
  		// FYI - the following line would only work the first time the page is visitied:
		// this.id = this.route.snapshot.params['id'];
		this.route.params.subscribe((params) => {
			this.id = params['id'];
			this._tbracketService.getTbracket(this.id).subscribe(data => {
				this.activeBracket = data;
				this._gameService.getGameWithMatchupDataList(this.id).subscribe(data => {
					const southOwners = Object.assign({}, ...data
						.filter(item => item.region == 'South')
						.map(item => ({[item['id']]: item}))
						);
					this.southOwners=southOwners;
					const westOwners = Object.assign({}, ...data
						.filter(item => item.region == 'West')
						.map(item => ({[item['id']]: item}))
						);
					this.westOwners=westOwners;
					const eastOwners = Object.assign({}, ...data
						.filter(item => item.region == 'East')
						.map(item => ({[item['id']]: item}))
						);
					this.eastOwners=eastOwners;
					const midwestOwners = Object.assign({}, ...data
						.filter(item => item.region == 'Midwest')
						.map(item => ({[item['id']]: item}))
						);
					this.midwestOwners=midwestOwners;
					const ffourOwners = Object.assign({}, ...data
						.filter(item => item.region == 'Final Four')
						.map(item => ({[item['id']]: item}))
						);
					this.ffourOwners=ffourOwners;
				})
			});
		})
		
		// Retrieve list of brackets for bracket navbar
		this._tbracketService.getList().subscribe(data => {
			this.tbracketList = data;
		});

		// Retrieve game list & convert each Region's games into indexed arrays
		// for passing to child components for display
		this._gameService.getGameList().subscribe(data => {
			const southGames = Object.assign({}, ...data
				.filter(item => item.region == 'South')
				.map(item => ({[item['id']]: item}))
				);
			this.southGames=southGames;
			const westGames = Object.assign({}, ...data
				.filter(item => item.region == 'West')
				.map(item => ({[item['id']]: item}))
				);
			this.westGames=westGames;
			const eastGames = Object.assign({}, ...data
				.filter(item => item.region == 'East')
				.map(item => ({[item['id']]: item}))
				);
			this.eastGames=eastGames;
			const midwestGames = Object.assign({}, ...data
				.filter(item => item.region == 'Midwest')
				.map(item => ({[item['id']]: item}))
				);
			this.midwestGames=midwestGames;
			const ffourGames = Object.assign({}, ...data
				.filter(item => item.region == 'Final Four')
				.map(item => ({[item['id']]: item}))
				);
			this.ffourGames=ffourGames;
		})
	
	} //end ngOnInit


	// This function was attempted to keep brackets side nav bar option 'active' when clicked
	// isActive(instruction: any[]): boolean {
		// Set the second parameter to true if you want to require an exact match.
		// return this.router.isActive(this.router.createUrlTree(instruction), true);
	// }
	// This was easier to implement
	isActive(navbarId: number): boolean {
		// return true to highlight nav bar item that is = route paramter
		return navbarId == this.id;
	}

} //end class
