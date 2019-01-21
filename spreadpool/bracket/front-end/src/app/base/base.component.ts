import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';
import { ActivatedRoute } from '@angular/router';
import { IUserData } from '../shared/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})

export class BaseComponent implements OnInit {
	
	constructor(private router: Router, private _userService: UserService, private route: ActivatedRoute) { }
  
	ngOnInit() {
		this._userService.loggedInUser = this.route.snapshot.data.loggedInUser;
	}

	// Invoke logout() method on userService and re-direct user to "/logout/"
	logout() {
		this._userService.logout();
		this.router.navigate(['/logout']);
	}

}
