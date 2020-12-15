import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EMPLOYEE_ROUTES } from './employee.routes';

@NgModule({
  imports: [RouterModule.forChild(EMPLOYEE_ROUTES)],
  exports: [RouterModule],
})
export class EmployeeRoutesModule {}
