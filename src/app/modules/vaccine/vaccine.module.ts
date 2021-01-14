import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DialogDataExchangeModule } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.module';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { ListVaccinationsModule } from './actions/list-vaccinations/list-vaccinations.module';
import { VaccineComponent } from './vaccine.component';
import { VACCINE_COMPONENT_ROUTES } from './vaccine.routes';

@NgModule({
  declarations: [VaccineComponent],
  imports: [
    RouterModule.forChild(VACCINE_COMPONENT_ROUTES),
    DialogDataExchangeModule.forRoot(new DialogDataExchange()),
    MatIconModule,
    ListVaccinationsModule,
  ],
  exports: [RouterModule],
})
export class VaccineModule { }
