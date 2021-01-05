import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoleEntryDialogComponent } from './create-role-entry-dialog.component';
import { CreateRoleComponent } from './create-role.component';

const ROUTES: Routes = [
  {
    path: '',
    component: CreateRoleEntryDialogComponent,
  }
];

@NgModule({
  declarations: [
    CreateRoleComponent,
    CreateRoleEntryDialogComponent,
  ],
  imports: [
    MatDialogModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    RouterModule,
  ],
})
export class CreateRoleModule {}
