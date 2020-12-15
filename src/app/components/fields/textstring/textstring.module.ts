import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ErrorValidatorModule } from '../../shared/error-validator/error-validator.module';
import { TextstringDatatype } from './textstring.datatype';

@NgModule({
  declarations: [
    TextstringDatatype,
  ],
  exports: [
    TextstringDatatype,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ErrorValidatorModule,
  ],
  providers: [],
})
export class TextstringModule {

}
