import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  BREAKPOINT_LIST,
  VIEWPORT_BREAKPOINTS,
} from 'src/app/config/consts/breakpoints.const';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { ToastService } from 'src/app/providers/toast-service/toast.service';
import { ValidationTriggerService } from 'src/app/providers/validation-trigger.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
})
export class UpdateUserComponent {
  public updateFormGroup: FormGroup;
  public isIdIn = false;
  public selectOptions = [
    { name: 'Activo', value: 'ACTIVE' },
    { name: 'Inactivo', value: 'INNACTIVE' },
  ];

  constructor(
    private fb: FormBuilder,
    public tValidation: ValidationTriggerService,
    private restApiService: RestApiService,
    public dialogRef: MatDialogRef<UpdateUserComponent>,
    private dataExchange: DialogDataExchange,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private breakpointObserver: BreakpointObserver,
    private toastService: ToastService
  ) {
    this.findUser(this.data.id);

    this.updateFormGroup = fb.group({
      status: fb.control('', [Validators.required]),
      role: fb.control(null, [Validators.required]),
    });

    this.breakpointObserver
      .observe(BREAKPOINT_LIST)
      .subscribe((res: BreakpointState) => {
        if (
          res.breakpoints[VIEWPORT_BREAKPOINTS.LG] ||
          res.breakpoints[VIEWPORT_BREAKPOINTS.XL]
        ) {
          this.dialogRef.updateSize('1000px');
        } else if (res.breakpoints[VIEWPORT_BREAKPOINTS.MD]) {
          this.dialogRef.updateSize('760px');
        }
      });
  }

  findUser(id: string): void {
    this.restApiService.get('user', id).subscribe((res) => {
      const { role, ...user } = res._data;
      const compUser = { ...user, role: role._id };

      if (res._data) {
        this.isIdIn = true;
        this.updateFormGroup.patchValue(compUser);
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
    if (this.updateFormGroup.invalid) {
      this.tValidation.validateAllFormFields(this.updateFormGroup);
      return;
    }

    this.restApiService
      .patch('user', this.updateFormGroup.value, this.data.id)
      .subscribe((res) => {
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
}
