import { NgModule } from '@angular/core';
import { RoleListComponent } from './role-list.component';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RoleListComponent],
  imports: [
    MatListModule,
    CommonModule,
  ],
  exports: [RoleListComponent],
})
export class RoleListModule {}
