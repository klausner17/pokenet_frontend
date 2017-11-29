import { LoginService } from './../login/login.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KeyResolverGuard implements Resolve<{}> {

  constructor(private loginService: LoginService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<{}> | Promise<{}> | {} {
    return true;
  }
}
