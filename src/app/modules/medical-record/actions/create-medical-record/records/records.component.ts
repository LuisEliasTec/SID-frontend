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
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
})

export class RecordsComponent implements OnChanges {
  // Form groups
  public recordsFormGroup: FormGroup;
  public personalPathologicalHistoryFormGroup: FormGroup;

  // Enums
  customerTypeEnum = CustomerTypeEnum;
  userStatusEnum = UserStatusEnum;

  // Input
  @Input() actionSaveInput: [];

  // Output
  @Output() recordsformGroupOutput = new EventEmitter<FormGroup>();

  constructor(
    private fb: FormBuilder,
    public tValidation: ValidationTriggerService,
    private restApiService: RestApiService,
    private dataExchange: DialogDataExchange,
    private breakpointObserver: BreakpointObserver,
    private toastService: ToastService) {
    this.recordsFormGroup = fb.group({
      surgeryHistory: new FormGroup({
        surgery: new FormControl('', []),
        lastSurgeryDate: new FormControl('', []),
        reason: new FormControl('', []),
        outcome: new FormControl('', []),
        observations: new FormControl('')
      }),
      nonSurgeryHistory: new FormGroup({
        vaccinations: new FormControl('', []),
        alcoholism: new FormControl(false, []),
        smoking: new FormControl(false, []),
        drugs: new FormControl(false, []),
        otherBadHabits: new FormControl('', []),
        allergies: new FormControl('', []),
        currentMedications: new FormControl('', []),
        nutrition: new FormControl('', []),
        physicalActivity: new FormGroup({
          // sedentary: new FormControl('1', []),
          // activeIrregular: new FormControl('2', []),
          // activeRegular: new FormControl('3', []),
          // active: new FormControl('4', []),
          options: new FormControl('')
        }),
        bloodTransfusions: new FormControl(false),
        observations: new FormControl(''),
      }),
      personalPathologicalHistory: new FormGroup({
        data: new FormControl(''),
        observations: new FormControl(''),
      }),
      obstetricGynecologicalHistory: new FormGroup({
        monarch: new FormControl(false),
        menopause: new FormControl(false),
        dysmenorrhea: new FormControl(false),
        dyspareunia: new FormControl(false),
        typeMenstrualCicle: new FormControl(''),
        numberOfFeats: new FormControl(''),
        numberOfAbortions: new FormControl(''),
        numberOfDeliveries: new FormControl(''),
        numberOfCaesareanSections: new FormControl(''),
        dateLastProcedure: new FormControl(''),
        observations: new FormControl(''),
      })
    });

    this.personalPathologicalHistoryFormGroup = fb.group({
      disease: new FormControl(''),
      startDate: new FormControl(''),
      currentTreatment: new FormControl('')
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.recordsformGroupOutput.emit(this.recordsFormGroup.value);
  }
}
