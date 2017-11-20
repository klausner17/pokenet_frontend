import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { ProcessTokenComponent } from './process-token/process-token.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    LoginComponent,
    ProcessTokenComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
