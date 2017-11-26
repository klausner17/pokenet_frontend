import { ProfileResolverGuard } from './guards/profile.resolver.guard';
import { GymResolverGuard } from './guards/gym.resolver.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RaidComponent } from './raid/raid/raid.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ProcessTokenComponent } from './login/process-token/process-token.component';
import { ProfileComponent } from './profile/profile.component';
import { NewRaidComponent } from './raid/new-raid/newraid.component';

import { RaidResolverGuard } from './raid/raid.resolver.guard';
import { HomeResolverGuard } from './guards/home.resolver.guard';
import { TrainnersResolverGuard } from './guards/trainners.resolver.guard';
import { PokemonGymResolverGuard } from './guards/pokemonGym.resolver.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
      resolve: {raids: HomeResolverGuard} },
  { path: 'raid/:id', component: RaidComponent, canActivate: [AuthGuard],
      resolve: { raid: RaidResolverGuard, myTrainners: TrainnersResolverGuard} },
  { path: 'newraid', component: NewRaidComponent, canActivate: [AuthGuard],
      resolve: {gyms: GymResolverGuard, pokemonsGym: PokemonGymResolverGuard} },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard],
      resolve: {profile: ProfileResolverGuard} },
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
