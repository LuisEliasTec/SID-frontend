import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IResponse } from 'src/app/ models/response.interface';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { ToastService } from 'src/app/providers/toast-service/toast.service';
import { ValidationTriggerService } from 'src/app/providers/validation-trigger.service';

@Component({
  templateUrl: './update-role.component.html',
})
export class UpdateRoleComponent {
  createFormGroup: FormGroup;
  formData: Observable<any>;

  constructor(
    public dialogRef: MatDialogRef<UpdateRoleComponent>,
    public tValidation: ValidationTriggerService,
    private fb: FormBuilder,
    private restApiService: RestApiService,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataExchangeService: DialogDataExchange,
  ) {
    this.createFormGroup = fb.group({
      name: fb.control('', [Validators.required]),
      description: fb.control(''),
    });

    this.formData = restApiService.get('role', this.data.roleId).pipe(
      map((e) => {
        this.createFormGroup.patchValue(e._data);
        return e;
      })
    );
  }

  closeDialog(event: any): void {
    if (event === 'CLOSED') {
      this.dialogRef.close({ updated: false });
    }
  }

  public onCancelButton(): void {
    this.dialogRef.close({ updated: false });
    this.dialogRef.updateSize();
  }

  onSubmit(): void {
    if (this.createFormGroup.invalid) {
      this.tValidation.validateAllFormFields(this.createFormGroup);
      return;
    }

    this.restApiService
      .patch('role', this.createFormGroup.value, this.data.roleId)
      .subscribe((res: IResponse) => {
        if (res.status === 201) {
          this.toastService.showSuccess();
          this.dialogRef.close(res);
          this.dataExchangeService.sendValue({ updated: true });
        }
      });
  }
}
