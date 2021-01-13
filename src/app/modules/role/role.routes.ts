import { Routes } from '@angular/router';
import { PermissionGuard } from 'src/app/auth/guards/permission.guard';
import { RoleComponent } from './role.component';
import { Permissions } from '../../auth/permissions/permissions.enum';

export const ROLE_ROUTES: Routes = [
  {
    path: '',
    component: RoleComponent,
    children: [
      {
        path: 'crear-rol',
        loadChildren: () =>
          import('./actions/create-role/create-role.module').then(
            (m) => m.CreateRoleModule
          ),
      },
      {
        canActivate: [PermissionGuard],
        data: {
          permissions: [Permissions.UPDATE_ROLE, Permissions.SUPER_USER],
        },
        path: 'renombrar-rol',
        loadChildren: () =>
          import('./actions/update-role/update-role.module').then(
            (m) => m.CreateRoleModule
          ),
      },
      {
        canActivate: [PermissionGuard],
        data: {
          permissions: [Permissions.CREATE_ROLE, Permissions.SUPER_USER],
        },
        path: 'agregar-permiso',
        loadChildren: () =>
          import('./actions/add-permission/add-permission.module').then(
            (m) => m.AddPermissionModule
          ),
      },
    ],
  },
];
