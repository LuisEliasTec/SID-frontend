import { AbstractControl } from '@angular/forms';

export class CustomCollectionValidators {

  static NoWhiteSpaces(control: AbstractControl): any {
    // const regex = new RegExp(/^\S(\S|\s)*$/); // Every symbol but spaces
    const regex = new RegExp(/^(\s)+$/);

    if (regex.test(control.value)) {
      return { whiteSpaces: true };
    }
    return null;
  }
}
