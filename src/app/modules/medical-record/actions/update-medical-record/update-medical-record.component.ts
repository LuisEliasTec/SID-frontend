import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BREAKPOINT_LIST, VIEWPORT_BREAKPOINTS } from 'src/app/config/consts/breakpoints.const';
import { CustomerTypeEnum } from 'src/app/enums/customer-type.enum';
import { UserStatusEnum } from 'src/app/enums/user-status.enum';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { ToastService } from 'src/app/providers/toast-service/toast.service';
import { ValidationTriggerService } from 'src/app/providers/validation-trigger.service';

@Component({
  selector: 'app-update-medical-record',
  templateUrl: './update.component.html',
  styleUrls: ['../medical-record-dialog.component.scss'],
})
export class UpdateMedicalRecordComponent {
  public patientFormGroup: FormGroup;
  public isIdIn = false;
  titleDialog = 'Editar paciente';
  customerTypeEnum = CustomerTypeEnum;
  userStatusEnum = UserStatusEnum;

  constructor(
    private fb: FormBuilder,
    public tValidation: ValidationTriggerService,
    private restApiService: RestApiService,
    public dialogRef: MatDialogRef<UpdateMedicalRecordComponent>,
    private dataExchange: DialogDataExchange,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private breakpointObserver: BreakpointObserver,
    private toastService: ToastService,
  ) {
    this.findPatient(this.data.id);

    this.patientFormGroup = fb.group({
      name: fb.control('', [Validators.required]),
      firstName: fb.control('', [Validators.required]),
      secondName: fb.control('', [Validators.required]),
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
      status: fb.control(this.userStatusEnum.ACTIVE, [Validators.required]),
      taxInformation: new FormGroup({
        businessName: new FormControl('', []),
        rfc: new FormControl('', []),
        curp: new FormControl('', []),
        street: new FormControl('', []),
        interiorNumber: new FormControl('', []),
        exteriorNumber: new FormControl('', []),
        neighborhood: new FormControl('', []),
        city: new FormControl('', []),
        location: new FormControl('', []),
        state: new FormControl('', []),
        country: new FormControl('', []),
        zipCode: new FormControl('', []),
      }),
      customerType: new FormControl(this.customerTypeEnum.PATIENT, []),
      surgeryHistory: new FormControl('', []),
      nonSurgeryHistory: new FormControl('', []),
    });

    this.breakpointObserver.observe(BREAKPOINT_LIST).subscribe((res: BreakpointState) => {
      if (res.breakpoints[VIEWPORT_BREAKPOINTS.LG] || res.breakpoints[VIEWPORT_BREAKPOINTS.XL]) {
        this.dialogRef.updateSize('1000px');

      } else if (res.breakpoints[VIEWPORT_BREAKPOINTS.MD]) {
        this.dialogRef.updateSize('760px');
      }
    });
  }

  findPatient(id: string): void {
    this.restApiService.get('customer', id).subscribe(res => {
      if (res._data) {
        this.isIdIn = true;
        this.patientFormGroup.get('name').setValue(res._data.name);
        this.patientFormGroup.get('firstName').setValue(res._data.firstName);
        this.patientFormGroup.get('secondName').setValue(res._data.secondName);
        this.patientFormGroup.get('birthDate').setValue(res._data.birthDate);
        this.patientFormGroup.get('phoneNumber').setValue(res._data.phoneNumber);
        this.patientFormGroup.get('optionalPhoneNumber').setValue(res._data.optionalPhoneNumber);
        this.patientFormGroup.get('email').setValue(res._data.email);
        this.patientFormGroup.get('address.street').setValue(res._data.address.street);
        this.patientFormGroup.get('address.interiorNumber').setValue(res._data.address.interiorNumber);
        this.patientFormGroup.get('address.exteriorNumber').setValue(res._data.address.exteriorNumber);
        this.patientFormGroup.get('address.neighborhood').setValue(res._data.address.neighborhood);
        this.patientFormGroup.get('address.city').setValue(res._data.address.city);
        this.patientFormGroup.get('address.state').setValue(res._data.address.state);
        this.patientFormGroup.get('address.country').setValue(res._data.address.country);
        this.patientFormGroup.get('address.zipCode').setValue(res._data.address.zipCode);
        this.patientFormGroup.get('curp').setValue(res._data.curp);
        this.patientFormGroup.get('rfc').setValue(res._data.rfc);
        this.patientFormGroup.get('status').setValue(res._data.status);
        this.patientFormGroup.get('taxInformation.businessName').setValue(res._data.taxInformation.businessName);
        this.patientFormGroup.get('taxInformation.rfc').setValue(res._data.taxInformation.rfc);
        this.patientFormGroup.get('taxInformation.curp').setValue(res._data.taxInformation.curp);
        this.patientFormGroup.get('taxInformation.street').setValue(res._data.taxInformation.street);
        this.patientFormGroup.get('taxInformation.interiorNumber').setValue(res._data.taxInformation.interiorNumber);
        this.patientFormGroup.get('taxInformation.exteriorNumber').setValue(res._data.taxInformation.exteriorNumber);
        this.patientFormGroup.get('taxInformation.neighborhood').setValue(res._data.taxInformation.neighborhood);
        this.patientFormGroup.get('taxInformation.city').setValue(res._data.taxInformation.city);
        this.patientFormGroup.get('taxInformation.location').setValue(res._data.taxInformation.location);
        this.patientFormGroup.get('taxInformation.state').setValue(res._data.taxInformation.state);
        this.patientFormGroup.get('taxInformation.country').setValue(res._data.taxInformation.country);
        this.patientFormGroup.get('taxInformation.zipCode').setValue(res._data.taxInformation.zipCode);
      } else {
        this.isIdIn = false;
        this.dialogRef.close(true);
      }
    });
  }

  onCancelButton(): void {
    this.dialogRef.close();
  }

  public onSubmit(): void {
    if (this.patientFormGroup.invalid) {
      this.tValidation.validateAllFormFields(this.patientFormGroup);
      return;
    }

    this.restApiService.patch('user', this.patientFormGroup.value, this.data.id).subscribe(res => {

      if (res.status === 201) {
        this.dataExchange.sendValue({ updated: true });
        this.dialogRef.close(res);
        this.toastService.showSuccess();
      }
    });
  }

  public closeDialog(event: any): void {
    if (event === 'CLOSED') {
      this.dialogRef.close();
    }
  }

  test(): void {
    console.log('patient form group', this.patientFormGroup.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
