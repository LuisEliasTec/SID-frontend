import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { AddPermissionComponent } from './add-permission.component';

@Component({
  template: '',
})
export class AddPermissionEntryDialogComponent {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPermissionComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        module: this.route.snapshot.params.module,
        roleId: this.route.snapshot.params.roleId,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate(['../../../'], { relativeTo: this.route });
    });
  }

  checkUrl(): void {
    console.log(this.route.snapshot.params);
  }
}
