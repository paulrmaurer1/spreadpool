import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TBracketData } from '../shared/interfaces';
import { UserService } from './user.service';

//tbracketUrl is base url for users table end point
const tbracketUrl = '/api/tbrackets/';

@Injectable({
  providedIn: 'root'
})
export class TBracketService {

	constructor(private http: HttpClient, private _userService: UserService) { }

	//method to retrieve entire bracket list
	getList() {
		return this.http.get<TBracketData[]>(tbracketUrl)
	}

	//method to retrieve individual bracket
  	getTbracket(id) {
    	return this.http.get<TBracketData>(tbracketUrl + id + '/')
  	}

  	createTbracket(tbracket, token) {
    return this.http.post<TBracketData>(tbracketUrl, JSON.stringify(tbracket), this.getHttpOptions())
	}

	deleteTbracket(id, token) {
		return this.http.delete<TBracketData>(tbracketUrl + id + '/', this.getHttpOptions())
	}

	reassignTbracket(id, token) {
		return this.http.get<TBracketData>(tbracketUrl + id + '/reassign/', this.getHttpOptions())
	}

	resetTbracket(id) {
		return this.http.get<TBracketData>(tbracketUrl + id + '/reset/', this.getHttpOptions())
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