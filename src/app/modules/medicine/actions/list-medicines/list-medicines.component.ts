import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { IResponse } from 'src/app/ models/response.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-medicines',
  templateUrl: './list-medicines.component.html',
  styleUrls: ['./list-medicines.component.scss'],
})
export class ListMedicinesComponent implements OnDestroy {
  public dataSource = new MatTableDataSource();
  public displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  subscription: Subscription;

  constructor(
    private restApiService: RestApiService,
    private dataExchange: DialogDataExchange,
    private router: Router,
    private activatedRouter: ActivatedRoute,
  ) {
    this.getMedicines();
    this.subscription = this.dataExchange.getMessage().subscribe(res => {
      if (res.updated || res.created) {
        this.getMedicines();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  modify(data): void {
    this.router.navigate(['actualizar-medicamento', data._id],
      { relativeTo: this.activatedRouter });
  }

  delete(data): void {
    this.restApiService.delete('medicine', data._id).subscribe((res) => {
      this.getMedicines();
    });
  }

  public getMedicines(page = 0, pageSize = 5): void {
    this.restApiService.get('medicine/list', null,
      { page, pageSize }).subscribe((res: IResponse) => {
      this.dataSource = res._data;
    });
  }

}
