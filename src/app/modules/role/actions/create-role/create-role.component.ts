import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IResponse } from 'src/app/ models/response.interface';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { ToastService } from 'src/app/providers/toast-service/toast.service';
import { ValidationTriggerService } from 'src/app/providers/validation-trigger.service';

@Component({
  templateUrl: './create-role.component.html',
})
export class CreateRoleComponent {
  createFormGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateRoleComponent>,
    public tValidation: ValidationTriggerService,
    private fb: FormBuilder,
    private restApiService: RestApiService,
    private dataExchange: DialogDataExchange,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.createFormGroup = fb.group({
      name: fb.control('', [Validators.required]),
      description: fb.control(''),
    });
  }

  closeDialog(event: any): void {
    if (event === 'CLOSED') {
      this.dialogRef.close();
    }
  }

  public onCancelButton(): void {
    this.dialogRef.close();
    this.dialogRef.updateSize();
  }

  onSubmit(): void {
    if (this.createFormGroup.invalid) {
      this.tValidation.validateAllFormFields(this.createFormGroup);
      return;
    }

    this.restApiService
      .post('role/create', this.createFormGroup.value)
      .subscribe((res: IResponse) => {
        if (res.status === 201) {
          this.dataExchange.sendValue({ created: true });
          this.toastService.showSuccess();
          this.dialogRef.close(res);
        }
      });
  }
}
