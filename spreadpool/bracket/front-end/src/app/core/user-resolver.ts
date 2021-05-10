//user-resolver.ts

// This class allows for the processing of the UserService method before the
// Home Component is rendered so that all information needed by the view is
// retrieved prior to display

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { IUserData } from '../shared/interfaces';

@Injectable()

export class UserResolver implements Resolve<Observable<any>> {

	constructor (private _userService: UserService) { }

	resolve() : Observable<any> {
		//console.log("Resolver returning...");
		return this._userService.getLoggedInUser()
	}
}
