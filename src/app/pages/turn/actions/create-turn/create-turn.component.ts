import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { FormatTimePickerService } from 'src/app/providers/services/format-time-picker.service';
import { ValidationTriggerService } from 'src/app/providers/validation-trigger.service';

@Component({
  selector: 'app-create-turn',
  templateUrl: '../turn-dialog.component.html',
})
export class CreateTurnComponent {
  public turnFormGroup: FormGroup;
  isIdIn = true;
  titleDialog = 'Nuevo turno';
  meridian = true;

  constructor(
    private fb: FormBuilder,
    public tValidation: ValidationTriggerService,
    private restApiService: RestApiService,
    public dialogRef: MatDialogRef<CreateTurnComponent>,
    private dataExchange: DialogDataExchange,
    private formatTimePickerService: FormatTimePickerService
  ) {
    this.turnFormGroup = fb.group({
      name: fb.control('', [Validators.required]),
      startHour: fb.control('', [Validators.required]),
      endHour: fb.control('', [Validators.required]),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public onSubmit(): void {
    if (this.turnFormGroup.invalid) {
      this.tValidation.validateAllFormFields(this.turnFormGroup);
      return;
    }

    const formDataTemp = this.turnFormGroup.value;
    formDataTemp.startHour = this.formatTimePickerService.setFormatDate(formDataTemp.startHour);
    formDataTemp.endHour = this.formatTimePickerService.setFormatDate(formDataTemp.endHour);

    this.restApiService.post('turn/create', this.turnFormGroup.value).subscribe(res => {
      this.dataExchange.sendValue({ created: true });
      this.dialogRef.close(res);
    });
  }
}
