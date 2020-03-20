import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EntryData, EntryBracketData, EntryNameData, EntryStandingsData, EntryMyTeamsData } from '../shared/interfaces';
import { UserService } from './user.service';

//entryUrl is base url for entries table end point
const entryUrl = '/api/entries/';
const entry_bracketsUrl = '/api/entry_brackets/';
const entry_namesUrl = '/api/entry_names/';
const entry_standingsURL = '/api/entry_standings/';
const entry_myteams = 'api/entry_myteams/';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

	constructor(private http: HttpClient, private _userService: UserService) { }

	//method to retrieve entry details list for a player
	getEntryDetailsListByPlayer(id) {
		return this.http.get<EntryData[]>(entryUrl + '?playerid=' + id)
		}

	//method to retrieve entry bracket list for a player
	getEntryBracketListByPlayer(id) {
		return this.http.get<EntryBracketData[]>(entry_bracketsUrl + '?playerid=' + id)
		}
	
	//method to retrieve all entries matching ?tbracketid= value
	getEntryListByBracket(tbracket_id) {
		return this.http.get<EntryNameData[]>(entry_namesUrl + '?tbracketid=' + tbracket_id)
		}

	//method to retrieve all entries whose tbracketid = null
	getEntryListbyNullBracket() {
		return this.http.get<EntryNameData[]>(entry_namesUrl + '?no_bracket')
		}

	//method to retrieve Entry by tbracket_id & team_id (originally used for Bracket display of owners)
	getEntryNameByTeamAndBracket(b_id, t_id) {
		return this.http.get<EntryNameData>(entry_namesUrl + '?tbracketid=' + b_id + '&teamid=' + t_id)
		}

	//method for updating Entry once assigned to a Bracket
	updateEntry(entry) {
		return this.http.patch<EntryNameData>(entry_namesUrl + entry.id + '/', JSON.stringify(entry), this.getHttpOptions())
	}

	//method for creating all Entry data based on User info
	resetAllEntries() {
	    return this.http.get<EntryData[]>(entryUrl + 'reset_all/', this.getHttpOptions())
	}

	//method to retrieve all entries matching ?tbracketid= value
	getEntryStandings(tbracket_id) {
		return this.http.get<EntryStandingsData[]>(entry_standingsURL + '?tbracketid=' + tbracket_id)
		}

	//method to generate emails to all Owners of entries within a particular bracket
	emailOrigTeamsToOwners(tbracket_id) {
	    return this.http.get<EntryData[]>(entryUrl + 'email_orig_teams_to_owners/' + '?tbracketid=' + tbracket_id)
	}

	//method to retrieve entry details list for a player
	getEntryDetailsListMyTeamsByPlayer(id) {
		return this.http.get<EntryMyTeamsData[]>(entry_myteams + '?playerid=' + id)
		}

	// helper function to build the HTTP headers
	getHttpOptions() {
		return {
		  headers: new HttpHeaders({
		    'Content-Type': 'application/json',
		    'Authorization': 'JWT ' + this._userService.token,
		  })
		};
	}
	
}
