import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateEmployeeComponent } from './update-employee.component';

@Component({
  template: '',
})
export class UpdateEmployeeEntryDialogComponent {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdateEmployeeComponent, {
      width: '500px',
      data: {
        id: this.route.snapshot.params.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.router.navigate(['/404']);
      } else {
        this.router.navigate(['../../'], { relativeTo: this.route });
      }
    });
  }
}
