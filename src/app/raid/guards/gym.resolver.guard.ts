import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RaidService } from './../raid.service';
import { Gym } from '../../models/Gym';

@Injectable()
export class GymResolverGuard implements Resolve<Gym[]> {

  constructor(private raidService: RaidService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Gym[] | Observable<Gym[]> | Promise<Gym[]> {
    return this.raidService.getGym();
  }
}
