import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private token: string;

  constructor() { }

  authenticate(token: string) {
    this.token = token;
  }

  isAuthenticate(): boolean {
    if (this.token === undefined)
      return false;
    else return true;
  }

}
