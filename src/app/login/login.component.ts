import { User } from './../models/User';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private loginService: LoginService,
    private router: Router, authService: AuthService) {
      this.user = new User();
      if(authService.isAuthenticate())
        router.navigate(['/home'])
    }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.user)
      .subscribe(result => {
        this.router.navigate(['/home']);
      })
  }

}
