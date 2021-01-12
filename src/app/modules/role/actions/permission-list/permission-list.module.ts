import { NgModule } from '@angular/core';
import { PermissionListComponent } from './permission-list.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PermissionListComponent],
  exports: [PermissionListComponent],
  imports: [MatCheckboxModule, MatIconModule, CommonModule],
})
export class PermissionListModule {}
