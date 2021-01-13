import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { DialogHeaderModule } from 'src/app/components/layout/dialog-header/dialog-header.module';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';
import { UpdateMedicalRecordEntryDialogComponent } from './update-medical-record-entry-dialog.component';
import { UpdateMedicalRecordComponent } from './update-medical-record.component';

const routes: Routes = [
  {
    path: ':id',
    component: UpdateMedicalRecordEntryDialogComponent,
  }
];

@NgModule({
  declarations: [UpdateMedicalRecordEntryDialogComponent, UpdateMedicalRecordComponent],
  imports: [
    RouterModule.forChild(routes),
    MatDialogModule,
    ReactiveFormsModule,
    RestApiModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatSelectModule,
    DialogHeaderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    NgSelectModule,
    MatTabsModule,
    MatDividerModule,
  ],
  exports: [RouterModule]
})
export class UpdateMedicalRecordModule { }
