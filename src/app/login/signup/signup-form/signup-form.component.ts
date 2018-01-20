import { User } from '../../../models/User';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../login/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  formSignup: FormGroup;
  user: User;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.user = new User();
  }

  createForm() {
    this.formSignup = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(3)]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    this.createForm();
  }

  signUp() {
    this.user = new User();
    this.user.name = this.formSignup.controls.name.value;
    this.user.email = this.formSignup.controls.email.value;
    this.user.password = this.formSignup.controls.password.value;
    this.loginService.register(this.user)
      .subscribe( (resultSign) => {
        this.loginService.login(this.user)
          .subscribe(resultLogin => {
            this.router.navigate(['/home']);
          });
      });
  }

}
