import { Trainner } from './../../models/Trainner';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProfileService } from '../../profile/profile.service';

@Injectable()
export class TrainnersResolverGuard implements Resolve<Trainner[]> {

  constructor(private profileService: ProfileService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Trainner[] | Observable<Trainner[]> | Promise<Trainner[]> {
      return this.profileService.getTrainners();
    }

}
