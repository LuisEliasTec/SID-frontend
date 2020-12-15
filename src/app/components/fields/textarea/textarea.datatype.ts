import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'dt-textarea',
  template: `
  <textarea [(ngModel)]="value" class="{{ className }}" (blur)="onTouched()" name="{{ fieldName }}" placeholder="{{ placeHolder }}">
  </textarea>
  <error-validator [formControlInstance]="formControlInstance"></error-validator>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaDatatype),
      multi: true
    }
  ]
})
export class TextareaDatatype implements OnInit {
  @Input() fieldName: string;
  @Input() placeHolder: string;
  @Input() className = '';
  @Input() formControlInstance: FormControl;

  private val: string;
  public disabled: boolean;
  public isValid = false;

  ngOnInit(): void {
    this.className += ' form-control';
  }

  onChanged: any = () => { };
  onTouched: any = () => { };

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  set value(val) {
    this.val = val;
    this.onChanged(val);
  }

  get value(): string {
    return this.val;
  }
}
