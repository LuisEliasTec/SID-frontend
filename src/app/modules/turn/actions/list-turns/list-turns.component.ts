import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/ models/user.interface';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';

@Component({
  selector: 'app-list-turns',
  templateUrl: './list-turns.component.html',
  styleUrls: ['./list-turns.component.scss'],
})
export class ListTurnsComponent implements OnDestroy {
  public dataSource: IUser[] = [];
  public displayedColumns: string[] = ['id', 'name', 'start_hour', 'end_hour', 'actions'];
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
    this.restApiService.delete('turn', data._id).subscribe((res) => {
      this.getEmployees();
    });
  }

  getEmployees() {
    this.restApiService.get('turn/list').subscribe((res) => {
      this.dataSource = res._data;
    });
  }
  
}
