import { NgModule } from "@angular/core";
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'translationUserStatus'
})
export class TranslationUserStatusPipe implements PipeTransform {

    transform(val, args) {

        if (val === 'ACTIVE') {
            return 'Activo';
        } else if (val === 'INNACTIVE') {
            return 'Inactivo';
        }
    }
}

@NgModule({
    declarations: [TranslationUserStatusPipe],
    exports: [TranslationUserStatusPipe]
})
export class TranslationUserStatusPipeModule { }
