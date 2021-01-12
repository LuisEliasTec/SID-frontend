import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { UpdateRoleComponent } from './update-role.component';

@Component({
  template: '',
})
export class UpdateRoleEntryDialogComponent {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdateRoleComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        roleId: this.route.snapshot.params.roleId,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }
}
