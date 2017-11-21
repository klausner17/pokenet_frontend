import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

  authenticate(token: string) {
    localStorage.setItem('userToken', token)
  }

  isAuthenticate(): boolean {
    let userToken = localStorage.getItem('userToken');
    if (userToken === null)
      return false;
    else return true;
  }

  logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

}
