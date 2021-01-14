import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { IResponse } from 'src/app/ models/response.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-surgeries',
  templateUrl: './list-surgeries.component.html',
  styleUrls: ['./list-surgeries.component.scss'],
})
export class ListSurgeriesComponent implements OnDestroy {
  public dataSource = new MatTableDataSource();
  public displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  subscription: Subscription;

  constructor(
    private restApiService: RestApiService,
    private dataExchange: DialogDataExchange,
    private router: Router,
    private activatedRouter: ActivatedRoute,
  ) {
    this.getSurgeries();
    this.subscription = this.dataExchange.getMessage().subscribe(res => {
      if (res.updated || res.created) {
        this.getSurgeries();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  modify(data): void {
    // this.router.navigate(['actualizar', data._id], { relativeTo: this.activatedRouter });
    this.router.navigate(['actualizar-cirugia', data._id],
      { relativeTo: this.activatedRouter });
  }

  delete(data): void {
    this.restApiService.delete('surgery', data._id).subscribe((res) => {
      this.getSurgeries();
    });
  }

  public getSurgeries(page = 0, pageSize = 5): void {
    this.restApiService.get('surgery/list', null, { page, pageSize }).subscribe((res: IResponse) => {
      this.dataSource = res._data;
    });
  }

}
