import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../models/Profile';
import { RequestOptions } from '@angular/http';
import { Trainner } from '../models/Trainner';

@Injectable()
export class ProfileService {

  headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    let userToken = localStorage.getItem('userToken')
    this.headers.append('Authorization', `Bearer ${userToken}`);
  }

  getProfile(): Observable<Profile> {
    let profile: Profile;
    let options: RequestOptions = new RequestOptions({headers: this.headers});
    return this.http.get(`${environment.backend}/user`, options)
      .map((response: Response) => response.json())
      .map((result) => {
        let profile = new Profile();
        profile.name = result.name;
        console.log(result);
        return profile;
      });
  }

  getTrainners(): Observable<Trainner[]> {
    let profile: Trainner[];
    let options: RequestOptions = new RequestOptions({headers: this.headers});
    return this.http.get(`${environment.backend}/trainner`, options)
      .map((response: Response) => response.json())
      .map((result) => {
        let trainners = new Array<Trainner>();
        trainners = result;
        console.log(result);
        return trainners;
      });
  }

}
