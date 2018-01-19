import { KeyResolverGuard } from './guards/key.resolver.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app.routing';

import { AuthGuard } from './guards/auth.guard';
import { TrainnersResolverGuard } from './guards/trainners.resolver.guard';
import { HomeResolverGuard } from './guards/home.resolver.guard';
import { RaidResolverGuard } from './raid/raid.resolver.guard';
import { PokemonGymResolverGuard } from './guards/pokemonGym.resolver.guard';
import { GymResolverGuard } from './guards/gym.resolver.guard';
import { ProfileResolverGuard } from './guards/profile.resolver.guard';
import { ProfileComponent } from './profile/profile.component';
import { RaidService } from './raid/raid.service';
import { ProfileService } from './profile/profile.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RaidComponent } from './raid/raid/raid.component';
import { AuthService } from './auth.service';

import { NewRaidComponent } from './raid/new-raid/newraid.component';
import { LoginService } from './login/login.service';
import { HttpModule } from '@angular/http';
import { SignupFormComponent } from './login/signup/signup-form/signup-form.component';
import { LoginFormComponent } from './login/login/login-form/login-form.component';
import { MaterializeDirective } from 'angular2-materialize/dist/materialize-directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RaidComponent,
    ProfileComponent,
    NewRaidComponent,
    LoginComponent,
    SignupFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    AuthService,
    AuthGuard,
    ProfileService,
    RaidService,
    RaidResolverGuard,
    HomeResolverGuard,
    TrainnersResolverGuard,
    GymResolverGuard,
    PokemonGymResolverGuard,
    ProfileResolverGuard,
    LoginService,
    KeyResolverGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
