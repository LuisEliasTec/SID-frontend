import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { ValidationTriggerService } from 'src/app/providers/validation-trigger.service';

@Component({
  selector: 'app-vaccine-dialog',
  templateUrl: './vaccine-dialog.component.html',
  styleUrls: ['./vaccine-dialog.component.scss'],
})
export class VaccineDialogComponent implements OnInit {
  public vaccineFormGroup: FormGroup;
  isIdIn = true;
  titleDialog = '';
  meridian = true;

  constructor(
    private fb: FormBuilder,
    public tValidation: ValidationTriggerService,
    private restApiService: RestApiService,
    public dialogRef: MatDialogRef<VaccineDialogComponent>,
    private dataExchange: DialogDataExchange,
    @Inject(MAT_DIALOG_DATA) public injectionData: any,
  ) {
    this.vaccineFormGroup = fb.group({
      name: fb.control('', [Validators.required]),
      description: fb.control('', []),
    });
  }

  ngOnInit(): void {
    if (this.injectionData.id) {
      // Update
      this.titleDialog = 'Editar vacuna o inmunización';
      this.findVaccine(this.injectionData.id);
    } else {
      // Create
      this.titleDialog = 'Nueva vacuna o inmunización';
    }
  }

  findVaccine(id: string): void {
    this.restApiService.get('vaccine', id).subscribe(res => {
      if (res._data) {
        this.isIdIn = true;
        this.vaccineFormGroup.get('name').setValue(res._data.name);
        this.vaccineFormGroup.get('description').
          setValue(res._data.description);
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
    if (this.vaccineFormGroup.invalid) {
      this.tValidation.validateAllFormFields(this.vaccineFormGroup);
      return;
    }

    if (this.injectionData.id) {
      // Update
      this.restApiService.patch('vaccine', this.vaccineFormGroup.value,
        this.injectionData.id).subscribe(res => {
          this.dataExchange.sendValue({ updated: true });
          this.dialogRef.close(res);
        });
    } else {
      // Save
      this.restApiService.post('vaccine/create',
        this.vaccineFormGroup.value).subscribe(res => {
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
