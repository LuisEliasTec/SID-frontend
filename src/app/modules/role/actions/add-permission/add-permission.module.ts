import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { DialogHeaderModule } from 'src/app/components/layout/dialog-header/dialog-header.module';
import { AddPermissionEntryDialogComponent } from './add-permisison-entry-dialog.component';
import { AddPermissionComponent } from './add-permission.component';

const ROUTES: Routes = [
  {
    path: ':roleId/:module',
    component: AddPermissionEntryDialogComponent,
  },
  {
    path: '',
    redirectTo: '/404',
  },
];

@NgModule({
  declarations: [AddPermissionComponent, AddPermissionEntryDialogComponent],
  imports: [
    MatDialogModule,
    RouterModule.forChild(ROUTES),
    DialogHeaderModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatCheckboxModule,
  ],
})
export class AddPermissionModule {}
