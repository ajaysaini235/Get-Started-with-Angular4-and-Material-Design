import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {UserAuthService} from '../common/services/user-auth.service'

@Injectable()
export class UserAuthGuard implements CanActivate {
  constructor(private userAuthService:UserAuthService,private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.userAuthService.isLogin().then((data) => {
      return data;
    }).catch((data) => {
      this.router.navigate(['login'],{replaceUrl:true});
      return data;
    })
  }
}
