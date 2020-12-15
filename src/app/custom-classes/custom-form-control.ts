import { AsyncValidatorFn, FormControl, ValidatorFn } from '@angular/forms';
import { CustomCollectionValidators } from '../validators/custom-collection.validator';
export class CustomFormControl extends FormControl {
  /**
   * Class that has NowhiteSpaces validator as default.
   */
  constructor(
    formState?: any,
    validatorOrOpts?: ValidatorFn[] | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {

    super(formState, [CustomCollectionValidators.NoWhiteSpaces, ...validatorOrOpts], asyncValidator);
  }
}
