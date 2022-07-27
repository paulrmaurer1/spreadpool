import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../core/user.service';
import { PlayerService } from '../core/player.service';
import { ActivatedRoute } from '@angular/router';
import { IUserData } from '../shared/interfaces';

import { Store } from 'redux';
import { AppStore } from '../app.store';
import { AppState } from '../app.state';
import * as UserActions from '../core/user.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedInUser : IUserData;
  private currentUser : IUserData;
  roster: IUserData[];

  constructor(
    private _userService: UserService,
    private _playerService: PlayerService,
    private route: ActivatedRoute,
    
    // Using Redux store to capture logged in user details
    @Inject(AppStore) private store: Store<AppState>
    ) {
      store.subscribe(() => this.readState());
      // this.readState(); //Need this twice here?
    }
  
  ngOnInit() {
    this.loggedInUser = this.route.snapshot.data.loggedInUser;
    this._userService.loggedInUser = this.loggedInUser;
    this.setCurrentUser(this.loggedInUser);
    // console.log("The current _userService user is", this._userService)

    // Retrieve roster for passing to child roster.component
    this._playerService.getListOtherThan(this.loggedInUser.id).subscribe(data => {
      this.roster = data;
    });
  }

  // Redux store methods
  readState() {
    const state: AppState = this.store.getState() as AppState;
    this.currentUser = state.currentUser;
    // console.log("readState called by home.component. The current Redux user is", state.currentUser)
  }

  setCurrentUser(user: IUserData) {
    this.store.dispatch(UserActions.setCurrentUser(user))
  }
}
