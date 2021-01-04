import { Routes } from '@angular/router';
import { UserComponent } from './user.component';

export const USER_COMPONENT_ROUTES: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'nuevo-usuario',
        loadChildren: () => import('./actions/create-user/create-user-entry-dialog.module').then(m => m.CreateUserEntryDialogModule),
      },
      {
        path: 'actualizar',
        loadChildren: () => import('./actions/update-user/update-user.module').then(m => m.UpdateUserModule),
      }
    ]
  }
];
