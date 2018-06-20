import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RaidService } from '../raid/raid.service';
import { Pokemon } from '../models/Pokemon';

@Injectable()
export class PokemonGymResolverGuard implements Resolve<Pokemon[]> {

  constructor(private raidService: RaidService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Pokemon[] | Observable<Pokemon[]> | Promise<Pokemon[]> {
    return this.raidService.getPokemonGym();
  }
}
