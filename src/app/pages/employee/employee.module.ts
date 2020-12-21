import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DialogDataExchangeModule } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.module';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { ListEmployeesModule } from './actions/list-employees/list-employees.module';
import { EmployeeComponent } from './employee.component';
import { EMPLOYEE_COMPONENT_ROUTES } from './employee.routes';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    RouterModule.forChild(EMPLOYEE_COMPONENT_ROUTES),
    DialogDataExchangeModule.forRoot(new DialogDataExchange()),
    MatIconModule,
    ListEmployeesModule
  ],
  exports: [RouterModule],
})
export class EmployeeModule {}
