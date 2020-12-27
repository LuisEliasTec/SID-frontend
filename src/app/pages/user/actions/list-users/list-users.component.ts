import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, from, Subscription, } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { IResponse } from 'src/app/ models/response.interface';
import { IUser } from 'src/app/ models/user.interface';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { SweetAlertService } from 'src/app/providers/sweet-alert/sweet-alert.service';
import { ToastService } from 'src/app/providers/toast-service/toast.service';
import { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnDestroy {
  public dataSource: any = {};
  public displayedColumns: string[] = ['id', 'userName', 'email', 'status', 'actions'];
  subscription: Subscription;

  constructor(
    private restApiService: RestApiService,
    private dataExchange: DialogDataExchange,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private swaService: SweetAlertService,
    private toastService: ToastService,
  ) {
    this.getUsers();

    this.subscription = this.dataExchange.getMessage().subscribe(res => {
      if (res.updated || res.created) {
        this.getUsers();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public modifyOne(data: IUser): void {
    this.router.navigate(['actualizar', data._id], { relativeTo: this.activatedRouter });
  }

  public deleteOne(data: IUser): void {
    from(this.swaService.showAlert()).pipe(concatMap((swaRes: SweetAlertResult) => {
      if (swaRes.isConfirmed) {
        return this.restApiService.delete('user', data._id);
      } else {
        return EMPTY;
      }
    })).subscribe((res: IResponse) => {
      if (res.status === 200) {
        this.toastService.showSuccess();
        this.getUsers();
      }
    });
  }

  public getUsers(page = 0, pageSize = 5): void {
    this.restApiService.get('user/list', null, { page, pageSize }).subscribe((res: IResponse) => {
      this.dataSource = res._data;
    });
  }
}
