import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { VIEWPORT_BREAKPOINTS } from 'src/app/config/consts/breakpoints.const';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { ValidationTriggerService } from 'src/app/providers/validation-trigger.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
})
export class CreateUserComponent {
  public createFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    public tValidation: ValidationTriggerService,
    private restApiService: RestApiService,
    public dialogRef: MatDialogRef<CreateUserComponent>,
    private dataExchange: DialogDataExchange,
    private breakpointObserver: BreakpointObserver,
  ) {
    this.createFormGroup = fb.group({
      userName: fb.control('', [Validators.required]),
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', [Validators.required]),
      confirmPassword: fb.control('', [RxwebValidators.compare({ fieldName: 'password' }), Validators.required]),
      status: fb.control('', [Validators.required]),
    });


    this.breakpointObserver.observe([
      VIEWPORT_BREAKPOINTS.SM,
      VIEWPORT_BREAKPOINTS.MD,
      VIEWPORT_BREAKPOINTS.LG,
      VIEWPORT_BREAKPOINTS.XL,
    ]).subscribe((res: BreakpointState) => {
      if (res.breakpoints[VIEWPORT_BREAKPOINTS.LG]) {
        this.dialogRef.updateSize('1000px');

      } else if (res.breakpoints[VIEWPORT_BREAKPOINTS.MD]) {
        this.dialogRef.updateSize('760px');
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.dialogRef.updateSize()
  }

  public onSubmit(): void {
    if (this.createFormGroup.invalid) {
      this.tValidation.validateAllFormFields(this.createFormGroup);
      return;
    }

    this.restApiService.post('user/create', this.createFormGroup.value).subscribe(res => {
      this.dataExchange.sendValue({ created: true });
      this.dialogRef.close(res);
    });
  }
}
