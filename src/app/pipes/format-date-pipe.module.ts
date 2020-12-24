import { NgModule } from "@angular/core";
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
moment.locale('es');

@Pipe({
    name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform{
    moment = moment;

    transform(val, args) {
        return moment(val).format(args);
    }
}

@NgModule({
    declarations: [FormatDatePipe],
    exports: [FormatDatePipe]
})
export class FormatDatePipeModule {}
