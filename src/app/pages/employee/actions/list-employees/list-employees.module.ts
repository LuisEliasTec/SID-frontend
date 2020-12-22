import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';
import { ListEmployeesComponent } from './list-employees.component';
import * as moment from 'moment';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

moment.locale('es');

@NgModule({
  declarations: [ListEmployeesComponent],
  exports: [ListEmployeesComponent],
  imports: [MatTableModule, RestApiModule, MatInputModule, MatButtonModule],
  providers: []
})
export class ListEmployeesModule { }
