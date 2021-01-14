import { Routes } from '@angular/router';
import { VaccineComponent } from './vaccine.component';

export const VACCINE_COMPONENT_ROUTES: Routes = [
  {
    path: '',
    component: VaccineComponent,
    children: [
      {
        path: 'nueva-vacuna',
        loadChildren: () => import('./actions/vaccine-dialog/vaccine-entry-dialog.module').then(m => m.VaccineEntryDialogModule),
      },
      {
        path: 'actualizar-vacuna/:id',
        loadChildren: () => import('./actions/vaccine-dialog/vaccine-entry-dialog.module').then(m => m.VaccineEntryDialogModule),
      },
    ]
  }
];
