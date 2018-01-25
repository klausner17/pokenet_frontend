import { User } from '../../../models/User';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { toast } from 'angular2-materialize';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  formLogin: FormGroup;
  user: User;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder) {
      this.user = new User();
  }

  createForm() {
    this.formLogin = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    this.createForm();
  }

  login() {
    this.user = new User();
    this.user.email = this.formLogin.controls.email.value;
    this.user.password = this.formLogin.controls.password.value;
    this.loginService.login(this.user)
      .subscribe(result => {
        this.router.navigate(['/home']);
      }, error => {
        const toastContent =
          `<span>Dados inválidos</span>`;
        toast(toastContent, 3000, 'red');
      });
  }
}

