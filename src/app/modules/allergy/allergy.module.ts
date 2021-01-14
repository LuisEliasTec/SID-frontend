import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DialogDataExchangeModule } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.module';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { ListAllergiesModule } from './actions/list-allergies/list-allergies.module';
import { AllergyComponent } from './allergy.component';
import { ALLERGY_COMPONENT_ROUTES } from './allergy.routes';

@NgModule({
  declarations: [AllergyComponent],
  imports: [
    RouterModule.forChild(ALLERGY_COMPONENT_ROUTES),
    DialogDataExchangeModule.forRoot(new DialogDataExchange()),
    MatIconModule,
    ListAllergiesModule,
  ],
  exports: [RouterModule],
})
export class AllergyModule { }
