import { KeyResolverGuard } from './guards/key.resolver.guard';
import { ProfileResolverGuard } from './guards/profile.resolver.guard';
import { PokemonGymResolverGuard } from './guards/pokemonGym.resolver.guard';
import { GymResolverGuard } from './guards/gym.resolver.guard';
import { TrainnersResolverGuard } from './guards/trainners.resolver.guard';
import { HomeResolverGuard } from './guards/home.resolver.guard';
import { RaidResolverGuard } from './raid/raid.resolver.guard';
import { RaidService } from './raid/raid.service';
import { ProfileService } from './profile/profile.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginService } from './login/login.service';
import { BlockUIModule } from 'ng-block-ui';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './auth.service';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
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
        KeyResolverGuard,
        RouterModule
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
