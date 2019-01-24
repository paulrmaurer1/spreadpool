import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../core/user.service';
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
  private loggedInUser : IUserData;
  private currentUser : IUserData;

  constructor(
    private _userService: UserService,
    private route: ActivatedRoute,
    @Inject(AppStore) private store: Store<AppState>
    ) {
      store.subscribe(() => this.readState());
      this.readState(); 
    }
  
  ngOnInit() {
    this.loggedInUser = this.route.snapshot.data.loggedInUser;
    this._userService.loggedInUser = this.loggedInUser;
    this.setCurrentUser(this.loggedInUser);
  }

  readState() {
    const state: AppState = this.store.getState() as AppState;
    this.currentUser = state.currentUser;
  }

  setCurrentUser(user: IUserData) {
    this.store.dispatch(UserActions.setCurrentUser(user))
  }
}
