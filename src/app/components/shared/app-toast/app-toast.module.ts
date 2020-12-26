import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { AppToastsComponent } from './app-toast.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppToastsComponent],
  imports: [NgbToastModule, CommonModule, MatIconModule],
  exports: [AppToastsComponent],
})
export class AppToastModule { }
