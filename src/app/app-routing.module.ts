import { NewRaidComponent } from './raid/new-raid/new-raid.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RaidComponent } from './raid/raid/raid.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { ProcessTokenComponent } from './login/process-token/process-token.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { RaidResolver } from './raid/guards/raid-resolver';
import { HomeResolver } from './raid/guards/home-resolver';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService],
      resolve: {raids: HomeResolver} },
  { path: 'raid/:id', component: RaidComponent, canActivate: [AuthGuardService],
      resolve: { raid: RaidResolver} },
  { path: 'newraid', component: NewRaidComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'processToken', component: ProcessTokenComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
