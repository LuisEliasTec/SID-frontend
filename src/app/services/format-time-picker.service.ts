import { Injectable } from '@angular/core';
import { ITimePicker } from 'src/app/ models/time-picker.interface';

@Injectable()
export class FormatTimePickerService {

  constructor() { }

  setFormatObject(time: string): ITimePicker {
    const newTime = new Date(time);
    return {
      hour: newTime.getHours(),
      minute: newTime.getMinutes()
    };
  }

  setFormatDate(time: any): Date {
    const today = new Date();
    const newDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), time.hour, time.minute, 0);
    return new Date(newDate);
  }

}
