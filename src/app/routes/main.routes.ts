import { Routes } from '@angular/router';

export const MAIN_ROUTES: Routes = [
  {
    path: 'citas',
    loadChildren: () => import('./appointment/appointment-routes.module').then(m => m.AppointmentRoutesModule),
  },
  {
    path: 'empleados',
    loadChildren: () => import('./employee/employee-routes.module').then(m => m.EmployeeRoutesModule),
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./user/user-routes.module').then(m => m.UserRoutesModule),
  },
  {
    path: 'login',
    loadChildren: () => import('../auth/login/login.module').then(m => m.LoginModule),
  },
  {
    path: '**',
    loadChildren: () => import('../pages/notfound/notfound.module').then(m => m.NotFoundModule),
  },
];
