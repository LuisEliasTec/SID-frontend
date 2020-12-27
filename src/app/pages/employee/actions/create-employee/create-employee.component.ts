import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { ValidationTriggerService } from 'src/app/providers/validation-trigger.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: '../employee-dialog.component.html',
})
export class CreateEmployeeComponent {
  public employeeFormGroup: FormGroup;
  isIdIn= true;
  titleDialog = 'Nuevo empleado';

  constructor(
    private fb: FormBuilder,
    public tValidation: ValidationTriggerService,
    private restApiService: RestApiService,
    public dialogRef: MatDialogRef<CreateEmployeeComponent>,
    private dataExchange: DialogDataExchange,
  ) {
    this.employeeFormGroup = fb.group({
      name: fb.control('', [Validators.required]),
      birthDate: fb.control('', [Validators.required]),
      phoneNumber: fb.control('', [Validators.required]),
      optionalPhoneNumber: fb.control('', []),
      email: fb.control('', [Validators.required, Validators.email]),
      address: fb.control('', []),
      postalCode: fb.control('', []),
      city: fb.control('', []),
      state: fb.control('', []),
      country: fb.control('', []),
      curp: fb.control('', []),
      rfc: fb.control('', []),
      nss: fb.control('', []),
      status: fb.control('', [Validators.required]),
    });
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  public onSubmit(): void {
    if (this.employeeFormGroup.invalid) {
      this.tValidation.validateAllFormFields(this.employeeFormGroup);
      return;
    }

    this.restApiService.post('employee/create', this.employeeFormGroup.value).subscribe(res => {
      this.dataExchange.sendValue({ created: true });
      this.dialogRef.close(res);
    });
  }
}
