import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment.prod';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  private _urlBackend: string = environment.backend;

  constructor(private _http: Http) { }

  login() {
    window.location.href = this._urlBackend + '/auth/google';
  }

}
