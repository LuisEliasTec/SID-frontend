import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TextstringModule } from 'src/app/components/fields/textstring/textstring.module';
import { AppointmentComponent } from './appointment.component';
import { APPOINTMENT_COMPONENT_ROUTES } from './appointment.routes';

@NgModule({
  declarations: [AppointmentComponent],
  imports: [
    RouterModule.forChild(APPOINTMENT_COMPONENT_ROUTES),
    TextstringModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [RouterModule],
})
export class AppointmentModule {}
