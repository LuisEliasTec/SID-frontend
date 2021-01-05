import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserEntryDialogComponent } from './create-user-entry-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user.component';
import { MatSelectModule } from '@angular/material/select';
import { DialogHeaderModule } from 'src/app/components/layout/dialog-header/dialog-header.module';

const routes: Routes = [
  {
    path: '',
    component: CreateUserEntryDialogComponent,
  }
];

@NgModule({
  declarations: [CreateUserEntryDialogComponent, CreateUserComponent],
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
  ],
  exports: [CreateUserComponent],
  providers: []
})
export class CreateUserEntryDialogModule { }
