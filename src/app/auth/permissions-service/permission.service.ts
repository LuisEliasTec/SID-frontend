import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';

@Injectable()
export class PermissionService {
  constructor(
    private restService: RestApiService,
  ) {}

  public permissionsList(): Observable<any> {
    return this.restService.get('user/permissions-list');
  }
}
