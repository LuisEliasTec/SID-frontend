import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeEntryDialogComponent } from './create-employee-entry-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: CreateEmployeeEntryDialogComponent,
  }
];

@NgModule({
  declarations: [CreateEmployeeEntryDialogComponent, CreateEmployeeComponent],
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatTabsModule
  ],
  exports: [CreateEmployeeComponent],
  providers: []
})
export class CreateEmployeeEntryDialogModule { }
