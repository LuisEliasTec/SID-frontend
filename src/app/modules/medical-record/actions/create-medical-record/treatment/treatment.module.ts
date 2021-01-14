import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { DialogHeaderModule } from 'src/app/components/layout/dialog-header/dialog-header.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { TreatmentComponent } from './treatment.component';

@NgModule({
  declarations: [TreatmentComponent],
  imports: [
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
    MatCheckboxModule,
    MatRadioModule
  ],
  exports: [TreatmentComponent],
  providers: []
})
export class TreatmentModule { }
