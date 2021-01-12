import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';

@Component({
  selector: 'app-roles-select',
  template: `
    <ng-select
      [items]="roles$ | async"
      bindLabel="name"
      autofocus
      bindValue="_id"
      (change)="sendValue($event)"
      [placeholder]="setPlaceHolder"
    >
    </ng-select>
  `,
})
export class RolesSelectComponent {
  public roles$: Observable<any[]>;
  @Input() setPlaceHolder: string;
  @Output() selectedValue = new EventEmitter<any>();

  constructor(private restApiService: RestApiService) {
    this.roles$ = restApiService.get('role/list').pipe(
      map((e) => {
        return e._data;
      })
    );
  }

  sendValue(item: any): void {
    this.selectedValue.emit(item);
  }
}
