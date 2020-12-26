import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/ models/user.interface';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';

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

  modify(data): void {
    this.router.navigate(['actualizar', data._id], { relativeTo: this.activatedRouter });
  }

  delete(data): void {
    this.restApiService.delete('user', data._id).subscribe((res) => {
      this.getUsers();
    });
  }

  getUsers(page = 0, pageSize = 5): void {
    this.restApiService.get('user/list', null, { page, pageSize }).subscribe((res) => {
      this.dataSource = res._data;
    });
  }
}
