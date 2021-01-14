import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { DialogHeaderModule } from 'src/app/components/layout/dialog-header/dialog-header.module';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormatTimePickerService } from 'src/app/services/format-time-picker.service';
import { UpdateJobTitleComponent } from './update-job-title.component';
import { UpdateJobTitleEntryDialogComponent } from './update-job-title-entry-dialog.component';

const routes: Routes = [
  {
    path: ':id',
    component: UpdateJobTitleEntryDialogComponent,
  }
];

@NgModule({
  declarations: [UpdateJobTitleEntryDialogComponent, UpdateJobTitleComponent],
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
    MatTabsModule,
    DialogHeaderModule,
    FormsModule,
    NgbTimepickerModule
  ],
  exports: [RouterModule],
  providers: [FormatTimePickerService]
})
export class UpdateJobTitleModule { }
