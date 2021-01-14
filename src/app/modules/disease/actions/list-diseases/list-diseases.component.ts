import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { IResponse } from 'src/app/ models/response.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-diseases',
  templateUrl: './list-diseases.component.html',
  styleUrls: ['./list-diseases.component.scss'],
})
export class ListDiseasesComponent implements OnDestroy {
  public dataSource = new MatTableDataSource();
  public displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  subscription: Subscription;

  constructor(
    private restApiService: RestApiService,
    private dataExchange: DialogDataExchange,
    private router: Router,
    private activatedRouter: ActivatedRoute,
  ) {
    this.getDiseases();
    this.subscription = this.dataExchange.getMessage().subscribe(res => {
      if (res.updated || res.created) {
        this.getDiseases();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  modify(data): void {
    this.router.navigate(['actualizar-padecimiento', data._id],
      { relativeTo: this.activatedRouter });
  }

  delete(data): void {
    this.restApiService.delete('disease', data._id).subscribe((res) => {
      this.getDiseases();
    });
  }

  public getDiseases(page = 0, pageSize = 5): void {
    this.restApiService.get('disease/list', null,
      { page, pageSize }).subscribe((res: IResponse) => {
      this.dataSource = res._data;
    });
  }

}
