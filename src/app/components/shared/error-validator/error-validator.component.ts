import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'error-validator',
  template: `<span *ngIf="formControlInstance.errors && formControlInstance.touched">{{ checkForErrors(formControlInstance) }}</span>`,
})
export class ErrorValidatorComponent {
  @Input() formControlInstance: FormControl;
  message: string;

  checkForErrors(formControl: FormControl): string {
    if ((formControl.errors && formControl.touched)) {
      for (const iterator in formControl.errors) {
        if (formControl.errors.hasOwnProperty(iterator)) {
          switch (iterator) {
            case 'required':
              return 'El campo es requerido';
            case 'minlength':
              return 'Minimo de caracteres';
            case 'whiteSpaces':
              return 'No se permiten solo espacios en blanco';
            default:
              return '';
          }
        }
      }
    }
  }
}
