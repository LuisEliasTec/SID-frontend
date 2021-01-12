import { Component } from '@angular/core';
import { ToastService } from 'src/app/providers/toast-service/toast.service';

@Component({
  selector: 'app-toasts',
  template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"
      [class]="'toast-notification'"
      [autohide]="true"
      [delay]="toast.delay || 5000"
      (hide)="toastService.remove(toast)"
    >
      <div class="d-flex notification-icon">
        <div
          [ngClass]="{ 'rounded-danger': toast.error }"
          class="rounded-circle d-flex align-items-center justify-content-center"
        >
          <div
            [ngClass]="{ 'inner-danger': toast.error }"
            class="inner rounded-circle d-flex align-items-center justify-content-center"
          >
            <mat-icon aria-hidden="false" aria-label="close icon">{{
              toast.error ? 'close' : 'done'
            }}</mat-icon>
          </div>
        </div>
      </div>
      <div class="d-flex message-section">
        <div class="d-flex notification-header">
          <span>{{ toast.header || 'Atención!' }}</span>
          <button
            class="btn-empty-style"
            tabindex="-1"
            (click)="toastService.remove(toast)"
          >
            <mat-icon aria-hidden="false" aria-label="close icon"
              >close</mat-icon
            >
          </button>
        </div>
        <div class="d-flex notification-body">
          <span class="notification-message">{{
            toast.body || 'La acción fué realizada con exito'
          }}</span>
        </div>
      </div>
    </ngb-toast>
  `,
  styles: [
    `
      :host {
        position: fixed;
        top: 25%;
        right: 0;
        margin: 0.5em;
        z-index: 1200;
      }
    `,
  ],
})
export class AppToastsComponent {
  constructor(public toastService: ToastService) {}
}
