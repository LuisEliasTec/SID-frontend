import { Routes } from '@angular/router';

export const APPOINTMENT_ROUTES: Routes = [{
  path: '',
  loadChildren: () => import('../../pages/appointment/appointment.module').then(m => m.AppointmentModule),
}];
