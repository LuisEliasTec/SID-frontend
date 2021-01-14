import { Routes } from '@angular/router';
import { AllergyComponent } from './allergy.component';

export const ALLERGY_COMPONENT_ROUTES: Routes = [
  {
    path: '',
    component: AllergyComponent,
    children: [
      {
        path: 'nueva-alergia',
        loadChildren: () => import('./actions/allergy-dialog/allergy-entry-dialog.module').then(m => m.AllergyEntryDialogModule),
      },
      {
        path: 'actualizar-alergia/:id',
        loadChildren: () => import('./actions/allergy-dialog/allergy-entry-dialog.module').then(m => m.AllergyEntryDialogModule),
      },
      // {
      //   path: 'actualizar',
      //   loadChildren: () => import('./actions/update-job-title/update-job-title.module').then(m => m.UpdateJobTitleModule),
      // }
    ]
  }
];
