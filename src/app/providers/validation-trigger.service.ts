import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationTriggerService {
  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  checkForErrors(abstractControl: AbstractControl): string {
    if ((abstractControl.errors && abstractControl.touched)) {
      for (const iterator in abstractControl.errors) {
        if (abstractControl.errors.hasOwnProperty(iterator)) {
          switch (iterator) {
            case 'required':
              return 'El campo es requerido';
            case 'minlength':
              return 'Mínimo de caracteres';
            case 'whiteSpaces':
              return 'No se permiten solo espacios en blanco';
            case 'compare':
              return 'Los campos no conciden';
            case 'email':
              return 'El formato del correo electrónico es incorrecto';
            default:
              return '';
          }
        }
      }
    }
  }
}
