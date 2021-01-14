import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AllergyDialogComponent } from './allergy-dialog.component';

@Component({
  template: '',
})
export class AllergyEntryDialogComponent {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.openDialog();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AllergyDialogComponent, {
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
