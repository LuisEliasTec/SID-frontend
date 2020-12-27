import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateJobTitleComponent } from './update-job-title.component';

@Component({
  template: '',
})
export class UpdateJobTitleEntryDialogComponent {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdateJobTitleComponent, {
      width: '800px',
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
