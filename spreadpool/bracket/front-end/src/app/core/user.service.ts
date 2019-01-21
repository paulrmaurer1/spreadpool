import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { PlayerService } from './player.service';
import { IUserData } from '../shared/interfaces';

//userUrl is base url for users table end point
const userUrl = '/api/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	// http options used for making API calls
	private httpOptions: any;

	// the actual JWT token
	public token: string;

	// the token expiration date
	public token_expires: Date;

	// the authenticated/logged in user variables
  public id: number;
	public username: string;
	public email: string;
  public loggedInUser: IUserData;

	// error messages received from the login attempt
	public errors: any = [];

  // use to communicate to components whethe API calls are being made
  public loading: boolean;

  constructor(private http: HttpClient) {
  	this.httpOptions = {
  		headers: new HttpHeaders({'Content-Type': 'application/json'})
  	} }

  // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
  public login(user) {
    // this.http.post(baseUrl+'/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(
    this.http.post('/api/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(
      data => {
        this.updateData(data['token']);
        // console.log("login method called");
      },
      err => {
        this.errors = err['error'];
      }
    );
  }

  // Refreshes the JWT token, to extend the time the user is logged in
  public refreshToken() {
    this.loading = true;
    this.http.post('/api/api-token-refresh/', JSON.stringify({token: this.token}), this.httpOptions).subscribe(
      data => {
        this.updateData(data['token']);
        // this.getLoggedInUser().subscribe(data => {
        //   this.loggedInUser = data});
        this.loading = false;
      },
      err => {
        this.errors = err['error'];
      }
    );
    // console.log("refreshToken method called");
  }

  public logout() {
    this.token = null;
    this.token_expires = null;
    this.username = null;
  }
 
  private updateData(token) {
    this.token = token;
    this.errors = [];
 
    // decode the token to read the username and expiration timestamp
    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.username = token_decoded.username;
    this.email = token_decoded.email;
    this.id = token_decoded.user_id;
    console.log("This is the returned data object:", token_decoded);
  }

  public getLoggedInUser() {
    // this function returns an http obervable for user-resolver.ts
    return this.http.get<IUserData>(userUrl + this.id + '/');
  }
}