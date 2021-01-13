import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { IResponse } from 'src/app/ models/response.interface';
import {
  BREAKPOINT_LIST,
  VIEWPORT_BREAKPOINTS,
} from 'src/app/config/consts/breakpoints.const';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { ToastService } from 'src/app/providers/toast-service/toast.service';
import { ValidationTriggerService } from 'src/app/providers/validation-trigger.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
})
export class CreateUserComponent {
  public createFormGroup: FormGroup;
  public selectOptions = [
    { name: 'Activo', value: 'ACTIVE' },
    { name: 'Inactivo', value: 'INNACTIVE' },
  ];

  constructor(
    private fb: FormBuilder,
    public tValidation: ValidationTriggerService,
    private restApiService: RestApiService,
    public dialogRef: MatDialogRef<CreateUserComponent>,
    private dataExchange: DialogDataExchange,
    private breakpointObserver: BreakpointObserver,
    private toastService: ToastService
  ) {
    this.createFormGroup = fb.group({
      userName: fb.control('', [Validators.required]),
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', [Validators.required]),
      confirmPassword: fb.control('', [
        RxwebValidators.compare({ fieldName: 'password' }),
        Validators.required,
      ]),
      status: fb.control(null, [Validators.required]),
      role: fb.control(null, [Validators.required]),
    });

    this.breakpointObserver
      .observe(BREAKPOINT_LIST)
      .subscribe((res: BreakpointState) => {
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

    this.restApiService
      .post('user/create', this.createFormGroup.value)
      .subscribe((res: IResponse) => {
        if (res.status === 201) {
          this.dataExchange.sendValue({ created: true });
          this.toastService.showToast(
            'Éxito',
            'Acción realizada correctamente'
          );
          this.dialogRef.close(res);
        } else {
          this.toastService.showToast(
            'Error',
            'Ocurrió un error en la petición',
            true
          );
        }
      });
  }

  public closeDialog(event: any): void {
    if (event === 'CLOSED') {
      this.dialogRef.close();
    }
  }
}
