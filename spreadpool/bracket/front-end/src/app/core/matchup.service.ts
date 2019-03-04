import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatchupData } from '../shared/interfaces';

//entryUrl is base url for matchups table end point
const matchupUrl = '/api/matchups/';

@Injectable({
  providedIn: 'root'
})
export class MatchupService {

	constructor(private http: HttpClient) { }

	//method to retrieve entry details list for a player
	getMatchupDetailsListByGame(id) {
		return this.http.get<MatchupData[]>(matchupUrl + '?gameid=' + id)
		}

	getMatchupsDetailsByBracketAndGame(b_id, g_id) {
		return this.http.get<MatchupData>(matchupUrl + '?tbracketid=' + b_id + '&gameid=' + g_id)
	}

}
