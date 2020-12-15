import { Routes } from '@angular/router';

export const EMPLOYEE_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../../pages/employee/employee.module').then(m => m.EmployeeModule),
  }
];
