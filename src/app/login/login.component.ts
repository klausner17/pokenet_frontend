import { User } from './../models/User';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private loginService: LoginService,
    private router: Router,
    authService: AuthService,
    private activedRouter: ActivatedRoute) {
      this.user = new User();
      if(authService.isAuthenticate())
        router.navigate(['/home'])
    }

  ngOnInit() { }

  login() {
    this.loginService.login(this.user)
      .subscribe(result => {
        this.router.navigate(['/home']);
      }, error => {
        let toastContent =
          `<span>Dados inválidos</span>`;
        toast(toastContent, 3000, 'red');
      })
  }

}
