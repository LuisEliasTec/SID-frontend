import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { DialogHeaderModule } from 'src/app/components/layout/dialog-header/dialog-header.module';
import { CreateRoleEntryDialogComponent } from './create-role-entry-dialog.component';
import { CreateRoleComponent } from './create-role.component';

const ROUTES: Routes = [
  {
    path: '',
    component: CreateRoleEntryDialogComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  declarations: [CreateRoleComponent, CreateRoleEntryDialogComponent],
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
