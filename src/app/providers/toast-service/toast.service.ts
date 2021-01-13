import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  /**
   * @deprecated This function will be deleted on the near future.
   * Use ShowToast()
   */
  showSuccess(header?: string, body?: string, error = false): void {
    this.toasts.push({ header, body, error });
  }

  showToast(header?: string, body?: string, error = false): void {
    this.toasts.push({ header, body, error });
  }

  remove(toast): void {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }
}
