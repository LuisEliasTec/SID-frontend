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
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['./evolution.component.scss'],
})

export class EvolutionComponent implements OnChanges {
  // Form groups
  public evolutionFormGroup: FormGroup;

  // Input
  @Input() actionSaveInput: [];

  // Output
  @Output() evolutionformGroupOutput = new EventEmitter<FormGroup>();

  // Booleans
  meridian = true;

  constructor(
    private fb: FormBuilder,
    public tValidation: ValidationTriggerService,
    private restApiService: RestApiService,
    private dataExchange: DialogDataExchange,
    private breakpointObserver: BreakpointObserver,
    private toastService: ToastService) {
    this.evolutionFormGroup = fb.group({
      appointmentDate: new FormControl(''),
      appointmentHour: new FormControl(''),
      observations: new FormControl(''),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.evolutionformGroupOutput.emit(this.evolutionFormGroup.value);
  }
}
