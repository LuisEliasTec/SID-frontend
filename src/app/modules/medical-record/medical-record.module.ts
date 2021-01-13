import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DialogDataExchangeModule } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.module';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { ListMedicalRecordsModule } from './actions/list-medical-record/list-medical-record.module';
import { MedicalRecordComponent } from './medical-record.component';
import { USER_COMPONENT_ROUTES } from './medical-record.routes';

@NgModule({
  declarations: [MedicalRecordComponent],
  imports: [
    RouterModule.forChild(USER_COMPONENT_ROUTES),
    DialogDataExchangeModule.forRoot(new DialogDataExchange()),
    MatIconModule,
    ListMedicalRecordsModule
  ],
  providers: [],
  exports: [RouterModule],
})
export class MedicalRecordModule {}
