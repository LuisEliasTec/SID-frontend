import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppointmentComponent } from './appointment.component';
import { APPOINTMENT_COMPONENT_ROUTES } from './appointment.routes';

@NgModule({
  declarations: [AppointmentComponent],
  imports: [
    RouterModule.forChild(APPOINTMENT_COMPONENT_ROUTES),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [RouterModule],
})
export class AppointmentModule {}
