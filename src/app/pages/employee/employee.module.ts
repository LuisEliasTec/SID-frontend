import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EMPLOYEE_COMPONENT_ROUTES } from './employee.routes';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    RouterModule.forChild(EMPLOYEE_COMPONENT_ROUTES),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [RouterModule],
})
export class EmployeeModule {}
