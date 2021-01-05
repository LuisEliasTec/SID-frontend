import { Routes } from '@angular/router';
import { JobTitleComponent } from './job-title.component';

export const JOB_TITLE_COMPONENT_ROUTES: Routes = [
  {
    path: '',
    component: JobTitleComponent,
    children: [
      {
        path: 'nuevo-puesto-laboral',
        loadChildren: () => import('./actions/create-job-title/create-job-title-entry-dialog.module').then(m => m.CreateJobTitleEntryDialogModule),
      },
      {
        path: 'actualizar',
        loadChildren: () => import('./actions/update-job-title/update-job-title.module').then(m => m.UpdateJobTitleModule),
      }
    ]
  }
];
