import { NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatus'
})
export class UserStatusPipe implements PipeTransform {

  transform(val: string, args: any): string {

    if (val === 'ACTIVE') {
      return 'Activo';
    } else if (val === 'INNACTIVE') {
      return 'Inactivo';
    }
  }
}

@NgModule({
  declarations: [UserStatusPipe],
  exports: [UserStatusPipe]
})
export class UserStatusPipeModule { }
