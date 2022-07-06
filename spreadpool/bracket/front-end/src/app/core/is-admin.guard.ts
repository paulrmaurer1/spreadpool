import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IUserData } from '../shared/interfaces';

import { Store } from 'redux';
import { AppStore } from '../app.store';
import { AppState } from '../app.state';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

	private currentUser : IUserData;

	constructor (

		@Inject(AppStore) private store: Store<AppState>
	    
	    )

		{
	      store.subscribe(() => this.readState());
	      this.readState(); 
	    }


	canActivate(
	next: ActivatedRouteSnapshot,
	state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		// Check to see if is_staff is equal to 1, if yes return True
		if (this.currentUser) {
			return (this.currentUser.is_staff == 1);
      console.log("Admin user is being verified!");
		}
		else return false;
	}

	// Redux store methods
	readState() {
		const state: AppState = this.store.getState() as AppState;
		this.currentUser = state.currentUser;
    console.log("readState being invoked here!");
	}
}
