import { User } from './../models/User';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  user: User;

  constructor(private loginService: LoginService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  signUp(){
    console.log(this.user);
    this.loginService.register(this.user)
      .subscribe( result => {
        this.loginService.login(this.user)
          .subscribe(result => {
            this.router.navigate(['/home']);
          });
      });
  }

}
