import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { ValidationTriggerService } from 'src/app/providers/validation-trigger.service';

@Component({
  selector: 'app-create-job-title',
  templateUrl: '../job-title-dialog.component.html',
})
export class CreateJobTitleComponent {
  public jobTitleFormGroup: FormGroup;
  isIdIn = true;
  titleDialog = 'Nuevo puesto laboral';
  meridian = true;

  constructor(
    private fb: FormBuilder,
    public tValidation: ValidationTriggerService,
    private restApiService: RestApiService,
    public dialogRef: MatDialogRef<CreateJobTitleComponent>,
    private dataExchange: DialogDataExchange,
  ) {
    this.jobTitleFormGroup = fb.group({
      name: fb.control('', [Validators.required]),
      description: fb.control('', []),
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

    this.restApiService.post('job-title/create', this.jobTitleFormGroup.value).subscribe(res => {
      this.dataExchange.sendValue({ created: true });
      this.dialogRef.close(res);
    });
  }
}
