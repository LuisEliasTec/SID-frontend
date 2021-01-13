import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { IResponse } from 'src/app/ models/response.interface';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { ToastService } from 'src/app/providers/toast-service/toast.service';
import { ValidationTriggerService } from 'src/app/providers/validation-trigger.service';

@Component({
  selector: 'app-add-permission',
  templateUrl: './add-permission.component.html',
  styleUrls: ['./add-permission.component.scss'],
})
export class AddPermissionComponent {
  public permissionList$: Observable<any>;
  public formGroup: FormGroup;
  private role: any;

  constructor(
    public dialogRef: MatDialogRef<AddPermissionComponent>,
    public tValidation: ValidationTriggerService,
    private fb: FormBuilder,
    private restApiService: RestApiService,
    private dataExchange: DialogDataExchange,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formGroup = fb.group({
      permissions: fb.array([]),
      module: fb.control(''),
    });

    this.permissionList$ = restApiService.get('role', data.roleId).pipe(
      concatMap((role) => {
        this.role = role._data;
        return this.restApiService.get('role/permission/list/' + data.module);
      }),
      map((e) => {
        this.formGroup.get('module').setValue(data.module);

        e._data.forEach((item: any) => {
          let isThereThePermission = false;

          if (this.role.permissions.includes(item._id)) {
            isThereThePermission = item;
          }
          (this.formGroup.get('permissions') as FormArray).push(
            new FormControl(isThereThePermission)
          );
        });
        return e._data;
      })
    );
  }

  changedValue(index: number, permission: any, event: any): void {
    if (event.checked) {
      (this.formGroup.get('permissions') as FormArray)
        .get([index])
        .setValue(permission);
    } else {
      (this.formGroup.get('permissions') as FormArray)
        .get([index])
        .setValue(false);
    }
  }

  public onSubmit(): void {
    this.restApiService
      .patch('role/add/permission', this.formGroup.value, this.data.roleId)
      .subscribe((res: IResponse) => {
        if (res.status === 201) {
          this.toastService.showToast(
            'Atención!',
            'La acción fué hecha con éxito.'
          );
        } else {
          this.toastService.showToast(
            'Ocurrió ',
            'Ocurrió un error en la acción',
            true
          );
        }

        this.closeDialog('CLOSED');
      });
  }

  closeDialog(event: any): void {
    if (event === 'CLOSED') {
      this.dialogRef.close();
    }
  }
}
