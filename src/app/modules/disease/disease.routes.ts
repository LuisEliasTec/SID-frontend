import { Routes } from '@angular/router';
import { DiseaseComponent } from './disease.component';

export const DISEASE_COMPONENT_ROUTES: Routes = [
  {
    path: '',
    component: DiseaseComponent,
    children: [
      {
        path: 'nuevo-padecimiento',
        loadChildren: () => import('./actions/disease-dialog/disease-entry-dialog.module').then(m => m.DiseaseEntryDialogModule),
      },
      {
        path: 'actualizar-padecimiento/:id',
        loadChildren: () => import('./actions/disease-dialog/disease-entry-dialog.module').then(m => m.DiseaseEntryDialogModule),
      },
    ]
  }
];
