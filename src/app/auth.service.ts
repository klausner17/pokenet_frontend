import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  authenticate(token: string) {
    localStorage.setItem('userToken', token)
  }

  isAuthenticate(): boolean {
    let userToken = localStorage.getItem('userToken');
    if (userToken === null)
      return false;
    else return true;
  }

}
