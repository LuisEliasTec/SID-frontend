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
import { CreateTurnEntryDialogComponent } from './create-turn-entry-dialog.component';
import { CreateTurnComponent } from './create-turn.component';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormatTimePickerService } from 'src/app/providers/services/format-time-picker.service';

const routes: Routes = [
  {
    path: '',
    component: CreateTurnEntryDialogComponent,
  }
];

@NgModule({
  declarations: [CreateTurnEntryDialogComponent, CreateTurnComponent],
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
    NgbTimepickerModule,
    FormsModule,  ],
  exports: [CreateTurnComponent],
  providers: [FormatTimePickerService]
})
export class CreateTurnEntryDialogModule { }
