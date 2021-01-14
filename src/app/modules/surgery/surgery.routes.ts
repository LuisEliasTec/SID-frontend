import { Routes } from '@angular/router';
import { SurgeryComponent } from './surgery.component';

export const SURGERY_COMPONENT_ROUTES: Routes = [
  {
    path: '',
    component: SurgeryComponent,
    children: [
      {
        path: 'nueva-cirugia',
        loadChildren: () => import('./actions/surgery-dialog/surgery-entry-dialog.module').then(m => m.SurgeryEntryDialogModule),
      },
      {
        path: 'actualizar-cirugia/:id',
        loadChildren: () => import('./actions/surgery-dialog/surgery-entry-dialog.module').then(m => m.SurgeryEntryDialogModule),
      },
      // {
      //   path: 'actualizar',
      //   loadChildren: () => import('./actions/update-job-title/update-job-title.module').then(m => m.UpdateJobTitleModule),
      // }
    ]
  }
];
