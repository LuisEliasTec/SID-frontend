import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { ValidationTriggerService } from 'src/app/providers/validation-trigger.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
})
export class CreateUserComponent {
  public createFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private triggerValidation: ValidationTriggerService,
    private restApiService: RestApiService
  ) {
    this.createFormGroup = fb.group({
      email: fb.control('', [Validators.required]),
      password: fb.control('', [Validators.required]),
    });
  }

  public onSubmit(): void {
    if (this.createFormGroup.invalid) {
      this.triggerValidation.validateAllFormFields(this.createFormGroup);
      return;
    }

    this.restApiService.post('/user', this.createFormGroup.value);
    console.log(this.createFormGroup.value);
  }
}
