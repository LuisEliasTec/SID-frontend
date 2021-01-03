import { NgModule } from '@angular/core';
import { RoleListComponent } from './role-list.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [RoleListComponent],
  imports: [
    MatListModule
  ],
  exports: [RoleListComponent],
})
export class RoleListModule {}
