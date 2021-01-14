import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DialogDataExchangeModule } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.module';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { ListMedicinesModule } from './actions/list-medicines/list-medicines.module';
import { MedicineComponent } from './medicine.component';
import { MEDICINE_COMPONENT_ROUTES } from './medicine.routes';

@NgModule({
  declarations: [MedicineComponent],
  imports: [
    RouterModule.forChild(MEDICINE_COMPONENT_ROUTES),
    DialogDataExchangeModule.forRoot(new DialogDataExchange()),
    MatIconModule,
    ListMedicinesModule,
  ],
  exports: [RouterModule],
})
export class MedicineModule { }
