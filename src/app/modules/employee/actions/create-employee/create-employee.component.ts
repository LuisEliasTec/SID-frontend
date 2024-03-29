import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { ValidationTriggerService } from 'src/app/providers/validation-trigger.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: '../employee-dialog.component.html',
})
export class CreateEmployeeComponent {
  public employeeFormGroup: FormGroup;
  isIdIn = true;
  titleDialog = 'Nuevo empleado';
  turns = [];
  jobTitles = [];

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
      address: new FormGroup({
        street: new FormControl('', [Validators.required]),
        interiorNumber: new FormControl('', []),
        exteriorNumber: new FormControl('', [Validators.required]),
        neighborhood: new FormControl('', []),
        city: new FormControl('', []),
        state: new FormControl('', []),
        country: new FormControl('', []),
        zipCode: new FormControl('', []),
      }),
      curp: fb.control('', []),
      rfc: fb.control('', []),
      nss: fb.control('', []),
      status: fb.control('', [Validators.required]),
      turn: fb.control('', [Validators.required]),
      jobTitle: fb.control('', [Validators.required])
    });
    this.getTurns();
    this.getJobTitles();
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

  getTurns(): void {
    this.restApiService.get('turn/list').subscribe((res) => {
      this.turns = res._data;
    });
  }

  getJobTitles(): void {
    this.restApiService.get('job-title/list').subscribe((res) => {
      this.jobTitles = res._data.data;
      console.log('jobTitles', res._data.data);
    });
  }
}
