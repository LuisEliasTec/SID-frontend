import { NgModule } from "@angular/core";
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
moment.locale('es');

@Pipe({
    name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {
    moment = moment;

    transform(val, args) {
        const time = moment(val, 'HH:mm');
        return moment(time).format(args)
    }
}

@NgModule({
    declarations: [FormatTimePipe],
    exports: [FormatTimePipe]
})
export class FormatTimePipeModule { }
