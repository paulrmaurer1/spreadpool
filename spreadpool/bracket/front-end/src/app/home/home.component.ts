import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';
import { ActivatedRoute } from '@angular/router';
import { IUserData } from '../shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private loggedInUser : IUserData;

  constructor(private _userService: UserService, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.loggedInUser = this.route.snapshot.data.loggedInUser;
    this._userService.loggedInUser = this.loggedInUser;
  }

}
