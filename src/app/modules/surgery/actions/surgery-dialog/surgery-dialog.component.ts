import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { ValidationTriggerService } from 'src/app/providers/validation-trigger.service';

@Component({
  selector: 'app-surgery-dialog',
  templateUrl: './surgery-dialog.component.html',
  styleUrls: ['./surgery-dialog.component.scss'],
})
export class SurgeryDialogComponent implements OnInit {
  public surgeryFormGroup: FormGroup;
  isIdIn = true;
  titleDialog = '';
  meridian = true;

  constructor(
    private fb: FormBuilder,
    public tValidation: ValidationTriggerService,
    private restApiService: RestApiService,
    public dialogRef: MatDialogRef<SurgeryDialogComponent>,
    private dataExchange: DialogDataExchange,
    @Inject(MAT_DIALOG_DATA) public injectionData: any,
  ) {
    this.surgeryFormGroup = fb.group({
      name: fb.control('', [Validators.required]),
      description: fb.control('', []),
    });
  }

  ngOnInit(): void {
    if (this.injectionData.id) {
      // Update
      this.titleDialog = 'Editar cirugía';
      this.findSurgery(this.injectionData.id);
    } else {
      // Create
      this.titleDialog = 'Nueva cirugía';
    }
  }

  findSurgery(id: string): void {
    this.restApiService.get('surgery', id).subscribe(res => {
      if (res._data) {
        this.isIdIn = true;
        this.surgeryFormGroup.get('name').setValue(res._data.name);
        this.surgeryFormGroup.get('description').setValue(res._data.description);
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
    if (this.surgeryFormGroup.invalid) {
      this.tValidation.validateAllFormFields(this.surgeryFormGroup);
      return;
    }

    if (this.injectionData.id) {
      // Update
      this.restApiService.patch('surgery', this.surgeryFormGroup.value,
        this.injectionData.id).subscribe(res => {
          this.dataExchange.sendValue({ updated: true });
          this.dialogRef.close(res);
        });
    } else {
      // Save
      this.restApiService.post('surgery/create',
        this.surgeryFormGroup.value).subscribe(res => {
          this.dataExchange.sendValue({ created: true });
          this.dialogRef.close(res);
        });
    }
  }

  public closeDialog(event: any): void {
    if (event === 'CLOSED') {
      this.dialogRef.close();
    }
  }

}
