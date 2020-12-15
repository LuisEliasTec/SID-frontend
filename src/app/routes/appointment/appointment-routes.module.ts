import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APPOINTMENT_ROUTES } from './appointment.routes';

@NgModule({
  imports: [RouterModule.forChild(APPOINTMENT_ROUTES)],
  exports: [RouterModule],
})
export class AppointmentRoutesModule {}
