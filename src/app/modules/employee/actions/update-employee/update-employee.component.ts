import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { ValidationTriggerService } from 'src/app/providers/validation-trigger.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: '../employee-dialog.component.html',
})
export class UpdateEmployeeComponent {
  public employeeFormGroup: FormGroup;
  public isIdIn = false;
  titleDialog = 'Editar empleado';
  public turns = [];
  public jobTitles = [];
  constructor(
    private fb: FormBuilder,
    public tValidation: ValidationTriggerService,
    private restApiService: RestApiService,
    public dialogRef: MatDialogRef<UpdateEmployeeComponent>,
    private dataExchange: DialogDataExchange,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.findEmployee(this.data.id);
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
      turn: fb.control('', []),
      jobTitle: fb.control('', [Validators.required])
    });
    this.getTurns();
    this.getJobTitles();
  }

  findEmployee(id: string): void {
    this.restApiService.get('employee', id).subscribe(res => {
      if (res._data) {
        this.isIdIn = true;
        this.employeeFormGroup.get('name').setValue(res._data.name);
        this.employeeFormGroup.get('birthDate').setValue(res._data.birthDate);
        this.employeeFormGroup.get('phoneNumber').setValue(res._data.phoneNumber);
        this.employeeFormGroup.get('optionalPhoneNumber').setValue(res._data.optionalPhoneNumber);
        this.employeeFormGroup.get('email').setValue(res._data.email);
        this.employeeFormGroup.get('address.street').setValue(res._data.address.street);
        this.employeeFormGroup.get('address.interiorNumber').setValue(res._data.address.interiorNumber);
        this.employeeFormGroup.get('address.exteriorNumber').setValue(res._data.address.exteriorNumber);
        this.employeeFormGroup.get('address.neighborhood').setValue(res._data.address.neighborhood);
        this.employeeFormGroup.get('address.city').setValue(res._data.address.city);
        this.employeeFormGroup.get('address.state').setValue(res._data.address.state);
        this.employeeFormGroup.get('address.country').setValue(res._data.address.country);
        this.employeeFormGroup.get('address.zipCode').setValue(res._data.address.zipCode);
        this.employeeFormGroup.get('curp').setValue(res._data.curp);
        this.employeeFormGroup.get('rfc').setValue(res._data.rfc);
        this.employeeFormGroup.get('nss').setValue(res._data.nss);
        this.employeeFormGroup.get('turn').setValue(res._data.turn);
        this.employeeFormGroup.get('jobTitle').setValue(res._data.jobTitle);
        this.employeeFormGroup.get('status').setValue(res._data.status);
      } else {
        this.isIdIn = false;
        this.dialogRef.close(true);
      }
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

    this.restApiService.patch('employee', this.employeeFormGroup.value, this.data.id).subscribe(res => {
      this.dataExchange.sendValue({ updated: true });
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
    });
  }
}
