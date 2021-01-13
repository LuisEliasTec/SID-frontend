import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';

@Component({
  selector: 'app-role-page',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent {
  public item: any = {};

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private dataExchange: DialogDataExchange
  ) {}

  updateItem(item: any): void {
    this.item = item;
  }

  renameRole(): void {
    this.router.navigate(['renombrar-rol', this.item._id], {
      relativeTo: this.actRoute,
    });
  }
}
