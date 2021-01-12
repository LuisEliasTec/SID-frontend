import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { IResponse } from 'src/app/ models/response.interface';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],
})
export class RoleListComponent implements OnDestroy {
  roleList: any[] = [];
  @Output() selectedItem = new EventEmitter<any>(true);
  subscription: Subscription;

  constructor(
    private restApiService: RestApiService,
    private dataExchangeService: DialogDataExchange
  ) {
    this.subscription = this.dataExchangeService.getMessage().subscribe((res) => {
      if (res.updated || res.created) {
        this.getRoles();
      }
    });

    this.getRoles();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changed(item): void {
    this.selectedItem.emit(item);
  }

  getRoles(): void {
    this.restApiService.get('role/list').subscribe((res: IResponse) => {
      this.roleList = res._data;

      if (res._data.length > 0) {
        this.dataExchangeService.sendValue(true);
        this.selectedItem.emit(res._data[0]);
      } else {
        this.dataExchangeService.sendValue(false);
      }
    });
  }
}
