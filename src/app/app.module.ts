import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app.routing.module';
import { LoginModule } from './login/login.module';

import { AuthGuard } from './guards/auth.guard';
import { TrainnersResolverGuard } from './raid/guards/trainners.resolver.guard';
import { HomeResolverGuard } from './raid/guards/home.resolver.guard';
import { RaidResolverGuard } from './raid/guards/raid.resolver.guard';
import { ProfileComponent } from './profile/profile/profile.component';
import { RaidService } from './raid/raid.service';
import { ProfileService } from './profile/profile.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RaidComponent } from './raid/raid/raid.component';
import { AuthService } from './auth.service';

import { NewRaidComponent } from './raid/new-raid/newraid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RaidComponent,
    ProfileComponent,
    NewRaidComponent
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
    AuthGuard,
    ProfileService,
    RaidService,
    RaidResolverGuard,
    HomeResolverGuard,
    TrainnersResolverGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
