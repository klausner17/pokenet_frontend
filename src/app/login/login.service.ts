import { AuthService } from './../auth.service';
import { environment } from './../../environments/environment';
import { Profile } from './../models/Profile';
import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

  constructor(private http: Http, private authService: AuthService) { }

  login(user: User) {
    return this.http.post(`${environment.backend}/token`, user)
      .map((response: Response) => response.json())
      .map((result: {}) => {
        this.authService.authenticate(result['token']);
        return result;
      });
  }


  register(user: User): Observable<Profile> {
    return this.http.post(`${environment.backend}/users`, user)
      .map((response: Response) => response.json())
      .map((result: Profile) => {
        return result;
      });
  }

}
