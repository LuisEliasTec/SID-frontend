import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  private jwtStorageKey = 'kr';

  public saveJwtToken(jwt: string): boolean {
    localStorage.setItem(this.jwtStorageKey, jwt);

    return true;
  }

  public deleteJwtToken(): boolean {
    localStorage.removeItem(this.jwtStorageKey);

    return true;
  }
}
