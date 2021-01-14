import { NgModule } from '@angular/core';
import { ListMedicalRecordsComponent } from './list-medical-record.component';
import { MatTableModule } from '@angular/material/table';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { UserStatusPipeModule } from 'src/app/pipes/user-status-pipe.module';
import { SweetAlertModule } from 'src/app/providers/sweet-alert/sweet-alert.module';

@NgModule({
  declarations: [ListMedicalRecordsComponent],
  exports: [ListMedicalRecordsComponent],
  imports: [
    MatTableModule,
    RestApiModule,
    MatPaginatorModule,
    CommonModule,
    UserStatusPipeModule,
    SweetAlertModule,
  ],
  providers: []
})
export class ListMedicalRecordsModule {}
