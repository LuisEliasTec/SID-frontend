import { Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';

export const MODULES_ROUTES: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      {
        path: 'citas',
        loadChildren: () => import('./appointment/appointment.module').then(m => m.AppointmentModule),
      },
      {
        path: 'empleados',
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
      },
      {
        path: 'puestos-laborales',
        loadChildren: () => import('./job-title/job-title.module').then(m => m.JobTitleModule),
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
      },
      {
        path: 'usuarios/roles',
        loadChildren: () => import('./role/role.module').then(m => m.RoleModule),
      },
      {
        path: '**',
        loadChildren: () => import('./notfound/notfound.module').then(m => m.NotFoundModule),
      },
    ]
  },
];
