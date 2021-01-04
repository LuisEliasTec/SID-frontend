import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { IResponse } from 'src/app/ models/response.interface';
import { IEmployee } from 'src/app/ models/employee.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss'],
})
export class ListEmployeesComponent implements OnDestroy {
  public dataSource = new MatTableDataSource();
  public displayedColumns: string[] = ['id', 'name', 'birthDate', 'phoneNumber',
    'optionalPhoneNumber', 'email', 'status', 'actions'];
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

  modify(data): void{
    this.router.navigate(['actualizar', data._id],
      { relativeTo: this.activatedRouter });
  }

  delete(data): void {
    this.restApiService.delete('employee', data._id).subscribe((res) => {
      this.getEmployees();
    });
  }

  public getEmployees(page = 0, pageSize = 5): void {
    this.restApiService.get('employee/list', null, { page, pageSize }).subscribe((res: IResponse) => {
      this.dataSource = res._data;
    });
  }

}
