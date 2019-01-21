import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './core/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  token_id : object;
  
  constructor(private router: Router, private _userService: UserService) {
  };

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
      // Login via _userService with preset values ***for testing purposes in Angular only
    else {
      this._userService.id = 11;
      this._userService.login({'email': 'jlester@cubs.com', 'password': 'cubbies1'});
    }

  }

  // Invoke logout() method on userService and re-direct user to "/logout/"
  logout() {
    this._userService.logout();
    this.router.navigate(['/logout']);
  }
}
