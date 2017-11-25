import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RaidService } from './../raid.service';
import { PokemonGym } from '../../models/PokemonGym';

@Injectable()
export class PokemonGymResolverGuard implements Resolve<PokemonGym[]> {

  constructor(private raidService: RaidService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): PokemonGym[] | Observable<PokemonGym[]> | Promise<PokemonGym[]> {
    return this.raidService.getPokemonGym();
  }
}
