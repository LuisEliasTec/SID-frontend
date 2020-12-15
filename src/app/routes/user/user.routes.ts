import { Routes } from '@angular/router';

export const USER_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../../pages/user/user.module').then(m => m.UserModule),
  }
];
