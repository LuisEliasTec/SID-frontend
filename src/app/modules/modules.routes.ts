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
