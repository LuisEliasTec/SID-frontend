import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  showSuccess(header: string, body: string): void {
    this.toasts.push({ header, body });
  }

  remove(toast): void {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
