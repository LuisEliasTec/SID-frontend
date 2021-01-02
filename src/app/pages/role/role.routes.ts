import { Routes } from '@angular/router';
import { RoleComponent } from './role.component';

export const ROLE_ROUTES: Routes = [
  {
    path: '',
    component: RoleComponent,
    children: [
      {
        path: 'crear-rol',
        loadChildren: () => import('./actions/create-role/create-role.module').then(m => m.CreateRoleModule),
      }
    ]
  }
];
