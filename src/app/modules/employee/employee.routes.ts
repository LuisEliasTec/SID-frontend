import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';

export const EMPLOYEE_COMPONENT_ROUTES: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: 'nuevo-empleado',
        loadChildren: () => import('./actions/create-employee/create-employee-entry-dialog.module').then(m => m.CreateEmployeeEntryDialogModule),
      },
      {
        path: 'actualizar',
        loadChildren: () => import('./actions/update-employee/update-employee.module').then(m => m.UpdateEmployeeModule),
      }
    ]
  }
];
