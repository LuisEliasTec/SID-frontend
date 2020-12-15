import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class SessionService {
  private tokenName = 'nk';

  constructor(private router: Router) { }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenName, token);
  }

  logout(): void {
    localStorage.removeItem(this.tokenName);

    this.router.navigate(['/login']);
  }

  getToken(): string {
    return localStorage.getItem(this.tokenName);
  }
}
