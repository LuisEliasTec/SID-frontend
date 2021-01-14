import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DialogDataExchangeModule } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.module';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { ListSurgeriesModule } from './actions/list-surgeries/list-surgeries.module';
import { SurgeryComponent } from './surgery.component';
import { SURGERY_COMPONENT_ROUTES } from './surgery.routes';

@NgModule({
  declarations: [SurgeryComponent],
  imports: [
    RouterModule.forChild(SURGERY_COMPONENT_ROUTES),
    DialogDataExchangeModule.forRoot(new DialogDataExchange()),
    MatIconModule,
    ListSurgeriesModule,
  ],
  exports: [RouterModule],
})
export class SurgeryModule { }
