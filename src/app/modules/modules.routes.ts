import { Routes } from '@angular/router';
import { PermissionGuard } from '../auth/guards/permission.guard';
import { Permissions } from '../auth/permissions/permissions.enum';
import { ModulesComponent } from './modules.component';

export const MODULES_ROUTES: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      {
        canActivate: [PermissionGuard],
        data: {
          permissions: [Permissions.READ_APPOINTMENT, Permissions.SUPER_USER],
        },
        path: 'citas',
        loadChildren: () =>
          import('./appointment/appointment.module').then(
            (m) => m.AppointmentModule
          ),
      },
      {
        path: 'empleados',
        canActivate: [PermissionGuard],
        data: {
          permissions: [Permissions.READ_EMPLOYEE],
        },
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
      },
      {
        path: 'expedientes-clinicos',
        loadChildren: () => import('./medical-record/medical-record.module').then(m => m.MedicalRecordModule),
      },
      {
        path: 'puestos-laborales',
        loadChildren: () => import('./job-title/job-title.module').then(m => m.JobTitleModule),
      },
      {
        path: 'usuarios',
        canActivate: [PermissionGuard],
        data: {
          permissions: [Permissions.READ_USER, Permissions.SUPER_USER],
        },
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
      {
        canActivate: [PermissionGuard],
        data: {
          permissions: [Permissions.READ_ROLE, Permissions.SUPER_USER],
        },
        path: 'usuarios/roles',
        loadChildren: () =>
          import('./role/role.module').then((m) => m.RoleModule),
      },
      {
        path: '**',
        loadChildren: () =>
          import('./notfound/notfound.module').then((m) => m.NotFoundModule),
      },
    ],
  },
];
