import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { ValidationTriggerService } from 'src/app/providers/validation-trigger.service';

@Component({
  selector: 'app-update-job-title',
  templateUrl: '../job-title-dialog.component.html',
})
export class UpdateJobTitleComponent {
  public jobTitleFormGroup: FormGroup;
  public isIdIn = false;
  titleDialog = 'Editar puesto laboral';
  meridian = true;

  constructor(
    private fb: FormBuilder,
    public tValidation: ValidationTriggerService,
    private restApiService: RestApiService,
    public dialogRef: MatDialogRef<UpdateJobTitleComponent>,
    private dataExchange: DialogDataExchange,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.findEmployee(this.data.id);

    this.jobTitleFormGroup = fb.group({
      name: fb.control('', [Validators.required]),
      description: fb.control('', [Validators.required]),
    });
  }

  findEmployee(id: string): void {
    this.restApiService.get('job-title', id).subscribe(res => {
      if (res._data) {
        this.isIdIn = true;
        this.jobTitleFormGroup.get('name').setValue(res._data.name);
        this.jobTitleFormGroup.get('description').setValue(res._data.description);
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
    if (this.jobTitleFormGroup.invalid) {
      this.tValidation.validateAllFormFields(this.jobTitleFormGroup);
      return;
    }

    this.restApiService.patch('job-title', this.jobTitleFormGroup.value, this.data.id).subscribe(res => {
      this.dataExchange.sendValue({ updated: true });
      this.dialogRef.close(res);
    });
  }
}
