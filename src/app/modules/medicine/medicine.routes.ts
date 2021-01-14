import { Routes } from '@angular/router';
import { MedicineComponent } from './medicine.component';

export const MEDICINE_COMPONENT_ROUTES: Routes = [
  {
    path: '',
    component: MedicineComponent,
    children: [
      {
        path: 'nueva-medicamento',
        loadChildren: () => import('./actions/medicine-dialog/medicine-entry-dialog.module').then(m => m.MedicineEntryDialogModule),
      },
      {
        path: 'actualizar-medicamento/:id',
        loadChildren: () => import('./actions/medicine-dialog/medicine-entry-dialog.module').then(m => m.MedicineEntryDialogModule),
      },
    ]
  }
];
