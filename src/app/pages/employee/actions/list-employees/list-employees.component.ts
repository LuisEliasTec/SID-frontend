import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/ models/user.interface';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss'],
})
export class ListEmployeesComponent implements OnDestroy {
  public dataSource: IUser[] = [];
  public displayedColumns: string[] = ['id', 'name', 'birthDate', 'phoneNumber', 'optionalPhoneNumber', 'email', 'status', 'actions'];
  subscription: Subscription;
  moment = moment;
  value = 'Buscar';

  constructor(
    private restApiService: RestApiService,
    private dataExchange: DialogDataExchange,
    private router: Router,
    private activatedRouter: ActivatedRoute,
  ) {
    this.getEmployees();
    this.subscription = this.dataExchange.getMessage().subscribe(res => {
      console.log(res);
      if (res.updated || res.created) {
        this.getEmployees();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  modify(data) {
    console.log(data);
    this.router.navigate(['actualizar', data._id], { relativeTo: this.activatedRouter });
  }

  delete(data) {
    console.log(data);
    this.restApiService.delete('employee', data._id).subscribe((res) => {
      console.log('sucess deletion');
      this.getEmployees();
    });
  }

  getEmployees() {
    this.restApiService.get('employee/list').subscribe((res) => {
      this.dataSource = res._data;
      console.log('getEmployees', res._data);
    });
  }
  
}
