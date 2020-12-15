import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorValidatorComponent } from './error-validator.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ErrorValidatorComponent,
  ],
  exports: [
    ErrorValidatorComponent,
  ],
})
export class ErrorValidatorModule { }
