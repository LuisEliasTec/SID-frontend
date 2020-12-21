import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee.component';

@Component({
  template: '',
})
export class CreateEmployeeEntryDialogComponent {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.openDialog();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateEmployeeComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
