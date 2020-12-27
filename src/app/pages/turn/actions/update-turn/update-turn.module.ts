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
import { UpdateTurnEntryDialogComponent } from './update-turn-entry-dialog.component';
import { UpdateTurnComponent } from './update-turn.component';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormatTimePickerService } from 'src/app/providers/services/format-time-picker.service';

const routes: Routes = [
  {
    path: ':id',
    component: UpdateTurnEntryDialogComponent,
  }
];

@NgModule({
  declarations: [UpdateTurnEntryDialogComponent, UpdateTurnComponent],
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
export class UpdateTurnModule { }
