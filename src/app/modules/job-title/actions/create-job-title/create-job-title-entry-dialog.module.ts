import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { DialogHeaderModule } from 'src/app/components/layout/dialog-header/dialog-header.module';
import { CreateJobTitleComponent } from './create-job-title.component';
import { CreateJobTitleEntryDialogComponent } from './create-job-title-entry-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: CreateJobTitleEntryDialogComponent,
  }
];

@NgModule({
  declarations: [CreateJobTitleEntryDialogComponent, CreateJobTitleComponent],
  imports: [
    RouterModule.forChild(routes),
    MatDialogModule,
    ReactiveFormsModule,
    RestApiModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    DialogHeaderModule,
    FormsModule,],
  exports: [CreateJobTitleComponent],
  providers: []
})
export class CreateJobTitleEntryDialogModule { }
