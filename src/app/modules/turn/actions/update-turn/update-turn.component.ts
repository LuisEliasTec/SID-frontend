import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { FormatTimePickerService } from 'src/app/services/format-time-picker.service';
import { ValidationTriggerService } from 'src/app/providers/validation-trigger.service';

@Component({
  selector: 'app-update-turn',
  templateUrl: '../turn-dialog.component.html',
})
export class UpdateTurnComponent {
  public turnFormGroup: FormGroup;
  public isIdIn = false;
  titleDialog = 'Editar empleado';
  meridian = true;

  constructor(
    private fb: FormBuilder,
    public tValidation: ValidationTriggerService,
    private restApiService: RestApiService,
    public dialogRef: MatDialogRef<UpdateTurnComponent>,
    private dataExchange: DialogDataExchange,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formatTimePickerService: FormatTimePickerService
  ) {
    this.findEmployee(this.data.id);

    this.turnFormGroup = fb.group({
      name: fb.control('', [Validators.required]),
      startHour: fb.control('', [Validators.required]),
      endHour: fb.control('', [Validators.required]),
    });
  }

  findEmployee(id: string): void {
    this.restApiService.get('turn', id).subscribe(res => {
      if (res._data) {
        this.isIdIn = true;
        this.turnFormGroup.get('name').setValue(res._data.name);
        this.turnFormGroup.get('startHour').setValue(this.formatTimePickerService.setFormatObject(res._data.startHour));
        this.turnFormGroup.get('endHour').setValue(this.formatTimePickerService.setFormatObject(res._data.endHour));
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
    if (this.turnFormGroup.invalid) {
      this.tValidation.validateAllFormFields(this.turnFormGroup);
      return;
    }
    const startHourTemp1 = this.turnFormGroup.get('startHour').value;
    const endtHourTem2 = this.turnFormGroup.get('endHour').value;
    this.turnFormGroup.get('startHour').setValue(this.formatTimePickerService.setFormatDate(startHourTemp1));
    this.turnFormGroup.get('endHour').setValue(this.formatTimePickerService.setFormatDate(endtHourTem2));

    this.restApiService.patch('turn', this.turnFormGroup.value, this.data.id).subscribe(res => {
      this.dataExchange.sendValue({ updated: true });
      this.dialogRef.close(res);
    });
  }
}
