import { Profile } from './../models/Profile';
import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ProfileService } from "../profile/profile.service";

@Injectable()
export class ProfileResolverGuard implements Resolve<Profile> {

  constructor(private profileService: ProfileService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Profile | Promise<Profile> | Observable<Profile> {
    return this.profileService.getProfile();
  }
}
