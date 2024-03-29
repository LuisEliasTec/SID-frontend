import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { RolesSelectModule } from 'src/app/components/fields/roles-select/roles-select.module';
import { DialogHeaderModule } from 'src/app/components/layout/dialog-header/dialog-header.module';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';
import { UpdateUserEntryDialogComponent } from './update-user-entry-dialog.component';
import { UpdateUserComponent } from './update-user.component';

const routes: Routes = [
  {
    path: ':id',
    component: UpdateUserEntryDialogComponent,
  }
];

@NgModule({
  declarations: [UpdateUserEntryDialogComponent, UpdateUserComponent],
  imports: [
    RouterModule.forChild(routes),
    MatDialogModule,
    ReactiveFormsModule,
    RestApiModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    DialogHeaderModule,
    RolesSelectModule,
    NgSelectModule,
  ],
  exports: [RouterModule]
})
export class UpdateUserModule {}
