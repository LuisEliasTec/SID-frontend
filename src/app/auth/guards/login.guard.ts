import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/providers/session/session.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private sessionService: SessionService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return !this.sessionService.isThereAnyToken();
  }

}
