import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatchupData, MatchupLastGameData } from '../shared/interfaces';

//entryUrl is base url for matchups table end point
const matchupUrl = '/api/matchups/';

@Injectable({
  providedIn: 'root'
})
export class MatchupService {

	constructor(private http: HttpClient) { }

	//method to retrieve matchup details for a specific matchup or a list related tied to a game
	getMatchupDetailsListByGame(id) {
		return this.http.get<MatchupData[]>(matchupUrl + '?gameid=' + id)
		}

  //method to retrieve matchup list for a specific bracket & game
	getMatchupsDetailsByBracketAndGame(b_id, g_id) {
		return this.http.get<MatchupData>(matchupUrl + '?tbracketid=' + b_id + '&gameid=' + g_id)
	}

}
