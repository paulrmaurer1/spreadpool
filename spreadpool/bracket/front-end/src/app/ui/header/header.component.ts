import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	isCollapsed = true;

  constructor(
  	private router: Router,
  	private _userService: UserService,
  	) { }

  ngOnInit() {
  }
  
  // Invoke logout() method on userService and re-direct user to "/logout/"
  logout() {
    this._userService.logout();
    this.router.navigate(['/logout']);
  }
}
