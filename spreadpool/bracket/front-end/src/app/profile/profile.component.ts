import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IUserData } from '../shared/interfaces';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	user: IUserData; // for passing player info to sub-components (profile-details & profile-edit)
	
	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.user = this.route.snapshot.data.loggedInUser;
	}

	

}
