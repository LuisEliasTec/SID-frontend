import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DialogDataExchangeModule } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.module';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { ListDiseasesModule } from './actions/list-diseases/list-diseases.module';
import { DiseaseComponent } from './disease.component';
import { DISEASE_COMPONENT_ROUTES } from './disease.routes';

@NgModule({
  declarations: [DiseaseComponent],
  imports: [
    RouterModule.forChild(DISEASE_COMPONENT_ROUTES),
    DialogDataExchangeModule.forRoot(new DialogDataExchange()),
    MatIconModule,
    ListDiseasesModule,
  ],
  exports: [RouterModule],
})
export class DiseaseModule { }
