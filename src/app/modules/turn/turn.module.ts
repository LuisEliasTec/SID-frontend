import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DialogDataExchangeModule } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.module';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { ListTurnsModule } from './actions/list-turns/list-turns.module';
import { TurnComponent } from './turn.component';
import { TURN_COMPONENT_ROUTES } from './turn.routes';

@NgModule({
  declarations: [TurnComponent],
  imports: [
    RouterModule.forChild(TURN_COMPONENT_ROUTES),
    DialogDataExchangeModule.forRoot(new DialogDataExchange()),
    MatIconModule,
    ListTurnsModule
  ],
  exports: [RouterModule],
})
export class TurnModule {}