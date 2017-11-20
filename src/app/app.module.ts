import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterializeModule } from 'angular2-materialize';
import { LoginModule } from './login/login.module';
import { HomeComponent } from './home/home.component';
import { RaidComponent } from './raid/raid.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RaidComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
