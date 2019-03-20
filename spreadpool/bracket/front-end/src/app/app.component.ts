import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './core/user.service';
import { IUserData } from './shared/interfaces';

import { Store } from 'redux';
import { AppStore } from './app.store';
import { AppState } from './app.state';
import * as UserActions from './core/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  token_id : object;
  currentUser : IUserData;
  // isCollapsed = true;
  
  constructor(
    private router: Router, 
    private _userService: UserService, 
    ) { };

  ngOnInit() {
    // Check to see if app is being intiatiated from Django shell or directly from terminal
    // By looking at localStorage for 'tokenid' that Django passes
    if (window.localStorage.getItem('tokenid')) {
    	// Get token passed from Django view to localStorage and pass to UserService
      // refresh UserService token for subsequent use, removeItem from localStorage
      this.token_id = JSON.parse(window.localStorage.getItem('tokenid'));
      this._userService.id = this.token_id['id'];
      this._userService.token = this.token_id['token'];
      this._userService.refreshToken();
      window.localStorage.clear();
    }
      // *** For testing purposes when launch Angular via 'ng serve --proxy-config proxyconfig.json' from project folder
      // Login via _userService to establish token with preset values 
    else {
      // this._userService.id = 2;
      // this._userService.login({'email': 'vcaratini@cubs.com', 'password': 'Maddon55'});
      // this._userService.id = 8;
      // this._userService.login({'email': 'bzobrist@cubs.com', 'password': 'Maddon55'});
      this._userService.id = 1;
      this._userService.login({'email': 'paulrmaurer@yahoo.com', 'password': 'Quakers1!'});
    }
  }
}
