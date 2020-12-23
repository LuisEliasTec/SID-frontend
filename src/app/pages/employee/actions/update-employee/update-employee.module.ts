import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';
import { UpdateEmployeeEntryDialogComponent } from './update-employee-entry-dialog.component';
import { UpdateEmployeeComponent,  } from './update-employee.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  {
    path: ':id',
    component: UpdateEmployeeEntryDialogComponent,
  }
];

@NgModule({
  declarations: [UpdateEmployeeEntryDialogComponent, UpdateEmployeeComponent],
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
  exports: [RouterModule]
})
export class UpdateEmployeeModule {}
