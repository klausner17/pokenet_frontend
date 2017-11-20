import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _loginService: LoginService,
    private router: Router, authService: AuthService) {
      if(authService.isAuthenticate())
        router.navigate(['/home'])
    }

  ngOnInit() {
  }



  login() {
    this._loginService.login();
  }

}
