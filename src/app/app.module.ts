import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterializeModule } from 'angular2-materialize';
import { LoginModule } from './login/login.module';
import { HomeComponent } from './home/home.component';
import { RaidComponent } from './raid/raid.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { ProfileComponent } from './profile/profile/profile.component';
import { ProfileService } from './profile/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RaidComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    LoginModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
