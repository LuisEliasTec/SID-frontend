import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Console } from 'console';
import { IResponse } from 'src/app/ models/response.interface';
import { BREAKPOINT_LIST, VIEWPORT_BREAKPOINTS } from 'src/app/config/consts/breakpoints.const';
import { CustomerTypeEnum } from 'src/app/enums/customer-type.enum';
import { UserStatusEnum } from 'src/app/enums/user-status.enum';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { ToastService } from 'src/app/providers/toast-service/toast.service';
import { ValidationTriggerService } from 'src/app/providers/validation-trigger.service';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss'],
})

export class GeneralInformationComponent implements OnChanges{
  // Form groups
  public patientFormGroup: FormGroup;

  // Enums
  customerTypeEnum = CustomerTypeEnum;
  userStatusEnum = UserStatusEnum;

  // Input
  @Input() actionSaveInput: [];

  // Output
  @Output() patientformGroupOutput = new EventEmitter<FormGroup>();

  constructor(
    private fb: FormBuilder,
    public tValidation: ValidationTriggerService,
    private restApiService: RestApiService,
    private dataExchange: DialogDataExchange,
    private breakpointObserver: BreakpointObserver,
    private toastService: ToastService) {
    this.patientFormGroup = fb.group({
      name: fb.control('', [Validators.required]),
      firstName: fb.control('', [Validators.required]),
      secondName: fb.control('', [Validators.required]),
      birthDate: fb.control('', [Validators.required]),
      phoneNumber: fb.control('', [Validators.required]),
      optionalPhoneNumber: fb.control('', []),
      email: fb.control('', [Validators.required, Validators.email]),
      address: new FormGroup({
        street: new FormControl('', [Validators.required]),
        interiorNumber: new FormControl('', []),
        exteriorNumber: new FormControl('', [Validators.required]),
        neighborhood: new FormControl('', []),
        city: new FormControl('', []),
        state: new FormControl('', []),
        country: new FormControl('', []),
        zipCode: new FormControl('', []),
      }),
      curp: fb.control('', []),
      rfc: fb.control('', []),
      status: fb.control(this.userStatusEnum.ACTIVE, [Validators.required]),
      taxInformation: new FormGroup({
        businessName: new FormControl('', []),
        rfc: new FormControl('', []),
        curp: new FormControl('', []),
        street: new FormControl('', []),
        interiorNumber: new FormControl('', []),
        exteriorNumber: new FormControl('', []),
        neighborhood: new FormControl('', []),
        city: new FormControl('', []),
        location: new FormControl('', []),
        state: new FormControl('', []),
        country: new FormControl('', []),
        zipCode: new FormControl('', []),
      }),
      customerType: new FormControl(this.customerTypeEnum.PATIENT, [])
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.patientformGroupOutput.emit(this.patientFormGroup.value);
  }
}
