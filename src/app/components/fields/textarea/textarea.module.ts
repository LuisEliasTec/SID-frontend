import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ErrorValidatorModule } from '../../shared/error-validator/error-validator.module';
import { TextareaDatatype } from './textarea.datatype';

@NgModule({
  imports: [
    ErrorValidatorModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    TextareaDatatype,
  ],
  exports: [
    TextareaDatatype,
  ],
})
export class TextareaModule { }
