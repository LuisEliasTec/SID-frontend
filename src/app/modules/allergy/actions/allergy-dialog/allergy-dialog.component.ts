import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { ValidationTriggerService } from 'src/app/providers/validation-trigger.service';

@Component({
  selector: 'app-allergy-dialog',
  templateUrl: './allergy-dialog.component.html',
  styleUrls: ['./allergy-dialog.component.scss'],
})
export class AllergyDialogComponent implements OnInit {
  public allergyFormGroup: FormGroup;
  isIdIn = true;
  titleDialog = '';
  meridian = true;

  constructor(
    private fb: FormBuilder,
    public tValidation: ValidationTriggerService,
    private restApiService: RestApiService,
    public dialogRef: MatDialogRef<AllergyDialogComponent>,
    private dataExchange: DialogDataExchange,
    @Inject(MAT_DIALOG_DATA) public injectionData: any,
  ) {
    this.allergyFormGroup = fb.group({
      name: fb.control('', [Validators.required]),
      description: fb.control('', []),
    });
  }

  ngOnInit(): void {
    if (this.injectionData.id) {
      // Update
      this.titleDialog = 'Editar alergia';
      this.findAllergy(this.injectionData.id);
    } else {
      // Create
      this.titleDialog = 'Nueva alergia';
    }
  }

  findAllergy(id: string): void {
    this.restApiService.get('allergy', id).subscribe(res => {
      if (res._data) {
        this.isIdIn = true;
        this.allergyFormGroup.get('name').setValue(res._data.name);
        this.allergyFormGroup.get('description').setValue(res._data.description);
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
    if (this.allergyFormGroup.invalid) {
      this.tValidation.validateAllFormFields(this.allergyFormGroup);
      return;
    }

    if (this.injectionData.id) {
      // Update
      this.restApiService.patch('allergy', this.allergyFormGroup.value,
        this.injectionData.id).subscribe(res => {
          this.dataExchange.sendValue({ updated: true });
          this.dialogRef.close(res);
        });
    } else {
      // Save
      this.restApiService.post('allergy/create',
        this.allergyFormGroup.value).subscribe(res => {
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
