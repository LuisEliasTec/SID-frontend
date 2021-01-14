import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IResponse } from 'src/app/ models/response.interface';
import { BREAKPOINT_LIST, VIEWPORT_BREAKPOINTS } from 'src/app/config/consts/breakpoints.const';
import { CustomerTypeEnum } from 'src/app/enums/customer-type.enum';
import { UserStatusEnum } from 'src/app/enums/user-status.enum';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { ToastService } from 'src/app/providers/toast-service/toast.service';
import { ValidationTriggerService } from 'src/app/providers/validation-trigger.service';

@Component({
  selector: 'app-create-medical-record',
  templateUrl: '../medical-record-dialog.component.html',
  styleUrls: ['../medical-record-dialog.component.scss'],
})
export class CreateMedicalRecordComponent {
  public createFormGroup: FormGroup;
  isIdIn = true;
  titleDialog = 'Nuevo paciente';
  customerTypeEnum = CustomerTypeEnum;
  userStatusEnum = UserStatusEnum;
  public actionSave = [];

  constructor(
    private fb: FormBuilder,
    public tValidation: ValidationTriggerService,
    private restApiService: RestApiService,
    public dialogRef: MatDialogRef<CreateMedicalRecordComponent>,
    private dataExchange: DialogDataExchange,
    private breakpointObserver: BreakpointObserver,
    private toastService: ToastService,
  ) {
    this.breakpointObserver.observe(BREAKPOINT_LIST).subscribe((res: BreakpointState) => {
      if (res.breakpoints[VIEWPORT_BREAKPOINTS.LG]) {
        this.dialogRef.updateSize('1000px');

      } else if (res.breakpoints[VIEWPORT_BREAKPOINTS.MD]) {
        this.dialogRef.updateSize('760px');
      }
    });
  }

  public onCancelButton(): void {
    this.dialogRef.close();
    this.dialogRef.updateSize();
  }

  public onSubmit(): void {
    if (this.createFormGroup.invalid) {
      this.tValidation.validateAllFormFields(this.createFormGroup);
      return;
    }

    this.restApiService.post('customer/create', this.createFormGroup.value).subscribe((res: IResponse) => {
      if (res.status === 201) {
        this.dataExchange.sendValue({ created: true });
        this.toastService.showSuccess();
        this.dialogRef.close(res);
      }
    });
  }

  public closeDialog(event: any): void {
    if (event === 'CLOSED') {
      this.dialogRef.close();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  inputTest(): void {
    this.actionSave = [...this.actionSave, true];
  }

  patientFormGroupOutput(event): void {
    console.log('formGroupOutput', event);
  }

  recordsFormGroupOutput(event): void {
    console.log('recordsformGroupOutput', event);
  }

  admissionHistoryformGroupOutput(event): void {
    console.log('admissionHistoryformGroupOutput', event);
  }

  treatmentformGroupOutput(event): void {
    console.log('treatmentformGroupOutput', event);
  }

  evolutionformGroupOutput(event): void {
    console.log('evolutionformGroupOutput', event);
  }
}
