import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/ models/user.interface';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';

@Component({
  selector: 'app-list-job-titles',
  templateUrl: './list-job-titles.component.html',
  styleUrls: ['./list-job-titles.component.scss'],
})
export class ListJobTitlesComponent implements OnDestroy {
  public dataSource: IUser[] = [];
  public displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  subscription: Subscription;

  constructor(
    private restApiService: RestApiService,
    private dataExchange: DialogDataExchange,
    private router: Router,
    private activatedRouter: ActivatedRoute,
  ) {
    this.getEmployees();
    this.subscription = this.dataExchange.getMessage().subscribe(res => {
      if (res.updated || res.created) {
        this.getEmployees();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  modify(data) {
    this.router.navigate(['actualizar', data._id], { relativeTo: this.activatedRouter });
  }

  delete(data) {
    this.restApiService.delete('job-title', data._id).subscribe((res) => {
      this.getEmployees();
    });
  }

  getEmployees() {
    this.restApiService.get('job-title/list').subscribe((res) => {
      this.dataSource = res._data;
    });
  }
  
}
