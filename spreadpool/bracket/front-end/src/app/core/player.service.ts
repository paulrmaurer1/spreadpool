import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { UserService } from './user.service';
import { IUserData } from '../shared/interfaces';

//userUrl is base url for users table end point
const userUrl = '/api/users/';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient, private _userService: UserService) { }

  //method to retrieve entire user list
  getList() {
		return this.http.get<IUserData[]>(userUrl)
	}

  // method to retrieve entire user list except user with id = id parameter
  getListOtherThan(id) {
    return this.http.get<IUserData[]>(userUrl)
      .pipe(
        map(users => users.filter(user => user.id != id))
        )
  }

  //method to retrieve individual user
  getPlayer(id) {
    return this.http.get<IUserData>(userUrl + id + '/')
  }

  deletePlayer(id, token) {
    return this.http.delete<IUserData>(userUrl + id + '/', this.getHttpOptions())
  }

  updatePlayer(player) {
    return this.http.patch<IUserData>(userUrl + player.id + '/', JSON.stringify(player), this.getHttpOptions())
  }

  // helper function to build the HTTP headers
  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this._userService.token,
      })
    };
  }

}
