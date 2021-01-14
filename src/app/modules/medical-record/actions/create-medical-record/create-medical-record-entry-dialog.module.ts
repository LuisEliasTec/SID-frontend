import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { CreateMedicalRecordEntryDialogComponent } from './create-medical-record-entry-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { DialogHeaderModule } from 'src/app/components/layout/dialog-header/dialog-header.module';
import { CreateMedicalRecordComponent } from './create-medical-record.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { GeneralInformationModule } from './general-information/general-information.module';
import { RecordsModule } from './records/records.module';
import { AdmissionHistoryModule } from './admission-history/admission-history.module';
import { TreatmentModule } from './treatment/treatment.module';
import { EvolutionModule } from './evolution/evolution.module';
import { FormatTimePickerService } from 'src/app/services/format-time-picker.service';

const routes: Routes = [
  {
    path: '',
    component: CreateMedicalRecordEntryDialogComponent,
  }
];

@NgModule({
  declarations: [CreateMedicalRecordEntryDialogComponent, CreateMedicalRecordComponent],
  imports: [
    RouterModule.forChild(routes),
    MatDialogModule,
    ReactiveFormsModule,
    RestApiModule,
    CommonModule,
    DialogHeaderModule,
    MatTabsModule,
    GeneralInformationModule,
    RecordsModule,
    AdmissionHistoryModule,
    MatDividerModule,
    TreatmentModule,
    EvolutionModule
  ],
  exports: [CreateMedicalRecordComponent],
  providers: []
})
export class CreateMedicalRecordEntryDialogModule { }
