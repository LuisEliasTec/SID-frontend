import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DialogDataExchangeModule } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.module';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { ListJobTitlesModule } from './actions/list-job-titles/list-job-titles.module';
import { JobTitleComponent } from './job-title.component';
import { JOB_TITLE_COMPONENT_ROUTES } from './job-title.routes';

@NgModule({
  declarations: [JobTitleComponent],
  imports: [
    RouterModule.forChild(JOB_TITLE_COMPONENT_ROUTES),
    DialogDataExchangeModule.forRoot(new DialogDataExchange()),
    MatIconModule,
    ListJobTitlesModule
  ],
  exports: [RouterModule],
})
export class JobTitleModule {}