import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PermissionListComponent {
  isThereAnyRole$: Observable<boolean>;
  @Input() roleItem: any = {};

  constructor(
    private dataExchangeService: DialogDataExchange,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
    this.isThereAnyRole$ = dataExchangeService.getMessage();
  }

  assignPermissions(module: string): void {
    this.router.navigate(['agregar-permiso', this.roleItem._id, module], {
      relativeTo: this.actRoute,
    });
  }
}
