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

  constructor(private loginService: LoginService,
    private router: Router,
    private authService: AuthService,
    private activedRouter: ActivatedRoute) {  }

  ngOnInit() {
    if (this.authService.isAuthenticate()) {
      this.router.navigate(['/home']);
    }
  }

}
