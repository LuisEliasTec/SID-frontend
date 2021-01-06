import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class SessionService {
  private tokenName = 'kr';

  constructor(private router: Router) { }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenName, token);
  }

  logout(): void {
    localStorage.removeItem(this.tokenName);

    this.router.navigate(['/sys/login']);
  }

  getToken(): string {
    return localStorage.getItem(this.tokenName);
  }

  isThereAnyToken(): boolean {
    return localStorage.getItem(this.tokenName) ? true : false;
  }
}
