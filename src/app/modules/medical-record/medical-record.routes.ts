import { Routes } from '@angular/router';
import { MedicalRecordComponent } from './medical-record.component';

export const USER_COMPONENT_ROUTES: Routes = [
  {
    path: '',
    component: MedicalRecordComponent,
    children: [
      {
        path: 'nuevo-paciente',
        loadChildren: () => import('./actions/create-medical-record/create-medical-record-entry-dialog.module').then(m => m.CreateMedicalRecordEntryDialogModule),
      },
      {
        path: 'actualizar',
        loadChildren: () => import('./actions/update-medical-record/update-medical-record.module').then(m => m.UpdateMedicalRecordModule),
      }
    ]
  }
];
