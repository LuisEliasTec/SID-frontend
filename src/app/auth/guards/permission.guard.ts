import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { SessionService } from 'src/app/providers/session/session.service';
import { PermissionService } from '../permissions-service/permission.service';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private permissionService: PermissionService, private sessionService: SessionService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.permissionService.permissionsList().pipe(concatMap(res => {
      if (res.response === 'OK') {
        if (route.routeConfig.path === 'login') {
          return of(res._data ? false : true);
        }

        if (res._data.length > 0) {
          return this.checkForPermissions(route, res);
        } else {
          return of(false);
        }
      } else if (res.error.statusCode === 401 && !this.sessionService.isThereAnyToken()) {
        return of(true);
      } else {
        return of(false);
      }
    }));
  }

  private checkForPermissions(route: ActivatedRouteSnapshot, res: any): Observable<boolean> {
    return of(route.data.permissions.some(permission => res._data.map(obj => obj.slug).includes(permission)));
  }
}
