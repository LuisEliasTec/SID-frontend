import { Routes } from '@angular/router';
import { PermissionGuard } from 'src/app/auth/guards/permission.guard';
import { Permissions } from 'src/app/auth/permissions/permissions.enum';
import { UserComponent } from './user.component';

export const USER_COMPONENT_ROUTES: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'nuevo-usuario',
        canActivate: [PermissionGuard],
        data: {
          permissions: [Permissions.CREATE_USER],
        },
        loadChildren: () => import('./actions/create-user/create-user-entry-dialog.module').then(m => m.CreateUserEntryDialogModule),
      },
      {
        canActivate: [PermissionGuard],
        data: {
          permissions: [Permissions.UPDATE_USER],
        },
        path: 'actualizar',
        loadChildren: () => import('./actions/update-user/update-user.module').then(m => m.UpdateUserModule),
      }
    ]
  }
];
