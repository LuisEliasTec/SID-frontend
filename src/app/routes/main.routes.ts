import { Routes } from '@angular/router';

export const MAIN_ROUTES: Routes = [
  {
    path: 'citas',
    loadChildren: () => import('../pages/appointment/appointment.module').then(m => m.AppointmentModule),
  },
  {
    path: 'empleados',
    loadChildren: () => import('../pages/employee/employee.module').then(m => m.EmployeeModule),
  },
  {
    path: 'puesto-laboral',
    loadChildren: () => import('../pages/job-title/job-title.module').then(m => m.JobTitleModule),
  },
  {
    path: 'turnos',
    loadChildren: () => import('../pages/turn/turn.module').then(m => m.TurnModule),
  },
  {
    path: 'usuarios',
    loadChildren: () => import('../pages/user/user.module').then(m => m.UserModule),
  },
  {
    path: 'login',
    loadChildren: () => import('../auth/login/login.module').then(m => m.LoginModule),
  },
  {
    path: '404',
    loadChildren: () => import('../pages/notfound/notfound.module').then(m => m.NotFoundModule),
  },
  {
    path: '**',
    loadChildren: () => import('../pages/notfound/notfound.module').then(m => m.NotFoundModule),
  },
];
