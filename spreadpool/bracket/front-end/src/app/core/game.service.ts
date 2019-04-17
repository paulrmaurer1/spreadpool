import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GameData, GameWithOwnerData, NewGameWithOwnerData } from '../shared/interfaces';
import { UserService } from './user.service';

//gameUrl is base url for users table end point
const gameUrl = '/api/games/';
const game_ownerURL = '/api/games_owners/'
const game_matchupURL = '/api/games_matchups/'
const new_game_matchupURL = '/api/games_new_matchups/'

@Injectable({
  providedIn: 'root'
})
export class GameService {

	constructor(private http: HttpClient, private _userService: UserService) { }

	//method to retrieve game details for a particular game
	getGameDetails(id) {
		return this.http.get<GameData>(gameUrl + id + '/')
	}
	
	//method to retrieve list of games
	getGameList() {
		return this.http.get<GameData[]>(gameUrl)
	}

	//method to retrieve all games in which a particular team is playing
	getGameListByTeam(team_id) {
		return this.http.get<GameData[]>(gameUrl + '?teamid=' + team_id)
	}

	//method to retrieve all games from a particular region
	getGameListByRegion(region_id) {
		return this.http.get<GameData[]>(gameUrl + '?regionid=' + region_id)
	}

	getGameWithOwnerList(tbracket_id) {
		return this.http.get<GameWithOwnerData[]>(game_ownerURL + '?tbracketid=' + tbracket_id)
	}

	getGameWithMatchupDataList(tbracket_id) {
		return this.http.get<GameWithOwnerData[]>(game_matchupURL + '?tbracketid=' + tbracket_id)
	}

	//method to return all games with owner info for a particular bracket
	getNewGameWithMatchupDataList(tbracket_id) {
		return this.http.get<NewGameWithOwnerData[]>(new_game_matchupURL + '?tbracketid=' + tbracket_id)
	}

	//method to return all games that an owner or their Active Team has participated, for purposes of the team-nextup component
	getNewGameWithMatchupDataListByRegion(tbracket_id, region_id, owner_id, team_id) {
		if (team_id == null) {
			return this.http.get<NewGameWithOwnerData[]>(new_game_matchupURL+'?tbracketid='+tbracket_id+'&regionid='+region_id+'&ownerid='+owner_id)
		}
		else {
			return this.http.get<NewGameWithOwnerData[]>(new_game_matchupURL+'?tbracketid='+tbracket_id+'&regionid='+region_id+'&teamid='+team_id)
		}
	}

	updateGame(game) {
		return this.http.patch<GameData>(gameUrl + game.id + '/', JSON.stringify(game), this.getHttpOptions())
	}

	resetGame(id) {
		return this.http.get<GameData>(gameUrl + id + '/reset/', this.getHttpOptions())
	}

	resetAllGames() {
		return this.http.get<GameData[]>(gameUrl + 'reset_all/', this.getHttpOptions())
	}

	replayAllGames() {
		return this.http.get<GameData[]>(gameUrl + 'replay_all/', this.getHttpOptions())
	}

	// helper function to build the HTTP headers
	getHttpOptions() {
	return {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': 'JWT ' + this._userService.token,
		})
	};
	} // end getHttpOptions()

}
