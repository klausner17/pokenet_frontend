import { Raid } from './../../models/Raid';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { RaidService } from '../raid.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeResolver implements Resolve<Raid[]> {

  constructor(private raidService: RaidService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Raid[] | Observable<Raid[]> | Promise<Raid[]> {
    return this.raidService.getRaids();
  }

}
