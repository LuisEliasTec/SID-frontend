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
  selector: 'app-admission-history',
  templateUrl: './admission-history.component.html',
  styleUrls: ['./admission-history.component.scss'],
})

export class AdmissionHistoryComponent implements OnChanges {
  // Form groups
  public admissionHistoryFormGroup: FormGroup;

  // Input
  @Input() actionSaveInput: [];

  // Output
  @Output() admissionHistoryformGroupOutput = new EventEmitter<FormGroup>();

  constructor(
    private fb: FormBuilder,
    public tValidation: ValidationTriggerService,
    private restApiService: RestApiService,
    private dataExchange: DialogDataExchange,
    private breakpointObserver: BreakpointObserver,
    private toastService: ToastService) {
    this.admissionHistoryFormGroup = fb.group({
      currentCondition: new FormControl('', []),
      physicalExploration: new FormGroup({
        weight: new FormControl(''),
        measure: new FormControl(''),
        size: new FormControl(''),
        observations: new FormControl(''),
      }),
      diagnosticImpression: new FormControl(''),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.admissionHistoryformGroupOutput.emit(this.admissionHistoryFormGroup.value);
  }
}
