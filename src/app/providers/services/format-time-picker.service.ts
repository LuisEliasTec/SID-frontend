import { Injectable } from '@angular/core';

@Injectable()
export class FormatTimePickerService {

    constructor() { }

    setFormatObject(time: String) {
        const splitted = time.split(':', 2);
        return {
            hour: parseInt(splitted[0], 10),
            minute: parseInt(splitted[1], 10)
        };
    }

    setFormatString(time: any) {
        return time.hour + ':' + time.minute;
    }

}
