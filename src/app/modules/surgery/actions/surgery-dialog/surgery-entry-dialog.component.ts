import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SurgeryDialogComponent } from './surgery-dialog.component';

@Component({
  template: '',
})
export class SurgeryEntryDialogComponent {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.openDialog();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(SurgeryDialogComponent, {
      width: '800px',
      data: {
        id: this.route.snapshot.params.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (this.route.snapshot.params.id) {
        // Update
        this.router.navigate(['../../'], { relativeTo: this.route });
      } else {
        // Create
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    });
  }
}
