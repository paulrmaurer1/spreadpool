import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegionData } from '../shared/interfaces';

const regionUrl = '/api/regions/';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

	constructor(private http: HttpClient) { }

	//method to retrieve game details for a particular game
	getRegionDetails(id) {
		return this.http.get<RegionData>(regionUrl + id + '/')
	}
	
	//method to retrieve list of games
	getRegionList() {
		return this.http.get<RegionData[]>(regionUrl)
	}

}
