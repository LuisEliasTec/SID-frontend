import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { UpdateRoleEntryDialogComponent } from './update-role-entry-dialog.component';
import { UpdateRoleComponent } from './update-role.component';
import { DialogHeaderModule } from 'src/app/components/layout/dialog-header/dialog-header.module';

const ROUTES: Routes = [
  {
    path: ':roleId',
    component: UpdateRoleEntryDialogComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  declarations: [UpdateRoleComponent, UpdateRoleEntryDialogComponent],
  imports: [
    MatDialogModule,
    RouterModule.forChild(ROUTES),
    DialogHeaderModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class CreateRoleModule {}
